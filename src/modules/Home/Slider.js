import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function Slider(props){
    return(
      <section className="menu-banner-form">
        <div className="container inRow">
          <div className="prd-cat-nav col-md-4 col-lg-3 p-0 d-md-block d-none">
            <h4> دسته بندی ها </h4>
            <ul>
              <li className="submenu">
                <a href="/apparel/" title="Apparel"> ساختمانی بهداشتی 
                <i className="fas fa-angle-left"></i>
                </a>
                <div className="submenu-row">
                  <div className="col-md-6">
                    <h5>
                      <a href="/" title="Underwear" className="text-danger text-truncate">
                      لوله و اتصالات</a>
                    </h5>
                    <ul>
                      <li>
                        <a href="https://www.eworldtrade.com/apparel/underwear/bra/" title="Bra" className="text-truncate">تست</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/apparel/underwear/womens-panties/" title="Womens Panties" className="text-truncate">Womens Panties</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/apparel/underwear/mens-briefs-boxers/" title="Mens Briefs Boxers" className="text-truncate">Mens Briefs Boxers</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/apparel/underwear/shapers/" title="Shapers" className="text-truncate">Shapers</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/apparel/underwear/sexy-underwear/" title="Sexy Underwear" className="text-truncate">Sexy Underwear</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/apparel/underwear/bra-brief-sets/" title="Bra Brief Sets" className="text-truncate">Bra Brief Sets</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/apparel/underwear/garters-bel/" title="Garters Bel" className="text-truncate">Garters Bel</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/apparel/underwear/camisoles-7983/" title="Camisoles 7983" className="text-truncate">Camisoles 7983</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>
                      <a href="https://www.eworldtrade.com/apparel/wedding-apparel-accessories/" title="Wedding Apparel Accessories" className="text-danger text-truncate">پلیمر</a>
                    </h5>
                    <ul>
                      <li>
                        <a href="https://www.eworldtrade.com/apparel/wedding-apparel-accessories/wedding-dresses/" title="Wedding Dresses" className="text-truncate">Wedding Dresses</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/apparel/wedding-apparel-accessories/bridal-accessories/" title="Bridal Accessories" className="text-truncate">Bridal Accessories</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/apparel/wedding-apparel-accessories/bridal-gown/" title="Bridal Gown" className="text-truncate">Bridal Gown</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="submenu">
                <a href="/home-appliance/" title="Home Appliances"> سیستم های مکانیکی <i className="fas fa-angle-left"></i>
                </a>
                <div className="submenu-row">
                  <div className="col-md-6">
                    <h5>
                      <a href="https://www.eworldtrade.com/home-appliance/cooking-appliances/" title="Cooking Appliances" className="text-danger text-truncate">Cooking Appliances</a>
                    </h5>
                    <ul>
                      <li>
                        <a href="https://www.eworldtrade.com/home-appliance/cooking-appliances/cooktops/" title="Cooktops" className="text-truncate">Cooktops</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/home-appliance/cooking-appliances/induction-cookers/" title="Induction Cookers" className="text-truncate">Induction Cookers</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/home-appliance/cooking-appliances/ovens/" title="Ovens" className="text-truncate">Ovens</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/home-appliance/cooking-appliances/range-hoods/" title="Range Hoods" className="text-truncate">Range Hoods</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/home-appliance/cooking-appliances/rice-cookers/" title="Rice Cookers" className="text-truncate">Rice Cookers</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/home-appliance/cooking-appliances/electric-deep-fryers/" title="Electric Deep Fryers" className="text-truncate">Electric Deep Fryers</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/home-appliance/cooking-appliances/hot-plates/" title="Hot Plates" className="text-truncate">Hot Plates</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/home-appliance/cooking-appliances/electric-grills-electric-griddles/" title="Electric Grills Electric Griddles" className="text-truncate">Electric Grills Electric Griddles</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>
                      <a href="https://www.eworldtrade.com/home-appliance/air-conditioning-appliances/" title="Air Conditioning Appliances" className="text-danger text-truncate">Air Conditioning Appliances</a>
                    </h5>
                    <ul>
                      <li>
                        <a href="https://www.eworldtrade.com/home-appliance/air-conditioning-appliances/dvd-burner/" title="DVD Burner" className="text-truncate">DVD Burner</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/home-appliance/air-conditioning-appliances/fans/" title="Fans" className="text-truncate">Fans</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/home-appliance/air-conditioning-appliances/humidifiers/" title="Humidifiers" className="text-truncate">Humidifiers</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/home-appliance/air-conditioning-appliances/air-purifiers/" title="Air Purifiers" className="text-truncate">Air Purifiers</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/home-appliance/air-conditioning-appliances/air-conditioners/" title="Air Conditioners" className="text-truncate">Air Conditioners</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/home-appliance/air-conditioning-appliances/dehumidifiers/" title="Dehumidifiers" className="text-truncate">Dehumidifiers</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/home-appliance/air-conditioning-appliances/other-air-conditioning-appliances/" title="Other Air Conditioning Appliances" className="text-truncate">Other Air Conditioning Appliances</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="submenu">
                <a href="https://www.eworldtrade.com/machinery/" title="Machinery"> سیستم های الکترونیکی <i className="fas fa-angle-left"></i>
                </a>
                <div className="submenu-row">
                  <div className="col-md-6">
                    <h5>
                      <a href="https://www.eworldtrade.com/machinery/energy-mineral-equipment/" title="Energy Mineral Equipment" className="text-danger text-truncate">Energy Mineral Equipment</a>
                    </h5>
                    <ul>
                      <li>
                        <a href="https://www.eworldtrade.com/machinery/energy-mineral-equipment/mining-machinery/" title="Mining Machinery" className="text-truncate">Mining Machinery</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/machinery/energy-mineral-equipment/energy-saving-equipment/" title="Energy Saving Equipment" className="text-truncate">Energy Saving Equipment</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/machinery/energy-mineral-equipment/gas-generation-equipment/" title="Gas Generation Equipment" className="text-truncate">Gas Generation Equipment</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/machinery/energy-mineral-equipment/oil-field-equipment/" title="Oil Field Equipment" className="text-truncate">Oil Field Equipment</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/machinery/energy-mineral-equipment/petroleum-processing-equipment/" title="Petroleum Processing Equipment" className="text-truncate">Petroleum Processing Equipment</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/machinery/energy-mineral-equipment/energy-saving-equipment-parts/" title="Energy Saving Equipment Parts" className="text-truncate">Energy Saving Equipment Parts</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/machinery/energy-mineral-equipment/gas-generation-equipment-parts/" title="Gas Generation Equipment Parts" className="text-truncate">Gas Generation Equipment Parts</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/machinery/energy-mineral-equipment/magnesium-production-line/" title="Magnesium Production Line" className="text-truncate">Magnesium Production Line</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>
                      <a href="https://www.eworldtrade.com/machinery/food-beverage-machinery/" title="Food Beverage Machinery" className="text-danger text-truncate">Food Beverage Machinery</a>
                    </h5>
                    <ul>
                      <li>
                        <a href="https://www.eworldtrade.com/machinery/food-beverage-machinery/snack-machines/" title="Snack Machines" className="text-truncate">Snack Machines</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/machinery/food-beverage-machinery/fruit-vegetable-processing-machines/" title="Fruit Vegetable Processing Machines" className="text-truncate">Fruit Vegetable Processing Machines</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/machinery/food-beverage-machinery/baking-equipment/" title="Baking Equipment" className="text-truncate">Baking Equipment</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/machinery/food-beverage-machinery/beverage-wine-processing-machinery/" title="Beverage Wine Processing Machinery" className="text-truncate">Beverage Wine Processing Machinery</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/machinery/food-beverage-machinery/other-food-processing-machinery/" title="Other Food Processing Machinery" className="text-truncate">Other Food Processing Machinery</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/machinery/food-beverage-machinery/grain-product-making-machines/" title="Grain Product Making Machines" className="text-truncate">Grain Product Making Machines</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/machinery/food-beverage-machinery/fryer/" title="Fryer" className="text-truncate">Fryer</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/machinery/food-beverage-machinery/grain-processing-machinery/" title="Grain Processing Machinery" className="text-truncate">Grain Processing Machinery</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="submenu">
                <a href="https://www.eworldtrade.com/beauty-personal-care/" title="Beauty &amp; Personal Care"> Beauty &amp; Personal Care <i className="fas fa-angle-left"></i>
                </a>
                <div className="submenu-row">
                  <div className="col-md-6">
                    <h5>
                      <a href="https://www.eworldtrade.com/beauty-personal-care/baby-care/" title="Baby Care" className="text-danger text-truncate">Baby Care</a>
                    </h5>
                    <ul>
                      <li>
                        <a href="https://www.eworldtrade.com/beauty-personal-care/baby-care/baby-diapersnappies/" title="Baby DiapersNappies" className="text-truncate">Baby DiapersNappies</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/beauty-personal-care/baby-care/baby-wipes/" title="Baby Wipes" className="text-truncate">Baby Wipes</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/beauty-personal-care/baby-care/baby-skin-care/" title="Baby Skin Care" className="text-truncate">Baby Skin Care</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/beauty-personal-care/baby-care/baby-bath-supplies/" title="Baby Bath Supplies" className="text-truncate">Baby Bath Supplies</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/beauty-personal-care/baby-care/baby-oral-hygiene/" title="Baby Oral Hygiene" className="text-truncate">Baby Oral Hygiene</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/beauty-personal-care/baby-care/baby-hair-care/" title="Baby Hair Care" className="text-truncate">Baby Hair Care</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>
                      <a href="https://www.eworldtrade.com/beauty-personal-care/hair-extensions-wigs/" title="Hair Extensions Wigs" className="text-danger text-truncate">Hair Extensions Wigs</a>
                    </h5>
                    <ul>
                      <li>
                        <a href="https://www.eworldtrade.com/beauty-personal-care/hair-extensions-wigs/hair-extension/" title="Hair Extension" className="text-truncate">Hair Extension</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/beauty-personal-care/hair-extensions-wigs/wigs/" title="Wigs" className="text-truncate">Wigs</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/beauty-personal-care/hair-extensions-wigs/lace-wigs/" title="Lace Wigs" className="text-truncate">Lace Wigs</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/beauty-personal-care/hair-extensions-wigs/toupeee/" title="Toupeee" className="text-truncate">Toupeee</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/beauty-personal-care/hair-extensions-wigs/chignon/" title="Chignon" className="text-truncate">Chignon</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/beauty-personal-care/hair-extensions-wigs/other-artificial-hair/" title="Other Artificial Hair" className="text-truncate">Other Artificial Hair</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/beauty-personal-care/hair-extensions-wigs/fringes/" title="Fringes" className="text-truncate">Fringes</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="submenu">
                <a href="https://www.eworldtrade.com/security-protection/" title="Security &amp; Protection"> Security &amp; Protection <i className="fas fa-angle-left"></i>
                </a>
                <div className="submenu-row">
                  <div className="col-md-6">
                    <h5>
                      <a href="https://www.eworldtrade.com/security-protection/police-military-supplies/" title="Police Military Supplies" className="text-danger text-truncate">Police Military Supplies</a>
                    </h5>
                    <ul>
                      <li>
                        <a href="https://www.eworldtrade.com/security-protection/police-military-supplies/bullet-proof-vest/" title="Bullet Proof Vest" className="text-truncate">Bullet Proof Vest</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/security-protection/police-military-supplies/other-police-military-supplies/" title="Other Police Military Supplies" className="text-truncate">Other Police Military Supplies</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/security-protection/police-military-supplies/gun-bag/" title="Gun Bag" className="text-truncate">Gun Bag</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/security-protection/police-military-supplies/warning-tape/" title="Warning Tape" className="text-truncate">Warning Tape</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/security-protection/police-military-supplies/bullet-proof-helmet/" title="Bullet Proof Helmet" className="text-truncate">Bullet Proof Helmet</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/security-protection/police-military-supplies/baton/" title="Baton" className="text-truncate">Baton</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/security-protection/police-military-supplies/handcuff/" title="Handcuff" className="text-truncate">Handcuff</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>
                      <a href="https://www.eworldtrade.com/security-protection/cctv-products/" title="CCTV Products" className="text-danger text-truncate">CCTV Products</a>
                    </h5>
                    <ul>
                      <li>
                        <a href="https://www.eworldtrade.com/security-protection/cctv-products/cctv-camera/" title="CCTV Camera" className="text-truncate">CCTV Camera</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/security-protection/cctv-products/cctv-dvr/" title="CCTV DVR" className="text-truncate">CCTV DVR</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/security-protection/cctv-products/cctv-system/" title="CCTV System" className="text-truncate">CCTV System</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/security-protection/cctv-products/cctv-accessories/" title="CCTV Accessories" className="text-truncate">CCTV Accessories</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/security-protection/cctv-products/cctv-monitor/" title="CCTV Monitor" className="text-truncate">CCTV Monitor</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/security-protection/cctv-products/other-surveillance-products/" title="Other Surveillance Products" className="text-truncate">Other Surveillance Products</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/security-protection/cctv-products/cctv-lens/" title="CCTV Lens" className="text-truncate">CCTV Lens</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/security-protection/cctv-products/cctv-camera-housing/" title="CCTV Camera Housing" className="text-truncate">CCTV Camera Housing</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="submenu">
                <a href="https://www.eworldtrade.com/lights-lighting/" title="Lights &amp; Lighting"> Lights &amp; Lighting <i className="fas fa-angle-left"></i>
                </a>
                <div className="submenu-row">
                  <div className="col-md-6">
                    <h5>
                      <a href="https://www.eworldtrade.com/lights-lighting/led-outdoor-lighting/" title="LED Outdoor Lighting" className="text-danger text-truncate">LED Outdoor Lighting</a>
                    </h5>
                    <ul>
                      <li>
                        <a href="https://www.eworldtrade.com/lights-lighting/led-outdoor-lighting/led-flood-lights/" title="LED Flood Lights" className="text-truncate">LED Flood Lights</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/lights-lighting/led-outdoor-lighting/led-street-lights/" title="LED Street Lights" className="text-truncate">LED Street Lights</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/lights-lighting/led-outdoor-lighting/led-garden-lights/" title="LED Garden Lights" className="text-truncate">LED Garden Lights</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/lights-lighting/led-outdoor-lighting/led-wall-washers/" title="LED Wall Washers" className="text-truncate">LED Wall Washers</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/lights-lighting/led-outdoor-lighting/led-outdoor-wall-lights/" title="LED Outdoor Wall Lights" className="text-truncate">LED Outdoor Wall Lights</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/lights-lighting/led-outdoor-lighting/led-underground-lights/" title="LED Underground Lights" className="text-truncate">LED Underground Lights</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/lights-lighting/led-outdoor-lighting/led-tunnel-lights/" title="LED Tunnel Lights" className="text-truncate">LED Tunnel Lights</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/lights-lighting/led-outdoor-lighting/led-lawn-lights/" title="LED Lawn Lights" className="text-truncate">LED Lawn Lights</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>
                      <a href="https://www.eworldtrade.com/lights-lighting/stage-lights/" title="Stage Lights" className="text-danger text-truncate">Stage Lights</a>
                    </h5>
                    <ul>
                      <li>
                        <a href="https://www.eworldtrade.com/lights-lighting/stage-lights/oving-head-lights/" title="Moving Head Lights" className="text-truncate">Moving Head Lights</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/lights-lighting/stage-lights/laser-lights/" title="Laser Lights" className="text-truncate">Laser Lights</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/lights-lighting/stage-lights/beam-lights/" title="Beam Lights" className="text-truncate">Beam Lights</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/lights-lighting/stage-lights/scan-lights/" title="Scan Lights" className="text-truncate">Scan Lights</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/lights-lighting/stage-lights/cyclorama-lights/" title="Cyclorama Lights" className="text-truncate">Cyclorama Lights</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/lights-lighting/stage-lights/follow-spot-lights/" title="Follow Spot Lights" className="text-truncate">Follow Spot Lights</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/lights-lighting/stage-lights/projection-lights/" title="Projection Lights" className="text-truncate">Projection Lights</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/lights-lighting/stage-lights/moving-lights/" title="Moving Lights" className="text-truncate">Moving Lights</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="submenu">
                <a href="https://www.eworldtrade.com/automobiles-motorcycles/" title="Automobiles &nbsp;&amp; Motorcycles"> Automobiles &nbsp;&amp; Motorcycles <i className="fas fa-angle-left"></i>
                </a>
                <div className="submenu-row">
                  <div className="col-md-6">
                    <h5>
                      <a href="https://www.eworldtrade.com/automobiles-motorcycles/motorcycle-parts/" title="Motorcycle Parts" className="text-danger text-truncate">Motorcycle Parts</a>
                    </h5>
                    <ul>
                      <li>
                        <a href="https://www.eworldtrade.com/automobiles-motorcycles/motorcycle-parts/motorcycle-tires/" title="Motorcycle Tires" className="text-truncate">Motorcycle Tires</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/automobiles-motorcycles/motorcycle-parts/motorcycle-body-parts/" title="Motorcycle Body Parts" className="text-truncate">Motorcycle Body Parts</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/automobiles-motorcycles/motorcycle-parts/other-motorcycle-parts/" title="Other Motorcycle Parts" className="text-truncate">Other Motorcycle Parts</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/automobiles-motorcycles/motorcycle-parts/motorcycle-electrical-system/" title="Motorcycle Electrical System" className="text-truncate">Motorcycle Electrical System</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/automobiles-motorcycles/motorcycle-parts/motorcycle-engines/" title="Motorcycle Engines" className="text-truncate">Motorcycle Engines</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/automobiles-motorcycles/motorcycle-parts/motorcycle-brakes/" title="Motorcycle Brakes" className="text-truncate">Motorcycle Brakes</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/automobiles-motorcycles/motorcycle-parts/motorcycle-transmissions/" title="Motorcycle Transmissions" className="text-truncate">Motorcycle Transmissions</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/automobiles-motorcycles/motorcycle-parts/motorcycle-wheels/" title="Motorcycle Wheels" className="text-truncate">Motorcycle Wheels</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>
                      <a href="https://www.eworldtrade.com/automobiles-motorcycles/valve-train/" title="Valve Train" className="text-danger text-truncate">Valve Train</a>
                    </h5>
                    <ul>
                      <li>
                        <a href="https://www.eworldtrade.com/automobiles-motorcycles/valve-train/intake-exhaust-valve/" title="Intake Exhaust Valve" className="text-truncate">Intake Exhaust Valve</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/automobiles-motorcycles/valve-train/camshaft/" title="Camshaft" className="text-truncate">Camshaft</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/automobiles-motorcycles/valve-train/valve-train/" title="Valve Train" className="text-truncate">Valve Train</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/automobiles-motorcycles/valve-train/rocker-arm-rocker-shaft/" title="Rocker Arm Rocker Shaft" className="text-truncate">Rocker Arm Rocker Shaft</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/automobiles-motorcycles/valve-train/valve-tappet/" title="Valve Tappet" className="text-truncate">Valve Tappet</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/automobiles-motorcycles/valve-train/other-auto-parts/" title="Other Auto Parts" className="text-truncate">Other Auto Parts</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/automobiles-motorcycles/valve-train/other-auto-valve-train/" title="Other Auto Valve Train" className="text-truncate">Other Auto Valve Train</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/automobiles-motorcycles/valve-train/speaker-horn/" title="Speaker Horn" className="text-truncate">Speaker Horn</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="submenu">
                <a href="https://www.eworldtrade.com/chemicals/" title="Chemicals"> Chemicals <i className="fas fa-angle-left"></i>
                </a>
                <div className="submenu-row">
                  <div className="col-md-6">
                    <h5>
                      <a href="https://www.eworldtrade.com/chemicals/paints-coatings/" title="Paints Coatings" className="text-danger text-truncate">Paints Coatings</a>
                    </h5>
                    <ul>
                      <li>
                        <a href="https://www.eworldtrade.com/chemicals/paints-coatings/building-coating/" title="Building Coating" className="text-truncate">Building Coating</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/chemicals/paints-coatings/car-paint/" title="Car Paint" className="text-truncate">Car Paint</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/chemicals/paints-coatings/appliance-paint/" title="Appliance Paint" className="text-truncate">Appliance Paint</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/chemicals/paints-coatings/furniture-paint/" title="Furniture Paint" className="text-truncate">Furniture Paint</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/chemicals/paints-coatings/boat-paint/" title="Boat Paint" className="text-truncate">Boat Paint</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/chemicals/paints-coatings/electrical-insulating-varnish/" title="Electrical Insulating Varnish" className="text-truncate">Electrical Insulating Varnish</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/chemicals/paints-coatings/plastic-coating/" title="Plastic Coating" className="text-truncate">Plastic Coating</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/chemicals/paints-coatings/other-paint-coating/" title="Other Paint Coating" className="text-truncate">Other Paint Coating</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>
                      <a href="https://www.eworldtrade.com/chemicals/fertilizer/" title="Fertilizer" className="text-danger text-truncate">Fertilizer</a>
                    </h5>
                    <ul>
                      <li>
                        <a href="https://www.eworldtrade.com/chemicals/fertilizer/organic-fertilizer/" title="Organic Fertilizer" className="text-truncate">Organic Fertilizer</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/chemicals/fertilizer/nitrogen-fertilizer/" title="Nitrogen Fertilizer" className="text-truncate">Nitrogen Fertilizer</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/chemicals/fertilizer/compound-fertilizer/" title="Compound Fertilizer" className="text-truncate">Compound Fertilizer</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/chemicals/fertilizer/potassium-fertilizer/" title="Potassium Fertilizer" className="text-truncate">Potassium Fertilizer</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/chemicals/fertilizer/urea/" title="Urea" className="text-truncate">Urea</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/chemicals/fertilizer/phosphate-fertilizer/" title="Phosphate Fertilizer" className="text-truncate">Phosphate Fertilizer</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/chemicals/fertilizer/biological-fertilizer/" title="Biological Fertilizer" className="text-truncate">Biological Fertilizer</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/chemicals/fertilizer/other-fertilizers/" title="Other Fertilizers" className="text-truncate">Other Fertilizers</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="submenu">
                <a href="https://www.eworldtrade.com/food-beverage/" title="Food &amp; Beverage"> Food &amp; Beverage <i className="fas fa-angle-left"></i>
                </a>
                <div className="submenu-row">
                  <div className="col-md-6">
                    <h5>
                      <a href="https://www.eworldtrade.com/food-beverage/canned-food/" title="Canned Food" className="text-danger text-truncate">Canned Food</a>
                    </h5>
                    <ul>
                      <li>
                        <a href="https://www.eworldtrade.com/food-beverage/canned-food/canned-fruit/" title="Canned Fruit" className="text-truncate">Canned Fruit</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/food-beverage/canned-food/canned-poultry-meat/" title="Canned Poultry Meat" className="text-truncate">Canned Poultry Meat</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/food-beverage/canned-food/canned-seafood/" title="Canned Seafood" className="text-truncate">Canned Seafood</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/food-beverage/canned-food/canned-beans/" title="Canned Beans" className="text-truncate">Canned Beans</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>
                      <a href="https://www.eworldtrade.com/food-beverage/honey-products/" title="Honey Products" className="text-danger text-truncate">Honey Products</a>
                    </h5>
                    <ul>
                      <li>
                        <a href="https://www.eworldtrade.com/food-beverage/honey-products/honey/" title="Honey" className="text-truncate">Honey</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/food-beverage/honey-products/bee-wax/" title="Bee Wax" className="text-truncate">Bee Wax</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/food-beverage/honey-products/bee-pollen/" title="Bee Pollen" className="text-truncate">Bee Pollen</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/food-beverage/honey-products/propolis/" title="Propolis" className="text-truncate">Propolis</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/food-beverage/honey-products/royal-jelly/" title="Royal Jelly" className="text-truncate">Royal Jelly</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/food-beverage/honey-products/honey-syrup/" title="Honey Syrup" className="text-truncate">Honey Syrup</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="submenu">
                <a href="/food-beverage/" title="Food &amp; Beverage"> Food &amp; Beverage <i className="fas fa-angle-left"></i>
                </a>
                <div className="submenu-row">
                  <div className="col-md-6">
                    <h5>
                      <a href="https://www.eworldtrade.com/food-beverage/canned-food/" title="Canned Food" className="text-danger text-truncate">Canned Food</a>
                    </h5>
                    <ul>
                      <li>
                        <a href="https://www.eworldtrade.com/food-beverage/canned-food/canned-fruit/" title="Canned Fruit" className="text-truncate">Canned Fruit</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/food-beverage/canned-food/canned-poultry-meat/" title="Canned Poultry Meat" className="text-truncate">Canned Poultry Meat</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/food-beverage/canned-food/canned-seafood/" title="Canned Seafood" className="text-truncate">Canned Seafood</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/food-beverage/canned-food/canned-beans/" title="Canned Beans" className="text-truncate">Canned Beans</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>
                      <a href="https://www.eworldtrade.com/food-beverage/honey-products/" title="Honey Products" className="text-danger text-truncate">Honey Products</a>
                    </h5>
                    <ul>
                      <li>
                        <a href="https://www.eworldtrade.com/food-beverage/honey-products/honey/" title="Honey" className="text-truncate">Honey</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/food-beverage/honey-products/bee-wax/" title="Bee Wax" className="text-truncate">Bee Wax</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/food-beverage/honey-products/bee-pollen/" title="Bee Pollen" className="text-truncate">Bee Pollen</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/food-beverage/honey-products/propolis/" title="Propolis" className="text-truncate">Propolis</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/food-beverage/honey-products/royal-jelly/" title="Royal Jelly" className="text-truncate">Royal Jelly</a>
                      </li>
                      <li>
                        <a href="https://www.eworldtrade.com/food-beverage/honey-products/honey-syrup/" title="Honey Syrup" className="text-truncate">Honey Syrup</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="menu-cat-more-btn">
                <a href="/products/" title="Categories">مشاهده همه دسته ها</a>
              </li>
            </ul>
          </div>
          <div className="header-banner d-md-block d-none col-lg-6 col-md-8 pl-0 pr-0 position-relative" data-test-currentdate="18-09-2024">
            <div className="owl-carousel owl-theme owl-drag owl-loaded" id="bannerCarousel2">
            <Swiper className='slider'
              spaceBetween={50}
              slidesPerView={1}
              modules={[Autoplay]}
              autoplay
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}>
              <SwiperSlide><img src="https://esimg.eworldtrade.com/2K19/images/banner/thumb-0169608001727757990.jpg"/></SwiperSlide>
              <SwiperSlide><img src="https://esimg.eworldtrade.com/2K19/images/banner/ewt-slide-5.jpeg"/></SwiperSlide>
              
            </Swiper>
              
              <div className="owl-nav disabled">
                <button type="button" role="presentation" className="owl-prev">
                  <span aria-label="Previous">‹</span>
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <span aria-label="Next">›</span>
                </button>
              </div>
            </div>
          </div>
          <section className="quote-now d-md-none d-lg-block d-xl-block">
            <h3> سفارش زمانبندی </h3>
            <form method="POST" name="quoteForm" action="https://www.eworldtrade.com/user/basic-signup-n/" novalidate="novalidate">
              <div className="form-row mt-3">
                <div className="col-sm-12">
                  <label>نیازمندی</label>
                  <input type="text" name="products_want" className="form-control" placeholder="انتخاب دسته بندی" title="Comma seperated keywords" autocomplete="off"/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-6">
                  <label>تاریخ تحویل</label>
                  <input type="text" name="full_name" className="form-control" placeholder="هفته آینده" title="Please enter your Full Name here" autocomplete="name" required="" aria-required="true"/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-6">
                  <label>حجم خرید</label>
                  <input type="email" name="email" className="form-control" placeholder="200 شاخه" title="Please enter your Email Address here" autocomplete="email" required="" aria-required="true"/>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <label>شماره تماس</label>
                  <div className="intl-tel-input allow-dropdown">
                    <input type="tel" name="phone_number" className="form-control phoneNumberTelInput" placeholder="0912 345 6789" title="Please enter your Phone or Mobile Number here" minlength="6" maxlength="30" required="" id="intelPhoneTop" onkeyup="intelPhone($(this))" autocomplete="off" aria-required="true"/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-6">
                  <label>شرکت</label>
                  <input type="text" name="company_name" className="form-control" placeholder="آتیه سازان" title="Please enter your Company Name here" autocomplete="organization" required="" aria-required="true"/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-6">
                  <label>طریقه خرید</label>
                  <select className="form-control" name="type" required="" aria-required="true">
                    <option value="seller" selected="">اعتباری</option>
                    <option value="buyer">نقدی</option>
                  </select>
                </div>
                <div className="col-12 form-p-0 text-center">
                  <button type="submit" className="btn btn-outline-danger">جزئیات سفارش</button>
                </div>
                <p className="text-center">
                  <span>*</span> بعد از تایید مدیریت سفارش شما پردازش خواهد شد
                </p>
              </div>
            </form>
          </section>
          <div className="header-banner d-md-none d-block col-lg-6 col-md-8 pl-0 pr-0 position-relative" data-test-currentdate="18-09-2024">
            <div className="owl-carousel owl-theme owl-drag owl-loaded" id="bannerCarousel">
              <div className="owl-stage-outer">
                <div className="owl-stage" style={{transform: "translate3d(0px, 0px, 0px)", transition: "all"}}>
                  <div className="owl-item">
                    <div className="item" >
                      <a href="javascript:;">
                        <img alt="Slider Banner" src="https://esimg.eworldtrade.com/2K19/images/banner/webp/ewt-1911981.jpeg" loading="lazy" width="569" height="424" className="img-fluid w-100"/>
                      </a>
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="item" >
                      <a href="javascript:;">
                        <img alt="Slider Banner" src="https://esimg.eworldtrade.com/2K19/images/banner/webp/ewt-1974738.jpeg" loading="lazy" width="569" height="424" className="img-fluid w-100"/>
                      </a>
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="item" >
                      <a href="javascript:;">
                        <img alt="Slider Banner" src="https://esimg.eworldtrade.com/2K19/images/banner/webp/ewt-1975296-2.jpeg" loading="lazy" width="569" height="424" className="img-fluid w-100"/>
                      </a>
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="item">
                      <a href="javascript:registerPopup(&quot;Connecting customers to your business&quot;)">
                        <img src="https://esimg.eworldtrade.com/2K19/images/banner/banner3.jpg" loading="lazy" alt="Slider Banner" width="569" height="424" className="img-fluid w-100"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav disabled">
                <button type="button" role="presentation" className="owl-prev">
                  <span aria-label="Previous">‹</span>
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <span aria-label="Next">›</span>
                </button>
              </div>
              <div className="owl-dots">
                <div className="owl-dot">
                  <button aria-label="01"></button>
                </div>
                <div className="owl-dot">
                  <button aria-label="02"></button>
                </div>
                <div className="owl-dot">
                  <button aria-label="03"></button>
                </div>
                <div className="owl-dot active">
                  <button aria-label="15"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Slider