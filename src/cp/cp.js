import {spawn} from 'child_process';

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', ['./files/script.js', ...args])
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['hello', 'world']);
