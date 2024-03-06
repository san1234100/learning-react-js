import PropTypes from "prop-types"
const FollowerCard = ({id,fullName,role}) => {
  return (
    <div className="p-5 rounded bg-white m-10" key={id}>
      <img src="./src/assets/images/React_Logo_SVG.svg.png" className="w-32 mx-auto" alt="logo" />
      <div className="text-center mt-5">
        <h4 className="font-semibold text-lg">{fullName}</h4>
        <small>{role}</small>
      </div>
    </div>
  )
}
FollowerCard.PropTypes = {
    id: PropTypes.number,
    fullName: PropTypes.string,
    role: PropTypes.string
}
export default FollowerCard