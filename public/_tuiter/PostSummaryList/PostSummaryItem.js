const PostSummaryItem = (post) => {
    return(`
    <li class="list-group-item">
        <div class="row">
            <div class="col-9">
            <div class="wd_fg_color_gray">
                ${post.topic}
            </div>
            <div class="d-block">
                ${post.userName} 
                <i class="fas fa-check-circle"></i>
                <span class="wd_fg_color_gray"> - ${post.time}</span>
            </div>
            <div class="">
                ${post.title}
            </div>
            <div class="wd_fg_color_gray">
                ${post.tweets}
            </div>
            </div>
            <div class="col-3">
                <img height="100px" width="100px" class="wd-rounded-img" src=${post.image}/>
            </div>
        </div>
    </li>
 `);
}
export default PostSummaryItem;