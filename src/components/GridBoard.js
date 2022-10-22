import React from "react";
import Node from "./Node";
import "../styles/GridBoard.css";
class GridBoard extends React.Component {
    state = { rows: 0, columns: 0, gridBoard: null};
    constructor(props) {
        super(props);
        this.Ref = React.createRef();
    }

    componentDidMount(){
        this.setState({rows: this.props.rows, columns: this.props.columns, gridBoard: this.createGridBoard()});
    }

    createRow = (colIndex) => {
        const row = [];
        for (let i = 0; i < this.props.columns; i++) {
            row.push(<Node rowIndex={i} colIndex={colIndex}/>);
        }
        return row.map((node) => node);
    }
    createGridBoard = () => {
        const gridBoard = [];
        for (let i = 0; i < this.props.rows; i++) {
            gridBoard.push(<div className="row">{this.createRow(i)}</div>)
        }
        return gridBoard.map((row) => row);
    }


    render() {
        return (
            <div id="grid-board" className="ui container" ref={this.Ref}>
                {this.state.gridBoard}

            </div>
        );

    }
}

export default GridBoard;