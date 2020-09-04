import React from 'react'
import Header from '../layout/header.jsx'
import '../theme/css/home-search.css'
import GooglePlacesSuggest from 'react-google-places-suggest'
import '../theme/css/location-suggest.css'
import GoogleMapLoader from "react-google-maps-loader"
import {API_GOOGLE_KEY} from '../../api/config'
import Autocomplete from 'react-autocomplete'

let styles = {
    item: {
        background: 'white',
        listStyle: 'none',
        padding: '5px',
        zIndex: '2'
    },
    highlightedItem: {
        padding: '5px',
        cursor: 'pointer'
    }
}
class Home extends React.Component {
    render() {
        const {search} = this.props
        const {googleMaps} = this.props

        return (
            <div>
                <Header />
                <div id="homeSearchFunction">
                    <div id="inner-content">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <form>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <Autocomplete
                                                value={this.props.subjectName}
                                                inputProps={{
                                                    className: "form-control input-lg",
                                                    id: "states-autocomplete",
                                                    placeholder: "Subject..."
                                                }}
                                                items={this.props.subjects}
                                                getItemValue={(item) => item.name}
                                                onChange={this.props.subjectOnChange}
                                                onSelect={this.props.subjectOnSelect}
                                                wrapperStyle={{width: '100%'}}
                                                renderItem={(item, isHighlighted) => (
                                                    <div
                                                        style={isHighlighted ? styles.highlightedItem : styles.item}
                                                        key={item.abbr}
                                                    >{item.name}</div>
                                                )}/>
                                        </div>
                                        <div className="col-md-3">
                                            <select name="class_level" className="form-control input-lg"
                                                    onChange={e => this.props.classLevelChange(e)}>
                                                <option value={0}>Mẫu giáo</option>
                                                <option value={1}>Cấp 1</option>
                                                <option value={2}>Cấp 2</option>
                                                <option value={3}>Cấp 3</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <GooglePlacesSuggest
                                                googleMaps={googleMaps}
                                                onSelectSuggest={this.props.handleSelectSuggest}
                                                suggestComponentRestrictions={{country: "vn"}}
                                                search={search}>
                                                <input
                                                    type="text"
                                                    className="form-control input-lg"
                                                    value={this.props.address}
                                                    placeholder="Location..."
                                                    onChange={this.props.handleSearchChange}
                                                />
                                            </GooglePlacesSuggest>
                                        </div>
                                        <div className="col-md-2">
                                            <button type="button" onClick={this.props.onSubmit}
                                                    className="btn btn-danger btn-lg">Search
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default GoogleMapLoader(Home, {
    libraries: ["places"],
    key: API_GOOGLE_KEY,
})

