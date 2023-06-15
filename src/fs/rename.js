import fs from 'fs/promises';

const rename = async () => {
    try {
        await fs.access('./files/wrongFilename.txt')

        try {
            await fs.access('./files/properFilename.md')

            throw new Error('File already exists');
        } catch (e) {
            if (e.message === 'File already exists') {
                throw new Error();
            }

            await fs.rename('./files/wrongFilename.txt', './files/properFilename.md');
        }
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await rename();