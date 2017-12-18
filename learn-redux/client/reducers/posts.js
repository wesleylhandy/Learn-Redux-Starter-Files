// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of current state

export default function posts(state = [], action) {
    switch (action.type) {
        case "INCREMENT_LIKES":
            console.log('Incrementing Likes!!!');
            const i = action.index;
            //return updated
            return [
                ...state.slice(0, i),
                {...state[i], likes: state[i].likes + 1 },
                ...state.slice(i + 1)
            ]

        default:
            return state;
    }

}