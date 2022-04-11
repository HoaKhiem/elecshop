import React, { useEffect, useState } from 'react'
import Slide from './Slide'
import './Slider.css'
import axios from 'axios'
import Skeleton from '../../UI/Loading/Skeleton/Skeleton'
const Slider = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [slide,setSlide] = useState([]);
    const [isLoadingSlides, setIsLoadingSlides] = useState(false);
    useEffect(() => {
        const getData = async () => {
            setIsLoadingSlides(true);
            const data = await axios.get('/slide');
            setIsLoadingSlides(false);
            setSlide(data.data);
        }   
        getData();
    }, [])
    const moveSlide = (direction) => {
        if(direction === 'right'){
            if(currentSlideIndex < slide.length-1){
                setCurrentSlideIndex(currentSlideIndex+1);
            }else{
                setCurrentSlideIndex(0);
            }
        }
        else{
            if(currentSlideIndex > 0){
                setCurrentSlideIndex(currentSlideIndex-1);
            }else{
                setCurrentSlideIndex(slide.length-1);
            }
        }
    }
    const moveToSlide = (slideIndex) => {
        setCurrentSlideIndex(slideIndex);
    }
    //------Auto move slide--------------
    const autoMoveSlide = () => {
        setTimeout(() => {
            moveSlide('right');
        }, 4500);
    }
  return (
    <div className='slider'>
        <div onClick={() => moveSlide('left')} className="slider-actions slider-actions-left">
            <i className="fa-solid fa-angle-left"></i>
        </div>
        <div onClick={() => moveSlide('right')} className="slider-actions slider-actions-right">
            <i className="fa-solid fa-chevron-right slider-actions-icon"></i>
        </div>
        <div className="dot-container">
            {
                !isLoadingSlides && slide.map((slide,slideIndex) => {
                    return <div key={slideIndex} onClick={() => moveToSlide(slideIndex)} style={{transform:`scale(${currentSlideIndex === slideIndex ? 1.3 :1})`}} className="dot"></div>
                })
            }
        </div>
        <div className="slide-container">
            {
                isLoadingSlides && <Skeleton component="slider"/>
            }
            {
                slide.map((slide,slideIndex) => {
                    return <Slide index={slideIndex} current={currentSlideIndex} className='slide' key={slide.id} data={slide}/>
                })
            }
        </div>
    </div>
  );
}

export default Slider