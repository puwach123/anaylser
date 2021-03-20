import NormalizedResults from '../type/normalize/results';

export default class ResultFilter {
  public static TOPK = (k: number) => (
    nresults: NormalizedResults
  ): NormalizedResults => {
    const topk: NormalizedResults = {};
    for (const league in nresults) {
      const topkt = Object.keys(nresults[league])
        .map(team => nresults[league][team])
        .sort((a, b) => b.win - a.win)
        .slice(0, k);
      topk[league] = {};
      for (const team of topkt) {
        topk[league][team.team] = team;
      }
    }
    return topk;
  };
}
