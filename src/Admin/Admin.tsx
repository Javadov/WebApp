import { NavLink } from 'react-router-dom'


const Admin = () => {
    return (
        <div className="__admin">
          <div className="container">
            <div className="d-grid justify-content-evenly">
              <NavLink to="/admin/products" className="__userpanel alert alert-warning text-center"><span>MANAGE PRODUCTS</span></NavLink>
              <NavLink to="/admin/users" className="__userpanel alert alert-warning text-center"><span>MANAGE USERS</span></NavLink>
              <div className="mb-4 d-grid">
                <a href="/login" className="btn " onClick={() => localStorage.clear()}><span>LOG OUT</span></a>
              </div> 
            </div>   
          </div>  
        </div>
    )
}

export default Admin