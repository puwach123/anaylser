import Filter from '../filter/filter';
import JSONExporter from '../exporter/json';
import JSONImporter from '../importer/json';
import Statisticer from '../statisticer/statisticer';
import NormalizedMatches from '../type/normalize/matches';
import NormalizedResults from '../type/normalize/results';

function getResTemplate(
  statisticer: (nmatches: NormalizedMatches) => NormalizedResults,
  filter?: (nmatches: NormalizedMatches) => NormalizedMatches
) {
  return function(ipath: string, opath: string) {
    try {
      const importer = new JSONImporter<NormalizedMatches>(ipath);
      const exporter = new JSONExporter<NormalizedResults>(opath);
      let idata: NormalizedMatches = importer.import();
      if (filter) idata = filter(idata);
      const odata: NormalizedResults = statisticer(idata);
      exporter.export(odata);
    } catch (error) {
      console.error(error);
    }
  };
}

export const getHandicapRes = getResTemplate(Statisticer.getHandicapRes);
export const getAwayHandicapRes = getResTemplate(
  Statisticer.getHandicapRes,
  Filter.onlyAway
);
export const getHostHandicapRes = getResTemplate(
  Statisticer.getHandicapRes,
  Filter.onlyHost
);
export const getLastSixHandicapRes = getResTemplate(
  Statisticer.getHandicapRes,
  Filter.lastSix
);

export const getHiLoRes = getResTemplate(Statisticer.getHiLoRes);
export const getAwayHiLoRes = getResTemplate(
  Statisticer.getHiLoRes,
  Filter.onlyAway
);
export const getHostHiLoRes = getResTemplate(
  Statisticer.getHiLoRes,
  Filter.onlyHost
);
export const getLastSixHiLoRes = getResTemplate(
  Statisticer.getHiLoRes,
  Filter.lastSix
);
