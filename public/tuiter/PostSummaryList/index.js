import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"
const Index = () => {
    return (`
           <ul class="list-group">
            ${posts.map(post => PostSummaryItem(post)).join('')}
           </ul>
`); }
// ${posts.map(post => PostSummaryItem(post)).join('')}
export default Index;