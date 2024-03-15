import { useForm } from "react-hook-form";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const userData = (data) => {
    console.log(data);
  };
  return (
    <div className="m-10">
      <div className="bg-white p-10 rounded">
        <h4 className="font-semibold text-xl">Contact Page</h4>
        <form className="mt-10 p-1 space-y-4" onSubmit={handleSubmit(userData)}>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full Name"
            className={`px-4 py-2 rounded bg-gray-200 w-full outline-none ${errors.fullname && 'border-2 border-red-500'}`}
            {...register("fullname", { required: true, maxLength:20, minLength:4})}
          />
          {errors.fullname && (
            <small className="text-red-500">Enter the valid name</small>
          )}
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            className={`px-4 py-2 rounded bg-gray-200 w-full outline-none border-2 ${errors.subject && 'border-2 border-red-500'}`}
            {...register("subject",{required:true})}
          />
          {errors.subject && (
            <small className="text-red-500">Enter the Subject name</small>
          )}

          <textarea
            type="text"
            name="desc"
            id="desc"
            placeholder="Describe the message briefly"
            className="px-4 py-2 rounded bg-gray-200 w-full outline-none"
            {...register("desc")}
          ></textarea>
          <button className="px-4 py-2 bg-green-600 rounded text-white font-medium">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
