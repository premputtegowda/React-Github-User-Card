import React from 'react'
import { FaGithub, FaUserFriends } from 'react-icons/fa';

import FollowerList from './FollowerList'

export default function User(props){
    
    return(
        <div className='card'>
                         
                <img src={`${props.user.avatar_url}`} alt="User Avatar" />
           
           <div className="card-body">
               <p>{props.user.login}</p>
               <a href={`${props.user.html_url}`} target="_blank" ><FaGithub /></a>
               <p onClick={()=> props.fetchFollowers(props.user.login)}><FaUserFriends/></p>

               <div>
                    {props.user.login === props.followers.login && <FollowerList followers={props.followers} resetFollowers={props.resetFollowers}/> }
                       
                   
                   
                    
                </div>
              
           </div>
           

          
           
        </div>
        
        
      
    )
}