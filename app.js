import HelloController
  from "./controllers/hello-controller.js"
import UserController
  from "./controllers/users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'
import express from 'express';
import mongoose from "mongoose";
const app = express()
app.use(cors({
    origin: ["https://tuiter-node-server-app-1ro0.onrender.com","https://a9--sweet-phoenix-f1ed1a.netlify.app", "http://localhost:3000"],
    headers: ["Content-Type"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}));
app.options('*', cors());
app.use(express.json());
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect(DB_CONNECTION_STRING).catch((err) => console.log(err));
HelloController(app);
UserController(app);
TuitsController(app)
//app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT || 8080);