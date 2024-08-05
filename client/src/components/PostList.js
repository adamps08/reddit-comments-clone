import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { useAsync } from "../hooks/useAsync"
import { getPosts } from "../services/posts"

export function PostList() {
    const { loading, error, value: posts } = useAsync(getPosts)
    return  posts.map(post => {
        return (
            <h1 key={post.id}>
                <Link to= {`/posts/${post.id}`}>{post.title}</Link>
            </h1>
        )
    })
}