// October 8th, 2024
// Sorting Interview Questions:

// #1. - Sort 10 schools around your house by distance:
// Insertion Sort
// Because we only have a small amount of schools to sort through, we should go with something simple and elementary like Insertion Sort.

// #2. - eBay sorts listings by the current bid amount:
// Radix or Counting Sort

//  Because the bid values are numeric values which gives us the opportunity to beat O(n log n) time complexity

// #3. - Sort scores on ESPN:
// Quick Sort

// Because there are likely many different types of sports scores, we probably can't use a non comparison algorithm like Radix or Counting Sort.Quick sort will likely be the most efficient and although we have the worst case to worry about, the scores probably won't be sorted because there are so many different kinds. We're also worried about in memory sorting so we probably wouldn't choose Merge Sort because of the increased space complexity.

// #4. - Massive database (can't fit all into memory) needs to sort through past year's user data:
// Merge Sort

// We're not going to be sorting in memory because the data is so big, so we should be really worried about performance. We don't want the worst case of Quick Sort which is O(n^2). We want to make sure that no matter what, we get O(n log n).

// #5. - Almost sorted Udemy review data needs to update and add 2 new reviews:
// Insertion Sort

// Although the data might be large, we should assume that most of the previous data is already sorted and that we are only adding two new reviews to the data. Insertion Sort for pre ordered lists is going to work better than any other type of sorting.

// #6. - Temperature records for the past 50 years in Canada:
// Radix Sort or Counting Sort
// Quick Sort

// If the temperatures are all integers, we could use something like Radix or Counting sort.
// However, if the temperatures are more accurate and contain decimal places, we are going to need to use a comparison sort like Quick Sort. Quick Sort will allow us to do in-memory sorting which will hopefully save on space complexity.

// #7. - Large user name database needs to be sorted. Data is very random:
// Merge Sort or Quick Sort
// We would use Merge Sort if we have enough memory and memory isn't too expensive on the machine.
// Or we could use Quick Sort if we're not too worried about the worst-case, the username database isn't too large, and if we can pick a good pivot.

// #8. - You want to teach sorting for the first time:
// Bubble Sort or Selection Sort

