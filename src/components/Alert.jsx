import { useState } from "react";
import propTypes from "prop-types"
const Alert = ({text='Unknown',color='primary'}) => {
   
  return (
  <div className={color} role="alert">{text}</div>
  );
};
Alert.propTypes = {
    text: propTypes.string,
    color: propTypes.string

}
export default Alert;
