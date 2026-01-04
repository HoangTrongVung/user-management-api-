const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

/**
 * @swagger
 * /users/profile:
 *   put:
 *     summary: Update profile
 *     tags: [User]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Update thành công
 */

// UPDATE PROFILE
router.put('/profile', auth, (req, res) => {
  const userId = req.user.id;
  const { email } = req.body;
  


  res.json({
    message: 'Update profile thành công',
    userId,
    email
  });

});

module.exports = router;
