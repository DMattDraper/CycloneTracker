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
      if (d.maxSustainedWinds >= 64) isHurricane = true;
    });

    return isHurricane;
  });

  return filteredResults;
};

export default filterByWindSpeed;
