import React, { useState } from "react";

interface RowData {
  id: number;
  key: {
    model: string;
    maker: string;
    year: string;
    transmissionType: string;
  };
}

interface TableProps {
  data: RowData[];
  style: string;
}

const Table: React.FC<TableProps> = ({ data, style }) => {
  const [collapsedRows, setCollapsedRows] = useState<number[]>([]);

  const toggleCollapseRow = (rowId: number) => {
    if (collapsedRows.includes(rowId)) {
      setCollapsedRows(collapsedRows.filter((id) => id !== rowId));
    } else {
      setCollapsedRows([...collapsedRows, rowId]);
    }
  };

  return (
    <table className={`data-table ${style}`}>
      <thead>
        <tr>
          <th>Model</th>
          <th>Maker</th>
          <th>Year</th>
          <th>Transmission Type</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <React.Fragment key={row.id}>
            <tr>
              <td>
                <button onClick={() => toggleCollapseRow(row.id)}>
                  {collapsedRows.includes(row.id) ? "+" : "-"}
                </button>
                {row.key.model}
              </td>
              {!collapsedRows.includes(row.id) && (
                <>
                  <td>{row.key.maker}</td>
                  <td>{row.key.year}</td>
                  <td>{row.key.transmissionType}</td>
                </>
              )}
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
