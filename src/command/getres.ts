import MatchFilter from '../filter/match';
import JSONExporter from '../exporter/json';
import JSONImporter from '../importer/json';
import Statisticer from '../statisticer/statisticer';
import NormalizedMatches from '../type/normalize/matches';
import NormalizedResults from '../type/normalize/results';
import ResultFilter from '../filter/result';

type MatchFilterFunc = (nmatches: NormalizedMatches) => NormalizedMatches;
type ResFilterFunc = (nresults: NormalizedResults) => NormalizedResults;
type StatisticFunc = (nmatches: NormalizedMatches) => NormalizedResults;

const getResTmpl = (
  statisticer: StatisticFunc,
  matchFilters?: MatchFilterFunc[],
  resultFilters?: ResFilterFunc[]
) => (ipath: string, opath: string) => {
  try {
    const importer = new JSONImporter<NormalizedMatches>(ipath);
    const exporter = new JSONExporter<NormalizedResults>(opath);
    let idata: NormalizedMatches = importer.import();
    if (matchFilters && matchFilters.length > 0)
      for (const filter of matchFilters) idata = filter(idata);
    let odata: NormalizedResults = statisticer(idata);
    if (resultFilters && resultFilters.length > 0)
      for (const filter of resultFilters) odata = filter(odata);
    exporter.export(odata);
  } catch (error) {
    console.error(error);
  }
};

export const getHandicapRes = getResTmpl(
  Statisticer.GETHANDICAPRES,
  [],
  [ResultFilter.TOPK(5)]
);
export const getAwayHandicapRes = getResTmpl(
  Statisticer.GETHANDICAPRES,
  [MatchFilter.ONLYAWAY],
  [ResultFilter.TOPK(5)]
);
export const getHostHandicapRes = getResTmpl(
  Statisticer.GETHANDICAPRES,
  [MatchFilter.ONLYHOST],
  [ResultFilter.TOPK(5)]
);
export const getLastSixHandicapRes = getResTmpl(
  Statisticer.GETHANDICAPRES,
  [MatchFilter.LASTSIX],
  [ResultFilter.TOPK(5)]
);

export const getHiLoRes = getResTmpl(
  Statisticer.GETHILORES,
  [],
  [ResultFilter.TOPK(5)]
);
export const getAwayHiLoRes = getResTmpl(
  Statisticer.GETHILORES,
  [MatchFilter.ONLYAWAY],
  [ResultFilter.TOPK(5)]
);
export const getHostHiLoRes = getResTmpl(
  Statisticer.GETHILORES,
  [MatchFilter.ONLYHOST],
  [ResultFilter.TOPK(5)]
);
export const getLastSixHiLoRes = getResTmpl(
  Statisticer.GETHILORES,
  [MatchFilter.LASTSIX],
  [ResultFilter.TOPK(5)]
);
