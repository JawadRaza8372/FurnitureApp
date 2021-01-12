import React from "react";
import { useFormikContext } from "formik";

import MyButton from "../MyButton";

function SubmitButton({ title ,...otherProps}) {
  const { handleSubmit } = useFormikContext();

  return <MyButton onPress={handleSubmit}  varient="#F93D3D" textcolor="white" title={title} {...otherProps} />;
}

export default SubmitButton;
