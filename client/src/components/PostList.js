import React, {useState, useEffect} from "react"
import { getPosts } from "../services/posts"

export function PostList() {
    const [posts, setPosts] = useState([])
    useEffect(()=> {
        getPosts().then(setPosts)
    }, [])
    return <h1>{JSON.stringify(posts)}</h1>
}