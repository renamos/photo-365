import axios from 'axios'

export function getImage(){
    var request = axios.get('http://everyday-ramos-api.herokuapp.com/images/last-image');
    return {type:'GET_IMAGE', payload:request}
}