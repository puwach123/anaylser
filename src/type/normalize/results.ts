import NormalizeResult from './result';

export default interface NormalizedResult {
  [lid: string]: NormalizeResult[];
}
