import React from 'react';
import { connect ,useSelector } from 'react-redux';
import { buyLaptop, buyMobile, fetchUsers } from '../redux/actions';

import './style.css';

function VShop (props) { 
 let users = useSelector(state => state.users.users)   
    // state = { 
    //     numOfLaptops:100
    //  } 
    //  buyLaptop=()=>{
    //      this.setState({numOfLaptops:this.state.numOfLaptops-1})
    //     };
    
        return (
            <div>
                <h1 className="title"> Welcome to BhaminiShop  using functional component</h1>
                <div className="items">
                    <div className="item">
                        <p>DEll Insprion Laptop</p>
                        <p>Available:{props.numOfLaptops}</p>
                        <button onClick={props.buyLaptop}>BUY Laptop</button>
                    </div>
                    <div className="item">
                        <p>Mobile Insprion </p>
                        <p>Available:{props.numOfMobiles}</p>
                        <button onClick={props.buyMobile}>BUY Mobile</button>
                    </div> 
                    <div className="item">
                        <p>Get User Data </p>
                        <p>count:{users.length}</p>
                        <button onClick={props.fetchUsers}>Call API</button>
                    </div>
                </div>
            </div>
        );
    }


const mapStateToProps = (state) => {
    return {
        numOfLaptops: state.laptops.numOfLaptops,
        numOfMobiles: state.mobiles.numOfMobiles, 
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyLaptop: () => dispatch(buyLaptop()),
        buyMobile: () => dispatch(buyMobile()), 
        fetchUsers:()=> dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VShop);