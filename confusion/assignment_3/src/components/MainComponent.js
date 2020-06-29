import React, { Component } from 'react';

import Home from './HomeComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';


const mapStateToProps = state => {

    return{
        comments: state.comments,
        dishes: state.dishes,
        leaders: state.leaders,
        promotions: state.promotions,
    }
}       


class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const HomePage = () => {
            return(
                <Home 
                    dish={ this.props.dishes.filter( (dish)=>dish.featured )[0] }
                    promotion={this.props.promotions.filter( (promotion)=>promotion.featured )[0] }
                    leader={this.props.leaders.filter( (leader)=>leader.featured )[0] }
                />
            );
        };

        const AboutUsPage = () => {
            return(
                <About 
                    leaders={this.props.leaders}
                />
            );
        };


        const DishWithId = ({match}) => {
            return(
                <DishDetail 
                
                dish={this.props.dishes.filter( (dish) => dish.id === parseInt(match.params.dishId, 10))[0] } 
                comments={this.props.comments.filter( (comment) => comment.dishId === parseInt(match.params.dishId, 10)) } 
                
                
                />
            );
        };



        return (
            <div>
                <Header></Header>

                <Switch>
                    <Route path="/home" component={ HomePage } />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/> }/>

                    <Route path="/menu/:dishId" component={DishWithId} />

                    <Route exact path="/contactus" component={Contact } />
                    <Route exact path="/aboutus" component={ AboutUsPage } />
                   
                    {/* if url dosesnt match, bydefault redirect to */}
                    <Redirect to="/home" />
                </Switch>

                <Footer></Footer>
            </div> 
        );

    }

}

export default withRouter(connect(mapStateToProps)(Main));


/**
 * 
 * - connect(): generates a wrapper container component that 
 *      subscribe to the store.
 */