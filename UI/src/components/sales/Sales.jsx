import React, { useEffect, useState } from 'react'
import Skeleton from '../UI/Loading/Skeleton/Skeleton'
import SaleProduct from './SaleProduct'
import axios from 'axios'
import './Sales.css'
const Sales = () => {
    const [products, setProducts] = useState([]);
    const [fetchingProducts, setFetcingProducts] = useState(false);
    useEffect(() => {
        const getProducts = async () => {
            setFetcingProducts(true);
            const data = await axios.get('/products/sales');
            setFetcingProducts(false);
            setProducts(data.data);
        }
        getProducts();
    }, [])
    return (
        <div className='sales'>
            <div className="sales-header">
                <div className="sales-header-promotions">
                    <p>PROMOTIONS</p>
                </div>
                <div className="sales-header-title">
                    <h4>Weekend hot sale</h4>
                </div>
                <div className="sales-header-time">
                    <p>02:24:05</p>
                </div>
            </div>
            <div className="sales-products">
                {
                    fetchingProducts && <div className='sale-products-skeletons'>
                    <Skeleton component='product'/>
                    <Skeleton component='product'/>
                    <Skeleton component='product'/>
                    <Skeleton component='product'/>
                    <Skeleton component='product'/> 
                  </div>
                }
                {
                    !fetchingProducts && products.map(product => <SaleProduct key={product.id} product={product}/>)
                }
            </div>
        </div>
  )
}

export default Sales