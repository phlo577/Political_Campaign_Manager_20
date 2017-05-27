function flattenArray(array){

return [].concat.apply([], array);

}

function compareAgainstGreater(value, filter){return value > filter;}

function compareAgainstEqual(value, filter){return value == filter;}