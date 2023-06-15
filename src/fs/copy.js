import fs from 'fs/promises';
import {join} from 'path';
import {__dirname} from "../utils/index.js";

const copy = async () => {
    const PATH_TO_FILES_FOLDER = join(__dirname, 'files')
    const PATH_TO_FILES_COPY_FOLDER = join(__dirname, 'files_copy')

    try {
        const filesToCopy = await fs.readdir(PATH_TO_FILES_FOLDER);

        await fs.mkdir(PATH_TO_FILES_COPY_FOLDER);

        for (const file of filesToCopy) {
            const filePath = join(PATH_TO_FILES_FOLDER, file);
            const newFilePath = join(PATH_TO_FILES_COPY_FOLDER, file);

            await fs.copyFile(filePath, newFilePath);
        }
    } catch (e) {
        console.log(e)
        throw new Error('FS operation failed');
    }
};

await copy();
