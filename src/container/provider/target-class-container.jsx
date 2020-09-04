import React from 'react'
import {connect} from 'react-redux'
import TargetClass from '../../presentations/provider/target-class'
import * as API from '../../api/backend'
class TargetClassContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notifications: [],
            errors: [],
            data: [],
            dataToRemove: []
        }
    }

    handleChange(e, key) {
        let cloneArr = Array.from(this.state.data)
        switch (e.target.name) {
            case 'class_level':
                cloneArr[key].class_level = e.target.value
                break
            case 'subject':
                cloneArr[key].subject = e.target.value
                break
            case 'salary':
                cloneArr[key].salary = e.target.value
                break
            default:
                break
        }

        this.setState({
            data: cloneArr
        })
    }

    removeSubject(e, key) {
        let cloneArr = Array.from(this.state.data)

        let dataToRemove = Array.from(this.state.dataToRemove)
        if (cloneArr[key]._id !== null)
            dataToRemove.push(cloneArr[key]._id)
        cloneArr.splice(key, 1)
        this.setState({
            data: cloneArr,
            dataToRemove: dataToRemove
        })
    }

    async onSubmit(e) {
        e.preventDefault()
        let data = this.state.data
        let result = await(API.updateTargetClass(this.props.user.api_token, data, this.state.dataToRemove))
        if (result.status === 'success')
            this.setState({
                notifications: [
                    result.message
                ],
                data: result.data,
                dataToRemove: []
            })
        else
            this.setState({
                errors: [
                    result.message
                ],
                dataToRemove: []
            })
    }

    addNewTarget(e) {
        let data = Array.from(this.state.data)
        data.push({
            class_level: 0,
            subject: 0,
            salary: 0
        })
        this.setState({
            data: data
        })
    }

    async componentDidMount() {
        let data = await (API.getTargetClass(this.props.user.api_token))
        if (data.length === 0)
            data = [
                {
                    class_level: 0,
                    subject: 0,
                    salary: 0
                }
            ]
        this.setState({
            data: data
        })
    }

    render() {
        return (
            <div>
                <br />
                <TargetClass addNewTarget={this.addNewTarget.bind(this)} handleChange={this.handleChange.bind(this)}
                             removeSubject={this.removeSubject.bind(this)}
                             notifications={this.state.notifications} data={this.state.data}
                             errors={this.state.errors} onSubmit={this.onSubmit.bind(this)}/>
            </div>
        )
    }
}


export default connect((state, props) => {
    return {
        isLogged: state.auth.isLogged,
        user: state.auth.user
    }
})(TargetClassContainer)