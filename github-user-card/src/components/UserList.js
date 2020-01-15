import React from 'react'
import User from './User'


export default function UserList(props){
  
    return(
        <div className='user-container'>
            {props.users.map(user=> (
                 <User key={user.id} user={user} fetchFollowers={props.fetchFollowers} followers={props.followers} resetFollowers = {props.resetFollowers}/>

            ))
            }
           
        </div>
        
        
      
    )
}