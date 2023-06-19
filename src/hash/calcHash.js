import fs from "fs/promises";
import crypto from "crypto";
import {fileURLToPath} from "url";
import {dirname, join} from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH_TO_HASH_FILE = join(__dirname, "files/fileToCalculateHashFor.txt");
const calculateHash = async () => {
    try {
        const fileData = await fs.readFile(
            PATH_TO_HASH_FILE,
            "utf-8"
        );
        const hash = crypto.createHash("sha256").update(fileData).digest("hex");
        console.log(hash);
    } catch (e) {
        console.log(e);
    }
};

await calculateHash();
