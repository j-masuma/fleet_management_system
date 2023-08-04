import { useEffect, useState, useMemo } from "react";

import Table from "../../components/tables/Table.jsx";

import Api from "../../api/http.js";
import ScreenContainer from "../../components/layout/ScreenContainer.jsx";

import Modal from "../../components/Modal.jsx";
import Formd from "./Formd.jsx";
export default function Driver() {
  const columns = useMemo(
    () => [
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
    []
  );
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState();
  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    Api()
      .getAllDrivers()
      .then((response) => setData(response));
  }, []);

  const handleAddButton = () => {
    setShowModal(true);
  };

  return (
    <>
      <ScreenContainer
        pageTitle="Drivers Info"
        handleAddButton={handleAddButton}
      >
        <Table
          columns={columns}
          data={data}
          handleAddButton={handleAddButton}
        />
      </ScreenContainer>
      {showModal && (
        <Modal
          isVisible={showModal}
          setShowModal={setShowModal}
          title="Add Drivers"
        >
          <Formd />
        </Modal>
      )}
    </>
  );
}
