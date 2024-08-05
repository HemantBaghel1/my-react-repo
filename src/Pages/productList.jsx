import { useState, useEffect } from 'react';
import ProductItem from '../components/productItem';
import './productList.css'

const ProductList = () => {
  const [data, setData] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [currentPageItems, setCurrentPageItems] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then(response => response.json())
      .then(data => {setData(data);setCurrentPageItems(data.products.slice(0,5))})
      .catch(error => console.error(error));
  }, []);
  const search = () => {
    let value = document.getElementById('searchValue').value;
    console.log(value);
    fetch(`https://dummyjson.com/products/search?q=${value}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
    setCurrentPageItems(data.products.slice(0,5));
  };

  const previousPage = () => {
        if(currentPageNumber <= 1 ) return;
        let newval = currentPageNumber - 1;
        setCurrentPageNumber(newval);
        let s = (newval - 1) * 5;
        let e = (newval - 1) * 5 + 5;
        setCurrentPageItems(data.products.slice(s,e));
    };

  const nextPage = () => {
    let total = Math.ceil(data.products.length/5);
    if(currentPageNumber == total) return;
    let newval = currentPageNumber + 1;
    setCurrentPageNumber(newval);
    let s = (newval - 1) * 5;
    let e = (newval - 1) * 5 + 5;
    setCurrentPageItems(data.products.slice(s,e));
  }
  return (
    <div className='top'>
        <div className='searchbar' >
            <input className='inputforsearch' type="text" id='searchValue' />
            <button onClick={search} >Search</button>
        </div>
      <ul style={{listStyle:'none'}}  >
        {currentPageItems.map(item => (
          <li key={item.id}> 
            <ProductItem 
                product={{ id: item.id, title: item.title, category : item.category, price: item.price, rating:item.rating, imagelink: item.images[0] }}
                
            /> 
            </li>
        ))}
      </ul>
      <button className='left' onClick={previousPage}> {"<<< Prev"} </button>  <button className='right' onClick={nextPage}> {"Next >>>"} </button>
    </div>
  );
};

export default ProductList;
