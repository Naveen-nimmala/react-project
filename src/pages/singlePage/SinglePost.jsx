import React from 'react'
import {withRouter} from 'react-router-dom'
import Posts from "../home/postData";



function SinglePost(props) {
    for (var i = 0; i < Posts.length; i++){
        if (props.match.params.id == Posts[i].id){
            var SinglePost = {
                title: Posts[i].title,
                content: Posts[i].content
            }
        }
    }
    console.log(SinglePost.title)

    return (
        <div className="home-data">
            <h1 className="home-title"> {SinglePost.title}</h1>
            <p className="date-time"></p> 
            <p className="home-content">{SinglePost.content}</p>
        </div>
    )
}

export default withRouter(SinglePost);