/** @module services/records */
import { isPointInPolygon } from "geolib";
import { Record } from "./types/Record";

/**
 * Filters out the Records that never made landfall in Florida (currently an approximation given the bounding coordinates of the state)
 * @returns A list of HURDAT2 Records
 */
function filterByLocation(records: Record[]): Record[] {
  const filteredResults = records.filter((record) => {
    let isInFlorida = false;

    record.data.forEach((d) => {
      if (isPointInPolygon({ latitude: d.latitude, longitude: d.longitude }, [
        { latitude: 31.042638, longitude: -79.813569 },
        { latitude: 24.353586, longitude: -79.813569 },
        { latitude: 31.042638, longitude: -87.639377 },
        { latitude: 24.353586, longitude: -87.639377 }
      ])) {
        isInFlorida = true;
      }
    });

    return isInFlorida;
  });

  return filteredResults;
}

export default filterByLocation;
