import React from 'react'
import {connect} from 'react-redux'
import ProviderComfirm from '../../presentations/provider/provider-comfirm'
import * as API from '../../api/backend'
class ProviderComfirmContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            national_id: '',
            type_qualification: '',
            uploadedFile: {},
            notifications: [],
            status: 0,
            errors: []
        }
    }

    onImageDrop(e) {
        e.preventDefault();
        let files = Object.assign({}, this.state.uploadedFile)
        files[e.target.name] = e.target.files[0]
        this.setState({
            uploadedFile: files
        });
    }

    handleChange(e) {
        switch (e.target.name) {
            case 'national_id':
                this.setState({
                    national_id: e.target.value
                })
                break
            case 'type_qualification':
                this.setState({
                    type_qualification: e.target.value
                })
                break
            default:
                break
        }
    }

    async onSubmit(e) {
        e.preventDefault()
        let formData = new FormData()
        formData.append('api_token', this.props.user.api_token)
        formData.append('national_id', this.state.national_id)
        formData.append('type_qualification', this.state.type_qualification)
        for (let key in this.state.uploadedFile) {
            formData.append(key, this.state.uploadedFile[key])
        }
        let result = await (API.requestConfirmProvider(formData))
        if (result.status === 'success')
            this.setState({
                notifications: [
                    result.message
                ],
                errors: []
            })
        else
            this.setState({
                notifications: [],
                errors: result.message
            })
    }

    async componentDidMount() {
        let data = await (API.getConfirmProvider(this.props.user.api_token))
        this.setState({
            national_id: data.user.national_id,
            status: data.user.status,
            notifications: data.notifications
        })
    }


    render() {
        return (
            <div>
                <br />
                <ProviderComfirm handleChange={this.handleChange.bind(this)} onImageDrop={this.onImageDrop.bind(this)}
                                 national_id={this.state.national_id} type_qualification={this.state.type_qualification}
                                 notifications={this.state.notifications} status={this.state.status} errors={this.state.errors}
                                 onSubmit={this.onSubmit.bind(this)}/>
            </div>
        )
    }
}


export default connect((state, props) => {
    return {
        isLogged: state.auth.isLogged,
        user: state.auth.user
    }
})(ProviderComfirmContainer)