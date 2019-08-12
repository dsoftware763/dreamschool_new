import React from 'react';
import Wix2  from '../../../assets/img/Wix2.jpg';
import Wix3  from '../../../assets/img/Wix3.jpg';
import Wix5  from '../../../assets/img/Wix5.jpg';
import Wix6  from '../../../assets/img/Wix6.jpg';
import GoogleMapReact from 'google-map-react';
import FindMapMarker from '../find/FindMapMarker';

const RightColumn = () => {
    return (
        <div className="col-lg-2" id="rightside">
            <div className="rightside">
                <div className="gallery">
                    <h2>GALLERY</h2>
                    <div className="images">
                        <img src={Wix2} className="img-responsive gal-image" alt=""/>
                        <img src={Wix3} className="img-responsive gal-image" alt=""/>
                        <img src={Wix5} className="img-responsive gal-image" alt=""/>
                        <img src={Wix6} className="img-responsive gal-image" alt=""/>
                    </div>
                </div>
  
                <div className="location">
                    <h2>LOCATION</h2>
                    <div className="adress">
                        Toronto, Ontario
                    </div>
                    <div className="school-page-rail-Map">
                        <div style={{width: '100%', height: 200, overflow: 'hidden', borderRadius: 5}}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyDVNuWNguQz4vB25OdDpztwxE3QR_CzG0g' }}
                            defaultZoom={12}
                            defaultCenter={{ lat: 43.638822, lng: -79.418233 }}
                            options={{fullscreenControl: false, scaleControl: false, zoomControl: false}}
                        >
                            <FindMapMarker
                                lat={43.638822}
                                lng={-79.418233}
                            />
                        </GoogleMapReact>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RightColumn;