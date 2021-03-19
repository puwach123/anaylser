import JSONExporter from '../exporter/json';
import JSONImporter from '../importer/json';
import Statisticer from '../statisticer/statisticer';
import NormalizedMatches from '../type/normalize/matches';
import NormalizedResults from '../type/normalize/results';

export default function getHiLoRes(ipath: string, opath: string) {
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
