import React, { Component } from "react";
import { Media } from "reactstrap";

class Menu extends Component{

    constructor(props){
        super(props);

        // stores iproperties of this component
        this.state = {
            dishes: [
                {
                    id: 0,
                    name: 'Uthappizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                    id: 1,
                    name: 'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label: '',
                    price: '1.99',
                    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
                },
                {
                    id: 2,
                    name: 'Vadonut',
                    image: 'assets/images/vadonut.png',
                    category: 'appetizer',
                    label: 'New',
                    price: '1.99',
                    description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
                },
                {
                    id: 3,
                    name: 'ElaiCheese Cake',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'dessert',
                    label: '',
                    price: '2.99',
                    description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
                }                
            ],
        };
    }

    render(){
        const menu = this.state.dishes.map((dish) => {
            return (
                <div key={ dish.id } className="col-12 mt-5">    
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={ dish.image } alt={ dispatchEvent.name } />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading> { dish.name }</Media>
                                <p> { dish.description } </p>
                        </Media>
                    </Media>                
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    <Media list>
                        { menu }
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;