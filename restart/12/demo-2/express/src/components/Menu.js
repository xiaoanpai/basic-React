import React from 'react';
import ReactDOM from 'react-dom';

const data = [
    {
        "name": "A",
        "ingredients": [
            { "name": "a", "amount": 1, "measurement": "1 la" },
            { "name": "aa", "amount": 2, "measurement": "2 la" },
            { "name": "aaa", "amount": 3, "measurement": "3 la" },
        ],
        "steps": [
            "asteps 1",
            "asteps 2",
            "asteps 3",
        ]
    },
    {
        "name": "B",
        "ingredients": [
            { "name": "b", "amount": 1, "measurement": "1 lb" },
            { "name": "bb", "amount": 2, "measurement": "2 lb" },
            { "name": "bbb", "amount": 3, "measurement": "3 lb" },
        ],
        "steps": [
            "bsteps 1",
            "bsteps 2",
            "bsteps 3",
        ]
    },
];

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
    </section>;

const Menu = ({ title, recipes }) =>
    <article>
        <header>{title}</header>
        <div className="recipes">
            {recipes.map((recipe, i) =>
                <Recipe key={i} {...recipe} />
            )}
        </div>
    </article>;

const Test = () =>
    <article>
        <header>Test</header>
    </article>;

export default Menu
// ReactDOM.render(
//     <Menu recipes={data} title="Delicious Recipes" />, 
//     document.getElementById('root')
// );