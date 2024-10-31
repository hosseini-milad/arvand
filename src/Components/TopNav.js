import { useState } from "react"

const TopNav = (props)=>{
  const [showMenu,setShowMenu] = useState(0)
    return(
      <section className="top-quick-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <button className="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" data-target="#nav-top-left" aria-expanded="true" aria-label="Nav Toggler"
            onClick={()=>setShowMenu(showMenu?0:1)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`navbar-collapse ${showMenu?"":"collapse hide"}`} id="nav-top-left">
              <ul className="navbar-nav left">
                <li className="nav-item">
                  <a href="https://www.eworldtrade.com/premium-services/" title="Premium Services">
                    <span>
                      <i className="fas fa-star"></i> اشتراک ویژه </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/buyer" title="Buyers">خریداران</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" title="Products">محصولات</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" title="Companies">فروشندگان</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" title="Manufacturers">تولیدکنندگان</a>
                </li>
              </ul>
              <ul className="navbar-nav right">
                <li className="nav-item">
                  <a className="nav-link" href="/contact-us/">تماس با ما</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#" id="openLiveChatWidget">راهنما </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="javascript:;" id="language-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="flag-icon flag-icon-us"></span> فارسی </a>
                  <div className="dropdown-menu" aria-labelledby="language-dropdown">
                    <a className="dropdown-item english-id" id="english-id" title="English">
                      <span className="flag-icon flag-icon-us"></span> English </a>
                    <a className="dropdown-item" href="https://cn.eworldtrade.com/" title="Chinese">
                      <span className="flag-icon flag-icon-cn"></span> Chinese </a>
                  </div>
                </li>
              </ul>
            </div>
            <a href="/" title="eWorldTrade" className="logoMobile showMobile">
              <img src="https://esimg.eworldtrade.com/2K19/images/logohighres.svg" width="255" height="44" class="logo mt-0" alt="eWorldTrade"/>
            </a>
            <button className="navbar-toggler navbar-toggler-right user-toggler" type="button" >
              <i className="fa fa-user"></i>
            </button>
          </nav>
        </div>
      </section>
    )
}
export default TopNav