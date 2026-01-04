const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.json())


console.log('INDEX FILE:', __filename)

// import routes
const authRoutes = require('./routes/auth.route')
const adminRoutes = require('./routes/admin.route')
const userRoutes  = require('./routes/user.route')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./swagger')


// mount routes
app.use('/auth', authRoutes)
app.use('/admin', adminRoutes)
app.use('/users', userRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))


app.get('/', (req, res) => {
  res.send('User Management API running')
})

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})
