let divideAndSort = (input) => {
   var dataSplit =  input.toString().split('0');
    let result = ""; 
   for (let index = 0; index < dataSplit.length ; index++) {
        let arrayDataSplitInt = [];
        
        for (let y = 0; y < dataSplit[index].length; y++) {
            arrayDataSplitInt.push(parseInt(dataSplit[index][y]));
        }
        
        arrayDataSplitInt.sort();  
        
        for (let z = 0; z < arrayDataSplitInt.length; z++) {
          result = result + arrayDataSplitInt[z].toString();
            
        }
      
   }

   console.log(parseInt(result));
}

divideAndSort(5956560159466056)
