import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import fs from "fs";

// Simple in-memory storage for contact logs for safety/testing
interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

const contactSubmissions: ContactSubmission[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());

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

      // Spam Protection test (very simple server-side throttle simulated check)
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
      console.log(`[Contact Form Received] From: ${name} <${email}>. Subject: ${subject}`);

      // Check if Resend variable is set up. Let's check process.env.RESEND_API_KEY.
      const resendApiKey = process.env.RESEND_API_KEY;
      let sentWithResend = false;

      if (resendApiKey) {
        try {
          console.log("Resend API Key found. Attempting to dispatch email...");
          // We can call Resend endpoint directly using native fetch to keep dependency footprint extremely compact and prevent external crashes.
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
            console.log("Email sent successfully via Resend:", result);
            sentWithResend = true;
          } else {
            console.error("Resend API error:", await response.text());
          }
        } catch (err) {
          console.error("Failed to deliver mail via Resend wrapper:", err);
        }
      } else {
        console.log("No RESEND_API_KEY environment variable configured. Simulating successful local logging delivery.");
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
      console.error("Error in contact route:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred writing to our service. Please try again soon."
      });
    }
  });

  // Analytics helper route for CV download click logs
  app.post("/api/analytics/cv-download", (req, res) => {
    console.log(`[CV Download] Action recorded at ${new Date().toISOString()}`);
    res.json({ success: true, timestamp: new Date().toISOString() });
  });

  // Serve static assets or mount Vite Developer mode
  if (process.env.NODE_ENV !== "production") {
    console.log("Initializing Vite Developer Middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Serving production bundle from dist/...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express server running on http://localhost:${PORT}`);
  });
}

startServer();
