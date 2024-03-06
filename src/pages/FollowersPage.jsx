import FollowerCard from "../components/FollowerCard";

const FollowersPage = () => {
  const userData = [
    {id:1,fullName:'Vijay',role:'Actor'},
    {id:2,fullName:'Rajini',role:'Actor'},
    {id:3,fullName:'Trisha',role:'Actress'},
    {id:4,fullName:'Shriram',role:'FullStack Engineer'},
    {id:5,fullName:'Monish',role:'Engineer'},
    {id:6,fullName:'Vignesh',role:'Engineer'}
  ]
  return (
    <div>
      <h1 className="text-white text-2xl text-center py-10 font-semibold">My Team</h1>
  <div className="grid grid-cols-4 gap-5">
   {userData.map(({id,fullName,role})=>{
      return <FollowerCard key={id} fullName={fullName} role={role}/>
   })}
  </div>
    </div>
  )
}

export default FollowersPage;