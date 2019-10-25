import React from 'react'
import { data } from '../static/data_caipu'
/*
一个用于列出这些菜谱的Menu组件，以及一个用于描述每个菜谱UI的Recipe组件。
一个用于描述每个菜谱UI的Recipe组件。
*/

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

// 菜谱
const Recipe = ({ name, ingredients, steps }) =>
    <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1>{name}</h1>
        <ul className="ingredients">
            {ingredients.map((ingredient, i) =>
                <li key={i}>{ingredient.name}</li>
            )}
        </ul>
        <section className="instructions">
            <h2>Cooking Instructions</h2>
            {steps.map((step, i) =>
                <p key={i}>{step}</p>
            )}
        </section>
    </section>

const MenuComponent = <Menu recipes={data} title="Delicious Recipes" />

export { MenuComponent }