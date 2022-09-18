
// class Xi {
//     constructor(Bewehrung){
//         this.Bewehrung = Bewehrung;
//     };
//     //Method - check if a diameter is given
//     _check = (asds) => {
//         return asds < 0 ? this._DsToAs(asds) : asds;
//     }
//     //Method - convert to As(cm²)value
//     _DsToAs = (ds) => {
//         return Math.round(Math.PI * Math.pow(Math.abs(ds)/2,2))/100
//     }
//     _round = (num) => {
//         return +(Math.round(num + "e+3")+"e-3");
//     }
//     schwerpunkt = () => {
//         let Asi = 0;  //Gesamtquerschnittsfläche
//         let AsiXi = 0; //Gesamtquerschnittsfläche * Gesamtschwerpunkt

//         for (let i = 0; i < this.Bewehrung.length; i++){
//             let _Asi =  this._check(this.Bewehrung[i].durchmesser) * this.Bewehrung[i].anzahl
//             Asi = Asi + _Asi;
//             AsiXi = AsiXi + _Asi * this.Bewehrung[i].schwerlage
//         }
//         return this._round(AsiXi/Asi);
//     }
// }


class Xi {
    constructor(a){this.a = a;};
    _1 = (b) => {return b < 0 ? this._2(b) : b}
    _2 = (c) => {return Math.round(Math.PI * Math.pow(Math.abs(c)/2,2))/100}
    _3 = (d) => {return +(Math.round(d + "e+3")+"e-3")}
    xi = () => {let x = 0;let xx = 0;
        for (let i = 0; i < this.a.length; i++)
        {let _x =  this._2(this.a[i].durchmesser) * this.a[i].anzahl;
            x = x + _x;
            xx = xx + _x * this.a[i].schwerlage;
        }
        return this._3(xx/x);
    }
}


let Asu = [
    {
        "anzahl" : 4,
        "schwerlage" : 5.2,
        "durchmesser" : -20
    },
    {
        "anzahl" : 2,
        "schwerlage" : 6.7,
        "durchmesser" : -20
    },
    {
        "anzahl" : 2,
        "schwerlage" : 6.7+2.5,
        "durchmesser" : -16
    }
]

let xi = new Xi(Asu).xi()

console.log(xi)



//_AsToDs = (as) => {
//    let ds = (Math.round((Math.sqrt(as/Math.PI))*100)/100)*2*10;
//    return ds;
//}