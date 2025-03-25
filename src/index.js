import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from './db/index.js'
dotenv.config({
  path: "./.env",
});

const app = express();
const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("<h1> Hello world Raja ji <h1/> ");
// });

// app.listen(port, () => {
//   console.log(`Listen At http://localhost:${port}`);
// });


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})



/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/
