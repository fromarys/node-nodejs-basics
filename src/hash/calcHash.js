import { createHash } from 'node:crypto'
import { createReadStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const { stdout } = process;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const hash = createHash('sha256');
const calculateHash = async () => {
    try {
        const path = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
        const content = createReadStream(path, 'utf-8');
        content.pipe(hash).setEncoding('hex').pipe(stdout);
    } catch (err) {
        throw err;
    }
};

await calculateHash();