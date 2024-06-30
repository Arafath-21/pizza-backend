import express from "express";
import "dotenv/config";
import cors from "cors";
import dbConnection from "./dbconnection.js";
import { userRouter } from "./Routers/UserRouter.js";
import { isAuthenticated } from "./auth.js";
import { orderRouter } from "./Routers/OrderRouter.js";

const app = express();
let port = process.env.PORT
app.use(express.json());
app.use(cors());

// dbConnection
dbConnection();
app.get('/',(req,res)=>{
  res.status(200).send('<h1>Hello</h1>')
})
app.listen(port, () => {
  console.log(`server started ${port}`);
});

app.use("/api", userRouter);
app.use("/api", isAuthenticated, orderRouter);
