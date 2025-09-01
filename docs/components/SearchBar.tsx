"use client";

import { useState } from "react";

export type SearchParams = {
    location?: string;
    guests?: number;
}

export default function SerchBar({onSearch} : {onSearch: (params: SearchParams) => void}) {
    const [location, setLocation] = useState("");
    const[guests,setGuests] = useState(1);

    return(
        <form
            onSubmit={(e)=>{
                e.preventDefault();
                // alert(`検索条件:場所=${location}, 人数=${guests}`);
                onSearch({ location, guests });
        }}
        style = {{ 
            display:"flex",
            gap:"0.5rem",
            margin: "1rem 0",
            padding: "0,5rem",
            border:"1px solid #ccc", 
            borderRadius:"8px",
        }}
        >
            <input 
                type="text" 
                placeholder="どこへ？" 
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
                style={{ flex: 1, padding:"0,5rem" }}
            />
            <input 
                type="number" 
                min={1} 
                value={guests}
                onChange={(e)=>setGuests(Number(e.target.value))}
                style={{ width:"88px", padding:"0,5rem"}}
            />
            <button type="submit" 
            // style={{
            //     backgroundColor:"crimson",
            //     color:"white",
            //     border:"none",
            //     borderRadius:"4px",
            //     padding:"0.5rem 1rem",
            //     cursor:"pointer",
            // }}>
            /* tailwindowに変更 */
            className="bg-rose-500 text-white border-none rounded-md px-4 py-2 rounded-full hover:bg-rose-600"
            >
                検索
            </button>
        </form>
    );
};