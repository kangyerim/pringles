import React, {Component} from "react";

export default class Navigator extends Component<any, any>{
    public render() {
        return <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

            <a className="navbar-brand" href="#"><span className="glyphicon glyphicon-eye-open"></span></a>


            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Link 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link 2</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link 3</a>
                </li>
            </ul>
        </nav>
    }
}