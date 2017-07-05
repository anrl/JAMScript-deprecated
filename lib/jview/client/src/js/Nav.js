var React = require('react');
import {Link, NavLink} from 'react-router-dom';
import '../css/Nav.css'

export default class Nav extends React.Component {
    render() {
        return(<ul>
            <li>
                <NavLink exact activeClassName='active' to='/'>
                    JView Panel
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/jdata-controller'>
                    JData Controller
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/visualization-config'>
                    Visualization Config
                </NavLink>
            </li>
        </ul>)
    }
}

