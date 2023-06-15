import { createReadStream, createWriteStream } from 'fs';
import {createGunzip} from 'zlib'
//@Todo add __dirname
const decompress = async () => {
    const readStream = createReadStream('./archive.gz')
    const writeStream = createWriteStream('./files/file.txt','utf-8');
    const unzipStream = createGunzip();
    readStream.pipe(unzipStream).pipe(writeStream);
};

await decompress();