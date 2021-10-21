/**
 * whether it is divisible by 9?

  e.g

  0 -> true  
  7 -> false  
  9 -> true  
  18 -> true  
  19 -> false  
  777777777777777777777777777777777777777777777 -> true

  Tips:

      All input strings in the tests are valid non-negative integer numbers, you don't have to check that.
      You'd better not use the arbitrary-precision data types from chosen programming languages, if any, to keep the kata fun :)
          For Java, avoid BigInteger or BigDecimal.
          For Javascript, avoid BigInt.
          For Python3, since int has unbounded range, so avoid converting the whole input as a single int directly.
          etc ...

 * 
 */

/**
 * Para resolver essa quest tem um truque de somar os algarismos que quase ninguem sabe: https://www.youtube.com/watch?v=Pnjq2qn0D_I
 */

function divBy9(ns) {
  const numberDiv = String(ns).split('').map((n) => Number(n))
  // now numberDiv is Array with int

  var sum = 0;

  for (var i = 0; i < numberDiv.length; i++) {
    sum += numberDiv[i];
  }
  // sum of all element of the array
  if (sum % 9 === 0) {
    return true
  } else {
    return false
  }
}

divBy9("777777777777777777777777777777777777777777777")