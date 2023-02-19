import React from "react";
import { table, TableProps } from "./style";

interface Props {
  columns: string[];
  data: {
    id: string;
    bold?: string[];
    color?: { keys: string[]; value: string };
    [key: string]: any;
  }[];
  styleProps?: TableProps;
}

export function Table({ columns, data, styleProps }: Props) {
  const keysToIgnore = ["id", "bold", "color"];
  return (
    <table className={table({ ...styleProps })}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {Object.keys(row)
              .filter((k) => !keysToIgnore.includes(k))
              .map((k, i) => (
                <td
                  key={`${row.id}-${i}`}
                  style={{
                    fontWeight: row.bold?.includes(k) ? "bold" : "normal",
                    color: row.color?.keys.includes(k)
                      ? row.color.value
                      : "initial",
                  }}
                >
                  {row[k]}
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
