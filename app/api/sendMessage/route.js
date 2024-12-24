import nodemailer from 'nodemailer';
import validator from 'validator';

export async function POST(req) {
  const body = await req.json();
  const locale = await req.headers.get("locale")?.split(',')[0];
  const { firstName, lastName, email, phone, message, reason } = body;

  // Validation
  if (!firstName || !lastName || !email || !phone || !reason) {
    return new Response(JSON.stringify({ error: 'All required fields must be filled.' }), { status: 400 });
  }

  if (!validator.isEmail(email)) {
    return new Response(JSON.stringify({ error: 'Invalid email format.' }), { status: 400 });
  }

  // Email Body Template
  const enBody = `<body lang="en" dir="ltr" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f8f9fa; color: #212529;">
  <div style="max-width: 600px; margin: 20px auto; background: #ffffff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <div style="background: #2dbbab; color: white; padding: 30px; border-radius: 12px 12px 0 0; margin: -20px -20px 20px -20px; text-align: center;">
      <!-- Logo -->
      <img src="${process.env.LOGO_URL || 'https://hypnotek.com/white-logo.png'}" alt="Company Logo" style="max-width: 150px; height: auto; margin-bottom: 15px;">
      <h1 style="margin: 0; font-size: 24px; font-weight: 600;">Hypnotek</h1>
      <p style="margin: 10px 0 0; opacity: 0.9; font-size: 16px;">Received on ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</p>
    </div>

    <div style="padding: 0 20px;">
      <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; text-align: center;">
        <span style="display: block; font-weight: 600; color: #4b5563; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Contact Information</span>
        <div style="font-size: 16px; color: #2dbbab;">
          <strong>${firstName} ${lastName}</strong><br>
          📧 <a href="mailto:${email}" style="color: #2dbbab; text-decoration: none;">${email}</a><br>
          📱 <a href="tel:${phone}" style="color: #2dbbab; text-decoration: none;">${phone || 'Not provided'}</a>
        </div>
      </div>

      <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; text-align: center;">
        <span style="display: block; font-weight: 600; color: #4b5563; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Reason for Contact</span>
        <div style="font-size: 16px; color: #2dbbab;">
          ${reason}
        </div>
      </div>

      <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; text-align: center;">
        <span style="display: block; font-weight: 600; color: #4b5563; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Message</span>
        <div style="background: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; margin-top: 10px; white-space: pre-line; font-size: 16px; color: #2dbbab;">
          ${message || 'No message provided'}
        </div>
      </div>

      <div style="margin-top: 30px; padding: 15px; background: #f8f9fa; border-radius: 8px; font-size: 14px; color: #6b7280; text-align: center;">
        <p style="margin: 5px 0;">🕒 Timestamp: ${new Date().toISOString()}</p>
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 13px; color: #6b7280; text-align: center;">
        <p>This is an automated message from your contact form system.</p>
        <p>You can reply directly to this email to respond to ${firstName}.</p>
        <!-- Logo in footer -->
        <img src="${process.env.LOGO_URL || 'https://hypnotek.com/white-logo.png'}" alt="Company Logo" style="max-width: 100px; height: auto; margin-top: 15px; opacity: 0.7;">
      </div>
    </div>
  </div>
</body>`;

  const arBody = `
<body  lang="ar" dir="rtl" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f8f9fa; color: #212529;">
  <div style="max-width: 600px; margin: 20px auto; background: #ffffff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <div style="background: #2dbbab; color: white; padding: 30px; border-radius: 12px 12px 0 0; margin: -20px -20px 20px -20px; text-align: center;">
      <!-- Logo -->
      <img src="${process.env.LOGO_URL || 'https://hypnotek.com/white-logo.png'}" alt="شعار الشركة" style="max-width: 150px; height: auto; margin-bottom: 15px;">
      <h1 style="margin: 0; font-size: 24px; font-weight: 600;">هيبنوتيك</h1>
      <p style="margin: 10px 0 0; opacity: 0.9; font-size: 16px;">تم الاستلام في ${new Date().toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</p>
    </div>

    <div style="padding: 0 20px;">
      <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
        <span style="display: block; font-weight: 600; color: #4b5563; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">معلومات الاتصال</span>
        <div style="font-size: 16px; color: #2dbbab;">
          <strong>${firstName} ${lastName}</strong><br>
          📧 <a href="mailto:${email}" style="color: #2dbbab; text-decoration: none;">${email}</a><br>
          📱 <a href="tel:${phone}" style="color: #2dbbab; text-decoration: none;">${phone || 'لم يتم تقديمه'}</a>
        </div>
      </div>

      <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
        <span style="display: block; font-weight: 600; color: #4b5563; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">سبب الاتصال</span>
        <div style="font-size: 16px; color: #2dbbab;">
          ${reason}
        </div>
      </div>

      <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
        <span style="display: block; font-weight: 600; color: #4b5563; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">الرسالة</span>
        <div style="background: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; margin-top: 10px; white-space: pre-line; font-size: 16px; color: #2dbbab;">
          ${message || 'لم يتم تقديم رسالة'}
        </div>
      </div>

      <div style="margin-top: 30px; padding: 15px; background: #f8f9fa; border-radius: 8px; font-size: 14px; color: #6b7280;">
        <p style="margin: 5px 0;">🕒 الطابع الزمني: ${new Date().toISOString()}</p>
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 13px; color: #6b7280; text-align: center;">
        <p>هذه رسالة تلقائية من نظام نموذج الاتصال الخاص بك.</p>
        <p>يمكنك الرد مباشرة على هذا البريد للرد على ${firstName}.</p>
        <!-- Logo in footer -->
        <img src="${process.env.LOGO_URL || 'https://hypnotek.com/white-logo.png'}" alt="شعار الشركة" style="max-width: 100px; height: auto; margin-top: 15px; opacity: 0.7;">
      </div>
    </div>
  </div>
</body>
`;
  
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_RECEIVER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptionsToUser = {
      from: process.env.EMAIL_RECEIVER,
      to: email,
      replyTo: process.env.EMAIL_RECEIVER,
      subject: `${locale=='ar'?'إرسال نموذج اتصال جديد - السبب:':'New Contact Form Submission - Reason:'} ${reason}`,
      html:locale=='ar'?arBody: enBody,
    };

    const mailOptionsToAdmin = {
      from: email,
      to: process.env.EMAIL_RECEIVER,
      replyTo: email,
      subject: `${locale=='ar'?'إرسال نموذج اتصال جديد - السبب:':'New Contact Form Submission - Reason:'} ${reason}`,
      html:locale=='ar'?arBody: enBody,
    };

    // Sending emails
    await transporter.sendMail(mailOptionsToAdmin);
    await transporter.sendMail(mailOptionsToUser);

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email. Please try again later.' }), { status: 500 });
  }
}
