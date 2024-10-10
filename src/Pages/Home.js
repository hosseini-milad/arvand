import Slider from "../modules/Home/Slider"
import Host from "../modules/Home/Host"
import Exchange from "../modules/Home/Exchange"
import BottomPart from "../modules/Home/BottomPart"
import Plan from "../modules/Home/Plan"
import Content from "../modules/Home/Content"
import SubSlider from "../modules/Home/SubSlider"
import Category from "../modules/Home/Category"

function Home(props){
    
   return(
      <main className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
         <Slider />
         
         <SubSlider />
         <Category/>
         <Plan />
         <Content />
         <BottomPart />
    </main>
   )
}
export default Home