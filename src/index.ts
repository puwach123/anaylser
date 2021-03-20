import { Command } from 'commander';
import {
  getAwayHandicapRes,
  getAwayHiLoRes,
  getHandicapRes,
  getHiLoRes,
  getHostHandicapRes,
  getHostHiLoRes,
  getLastSixHandicapRes,
  getLastSixHiLoRes,
} from './command/getres';

const program = new Command();

program.version('1.0.0').description('Command Line Analyser');

program
  .command('handicap')
  .description('get the result of handicap')
  .option(
    '-i, --ipath <input_file>',
    'specific the path of the input file',
    'C:\\Users\\admin\\Desktop\\anaylser\\src\\data\\matchs.json'
  )
  .option(
    '-o, --opath <out_file>',
    'specific the path of the output file',
    'handicap.json'
  )
  .option('-h, --host', 'cal only host matches')
  .option('-a, --away', 'cal only away matches')
  .option('-l, --lastsix', 'cal only last six matches')
  .action(options => {
    if (options.host) return getHostHandicapRes(options.ipath, options.opath);
    if (options.away) return getAwayHandicapRes(options.ipath, options.opath);
    if (options.lastsix)
      return getLastSixHandicapRes(options.ipath, options.opath);
    return getHandicapRes(options.ipath, options.opath);
  });

program
  .command('hilo')
  .description('get the result of hilo')
  .option(
    '-i, --ipath <input_file>',
    'specific the path of the input file',
    'C:\\Users\\admin\\Desktop\\anaylser\\src\\data\\matchs.json'
  )
  .option(
    '-o, --opath <out_file>',
    'specific the path of the output file',
    'hilo.json'
  )
  .option('-h, --host', 'cal only host matches')
  .option('-a, --away', 'cal only away matches')
  .option('-l, --lastsix', 'cal only last six matches')
  .action(options => {
    if (options.host) return getHostHiLoRes(options.ipath, options.opath);
    if (options.away) return getAwayHiLoRes(options.ipath, options.opath);
    if (options.lastsix) return getLastSixHiLoRes(options.ipath, options.opath);
    return getHiLoRes(options.ipath, options.opath);
  });

program.parse(process.argv);
