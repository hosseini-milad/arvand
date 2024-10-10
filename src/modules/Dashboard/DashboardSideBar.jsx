function DashboardSideBar(){
    return (
        <div className="site-wrapper_left-col">
  
  <a href="https://www.eworldtrade.com/">
    <img src="https://www.eworldtrade.com/2K19/images/member/logo-high-res.svg" alt="EworldTrade Logo" className="img-responsive dashboard-logo d-block logo-block"/>
  </a>
  <a href="#" className="logo user-name d-block">
    <i className="fa fa-user-circle-o" aria-hidden="true"></i>Milad Hosseini </a>
  <div id="mySidenav" className="sidenav">
    <a href="javascript:void(0)" className="closebtn sidebar_close_btn" onclick="closeNav()">×</a>
    <a href="https://www.eworldtrade.com/">
      <img src="https://www.eworldtrade.com/2K19/images/member/logo-high-res.svg" alt="EworldTrade Logo" className="img-responsive dashboard-logo display-mobile"/>
    </a>
    <a href="#" className="logo user-name display-mobile">
      <i className="fa fa-user-circle-o" aria-hidden="true"></i>Milad Hosseini </a>
    <ul className="left-nav">
      <li>
        <a href="https://www.eworldtrade.com/member/dashboard/" className="active">
          <i className="fa fa-pie-chart"></i> Dashboard </a>
      </li>
      <li>
        <a href="https://www.eworldtrade.com/member/profile/" className="">
          <i className="fa fa-user"></i> My Profile </a>
      </li>
      <li>
        <a href="javascript:;" className="dbl-nav  inner-arrow">
          <i className="fa fa-commenting"></i> Messages </a>
        <ul className="child-nav">
          <li>
            <a href="https://www.eworldtrade.com/member/message/">Inbox <span id="unread_messages" className="label label-danger hidden">0</span>
            </a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/message/sent/">Sent</a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/message/draft/">Draft</a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/message/spam/">Spam</a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/message/trash/">Trash</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="javascript:;" className="dbl-nav  inner-arrow">
          <i className="fa fa-list-ul"></i> Products </a>
        <ul className="child-nav">
          <li>
            <a href="https://www.eworldtrade.com/member/product/create/">Add New Product</a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/product/">All Products</a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/product/group/">Product Group</a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/product/sorting/">Product Sorting</a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/product/disapprove/">Disapproved Products</a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/product/trash/">Trash</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="https://www.eworldtrade.com/member/company/" className="dbl-nav  inner-arrow">
          <i className="fa fa-building-o"></i> Company Profile </a>
        <ul id="member_company_list" className="child-nav">
          <li className="active">
            <a href="#company-basic" role="tab" data-toggle="tab">Basic Company Details</a>
          </li>
          <li className="">
            <a href="#factory" role="tab" data-toggle="tab">Factory Details</a>
          </li>
          <li className="">
            <a href="#trade-details" role="tab" data-toggle="tab">Trade Details</a>
          </li>
          <li className="">
            <a href="#introduction" role="tab" data-toggle="tab">Company Introduction</a>
          </li>
          <li className="">
            <a href="#social" role="tab" data-toggle="tab">Social Profiles</a>
          </li>
          <li className="">
            <a href="#trademark" role="tab" data-toggle="tab">Certification &amp; Trademark</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="javascript:;" className="dbl-nav  inner-arrow">
          <i className="fa fa-info"></i> Company Details </a>
        <ul className="child-nav">
          <li>
            <a href="https://www.eworldtrade.com/member/code_of_conduct/index/">Code of Conduct</a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/newsroom/index/">Newsroom</a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/factory/index/">Factory Tour</a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/management/index/">Management</a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/other/index/">Other Information</a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/quality/index/">Quality Control</a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/research/index/">Research &amp; Development</a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/services/index/">Services</a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/faq/">FAQ</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="https://www.eworldtrade.com/member/buy-offer/" className="">
          <i className="fa fa-rocket"></i> Buying Request </a>
      </li>
      <li>
        <a href="https://www.eworldtrade.com/member/tradealert/index/" className="">
          <i className="fa fa-bell"></i> Trade Alerts </a>
      </li>
      <li>
        <a className="dbl-nav  inner-arrow" href="javascript:;">
          <i className="fa fa-list"></i> My Contacts </a>
        <ul className="child-nav">
          <li>
            <a href="https://www.eworldtrade.com/member/contact/create/">Add New Contact</a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/contact/">Manage Contacts</a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/contact/group/">Manage Groups</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="https://www.eworldtrade.com/member/user/" className="">
          <i className="fa fa-users"></i> Sub Accounts </a>
      </li>
      <li>
        <a className="dbl-nav  inner-arrow" href="javascript:; ">
          <i className="fa fa-cogs"></i> Account Setting </a>
        <ul className="child-nav">
          <li>
            <a href="https://www.eworldtrade.com/member/general-setting/">General Setting</a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/inquiry-cc/">Inquiry CC Setting</a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/subscribe?subscribe/">Email Preference</a>
          </li>
          <li>
            <a href="https://www.eworldtrade.com/member/change-password/">Change Password</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="https://www.eworldtrade.com/store/amazon/" className="">
          <i className="fa fa-amazon"></i> Amazon FBA <div className="animated Pulse infinite faster">
            <span>new</span>
          </div>
        </a>
      </li>
      <li>
        <a href="https://www.eworldtrade.com/member/escrow_account/create/" className="">
          <i className="fa fa-money"></i> Escrow Account <div className="animated Pulse infinite faster">
            <span>new</span>
          </div>
        </a>
      </li>
      <li>
        <a href="https://www.eworldtrade.com/member/ticket/" className="">
          <i className="fa fa-ticket" aria-hidden="true"></i> Trouble Ticket </a>
      </li>
      <li>
        <a href="javascript:;" className="btnChat">
          <i className="fa fa-support" aria-hidden="true"></i> Live Support </a>
      </li>
    </ul>
  </div>
</div>
    )
}
export default DashboardSideBar