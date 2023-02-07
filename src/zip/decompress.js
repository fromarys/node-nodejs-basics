import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const decompress = async () => {
    const inputFile = join(__dirname, 'files', 'archive.gz');
    const outputFile = join(__dirname, 'files', 'fileDecompressed.txt');
    const input = createReadStream(inputFile);
    const output = createWriteStream(outputFile);
    const unzip = zlib.createUnzip();

    pipeline(
        input,
        unzip,
        output,
        err => {
            if (err) {
                throw err;
            }
        }
    );
};

await decompress();