import {createWriteStream, createReadStream} from 'fs';
import {createGzip} from 'zlib';

const compress = async () => {
    const readStream = createReadStream('./files/fileToCompress.txt')
    const writeStream = createWriteStream('archive.gz')
    const gzipStream = createGzip();

    readStream.pipe(gzipStream).pipe(writeStream)
};

await compress();