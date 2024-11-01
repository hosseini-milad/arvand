const calcSKU=(cat,brand,sku,filter)=>{
    var sku = '';
    try{
        var catId = cat&&cat.catCode
        var brandId = brand&&brand.brandCode
        sku = catId + brandId + sku + filter
        return(sku)
    }
    catch(error){
        return(error)
    }
  }
module.exports =calcSKU