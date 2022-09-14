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
                        Login
                    </div>
                    <div className="clientHeader">
                        <div className="clientPart">
                            Messages
                        </div>
                        <div className="clientPart">
                            Orders
                        </div>
                        <div className="clientPart">
                            Cart
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header