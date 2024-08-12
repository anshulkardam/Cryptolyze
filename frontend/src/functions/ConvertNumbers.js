export const ConvertNumbers = (number) => {
    const num = number.toLocaleString();
    var price = num.split(",")
    if(price.length == 5){
        return price[0] + "." + price[1].slice(0,2) + 'T' ;
    } else if(price.length == 4){
        return price[0] + "." + price[1].slice(0,2) + 'B' ;
    } else if(price.length == 3){
        return price[0] + "." + price[1].slice(0,2) + 'M' ;
    } else if(price.length == 2){
        return price[0] + "." + price[1].slice(0,2) + 'K' ;
    } else {
        return num.toLocaleString()
    }
}