// Create a function that reverses a string:
// "Hi my name is Dan" -> "nad si eman ym iH"
// ** Instructor solution will be in sec6Pt71.js

// function reverse(str) {
//     // console.log("String: ", str);
//     const name = str.split("");
//     // console.log("Name:", name);

//     const reverseArray = [];
//     var last = name.length;

//     // console.log('Before loop: ', name[last]);
//     // console.log('Last: ', last);
//     // console.log('Name[last]:', name[2]);

//     for (i = 0; i < name.length; i++) {
//         // console.log('Last in loop: ', last);
//         reverseArray.push(name[last - 1]);
//         last --;
//         // console.log(reverseArray);
//     }
//     console.log(reverseArray);
//     // reverseStr = reverseArray.toString();
//     // console.log(reverseStr);

//     noCommas = reverseArray.join("");
//     console.log(noCommas);
// }

// reverse('Dan is the greatest!!!');

// Final solution without logs:

function reverse(str) {
  const name = str.split("");
  const reverseArray = [];
  var last = name.length;

  for (i = 0; i < name.length; i++) {
    reverseArray.push(name[last - 1]);
    last--;
  }

  noCommas = reverseArray.join("");
  return noCommas;
}

console.log(reverse("Dan is the greatest!!!"));
