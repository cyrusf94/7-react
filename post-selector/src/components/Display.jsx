import React from 'react'
import { useState, useEffect } from 'react'

function Display({ postId }) {
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
            .catch(err => console.log(err))
    }, [])

  return (
    <>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    </>
  )
}

export default Display