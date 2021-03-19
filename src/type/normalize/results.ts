import Result from '../result';

export default interface NormalizedResults {
  [league: string]: { [team: string]: Result };
}
