import axios from 'axios'

export function recentImages(){
    var request = axios.get('http://everyday-ramos-api.herokuapp.com/images/recent');
    return {type:'GET_RECENT_IMAGES', payload:request}
}