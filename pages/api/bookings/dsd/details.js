import { bookingEmailData } from '../../../../components/emails/bookings';
import sendEmail from '../../../../lib/func/email/sendEmail';

const handler = async (req, res) => {
  if (req.method !== 'POST')
    return res.status(400).json({ message: 'Something went wrong.' }); // reject if not 'post' req method

  const data = req.body;

  try {
    const info = await sendEmail({
      to: data.booker.email,
      subject: `Booked ${data.activity.name} | Bermuda Diving Center`,
      html: bookingEmailData(data),
    });
    res.status(200).json({ message: 'Email sent successfully', info });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Email sending failed', error: error.message });
  }
};

export default handler;
