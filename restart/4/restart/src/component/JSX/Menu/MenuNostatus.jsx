import React from 'react'

import { data } from '../static/data_caipu'

const Instructions = ({ title, steps }) =>
    <section className="instructons">
        <h2>{title}</h2>
        {steps.map((s, i) =>
            <p key={i}>{s}</p>
        )}
    </section>

const Ingredient = ({ amount, measurement, name }) =>
    <li>
        <span className="amount">{amount}</span>
        <span className="measurement">{measurement}</span>
        <span className="name">{name}</span>
    </li>

const IngredientList = ({ list }) =>
    <ul className="ingredients">
        {list.map((ingredient, i) =>
            // <Ingredient key={i} {...ingredient} />
            <Ingredient key={i} amount={ingredient.amount}
                measurement={ingredient.measurement}
                name={ingredient.name}
            />
        )}
    </ul>


const Recipe = ({ name, ingredients, steps }) =>
    <section id={name.toLowerCase().replace(/ /g, '-')}>
        <h1>{name}</h1>
        <IngredientList list={ingredients} />
        <Instructions title="Cooking Instructoins" steps={steps} />
    </section>



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


