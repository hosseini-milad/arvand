const Header = (props)=>{
  
    return(
      <header className="py-md-4 py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xl-3 d-flex justify-content-center justify-content-md-start mb-md-0 mb-2">
              <a href="/" title="eWorldTrade">
                <img src="https://esimg.eworldtrade.com/2K19/images/logohighres.svg" width="255" height="44" className="logo mt-0" alt="eWorldTrade"/>
              </a>
              <div className="dropdown d-none stickyDrop">
                <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-bars"></i>
                </button>
                <div className=" menu-banner-form dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" 
                  style={{position: "absolute" , transform: "translate3d(20px, 40px, 0px)", top: "0px", left: "0px", willChange: "transform"}}>
                  <div className="prd-cat-nav">
                    <ul>
                      <li className="submenu">
                        <a href="https://www.eworldtrade.com/apparel/" title="Apparel"> Apparel <i className="fas fa-angle-right"></i>
                        </a>
                        <div className="submenu-row">
                          <div className="col-md-6">
                            <h5>
                              <a href="/underwear/" title="Underwear" className="text-danger text-truncate">Underwear</a>
                            </h5>
                            <ul>
                              <li>
                                <a href="https://www.eworldtrade.com/apparel/underwear/bra/" title="Bra" className="text-truncate">Bra</a>
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
                              <a href="https://www.eworldtrade.com/apparel/wedding-apparel-accessories/" title="Wedding Apparel Accessories" className="text-danger text-truncate">Wedding Apparel Accessories</a>
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
                        <a href="https://www.eworldtrade.com/home-appliance/" title="Home Appliances"> Home Appliances <i className="fas fa-angle-right"></i>
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
                        <a href="https://www.eworldtrade.com/machinery/" title="Machinery"> Machinery <i className="fas fa-angle-right"></i>
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
                        <a href="https://www.eworldtrade.com/beauty-personal-care/" title="Beauty &amp; Personal Care"> Beauty &amp; Personal Care <i className="fas fa-angle-right"></i>
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
                        <a href="https://www.eworldtrade.com/security-protection/" title="Security &amp; Protection"> Security &amp; Protection <i className="fas fa-angle-right"></i>
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
                        <a href="https://www.eworldtrade.com/lights-lighting/" title="Lights &amp; Lighting"> Lights &amp; Lighting <i className="fas fa-angle-right"></i>
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
                        <a href="https://www.eworldtrade.com/automobiles-motorcycles/" title="Automobiles &nbsp;&amp; Motorcycles"> Automobiles &nbsp;&amp; Motorcycles <i className="fas fa-angle-right"></i>
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
                        <a href="https://www.eworldtrade.com/chemicals/" title="Chemicals"> Chemicals <i className="fas fa-angle-right"></i>
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
                        <a href="https://www.eworldtrade.com/food-beverage/" title="Food &amp; Beverage"> Food &amp; Beverage <i className="fas fa-angle-right"></i>
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
                        <a href="https://www.eworldtrade.com/minerals-metallurgy/" title="Minerals &amp; Metallurgy"> Minerals &amp; Metallurgy <i className="fas fa-angle-right"></i>
                        </a>
                        <div className="submenu-row">
                          <div className="col-md-6">
                            <h5>
                              <a href="https://www.eworldtrade.com/minerals-metallurgy/wire-mesh/" title="Wire Mesh" className="text-danger text-truncate">Wire Mesh</a>
                            </h5>
                            <ul>
                              <li>
                                <a href="https://www.eworldtrade.com/minerals-metallurgy/wire-mesh/steel-wire-mesh/" title="Steel Wire Mesh" className="text-truncate">Steel Wire Mesh</a>
                              </li>
                              <li>
                                <a href="https://www.eworldtrade.com/minerals-metallurgy/wire-mesh/iron-wire-mesh/" title="Iron Wire Mesh" className="text-truncate">Iron Wire Mesh</a>
                              </li>
                              <li>
                                <a href="https://www.eworldtrade.com/minerals-metallurgy/wire-mesh/copper-wire-mesh/" title="Copper Wire Mesh" className="text-truncate">Copper Wire Mesh</a>
                              </li>
                              <li>
                                <a href="https://www.eworldtrade.com/minerals-metallurgy/wire-mesh/aluminum-wire-mesh/" title="Aluminum Wire Mesh" className="text-truncate">Aluminum Wire Mesh</a>
                              </li>
                              <li>
                                <a href="https://www.eworldtrade.com/minerals-metallurgy/wire-mesh/fiberglass-mesh/" title="Fiberglass Mesh" className="text-truncate">Fiberglass Mesh</a>
                              </li>
                              <li>
                                <a href="https://www.eworldtrade.com/minerals-metallurgy/wire-mesh/other-wire-mesh/" title="Other Wire Mesh" className="text-truncate">Other Wire Mesh</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <h5>
                              <a href="https://www.eworldtrade.com/minerals-metallurgy/aluminum/" title="Aluminum" className="text-danger text-truncate">Aluminum</a>
                            </h5>
                            <ul>
                              <li>
                                <a href="https://www.eworldtrade.com/minerals-metallurgy/aluminum/aluminum-profiles/" title="Aluminum Profiles" className="text-truncate">Aluminum Profiles</a>
                              </li>
                              <li>
                                <a href="https://www.eworldtrade.com/minerals-metallurgy/aluminum/aluminum-sheets/" title="Aluminum Sheets" className="text-truncate">Aluminum Sheets</a>
                              </li>
                              <li>
                                <a href="https://www.eworldtrade.com/minerals-metallurgy/aluminum/aluminum-foil/" title="Aluminum Foil" className="text-truncate">Aluminum Foil</a>
                              </li>
                              <li>
                                <a href="https://www.eworldtrade.com/minerals-metallurgy/aluminum/aluminum-coils/" title="Aluminum Coils" className="text-truncate">Aluminum Coils</a>
                              </li>
                              <li>
                                <a href="https://www.eworldtrade.com/minerals-metallurgy/aluminum/aluminum-pipes/" title="Aluminum Pipes" className="text-truncate">Aluminum Pipes</a>
                              </li>
                              <li>
                                <a href="https://www.eworldtrade.com/minerals-metallurgy/aluminum/aluminum-bars/" title="Aluminum Bars" className="text-truncate">Aluminum Bars</a>
                              </li>
                              <li>
                                <a href="https://www.eworldtrade.com/minerals-metallurgy/aluminum/aluminum-strips/" title="Aluminum Strips" className="text-truncate">Aluminum Strips</a>
                              </li>
                              <li>
                                <a href="https://www.eworldtrade.com/minerals-metallurgy/aluminum/aluminum-powder/" title="Aluminum Powder" className="text-truncate">Aluminum Powder</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="menu-cat-more-btn">
                        <a href="https://www.eworldtrade.com/products/" title="Categories">View All Categories</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-xl-6 pr-md-0">
              <div className="head-search">
                <form method="GET" action="/search" accept-charset="UTF-8" className="form-inline strip-form" id="search_details">
                  <input minlength="3" required="" placeholder="جستجو" name="s" type="search" value=""/>
                  <select required="" name="type">
                    <option value="product" selected="selected">محصولات</option>
                    <option value="seller">شرکت ها</option>
                    <option value="buyer">خریداران</option>
                  </select>
                  <button type="submit" aria-label="Head Search Button">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-xl-3 d-flex justify-content-center justify-content-md-end mt-md-0 mt-2 header-list">
              <ul>
                <li>
                  <i className="fas fa-user-circle"></i>
                  <small>
                    <a href="/login/">ورود</a>
                    <sub className="headerLoginRegisterSeperator">/</sub>
                    <a href="javascript:;registerPopup('Join Free');" title="Join Free">پیوستن</a>
                  </small>
                  <span>حساب کاربری</span>
                </li>
                <li>
                  <a href="/rfq/">
                    <i className="fas fa-envelope"></i>
                    <small>اعلانات</small>
                    <span>پیام ها</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    )
}
export default Header