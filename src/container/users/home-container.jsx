import React from 'react'
import Home from '../../presentations/users/home.jsx'
import {browserHistory} from 'react-router';
import {connect} from 'react-redux'
import * as API from '../../api/backend'
class HomeContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            address: '',
            subjects: [],
            subjectName: '',
            subjectValue: '',
            class_level: 0,
        }
    }

    componentWillMount() {
        if (this.props.user.type_account === 1) {
            browserHistory.push('/provider/user-profile.html')
        }

        this.setState({
            address: this.props.user.address,
            selectedCoordinate: this.props.user.latitude
        })
    }

    async componentDidMount() {
        let subjects = await (API.getListSubject())
        this.setState({
                subjects: subjects
            }
        )
    }

    async onSubmit(e) {
        e.preventDefault()
        // let user = await(API.searchProvider())
        // this.setState(Object.assign({}, this.state, {user: user}))
        browserHistory.push('/list-provider/' + this.state.subjectValue + '?lat=' + this.state.selectedCoordinate
            + '&class_level=' + this.state.class_level)
    }


    handleSearchChange = (e) => {
        this.setState({search: e.target.value, address: e.target.value})
    }

    handleSelectSuggest = (suggest, coordinate) => {
        // let user = Object.assign({}, this.state.user)
        // user['address'] = suggest.description
        let latitude = coordinate.latitude + '-' + coordinate.longitude
        this.setState({
            address: suggest.description,
            search: suggest.description,
            selectedCoordinate: latitude
        })
    }

    subjectOnChange = (event, value) => this.setState({subjectName: value})
    subjectOnSelect = (value, item) => {
        this.setState({
            subjectName: value,
            subjectValue: item.abbr
        })
    }

    classLevelChange(e) {
        this.setState({
            class_level: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Home onSubmit={ this.onSubmit.bind(this) }
                      search={this.state.search}
                      address={this.state.address}
                      handleSelectSuggest={this.handleSelectSuggest.bind(this)}
                      handleSearchChange={this.handleSearchChange.bind(this)}
                      subjects={this.state.subjects}
                      subjectName={this.state.subjectName}
                      subjectOnChange={this.subjectOnChange.bind(this)}
                      subjectOnSelect={this.subjectOnSelect.bind(this)}
                      classLevelChange={this.classLevelChange.bind(this)}
                      user={this.props.user}/>
            </div>
        )
    }
}

HomeContainer.defaultProps = {
    user: {
        type_account: 0
    }
}

export default connect((state, props) => {
    return {
        isLogged: state.auth.isLogged,
        user: state.auth.user
    }
})(HomeContainer)