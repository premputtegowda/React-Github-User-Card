import React from 'react'
import { FaGithub, FaUserFriends } from 'react-icons/fa';
import { GiShadowFollower } from "react-icons/gi";
import FollowerList from './FollowerList'

export default function User(props){
    
    return(
        <div className='card'>
                         
                <img src={`${props.user.avatar_url}`} alt="User Avatar" />
           
           <div className="card-body">
               <p>{props.user.login}</p>
               <a href={`${props.user.html_url}`} target="_blank" ><FaGithub /></a>
               <p onClick={()=> props.fetchFollowers(props.user.followers_url)}><FaUserFriends/></p>

               <div>
                    <FollowerList followers={props.followers}/>
                </div>
              
           </div>
           

          
           
        </div>
        
        
      
    )
}