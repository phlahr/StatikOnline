
/* anzahl, as, abstand, schwerlage, lage */
let schwerpunkt = (as) => {

    if (as < 0 ){
        as = Math.round(Math.PI * Math.pow(Math.abs(as)/2,2))/100
    }
    console.log(as)
}

schwerpunkt(-20);