import { useEffect, useState } from "react";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPosts = await fetch("https://dummyjson.com/posts");
      const postsJson = await fetchedPosts.json();
      setPosts(postsJson.posts);
    };
    fetchPost();
  }, []);
  // console.log(posts);
  const blogPostTemplate = posts.map((post) => {
    return (
      <div
        className="bg-white p-10 rounded flex mb-3 items-center space-x-3"
        key={post.id}
      >
        <img
          src="./src/assets/images/React_Logo_SVG.svg.png"
          className="w-20"
          alt="logo"
        />
        <div className="space-y-1">
          <h4 className="font-semibold text-xl">{post.title}</h4>
          <p>{post.desc}</p>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  fill="currentColor"
                  d="m15 10l-.986-.164A1 1 0 0 0 15 11zM4 10V9a1 1 0 0 0-1 1zm16.522 2.392l.98.196zM6 21h11.36v-2H6zM18.56 9H15v2h3.56zm-2.573 1.164l.805-4.835L14.82 5l-.806 4.836zM14.82 3h-.214v2h.214zm-3.543 1.781L8.763 8.555l1.664 1.11l2.516-3.774zM7.93 9H4v2h3.93zM3 10v8h2v-8zm17.302 8.588l1.2-6l-1.96-.392l-1.2 6zM8.762 8.555A1 1 0 0 1 7.93 9v2a3 3 0 0 0 2.496-1.336zm8.03-3.226A2 2 0 0 0 14.82 3v2zM18.56 11a1 1 0 0 1 .981 1.196l1.961.392A3 3 0 0 0 18.561 9zm-1.2 10a3 3 0 0 0 2.942-2.412l-1.96-.392a1 1 0 0 1-.982.804zM14.606 3a4 4 0 0 0-3.328 1.781l1.664 1.11A2 2 0 0 1 14.606 5zM6 19a1 1 0 0 1-1-1H3a3 3 0 0 0 3 3z"
                ></path>
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M8 10v10"
                ></path>
              </g>
            </svg>
            <p>{post.reactions}</p>
            {post.tags.map(tag => <div key={`${post.id}-${tag}`}>#{tag}</div>)}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="m-10">
      <h4 className="text-white text-2xl py-5 font-semibold">Latest posts</h4>
      {blogPostTemplate}
    </div>
  );
};

export default HomePage;

//  const [tip,setTip] = useState(1)
//     return (
//       <div className="m-10 bg-white p-5 rounded flex justify-between">
//         <h1 className='font-semibold text-xl'>Add a tip!</h1>
//           <div>
//             <span className='text-xl pe-10 font-semibold'>{tip}</span>
//             <button className='px-4 py-2 bg-blue-400 hover:bg-blue-500 font-semibold text-white rounded' onClick={()=>setTip(tip+1)}>Add tip!</button>
//           </div>
//       </div>
//     )
// const [name,setName] = useState("")
// const handleName = (e) =>{
//   const name = e.target.value;
//   if(name.length >= 4){
//     setName(name.charAt(0).toUpperCase() + name.slice(1))
//   }else{
//     setName('')
//   }

// }
// return (
//   <div className="m-10 bg-white p-5 rounded flex justify-between">
//     <h1 className="font-semibold text-xl">Welcome, {name || 'Guest'}</h1>
//     <div>
//       <input
//       type="text"
//       id="name"
//       className="px-4 py-2 bg-gray-100 text-gray-800 outline-none border border-gray-400 rounded"
//        placeholder="Enter your name"
//        autoFocus
//        onChange={handleName}
//        />
//     </div>
//   </div>
// );
