/** @module services/records */
import { Data } from "./types/Data";
import { Header } from "./types/Header";
import { Record } from "./types/Record";
import * as fs from "fs";

/**
 * Parses the raw HURDAT2 file into a list of Records
 * @returns A list of HURDAT2 Records
 */
function parseRecords(): Record[] {
  const headerQueryRegex = /[A-Z]{2}[\d]{2}[\d]{4}/;

  const file: string = fs.readFileSync('app/assets/hurdat2-1851-2024-040425.txt', 'utf-8'); // This regex string fits a format only found with the header line of a cyclone. This allows the data to be easily split up into one record for each cyclone in the HURDAT2 file.
  const lines = file.split('\n')

  const records: Record[] = [];

  let record: Record | undefined = undefined;

  // Parse each line of the file
  lines.forEach((line) => {
    if (headerQueryRegex.test(line)) { // When the regex test returns true, we have reached a new cyclone in the list
      if (record) records.push(record); // If a previous record exists, add it to the array

      const header: Header = { // Substrings determined from the specifications listed in the HURDAT2 Format PDF
        basin: line.substring(0, 2), // All substring values are determined using the extensive format description provided alongside the HURDAT2 file, accounting for the fact that strings are zero-indexed and the substring command is non-inclusive on its upper bounds.
        cycloneNumber: Number(line.substring(2, 4)),
        year: Number(line.substring(4, 8)),
        name: line.substring(18, 28).trim(),
        entries: Number(line.substring(33, 36).trim())
      };

      record = { // The new record is created
        header: header,
        data: []
      }
    } else { // A data entry for an existing cyclone
      const data: Data = {
        date: line.substring(0, 8),
        time: line.substring(10, 14),
        recordIdentifier: line.substring(16, 17),
        status: line.substring(19, 21),
        latitude: Number(line.substring(23, 27)) * (line.substring(27, 28) === "S" ? -1 : 1),
        longitude: Number(line.substring(30, 35)) * (line.substring(35, 36) === "W" ? -1 : 1),
        maxSustainedWinds: Number(line.substring(38, 41).trim()),
        minPressure: Number(line.substring(43, 47).trim()),
        max34kt: {
          northeast: Number(line.substring(49, 53).trim()),
          southeast: Number(line.substring(55, 59).trim()),
          southwest: Number(line.substring(61, 65).trim()),
          northwest: Number(line.substring(67, 71).trim())
        },
        max50kt: {
          northeast: Number(line.substring(73, 77).trim()),
          southeast: Number(line.substring(79, 83).trim()),
          southwest: Number(line.substring(85, 89).trim()),
          northwest: Number(line.substring(91, 95).trim())
        },
        max64kt: {
          northeast: Number(line.substring(97, 101).trim()),
          southeast: Number(line.substring(103, 107).trim()),
          southwest: Number(line.substring(109, 113).trim()),
          northwest: Number(line.substring(115, 119).trim())
        },
        maxWindRadius: Number(line.substring(121, 125).trim())
      };

      if (record) record.data.push(data);
    }
  });

  if (record) records.push(record); // This line ensures that the last record will be included, as the loop will end after its completion.

  return records;
}

export default parseRecords;
