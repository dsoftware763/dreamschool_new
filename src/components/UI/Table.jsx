import React from 'react';
import PropTypes from 'prop-types';
// const data = [
//     {id: 1, name: 'a'},
//     {id: 2, name: 'b'}
// ]
function Table(props) {
    const {data, headings} = props
    return (
        <table className="table">
            <thead>
                <tr>
                    {headings && headings.map((heading, index) => {
                        return <th scope="col" key={index}>{heading.label}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {data && data.map((row,index) => {
                    return <tr key={index}>
                        {headings.map((heading, index) => {
                            return <td key={index}>{row[heading.id]}</td>
                        })}
                    </tr>
                })}
              
        
                    
                      
                    </tbody>
                  </table>
    );
}

Table.propTypes = {
    headings: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
}

export default Table;