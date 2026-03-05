import { getMovies } from "../controllers/getMovies.js";
import express from "express";

export const moviesRouter = express.Router();

moviesRouter.get("/movies", (req, res) => {
  getMovies(req, res);
});
