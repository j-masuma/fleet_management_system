import { useEffect, useState, useMemo } from "react";

import Table from "../../components/tables/Table.jsx";

import Api from "../../api/http.js";
import ScreenContainer from "../../components/layout/ScreenContainer.jsx";

import Modal from "../../components/Modal.jsx";

import Formv from "./Formv.jsx";
function Vehicle() {
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
        Header: "Model",
        accessor: "model",
      },

      {
        Header: "Availability",
        accessor: "availability",
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
        pageTitle="Vehicles Info"
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
          title="Add Vehicles"
        >
          <Formv />
        </Modal>
      )}
    </>
  );
}

export default Vehicle;
