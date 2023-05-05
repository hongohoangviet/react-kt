import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Category() {
const [posts, setPosts] = useState([])

useEffect(()=> {
  axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=4')
  .then(res =>{
    console.log(res)
    setPosts(res.data)
  })
  .catch(err=> {
    console.log(err)
  })
})

  return (
    <div>
       <div>
        {
          posts.map(post => <div key={post.id}>
            <h1>{post.title}</h1>
            <img src={post.images}/>
          </div>)
        }
        </div> 
    </div>
  )
}
