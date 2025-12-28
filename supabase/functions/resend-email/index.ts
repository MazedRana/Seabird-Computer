import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  nid?: string;
  address?: string;
  area?: string;
  package?: string;
  billingDate?: string;
  additionalInfo?: string;
  formType: "contact" | "connection";
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      throw new Error("RESEND_API_KEY is not configured in Supabase secrets.");
    }

    const resend = new Resend(RESEND_API_KEY);
    const data: ContactEmailRequest = await req.json();
    console.log("Received email request:", { ...data, formType: data.formType });

    let emailSubject = "";
    let emailHtml = "";

    // Use SENDER_EMAIL from env or default to onboarding
    const senderEmail = Deno.env.get("SENDER_EMAIL") || "onboarding@resend.dev";
    const fromAddress = `Seabird Computer <${senderEmail}>`;

    if (data.formType === "contact") {
      emailSubject = `📧 New Contact Form Submission from ${data.name}`;
      emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; margin: 0; padding: 0; background-color: #f5f7fa;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f7fa; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #0077ff 0%, #00d4ff 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">Seabird Computer</h1>
                      <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">High-Speed Internet Solution Provider</p>
                    </td>
                  </tr>
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="color: #1a202c; margin: 0 0 30px 0; font-size: 22px; font-weight: 600;">📧 New Contact Form Submission</h2>
                      
                      <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); border-left: 4px solid #0077ff; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
                        <div style="margin-bottom: 15px;">
                          <span style="color: #718096; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Name</span>
                          <p style="color: #1a202c; margin: 5px 0 0 0; font-size: 16px; font-weight: 500;">${data.name}</p>
                        </div>
                        <div style="margin-bottom: 15px;">
                          <span style="color: #718096; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</span>
                          <p style="color: #1a202c; margin: 5px 0 0 0; font-size: 16px; font-weight: 500;">${data.phone}</p>
                        </div>
                        ${data.email ? `
                        <div style="margin-bottom: 15px;">
                          <span style="color: #718096; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
                          <p style="color: #1a202c; margin: 5px 0 0 0; font-size: 16px; font-weight: 500;">${data.email}</p>
                        </div>
                        ` : ""}
                        ${data.message ? `
                        <div>
                          <span style="color: #718096; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Message</span>
                          <p style="color: #1a202c; margin: 10px 0 0 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
                        </div>
                        ` : ""}
                      </div>
                      
                      <p style="color: #718096; font-size: 12px; margin: 30px 0 0 0; text-align: center;">This email was automatically sent from the Seabird Computer contact form.</p>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafc; padding: 25px 30px; border-top: 1px solid #e2e8f0; text-align: center;">
                      <p style="color: #718096; font-size: 12px; margin: 0;">
                        © 2025 Seabird Computer. All rights reserved.<br>
                        <span style="color: #0077ff;">House-1/2, Avenue-1 Block-Cha, Section-2, Mirpur, Dhaka 1216</span>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `;
    } else if (data.formType === "connection") {
      emailSubject = `🔌 New Connection Request from ${data.name}`;
      emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Connection Request</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; margin: 0; padding: 0; background-color: #f5f7fa;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f7fa; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #0077ff 0%, #00d4ff 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">Seabird Computer</h1>
                      <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">High-Speed Internet Solution Provider</p>
                    </td>
                  </tr>
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="color: #1a202c; margin: 0 0 30px 0; font-size: 22px; font-weight: 600;">🔌 New Connection Request</h2>
                      
                      <!-- Customer Info -->
                      <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); border-left: 4px solid #0077ff; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
                        <h3 style="color: #1a202c; margin: 0 0 20px 0; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Customer Information</h3>
                        <div style="margin-bottom: 15px;">
                          <span style="color: #718096; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</span>
                          <p style="color: #1a202c; margin: 5px 0 0 0; font-size: 16px; font-weight: 500;">${data.name}</p>
                        </div>
                        <div style="margin-bottom: 15px;">
                          <span style="color: #718096; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</span>
                          <p style="color: #1a202c; margin: 5px 0 0 0; font-size: 16px; font-weight: 500;">${data.phone}</p>
                        </div>
                        ${data.email ? `
                        <div style="margin-bottom: 15px;">
                          <span style="color: #718096; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
                          <p style="color: #1a202c; margin: 5px 0 0 0; font-size: 16px; font-weight: 500;">${data.email}</p>
                        </div>
                        ` : ""}
                        ${data.nid ? `
                        <div style="margin-bottom: 15px;">
                          <span style="color: #718096; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">National ID (NID)</span>
                          <p style="color: #1a202c; margin: 5px 0 0 0; font-size: 16px; font-weight: 500;">${data.nid}</p>
                        </div>
                        ` : ""}
                      </div>
                      
                      <!-- Location -->
                      <div style="background: linear-gradient(135deg, #fff5f5 0%, #ffebee 100%); border-left: 4px solid #ff6b6b; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
                        <h3 style="color: #1a202c; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Location Details</h3>
                        <p style="color: #1a202c; margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${data.address || "Not provided"}</p>
                      </div>
                      
                      <!-- Package -->
                      <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-left: 4px solid #22c55e; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
                        <h3 style="color: #1a202c; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Package Selection</h3>
                        <p style="color: #1a202c; margin: 0; font-size: 18px; font-weight: 600;">${data.package || "Not specified"}</p>
                      </div>
                      
                      <!-- Billing Date -->
                      <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-left: 4px solid #eab308; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
                        <h3 style="color: #1a202c; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Billing Information</h3>
                        <p style="color: #1a202c; margin: 0; font-size: 16px; font-weight: 500;">Preferred Billing Date: <strong>${data.billingDate ? `Day ${data.billingDate} of each month` : "Not specified"}</strong></p>
                        <p style="color: #854d0e; margin: 8px 0 0 0; font-size: 13px; line-height: 1.5;">⚠️ Please ensure payment is received by this date to avoid Radius account expiration and service interruption.</p>
                      </div>
            
            ${data.additionalInfo ? `
                      <!-- Additional Info -->
                      <div style="background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%); border-left: 4px solid #f59e0b; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
                        <h3 style="color: #1a202c; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Additional Information</h3>
                        <p style="color: #1a202c; margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${data.additionalInfo}</p>
                      </div>
            ` : ""}
                      
                      <p style="color: #718096; font-size: 12px; margin: 30px 0 0 0; text-align: center;">This email was automatically sent from the Seabird Computer connection request form.</p>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafc; padding: 25px 30px; border-top: 1px solid #e2e8f0; text-align: center;">
                      <p style="color: #718096; font-size: 12px; margin: 0;">
                        © 2025 Seabird Computer. All rights reserved.<br>
                        <span style="color: #0077ff;">House-1/2, Avenue-1 Block-Cha, Section-2, Mirpur, Dhaka 1216</span>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `;
    }

    const emailResponse = await resend.emails.send({
      from: fromAddress,
      to: ["seabirdisp@gmail.com"],
      subject: emailSubject,
      html: emailHtml,
    });

    console.log("Email sent successfully using:", { from: fromAddress, to: ["mazedrana.seabirdisp@gmail.com", "seabirdisp@gmail.com"] });

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: unknown) {
    console.error("Error in resend-email function:", error);
    const message = error instanceof Error ? error.message : String(error);
    return new Response(
      JSON.stringify({ success: false, error: message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
