import { argv, stdout } from 'process';

const parseArgs = () => {
    const prexif = '--';
    const args = argv.map((el, i, arr) => {
        if (el.includes(prexif)) return [el.split(prexif)[1], arr[i + 1]];
    }).filter(x => x);
    const str = args.map((el) => `${el[0]} is ${el[1]}`).join(', ');
    stdout.write(str);
};

parseArgs();