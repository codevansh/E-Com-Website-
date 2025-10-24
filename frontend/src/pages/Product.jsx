import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import BreadCrums from '../components/breadCrums/breadcrums';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import DescriptionBox from '../components/descriptionbox/DescriptionBox';
import RelatedProducts from '../components/relatedproducts/RelatedProducts'

const Product = () => {
  const { productid } = useParams(); // read product id param from URL
  const { all_products } = useContext(ShopContext);

  const product = all_products.find(e => e.id === Number(productid)); // find product by id

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <BreadCrums product={product} />
      <ProductDisplay {...product} />   
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product;
