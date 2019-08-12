import React from 'react';
import { withRouter } from 'react-router-dom';
import './ProgramSearchInput.css';

class ProgramSearchInput extends React.Component {
    state = {
        q: ""
    }

    handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.history.push(`/search?q=${this.state.q}`);
	}

    render() {
        return (
            <div className="n-search-container">
                <div className="n-search-header">
                    <form className="n-search-main w-100" acceptCharset="UTF-8" onSubmit={this.handleSubmit}>
                        {/* <input name="utf8" type="hidden" value="&#x2713;" /> */}
                        <input type="text" name="q" placeholder="Search by name, address, or keyword" value={this.state.q} onChange={this.handleChange} className="w-100" />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(ProgramSearchInput);