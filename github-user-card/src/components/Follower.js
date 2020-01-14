import React from 'react'
import { FaGithub, FaUserFriends } from 'react-icons/fa';
import { GiShadowFollower } from "react-icons/gi";
import UserList from './UserList'

export default function Follower(props){
    
    return(

           <div className='follower-container'>              
                <div className='tooltip'>
                    <img src={`${props.follower.avatar_url}`} alt="User Avatar" /> 
                    <span class='tooltiptext'>{props.follower.login}</span>
                
                </div>
           </div>
     
    )
}