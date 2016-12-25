import expect from "expect";

import { songsReducer } from "reducers";

describe("Reducers", () => {
    describe("songsReducer", () => {

        let defaultState = [];
        before(() => {
            defaultState = [
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
                }

            ];
        });




        it("should set isPlayed property to correct one", () => {
            let action = {
                type: "PLAY_SONG",
                id: 1
            };
            let result = songsReducer(defaultState, action);
            expect(result[0].isPlayed).toEqual(true);
        });



        it("should set isPlayed property to false except next playing", () => {
            let action = {
                type: "PLAY_SONG",
                id: 2
            };

            expect(defaultState[0].isPlayed).toEqual(true);
            let result = songsReducer(defaultState, action);
            expect(result[0].isPlayed).toEqual(false);
            expect(result[1].isPlayed).toEqual(true);

        });




    });
});
