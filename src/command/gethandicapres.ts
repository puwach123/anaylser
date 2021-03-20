import JSONExporter from '../exporter/json';
import Filter from '../filter/filter';
import JSONImporter from '../importer/json';
import Statisticer from '../statisticer/statisticer';
import NormalizedMatches from '../type/normalize/matches';
import NormalizedResults from '../type/normalize/results';

export function getHandicapRes(ipath: string, opath: string) {
  try {
    const importer = new JSONImporter<NormalizedMatches>(ipath);
    const exporter = new JSONExporter<NormalizedResults>(opath);
    const idata: NormalizedMatches = importer.import();
    const odata: NormalizedResults = Statisticer.getHandicapRes(idata);
    exporter.export(odata);
  } catch (error) {
    console.error(error);
  }
}

export function getAwayHandicapRes(ipath: string, opath: string) {
  try {
    const importer = new JSONImporter<NormalizedMatches>(ipath);
    const exporter = new JSONExporter<NormalizedResults>(opath);
    const idata: NormalizedMatches = importer.import();
    const filtered: NormalizedMatches = Filter.onlyAway(idata);
    const odata: NormalizedResults = Statisticer.getHandicapRes(filtered);
    exporter.export(odata);
  } catch (error) {
    console.error(error);
  }
}

export function getHostHandicapRes(ipath: string, opath: string) {
  try {
    const importer = new JSONImporter<NormalizedMatches>(ipath);
    const exporter = new JSONExporter<NormalizedResults>(opath);
    const idata: NormalizedMatches = importer.import();
    const filtered: NormalizedMatches = Filter.onlyHost(idata);
    const odata: NormalizedResults = Statisticer.getHandicapRes(filtered);
    exporter.export(odata);
  } catch (error) {
    console.error(error);
  }
}

export function getLastSixHandicapRes(ipath: string, opath: string) {
  try {
    const importer = new JSONImporter<NormalizedMatches>(ipath);
    const exporter = new JSONExporter<NormalizedResults>(opath);
    const idata: NormalizedMatches = importer.import();
    const filtered: NormalizedMatches = Filter.lastSix(idata);
    const odata: NormalizedResults = Statisticer.getHandicapRes(filtered);
    exporter.export(odata);
  } catch (error) {
    console.error(error);
  }
}
