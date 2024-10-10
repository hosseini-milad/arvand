import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function Plan(props){
   return( 
    <section className="container d-md-block d-none">
      <div className="row rowHolder">
        <div className='col6'>
          <Swiper className='mySwipper'
          spaceBetween={50}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide><img src="https://esimg.eworldtrade.com/banner/featured/company/ewt-2094111.jpeg"/></SwiperSlide>
          <SwiperSlide><img src="https://esimg.eworldtrade.com/banner/featured/company/ewt-2101448.jpeg"/></SwiperSlide>
          
        </Swiper>
        </div>
        <div className='col6'>
          <Swiper className='mySwipper'
            spaceBetween={50}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide><img src="https://esimg.eworldtrade.com/banner/featured/company/ewt-2091682.jpeg"/></SwiperSlide>
            <SwiperSlide><img src="https://esimg.eworldtrade.com/banner/featured/company/ewt-171171.jpeg"/></SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </section>
   )
};
export default Plan