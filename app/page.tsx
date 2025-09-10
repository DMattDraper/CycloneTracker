import React, { JSX } from "react";
import parseRecords from "./services/records/parseRecords";
import filterByYear from "./services/records/filterByYear";
import filterByWindSpeed from "./services/records/filterByWindSpeed";
import filterByLocation from "./services/records/filterByLocation";
import Header from "./components/Header/component";
import RecordTable from "./components/RecordTable/component";
import { Record } from "./services/records/types/Record";
import { TableRecord } from "./services/records/types/TableRecord";
import styles from "./page.module.css";
import createTableRecords from "./services/records/createTableRecords";

export default function Home(): JSX.Element {
  const records: Record[] = parseRecords() // Original records parsed into usable objects
  const recordsFilteredByYear: Record[] = filterByYear(records, 1900); // Records filtered to only include entries from valid years
  const recordsFilteredBySpeed: Record[] = filterByWindSpeed(recordsFilteredByYear); // Records filtered to only include storms qualifying as hurricanes
  const recordsFilteredByLocation: Record[] = filterByLocation(recordsFilteredBySpeed); // Records filtered to only include hurricanes that made landfall in florida
  const tableRecords: TableRecord[] = createTableRecords(recordsFilteredByLocation); // Records processed into a form ready for display

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>CycloneTracker displays every hurricane that has made landfall in Florida since 1900</h1>
          <p>Each row displays the name of the hurricane, the initial date of landfall, and maximum sustained windspeed, measured in knots</p>
          <p>Landfalls are estimated using the bounding coordinates of Florida, and may include some storms that only passed over the water within this area</p>
        </div>
        <RecordTable records={tableRecords} />
      </div>
    </div>
  );
}
