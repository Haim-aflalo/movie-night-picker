import fs from "fs";

export async function readFile() {
  return JSON.parse(await fs.promises.readFile("./data/movie.json"));
}
