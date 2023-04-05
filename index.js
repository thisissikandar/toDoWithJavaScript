let add = document.getElementById("add");


function getAndUpdate(){
    console.log("Updating");
    let title = document.getElementById("title").value;
  //   console.log(title)
    let desc = document.getElementById("description").value;
  //   console.log(desc)
    if (localStorage.getItem("itemJson") === null) {
      itemJsonArray = [];
      itemJsonArray.push([title, desc]);
      localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
    }else{
      itemJsonArrayStr = localStorage.getItem("itemJson");
      itemJsonArray = JSON.parse(itemJsonArrayStr);
      itemJsonArray.push([title,desc]);
      localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
    }

    update();
}

function update(){
    if (localStorage.getItem("itemJson") === null) {
        itemJsonArray = [];
        localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
      }else{
        itemJsonArrayStr = localStorage.getItem("itemJson");
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        
      }
 

  let tableBody = document.getElementById("tableBody");
  let str = "";
  itemJsonArray.forEach((element, index) => {
    str +=`
    <tr>
    <th scope="row">${index+1}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td><button onclick ="deletedBtn(${index})" class="btn btn-primary">Delete</button></td>
  </tr>
    `
    tableBody.innerHTML= str;
    
  });

}
add.addEventListener("click", getAndUpdate );
update();


function deletedBtn(itemIndex){
 console.log("deleting",  itemIndex)
 itemJsonArrayStr = localStorage.getItem("itemJson");
 itemJsonArray = JSON.parse(itemJsonArrayStr);
 itemJsonArray.splice(itemIndex, 1);

 localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
 update();
}




function clearStorage(){
    console.log("Clear All Local Storage items")
    localStorage.clear();
    update();
}
// async function main(){
//     console.log("first")
//    await new Promise((resolve, reject)=>{
//    setTimeout(()=>{
//     console.log("Hello")
//     resolve();
//    },5000)
// })

//     console.log("world");
//   }
//   main();
