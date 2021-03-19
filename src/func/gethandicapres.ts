import NormalizedMatches from '../type/normalize/matches';
import NormalizedResults from '../type/normalize/results';
import Result from '../type/result';

const HANDICAPRESULT = {
  win: '贏',
  lose: '輸',
  draw: '走',
};

export default function getHandicapRes(
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
        const subject = match.handicap.charAt(0);
        switch (subject) {
          case HANDICAPRESULT.win:
            result.win++;
            break;
          case HANDICAPRESULT.lose:
            result.lose++;
            break;
          case HANDICAPRESULT.draw:
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
