import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { dirname, join } from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    const cores = cpus();
    const promises = cores.map((_, idx) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(join(__dirname, 'worker.js'), {
                workerData: idx + 10
            })

            worker.on('message', (msg) => resolve(msg));
            worker.on('exit', (err) => reject(err));
        })
    });
    const result = await Promise.allSettled(promises);
    console.log(result);
};

await performCalculations();