import { LOADING , ERROR, SUCCESS} from "./ActionConstant"

const initialState={
    loading:false,
    error:false,
    user:{}
}

export const loginReducer=(store=initialState,{type,payload})=>{
        switch(type){
            case LOADING: return {...store,loading:true}
            case ERROR : return {...store,loading:false,error:true}
            case SUCCESS: return {...store,loading:false,error:false , user:payload}
           default: return  store
        }
}