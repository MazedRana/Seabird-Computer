import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;

if (!RESEND_API_KEY) {
  console.error('RESEND_API_KEY is not configured in environment variables.');
  // Fail early so deployments without secrets don't accidentally use a fallback key.
  throw new Error('RESEND_API_KEY is required');
}

const resend = new Resend(RESEND_API_KEY);

export default async function handler(
  req: { method?: string; body?: Record<string, unknown> },
  res: { status: (code: number) => { json: (payload: unknown) => void } },
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { formType, name, phone, email, nid, message, address, package: pkg, additionalInfo } = req.body;

  try {
    let emailContent = '';
    let subject = '';

    if (formType === 'contact') {
      subject = `📧 New Contact Form Submission from ${name}`;
      emailContent = `
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
                  <tr>
                    <td style="background: linear-gradient(135deg, #0077ff 0%, #00d4ff 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">Seabird Computer</h1>
                      <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">High-Speed Internet Solution Provider</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="color: #1a202c; margin: 0 0 30px 0; font-size: 22px; font-weight: 600;">📧 New Contact Form Submission</h2>
                      <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); border-left: 4px solid #0077ff; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
                        <div style="margin-bottom: 15px;">
                          <span style="color: #718096; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Name</span>
                          <p style="color: #1a202c; margin: 5px 0 0 0; font-size: 16px; font-weight: 500;">${name}</p>
                        </div>
                        <div style="margin-bottom: 15px;">
                          <span style="color: #718096; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</span>
                          <p style="color: #1a202c; margin: 5px 0 0 0; font-size: 16px; font-weight: 500;">${phone}</p>
                        </div>
                        ${email ? `
                        <div style="margin-bottom: 15px;">
                          <span style="color: #718096; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
                          <p style="color: #1a202c; margin: 5px 0 0 0; font-size: 16px; font-weight: 500;">${email}</p>
                        </div>
                        ` : ''}
                        ${message ? `
                        <div>
                          <span style="color: #718096; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Message</span>
                          <p style="color: #1a202c; margin: 10px 0 0 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                        </div>
                        ` : ''}
                      </div>
                      <p style="color: #718096; font-size: 12px; margin: 30px 0 0 0; text-align: center;">This email was automatically sent from the Seabird Computer contact form.</p>
                    </td>
                  </tr>
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
    } else {
      subject = `🔌 New Connection Request from ${name}`;
      emailContent = `
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
                  <tr>
                    <td style="background: linear-gradient(135deg, #0077ff 0%, #00d4ff 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">Seabird Computer</h1>
                      <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">High-Speed Internet Solution Provider</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="color: #1a202c; margin: 0 0 30px 0; font-size: 22px; font-weight: 600;">🔌 New Connection Request</h2>
                      <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); border-left: 4px solid #0077ff; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
                        <h3 style="color: #1a202c; margin: 0 0 20px 0; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Customer Information</h3>
                        <div style="margin-bottom: 15px;">
                          <span style="color: #718096; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</span>
                          <p style="color: #1a202c; margin: 5px 0 0 0; font-size: 16px; font-weight: 500;">${name}</p>
                        </div>
                        <div style="margin-bottom: 15px;">
                          <span style="color: #718096; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</span>
                          <p style="color: #1a202c; margin: 5px 0 0 0; font-size: 16px; font-weight: 500;">${phone}</p>
                        </div>
                        ${email ? `
                        <div style="margin-bottom: 15px;">
                          <span style="color: #718096; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
                          <p style="color: #1a202c; margin: 5px 0 0 0; font-size: 16px; font-weight: 500;">${email}</p>
                        </div>
                        ` : ''}
                        ${nid ? `
                        <div style="margin-bottom: 15px;">
                          <span style="color: #718096; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">National ID (NID)</span>
                          <p style="color: #1a202c; margin: 5px 0 0 0; font-size: 16px; font-weight: 500;">${nid}</p>
                        </div>
                        ` : ''}
                      </div>
                      <div style="background: linear-gradient(135deg, #fff5f5 0%, #ffebee 100%); border-left: 4px solid #ff6b6b; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
                        <h3 style="color: #1a202c; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Location Details</h3>
                        <p style="color: #1a202c; margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${address || 'Not provided'}</p>
                      </div>
                      <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-left: 4px solid #22c55e; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
                        <h3 style="color: #1a202c; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Package Selection</h3>
                        <p style="color: #1a202c; margin: 0; font-size: 18px; font-weight: 600;">${pkg || 'Not specified'}</p>
                      </div>
                      ${additionalInfo ? `
                      <div style="background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%); border-left: 4px solid #f59e0b; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
                        <h3 style="color: #1a202c; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Additional Information</h3>
                        <p style="color: #1a202c; margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${additionalInfo}</p>
                      </div>
                      ` : ''}
                      <p style="color: #718096; font-size: 12px; margin: 30px 0 0 0; text-align: center;">This email was automatically sent from the Seabird Computer connection request form.</p>
                    </td>
                  </tr>
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

    const data = await resend.emails.send({
      from: 'Seabird ISP <onboarding@resend.dev>',
      to: ['mazedrana79@gmail.com'],
      subject: subject,
      html: emailContent,
      replyTo: email || undefined,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}
