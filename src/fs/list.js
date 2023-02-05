import { readdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const { stdout } = process;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    const folder = join(__dirname, 'files');
    try {
        const files = await readdir(folder);
        stdout.write(files.join('\n'));
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();