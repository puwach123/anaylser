import JSONExporter from '../exporter/json';
import Filter from '../filter/filter';
import JSONImporter from '../importer/json';
import Statisticer from '../statisticer/statisticer';
import NormalizedMatches from '../type/normalize/matches';
import NormalizedResults from '../type/normalize/results';

export function getHiLoRes(ipath: string, opath: string) {
  try {
    const importer = new JSONImporter<NormalizedMatches>(ipath);
    const exporter = new JSONExporter<NormalizedResults>(opath);
    const idata: NormalizedMatches = importer.import();
    const odata: NormalizedResults = Statisticer.getHiLoRes(idata);
    exporter.export(odata);
  } catch (error) {
    console.error(error);
  }
}

export function getAwayHiLoRes(ipath: string, opath: string) {
  try {
    const importer = new JSONImporter<NormalizedMatches>(ipath);
    const exporter = new JSONExporter<NormalizedResults>(opath);
    const idata: NormalizedMatches = importer.import();
    const filtered: NormalizedMatches = Filter.onlyAway(idata);
    const odata: NormalizedResults = Statisticer.getHiLoRes(filtered);
    exporter.export(odata);
  } catch (error) {
    console.error(error);
  }
}

export function getHostHiLoRes(ipath: string, opath: string) {
  try {
    const importer = new JSONImporter<NormalizedMatches>(ipath);
    const exporter = new JSONExporter<NormalizedResults>(opath);
    const idata: NormalizedMatches = importer.import();
    const filtered: NormalizedMatches = Filter.onlyHost(idata);
    const odata: NormalizedResults = Statisticer.getHiLoRes(filtered);
    exporter.export(odata);
  } catch (error) {
    console.error(error);
  }
}

export function getLastSixHiLoRes(ipath: string, opath: string) {
  try {
    const importer = new JSONImporter<NormalizedMatches>(ipath);
    const exporter = new JSONExporter<NormalizedResults>(opath);
    const idata: NormalizedMatches = importer.import();
    const filtered: NormalizedMatches = Filter.lastSix(idata);
    const odata: NormalizedResults = Statisticer.getHiLoRes(filtered);
    exporter.export(odata);
  } catch (error) {
    console.error(error);
  }
}
