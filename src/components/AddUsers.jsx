import React, { useState } from 'react'

function AddUsers(props) {
    const [user,setUser] = useState({name:"",email:"",phone:"",address:""})
    let date = new Date()
    function clickHandle(e){
        e.preventDefault()
        
        props.setAllUsers([...props.allUsers,user])
        if (JSON.parse(localStorage.getItem("allUserArray"))=== null){
            localStorage.setItem("allUserArray",JSON.stringify([]))
        }    
            let temporary = JSON.parse(localStorage.getItem("allUserArray"))
            temporary.push(user)
            localStorage.setItem("allUserArray",JSON.stringify(temporary))
        
        setUser({ name: "", email: "", phone: "", address: ""})
    }
    return (
        <div>
            <h1>Add users</h1>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value,id:date.getMilliseconds() })} /> <br /> <br />


                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} /><br /> <br />


                <label htmlFor="phone">Phone:</label>
                <input type="number" name="phone" id="phone" value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} /><br /> <br />


                <label htmlFor="address">Address:</label>
                <input type="text" name="address" id="address" value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} /><br /> <br />


                <button onClick={clickHandle}>Save</button>
            
            </form>
        </div>
    )
}
// name
// email
// phone
// address
export default AddUsers
