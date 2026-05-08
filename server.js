const app = require('./app')
const PORT = process.env.PORT || 5000

const router = require('./routers/user')
app.use('/user', router)

const authRouter = require('./routers/auth')
app.use('/auth', authRouter)


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})