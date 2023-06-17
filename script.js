/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    let output = arr.map(function(ele){
        if(ele.profession == "developer"){
            console.log(ele)
        }
    })
  //Write your code here , just console.log
}
  
function PrintDeveloperbyForEach() {
    //Write your code here , juast console.log
      let output = arr.forEach(function(ele){
          if(ele.profession == "developer"){
              console.log(ele)
          }
      })
  }
  
  function addData() {
    //Write your code here, just console.log
    let obj = {id:4,name:"susan",age:"20",profession:"intern"}
    arr.push(obj)
    console.log(arr[arr.length-1])
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.filter(function(ele)
    {
        if(ele.profession != "admin"){
            console.log(ele)
        }
    })
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr1 = [
    { id: 4, name: "john11", age: "28", profession: "developer22" },
    { id: 5, name: "jack11", age: "30", profession: "developer22" },
    { id: 6, name: "karen11", age: "29", profession: "admin22" },
  ];
  
      console.log(arr.concat(arr1))
  }