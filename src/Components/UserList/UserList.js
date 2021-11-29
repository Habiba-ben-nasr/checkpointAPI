import React from 'react'
import UserCard from '../UserCard/UserCard'
// import UserCard from '../Usercard/Usercard'

const UserList = ({users}) => {
    return (
        <div style={{ display:'flex' , flexWrap:"wrap" , justifyContent:"space-between"}}>
            {
           users.map((user,i)=> <UserCard key={i} user={user} />)
            }
        </div>
    )
}

export default UserList