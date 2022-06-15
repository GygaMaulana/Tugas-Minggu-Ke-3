function reverseWords(words) {
    array = words.split(" ")
    results = ""
    for (i=0;i<array.length;i++) {
      results += array[array.length-1-i] + " "
    }
  
    return results
  }
  console.log (reverseWords('Saya Belajar Javascript'))