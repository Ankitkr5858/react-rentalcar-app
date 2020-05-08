const setCars = (payload) => {
    return {
        type: 'carChanges',
        payload
    }
}

export default setCars;