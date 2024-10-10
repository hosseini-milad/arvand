import { useState } from "react"

function Category(props){
    const [tab,setTab] = useState(0)
  //window.scrollTo(0, 270);},[pageNumber,filters,perPage,refreshTable])
   return(
    <section className="category-tabs">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h2>
          <span>مشاهده <b>دسته بندی ها</b>
          </span>
        </h2>
        <br/>
        
        <div className="nav nav-tabs owl-carousel-tabs owl-carousel owl-theme categoryTabsNav d-nne owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div className="owl-stage" >
              <div className="owl-item active" >
                <div className="nav-item">
                  <a className={tab==0?"nav-link active":"nav-link"} href="#home-appliance-tab" title="Home Appliances"
                  onClick={()=>setTab(0)}>
                    <i>
                      <img src="https://euimg.eworldtrade.com/assets/images/industries/category/icon/12.png" 
                      loading="lazy" width="50" height="50" alt="Home Appliances" className="owl-lazy" />
                    </i>
                    <span>ساختمانی بهداشتی</span>
                  </a>
                </div>
              </div>
              <div className="owl-item active" >
                <div className="nav-item">
                  <a className={tab==1?"nav-link active":"nav-link"} href="#machinery-tab" title="Machinery"
                    onClick={()=>setTab(1)}>
                    <i>
                      <img src="https://euimg.eworldtrade.com/assets/images/industries/category/icon/6.png" loading="lazy" data-src="https://euimg.eworldtrade.com/assets/images/industries/category/icon/6.png" 
                      width="50" height="50" alt="Machinery" className="owl-lazy"/>
                    </i>
                    <span>تجهیزات متفرقه</span>
                  </a>
                </div>
              </div>
              <div className="owl-item active" >
                <div className="nav-item">
                  <a className="nav-link " data-toggle="tab" href="#lights-lighting-tab" title="Lights &amp; Lighting">
                    <i>
                      <img src="https://euimg.eworldtrade.com/assets/images/industries/category/icon/35.png" loading="lazy" data-src="https://euimg.eworldtrade.com/assets/images/industries/category/icon/35.png" width="50" height="50" alt="Lights &amp; Lighting" className="owl-lazy" />
                    </i>
                    <span>تجهیزات الکترونیکی</span>
                  </a>
                </div>
              </div>
              <div className="owl-item" >
                <div className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#automobiles-motorcycles-tab" title="Automobiles &nbsp;&amp; Motorcycles">
                    <i>
                      <img src="https://euimg.eworldtrade.com/assets/images/industries/category/icon/20.png" loading="lazy" data-src="https://euimg.eworldtrade.com/assets/images/industries/category/icon/20.png" width="50" height="50" alt="Automobiles &nbsp;&amp; Motorcycles" className="owl-lazy" />
                    </i>
                    <span>تجهیزات مکانیکی</span>
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
          <div className="owl-dots disabled"></div>
        </div>
        <div className="tab-content">
          <div id="apparel-tab" className="tab-pane">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/apparel/underwear/" title="Underwear" className="text-danger">Underwear</a>
                </h3>
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
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/apparel/womens-clothing/" title="Womens Clothing" className="text-danger">Womens Clothing</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/womens-clothing/dresses/" title="Dresses" className="text-truncate">Dresses</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/womens-clothing/womens-t-shirts/" title="Womens T-Shirts" className="text-truncate">Womens T-Shirts</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/womens-clothing/womens-underwear/" title="Womens Underwear" className="text-truncate">Womens Underwear</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/womens-clothing/womens-sweaters/" title="Womens Sweaters" className="text-truncate">Womens Sweaters</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/womens-clothing/ladies-blouses-tops/" title="Ladies Blouses Tops" className="text-truncate">Ladies Blouses Tops</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/womens-clothing/womens-jackets-coats/" title="Womens Jackets Coats" className="text-truncate">Womens Jackets Coats</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/womens-clothing/womens-trousers-pants/" title="Womens Trousers Pants" className="text-truncate">Womens Trousers Pants</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/womens-clothing/womens-jeans/" title="Womens Jeans" className="text-truncate">Womens Jeans</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/apparel/boys-clothing/" title="Boys Clothing" className="text-danger">Boys Clothing</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/boys-clothing/boys-clothing-sets/" title="Boys Clothing Sets" className="text-truncate">Boys Clothing Sets</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/boys-clothing/boys-t-shirts/" title="Boys T-Shirts" className="text-truncate">Boys T-Shirts</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/boys-clothing/boys-jackets-coats/" title="Boys Jackets Coats" className="text-truncate">Boys Jackets Coats</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/boys-clothing/boys-shirts/" title="Boys Shirts" className="text-truncate">Boys Shirts</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/boys-clothing/boys-pants/" title="Boys Pants" className="text-truncate">Boys Pants</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/boys-clothing/boys-underwear/" title="Boys Underwear" className="text-truncate">Boys Underwear</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/boys-clothing/boys-sweaters/" title="Boys Sweaters" className="text-truncate">Boys Sweaters</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/boys-clothing/boys-hoodies-sweatshirts/" title="Boys Hoodies Sweatshirts" className="text-truncate">Boys Hoodies Sweatshirts</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/apparel/childrens-clothing/" title="Childrens Clothing" className="text-danger">Childrens Clothing</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/childrens-clothing/childrens-clothing-sets/" title="Childrens Clothing Sets" className="text-truncate">Childrens Clothing Sets</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/childrens-clothing/girls-skirts/" title="Girls Skirts" className="text-truncate">Girls Skirts</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/childrens-clothing/childrens-t-shirts/" title="Childrens T-Shirts" className="text-truncate">Childrens T-Shirts</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/childrens-clothing/childrens-pants-trousers/" title="Childrens Pants Trousers" className="text-truncate">Childrens Pants Trousers</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/childrens-clothing/childrens-sweaters/" title="Childrens Sweaters" className="text-truncate">Childrens Sweaters</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/childrens-clothing/childrens-coats/" title="Childrens Coats" className="text-truncate">Childrens Coats</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/childrens-clothing/childrens-shirts-tops/" title="Childrens Shirts Tops" className="text-truncate">Childrens Shirts Tops</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/apparel/childrens-clothing/childrens-shorts/" title="Childrens Shorts" className="text-truncate">Childrens Shorts</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="home-appliance-tab" className="tab-pane">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/home-appliance/cooking-appliances/" title="Cooking Appliances" className="text-danger">Cooking Appliances</a>
                </h3>
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
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/home-appliance/air-conditioning-appliances/" title="Air Conditioning Appliances" className="text-danger">Air Conditioning Appliances</a>
                </h3>
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
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/home-appliance/cleaning-appliances/" title="Cleaning Appliances" className="text-danger">Cleaning Appliances</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/home-appliance/cleaning-appliances/vacuum-cleaners/" title="Vacuum Cleaners" className="text-truncate">Vacuum Cleaners</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/home-appliance/cleaning-appliances/ultrasonic-cleaners/" title="Ultrasonic Cleaners" className="text-truncate">Ultrasonic Cleaners</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/home-appliance/cleaning-appliances/steam-cleaners/" title="Steam Cleaners" className="text-truncate">Steam Cleaners</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/home-appliance/cleaning-appliances/other-cleaning-appliances/" title="Other Cleaning Appliances" className="text-truncate">Other Cleaning Appliances</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/home-appliance/cleaning-appliances/electric-broom/" title="Electric Broom" className="text-truncate">Electric Broom</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/home-appliance/home-appliance-parts/" title="Home Appliance Parts" className="text-danger">Home Appliance Parts</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/home-appliance/home-appliance-parts/kitchen-appliance-parts/" title="Kitchen Appliance Parts" className="text-truncate">Kitchen Appliance Parts</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/home-appliance/home-appliance-parts/air-conditioning-appliance-parts/" title="Air Conditioning Appliance Parts" className="text-truncate">Air Conditioning Appliance Parts</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/home-appliance/home-appliance-parts/home-heater-parts/" title="Home Heater Parts" className="text-truncate">Home Heater Parts</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/home-appliance/home-appliance-parts/other-home-appliance-parts/" title="Other Home Appliance Parts" className="text-truncate">Other Home Appliance Parts</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/home-appliance/home-appliance-parts/refrigerator-freezer-parts/" title="Refrigerator Freezer Parts" className="text-truncate">Refrigerator Freezer Parts</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/home-appliance/home-appliance-parts/laundry-appliance-parts/" title="Laundry Appliance Parts" className="text-truncate">Laundry Appliance Parts</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/home-appliance/home-appliance-parts/water-heater-parts/" title="Water Heater Parts" className="text-truncate">Water Heater Parts</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/home-appliance/home-appliance-parts/water-treatment-appliance-parts/" title="Water Treatment Appliance Parts" className="text-truncate">Water Treatment Appliance Parts</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="machinery-tab" className="tab-pane active">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/machinery/energy-mineral-equipment/" title="Energy Mineral Equipment" className="text-danger">Energy Mineral Equipment</a>
                </h3>
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
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/machinery/food-beverage-machinery/" title="Food Beverage Machinery" className="text-danger">Food Beverage Machinery</a>
                </h3>
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
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/machinery/general-industrial-equipment/" title="General Industrial Equipment" className="text-danger">General Industrial Equipment</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/machinery/general-industrial-equipment/material-handling-equipment/" title="Material Handling Equipment" className="text-truncate">Material Handling Equipment</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/machinery/general-industrial-equipment/cleaning-equipments/" title="Cleaning Equipments" className="text-truncate">Cleaning Equipments</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/machinery/general-industrial-equipment/ventilation-fans/" title="Ventilation Fans" className="text-truncate">Ventilation Fans</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/machinery/general-industrial-equipment/industrial-filtration-equipment/" title="Industrial Filtration Equipment" className="text-truncate">Industrial Filtration Equipment</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/machinery/general-industrial-equipment/air-compressors/" title="Air-Compressors" className="text-truncate">Air-Compressors</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/machinery/general-industrial-equipment/boiler-parts/" title="Boiler Parts" className="text-truncate">Boiler Parts</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/machinery/general-industrial-equipment/machinery-engines-parts/" title="Machinery Engines Parts" className="text-truncate">Machinery Engines Parts</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/machinery/general-industrial-equipment/air-compressor-parts/" title="Air-Compressor Parts" className="text-truncate">Air-Compressor Parts</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/machinery/home-product-making-machinery/" title="Home Product Making Machinery" className="text-danger">Home Product Making Machinery</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/machinery/home-product-making-machinery/furniture-making-machines/" title="Furniture Making Machines" className="text-truncate">Furniture Making Machines</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/machinery/home-product-making-machinery/other-home-product-making-machinery/" title="Other Home Product Making Machinery" className="text-truncate">Other Home Product Making Machinery</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/machinery/home-product-making-machinery/wax-candle-making-machines/" title="Wax Candle Making Machines" className="text-truncate">Wax Candle Making Machines</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/machinery/home-product-making-machinery/toothpick-making-machines/" title="Toothpick Making Machines" className="text-truncate">Toothpick Making Machines</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/machinery/home-product-making-machinery/brush-making-machines/" title="Brush Making Machines" className="text-truncate">Brush Making Machines</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/machinery/home-product-making-machinery/straw-making-machines/" title="Straw Making Machines" className="text-truncate">Straw Making Machines</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/machinery/home-product-making-machinery/wet-wipe-making-machinery/" title="Wet Wipe Making Machinery" className="text-truncate">Wet Wipe Making Machinery</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/machinery/home-product-making-machinery/chopstick-making-machines/" title="Chopstick Making Machines" className="text-truncate">Chopstick Making Machines</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="beauty-personal-care-tab" className="tab-pane">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/beauty-personal-care/baby-care/" title="Baby Care" className="text-danger">Baby Care</a>
                </h3>
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
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/beauty-personal-care/hair-extensions-wigs/" title="Hair Extensions Wigs" className="text-danger">Hair Extensions Wigs</a>
                </h3>
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
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/beauty-personal-care/makeup-tools/" title="Makeup Tools" className="text-danger">Makeup Tools</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/beauty-personal-care/makeup-tools/cosmetic-bags-cases/" title="Cosmetic Bags Cases" className="text-truncate">Cosmetic Bags Cases</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/beauty-personal-care/makeup-tools/makeup-brushes/" title="Makeup Brushes" className="text-truncate">Makeup Brushes</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/beauty-personal-care/makeup-tools/false-eyelashes/" title="False Eyelashes" className="text-truncate">False Eyelashes</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/beauty-personal-care/makeup-tools/makeup-mirror/" title="Makeup Mirror" className="text-truncate">Makeup Mirror</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/beauty-personal-care/makeup-tools/cosmetic-sponge/" title="Cosmetic Sponge" className="text-truncate">Cosmetic Sponge</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/beauty-personal-care/makeup-tools/eyebrow-tweezers/" title="Eyebrow Tweezers" className="text-truncate">Eyebrow Tweezers</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/beauty-personal-care/makeup-tools/cotton-bud/" title="Cotton Bud" className="text-truncate">Cotton Bud</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/beauty-personal-care/makeup-tools/eyelash-curler/" title="Eyelash Curler" className="text-truncate">Eyelash Curler</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/beauty-personal-care/bath-supplies/" title="Bath Supplies" className="text-danger">Bath Supplies</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/beauty-personal-care/bath-supplies/toilet-soap/" title="Toilet Soap" className="text-truncate">Toilet Soap</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/beauty-personal-care/bath-supplies/liquid-hand-soap/" title="Liquid Hand Soap" className="text-truncate">Liquid Hand Soap</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/beauty-personal-care/bath-supplies/bath-set/" title="Bath Set" className="text-truncate">Bath Set</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/beauty-personal-care/bath-supplies/shower-gel/" title="Shower Gel" className="text-truncate">Shower Gel</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/beauty-personal-care/bath-supplies/bath-fizzies/" title="Bath Fizzies" className="text-truncate">Bath Fizzies</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/beauty-personal-care/bath-supplies/body-scrub/" title="Body Scrub" className="text-truncate">Body Scrub</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/beauty-personal-care/bath-supplies/bath-salt/" title="Bath Salt" className="text-truncate">Bath Salt</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/beauty-personal-care/bath-supplies/other-bath-supplies/" title="Other Bath Supplies" className="text-truncate">Other Bath Supplies</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="security-protection-tab" className="tab-pane">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/security-protection/police-military-supplies/" title="Police Military Supplies" className="text-danger">Police Military Supplies</a>
                </h3>
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
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/security-protection/cctv-products/" title="CCTV Products" className="text-danger">CCTV Products</a>
                </h3>
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
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/security-protection/workplace-safety-supplies/" title="Workplace Safety Supplies" className="text-danger">Workplace Safety Supplies</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/security-protection/workplace-safety-supplies/safety-harness/" title="Safety Harness" className="text-truncate">Safety Harness</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/security-protection/workplace-safety-supplies/safety-gloves/" title="Safety Gloves" className="text-truncate">Safety Gloves</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/security-protection/workplace-safety-supplies/safety-shoes/" title="Safety Shoes" className="text-truncate">Safety Shoes</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/security-protection/workplace-safety-supplies/safety-clothing/" title="Safety Clothing" className="text-truncate">Safety Clothing</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/security-protection/workplace-safety-supplies/other-safety-products/" title="Other Safety Products" className="text-truncate">Other Safety Products</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/security-protection/workplace-safety-supplies/face-shield/" title="Face Shield" className="text-truncate">Face Shield</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/security-protection/workplace-safety-supplies/safety-helmet/" title="Safety Helmet" className="text-truncate">Safety Helmet</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/security-protection/workplace-safety-supplies/safety-goggles/" title="Safety Goggles" className="text-truncate">Safety Goggles</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/security-protection/access-control-systems-products/" title="Access Control Systems Products" className="text-danger">Access Control Systems Products</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/security-protection/access-control-systems-products/access-control-card/" title="Access Control Card" className="text-truncate">Access Control Card</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/security-protection/access-control-systems-products/eas-system/" title="EAS System" className="text-truncate">EAS System</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/security-protection/access-control-systems-products/access-control-system/" title="Access Control System" className="text-truncate">Access Control System</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/security-protection/access-control-systems-products/access-control-card-reader/" title="Access Control Card Reader" className="text-truncate">Access Control Card Reader</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/security-protection/access-control-systems-products/video-door-phone/" title="Video Door Phone" className="text-truncate">Video Door Phone</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/security-protection/access-control-systems-products/fingerprint-access-control/" title="Fingerprint Access Control" className="text-truncate">Fingerprint Access Control</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/security-protection/access-control-systems-products/other-access-control-products/" title="Other Access Control Products" className="text-truncate">Other Access Control Products</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/security-protection/access-control-systems-products/audio-door-phone/" title="Audio Door Phone" className="text-truncate">Audio Door Phone</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="lights-lighting-tab" className="tab-pane">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/lights-lighting/led-outdoor-lighting/" title="LED Outdoor Lighting" className="text-danger">LED Outdoor Lighting</a>
                </h3>
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
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/lights-lighting/stage-lights/" title="Stage Lights" className="text-danger">Stage Lights</a>
                </h3>
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
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/lights-lighting/led-landscape-lamps/" title="LED Landscape Lamps" className="text-danger">LED Landscape Lamps</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/lights-lighting/led-landscape-lamps/led-strip-lights/" title="LED Strip Lights" className="text-truncate">LED Strip Lights</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/lights-lighting/led-landscape-lamps/led-neon-lights/" title="LED Neon Lights" className="text-truncate">LED Neon Lights</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/lights-lighting/led-landscape-lamps/led-point-lights/" title="LED Point Lights" className="text-truncate">LED Point Lights</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/lights-lighting/led-landscape-lamps/led-light-strings/" title="LED Light Strings" className="text-truncate">LED Light Strings</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/lights-lighting/led-landscape-lamps/led-rope-lights/" title="LED Rope Lights" className="text-truncate">LED Rope Lights</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/lights-lighting/led-landscape-lamps/led-fountain-lights/" title="LED Fountain Lights" className="text-truncate">LED Fountain Lights</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/lights-lighting/led-landscape-lamps/led-brick-lights/" title="LED Brick Lights" className="text-truncate">LED Brick Lights</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/lights-lighting/led-landscape-lamps/led-rgb-tubes/" title="LED RGB Tubes" className="text-truncate">LED RGB Tubes</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/lights-lighting/led-professional-lighting/" title="LED Professional Lighting" className="text-danger">LED Professional Lighting</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/lights-lighting/led-professional-lighting/led-stage-lights/" title="LED Stage Lights" className="text-truncate">LED Stage Lights</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/lights-lighting/led-professional-lighting/led-flashlights/" title="LED Flashlights" className="text-truncate">LED Flashlights</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/lights-lighting/led-professional-lighting/led-grow-lights/" title="LED Grow Lights" className="text-truncate">LED Grow Lights</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/lights-lighting/led-professional-lighting/led-headlamps/" title="LED Headlamps" className="text-truncate">LED Headlamps</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/lights-lighting/led-professional-lighting/led-cabinet-lights/" title="LED Cabinet Lights" className="text-truncate">LED Cabinet Lights</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/lights-lighting/led-professional-lighting/led-aquarium-lights/" title="LED Aquarium Lights" className="text-truncate">LED Aquarium Lights</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/lights-lighting/led-professional-lighting/led-traffic-lights/" title="LED Traffic Lights" className="text-truncate">LED Traffic Lights</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/lights-lighting/led-professional-lighting/led-explosion-proof-lights/" title="LED Explosion-proof Lights" className="text-truncate">LED Explosion-proof Lights</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="automobiles-motorcycles-tab" className="tab-pane">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/automobiles-motorcycles/motorcycle-parts/" title="Motorcycle Parts" className="text-danger">Motorcycle Parts</a>
                </h3>
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
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/automobiles-motorcycles/valve-train/" title="Valve Train" className="text-danger">Valve Train</a>
                </h3>
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
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/automobiles-motorcycles/vehicle-equipment/" title="Vehicle Equipment" className="text-danger">Vehicle Equipment</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/automobiles-motorcycles/vehicle-equipment/car-lifts/" title="Car Lifts" className="text-truncate">Car Lifts</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/automobiles-motorcycles/vehicle-equipment/wheel-alignment/" title="Wheel Alignment" className="text-truncate">Wheel Alignment</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/automobiles-motorcycles/vehicle-equipment/body-repair-equipment/" title="Body Repair Equipment" className="text-truncate">Body Repair Equipment</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/automobiles-motorcycles/vehicle-equipment/parking-equipment/" title="Parking Equipment" className="text-truncate">Parking Equipment</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/automobiles-motorcycles/vehicle-equipment/car-washer/" title="Car Washer" className="text-truncate">Car Washer</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/automobiles-motorcycles/vehicle-equipment/tire-changers/" title="Tire Changers" className="text-truncate">Tire Changers</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/automobiles-motorcycles/vehicle-equipment/other-vehicle-equipment/" title="Other Vehicle Equipment" className="text-truncate">Other Vehicle Equipment</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/automobiles-motorcycles/air-intakes/" title="Air Intakes" className="text-danger">Air Intakes</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/automobiles-motorcycles/air-intakes/air-compressor/" title="Air Compressor" className="text-truncate">Air Compressor</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/automobiles-motorcycles/air-intakes/auto-air-filter/" title="Auto Air Filter" className="text-truncate">Auto Air Filter</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/automobiles-motorcycles/air-intakes/cabin-filter/" title="Cabin Filter" className="text-truncate">Cabin Filter</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/automobiles-motorcycles/air-intakes/idle-control-valve/" title="Idle Control Valve" className="text-truncate">Idle Control Valve</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/automobiles-motorcycles/air-intakes/turbocharger/" title="Turbocharger" className="text-truncate">Turbocharger</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="chemicals-tab" className="tab-pane">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/chemicals/paints-coatings/" title="Paints Coatings" className="text-danger">Paints Coatings</a>
                </h3>
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
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/chemicals/fertilizer/" title="Fertilizer" className="text-danger">Fertilizer</a>
                </h3>
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
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/chemicals/basic-organic-chemicals/" title="Basic Organic Chemicals" className="text-danger">Basic Organic Chemicals</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/chemicals/basic-organic-chemicals/organic-acid/" title="Organic Acid" className="text-truncate">Organic Acid</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/chemicals/basic-organic-chemicals/hydrocarbon-derivatives/" title="Hydrocarbon Derivatives" className="text-truncate">Hydrocarbon Derivatives</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/chemicals/basic-organic-chemicals/alcohol-hydroxybenzene-ether/" title="Alcohol Hydroxybenzene Ether" className="text-truncate">Alcohol Hydroxybenzene Ether</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/chemicals/basic-organic-chemicals/organic-salt/" title="Organic Salt" className="text-truncate">Organic Salt</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/chemicals/basic-organic-chemicals/ester-derivatives/" title="Ester Derivatives" className="text-truncate">Ester Derivatives</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/chemicals/basic-organic-chemicals/amine/" title="Amine" className="text-truncate">Amine</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/chemicals/basic-organic-chemicals/aldehyde-ketone-chinone/" title="Aldehyde Ketone Chinone" className="text-truncate">Aldehyde Ketone Chinone</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/chemicals/basic-organic-chemicals/other-organic-chemicals/" title="Other Organic Chemicals" className="text-truncate">Other Organic Chemicals</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/chemicals/petrochemical/" title="Petrochemical" className="text-danger">Petrochemical</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/chemicals/petrochemical/benzene/" title="Benzene" className="text-truncate">Benzene</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/chemicals/petrochemical/aromatic-compounds/" title="Aromatic compounds" className="text-truncate">Aromatic compounds</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/chemicals/petrochemical/propylene/" title="Propylene" className="text-truncate">Propylene</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/chemicals/petrochemical/alkene/" title="Alkene" className="text-truncate">Alkene</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/chemicals/petrochemical/ethylene-oxide/" title="Ethylene oxide" className="text-truncate">Ethylene oxide</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/chemicals/petrochemical/toluene/" title="Toluene" className="text-truncate">Toluene</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/chemicals/petrochemical/natural-gas-2/" title="Natural-gas" className="text-truncate">Natural-gas</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/chemicals/petrochemical/syngas/" title="Syngas" className="text-truncate">Syngas</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="food-beverage-tab" className="tab-pane">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/food-beverage/honey-products/" title="Honey Products" className="text-danger">Honey Products</a>
                </h3>
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
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/food-beverage/seasonings-condiments/" title="Seasonings Condiments" className="text-danger">Seasonings Condiments</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/seasonings-condiments/spices-herbs-products/" title="Spices Herbs Products" className="text-truncate">Spices Herbs Products</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/seasonings-condiments/sauce/" title="Sauce" className="text-truncate">Sauce</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/seasonings-condiments/sugar/" title="Sugar" className="text-truncate">Sugar</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/seasonings-condiments/plant-animal-oil/" title="Plant Animal Oil" className="text-truncate">Plant Animal Oil</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/seasonings-condiments/monosodium-glutamate/" title="Monosodium Glutamate" className="text-truncate">Monosodium Glutamate</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/seasonings-condiments/salt/" title="Salt" className="text-truncate">Salt</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/seasonings-condiments/non-dairy-creamer/" title="Non Dairy Creamer" className="text-truncate">Non Dairy Creamer</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/seasonings-condiments/soy-sauce/" title="Soy Sauce" className="text-truncate">Soy Sauce</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/food-beverage/snack-food/" title="Snack Food" className="text-danger">Snack Food</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/snack-food/fruit-vegetable-snacks/" title="Fruit Vegetable Snacks" className="text-truncate">Fruit Vegetable Snacks</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/snack-food/dairy-snacks/" title="Dairy Snacks" className="text-truncate">Dairy Snacks</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/snack-food/grain-snacks/" title="Grain Snacks" className="text-truncate">Grain Snacks</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/snack-food/chocolate/" title="Chocolate" className="text-truncate">Chocolate</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/snack-food/nut-kernel-snacks/" title="Nut Kernel Snacks" className="text-truncate">Nut Kernel Snacks</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/snack-food/seafood-snacks/" title="Seafood Snacks" className="text-truncate">Seafood Snacks</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/snack-food/cookies-biscuits/" title="Cookies Biscuits" className="text-truncate">Cookies Biscuits</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/snack-food/other-food-beverage/" title="Other Food Beverage" className="text-truncate">Other Food Beverage</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/food-beverage/soft-drinks/" title="Soft Drinks" className="text-danger">Soft Drinks</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/soft-drinks/fruit-vegetable-juice/" title="Fruit Vegetable Juice" className="text-truncate">Fruit Vegetable Juice</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/soft-drinks/tea-drinks/" title="Tea Drinks" className="text-truncate">Tea Drinks</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/soft-drinks/energy-drinks/" title="Energy Drinks" className="text-truncate">Energy Drinks</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/soft-drinks/carbonated-drinks/" title="Carbonated Drinks" className="text-truncate">Carbonated Drinks</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/soft-drinks/bubble-tea-products/" title="Bubble Tea Products" className="text-truncate">Bubble Tea Products</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/soft-drinks/grain-nut-juice/" title="Grain Nut Juice" className="text-truncate">Grain Nut Juice</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/soft-drinks/instant-powder-drinks/" title="Instant Powder Drinks" className="text-truncate">Instant Powder Drinks</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/food-beverage/soft-drinks/coffee-drinks/" title="Coffee Drinks" className="text-truncate">Coffee Drinks</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="minerals-metallurgy-tab" className="tab-pane">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/minerals-metallurgy/wire-mesh/" title="Wire Mesh" className="text-danger">Wire Mesh</a>
                </h3>
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
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/minerals-metallurgy/aluminum/" title="Aluminum" className="text-danger">Aluminum</a>
                </h3>
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
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/minerals-metallurgy/titanium/" title="Titanium" className="text-danger">Titanium</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/minerals-metallurgy/titanium/titanium-bars/" title="Titanium Bars" className="text-truncate">Titanium Bars</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/minerals-metallurgy/titanium/titanium-sheets/" title="Titanium Sheets" className="text-truncate">Titanium Sheets</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/minerals-metallurgy/titanium/titanium-pipes/" title="Titanium Pipes" className="text-truncate">Titanium Pipes</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/minerals-metallurgy/titanium/other-titanium/" title="Other Titanium" className="text-truncate">Other Titanium</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/minerals-metallurgy/titanium/titanium-wire/" title="Titanium Wire" className="text-truncate">Titanium Wire</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/minerals-metallurgy/titanium/titanium-foil/" title="Titanium Foil" className="text-truncate">Titanium Foil</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/minerals-metallurgy/titanium/titanium-powder/" title="Titanium Powder" className="text-truncate">Titanium Powder</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h3>
                  <a href="https://www.eworldtrade.com/minerals-metallurgy/tungsten/" title="Tungsten" className="text-danger">Tungsten</a>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.eworldtrade.com/minerals-metallurgy/tungsten/tungsten-bars/" title="Tungsten Bars" className="text-truncate">Tungsten Bars</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/minerals-metallurgy/tungsten/tungsten-sheets/" title="Tungsten Sheets" className="text-truncate">Tungsten Sheets</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/minerals-metallurgy/tungsten/tungsten-pipes/" title="Tungsten Pipes" className="text-truncate">Tungsten Pipes</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/minerals-metallurgy/tungsten/tungsten-crucibles/" title="Tungsten Crucibles" className="text-truncate">Tungsten Crucibles</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/minerals-metallurgy/tungsten/tungsten-powder/" title="Tungsten Powder" className="text-truncate">Tungsten Powder</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/minerals-metallurgy/tungsten/tungsten-wire/" title="Tungsten Wire" className="text-truncate">Tungsten Wire</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/minerals-metallurgy/tungsten/tungsten-foil/" title="Tungsten Foil" className="text-truncate">Tungsten Foil</a>
                  </li>
                  <li>
                    <a href="https://www.eworldtrade.com/minerals-metallurgy/tungsten/other-metals-metal-products/" title="Other Metals Metal Products" className="text-truncate">Other Metals Metal Products</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   )
}
export default Category