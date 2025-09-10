/** @module services/records */
import { isPointInPolygon } from "geolib";
import { Record } from "./types/Record";
import { TableRecord } from "./types/TableRecord";

/**
 * Takes a list of HURDAT2 Records and turns it into simplified entries containing only information displayed on the webpage
 * @returns A list of Table Records
 */
function createTableRecords(records: Record[]): TableRecord[] {
  const tableRecords: TableRecord[] = [];

  records.forEach((record) => {
    const tr: TableRecord = {
      name: '',
      landfallDate: "",
      maximumWindSpeed: 0,
    }

    tr.name = record.header.name;

    record.data.forEach((d) => {
      if (isPointInPolygon({ latitude: d.latitude, longitude: d.longitude }, [ // Landfall occurs and hasn't occured yet
        { latitude: 31.042638, longitude: -79.813569 },
        { latitude: 24.353586, longitude: -79.813569 },
        { latitude: 31.042638, longitude: -87.639377 },
        { latitude: 24.353586, longitude: -87.639377 }
      ]) && tr.landfallDate === "") {
        tr.landfallDate = `${d.date.substring(0,4)}-${d.date.substring(4,6)}-${d.date.substring(6,8)}`;
      }

      if (d.maxSustainedWinds > tr.maximumWindSpeed) tr.maximumWindSpeed = d.maxSustainedWinds // Final result will be max wind speed
    });    


    tableRecords.push(tr);
  });
  
  return tableRecords;
}

export default createTableRecords;
