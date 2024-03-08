import propTypes from "prop-types"

const FormInput = ({name,label,placeholder,type,handleOnChange}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        className="px-4 py-2 rounded bg-gray-200 outline-none"
        value=""
        onChange={handleOnChange}
        placeholder={placeholder}
      />
    </div>
  );
};
FormInput.propTypes = {
    name: propTypes.string,
    label: propTypes.string,
    placeholder: propTypes.string,
    type: propTypes.string
}
export default FormInput;
