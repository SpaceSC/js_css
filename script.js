function pageLoad () {

//tömb, belül egy objektum (tag: h1, content: Cecilia, )
let myObjects = [
    {
    tag:"h1", 
    content:"Cecilia"
    },
    {
    tag:"p", 
    content:"Lorem ipsum"
    }
  ];

  /*
  for (let index = 0; index < myObjects.length; index++) {   
  }
  */
let myRoot = document.getElementById("root");

// array mindig tartja a sorrendet, object nem sorrendben logol ki
 for(myObject of myObjects){
   // console.log(myObject.content);
   myRoot.insertAdjacentHTML("beforeend", `
   <${myObject.tag}>${myObject.content}</${myObject.tag}>
   `
   );
 }

}

window.addEventListener("load", pageLoad); // ahol event van, ott van ()
