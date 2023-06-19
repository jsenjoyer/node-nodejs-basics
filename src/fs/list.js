import fs from 'fs/promises';
import {dirname, join} from 'path';
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH_TO_FILES = join(__dirname,'files');
const list = async () => {
    try {
        const files = await fs.readdir(PATH_TO_FILES);
        console.log(files);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await list();