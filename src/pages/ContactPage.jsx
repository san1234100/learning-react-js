import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { useState } from "react";
import FormTextArea from "../components/FormTextArea";
const ContactPage = () => {
 const [form,setForm] = useState({fullName:"",email:"",msg:""})
 const handleInputs = (e) =>{
  const {name,value}= e.target;
  // console.log(name,value);
  setForm({...form,[name]:value});
 }
 const submitFormToServer = (e) =>{
  e.preventDefault();
  console.log(form);
 }
  return (
    <div className="m-10">
      <div className="bg-white p-10 rounded">
        <h4 className="font-semibold text-xl">Contact Page</h4>
        {/* <div>{JSON.stringify(form)}</div> */}
        <form action="" className="mt-4" onSubmit={submitFormToServer}>
        <FormInput
         name={"fullName"}
         label={"Full Name"}
         placeholder={"Enter your name"}
         value={form.fullName}
         handleOnChange={handleInputs}
         type={"text"}
         required
         />
         <FormInput
         name={"email"}
         label={"Email Address"}
         placeholder={"you@gmail.com"}
         value={form.email}
         handleOnChange={handleInputs}
         type={"email"}
         />
         <FormTextArea
          name={"msg"}
          label={"Message"}
          placeholder={"Enter your message"}
          value={form.msg}
          handleOnChange={handleInputs}
         />
        <Button>Save</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
