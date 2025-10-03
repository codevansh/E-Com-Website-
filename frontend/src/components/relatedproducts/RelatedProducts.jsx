import './RelatedProducts.css'
import {data_product} from '../assets/data'
import Item from '../item/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h2>Related Products</h2>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}  // Keep consistent
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
