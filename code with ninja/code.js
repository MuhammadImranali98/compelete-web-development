// window.onload= function (){


//     var items=document.getElementsByTagName("li");  

//     for(let t=0; t < items.length; t++) 
//     {
//         items[t].onclick= function bg() {
//             console.log(t);
//         }
//     }}
// window.onload= function (){

//     functionlog(num){
//         console.log(num);
//     }
//     log();
    
// }

    //spread operator
    // let a,b;
    // let num2=[1,2,3,5,6,7];
    // let c=num2.filter((a)=>{
    //    return a<4;
    // })
    //     console.log(...c);
        
                
           
    //    let c=a+b
    //     return c;
    // }  
    // addnums(2,43);
    // // addnums(5,3,4);

     //TEMPLETE STRING
  //  window.onload=function(){
  //   function logimran(na,age){
  //   console.log(`my name is${na} and my age is ${81+2}`);

  //  }
  //  logimran("imran",22);
  //  }
    //string methods
    // window.onload=function(){
    //   let str="imran";
    //    let a= str.startsWith("mr") ;
    //    console.log(a);
    //    alert(a)
    // }

    // arrow function
  //   window.onload=function() {
  //   let  str = name => 
  //   console.log(`${name} say imran`);
  //     str("marks");
  //     numq();
  //   }
  // function numq(){
  //   console.log("hay there");
  // }

     //sets in ecma 

    //  window.onload=function(){
    //   let name= new Set();
    //   name.add("imran").add("ali").add("alii");
    //  console.log(name.has("alii"));
     
  
    //   console.log(name);

    //  }

    // window.onload=function(){
    //   let name=["imtan","jah","task","ami","jah","task","ami"]
    //   let imi= new Set(name);
    //   console.log(imi);
    //   name=[...imi];
    //   console.log(name);
    // }
       

    //generators in java

    window.onload=function(){
      function* gen(){
       yield console.log("apple"); 
        console.log("apple"); 
        console.log("apple"); 
      }
      let mygen=gen();
      mygen.next();
      mygen.next();
    }

