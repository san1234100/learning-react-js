const HomePage = () => {
  const blogPosts = [
    {
      id : 1,
      title : "Anbu is preparing ReactJS Course Material",
      desc : "He is delaying for last few decades!",
      img : "./src/assets/images/React_Logo_SVG.svg.png"
    },
    {
      id : 2,
      title : "Anbu is preparing Hackathon event on 26 Feb 2024",
      desc : "He is organizing this event with 4 industry experts",
      img : "./src/assets/images/React_Logo_SVG.svg.png"
    },
    {
      id : 3,
      title : "Anbu is recruiting people for Internship",
      desc : "He made this internship for education purpose",
      img : "./src/assets/images/React_Logo_SVG.svg.png"
    }
  ]

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