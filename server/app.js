import express from "express";
import cors from "cors";
import { moviesRouter } from "./routes/movies.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/api", moviesRouter);
app.listen(port, () => {
  console.log("server run on port", port);
});
 