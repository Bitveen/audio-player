import React, { Component } from "react";
import AudioControls from "AudioControls";
import Playlist from "Playlist";


export default class AudioPlayer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="columns small-centered small-10 medium-8 large-8">
                    <div className="callout audio-player">
                        <AudioControls />
                        <Playlist />
                    </div>
                </div>
            </div>
        );
    }


}
