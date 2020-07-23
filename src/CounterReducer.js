const counterReducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state + 1
    }

}
export default counterReducer;

// making child2 for reducer example