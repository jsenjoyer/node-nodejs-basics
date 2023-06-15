import {Transform} from 'stream';
import {stdin, stdout} from 'process'

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split('').reverse().join('') + '\n');
            callback();
        }
    });
    stdin.pipe(transformStream).pipe(stdout);
};

await transform();