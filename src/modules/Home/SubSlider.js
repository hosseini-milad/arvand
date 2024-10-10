function SubSlider(){
    return(
        <section className="ban-cta d-none d-md-block " onclick="document.getElementById('featuredPointSectionLink').click()" id="featuredPointSection">
        <div className="container">
            <ul style={{fontSize:"12px"}}>
            <li>
                <i className="fa fa-truck"></i> تضمین ارسال به موقع
            </li>
            <li>
                <i className="fa fa-check"></i> تضمین کیفیت کالا
            </li>
            <li>
                <i className="fa fa-globe"></i> شبکه ملی ارسال
            </li>
            <li>
                <i className="fa fa-headphones"></i> 24/7 پشتیبانی
            </li>
            </ul>
        </div>
        <a href="javascript:registerPopup(&quot;We provide you representatives who will manage all of your B2B engagements interactively and digitally.&quot;)" className="d-none" id="featuredPointSectionLink"></a>
        </section>
    )
}
export default SubSlider