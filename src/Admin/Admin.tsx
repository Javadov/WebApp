import { NavLink } from 'react-router-dom'


const Admin = () => {
    return (
        <div className="__admin">
          <div className="container">
            <div > 
                <p className="alert alert-success text-center">Login Successfull</p>
            </div>
            <div className="d-grid justify-content-evenly mt-5">
              <NavLink to="/admin/products" className="d-grid j-c a-i alert alert-danger text-center"><div>MANAGE PRODUCTS</div></NavLink>
              <NavLink to="/admin/users" className="d-grid j-c a-i alert alert-danger text-center"><div>MANAGE USERS</div></NavLink>
            </div>   
          </div>  
        </div>
    )
}

export default Admin