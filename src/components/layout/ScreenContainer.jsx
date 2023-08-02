/* eslint-disable react/prop-types */

import Header from "../header/Header";

export default function ScreenContianer({
  pageTitle,
  children,
  handleAddButton,
  handleOnChange,
}) {
  return (
    <div className="bg-slate-400">
      <Header
        title={pageTitle}
        handleAddButton={(event) => handleAddButton(event)}
        handleOnChange={handleOnChange}
      />
      <div>{children}</div>
    </div>
  );
}
