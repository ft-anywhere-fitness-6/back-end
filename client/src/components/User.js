import React from "react";

const User = props => {
    
    return (<div >             
        <div className = "user-card"> 
        <p>{props.user.user_id}</p>       
        <h4>username: {props.user.username}</h4>
        <p>{props.user.role_name}</p>             

        </div>            
    </div>)
}

export default User;