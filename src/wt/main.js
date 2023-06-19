import {isMainThread, Worker} from "worker_threads";
import os from "os";

const performCalculations = async () => {
    await Promise.all(os.cpus().map((cpu, index) => {
        return new Promise((resolve) => {
            const worker = new Worker('./worker.js')
            worker.on('message', (msg) => {
                console.log(msg)
                resolve(msg)
            })
            worker.postMessage(10 + index);
        })
    })).then((data) => {
        console.log(data)
    })

};

await performCalculations();