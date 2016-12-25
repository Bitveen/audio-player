import React, { Component } from "react";
import { connect } from "react-redux";


class Song extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                Song
            </div>
        );
    }
}

export default connect(/* Props to import into component from state */)(Song);
