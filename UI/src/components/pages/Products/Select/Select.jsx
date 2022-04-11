import React, {useState, useEffect} from 'react'
import './Select.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import SelectSlide from './SelectSlide'
import Button from '../../../UI/Button/Button'
const Select = () => {
    //get select product's id:
    const id = useParams().id;
    //state for store current product
    const [product,setProduct] = useState({});
    //state for store product images and color:
    const [productImages, setProductImages] = useState([]);
    //get all rom of selecting product:
    const [rom, setRom] = useState([]);
    //curent product:
    const [currentProduct, setCurrentProduct] = useState({});
    //state for store total price, price and capacity:
    const [totalPrice, setTotalPrice] = useState(0);
    const [price, setPrice] = useState(0);
    const [capacity, setCapacity] = useState(0);
    //the following state contain addtion price for each color
    const [additionPrice, setAdditionPricve] = useState(0);
    const [activeSelectRom, setActiveSelectRom] = useState(null);
    const [activeSelectColor, setActiveSelectColor] = useState(null);
    //manage alert for color and capacity
    const [colorAlert, setColorAlert] = useState(false);
    const [capacityAlert, setCapacityAlert] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(`/products/select/${id}`);
            setProduct(data.data[0]);
        }
        const fetchRom = async () => {
            const data = await axios.get('/products/fakerom');
            setRom(data.data);
        }
        const fetchImages = async () => {
            const data = await axios.get('/products/dummy');
            setProductImages(data.data);
        }
        fetchData();
        fetchRom();
        fetchImages();
    }, []);
    useEffect(() => {
        setCurrentProduct(productImages[0]);
    }, [productImages])
    useEffect(() => {
        setTotalPrice(price + additionPrice);
    }, [additionPrice, price])
    const priceChangeHandler = (price, id, rom) => {
        setPrice(price);
        setActiveSelectRom(id);
        setCapacity(rom);
    }
    const activeColorChangeHandler = (id, additionPrice, product) => {
        setActiveSelectColor(id);
        setAdditionPricve(additionPrice);
        setCurrentProduct(product);
    }
    const addToCartHandler = () => {
        if(activeSelectColor === null){
            setColorAlert(true);
            return;
        }else{
            setColorAlert(false);
        }
        if(capacity === 0){
            setCapacityAlert(true);
            return;
        }else{
            setCapacityAlert(false);
        }
        alert('okkk')
    }
  return (
    <div className='product-select'>
        <div className="product-select-header">
            <div className="product-select-header-name">
                <h4>{product.name}</h4>
            </div>
        </div>
        <div className="product-select-content">
            <div className="product-select-left">
                <div className="product-select-left-slider">
                    <SelectSlide img={currentProduct?.img}/>
                </div>
            </div>
            <div className="product-select-right">
                <div className="product-select-right-row">
                    <div className="product-select-right-row-header">
                        <h4>Choose your color:</h4>
                    </div>
                    <div className="product-select-right-row-container">
                        {productImages.map(product => <div key={product.id} onClick={() => activeColorChangeHandler(product.id, product.additionPrice, product)} className={`product-select-right-row-item-container ${activeSelectColor === product.id ? 'select-active': 'select-inactive'}`}>
                            <div className="product-select-right-row-item-name">{product.name}</div>
                            <div style={{boxShadow: `inset 0px 1px 1px rgba(0,0,0,0.25)`, backgroundColor: product.color}} className="product-select-right-row-color"></div>
                        </div>)
                        }
                    </div>
                    <div className="product-select-right-row-alert">
                        {
                            colorAlert && <p>Please select a color</p>
                        }
                    </div>
                </div>
                <div className="product-select-right-row">
                    <div className="product-select-right-row-header">
                        <h4>Choose your capacity:</h4>
                    </div>
                    <div className="product-select-right-row-container">
                        {rom.map(rom => <div key={rom.id} onClick={() =>priceChangeHandler(rom.price, rom.id, rom.ram)} className={`product-select-right-row-item-container-rom ${activeSelectRom === rom.id ? 'select-active': 'select-inactive'}`}>
                            <div className="product-select-right-row-item-capacity">{rom.ram}</div>
                            <div className="product-select-right-row-item-price">${rom.price}</div>
                        </div>)
                        }
                    </div>
                    <div className="product-select-right-row-alert">
                        {
                            capacityAlert && <p>Please select a capacity</p>
                        }
                    </div>
                </div>
                <div className="product-select-right-row-total">
                    <div className="product-select-right-row-header">
                        <h4>Total:</h4>
                        <h5 className="product-select-right-row-header-price">${totalPrice}</h5>
                    </div>
                </div>
                <div className="product-select-right-action">
                   <Button onClick={addToCartHandler} className='product-select-right-action-btn'>Add to Cart</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Select