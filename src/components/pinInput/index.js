import ReactPinInput from "react-pin-input";

export const PinInput = ({ isError, width = "50px", length = 6, onChange }) => {
  return (
    <ReactPinInput
      onChange={onChange}
      length={length}
      secret
      initialValue=""
      type="numeric"
      inputMode="number"
      style={{
        padding: "0 8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        columnGap: "10px",
      }}
      inputStyle={{
        width: width,
        height: "50px",
        margin: "0",
        textAlign: "center",
        fontSize: "16px",
        color: "#0a0414",
        border: "1px solid #F0F0F0",
        background: "#F0F0F0",
        borderRadius: "100px",
        borderColor: `${isError ? "red" : "#0A0D14"}`,
      }}
      inputFocusStyle={{
        outline: "1px solid #F0F0F0",
      }}
    />
  );
};
