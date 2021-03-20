import Match from '../type/match';
import NormalizedMatches from '../type/normalize/matches';

export default class Filter {
  public static onlyHost(nmatches: NormalizedMatches): NormalizedMatches {
    const nhosts: NormalizedMatches = {};
    for (const league in nmatches) {
      nhosts[league] = {};
      for (const team in nmatches[league]) {
        nhosts[league][team] = nmatches[league][team].filter(
          match => match.host === team
        );
      }
    }
    return nhosts;
  }

  public static onlyAway(nmatches: NormalizedMatches): NormalizedMatches {
    const naways: NormalizedMatches = {};
    for (const league in nmatches) {
      naways[league] = {};
      for (const team in nmatches[league]) {
        naways[league][team] = nmatches[league][team].filter(
          match => match.away === team
        );
      }
    }
    return naways;
  }

  public static lastSix(nmatches: NormalizedMatches): NormalizedMatches {
    const nlastsix: NormalizedMatches = {};
    for (const league in nmatches) {
      nlastsix[league] = {};
      for (const team in nmatches[league]) {
        nlastsix[league][team] = nmatches[league][team].slice(0, 6);
      }
    }
    return nlastsix;
  }
}
