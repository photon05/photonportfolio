function mousemove(event){
    console.log("pageX: ",event.pageX, 
    "pageY: ", event.pageY, 
    "clientX: ", event.clientX, 
    "clientY:", event.clientY)

    document.querySelector('.light').style.left = event.clientX+"px";
    document.querySelector('.light').style.top = event.pageY+"px";

 let height = window.screenY;
 console.log(height);
    // document.querySelector('.position').posx.value = event.clientX;
    // document.querySelector('.position').posy.value = event.clientY;
}

window.addEventListener('mousemove', mousemove);


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
// var txt = "";

// document.querySelector('#uppertxt').onmouseover = event => {
//     let ogvalue = event.target.dataset.value;
//     let iterations = 0;
//     const interval = setInterval(()=>{
//        for(let i = 0; i<10; i++) {
//             if(i==0){
//                 txt="";
//             }
//             if(i<iterations){
//                 txt = txt+ogvalue[i];
//             }
//             else{
//                 txt = txt+letters[Math.floor((Math.random())*36)];
//             }
//         }
//         event.target.innerText = txt;
//     if(iterations > 10){
//         clearInterval(interval);
//         event.target.innerText = ogvalue;
//     }
//     iterations += 1;

//     },30)
        

// }
// document.querySelector('#lowertxt').onmouseover = event => {
//     let ogvalue = event.target.dataset.value;
//      let iterations = 0;
//     const interval = setInterval(()=>{
//        for(let i = 0; i<14; i++) {
//             if(i==0){
//                 txt="";
//             }
//             if(i<iterations){
//                 txt = txt+ogvalue[i];
//             }
//             else{
//                 txt = txt+letters[Math.floor((Math.random())*36)];
//             }
            
//               }
//         event.target.innerText = txt;
//     if(iterations > 10){
//         clearInterval(interval);
//         event.target.innerText = ogvalue;
//     }
//     iterations += 1;
    
//     },30)
// }


document.querySelector('#uppertxt').onmouseover = event => {
  let iterations =0;
  const interval = setInterval(() => {
     event.target.innerText = event.target.innerText.split("").map((letter, index) =>{ 
       if(index<iterations){
         return event.target.dataset.value[index]
       }
         return letters[Math.floor(Math.random()*36)]}).join("");
  
    if(iterations>10){
      clearInterval(interval);
    } 
    iterations += 1;
  },30)
  
}


document.querySelector('#lowertxt').onmouseover = event => {
  let iterations =0;
  const interval = setInterval(() => {
     event.target.innerText = event.target.innerText.split("").map((letter, index) =>{ 
       if(index<iterations){
         return event.target.dataset.value[index]
       }
         return letters[Math.floor(Math.random()*36)]}).join("");
  
    if(iterations>13){
      clearInterval(interval);
    } 
    iterations += 1;
  },30)
  
}

// Scrolling  Animation

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
    else{
      entry.target.classList.remove('show');
    }
  });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));

// _________________________

const observer1 = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  
  });
});

const hidden1Elements = document.querySelectorAll('.hidden1');
hidden1Elements.forEach((el)=> observer1.observe(el));


const observer2 = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  
  });
});

const hidden2Elements = document.querySelectorAll('.hidden2');
hidden2Elements.forEach((el)=> observer2.observe(el));
