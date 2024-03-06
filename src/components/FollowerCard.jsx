
const FollowerCard = (val) => {
  return (
    <div className="p-5 rounded bg-white m-10" key={val}>
      <img src="./src/assets/images/React_Logo_SVG.svg.png" className="w-32 mx-auto" alt="logo" />
      <div className="text-center mt-5">
        <h4 className="font-semibold text-lg">Shriram</h4>
        <small>FullStack Engineer</small>
      </div>
    </div>
  )
}
export default FollowerCard