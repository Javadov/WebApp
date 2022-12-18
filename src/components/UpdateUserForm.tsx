import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IUserContext, UserContext } from '../contexts/UserContext'

const UpdateUserForm = () => {

    const id = useParams<any>()
    const { user, setUser, get, update } = React.useContext(UserContext) as IUserContext

  

    return (
        <form onSubmit={update} className="d-grid mb-5">
            <h3 className="display-6 mb-4">Create User</h3>
            <input type="hidden" value={user.id} />
            <input value={user.firstName} onChange={(e) => setUser({...user, firstName: e.target.value})} type="text" className="form-control py-2" />
            <input value={user.lastName} onChange={(e) => setUser({...user, lastName: e.target.value})} type="text" className="form-control py-2" />
            <input value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} type="text" className="form-control py-2" />
            <button type="submit" className="btn btn-success py-2 mt-3">CREATE USER</button>
        </form>
    )
}

export default UpdateUserForm