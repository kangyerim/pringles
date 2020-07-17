import React, {useState, useEffect} from "react";
function Clock() {
    const [tick, setTick] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        setInterval(() => setTick(new Date().toLocaleTimeString()), 1000)
    });
    return (
        <div>
            <h1>Hello World</h1>
            <h2>Current Time</h2>
            <h2>{tick}</h2>
        </div>
    );
}
export default Clock;

/*import React, {useReducer} from "react";
import reducers from "../../reducers";

type Action = { type: 'clockStart' }
function reducer(state: string, action: Action) {
    switch (action.type) {
        case 'clockStart': return tick()
        default: throw new Error('unhanced action')
    }
}
function tick() { //호이스팅 선언식: 고차함수에 프롭스로 들어올 순수함수는 호이스팅이 걸려있어야한다
    setInterval(tick, 1000)
    setState({
        time : new Date().toLocaleTimeString()
    })
}
const Clock: React.FC = () => { // 표현식 고차함수
    const [time, dispatch ] = useReducer(reducer, "")
    const clockStart = () => dispatch({ type: 'clockStart'})
    return <div>
            <h2>아무것도 안했는ㄴ데 벌써.., {time} 야.,.,</h2>
            <button onClick={clockStart}>tick tok</button>
        </div>
}

export default Clock*/



/*
import React, {Component} from "react";

export default class Clock extends Component{
    public state = {time : ''}

    public tick = () => {
        setInterval(this.tick, 1000)
        this.setState({
            time : new Date().toLocaleTimeString()
        })
    }

    public render() {
        return <div>
            <h2>아무것도 안했는ㄴ데 벌써.., {this.state.time} 야.,.,</h2>
            <button onClick={this.tick}>tick tok</button>
        </div>
    }

}*/
