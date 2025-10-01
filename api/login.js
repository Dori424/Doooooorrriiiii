export default function handler(req, res) {
  const allowedPasswords = ["mySecret123", "guestPass", "anotherOne"];
  const { password } = req.query;

  if (allowedPasswords.includes(password)) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
}
