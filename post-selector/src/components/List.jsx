import React from 'react'
import { useEffect, useState } from 'react'

function List({ setPostId }) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => setPosts(posts))
            .catch(err => console.log(err))
    }, [posts.length < 0])


    return (
        <>
        {console.log(posts)}
        {posts.map(post => <h3 className='posts' key={post.id} onClick={e => {
            e.preventDefault()
            setPostId(post.id)
        }}>{post.title}</h3>)}
        </>
    )
}

export default List