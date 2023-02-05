import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const inputFile = join(__dirname, 'files', 'fileToCompress.txt');
    const outputFile = join(__dirname, 'files', 'archive.gz');
    const input = createReadStream(inputFile, 'utf-8');
    const output = createWriteStream(outputFile);
    const gzip = zlib.createGzip();

    pipeline(
        input,
        gzip,
        output,
        err => {
            if (err) {
                throw err;
            }
        }
    );
};

await compress();