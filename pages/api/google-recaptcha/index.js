const handler = async (req, res) => {
  if (req.method !== 'POST' || !req.body.token) {
    return res.status(400).json({ message: 'Something went wrong.' });
  }

  try {
    const response = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=6Le01q0jAAAAAPZ28imylTXFpnQb6bG1HPkFdjXl&response=${req.body.token}`,
      }
    );

    const reCaptchaRes = await response.json();

    if (reCaptchaRes?.score > 0.5) {
      return res.status(200).json({
        status: 'success',
      });
    } else {
      return res.status(200).json({
        status: 'failure',
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong.',
    });
  }
};

export default handler;
