/* eslint-disable react/prop-types */

import Header from "../header/Header";

export default function ScreenContainer({
  pageTitle,
  children,
  handleAddButton,
  handleOnChange,
}) {
  return (
    <div className="bg-white">
      <Header
        title={pageTitle}
        handleAddButton={(event) => handleAddButton(event)}
        handleOnChange={handleOnChange}
      />
      <div>{children}</div>
    </div>
  );
}
