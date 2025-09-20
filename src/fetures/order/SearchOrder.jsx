import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
    const [query, setQuery] = useState("")
    
    const navigate = useNavigate();

    function handleSubmit(e) {
      e.preventDeafault();
      if(!query) return 
        navigate(`/order/${query}`);
        setQuery("")
    }
    return (
   <form onSubmit={handleSubmit}>
    <input placeholder="Search the order #" value={query} onChange={(e) => setQuery(e.target.value)}/>
   </form>
  )
};

export default SearchOrder;
