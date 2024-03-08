import FormInput from "../components/FormInput";
import Button from "../components/Button";
const ContactPage = () => {
  const handleOnChange= () =>{
    
  }
  return (
    <div className="m-10">
      <div className="bg-white p-10 rounded">
        <h4 className="font-semibold text-xl">Contact Page</h4>
        <form action="" className="mt-4">
        <FormInput
         name={"fullName"}
         label={"Full Name"}
         placeholder={"Enter your name"}
         handleOnChange={handleOnChange}
         type={"text"}
         />
         <FormInput
         name={"email"}
         label={"Email Address"}
         placeholder={"you@gmail.com"}
         handleOnChange={handleOnChange}
         type={"email"}
         />
        <Button>Save</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
