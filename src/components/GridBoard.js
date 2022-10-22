import React from "react";
import Node from "./Node";
import "../styles/GridBoard.css";
class GridBoard extends React.Component {
    constructor(props) {
        super(props);
        this.Ref = React.createRef();
        this.setState({ rows: this.props.rows, columns: this.props.columns });
    }

    createRow = () => {
        const row = [];
        for (let i = 0; i < this.props.columns; i++) {
            row.push(<Node />);
        }
        return row;
    }
    createGridBoard = () => {
        const gridBoard = [];
        for (let i = 0; i < this.props.rows; i++) {
            gridBoard.push(<div className="row">{this.createRow()}</div>)
        }
        return gridBoard;
    }


    render() {
        return (
            <div id="grid-board" className="ui container" ref={this.Ref}>
                {this.createGridBoard()}

            </div>
        );

    }
}

export default GridBoard;