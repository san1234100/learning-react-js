import { useParams } from "react-router-dom";
import Accordion from "../components/Accordion";
import Alert from "../components/Alert";
import Button from "../components/Button";
import Card from "../components/Card";

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
          {/* <Alert text={"Troubleshoot"} color={"success"}/> */}
          {/* <Button className="btn btn-success" type="submit">Submit</Button> */}
        
        </div>
      </div>
      <Card>
      <div className="card-header">
            <img src="./src/assets/images/React_Logo_SVG.svg.png" alt="" />
        </div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="mb-4">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a className="btn btn-primary">
          Go somewhere
        </a>
      </div>
      </Card>
    </div>
  );
};

export default AboutPage;
