const express = require('express')
const router = express.Router()

const auth = require('../middlewares/auth')
const role = require('../middlewares/role')
const adminController = require('../controllers/admin.controller')

console.log('ADMIN CONTROLLER:', adminController)

/**
 * @swagger
 * /admin/users:
 *   get:
 *     summary: Get all users (ADMIN only)
 *     tags: [Admin]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Danh sách user
 */


router.get(
  '/users',
  auth,
  role('ADMIN'),
  adminController.getAllUsers
)


module.exports = router
