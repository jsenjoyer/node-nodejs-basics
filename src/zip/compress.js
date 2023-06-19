import {createWriteStream, createReadStream} from 'fs';
import {createGzip} from 'zlib';
import {fileURLToPath} from "url";
import {dirname, join} from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH_TO_COMPRESS_FILE = join(__dirname, 'files', 'fileToCompress.txt');

const compress = async () => {
    const readStream = createReadStream(PATH_TO_COMPRESS_FILE,'utf-8')
    const writeStream = createWriteStream('archive.gz')
    const gzipStream = createGzip();

    readStream.pipe(gzipStream).pipe(writeStream)
};

await compress();