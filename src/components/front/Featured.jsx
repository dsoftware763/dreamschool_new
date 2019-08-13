import React from 'react';
import bgmainslider from '../../assets/img/bgmainslider.png';
import sliderimg1 from '../../assets/img/sliderimg1.png';
import sliderimg2 from '../../assets/img/sliderimg2.jpg';
import leftarrow from '../../assets/img/leftarrow.png';
import rightarrow from '../../assets/img/rightarrow.png';
import Carousel from 'react-bootstrap/Carousel';
import searchicon from "../../assets/img/searchicon.png";
import {Input} from '../UI';

const Featured = () => {
    return (
        <div className="container-fluid slidercf slidercf2">
            <img src={bgmainslider} className="bgright" alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Featured Dreamschools</h1>
                        <form className="search" action="/search" accept-charset="UTF-8" method="get">
                            <Input type="text" name="q" id="q" placeholder="Search by name, address, or keyword" />
                            <button type="submit"><img src={searchicon} alt="" /></button>
                        </form>
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
                                <img src={sliderimg1} alt="Little Hearts School" />
                                <div className="row">
                                    <div className="col-md-7" style={{paddingLeft: 0}}>
                                        <h2>Little Hearts School</h2>
                                        <p>Dupont & Ossington, Toronto</p>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="btns">
                                            <p className="btnviewall"><a href="#/">View all</a></p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={sliderimg2} alt="Little Tots Daycare"/>
                                <div className="row">
                                    <div className="col-md-7">
                                        <h2>Little Tots Daycare</h2>
                                        <p>Dixie & Lakeshore, Mississauga</p>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="btns">
                                            <p className="btnviewall"><a href="#/">View all</a></p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            
                        </Carousel>

                    <div className="line"></div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Featured;