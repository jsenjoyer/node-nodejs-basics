import {createReadStream} from "fs";
import {dirname, join} from 'path';
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PATH_TO_STREAM_FILE = join(__dirname, 'files', 'fileToRead.txt');
const read = async () => {
    const stream = await createReadStream(PATH_TO_STREAM_FILE, "utf-8");
    stream.on("data", (data) => process.stdout.write(data));
};

await read();
