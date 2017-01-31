import axios from 'axios'

export function getImage(){
    var request = axios.get('http://localhost:8000/images/last-image');
    return {type:'GET_IMAGE', payload:request}
}