export default function(state = [], action){
    switch(action.type){

        case "GET_RECENT_IMAGES_PENDING":
            return {isSending: true};

        case "GET_RECENT_IMAGES_FULFILLED":
            return {data: action.payload.data.image, error:null, isFetched: true};

        case "GET_RECENT_IMAGES_REJECTED" :

            return {data: null, error: action.payload, isFetched: true};

        default:
            return state

    }
}