import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

const defaultBlogState = [
	{
		title:'',
		imageUrl:'',
		like:null,

	}
]
const blogReducer = (state = defaultBlogState, action) => {
	switch(action.type){
		default :
			return state;
	}
}


const store = createStore(combineReducers({
	blogReducer:blogReducer
}))

console.log(store.getState())

export default store;