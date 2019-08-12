import React from 'react';
import PropTypes from 'prop-types';
import SchoolListItem from './SchoolListItem';

class SchoolList extends React.Component {
    
    render() {
        const { schools } = this.props;
        return(
            schools.map(
                (school, i) => {
                    return (<SchoolListItem school={school} key={i} />)
                }
            )
        );
    }

}

SchoolList.propTypes = {
    schools: PropTypes.arrayOf(
        PropTypes.shape({
            lat: PropTypes.number,
            lng: PropTypes.number,
            programLink: PropTypes.string,
            name: PropTypes.string,
            address: PropTypes.string,
            description: PropTypes.string,
            img: PropTypes.any,
            price: PropTypes.number
        })
    )
}

SchoolList.defaultProps = {
    schools: []
}

export default SchoolList;