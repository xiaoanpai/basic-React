import React from 'react'
import { IngredientList } from './IngredientList'
import { Instructions } from './Instructions'
const Recipe = ({ name, ingredients, steps }) =>
    <section id={name.toLowerCase().replace(/ /g, '-')}>
        <h1>{name}</h1>
        <IngredientList list={ingredients} />
        <Instructions title="Cooking Instructoins" steps={steps} />
    </section>

export { Recipe }