import {FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL} from "../actions/actions";

const initialState = {
    jokes: [{
        "id": 242,
        "type": "general",
        "setup": "What do you get when you cross a chicken with a skunk?",
        "punchline": "A fowl smell!"
    }, {
        "id": 272,
        "type": "general",
        "setup": "What lies at the bottom of the ocean and twitches?",
        "punchline": "A nervous wreck."
    }, {"id": 245, "type": "general", "setup": "What do you give a sick lemon?", "punchline": "Lemonaid."}, {
        "id": 309,
        "type": "general",
        "setup": "Which side of the chicken has more feathers?",
        "punchline": "The outside."
    }, {
        "id": 116,
        "type": "general",
        "setup": "How come a man driving a train got struck by lightning?",
        "punchline": "He was a good conductor."
    }, {
        "id": 151,
        "type": "general",
        "setup": "What did the spaghetti say to the other spaghetti?",
        "punchline": "Pasta la vista, baby!"
    }, {
        "id": 354,
        "type": "general",
        "setup": "Why didn’t the skeleton cross the road?",
        "punchline": "Because he had no guts."
    }, {
        "id": 135,
        "type": "general",
        "setup": "How does a French skeleton say hello?",
        "punchline": "Bone-jour."
    }, {
        "id": 344,
        "type": "general",
        "setup": "Why did the man run around his bed?",
        "punchline": "Because he was trying to catch up on his sleep!"
    }, {
        "id": 267,
        "type": "general",
        "setup": "What kind of dog lives in a particle accelerator?",
        "punchline": "A Fermilabrador Retriever."
    }]
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                jokes: action.payload,
                isFetching: false,
                error: "none"
            };
        case FETCH_DATA_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default reducer;