import { unlink } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const remove = async () => {
    const file = join(__dirname, 'files', 'fileToRemove.txt');
    try {
        await unlink(file);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();