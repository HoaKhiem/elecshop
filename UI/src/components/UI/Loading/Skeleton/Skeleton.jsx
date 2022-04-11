import React from 'react'
import './Skeleton.css'
const Skeleton = ({component}) => {
    const SlideSkeleton = () => {
        return <div className="skeleton-slide">
            <div className="skeleton-slide-content">
                <div className="skeleton-slide-title"></div>
                <div className="skeleton-slide-price"></div>
                <div className="skeleton-slide-actions">
                    <div className="skeleton-slide-btn"></div>
                    <div className="skeleton-slide-btn"></div>
                </div>
            </div>
        </div>
    }
    const SaleSkeleton = () => {
        return <div className='skeleton-sale'>
            <div className="skeleton-sale-image"></div>
            <div className="skeleton-sale-name"></div>
            <div className="skeleton-sale-memory"></div>
            <div className="skeleton-sale-price"></div>
            <div className="skeleton-sale-actions"></div>
        </div>
    }
    const Index_service_skeleton = () => <div>
        <div className="sv-container">
            <div className="sv-logo"></div>
            <div className="sv-title"></div>
            <div className="sv-action"></div>
            <div className="sv-icon"></div>
        </div>
    </div>
    const Product_new_skeleton = () => {
        return <div className="product_new">
            <div className="product_new_top">
                <div className="product_new_top_title"></div>
                <div className="product_new_top_des"></div>
                <div className="product_new_top_price"></div>
                <div className="product_new_top_action"></div>
            </div>
            <div className="product_new_bottom">
                <div className="product_new_bottom_img"></div>
            </div>
        </div>
    }
    const Product_menu_skeleton = () => {
        return <div className="product_menu">
            <div className="product_menu_top">
                <div className="product_menu_top_title"></div>
                <div className="product_menu_top_price"></div>
                <div className="product_menu_top_action"></div>
            </div>
            <div className="product_menu_bottom">
                <div className="product_menu_img"></div>
            </div>
        </div>
    }
    const About_Skeleton = () => {
        return <div className='about-skeleton'>
            <div className="about-skeleton-top">
                <div className="about-skeleton-top-title"></div>
                <div className="about-skeleton-top-text"></div>
            </div>
            <div className="about-skeleton-bottom">
                <div className="about-skeleton-bottom-container">
                    <div className="about-skeleton-bottom-left">
                        <div className="about-skeleton-bottom-left-title"></div>
                        <div className="about-skeleton-bottom-left-text"></div>
                    </div>
                    <div className="about-skeleton-bottom-right">
                        <div className="about-skeleton-bottom-right-img"></div>
                    </div>
                </div>
            </div>
        </div>
    }
    switch(component){
        case "slider":
            return <SlideSkeleton/>
        case "product":
            return <SaleSkeleton/>
        case "sv":
            return <Index_service_skeleton/>
        case "product_new":
            return <Product_new_skeleton/>
        case "product_menu":
            return <Product_menu_skeleton/>
        case "about":
            return <About_Skeleton/>
    }
    return <p></p>
}

export default Skeleton