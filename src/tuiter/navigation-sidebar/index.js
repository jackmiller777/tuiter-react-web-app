import React from "react";

import {useLocation} from "react-router";

const NavigationSidebar = () =>
    {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    console.log(active)
    return(
        <div>
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <i className="fab fa-twitter"></i>
                </a>

                <a className={`list-group-item
        ${active === 'home' || active === ''?'active':''}`}
                   href="/tuiter/home">
                    <i className="fas fa-home"></i> Home</a>
                <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}
                   href="/tuiter/explore">
                    <i className="fas fa-hashtag"></i> Explore</a>
                <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}
                   href="/public/tuiter/notification.html">
                    <i className="fas fa-bell"></i> Notifications</a>
                <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}
                   href="/public/tuiter/message.html">
                    <i className="fas fa-envelope"></i> Messages</a>
                <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}
                   href="/public/tuiter/bookmarks.html">
                    <i className="fas fa-bookmark"></i> Bookmarks</a>
                <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}
                   href="/public/tuiter/lists.html">
                    <i className="fas fa-list"></i> Lists
                </a>
                <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}
                   href="/public/tuiter/profile.html">
                    <i className="fas fa-user"></i> Profile</a>
                <a className={`list-group-item
                    ${active === 'more'?'active':''}`}
                   href="/public/tuiter/more.html">
                    <i className="fas fa-ellipsis-h"></i> More</a>

            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </div>
    );
}
export default NavigationSidebar;