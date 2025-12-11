import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const { name, email, password } = await request.json();

        // Validate required fields
        if (!name || !email || !password) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Send notification email to signup@qwikshifts.com
        const { data, error } = await resend.emails.send({
            from: "QwikShifts <onboarding@resend.dev>",
            to: ["signup@qwikshifts.com"],
            subject: "New Signup Request",
            html: `
        <h2>New Signup Request</h2>
        <p>A new user has signed up for QwikShifts Cloud:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <p>Please reach out to set up their account.</p>
      `,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: "Failed to send notification email" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "Signup request received", id: data?.id },
            { status: 200 }
        );
    } catch (err) {
        console.error("Signup error:", err);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
