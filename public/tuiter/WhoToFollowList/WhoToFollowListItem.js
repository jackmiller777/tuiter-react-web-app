const WhoToFollowListItem = (who) => {
    return(`
   <li class="list-group-item">
    <div class="row flex-nowrap">
        <div class="col-2">
            <img class="rounded-circle"
                 height="48px"
                 width="48px"
                 src=${who.avatarIcon}>
        </div>
        <div class="col-6">
            <div class="m-0 p-0">
                <p class="m-0 p-0">
                    ${who.userName}
                    <i class="fas fa-check-circle"></i>
                </p>
                @${who.handle}
            </div>
        </div>
        <div class="col-2">
            <button class="btn btn-primary rounded-pill">
                Follow
            </button>
        </div>
    </div>
   </li>
 `);
}
export default WhoToFollowListItem;