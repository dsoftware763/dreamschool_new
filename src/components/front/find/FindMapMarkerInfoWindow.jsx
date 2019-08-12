import React from 'react';
import { Link } from 'react-router-dom';

class FindMapMarkerInfoWindow extends React.Component {
    
    render() {
        const infoWindowStyle = {
            position: 'relative',
            bottom: 150,
            left: '-45px',
            width: 220,
            backgroundColor: 'white',
            boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
            fontSize: 14,
            zIndex: 100,
        }

        const { school } = this.props
        return(
            <div style={infoWindowStyle}>
                <Link to={`/schools/${school.programLink}`}>
                    <div className="row">
                        <div className="col-md-12 flex no-padding">
                            <div className="thumbnail no-padding no-margin pop-up-image">
                                <img className="style_image pop-up-image" src={school.img} alt={school.name} />
                            </div>
                            <div className="caption">
                                <h5>{school.name}</h5>
                                <div>{school.address}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default FindMapMarkerInfoWindow;