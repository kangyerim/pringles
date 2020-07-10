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

}