import express from "express";

const app = express();
app.use(express.json());

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

const contactSubmissions: ContactSubmission[] = [];

// API contact endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "All fields (name, email, subject, message) are required." 
      });
    }

    // Spam Protection test (very simple check)
    const emailDomain = email.split('@')[1];
    if (!emailDomain || !emailDomain.includes('.')) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid, active email address."
      });
    }

    const newSubmission: ContactSubmission = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    };

    contactSubmissions.push(newSubmission);
    console.log(`[Vercel api/contact] Received from: ${name} <${email}>. Subject: ${subject}`);

    const resendApiKey = process.env.RESEND_API_KEY;
    let sentWithResend = false;

    if (resendApiKey) {
      try {
        console.log("Resend API Key found on Vercel. Dispatching inquiry email...");
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${resendApiKey}`
          },
          body: JSON.stringify({
            from: "Portfolio Form <onboarding@resend.dev>",
            to: "shreyahossen@gmail.com",
            subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
            html: `
              <div style="font-family: sans-serif; padding: 20px; line-height: 1.6;">
                <h2 style="color: #6B705C;">New Portfolio Message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <hr style="border: 1px solid #D8D8D8;" />
                <p><strong>Message:</strong></p>
                <div style="background-color: #F4F3EF; padding: 15px; border-radius: 8px;">
                  ${message.replace(/\n/g, '<br/>')}
                </div>
              </div>
            `
          })
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Inquiry message successfully dispatched with Resend:", result);
          sentWithResend = true;
        } else {
          console.error("Resend API returned non-200 state:", await response.text());
        }
      } catch (err) {
        console.error("Failed to forward email with Resend flow:", err);
      }
    } else {
      console.log("No RESEND_API_KEY provided in Vercel env. Simulated local delivery.");
    }

    return res.status(200).json({
      success: true,
      message: "Your message has been processed successfully!",
      data: {
        id: newSubmission.id,
        logged: true,
        sentWithResend
      }
    });

  } catch (error: any) {
    console.error("Internal service worker error in contact api:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred writing to our service. Please try again soon."
    });
  }
});

// Analytics helper route for CV download click logs
app.post("/api/analytics/cv-download", (req, res) => {
  console.log(`[Vercel api/analytics/cv-download] Action recorded at ${new Date().toISOString()}`);
  res.json({ success: true, timestamp: new Date().toISOString() });
});

export default app;
