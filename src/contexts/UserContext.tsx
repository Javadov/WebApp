import React, {useState, useContext, createContext} from 'react'
import { User, UserRequest } from '../models/UserModel'
import { UserProviderProps } from '../models/UserProviderProps'

export interface IUserContext {
    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>
    userRequest: UserRequest
    setUserRequest: React.Dispatch<React.SetStateAction<UserRequest>>
    users: User[]
    create: (e: React.FormEvent) => void
    get: (id: number) => void
    getAll: () => void
    update: (e: React.FormEvent) => void
    remove: (id: number) => void
}

export const UserContext = createContext<IUserContext | null>(null)
export const useUserContext = () => {return useContext(UserContext)}

const UserProvider = ({children} : UserProviderProps) => {
    const baseUrl = 'http://localhost:9000/api/users'
    const USER_DEFAULT: User = { id: 0, firstName: '', lastName: '', email:'' }
    const USERREQUEST_DEFAULT: UserRequest = { firstName: '', lastName: '', email: '', password: '' }

    const [user, setUser] = useState<User>(USER_DEFAULT)
    const [userRequest, setUserRequest] = useState<UserRequest>(USERREQUEST_DEFAULT)
    const [users, setUsers] = useState<User[]>([])

    const create = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userRequest)
        })

        if (result.status === 201)
            setUserRequest(USERREQUEST_DEFAULT)
    }
    
    const get = async (id: number) => {
        const result = await fetch(`${baseUrl}/${id}`)
        if (result.status === 200)
            setUser(await result.json())
    }

    const getAll = async () =>{
        const result = await fetch(`${baseUrl}`)
        if (result.status === 200)
            setUsers(await result.json())
    }

    const update = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}/${user.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userRequest)
        })

        if (result.status === 200)
            setUser(await result.json())
    }

    const remove = async (id: number) => {
        const result = await fetch(`${baseUrl}/${id}`, {
            method: 'delete',
        })

        if (result.status === 204)
        setUser(USER_DEFAULT)
    }

  return (
    <UserContext.Provider value={{ user, setUser, userRequest, setUserRequest, users, create, get, getAll, update, remove}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider