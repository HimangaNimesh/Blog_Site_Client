import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img 
        className='postImg' 
        src="https://images.pexels.com/photos/1998438/pexels-photo-1998438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet c</span>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dicta hic libero sint praesentium. Tempora adipisci laudantium eos placeat. Eius voluptate error natus voluptatibus eaque vitae quisquam, adipisci vero praesentium!Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dicta hic libero sint praesentium. Tempora adipisci laudantium eos placeat. Eius voluptate error natus voluptatibus eaque vitae quisquam, adipisci vero praesentium!Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dicta hic libero sint praesentium. Tempora adipisci laudantium eos placeat. Eius voluptate error natus voluptatibus eaque vitae quisquam, adipisci vero praesentium!</p>
        
    </div>
  )
}
