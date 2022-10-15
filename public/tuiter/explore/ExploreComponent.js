import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
           <div class="row mb-2">
                <div class="col-11">
                    <div class="position-relative">
                        <input placeholder="Search Tuiter"
                               class="form-control rounded-pill ps-5 position-relative"/>
                        <i class="wd-txt-left fas fa-search text-secondary"></i>
                    </div>
                </div>
                <div class="col-1">
                    <i class="fas fa-cog fa-2x text-primary"></i>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
              <li class="nav-item">
                    <a class="nav-link active"
                       href="for-you.html">
                        For you
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"
                       href="trending.html">
                        Trending
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"
                       href="news.html">
                        News
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"
                       href="sports.html">
                        Sports
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"
                       href="entertainment.html">
                        Entertainment
                    </a>
                </li>
           </ul>
            <div class="position-relative mb-2">
                <img src="../../images/spacex-ship.jpg" class="w-100"/>
                <h3 class="wd-txt-bottom-left text-white">SpaceX's Starship</h3>
            </div>

           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

