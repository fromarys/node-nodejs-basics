import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const { stdin } = process;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const path = join(__dirname, 'files', 'fileToWrite.txt');
    const content = createWriteStream(path, 'utf-8');
    stdin.on('data', (str) => content.write(str, 'utf-8'));
};

await write();