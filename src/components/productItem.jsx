import './ProductItem.css';
import { Link } from 'react-router-dom';
const ProductItem = ( product ) => {
    const rows = [];
    for (let i = 0; i < product.product.rating; i++) {
        rows.push(i);
    }
    return (
      <div className='item' >
        <div className='imageblock'>
            <img
            className="avatar"
            src={product.product.imagelink}
            style={{ width: 200, height: 200 }}
            alt={product.product.title}
            />
        </div>
        <div className='sideblock'>
            <div className='detailsblock'>
                <h4>{product.product.title}</h4>
                <span>{product.product.category}</span> <br />
                <span>Price : ₹ {product.product.price}</span>
                <div className='rating-star'>
                    <ul className='horizontal-list' style={{listStyle:'none'}}  >
                        {rows.map(item => (
                            <li key={item}> 
                                <span className='gold-star'>&#x2605;</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <span>Rating : {product.product.rating}</span> <br />
                <Link to={`productdetail/${product.product.id}`}>See Detailed Information</Link>
            </div>
        </div>
      </div>
    );
  }; 
  
  export default ProductItem;
