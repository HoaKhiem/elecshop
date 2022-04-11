import React, { useEffect, useState } from 'react'
import './ProductCat.css'
import {Link} from 'react-router-dom'
import Select from '../../../UI/Select/Select'
import SelectItem from '../../../UI/Select/SelectItem'
import Product from '../../../product/singleProduct/Product'
import axios from 'axios'
import Skeleton from '../../../UI/Loading/Skeleton/Skeleton'
import {useRouteMatch}  from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component' 
const ProductCat = () => {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isFetchingProducts, setIsFetchingProducts] = useState(false);
  const [hasMore, setHasMore] = useState(true)
  const match = useRouteMatch();
  const category = match.params.category;
  const filter={ram: category === 'iphone' || category==='ipad' || category === 'mac',memory: category === 'iphone' || category==='ipad' || category === 'mac'}
  //useeffect with empty array will run when component mount 
  useEffect(() => {
    const getPrducts = async () => {
      setIsFetchingProducts(true);
      const productsData = await axios.get(`/products?page=0&limit=8&category=${category}`);
      setIsFetchingProducts(false);
      setProducts(productsData.data);
    }
    getPrducts();
    setHasMore(true);
    setPageNumber(1);
  }, [category])
  const fetchProduct = async () => {
    const response = await axios.get(`/products?page=${pageNumber}&limit=8&category=${category}`);
    setPageNumber(pageNumber+1);
    return response.data;
  }
  const fetchData = async() => {
    console.log('fetching');
    const nextData = await fetchProduct();
    setProducts([...products, ...nextData]);
  }
  useEffect(() => {
    if(products.length % 8 != 0){
      setHasMore(false);
    }
  }, [products])
  const Infinite_loader = () => <div className='prl-products-skeletons'>
    <Skeleton component='product'/>
    <Skeleton component='product'/>
    <Skeleton component='product'/>
    <Skeleton component='product'/>
  </div>
  // console.log(hasMore);
  return (
    <div className='prl-Container'>
        <div className="prl-header">
          <div className="prl-header-name">
            <h4>{category.toUpperCase()}</h4>
          </div>
        </div>
        <div className="prl-main">
            <div className="prl-select">
              <div className="prl-select-group">
                <div className="prl-select-group-title">
                  <p>Price:</p>
                </div>
                <Select text='High to low'>
                  <SelectItem text='High to low'/>
                  <SelectItem text='Low to high'/>
                </Select>
              </div>
              {
                filter.memory && <div className="prl-select-group">
                  <div className="prl-select-group-title">
                    <p>Main Memory:</p>
                  </div>
                  <Select text='64GB'>
                    <SelectItem text='16GB'/>
                    <SelectItem text='32GB'/>
                    <SelectItem text='64GB'/>
                    <SelectItem text='128GB'/>
                    <SelectItem text='256GB'/>
                    <SelectItem text='1TB'/>
                  </Select>
                </div>
              }
              {
                filter.ram && <div className="prl-select-group">
                  <div className="prl-select-group-title">
                    <p>Ram:</p>
                  </div>
                  <Select text='3GB'>
                    <SelectItem text='2GB'/>
                    <SelectItem text='3GB'/>
                    <SelectItem text='4GB'/>
                    <SelectItem text='6GB'/>
                  </Select>
                </div>
              }
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
                    <Skeleton component='product'/>
                    <Skeleton component='product'/>
                    <Skeleton component='product'/>
                  </div>
                }
                <InfiniteScroll
                  dataLength={products.length}
                  next={fetchData}
                  hasMore={hasMore}
                  loader={<Infinite_loader/>}
                  className='prl-products-infinite'
                >
                  {
                    !isFetchingProducts &&  products.map(product => <Product className='product-list' data={product} key={product.id}/>)
                  }
                </InfiniteScroll>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCat