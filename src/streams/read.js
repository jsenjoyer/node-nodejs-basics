import { createReadStream } from "fs";
import {dirname} from 'path';
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const read = async () => {
  const stream = await createReadStream(`${__dirname}/files/fileToRead.txt`, "utf-8");
  stream.on("data", (data) => process.stdout.write(data));
};

await read();
