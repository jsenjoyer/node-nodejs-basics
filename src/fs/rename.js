import fs from 'fs/promises';
import {dirname, join} from 'path';
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH_TO_WRONG_FILE = join(__dirname, 'files/wrongFilename.txt');
const PATH_TO_PROPER_FILE = join(__dirname, 'files/properFilename.md');
const NEW_FILE_PATH = join(__dirname, 'files/properFilename.md')

const rename = async () => {
    try {
        await fs.access(PATH_TO_WRONG_FILE)

        try {
            await fs.access(PATH_TO_PROPER_FILE)

            throw new Error('File already exists');
        } catch (e) {
            if (e.message === 'File already exists') {
                throw new Error();
            }

            await fs.rename(PATH_TO_WRONG_FILE, NEW_FILE_PATH);
        }
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await rename();