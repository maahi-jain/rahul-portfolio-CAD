import React from "react";
import Slider from "react-slick";
import "./style.css";
import { useMyContext } from '../../App';

const Banner = ({ category }) => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1
    }

    let { content, mainBanner } = useMyContext();
    category = "rings"
    let items = category && content[category];

    return (
        <>
            <div className="mainBanner">
                <Slider {...settings} speed={1000} autoplaySpeed={5000} dots={false} >
                    {mainBanner.map((data, index) => (
                        <div key={index}>
                            <img src={data} alt="apparel" />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="grid">
                {items && items.map((data, index) => (
                    <div className="itemBanner" key={index}>
                        <Slider {...settings}>
                            {data.files.images.map((data, index) => (
                                <div key={index}>
                                    <img src={data} alt="apparel" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Banner;