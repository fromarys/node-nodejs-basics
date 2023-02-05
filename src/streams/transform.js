import { Transform } from 'stream';
const { stdin, stdout } = process;
const transform = () => {
    return new Transform({
        transform(chunk, encoding, callback) {
            const chunkToString = chunk.toString();
            const revers = chunkToString.split('').reverse().join('');
            callback(null, revers);
        }
    });
};

const tr = transform();
stdin.pipe(tr).pipe(stdout);