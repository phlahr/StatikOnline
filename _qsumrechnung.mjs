export let _AsToDs = (as) => {
    ds = (Math.round((Math.sqrt(as/Math.PI))*100)/100)*2*10;
    console.log("Durchmesser: "+ ds)
}

export let _DsToAs = (ds) => {
    as = Math.round(Math.PI * Math.pow(Math.abs(ds)/2,2))/100
    console.log("Bewehrungswert: "+ as)
}

//_AsToDs(3.14);
//_DsToAs(16);