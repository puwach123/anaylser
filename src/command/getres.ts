import Filter from '../filter/filter';
import JSONExporter from '../exporter/json';
import JSONImporter from '../importer/json';
import Statisticer from '../statisticer/statisticer';
import NormalizedMatches from '../type/normalize/matches';
import NormalizedResults from '../type/normalize/results';

type FilterFunc = (nmatches: NormalizedMatches) => NormalizedMatches;
type StatisticFunc = (nmatches: NormalizedMatches) => NormalizedResults;

const getResTmpl = (statisticer: StatisticFunc, ...filters: FilterFunc[]) => (
  ipath: string,
  opath: string
) => {
  try {
    const importer = new JSONImporter<NormalizedMatches>(ipath);
    const exporter = new JSONExporter<NormalizedResults>(opath);
    let idata: NormalizedMatches = importer.import();
    if (filters.length > 0) for (const filter of filters) idata = filter(idata);
    const odata: NormalizedResults = statisticer(idata);
    exporter.export(odata);
  } catch (error) {
    console.error(error);
  }
};

export const getHandicapRes = getResTmpl(Statisticer.getHandicapRes);
export const getAwayHandicapRes = getResTmpl(
  Statisticer.getHandicapRes,
  Filter.onlyAway
);
export const getHostHandicapRes = getResTmpl(
  Statisticer.getHandicapRes,
  Filter.onlyHost
);
export const getLastSixHandicapRes = getResTmpl(
  Statisticer.getHandicapRes,
  Filter.lastSix
);

export const getHiLoRes = getResTmpl(Statisticer.getHiLoRes);
export const getAwayHiLoRes = getResTmpl(
  Statisticer.getHiLoRes,
  Filter.onlyAway
);
export const getHostHiLoRes = getResTmpl(
  Statisticer.getHiLoRes,
  Filter.onlyHost
);
export const getLastSixHiLoRes = getResTmpl(
  Statisticer.getHiLoRes,
  Filter.lastSix
);
