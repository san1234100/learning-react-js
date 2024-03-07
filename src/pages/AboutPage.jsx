import { useParams } from "react-router-dom";
import Accordion from "../components/Accordion";
import Alert from "../components/Alert";

const AboutPage = () => {
  const { name } = useParams();

  return (
    <div className="m-10">
      <h4 className="text-xl font-semibold mb-3 text-white">About</h4>
      <div className="bg-white rounded p-10">
        <h5>Welcome {name || "Guest"}, this is about page</h5>
      </div>
      <div className="bg-white m-10 p-5 rounded">
        <h1 className="font-semibold text-2xl">FAQ</h1>
        <div className="my-10 space-y-5">
          <Accordion
            title="is your internship is free for all?"
            desc="Yes, is it!"
          />
          <Accordion 
            title="What course are you providing?"
            desc="We are providing FullStack developer"
          />
          {/* Pass parameter like this using props children */}
          <Accordion title="What is your channel name?">
            <p>Welcome to Cyberdude channel</p>
          </Accordion>
          <Alert/>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
