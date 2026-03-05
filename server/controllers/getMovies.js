import { readFile } from "../dal/readMovies.js";

export async function getMovies(req, res) {
  try {
    const movies = await readFile();
    res.status(200).json({ movies });
  } catch (error) {
    res.json({ error });
  }
}
