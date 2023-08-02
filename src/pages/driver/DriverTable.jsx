import { useEffect, useState, useMemo } from "react";

import Table from "../../components/tables/Table.jsx";

import Api from "../../api/http.js";
export default function DriverTable() {
  const columns = useMemo(
    () => [
      {
        Header: "Drivers Info ",
        columns: [
          {
            Header: "ID",
            accessor: "id",
          },
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Contact",
            accessor: "contact",
          },

          {
            Header: "CNIC",
            accessor: "cnic",
          },
          {
            Header: "Experience",
            accessor: "experience",
          },
        ],
      },
    ],
    []
  );

  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);
  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    Api()
      .getAllDrivers()
      .then((response) => setData(response));
  }, []);
  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}
