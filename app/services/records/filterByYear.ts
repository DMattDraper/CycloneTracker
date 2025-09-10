/** @module services/records */
import { Record } from "./types/Record";

/**
 * Filters out Records from before the given year
 * @returns A list of HURDAT2 Records
 */
function filterByYear(records: Record[], startingYear: number): Record[] {
  const filteredRecords = records.filter((record) => {
    return record.header.year >= startingYear;
  });

  return filteredRecords;
};

export default filterByYear;
