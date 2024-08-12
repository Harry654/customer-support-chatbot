import nodemailer from "nodemailer";

export async function sendEmail(
  to: string,
  subject: string,
  text: string,
  html?: string
): Promise<void> {
  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { 
      user: process.env.SMTP_USER, // Your SMTP username
      pass: process.env.SMTP_SECRET, // Your SMTP password
    },
  });

  // Define the email options
  const mailOptions = {
    from: '"Silver Spoons" <no-reply@silverspoons.com>', // Sender address
    to, // Recipient address
    subject, // Subject line
    text, // Plain text body
    html, // HTML body (optional)
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
