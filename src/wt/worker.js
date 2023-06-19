import {isMainThread, parentPort, workerData} from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    if (!isMainThread) {
        parentPort.on('message', (msg) => {
            const resultOfCalculation = nthFibonacci(msg);
            parentPort.postMessage({status: 'resolved', data: resultOfCalculation});
            parentPort.close()
        })
    }
};

sendResult();