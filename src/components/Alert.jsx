import { useState } from "react";
import propTypes from "prop-types"
const Alert = ({text='Unknown',color='primary'}) => {
   
  return (
  <div className={color} role="alert">{text}</div>
  );
};
// Alert.propTypes = {
//     title: propTypes.string,
//     desc: propTypes.string

// }
export default Alert;
