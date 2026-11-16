import { NextResponse } from "next/server";
import { getCheckoutProduct } from "@/data/products";
import { getSiteUrl, getStripe } from "@/lib/stripe";

type CheckoutBody = {
  productId?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CheckoutBody;
    const productId = body.productId?.trim();

    if (!productId) {
      return NextResponse.json(
        { error: "Missing productId" },
        { status: 400 },
      );
    }

    const product = getCheckoutProduct(productId);
    if (!product) {
      return NextResponse.json({ error: "Unknown product" }, { status: 404 });
    }

    const stripe = getStripe();
    const siteUrl = getSiteUrl();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      submit_type: "pay",
      billing_address_collection: "auto",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: product.priceCents,
            product_data: {
              name: product.name,
              description: product.benefit,
            },
          },
        },
      ],
      success_url: `${siteUrl}/?checkout=success#products`,
      cancel_url: `${siteUrl}/?checkout=cancel#products`,
      metadata: {
        productId: product.id,
        productName: product.name,
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Checkout session missing redirect URL" },
        { status: 500 },
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("[checkout]", error);
    return NextResponse.json(
      { error: "Unable to start checkout" },
      { status: 500 },
    );
  }
}
