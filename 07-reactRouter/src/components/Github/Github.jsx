import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://api.github.com/users/shreyash5709')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data);
  //   })
  // },[]); 

  return (
    <div className='bg-gray-600 text-white text-3xl 
    p-4 text-center flex flex-wrap items-center justify-evenly'>
      <img src={data.avatar_url} alt="Git picture" width={300} 
      className="rounded-xl"></img>
      <p>Github Followers : {data.followers}</p>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/shreyash5709');
  return response.json();
}