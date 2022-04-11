import React from 'react'
import ProductList from '../../product/productList/productList'
import SingleType from '../../product/productList/SingleType'
import Sales from '../../sales/Sales'
import Slider from '../../Slider/Main-slider/Slider'
import Services from '../../services/Services'
import Skeleton from '../../UI/Loading/Skeleton/Skeleton'
const Home = () => {
  return (
    <div>
      <Slider/>
      <Sales/>
      <ProductList/>
      <SingleType key='iphone' component='iPhone'/>
      <SingleType key='mac' component='Mac'/>
      <SingleType key='ipad' component='iPad'/>
      <Services/>
    </div>
  )
}

export default Home