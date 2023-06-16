import {isMainThread, Worker, parentPort} from 'worker_threads';
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);

const sendResult = (msg) => {
    const res = nthFibonacci(msg);
    parentPort.postMessage(res);
};
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

if (isMainThread) {
    const worker = new Worker(__filename);
    worker.on('message', (message) => {
        console.log(message);
    })
    worker.postMessage(40)
} else {
    parentPort.on('message', (message) => {
        sendResult(message)
    })
}

