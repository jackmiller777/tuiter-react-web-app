const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/public">
       <i class="fab fa-twitter"></i></a>
       
     <a class="list-group-item" href="/public/tuiter/home.html">
       <i class="fas fa-home"></i> Home</a>
     <a class="list-group-item" href="/public/tuiter/explore/index.html">
       <i class="fas fa-hashtag"></i> Explore</a>
     <a class="list-group-item" href="/public/tuiter/notification.html">
       <i class="fas fa-bell"></i> Notifications</a>
     <a class="list-group-item" href="/public/tuiter/message.html">
       <i class="fas fa-envelope"></i> Messages</a>
     <a class="list-group-item" href="/public/tuiter/lists.html">
       <i class="fas fa-list"></i> Lists</a>
     <a class="list-group-item" href="/public/tuiter/profile.html">
       <i class="fas fa-user"></i> Profile</a>
     <a class="list-group-item" href="/public/tuiter/more.html">
       <i class="fas fa-ellipsis-h"></i> More</a>
       
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;