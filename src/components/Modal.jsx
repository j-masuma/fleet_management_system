/* eslint-disable react/prop-types */
function Modal({ setShowModal, children, isVisible = false, title }) {
  return (
    <>
      {isVisible && (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                <h3 className="text-2xl font-bold">{title}</h3>
                <button
                  className="bg-transparent border-0 p-[3px] float-right"
                  onClick={() => setShowModal(false)}
                >
                  <span className="text-white font-bold opacity-7 w-[25px] text-xl block bg-blue-600 hover:bg-blue-800 rounded-full">
                    x
                  </span>
                </button>
              </div>

              <div className="relative p-6 flex-auto">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
