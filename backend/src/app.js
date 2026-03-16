import express, { json } from "express";
import cors from "cors";
import router from "./routers/router.js";

const app = express();
const port = 5000;
app.use(json());
app.use(cors());

app.get("/health",(_,res)=>{
    try {
        res.json("Good luck for your test")
    } catch (error) {
        res.json(error.message)
    }
})

app.use("/api",router)

app.listen(port, () => {
  console.log(`Server run on http://localhost:${port} `);
});
