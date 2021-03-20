import NormalizedMatches from '../type/normalize/matches';

export default class MatchFilter {
  public static ONLYHOST(nmatches: NormalizedMatches): NormalizedMatches {
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

  public static ONLYAWAY(nmatches: NormalizedMatches): NormalizedMatches {
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

  public static LASTSIX(nmatches: NormalizedMatches): NormalizedMatches {
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
