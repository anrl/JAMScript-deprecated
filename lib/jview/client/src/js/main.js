import React from "react"
import ReactDOM from "react-dom"
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch , hashHistory} from "react-router-dom";
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import DataStore from "./JViewPanel/DataStore"
import DataPanel from "./JViewPanel/DataPanel"
import FormsetStore from "./JDataController/FormsetStore"
import JDataController from "./JDataController/JDataController"
import Two from "./VisualizationConfig/Two"
import Nav from "./Nav"
const app = document.getElementById("app");

// ReactDOM.render(<DataPanel store={TodoStore} dataStore = {DataStore} formsetStore = {FormsetStore}/>, app);
const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const stores = {
    routing: routingStore,
    DataStore: DataStore,
    FormsetStore: FormsetStore
}

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
    <Provider {...stores}>
        <Router history={browserHistory}>
            <div>
                <Nav/>
                <Route exact path='/' component={DataPanel}/>
                <Route path='/jdata-controller' component={JDataController}/>
                <Route path='/two' component={Two}/>
                <Route path='/data' component={DataPanel}/>
            </div>
        </Router>
    </Provider>, app)

