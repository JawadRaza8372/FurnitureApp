import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import TextInputwithIcon from "../TextInputwithIcon"
function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
     <TextInputwithIcon  onBlur={()=>{setFieldTouched(name)}} onChangeText={handleChange(name)} {...otherProps} />
        <ErrorMessage visible={touched[name]} error={errors[name]}/>
     
    </>
  );
}

export default AppFormField;
