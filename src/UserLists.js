import React from "react";
import ListComponent from "./ListComponent";

export default class UserLists extends React.Component{
    state = { lists: null, loading: true }

    async componentDidMount(){
        var url = 'http://127.0.0.1:8000/list/';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({lists: data, loading: false});
    }

    render()
    {
        return (
            <div>
                <ListComponent listName={'My List'}/>
                <ListComponent listName={'My List 2'}/>
            </div>
        );
    }
}