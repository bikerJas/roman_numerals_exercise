function getNumericValueFromRomanNumerals(romanNumerals) {
  const valid = /^(?=[MDCLXVI])M{0,3}(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/i
  if (romanNumerals.match(valid) === null) return null;
  const numerals = romanNumerals.split("");
  let count = 0;
  for (let x = 0; x < numerals.length; x++){
    if (numerals[x] == "M" ){
      count += 1000;
    }
    else if (numerals[x] == "C" && numerals[x+1]  == "M"){
      count += 900;
      x++;
    }
    else if (numerals[x] == "C" && numerals[x+1]  == "D"){
      count += 400;
      x++;
    }
    else if (numerals[x] == "D" ){
      count += 500;
    }
    else if (numerals[x] == "C" ){
      count += 100;
    }
    else if (numerals[x] == "X" && numerals[x+1]  == "C"){
      count += 90;
      x++;
    }
    else if (numerals[x] == "X" && numerals[x+1]  == "L"){
      count += 40;
      x++;
    }
    else if (numerals[x] == "L"){
      count += 50;
    }
    else if (numerals[x] == "X" ){
      count += 10;
    }
    else if (numerals[x] == "I" && numerals[x+1] == "X"){
      count += 9;
      x++;
    }
    else if (numerals[x] == "I" && numerals[x+1] == "V"){
      count += 4;
      x++;
    }
    else if (numerals[x] == "V" ){
      count += 5;
    }
    else if (numerals[x] == "I"){
      count += 1;
    }
    
  }
  return count;
}

module.exports = getNumericValueFromRomanNumerals;
