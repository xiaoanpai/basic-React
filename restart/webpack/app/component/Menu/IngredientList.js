import React from 'react'
import {Ingredient} from './Ingredient'
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

export {IngredientList}