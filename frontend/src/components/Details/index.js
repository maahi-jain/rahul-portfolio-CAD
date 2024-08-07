import React from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "./style.css";

const Details = () => {

    const location = useLocation();
    const item = location.state.item;
    console.log(item);
    return (
        <div className="detailsContainer">
            <Slider className="detailsContent">
                {item.files.images.map((x, i) => (
                    <img key={i} src={x} alt="apparelImage" />
                ))}
                {item.files.videos.map((x, i) => (
                    <iframe src={x} key={i} title={i} allow="autoPlay" />
                ))}
            </Slider>
            <div>
                <h2 className="descHeader">Description</h2>
                <table>
                    <tbody>
                        {Object.keys(item.description).map((key, i) => (
                            <tr key={i}>
                                <th>{key}:</th>
                                <td>{item.description[key]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Details;