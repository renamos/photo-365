import axios from 'axios'

export function saveImage(ImageFormData){
   var request = axios.post('http://localhost:8000/images/create', ImageFormData);
    return {type:'ADD_IMAGE', payload:request}
}