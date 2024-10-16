import { useState } from "react";
import { Place } from "../types";
import { FlexBox } from "../styles/styles";

function AutoComplete() {
    const [searchPlaces,setSearchPlaces]=useState<Place[]>([])
    const [searchInput,setSearchInput]=useState<string>("")

    const handleSearchString=function(){
        const str=searchInput.replace(" ","%20")
        setSearchInput(str)
    }

    const handleSearchClick=function(){
        async function fetchAutoCompleteApi(){
            const response=await fetch(`https://api.locationiq.com/v1/autocomplete?key=pk.d5db64eb5a20f20885d77eeb352a382a&q=${searchInput}%20&country=IN&limit=5&dedupe=1&`);
            const data=await response.json();
            console.log(data)
            setSearchPlaces(data)
        }
        fetchAutoCompleteApi()
    }
    return <FlexBox>
        <FlexBox>
            <img src="" alt="" />
            <input type="text" value={searchInput} placeholder="Search here" onChange={(e)=>setSearchInput(e.target.value)}/>
            <button onClick={()=>{handleSearchString();handleSearchClick()}}>Click</button>
        </FlexBox>
        <FlexBox>
            { searchPlaces && searchPlaces.length !==0 && searchPlaces.map((place)=>{
                return <FlexBox onClick={()=>console.log(place.display_name)} key={place.place_id}>{place.display_name}</FlexBox>
            })}
        </FlexBox>
    </FlexBox>
}

export default AutoComplete;