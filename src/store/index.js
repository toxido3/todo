import { createStore } from "vuex";
import todos from './modules/todos';

//Load vuex

//Create store
export default createStore({
    modules:{
        todos
    }
})