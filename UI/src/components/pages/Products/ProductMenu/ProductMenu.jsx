import React,{useState, useEffect} from 'react'
import './ProductMenu.css'
import ProductMenuNew from './ProductMenuNew'
import axios from 'axios'
import ProductMenuItem from './ProductMenuItem'
import Skeleton from '../../../UI/Loading/Skeleton/Skeleton'
const ProductMenu = () => {
  const [newProducts,setNewProduct] = useState([]);
  const [productList,setProductList] = useState([]);
  const [loadingNewProduct, setLoadingNewProduct] = useState(false);
  const [loadingProducts, setLoadingProducts] = useState(false);
  useEffect(() => {
    const getNewProducts = async () => {
      setLoadingNewProduct(true);
      const newProductsData = await axios.get('/products/all');
      setLoadingNewProduct(false);
      setNewProduct(newProductsData.data);
    }
    const getProductList = async () => {
      setLoadingProducts(true);
      const productListData = await axios.get('/products/list');
      setLoadingProducts(false);
      setProductList(productListData.data);
    }
    getNewProducts();
    getProductList();
  },[])
  return (
    <div className="productMenu">
      <div className="productMenu-new-container">
        {
          loadingNewProduct && <Skeleton component='product_new'/>
        }
        {
          !loadingNewProduct && newProducts.map(newProduct => <ProductMenuNew data={newProduct} key={newProduct.id}/>)
        }
      </div>
        {
          loadingProducts && <div className="productMenu-list-container">
            <Skeleton component='product_menu'/>
            <Skeleton component='product_menu'/>
          </div>
        }
      { !loadingProducts &&
        <ul className="productMenu-list-container">
          {productList.map(product => {
              return <li key={product.id} className="productMenu-item">
                <ProductMenuItem data={product}/>
              </li>
            })
          }
        </ul>
      }
    </div>
  )
}

export default ProductMenu