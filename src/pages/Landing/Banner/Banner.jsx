import './Banner.css'
import React from 'react'
import {Link} from 'react-router-dom'


const imageUrl = process.env.PUBLIC_URL + '/images/mixed-model-bg-desk.webp';

const Banner = () => {
    return (
        <>
            <div  className="d-flex justify-content-between align-items-center mt-3">
                <div className="row w-75 mx-auto">
                    <div className="col-md-6 col-12 text-center text-md-start">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div>
                                <h1>Trade with a global broker</h1>
                                <p className="text-muted my-5">
                                    Choose from 300+ trading instruments, including shares, commodities, and indices.
                                </p>
                                <Link to="/products">
                                    <button className="primary-btn2">Get Started</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 text-end mt-5 mt-md-0">
                        <img className="img-fluid" src={imageUrl} alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Banner;