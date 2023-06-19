import {isMainThread, Worker} from "worker_threads";
import os from "os";
import {fileURLToPath} from "url";
import {dirname, join} from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH_TO_WORKER = join(__dirname, "worker.js");
const performCalculations = async () => {
    await Promise.allSettled(os.cpus().map((cpu, index) => {
        return new Promise((resolve) => {
            const worker = new Worker(PATH_TO_WORKER)
            worker.on('message', (msg) => {
                resolve(msg)
            })
            worker.postMessage(10 + index);
        })
    })).then((data) => {
        console.log(data)
    })

};

await performCalculations();