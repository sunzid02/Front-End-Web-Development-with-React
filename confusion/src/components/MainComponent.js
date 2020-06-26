import React, { Component } from 'react';

import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import { DISHES } from '../shared/dishes'
import DishDetail from './DishdetailComponent';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };

    }

    onDishSelect(dishId) {
        // alert(dishId);
        this.setState({
            selectedDish: dishId
        });

    }


    render() {

        return (
            <div>
                <Header></Header>
                <Menu dishes={this.state.dishes}
                    onClick={ (dishId) => this.onDishSelect(dishId) } />

                <DishDetail dish={ this.state.dishes.filter( (dish)=>  dish.id === this.state.selectedDish )[0] } />
                <Footer></Footer>
            </div>
        );

    }

}

export default Main;
