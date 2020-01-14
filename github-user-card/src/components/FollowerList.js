import React from 'react'
import Follower from './Follower'


export default function FollowerList(props){
     console.log(props);
    return(
        <div className='follower-container'>
            {props.followers.map(follower=> (
                 <Follower key={follower.id} follower={follower} />

            ))
            }
           
        </div>
        
        
      
    )
}