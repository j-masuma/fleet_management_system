import { useEffect, useState, useMemo } from "react";

import Table from "../../components/tables/Table.jsx";
//import axios from "axios";
import Api from "../../api/http.js";
export default function Equipment() {
  const columns = useMemo(
    () => [
      {
        Header: "Drivers Info ",
        columns: [
          {
            Header: "ID",
            accessor: "id_number",
          },
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
          {
            Header: "Email",
            accessor: "email",
          },
          {
            Header: "Department",
            accessor: "department",
          },
          {
            Header: "Date Joined",
            accessor: "dateJoined",
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
      .then((response) => console.log(response));
  }, []);
  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}
