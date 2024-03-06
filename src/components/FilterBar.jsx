export const FilterBar = ({ setSearchTerm, allPosts, setFilterByTopic }) => {
    return ( 
        <div className="search-filter">
            <input type="text"
                    placeholder="Search"
                    className="filter-input"
                    onChange={event => 
                    setSearchTerm(event.target.value)}
            ></input>
            <select className="selector" onChange={event  => setFilterByTopic(parseInt(event.target.value))}>
                <option value="0">Filter by Topic</option>
                {allPosts.map(post => (
                    <option key={post.topic.id} value={post.topic.id}>{post.topic.name}</option>
                ))}
            </select>
        </div>
    )
}