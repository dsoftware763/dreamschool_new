import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SchoolListItem extends React.Component {
    render() {
        const { school } = this.props;
        return(
            <Link to={`/schools/${school.programLink}`}>
                <div className="box">
                    <div className="imgbox">
                        <img src={school.img} alt="" />
                        <div className="hover">
                            <h1>VIEW</h1>
                        </div>
                    </div>
                    <div className="textbox">
                        <h1>{school.name}</h1>
                        <p className="adress">{school.address}</p>
                        <p className="para">{school.description}</p>
                    </div>
                    <div className="price">
                        <p>starting at</p>
                        <h1>{school.price} <span> / day</span></h1>
                    </div>
                </div>
            </Link>
        );
    }
}

SchoolListItem.propTypes = {
    school: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
        programLink: PropTypes.string,
        name: PropTypes.string,
        address: PropTypes.string,
        description: PropTypes.string,
        img: PropTypes.any,
        price: PropTypes.number
    })
}

export default SchoolListItem;