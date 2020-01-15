import React from 'react'
import Follower from './Follower'


export default function FollowerList(props){
     console.log(props);
    return(
        <div className='follower-container'>
            <span onClick={props.resetFollowers}className='close'>&times;</span>
            {props.followers.follower_data.map(follower=> (
                 <Follower key={follower.id} follower={follower} />

            ))
            }
           
        </div>
        
        
      
    )
}