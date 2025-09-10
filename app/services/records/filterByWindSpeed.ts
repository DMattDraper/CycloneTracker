/** @module services/records */
import { Record } from "./types/Record";

/**
 * Filters out the Records that never reached the sustained wind speeds required to be considered a hurricane
 * @returns A list of HURDAT2 Records
 */
function filterByWindSpeed(records: Record[]): Record[] {
  const filteredResults = records.filter((record) => {
    let isHurricane = false;

    record.data.forEach((d) => {
      if (d.maxSustainedWinds >= 64) isHurricane = true; // 64 Knots in the minimum sustained windpseed required to qualify as a hurricane. This metric is used instead of the HU status to allow for flexibility. For example, only displaying category 2 hurricanes and up.
    });

    return isHurricane;
  });

  return filteredResults;
};

export default filterByWindSpeed;
