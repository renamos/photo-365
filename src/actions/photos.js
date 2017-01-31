import axios from 'axios'

export function recentImages(){
    var request = axios.get('http://localhost:8000/images/recent');
    return {type:'GET_RECENT_IMAGES', payload:request}
}