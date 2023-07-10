import { useEffect, useState } from "react";
import React from "react";
import "./List.css";

const List = ({ people }) => {
    const [birthdayCount, setBirthdayCount] = useState(0);
    const [peopleList, setPeopleList] = useState(people);

    const clearList = () => {
        setBirthdayCount(0);
        setPeopleList([]);
    }

    useEffect(() => {
        setBirthdayCount("Loading...");

        const timeout = setTimeout(() => {
            setBirthdayCount(peopleList.length);
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div className="section">
            <h3> {birthdayCount} birhdays </h3>
            {peopleList.map((person) => {
                const { id, name, age, image } = person;
                return (
                    <article key={id} className="person">
                        <div className="slika">
                            <img src={image} alt={name}></img>
                        </div>
                        <div className="data">
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                )
            })}

            <button onClick={clearList} className="clear">Clear</button>
        </div>
    )
}


export default Listttt;