// de len dau tien
const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const rfs = require('rotating-file-stream')
const pagination = require('./middlewares/pagination')

const app = express()

// 1. middlewares ( bodyparser , ... )
app.use(bodyParser.json())
app.use(cors({
  origin: "*",
  "Access-Control-Expose-Headers": "Content-Range",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200,
}))
var accessLogStream = rfs.createStream('access.log', {
  interval: '1d',
  path: path.join(__dirname, 'log')
})
app.use(morgan('combined', { stream: accessLogStream }))
app.use(pagination)

app.use((req, res, next) => {
  console.log('------------------------------------------------------');
  console.log('req', req.method, req.originalUrl);
  console.log('query: ', req.query);
  console.log('params: ', req.params);
  console.log('body: ', req.body);
  //console.log('res', res);
  next();
})

// 2. router

const authRouter = require('./routers/auth')
const accountRouter = require('./routers/account')
const reportsRouter = require("./routers/reports")

app.use('/auth', authRouter)

app.use('/account', accountRouter)
app.use('/reports', reportsRouter)

// app.post('/auth/login', (req, res) => {
//   var username = req.body.username; 
//   var password = req.body.password;

//   res.send({
//     token: "123"
//   })

// })



// app.get('/', (req, res) => {
// 	res.status(200).send('API Server');
// })


//3. error handle middleware
const { errorHandle } = require('./middlewares/errorHandle')
app.use(errorHandle);

//listen
const PORT = process.env.API_PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`API running at ${PORT}`);
  }
})