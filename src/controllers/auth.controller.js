const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const prisma = require('../prisma')

exports.register = async (req, res) => {
  const { email, password } = req.body

  const existed = await prisma.user.findUnique({ where: { email } })
  if (existed) {
    return res.status(409).json({ message: 'Email đã tồn tại' })
  }

  const hashed = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: { email, password: hashed, role: 'USER' }
  })

  res.status(201).json({ message: 'Đăng ký thành công' })
}

exports.login = async (req, res) => {
  const { email, password } = req.body

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    return res.status(401).json({ message: 'Sai email hoặc mật khẩu' })
  }

  const ok = await bcrypt.compare(password, user.password)
  if (!ok) {
    return res.status(401).json({ message: 'Sai email hoặc mật khẩu' })
  }

  const accessToken = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  )

  const refreshToken = jwt.sign(
    { id: user.id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  )

  res.json({
    message: 'Login thành công',
    accessToken,
    refreshToken
  })
}

exports.refreshToken = (req, res) => {
  const { refreshToken } = req.body
  if (!refreshToken) {
    return res.status(401).json({ message: 'Thiếu refresh token' })
  }

  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET
    )

    const newAccessToken = jwt.sign(
      { id: decoded.id },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    )

    res.json({ accessToken: newAccessToken })
  } catch {
    res.status(403).json({ message: 'Refresh token không hợp lệ' })
  }
}
