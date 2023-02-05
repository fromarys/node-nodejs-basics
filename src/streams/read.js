import { createReadStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const { stdout } = process;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const path = join(__dirname, 'files', 'fileToRead.txt');
    const content = createReadStream(path, 'utf-8');
    let data = '';
    content.on('data', chunk => data += chunk);
    content.on('end', () => stdout.write(data));
};

await read();