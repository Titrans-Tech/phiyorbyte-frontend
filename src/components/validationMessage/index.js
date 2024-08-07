import React from "react";

const ValidationMessage = ({ name, errors }) => {
  const error = errors[name];

  if (!error) {
    return null;
  }

  return <div className="text-black font-semibold text-sm  w-full">{error.message}</div>;
};

export default ValidationMessage;