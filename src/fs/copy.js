import { mkdir, readdir, copyFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    const source = join(__dirname, 'files');
    const destination = join(__dirname, 'files_copy');
    try {
        await mkdir(destination);
        const files = await readdir(source);
        for (let file of files) {
            const sourceFile = join(source, file);
            const destinationFile = join(destination, file);
            copyFile(sourceFile, destinationFile);
        }
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await copy();
