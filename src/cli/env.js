import { env, stdout } from 'process';

const parseEnv = () => {
    const prefix='RSS_';
    const rss = Object.entries(env).filter(x => x[0].startsWith(prefix)).map(x => x.join('='));
    stdout.write(rss.join('; '));
};

parseEnv();