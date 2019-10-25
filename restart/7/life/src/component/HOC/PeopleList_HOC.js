import React from 'react'
import DataComponents from './DataComponent'
const PeopleList = ({ data }) =>
    <ol>
        {data.map((person, i) => {
            const { first, last } = person.name
            return <li key={i}>{first} {last}</li>
        })}
    </ol>


const RandomMeUsers = DataComponents(
    PeopleList,
    "https://randomuser.me/api/?results=50"
)

// const RandomMeUsersComponent = <RandomMeUsers  count = {10} />



export default RandomMeUsers