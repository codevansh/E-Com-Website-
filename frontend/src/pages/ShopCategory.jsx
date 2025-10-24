import React from 'react';
import './CSS/shopcategory.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/assets/dropdown_icon.png';
import Item from '../components/item/Item';
//props from shopContext

const ShopCategory = (props) => {
    const { all_products } = React.useContext(ShopContext);
    return (
        <div className='shop-category'>
            <img className='shopCategory-banner' src={props.banner} alt="" />
            <div className="shopCategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopCategory-sort">
                    {/* dropdown Icon here */}
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopCategory-products">
                {all_products.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_Price={item.old_Price} />
                    }
                    else{
                        return null;
                    }
                })}
            </div>
            <div className="shopCategory-loadmore">
                Explore More
            </div>
        </div>
    )
}

export default ShopCategory;