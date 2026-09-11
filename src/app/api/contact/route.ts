import { NextRequest, NextResponse } from "next/server";
import { InquirySchema } from "@/lib/validations/inquiry";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate request body with Zod schema
    const validationResult = InquirySchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Honeypot spam protection
    if (data._gotcha && data._gotcha.length > 0) {
      // Silently return success to confuse spam bots
      return NextResponse.json({ success: true, message: "Inquiry received." });
    }

    // In a production deployment with Resend API key configured:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ ... });
    console.log("Valid inquiry received:", {
      name: data.name,
      email: data.email,
      projectType: data.projectType,
      budget: data.budget,
      messageLength: data.message.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Bilal has received your message and will respond promptly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact inquiry:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please reach out directly at contact@bilalmahesaniya.com.",
      },
      { status: 500 }
    );
  }
}
