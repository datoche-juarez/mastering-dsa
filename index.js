function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log("hi");
  }
}

printFirstItemThenFirstHalfThenSayHi100Times([
  "tree",
  "house",
  "building",
  "sky",
  "earth",
  "train",
]);

//O(1 + n/2 + 100) = O(n)

function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes2.forEach(function(boxes2) {
        console.log(boxes2);
    });
}

//O(a + b)