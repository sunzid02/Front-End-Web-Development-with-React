import React, { Component } from 'react';

import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';

import { COMMENTS } from '../shared/comments'
import { DISHES } from '../shared/dishes'
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'

import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: COMMENTS,
            dishes: DISHES,
            leaders: LEADERS,
            promotions: PROMOTIONS,
        };

    }

    render() {

        const HomePage = ()=>{
            return(
                <Home 
                    dish={ this.state.dishes.filter( (dish)=>dish.featured )[0] }
                    promotion={this.state.promotions.filter( (promotion)=>promotion.featured )[0] }
                    leader={this.state.leaders.filter( (leader)=>leader.featured )[0] }
                />
            );
        };

        return (
            <div>
                <Header></Header>

                <Switch>
                    <Route path="/home" component={ HomePage } />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/> }/>
                    <Route exact path="/contactus" component={Contact } />
                   
                    {/* if url dosesnt match, bydefault redirect to */}
                    <Redirect to="/home" />
                </Switch>

                <Footer></Footer>
            </div>
        );

    }

}

export default Main;
