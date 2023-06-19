import {spawn} from 'child_process';
import {dirname, join} from 'path';
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PATH = join(__dirname,'files/script.js');
const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', [PATH, ...args])
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(['hello', 'world']);
