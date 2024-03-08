import propTypes from "prop-types"

const FormTextArea = ({name,label,placeholder,handleOnChange,form,required}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name}>{label}{required ? <span className="text-red-500 ms-1">*</span> : ""}</label>
      <textarea
        id={name}
        name={name}
        className="px-4 py-2 rounded bg-gray-200 outline-none"
        value={form}
        onChange={handleOnChange}
        placeholder={placeholder}
        required={required}
      ></textarea>
    </div>
  );
};
FormTextArea.propTypes = {
    name: propTypes.string,
    label: propTypes.string,
    placeholder: propTypes.string,
    type: propTypes.string
}
export default FormTextArea;
