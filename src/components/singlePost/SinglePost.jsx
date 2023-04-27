import React from 'react'
import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img 
            className='singlePostImg'
            src="https://images.pexels.com/photos/1998438/pexels-photo-1998438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" />
            <h1 className='singlePostTitle'>
                Lorem ipsum, dolor sit amet consectetur
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuther">
                    Auther: <b>Himanga Nimesh</b>
                </span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem rerum qui autem sit sint? Explicabo nemo perspiciatis praesentium aliquam, expedita numquam, aperiam, libero voluptate molestiae dolor reprehenderit dolore excepturi neque? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ratione nemo ipsa optio alias ex modi dolor! Vero aliquam dicta aliquid, excepturi culpa natus consectetur voluptatem iste ut accusantium. Nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sint iure tempora corrupti totam eum obcaecati, vero aliquam ducimus quasi exercitationem saepe molestias sequi consequuntur natus harum voluptas, et mollitia.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem rerum qui autem sit sint? Explicabo nemo perspiciatis praesentium aliquam, expedita numquam, aperiam, libero voluptate molestiae dolor reprehenderit dolore excepturi neque? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ratione nemo ipsa optio alias ex modi dolor! Vero aliquam dicta aliquid, excepturi culpa natus consectetur voluptatem iste ut accusantium. Nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sint iure tempora corrupti totam eum obcaecati, vero aliquam ducimus quasi exercitationem saepe molestias sequi consequuntur natus harum voluptas, et mollitia.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem rerum qui autem sit sint? Explicabo nemo perspiciatis praesentium aliquam, expedita numquam, aperiam, libero voluptate molestiae dolor reprehenderit dolore excepturi neque? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ratione nemo ipsa optio alias ex modi dolor! Vero aliquam dicta aliquid, excepturi culpa natus consectetur voluptatem iste ut accusantium. Nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sint iure tempora corrupti totam eum obcaecati, vero aliquam ducimus quasi exercitationem saepe molestias sequi consequuntur natus harum voluptas, et mollitia.
            </p>
        </div>
    </div>
  )
}
