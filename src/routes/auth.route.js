const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const authController = require('../controllers/auth.controller')

// REGISTER
router.post('/register', authController.register)

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login thành công
 */


// LOGIN (trả access + refresh token)
router.post('/login', authController.login)


// REFRESH TOKEN
router.post('/refresh-token', (req, res) => {
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
      { id: decoded.id, role: decoded.role },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    )

    res.json({
      message: 'Refresh token thành công',
      accessToken: newAccessToken
    })
  } catch (err) {
    return res.status(403).json({ message: 'Refresh token không hợp lệ' })
  }
})

module.exports = router
