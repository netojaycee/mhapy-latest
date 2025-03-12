import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        // console.log(email, "email")

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        // Replace with your actual Google Form ID and field entry ID
        const formId = process.env.GOOGLE_FORM_ID as string;
        // const fieldId = "entry.123456789"; 
        const fieldId = process.env.FIELD_ID as string;

        // Construct form submission URL
        const formUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;
        console.log(formUrl)

        // Send data to Google Form
        const response = await fetch(formUrl, {
            method: "POST",
            body: new URLSearchParams({ [fieldId]: email }).toString(),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        if (!response.ok) {
            console.log(response)
            throw new Error("Failed to submit to Google Form");
        }

        return NextResponse.json({ message: "Successfully submitted!" }, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Submission failed" }, { status: 500 });
    }
}
