const defaultState = [
    {
        id: 1,
        title: "Song 1",
        duration: 300,
        artist: "Artist 1",
        isPlayed: false
    },
    {
        id: 2,
        title: "Song 2",
        duration: 300,
        artist: "Artist 1",
        isPlayed: false
    },
    {
        id: 3,
        title: "Song 3",
        duration: 300,
        artist: "Artist 2",
        isPlayed: false
    },
    {
        id: 4,
        title: "Song 4",
        duration: 300,
        artist: "Artist 2",
        isPlayed: false
    },

];


export const songsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "PLAY_SONG":
            return state.map((song) => {
                if (song.id === action.id) {
                    song.isPlayed = true;
                } else {
                    song.isPlayed = false;
                }
                return song;
            });
            break;
        default:
            return state;
    }
};
