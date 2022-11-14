function Header(){
    return(
        <header>
            <div className="topBanner">
                <img src="/topBanner.jpg" />
            </div>
            <div className="headerTop">
                <div className="logoHeader">
                    <img src="/logo.png" />
                </div>
                <div className="searchHeader">
                    <div className="searchHolder">
                        <input type="text" placeHolder="What are youe" />
                    </div>
                    <div className="searchButton">
                        <span>Search</span>
                    </div>
                </div>
                <div className="clientField">
                    <div className="loginHeader">
                        Sign in<br/>
                        Join for free
                    </div>
                    <div className="clientHeader">
                        <div className="clientPart">
                            <i className="fa messageHeader"></i><br/>
                            Messages
                        </div>
                        <div className="clientPart">
                            <i className="fa orderHeader"></i><br/>
                            Orders
                        </div>
                        <div className="clientPart">
                            <i className="fa cartHeader"></i><br/>
                            Cart
                        </div>
                    </div>
                </div>
            </div>
            <div className="seprate"></div>
            <div className="menuBar">
                <div className="catMenu">
                    Categories
                </div>
                <div className="simpleMenu">
                    <div className="menuItem">

                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header