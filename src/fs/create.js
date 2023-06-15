import fs from 'fs/promises';

const create = async () => {
    const PATH_TO_FILE = './files/fresh.txt';
    const FILE_EXIST_ERR = 'FILE_EXIST';

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