import NormalizedMatches from '../type/normalize/matches';
import NormalizedResults from '../type/normalize/results';
import Result from '../type/result';

const HILORESULT = {
  win: '大',
  lose: '小',
  draw: '走',
};

export default function getHiLoRes(
  nmatches: NormalizedMatches
): NormalizedResults {
  const results: NormalizedResults = {};
  for (const league in nmatches) {
    results[league] = {};
    for (const team in nmatches[league]) {
      const result: Result = {
        team: team,
        league: league,
        win: 0,
        draw: 0,
        lose: 0,
      };
      for (const match of nmatches[league][team]) {
        const subject = match.hilo.charAt(0);
        switch (subject) {
          case HILORESULT.win:
            result.win++;
            break;
          case HILORESULT.lose:
            result.lose++;
            break;
          case HILORESULT.draw:
            result.draw++;
            break;
          default:
            break;
        }
      }
      results[league][team] = result;
    }
  }
  return results;
}
