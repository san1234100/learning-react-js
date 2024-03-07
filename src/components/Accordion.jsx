import { useState } from "react";
import propTypes from "prop-types"
const Accordion = ({title = 'Unknown',desc = '',...props}) => {
    const [accordionActive,setAccordionActive] = useState(false)
    const toggleAccordion = () =>{
        setAccordionActive(!accordionActive)
    }
  return (
    <div>
      <div
        onClick={toggleAccordion}
        className="p-5 cursor-pointer bg-green-100 rounded-t font-semibold flex items-center justify-between"
      >
        <h4 className="select-none">{title}</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={accordionActive ? "" : "-rotate-90"}
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"
          />
        </svg>
      </div>
      <div className={`p-5 bg-green-50 ${accordionActive ? "" : "hidden"}`}>
        <p>{desc}</p>
        <p>{props.children ? props.children : ''}</p>
      </div>
    </div>
  );
};
Accordion.propTypes = {
    title: propTypes.string,
    desc: propTypes.string

}
export default Accordion;
