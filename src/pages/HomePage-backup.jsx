import blogData from '../data/blog.json'
'https://dummyjson.com/posts'
const HomePage = () => {
  const blogPosts = blogData;

  const blogPostTemplate = blogPosts.map( post => {
    return <div className="bg-white p-10 rounded flex mb-3 items-center space-x-3" key={post.id}>
    <img src={post.img} className="w-20" alt="logo" />
    <div className="space-y-1">
      <h4 className="font-semibold text-xl">{post.title}</h4>
      <p>{post.desc}</p>
    </div>
   </div>
  })
    return (
      <div className="m-10">
     <h4 className="text-white text-2xl py-5 font-semibold">Latest posts</h4>
      { blogPostTemplate }
      </div>
    )
  }
   
  export default HomePage