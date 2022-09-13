
/* anzahl, durchmesser */

class As {
    constructor(a1, a2, a3, a4, a5, x1, x2, x3, x4, x5, ds1, ds2, ds3, ds4, ds5){

        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
        this.a4 = a4;
        this.a5 = a5;

        this.x1 = x1;
        this.x2 = x2;
        this.x3 = x3;
        this.x4 = x4;
        this.x5 = x5;

        this.ds1 = ds1;
        this.ds2 = ds2;
        this.ds3 = ds3; 
        this.ds4 = ds4;
        this.ds5 = ds5;
    };


    _check = (asds) => {
        if(asds < 0){
            return this._DsToAs(asds)
        } else {
            return (asds)
        }
    }

    _DsToAs = (ds) => {
        let as = Math.round(Math.PI * Math.pow(Math.abs(ds)/2,2))/100
        return as;
    }

    _AsToDs = (as) => {
        let ds = (Math.round((Math.sqrt(as/Math.PI))*100)/100)*2*10;
        return ds;
    }

    schwerpunktZ = () => {
        let As1 = this._check(this.ds1)*this.a1;
        let As2 = this._check(this.ds2)*this.a2;
        let As3 = this._check(this.ds3)*this.a3;
        let As4 = this._check(this.ds4)*this.a4;
        let As5 = this._check(this.ds5)*this.a5;

        let As1x1 = As1*this.x1;
        let As2x2 = As2*this.x2;
        let As3x3 = As3*this.x3;
        let As4x4 = As4*this.x4;
        let As5x5 = As5*this.x5;

        let Asi = As1 + As2 + As3 + As4 + As5;
        let AsiXi = As1x1 + As2x2 + As3x3 + As4x4 + As5x5;

        let xi = AsiXi/Asi;
        console.log(xi)

    }
}



let x = new As(4, 2, 0, 0, 0, 5.2, 6.7, 0, 0, 0, -20, -16, 0, 0, 0).schwerpunktZ();


let Bewehrung = [
    {
        "anzahl" : 4,
        "schwerlage" : 5.2,
        "durchmesser" : -20
    },
    {
        "anzahl" : 2,
        "schwerlage" : 6.7,
        "durchmesser" : -16
    }
]


console.log(Bewehrung.length)

