import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return(
        <div>
            <div className="list-group">
                <a className="list-group-item" href="/public">
                    <i className="fab fa-twitter"></i>
                </a>

                <a className={`list-group-item
        ${active === 'home'?'active':''}`}
                   href="/public/tuiter/explore/home.html">
                    <i className="fas fa-home"></i> Home</a>
                <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}
                   href="/public/tuiter/explore/index.html">
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