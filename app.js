import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import "dotenv/config";
import session from 'express-session';
import UserRoutes from './users/routes.js';
import LikesRoutes from "./likes/routes.js";
import FollowsRoutes from "./follows/routes.js";

const CONNECTION_STRING = "mongodb://127.0.0.1:27017/webdevproject";
// this assumes mongodb compass local connection to a db called webdevproject
// for now use the supplied data from A5/A6

mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL,
    })
);
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}

app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
FollowsRoutes(app);
LikesRoutes(app);
app.get('/hello', (req, res) => {res.send('Life is good!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(4000);