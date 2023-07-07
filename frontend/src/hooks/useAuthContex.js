import {AuthContext} from "../context/authContext"
import { useContext } from "react"

export const useAuthContext = ()=>{
    const context = useContext(AuthContext)

    if(!context){
        throw Error("UseAuthContext must be used inside and authcontext provider")
    }

    return context
}