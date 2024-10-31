
function BottomPart(props){
    
  //window.scrollTo(0, 270);},[pageNumber,filters,perPage,refreshTable])
   return(
    <div className="container category-tabs">
    <div className="col-md-12">
          <h2>
            <span>مشاهده <b>آموزش ها</b>
            </span>
          </h2>
          <br/>
          </div>
    <div className="clear20"></div>
    <div className="row">
      <div className="col-md-4 col-sm-6">
        <div className="img-teaser-wrapper img-teaser-readmore">
          <img src="/img/hub/sadegh.jpg" className="img-responsive lazyload" />
          <div className="img-teaser-caption text-center">
            <div>
              <div className="img-teaser-caption-headline">روش ارائه به سرمایه گذار</div>
              <div className="img-teaser-caption-text img-teaser-caption-text-readmore">استاد محمدجواد محمد صادق</div>
            </div>
          </div>
        </div>
        <div className="clear30 hidden-xs"></div>
        <div className="clear6 visible-xs-block"></div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="img-teaser-wrapper img-teaser-readmore">
          <img src="/img/hub/soltani.jpg" className="img-responsive lazyload" />
          <div className="img-teaser-caption text-center">
            <div>
              <div className="img-teaser-caption-headline">انواع روش های تامین مالی استارتاپ</div>
              <div className="img-teaser-caption-text img-teaser-caption-text-readmore">استاد محمدرضا سلطانی نوید</div>
            </div>
          </div>
        </div>
        <div className="clear30 hidden-xs"></div>
        <div className="clear6 visible-xs-block"></div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="img-teaser-wrapper img-teaser-readmore">
          <img src="/img/hub/moradi.jpg" className="img-responsive lazyload" />
          <div className="img-teaser-caption text-center">
            <div>
              <div className="img-teaser-caption-headline">انواع روش های تبادل فناوری</div>
              <div className="img-teaser-caption-text img-teaser-caption-text-readmore">استاد مهدی مرادی</div>
            </div>
          </div>
        </div>
        <div className="clear30 hidden-xs"></div>
        <div className="clear6 visible-xs-block"></div>
      </div>
      
    </div>
  </div>
   )
}
export default BottomPart