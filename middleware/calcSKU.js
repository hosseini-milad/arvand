const calcSKU=(cat,brand,sku,filter)=>{
    var result = '';
    try{
        var catId = cat&&cat.catCode
        var brandId = brand&&brand.brandCode
        result = catId + brandId + sku + filter
        return(result)
    }
    catch(error){
        return(error)
    }
  }
module.exports =calcSKU