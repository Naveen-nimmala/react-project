import React from 'react'
import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-linkedin"></i>
                <i className="topIcon fab fa-github"></i>
                <i className="topIcon fab fa-twitter"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <a href="/">
                    <li className="topListItem">HOME</li>
                    </a>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">
                    <a href="/compose">
                        <button type="button" class="compose-button btn btn-success ">Compose New Blog</button>
                        </a>LOGOUT
                    </li>
                </ul>
            </div>
            {/* <div className="topRight">
                <img className="topImg" 
                src="https://naveennimmala.website/images/about-model.png"
                alt=""
                />
                <i className="topSearchIcon fas fa-search"></i>
            </div> */}
        </div>
    )
}
