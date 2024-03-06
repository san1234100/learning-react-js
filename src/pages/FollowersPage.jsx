import FollowerCard from "../components/FollowerCard";

const FollowersPage = () => {
  return (
    <div>
      <h1 className="text-white text-2xl text-center py-10 font-semibold">My Team</h1>
  <div className="grid grid-cols-4 gap-5">
   {[1,2,3,4,5,6,7,8,9,10].map(val=>{
      return <FollowerCard key={val}/>
   })}
  </div>
    </div>
  )
}

export default FollowersPage;