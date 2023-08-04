/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useGlobalFilter, useTable } from "react-table";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import ScreenContainer from "../layout/ScreenContainer";

function Table({ columns, data, handleAddButton }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );

  return (
    <table className="font-sans border-collapse w-[100%]" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                className="border-solid border-[1px]  text-left p-[8px]"
                {...column.getHeaderProps()}
              >
                {column.render("Header")}
              </th>
            ))}
            <th className="border-solid border-[1px]  text-left p-[8px]">
              Action
            </th>
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    className=" border-solid border-[1px] text-left p-[8px]"
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
              <td className=" border-solid border-[1px] text-left p-[8px]">
                <div className="flex justify-around">
                  <AiOutlineEdit />
                  <AiOutlineDelete />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
