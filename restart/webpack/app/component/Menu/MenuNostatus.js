import React from 'react'
import {Recipe} from './Recipe'
import { data } from '../static/data_caipu'


const Menu = ({ title, recipes }) => (
    <article>
        <header>
            <h1>{title}</h1>
        </header>
        <div className="recipes">
            {recipes.map((recipe, i) =>
                <Recipe key={i} {...recipe} />
            )}
        </div>
    </article>
)

const Menu_new = <Menu recipes={data} title="Delicious Recipes" />

export { Menu_new }


