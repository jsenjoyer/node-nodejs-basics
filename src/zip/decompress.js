import {createReadStream, createWriteStream} from 'fs';
import {createGunzip} from 'zlib'
import {fileURLToPath} from "url";
import {dirname, join} from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH = join(__dirname, 'files', 'file.txt');
const PATH_TO_NEW_FILE = join(__dirname, 'archive.gz');
const decompress = async () => {
    const readStream = createReadStream(PATH_TO_NEW_FILE)
    const writeStream = createWriteStream(PATH, 'utf-8');
    const unzipStream = createGunzip();
    readStream.pipe(unzipStream).pipe(writeStream);
};

await decompress();