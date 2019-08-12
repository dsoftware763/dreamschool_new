import React from 'react';
import pin from '../../../assets/img/pin.png';
import FindMapMarkerInfoWindow from './FindMapMarkerInfoWindow';
import PropTypes from 'prop-types';

class FindMapMarker extends React.Component {
    render() {
        const { school } = this.props;
        const style = {
            backgroundImage: `url(${pin})`,
            backgroundSize: 'contain',
            height: 44,
            width: 29,
            cursor: 'pointer',
            zIndex: 10,
            position: 'relative',
            bottom: 15,
            right: 15
        }
        return(
            <>
                <div style={style} />
                {school.active && <FindMapMarkerInfoWindow school={school} />}
            </>
        );
    }
}

FindMapMarker.propTypes = {
    school: PropTypes.object
}

FindMapMarker.defaultProps = {
    school: {
        active: false
    }
}

export default FindMapMarker;