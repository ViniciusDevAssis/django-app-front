import React from "react";
import ListComponent from "./ListComponent";

export default function UserLists(){
    return (
        <div>
            <ListComponent listName={'My List'}/>
            <ListComponent listName={'My List 2'}/>
        </div>
    );
}