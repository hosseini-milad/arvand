function DashboardHeader(){
    return (
        <div className="col-xs-12">
            <div className="top-bar">
                <div className="col-sm-6 package-image">
                <h3>داشبورد</h3>
                </div>
                <div className="col-sm-6">
                <ul className="top_right list-inline pull-left" id="authbar">
                    <div className="sidebar_toggle_btn">
                    <li>
                        <a href="javascript:;" onclick="toggleNav()">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                        <span>Menu</span>
                        </a>
                    </li>
                    <li></li>
                    </div>
                    <li className="premium">
                    <a href="https://www.eworldtrade.com/premium-services//?widget_source=join_footer_btn&amp;psource=member_hbtn" title="Upgrade">
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <span> Upgrade</span>
                    </a>
                    </li>
                    <li className="notificaton">
                    <a href="https://www.eworldtrade.com/member/message" title="View">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    </a>
                    </li>
                    <a href="https://www.eworldtrade.com/member/message" title="View"></a>
                    <li className="dropdown profile">
                    <a href="https://www.eworldtrade.com/member/message" title="View"></a>
                    <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                        <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dLabel">
                        <li>
                        <a href="https://www.eworldtrade.com/member/dashboard/">Dashboard</a>
                        </li>
                        <li>
                        <a href="https://www.eworldtrade.com/member/profile/">My Profile</a>
                        </li>
                        <li>
                        <a href="https://www.eworldtrade.com/member/company/">Company Profile</a>
                        </li>
                        <li>
                        <a href="https://www.eworldtrade.com/member/product/">Products</a>
                        </li>
                        <li>
                        <a href="https://www.eworldtrade.com/logout/"> Logout</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <a href="https://www.eworldtrade.com/help//" title="Help">
                        <i className="fa fa-book" aria-hidden="true"></i>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
    )
}
export default DashboardHeader