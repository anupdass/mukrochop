import React from 'react'
import { ScrollView } from 'react-native';
import FoodItem from '../components/FoodItem';

import { style } from '../Styles/styles';

import foodData from '../DataFile/foodData';


const Menu = () => {


    return (
        <ScrollView style={style.mainContainer}>
            {
                foodData?.map(fooditem =>
                    <FoodItem
                        key={fooditem.id}
                        option={fooditem.option}
                        title={fooditem.title}
                        ingredientTitle={fooditem.ingredientTitle}
                        menuingrident={fooditem.menuingrident}
                        price={fooditem.price}
                        img={fooditem.img}
                        id={fooditem.id}
                    />
                )
            }
        </ScrollView>
    )
}

export default Menu

