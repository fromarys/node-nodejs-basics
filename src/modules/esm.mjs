import path, { dirname } from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import('./files/c.js');
import { createRequire } from 'node:module';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const random = Math.random();
const newRequire = createRequire(import.meta.url);

const filepath = random > 0.5 ? './files/a.json' : './files/b.json'
let unknownObject = newRequire(filepath);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };

