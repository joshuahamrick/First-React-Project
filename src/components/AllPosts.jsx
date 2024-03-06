import { useState, useEffect } from "react"
import { getAllPosts } from "../services/getAllPosts.jsx"
import { Post } from "./Post.jsx"
import { FilterBar } from "./FilterBar.jsx"

export const AllPosts = () => {

    const [allPosts, setAllPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [filterByTopic, setFilterByTopic] = useState(0)

    useEffect(() => {
        getAllPosts().then(posts => (
            setAllPosts(posts)
        ))
    },[])
    
    useEffect(() => {
        const foundPosts = allPosts.filter((post) => (
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        ))
        setFilteredPosts(foundPosts)
    },[searchTerm, allPosts])

    useEffect(() => {
        if (filterByTopic) {
            const filteredTopicPosts = allPosts.filter(post => post.topic.id === filterByTopic)
            setFilteredPosts(filteredTopicPosts)
        } else {
            setFilteredPosts(allPosts)
        }
    },[filterByTopic])

    return (
        <>
        <div className="container">
            
            <nav></nav>

            <h1 className="header">Home</h1>

            <FilterBar setSearchTerm={setSearchTerm} 
                        allPosts={allPosts} 
                        setFilterByTopic={setFilterByTopic}/>
            


            {filteredPosts.map(postObj => (
                <Post key={postObj.id} post={postObj} />
                ))}



        </div>
        </>
    )
}
