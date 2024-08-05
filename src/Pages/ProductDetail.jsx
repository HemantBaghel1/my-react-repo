import { useParams} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductDetail.css'

const ProductDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [link, setLink] = useState("");
    const rows = [];
    for (let i = 0; i < data.rating; i++) {
        rows.push(i);
    }

    useEffect(() => {
        // Fetch data from API 
        axios.get(`https://dummyjson.com/products/${id}`)
        .then(response => { setData(response.data); setLink(response.data.images[0]); console.log(response.data);} )
        .catch( error => { console.error('Error fetching data:', error); } );
    },[id]);

      return(
        <>
            <div className="topdiv">
                <div className="middiv">
                    <div>
                        <img
                        className="avatar"
                        src={link}
                        style={{ width: 'auto', height: 400 }}
                        alt={data.title}
                        />
                    </div>
                </div>
                <div className="detailsblock">
                    <p className="heading">Product Details</p>  <br />
                    
                    <span className="sub"> Ratings : </span>
                    {data.rating}
                    <span className='rating-star'>
                        <ul className='horizontal-list' style={{listStyle:'none'}}  >
                            {rows.map(item => (
                                <li key={item}> 
                                    <span className='gold-star'>&#x2605;</span>
                                </li>
                            ))}
                        </ul>
                    </span>
                    {data.title}<br /> <br /> 
                    <p className="sub"> Price </p>
                     ${data.price}<br /> <br />
                    <p className="sub"> Availability Status </p> 
                    {data.availabilityStatus}<br /> <br />
                    <p className="sub"> Manufacturer </p>
                    {data.brand}<br /> <br />
                    <p className="sub"> Product Category </p>
                    {data.category}<br /> <br />
                    <p className="sub"> Product Discription </p>
                    {data.description}<br /> <br />
                    <p className="sub"> Discount </p>
                    {data.discountPercentage}%<br /> <br />
                    <p className="sub"> Minimum Order Quantity </p>
                    {data.minimumOrderQuantity}<br /> <br />
                    <p className="sub"> Stock left </p>
                    {data.stock}<br /> <br />
                    <p className="sub"> Warranty Information </p>
                    {data.warrantyInformation}<br /> <br />
                    <p className="sub"> Return Policy </p>
                    {data.returnPolicy}<br /> <br />
                    <p className="sub"> Shipping Information </p>
                    {data.shippingInformation} <br />
                    </div>
            </div>
        </>
        );

}

export default ProductDetail;