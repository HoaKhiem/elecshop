import React, { useEffect, useState } from 'react'
import './productList.css'
import {Link} from 'react-router-dom'
import Select from '../../UI/Select/Select'
import SelectItem from '../../UI/Select/SelectItem'
import Product from '../singleProduct/Product'
import axios from 'axios'
import Skeleton from '../../UI/Loading/Skeleton/Skeleton'
const SingleType = ({component}) => {
  const [products, setProducts] = useState([]);
  const [isFetchingProducts, setIsFetchingProducts] = useState(false);

  //useeffect with empty array will run when component mount 
  useEffect(() => {
    const getPrducts = async () => {
      setIsFetchingProducts(true);
      const productsData = await axios.get(`/products?page=0&limit=5&category=${component.toLowerCase()}`);
      setIsFetchingProducts(false);
      setProducts(productsData.data);
    }
    getPrducts();
  }, [])
  return (
    <div className='prl-Container'>
        <div className="prl-header">
          <div className="prl-header-title">
            <h4>{component}</h4>
          </div>
        </div>
        <div className="prl-main prl-type">
            <div className="prl-select prl-type-select">
              <div className="prl-select-group">
                <Select text='High to low'>
                  <SelectItem text='High to low'/>
                  <SelectItem text='Low to high'/>
                </Select>
              </div>
              <div className="prl-select-group">
                <Select text='64GB'>
                  <SelectItem text='16GB'/>
                  <SelectItem text='32GB'/>
                  <SelectItem text='64GB'/>
                  <SelectItem text='128GB'/>
                  <SelectItem text='256GB'/>
                  <SelectItem text='1TB'/>
                </Select>
              </div>
              <div className="prl-select-group">
                <Select text='3GB'>
                  <SelectItem text='2GB'/>
                  <SelectItem text='3GB'/>
                  <SelectItem text='4GB'/>
                  <SelectItem text='6GB'/>
                </Select>
              </div>
            </div>
            <div className="prl-products">
              <div className="prl-products-container">
                {
                  isFetchingProducts && <div className='prl-products-skeletons'>
                    <Skeleton component='product'/>
                    <Skeleton component='product'/>
                    <Skeleton component='product'/>
                    <Skeleton component='product'/>
                    <Skeleton component='product'/> 
                  </div>
                }
                {
                  !isFetchingProducts && products.map(product => <Product className='product-single' data={product} key={product.id}/>)
                }
              </div>
              <div className="prl-bottom">
                <Link className='product-bottom-link' to={`/products/${component.toLowerCase()}`}><div className="prl-bottom-btn">Vew All</div></Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SingleType