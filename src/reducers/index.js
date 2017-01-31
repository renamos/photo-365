import {combineReducers} from 'redux';
import imageReducer from './image-reducer'
import photosReducer from './photos-reducer'


const rootReducer = combineReducers({
    imageReducer: imageReducer,
    photosReducer: photosReducer
});

export default rootReducer;
