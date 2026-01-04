const prisma = require('../prisma')

exports.getAllUsers = async (req, res) => {
  const page = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 10
  const skip = (page - 1) * limit
  const search = req.query.search || ''

  const users = await prisma.user.findMany({
    where: {
      email: {
        contains: search,
        mode: 'insensitive'
      }
    },
    skip,
    take: limit,
    select: {
      id: true,
      email: true,
      role: true,
      createdAt: true
    }
  })

  res.json({
    page,
    limit,
    search,
    data: users
  })
}
