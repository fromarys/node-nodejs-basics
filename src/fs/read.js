import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const { stdout } = process;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    try {
        const path = join(__dirname, 'files', 'fileToRead.txt');
        const content = await readFile(path, 'utf-8');
        stdout.write(content);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();