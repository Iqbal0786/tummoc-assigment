import { LOADING , ERROR, SUCCESS} from "./ActionConstant"

const initialState={
    loading:false,
    error:false,
}

export const registerReducer=(store=initialState,{type,payload})=>{
        switch(type){
            case LOADING: return {...store,loading:true}
            case ERROR : return {loading:false,error:true}
            case SUCCESS: return {loading:false,error:false}
        }
}