import React, { useEffect, useState } from 'react'
import './productList.css'
import {Link} from 'react-router-dom'
import Select from '../../UI/Select/Select'
import SelectItem from '../../UI/Select/SelectItem'
import Product from '../singleProduct/Product'
import axios from 'axios'
import Skeleton from '../../UI/Loading/Skeleton/Skeleton'
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isFetchingProducts, setIsFetchingProducts] = useState(false);

  //useeffect with empty array will run when component mount 
  useEffect(() => {
    const getPrducts = async () => {
      setIsFetchingProducts(true);
      const productsData = await axios.get('/products?page=1&limit=8');
      setIsFetchingProducts(false);
      setProducts(productsData.data);
    }
    getPrducts();
  }, [])
  return (
    <div className='prl-Container'>
        <div className="prl-header">
          <div className="prl-header-name">
            <h4>For you</h4>
          </div>
          <div className="prl-header-categories">
            <ul className="prl-header-categories-list">
              <Link to='/' className='prl-header-link'><li className="prl-header-categories-item">All</li></Link>
              <Link to='/?filter=iphone' className='prl-header-link'><li className="prl-header-categories-item">iPhone</li></Link>
              <Link to='/?filter=ipad' className='prl-header-link'><li className="prl-header-categories-item">iPad</li></Link>
              <Link to='/?filter=mac' className='prl-header-link'><li className="prl-header-categories-item">Mac</li></Link>
              <Link to='/?filter=watch' className='prl-header-link'><li className="prl-header-categories-item">Watch</li></Link>
              <Link to='/?filter=airpods' className='prl-header-link'><li className="prl-header-categories-item">AirPods</li></Link>
              <Link to='/?filter=accessories' className='prl-header-link'><li className="prl-header-categories-item">Accessories</li></Link>
            </ul>
          </div>
        </div>
        <div className="prl-main">
            <div className="prl-select">
              <div className="prl-select-group">
                <div className="prl-select-group-title">
                  <p>Price:</p>
                </div>
                <Select text='High to low'>
                  <SelectItem key='productList-highToLow' text='High to low'/>
                  <SelectItem key='productList-lowToHigh' text='Low to high'/>
                </Select>
              </div>
              <div className="prl-select-group">
                <div className="prl-select-group-title">
                  <p>Main Memory:</p>
                </div>
                <Select text='64GB'>
                  <SelectItem key='productList-mem-16' text='16GB'/>
                  <SelectItem key='productList-mem-32' text='32GB'/>
                  <SelectItem key='productList-mem-64' text='64GB'/>
                  <SelectItem key='productList-mem-128' text='128GB'/>
                  <SelectItem key='productList-mem-256' text='256GB'/>
                  <SelectItem key='productList-mem-1TB' text='1TB'/>
                </Select>
              </div>
              <div className="prl-select-group">
                <div className="prl-select-group-title">
                  <p>Ram:</p>
                </div>
                <Select text='3GB'>
                  <SelectItem key='productList-ram-2' text='2GB'/>
                  <SelectItem key='productList-ram-3' text='3GB'/>
                  <SelectItem key='productList-ram-4' text='4GB'/>
                  <SelectItem key='productList-ram-6' text='6GB'/>
                </Select>
              </div>
            </div>
            <div className="prl-products">
              <div className="prl-products-container">
                {
                  isFetchingProducts && <div className='prl-products-skeletons'>
                    <Skeleton key='st1' component='product'/>
                    <Skeleton key='st2' component='product'/>
                    <Skeleton key='st3' component='product'/>
                    <Skeleton key='st4' component='product'/>
                  </div>
                }
                {
                 !isFetchingProducts &&  products.map(product => <Product className='product-list' data={product} key={product.id}/>)
                }
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProductList