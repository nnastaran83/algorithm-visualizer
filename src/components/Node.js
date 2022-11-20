import React from "react";
import "../styles/Node.css";

class Node extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rowIndex: props.rowIndex, colIndex: props.colIndex, isStart: '', isEnd: '' };      
    }


    componentDidMount() {
        this.setState({ isStart: this.state.rowIndex === 5 && this.state.colIndex === 5 ? 'start' : '' });
        this.setState({ isEnd: this.state.rowIndex === 10 && this.state.colIndex === 10 ? 'end' : '' });
    }


    render() {
        const extraClassName = this.state.isStart + ' ' + this.state.isEnd;
        return (
            <span className={`${extraClassName} node`}>


                {this.state.isStart ? <i dragable={true} className="chevron right icon"></i> : null}
                {this.state.isEnd ? <i dragable={true} className="circle outline icon"></i> : null}

            </span>
        );
    }
}

export default Node;