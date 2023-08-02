import Modal from "../../components/Modal";

function Forme() {
  return (
    <Modal>
      <div>
        <form className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Add Data</h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 mb-2 font-bold text-sm"
            >
              Name:
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="CNIC"
              className="block text-gray-700 mb-2 font-bold text-sm"
            >
              CNIC:
            </label>
            <input
              type="text"
              placeholder="Enter CNIC"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="Licence"
              className="block text-gray-700 mb-2 font-bold text-sm"
            >
              Licence:
            </label>
            <input
              type="text"
              placeholder="XXXXXXX"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="flex flex-row-reverse mb-4">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-900 font-bold rounded-full py-1 px-2 text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default Forme;
