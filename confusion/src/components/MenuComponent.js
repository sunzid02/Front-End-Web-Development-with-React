import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay,  CardTitle  } from "reactstrap";

class Menu extends Component{

    constructor(props){
        super(props);



        console.log('Menu component constructed');
        
    }



    render(){
        console.log('renders menu component');
        
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={ dish.id } className="col-12 col-md-5 m-1">    
                    <Card onClick={() => this.props.onClickP(dish.id) }>
                        <CardImg width="100%" src={ dish.image } alt={ dish.name } />
                        <CardImgOverlay>
                            <CardTitle> { dish.name }</CardTitle>
                        </CardImgOverlay>
                    </Card>                
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    { menu }
                </div>
            </div>
        );
    }

    componentDidMount(){
        console.log('Menu component componentDidMounbt is invoked');
        
    }
}

export default Menu;