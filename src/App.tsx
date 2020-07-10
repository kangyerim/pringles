import React from 'react';
// @ts-ignore
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ChatBot } from './components';
import {Hello, Counter, Clock, Kitty} from './components';
import { HomePage } from "./pages";
import { Provider } from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';


class App extends React.Component<any, any>{
    public render() {
        return  <Router>
                    <Link to="/">홈으로 이동</Link> <br/>
                    <Link to="/chat">챗봇 이동</Link>
                    <Link to="/counter">카운터 이동</Link>
                    <Link to="/hello">하이</Link>
                    <Link to="/clock">시계</Link>
                    <Link to="/kitty">야옹</Link>
                    <Route exact path='/chat' component={ChatBot}/>
                    <Route exact path='/clock' component={Clock}/>
                    <Route exact path='/counter'><Counter startNumber={0}/></Route>
                    <Route exact path='/hello'><Hello name={'peanut'}/></Route>
                    <Route exact path='/kitty' component={Kitty}/>
                    <HomePage></HomePage>
                </Router>

    }
}
export default App;