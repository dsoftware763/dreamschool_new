import React from 'react';
import gallery1 from '../../../assets/img/gallery1.png';
import gallery2 from '../../../assets/img/gallery2.png';
import gallery3 from '../../../assets/img/gallery3.png';
import gallery4 from '../../../assets/img/gallery4.png';
import gallery5 from '../../../assets/img/gallery5.png';

class Gallery extends React.PureComponent {
    render() {
        return (<>
            <div className="box" style={{maxWidth: 440}}>
                <div className="bgofbox">
                    <div className="header">
                        <div className="row">
                            <div className="col-md-6 col-5">
                                <h2>PROGRAM PHOTOS</h2>
                            </div>
                        </div>
                    </div>
                    {[1,2,3,4].map((item, index) => {
                        return (
                            <div key={index} className="photos" style={{padding: '10px 20px', display: 'flex'}}>
                            <figure className="photoContainer" style={{
                                display: "flex",
                                flex: "1"
                            }}>
                                <img src={gallery1} alt="gallery1" style={{maxWidth: '100%'}}/>
                            </figure>
                            <figure className="photoContainer" style={{
                                display: "flex",
                                flex: "1"
                            }}>
                                <img src={gallery1} alt="gallery1" style={{maxWidth: '100%'}}/>
                            </figure>
    
                            <figure className="photoContainer" style={{
                                display: "flex",
                                flex: "1"
                            }}>
                                <img src={gallery1} alt="gallery1" style={{maxWidth: '100%'}}/>
                            </figure>
                            <figure className="photoContainer" style={{
                                display: "flex",
                                flex: "1"
                            }}>
                                <img src={gallery1} alt="gallery1" style={{maxWidth: '100%'}}/>
                            </figure>
                        </div>
                        );
                    })}
                </div>
            </div>
            <div className="box" style={{maxWidth: 440}}>
                <div className="bgofbox">
                    <div className="header">
                        <div className="row">
                            <div className="col-md-6 col-5">
                                <h2>Display PHOTOS</h2>
                            </div>
                        </div>
                    </div>
                    <div className="formbody">
				<div className="boxofprfilephotos">
					<div className="row">
                        <div className="col-md-4 col-6">
                            <p>Jasmine</p>
                            <img src={gallery4} alt="" />
                            <a href="#/">Upload</a>
                        </div>
                        <div className="col-md-4 col-6">
                            <p>Johnny</p>
                            <img src={gallery5} alt="" />
                            <a href="#/">Upload</a>
                        </div>
					</div>
				</div>
				</div>
                </div>
            </div>
          
        </>);
    }
}

export default Gallery;