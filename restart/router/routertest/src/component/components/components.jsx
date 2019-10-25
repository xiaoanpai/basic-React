import React from 'react'
import { Link, Route } from 'react-router-dom'

import PageTemplate from './PageTemplate'
import './components.css'

import {
    history,
    services,
    location,
    Component
} from './AboutComponents/AboutComponents'

import Member from './Member'

import AboutMenu from './AboutMenu'
const Home = () =>
    <section>
        <h1>[Home Page]</h1>
        {/* <nav className="navContainer">
            <Link to="about">link to about</Link>
            <Link to="events">link to events</Link>
            <Link to="products">link to products</Link>
        </nav> */}
    </section>

const About = () =>
    <PageTemplate>
        <section>
            <Route component={AboutMenu} />
            <Route exact path="/about" component={Component} />
            <Route exact path="/about/history" component={history} />
            <Route exact path="/about/services" component={services} />
            <Route exact path="/about/location" component={location} />
            <Route exact path="/about/:gender/:state/:city" component={Member} />
            {/* <h1>[About the Company]</h1> */}
        </section>
    </PageTemplate>


const Events = () =>
    <PageTemplate>
        <section>
            <h1>[Events Calendar]</h1>
        </section>
    </PageTemplate>


const Products = () =>
    <PageTemplate>
        <section>
            <h1>[Products Catalog]</h1>
        </section>
    </PageTemplate>


const Whoops404 = ({ location }) =>
    <PageTemplate>
        <div>
            <h1>Resource not found at {location.pathname}</h1>
        </div>
    </PageTemplate>


export {
    Home,
    About,
    Events,
    Products,
    Whoops404
}