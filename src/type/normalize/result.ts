import Result from "../result";

export default interface NormalizedResult {
  [tid: string]: Result;
}