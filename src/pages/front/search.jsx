import React from 'react';
import Private_preschool1 from '../../assets/img/Private_preschool1.jpg';
import daycare2 from '../../assets/img/daycare2.jpg';
import gallery_1 from '../../assets/img/gallery_1.jpg';
import { Helmet } from 'react-helmet';
import FindMap from '../../components/front/find/FindMap';
import SchoolList from '../../components/front/find/SchoolList';
import ReactPaginate from 'react-paginate';
import searchicon from "../../assets/img/searchicon.png";

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 0,
            pageCount: 2,
            perPage: 3,
            schools: [
                {active: false, lat: 43.638822, lng: -79.418233, programLink: "lara-stagljar", name: "Lara's Wee Love Daycare", address: "Toronto", description: "The Honey Bees Dreamschool provides a home based supportive environment where children learn through play.", img: Private_preschool1, price: 42},
                {active: false, lat: 43.654384, lng: -79.378505, programLink: "ainishah-hemraj", name: "Ainishah's Daycare", address: "Toronto", description: "We are building a community of young learners who are passionate, empathetic, smart and understanding.", img: daycare2, price: 49},
                {active: false, lat: 43.681406, lng: -79.386651, programLink: "emily-booth", name: "Emily's Dreamschool", address: "Near Spadina and Queen, Toronto", description: "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test.", img: gallery_1, price: 1},
                {active: false, lat: 43.649645, lng: -79.446558, programLink: "emily-booth", name: "Emily's Dreamschool", address: "Near Spadina and Queen, Toronto", description: "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test.", img: gallery_1, price: 1},
                {active: false, lat: 43.672695, lng: -79.434730, programLink: "lara-stagljar", name: "Lara's Wee Love Daycare", address: "Toronto", description: "The Honey Bees Dreamschool provides a home based supportive environment where children learn through play.", img: Private_preschool1, price: 42},
                {active: false, lat: 43.684997, lng: -79.397175, programLink: "ainishah-hemraj", name: "Ainishah's Daycare", address: "Toronto", description: "We are building a community of young learners who are passionate, empathetic, smart and understanding.", img: daycare2, price: 49}
            ]
        }
    }

    handlePageClick = data => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.state.perPage);
    
        this.setState({
            page: offset
        })
    };

    onChildClickCallback = (key) => {
        this.setState((state) => {
            state.schools = state.schools.map((school) => {
                school.active = false;
                return school;
            })
            state.schools[key].active = !state.schools[key].active;
            return { schools: state.schools };
        })
    };

    render() {
        return (
            <>
                <Helmet>
                    <title>Dreamschools - Find a Program</title>
                    <link rel="canonical" href="https://www.dreamschools.com/search" />
                </Helmet>
                <div className="container-fluid findushero">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="address">
                                    <h1>All Dreamschools near:</h1>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="search-header">
                                    <form id="search_form" className="search" acceptCharset="UTF-8" method="get">
                                        <input type="text" name="q" id="q" placeholder="Search by name, address, or keyword" />
                                        <button type="submit"><img src={searchicon} alt="" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid dreamschoolsfind">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6" id="find_list">
                                <SchoolList schools={this.state.schools.slice(this.state.page, this.state.page + 3)} />
                                <ReactPaginate
                                    previousLabel={'Prev'}
                                    nextLabel={'Next'}
                                    breakLabel={'...'}
                                    breakClassName={'page'}
                                    pageCount={this.state.pageCount}
                                    pageRangeDisplayed={10}
                                    containerClassName={'pagy-nav pagination'}
                                    activeClassName={'active'}
                                    onPageChange={this.handlePageClick}
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="full-bg">
                                    <div className="search-section">
                                        <div className="fixed-map-4">
                                            <div id="map" className="map-design" style={{height: " 816px"}}>
                                                <FindMap markerClick={this.onChildClickCallback} markers={this.state.schools} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Search;