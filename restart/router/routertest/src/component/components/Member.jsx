import React from 'react'
import {withRouter} from 'react-router'
const Member = (e) => {
    console.warn("match:", e)
    return (
        <div>
            <ul>
                <li onClick={() => e.history.goBack()}>gender:{e.match.params.gender}</li>
                <li>state:{e.match.params.state}</li>
                <li>city:{e.match.params.city}</li>
            </ul>
        </div>
    )
}


export default withRouter(Member)