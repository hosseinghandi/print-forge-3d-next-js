import type { ParamValue } from "next/dist/server/request/params";
export const getActiveLink = (
  toEvaluate: string,
  value: string | ParamValue,
): boolean | undefined => value?.includes(toEvaluate);
