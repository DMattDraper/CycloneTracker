/** @module components/RecordTable */
import React, { JSX } from "react";
import { Table } from "antd";
import Props from "./types";

function RecordTable(props: Props): JSX.Element {
  const { records } = props;

  return (
    <div className="RecordTable">
      <Table
        size="large"
        dataSource={records}
      >
        <Table.Column
          title="Name"
          dataIndex={"name"}
          key="name"
        />
        <Table.Column
          title="Landfall Date"
          dataIndex={"landfallDate"}
          key="landfallDate"
          defaultSortOrder="ascend"
        />
        <Table.Column
          title="Maximum Wind Speed (kn)"
          dataIndex={"maximumWindSpeed"}
          key="maximumWindSpeed"
        />
      </Table>
    </div>
  );
}

export default RecordTable;
