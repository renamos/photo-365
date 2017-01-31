export default function(state = [], action){
    switch(action.type){
        case "ADD_IMAGE_PENDING":
            return {isSending: true};

        case "ADD_IMAGE_FULFILLED" :
            return {data: action.payload, error:null, isFetched: true};

        case "ADD_IMAGE_REJECTED" :

            return {data: null, error: action.payload, isFetched: true};

        case "GET_IMAGE_PENDING":
            return {isSending: true};

        case "GET_IMAGE_FULFILLED":
            return {data: action.payload.data.image[0], error:null, isFetched: true};

        case "GET_IMAGE_REJECTED" :

            return {data: null, error: action.payload, isFetched: true};

        default:
            return state

    }
}