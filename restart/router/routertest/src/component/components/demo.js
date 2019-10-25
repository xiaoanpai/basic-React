import React from 'react'
import {
    Home,
    About,
    Events,
    Products,
    Whoops404
} from './components'

import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom'

window.React = React

const App = () =>
    <HashRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/events" component={Events} />
                <Route path="/Products" component={Products} />
                <Route  component={Whoops404} />
            </Switch>

        </div>
    </HashRouter>

export default App

