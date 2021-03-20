import Match from '../type/match';
import NormalizedMatches from '../type/normalize/matches';
import NormalizedResults from '../type/normalize/results';
import Result from '../type/result';

export default class Statisticer {
  private static HANDICAPRESULT = {
    win: '贏',
    lose: '輸',
    draw: '走',
  };
  private static HILORESULT = {
    win: '大',
    lose: '小',
    draw: '走',
  };

  private static analysis(
    nmatches: NormalizedMatches,
    analyser: (matches: Match[]) => Result
  ): NormalizedResults {
    const results: NormalizedResults = {};
    for (const league in nmatches) {
      results[league] = {};
      for (const team in nmatches[league]) {
        const result: Result = analyser(nmatches[league][team]);
        result.league = league;
        result.team = team;
        results[league][team] = result;
      }
    }
    return results;
  }

  public static getHandicapRes = (
    nmatches: NormalizedMatches
  ): NormalizedResults =>
    Statisticer.analysis(nmatches, matches => {
      const result: Result = {
        team: '',
        league: '',
        win: 0,
        draw: 0,
        lose: 0,
      };
      for (const match of matches) {
        const subject = match.handicap.charAt(0);
        switch (subject) {
          case Statisticer.HANDICAPRESULT.win:
            result.win++;
            break;
          case Statisticer.HANDICAPRESULT.lose:
            result.lose++;
            break;
          case Statisticer.HANDICAPRESULT.draw:
            result.draw++;
            break;
          default:
            break;
        }
      }
      return result;
    });

  public static getHiLoRes = (nmatches: NormalizedMatches): NormalizedResults =>
    Statisticer.analysis(nmatches, matches => {
      const result: Result = {
        team: '',
        league: '',
        win: 0,
        draw: 0,
        lose: 0,
      };
      for (const match of matches) {
        const subject = match.hilo.charAt(0);
        switch (subject) {
          case Statisticer.HILORESULT.win:
            result.win++;
            break;
          case Statisticer.HILORESULT.lose:
            result.lose++;
            break;
          case Statisticer.HILORESULT.draw:
            result.draw++;
            break;
          default:
            break;
        }
      }
      return result;
    });
}
