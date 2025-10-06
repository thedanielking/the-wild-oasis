import { useSearchParams } from "react-router-dom"
import Select from "./Select"

function SortBy({options}) {
    const [searchParams, setSearchParams] = useSearchParams();

    const sortBy = searchParams.get("sortBy") || "";

    //could make this a custom hook(useUrl) that has a function to read url and set url;
    function handleChange(e){
        searchParams.set("sortBy", e.target.value);
        setSearchParams(searchParams);
    }

    return (
        <Select options={options} 
        value={sortBy} 
        type="white" 
        onChange={handleChange} />
    )
}

export default SortBy
