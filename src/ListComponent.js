import React from 'react';
import ItemComponent from './ItemComponent';

export default function ListComponent(){
    return (
        <div>
            <h2>My List</h2>
            <ul>
                <ItemComponent name={'My item'}/>
                <ItemComponent name={'My item 2'}/>
            </ul>
        </div>
    );
}