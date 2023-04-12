import "../App.css";
import React from "react";
import { useState } from "react";
import data  from "./details";



function ProfileSearch() {
    const [search, setSearch] = useState("");

    
    const ProfileData = data.filter((data) => {
        if (
            typeof data.firstName === "string" &&
            typeof data.lastName === "string" &&
            typeof data.title === "string"
        ) {
            return(
                data.firstName.toLowerCase().includes(search) ||
                data.lastName.toLowerCase().includes(search) ||
                data.title.toLowerCase().includes(search)
            );
        }
        return false;
    })
    const profiles = ProfileData.map((data) => (
        <div className="users">
        <div key={data.id} className="d-flex">
            <img src={data.picture} alt="" />
            <div className="user-text">
                <p>{data.id}</p>
                <div className={`${data.title} ${data.firstName} ${data.last
                }`}>
                    <h3>{`${data.title} ${data.firstName} ${data.lastName}`}</h3>
                </div>
            </div>
        </div>
        </div>
    ));
    return (
        <div className="user">
            <>
                <form action="">
                    <input type="search" name="search" id="" placeholder="Search by name..."
                    onChange={(e) => setSearch(e.target.value)} />
                </form>
            </>
            <div className="usergroup"> {profiles} </div>
        </div>
    )
}
export default ProfileSearch;


// const Search = () => {
//     return (
//         <div>
//             <form action="" className="search">
//                 <input type="search" placeHolder="Search by name..." name="search" id="" />

                
//             </form>
            
//         </div>
//     );
// }
// 