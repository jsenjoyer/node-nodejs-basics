import fs from 'fs/promises';
import {dirname, join} from 'path';
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PATH_TO_FILE = join(__dirname, './files/fresh.txt');
const FILE_EXIST_ERR = 'FILE_EXIST';
const create = async () => {

    try {
        await fs.access(PATH_TO_FILE);
        throw new Error(FILE_EXIST_ERR);
    } catch (e) {
        if (e.message === FILE_EXIST_ERR) {
            throw new Error('FS operation failed');
        }
        await fs.writeFile(PATH_TO_FILE, 'I am fresh and young')
    }
};

await create();