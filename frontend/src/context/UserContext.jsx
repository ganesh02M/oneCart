import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './AuthContext'
import axios from 'axios'

export const userDataContext = createContext()
function UserContext({children}) {
    let [userData,setUserData] = useState("")
    let {serverUrl} = useContext(authDataContext)


   const getCurrentUser = async () => {
    try {
        const token = localStorage.getItem("token")
        let result = await axios.get(serverUrl + "/api/user/getcurrentuser", {
            withCredentials: true,
            headers: token ? {Authorization: `Bearer ${token}`} : {}
        })
        setUserData(result.data)
    } catch (error) {
        setUserData(null)
        console.log(error)
    }
}

    useEffect(()=>{
     getCurrentUser()
    },[])



    let value = {
     userData,setUserData,getCurrentUser
    }
    
   
  return (
    <div>
      <userDataContext.Provider value={value}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext
