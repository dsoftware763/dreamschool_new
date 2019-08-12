import React from 'react';
import sliderbg from '../../../assets/img/sliderbg.png';
import sliderimg1 from '../../../assets/img/sliderimg1.png';
import sliderimg2 from '../../../assets/img/sliderimg2.jpg';
import leftarrow from '../../../assets/img/leftarrow.png';
import rightarrow from '../../../assets/img/rightarrow.png';
import Carousel from 'react-bootstrap/Carousel';

const Gallery = () => {
    return (
        <div className="container-fluid slidercf">
            <img src={sliderbg} className="bgleft" alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Dreamschools Gallery</h1>
                        <Carousel 
                            id="myCarousel"
                            indicators={false}
                            prevIcon={
                                <span aria-hidden="true" className="leftarrow carousel-control-prev-icon">
                                    <img src={leftarrow} alt=""/>
                                </span>
                            }
                            nextIcon={
                                <span aria-hidden="true" className="rightarrow carousel-control-next-icon">
                                    <img src={rightarrow} alt=""/>
                                </span>
                            }
                        >
                            <Carousel.Item>
                                <img src={sliderimg1} alt="Valerie Dreamschools" />
                                <p>
                                    Valerie has been a partner at Dreamschools for 8 months. <br />
                                    This is her home daycare, Little Hearts School.
                                </p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={sliderimg2} alt="Shazia Dreamschools"/>
                                <p>
                                    Shazia has been a partner at Dreamschools for 6 months. <br/>
                                    This is her home daycare, Little Tots Daycare.
                                </p>
                            </Carousel.Item>
                            
                        </Carousel>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Gallery;