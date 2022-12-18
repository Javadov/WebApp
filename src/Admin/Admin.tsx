import { NavLink } from 'react-router-dom'


const Admin = () => {
    return (
        <>
          <div> 
              <p>Login Successfull</p>
          </div>
          <div className="container d-flex justify-content-evenly mt-5">
            <NavLink to="/admin/products" className="d-grid j-c a-i alert alert-danger text-center"><div>MANAGE PRODUCTS</div></NavLink>
            <NavLink to="/admin/users" className="d-grid j-c a-i alert alert-danger text-center"><div>MANAGE USERS</div></NavLink>
          </div>     
        </>
    )
}

export default Admin