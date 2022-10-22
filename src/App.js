import React from "react";
import GridBoard from "./components/GridBoard";

const App = () => {
    return (
        <div>
            <GridBoard rows={30} columns={50} />
        </div>
    );
};

export default App;