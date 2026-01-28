import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use("*", logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-89f2df23/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-89f2df23/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return c.json({ error: "All fields are required" }, 400);
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ error: "Invalid email address" }, 400);
    }

    // Create a unique ID for the submission
    const timestamp = new Date().toISOString();
    const id = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Store in KV store
    const contactData = {
      id,
      name,
      email,
      subject,
      message,
      timestamp,
      read: false,
    };

    await kv.set(id, contactData);

    console.log(
      `New contact form submission from ${name} (${email}): ${subject}`,
    );

    return c.json({
      success: true,
      message: "Your message has been sent successfully!",
      id,
    });
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return c.json({ error: "Failed to process submission" }, 500);
  }
});

// Get all contact submissions (for admin purposes)
app.get("/make-server-89f2df23/contacts", async (c) => {
  try {
    const contacts = await kv.getByPrefix("contact_");

    // Sort by timestamp, most recent first
    const sortedContacts = contacts.sort((a: any, b: any) => {
      return (
        new Date(b.value.timestamp).getTime() -
        new Date(a.value.timestamp).getTime()
      );
    });

    return c.json({ contacts: sortedContacts });
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    return c.json({ error: "Failed to fetch submissions" }, 500);
  }
});

Deno.serve(app.fetch);
