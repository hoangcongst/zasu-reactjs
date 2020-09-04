import React from 'react';
import {render} from 'react-dom';
import EnsureLoggedInContainer from './container/auth/ensure-logged.jsx';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router'
import thisApp from './index-reducer'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux';
import 'babel-polyfill';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './index-saga'
import createLogger from 'redux-logger';
import Login from './presentations/auth/login.jsx';
import Register from './presentations/auth/register.jsx';
import Logout from './presentations/auth/logout.jsx';
import App from './presentations/app.jsx';
import HomeContainer from './container/users/home-container.jsx';
import CustormerManager from './presentations/users/custormer-manager.jsx';
import UserProfileContainer from './container/users/user-profile-container.jsx'
import MessageContainer from './container/users/message-container.jsx'
import ProviderMiddleware from './container/provider/provider-middleware.jsx'
import ProviderComfirmContainer from './container/provider/provider-comfirm-container.jsx'
import TargetClassContainer from './container/provider/target-class-container.jsx'
import LearningRequestContainer from './container/provider/manager-learning-request/manager-learning-request'
import ListProviderContainer from './container/users/search-provider/list-provider-container.jsx'
import ContactUsContainer from './container/users/contact-us.jsx'
import FinanceContainer from './container/users/finance-manager/finance-container'
import DepositContainer from './container/users/finance-manager/deposit'
import HistoryContainer from './container/users/finance-manager/history'
import InfoProviderContainer from './container/enduser/info-provider/info-provider-container'
import ReviewContainer from './container/enduser/info-provider/review-container'
import ProviderProfileContainer from './container/enduser/info-provider/profile-container'
import FavorProviderContainer from './container/enduser/manager-favor-provider/manager-favor-provider'
import RequestedProviderContainer from './container/enduser/manager-request-provider/manager-request-provider'
import {persistStore, autoRehydrate} from 'redux-persist'
import EndUserMiddleware from './container/enduser/enduser-middleware'
import 'antd/dist/antd.css';

import './presentations/theme/css/semantic.min.css'
import './presentations/theme/libs/assets/animate.css/animate.css'
import './presentations/theme/libs/assets/font-awesome/css/font-awesome.min.css'
import './presentations/theme/libs/assets/simple-line-icons/css/simple-line-icons.css'
import './presentations/theme/css/bootstrap.min.css'
import './presentations/theme/css/font.css'
import './presentations/theme/css/app.min.css'

const logger = createLogger();
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

let store = createStore(thisApp,
    compose(applyMiddleware(logger, sagaMiddleware), autoRehydrate())
)

sagaMiddleware.run(rootSaga)

export default class AppProvider extends React.Component {

    constructor() {
        super()
        this.state = {rehydrated: false}
    }

    componentWillMount() {
        persistStore(store, {}, () => {
            this.setState({rehydrated: true})
        })
    }

    render() {
        if (!this.state.rehydrated) {
            return <div>Loading...</div>
        }
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <IndexRedirect to="/home"/>
                        <Route path="/home" component={HomeContainer}/>
                        <Route path="/login.html" component={Login}/>
                        <Route path="/register.html" component={Register}/>
                        <Route path="/list-provider/:subject" component={ListProviderContainer}/>
                        <Route path="/contact-us" component={ContactUsContainer}/>

                        <Route component={EnsureLoggedInContainer}>
                            <Route path="/message(/:messageTo)(/:messageNameTo)" component={MessageContainer}/>
                            <Route path="/logout.html" component={Logout}/>
                            <Route path="/finance-manager" component={FinanceContainer}>
                                <IndexRedirect to="deposit.html"/>
                                <Route path="deposit.html" component={DepositContainer} />
                                <Route path="history.html" component={HistoryContainer} />
                            </Route>

                            <Route path="/provider" component={ProviderMiddleware}>
                                <IndexRedirect to="user-profile.html"/>
                                <Route path="user-profile.html" component={UserProfileContainer}/>
                                <Route path="comfirm-provider.html" component={ProviderComfirmContainer}/>
                                <Route path="manager-target-class.html" component={TargetClassContainer}/>
                                <Route path="manager-learning-request.html" component={LearningRequestContainer}/>
                            </Route>

                            <Route path="/enduser" component={EndUserMiddleware}>
                                <IndexRedirect to="user-profile.html"/>
                                <Route path="user-profile.html" component={UserProfileContainer}/>
                                <Route path="info-provider" component={InfoProviderContainer}>
                                    <Route path="reviews" component={ReviewContainer}/>
                                    <Route path="profile" component={ProviderProfileContainer}/>
                                </Route>
                                <Route path="manager-favor-provider" component={FavorProviderContainer}/>
                                <Route path="manager-requested-provider" component={RequestedProviderContainer}/>
                            </Route>

                            <Route path="/custormer-manager" component={CustormerManager}/>

                        </Route>
                    </Route>
                </Router>
            </Provider >
        )
    }
}

render(
    <AppProvider />,
    document.getElementById('root')
)