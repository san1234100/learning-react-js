import { useParams } from "react-router-dom"

const AboutPage = () => {
  const { name } = useParams();
    return (
     <div className="m-10">
      <h4 className="text-xl font-semibold mb-3 text-white">About</h4>
      <div className="bg-white rounded p-10">
        <h5>Welcome {name||"Guest"}, this is about page</h5>
      </div>
     </div>
    )
  }
  
  export default AboutPage