import {createWriteStream} from 'fs'
import {stdin} from 'process'
import {fileURLToPath} from "url";
import {dirname} from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const write = async () => {
    const writebleStream = createWriteStream(`${__dirname}/files/fileToWrite.txt`, 'utf-8');
    stdin.pipe(writebleStream);
};

await write();