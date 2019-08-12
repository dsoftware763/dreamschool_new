import React from 'react';
import GoogleMapReact from 'google-map-react';
import FindMapMarker from './FindMapMarker';

class FindMap extends React.Component {
    render() {
        const { markers, markerClick } = this.props;
        return(
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDVNuWNguQz4vB25OdDpztwxE3QR_CzG0g' }}
                defaultZoom={12}
                defaultCenter={{ lat: 43.653226, lng: -79.3831843 }}
                onChildClick={markerClick}
            >
                {
                    markers.map((marker, i) => {
                        return(
                            <FindMapMarker
                                key={i}
                                lat={marker.lat}
                                lng={marker.lng}
                                school={marker}
                            />
                        )
                    })
                }
            </GoogleMapReact>
        );
    }
}

export default FindMap;