import fs from 'fs/promises';
import {dirname, join} from 'path';
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PATH_TO_REMOVE = join(__dirname,'files/fileToRemove.txt');
const remove = async () => {
    try {
        await fs.rm(PATH_TO_REMOVE)
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await remove();