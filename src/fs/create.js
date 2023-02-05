import { writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    try {
        const path = join(__dirname, 'files', 'fresh.txt');
        await writeFile(path, 'I am fresh and young');
    }
    catch (err) {
        throw new Error('FS operation failed');
    }
};

await create();