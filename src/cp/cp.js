import { dirname, join } from "node:path";
import { fileURLToPath } from "url";
import { fork } from 'child_process';
import { stdin, stdout} from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    const chilProcess = fork(join(__dirname, 'files', 'script.js'), args);
    await stdin.pipe(chilProcess.stdin);
    await stdout.pipe(chilProcess.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['10', '20', '30', '40', '50']);
