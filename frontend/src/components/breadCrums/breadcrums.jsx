import './breadcrums.css';
import breadcrum_arrow from '../assets/breadcrum_arrow.png';
const BreadCrums = (props) => {
    const { product } = props;
    return (
        <div className="breadcrums">
            HOME <img src={breadcrum_arrow} alt="" />
            SHOP <img src={breadcrum_arrow} alt="" />
            {product.category} <img src={breadcrum_arrow} alt="" />
            {product.name}
        </div>
    )
}

export default BreadCrums