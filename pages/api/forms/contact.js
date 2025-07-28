import { contactEmailData } from '../../../components/emails/contact';
import sendEmail from '../../../lib/func/email/sendEmail';

const handler = async (req, res) => {
  if (req.method !== 'POST')
    return res.status(400).json({ message: 'Something went wrong.' }); // reject if not 'post' req method

  const data = req.body;

  try {
    const info = await sendEmail({
      to: process.env.TO,
      subject: `A New Message From ${data.full_name} | Contact Form`,
      html: contactEmailData(data),
    });
    res.status(200).json({ message: 'Email sent successfully', info });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Email sending failed', error: error.message });
  }

  // const { full_name, phone_no, email, subject, message } = req.body;
};

export default handler;
