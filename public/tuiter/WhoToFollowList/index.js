import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
            <li class="list-group-item">
                <strong>Who to Follow</strong>
            </li>
            ${who.map(user => WhoToFollowListItem(user)).join('')}
           </ul>
`); }

export default WhoToFollowList;