import React, { Component } from "react";
import { connect } from "react-redux";
import Song from "Song";

export default class Playlist extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Playlist
                <Song />
                <Song />
                <Song />
            </div>
        );
    }

}
