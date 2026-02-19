const Admin = ()=><div>This is Admin Page</div>
const User = ()=><div>This is User Page</div>

const AdminandUserPanel = ({data}:{
    data:"User" | "Admin"
}) => {
    if(data==="User"){
        return User()
    }

    if(data==="Admin"){
        return Admin()
    }
    
    // Alternate way 
    // return data === 'Admin' ? Admin() : User()
}

export default AdminandUserPanel

