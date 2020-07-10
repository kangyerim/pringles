import React, {Component} from "react";

interface HelloProps {
    name: string
}
interface helloState {
    name: string
}

class Hello extends Component<HelloProps,helloState>{
    public state = { name : "" }
    props: any

    constructor(props: HelloProps) {
        super(props);
        this.state.name = props.name
    }
    public handleClick = () => {
        this.setState({
            name: "hi~ " + this.state.name
        })
    }
    public render() {
        return <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.handleClick}>야 옹</button>
        </div>
    }
}

export default Hello