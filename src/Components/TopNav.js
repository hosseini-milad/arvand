const TopNav = (props)=>{
  
    return(
      <section class="top-quick-nav">
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-light">
            <button class="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" data-target="#nav-top-left" aria-expanded="true" aria-label="Nav Toggler">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse hide" id="nav-top-left">
              <ul class="navbar-nav left">
                <li class="nav-item">
                  <a href="https://www.eworldtrade.com/premium-services/" title="Premium Services">
                    <span>
                      <i class="fas fa-star"></i> اشتراک ویژه </span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/buyer" title="Buyers">خریداران</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/" title="Products">محصولات</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/" title="Companies">فروشندگان</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/" title="Manufacturers">تولیدکنندگان</a>
                </li>
              </ul>
              <ul class="navbar-nav right">
                <li class="nav-item">
                  <a class="nav-link" href="/contact-us/">تماس با ما</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#" id="openLiveChatWidget">راهنما </a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="javascript:;" id="language-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="flag-icon flag-icon-us"></span> فارسی </a>
                  <div class="dropdown-menu" aria-labelledby="language-dropdown">
                    <a class="dropdown-item english-id" id="english-id" title="English">
                      <span class="flag-icon flag-icon-us"></span> English </a>
                    <a class="dropdown-item" href="https://cn.eworldtrade.com/" title="Chinese">
                      <span class="flag-icon flag-icon-cn"></span> Chinese </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    )
}
export default TopNav