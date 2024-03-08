
import propTypes from "prop-types"
const Button = ({className='btn btn-primary',type='submit',...props}) => {
   
  return (
  <button className={className} type={type}>{props.children}</button>
  );
};
Button.propTypes = {
    text: propTypes.string,
    color: propTypes.string

}
export default Button;
