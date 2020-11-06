import {createContext} from 'react'

export const UserContext = createContext(localStorage.getItem('user'))
export const ImgContext  = createContext(null)