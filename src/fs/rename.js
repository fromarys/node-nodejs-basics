import { rename } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const renameFile = async () => {
   const wrongFile = join(__dirname, 'files', 'wrongFilename.txt');
   const correctFile = join(__dirname, 'files', 'wrongFilename.txt');
   await rename(wrongFile, correctFile);
};

await renameFile();