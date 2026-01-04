const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ message: 'Thiếu token' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // 🔴 BẮT BUỘC
    req.user = decoded

    next()
  } catch (err) {
    return res.status(401).json({ message: 'Token không hợp lệ' })
  }
}
