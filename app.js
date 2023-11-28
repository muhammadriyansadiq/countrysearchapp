let row = document.querySelector(".row")
// let r = [];
// // let b = [{link:"https://media.istockphoto.com/id/1479180033/photo/digital-eye-ai-artificial-intelligence-digital-concept.webp?b=1&s=170667a&w=0&k=20&c=TiT2tkP7ohy6CfAhXysl2v5oVm4Q5pP0utW46gOzWdA=",heading:"lenses"},{link:"https://media.istockphoto.com/id/1187951204/photo/camera-lens-with-red-and-blue-backlight-macro-photography-lenses-horizontal-photography.jpg?s=612x612&w=0&k=20&c=CnuTkeg8vE7cvsyn7nAQB41bHZPXmEQZnZ52O7OZrtg=",heading:"lenses"},{link:"https://media.istockphoto.com/id/1413735503/photo/social-media-social-media-marketing-thailand-social-media-engagement-post-structure.jpg?s=612x612&w=0&k=20&c=7Y4Bdom9c7paYa67nSCvwSuFoppYxJIh-CTYqe6J4Js=",heading:"Iphone"},{link:"https://media.istockphoto.com/id/1505104024/photo/white-mens-t-shirt-mockup-3d-rendering-sports-shirt-for-design-pattern-front-side-view-set.webp?b=1&s=170667a&w=0&k=20&c=_kHoplmxCeCtMkRzxZ3-gBo1UKASmE1pJTyiNwB-Q_o=",heading:"T-shirt"},{link:"https://media.istockphoto.com/id/1323480815/photo/navy-t-shirt.jpg?s=1024x1024&w=is&k=20&c=ovtakwsDMf1xKHWz0AJJoqzt0KSCo0opg5kJUYwszs0=",heading:"T-shirt"},{link:"https://media.istockphoto.com/id/182688952/photo/full-frame-blue-denim-jeans.jpg?s=612x612&w=0&k=20&c=iYNXVbOUICN-vA8qx-B1xfJB8FrTfSfDlk5UCNWGgI8=",heading:"Jeans"},{link:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D",heading:"Shoes"},{link:"https://media.istockphoto.com/id/842700386/photo/blank-black-baseball-hat-4-view-on-white-background.jpg?s=612x612&w=0&k=20&c=0fKtnDKbmrZGU8X2ZekfpTds8UobBSlndq34PCTxBWI=",heading:"Caps"},{link:"https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlfGVufDB8fDB8fHww",heading:"furniture"},{link:"https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",heading:"furniture"},{link:"https://media.istockphoto.com/id/1395191574/photo/black-led-tv-television-screen-blank-isolated.webp?b=1&s=170667a&w=0&k=20&c=rT4t6CuNap53Qu78fbFGMy5IEji46IqQDILCrfAcHtg=",heading:"LED"},{link:"https://media.istockphoto.com/id/1460848181/photo/black-couple-watches-professional-soccer-match-on-tv-sitting-on-a-couch-at-home-in-the.webp?b=1&s=170667a&w=0&k=20&c=LrE_E6JJv6WdEnS3526k4RZLWI6V5VkXi2abBTzcVvs=",heading:"LED"},{link:"https://media.istockphoto.com/id/1151408809/photo/white-canvas-fabric-cap-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=-vfBoZ4H4KCFFAMdDFx1z3AG8r6uoR8i-SnOMP_JZoc=",heading:"caps"},{link:"https://media.istockphoto.com/id/509568543/photo/indian-food.jpg?s=612x612&w=0&k=20&c=zsS36A1X8Hg37WSzqZI3JiI9HVF8rngshIfx0eJeJyA=",heading:"biryani"},{link:"https://media.istockphoto.com/id/1407172002/photo/indian-spicy-mutton-biryani-with-raita-and-gulab-jamun-served-in-a-dish-side-view-on-grey.jpg?s=612x612&w=0&k=20&c=sYldtF2E_cSuYioPtcmM15arsnSs2mIgpuAKUDuuGoI=",heading:"biryani"},,{link:"https://media.istockphoto.com/id/175601846/photo/isolated-shot-of-opened-black-handle-scissors-on-white-background.jpg?s=612x612&w=0&k=20&c=l5Vx3vLgm70BrZ7efGNM7Z1DZ-BsQA6rBRy4SHTlNaM=",heading:"scissors"},{link:"https://media.istockphoto.com/id/918298266/photo/scissors-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=dPDBwVOpOvhCoPjlAmR_KMEz86dDpDIGVYKNaoiFNlc=",heading:"scissors"},{link:"https://media.istockphoto.com/id/1434007139/photo/laptop-blank-screen-on-wood-table-with-coffee-cafe-background-mockup-template-for-your-text.jpg?s=612x612&w=0&k=20&c=meHog8Pww_GcsFTvEjX-HKInLcYGU3WrTAZa6kr457o=",heading:"laptop"},{link:"https://images.unsplash.com/photo-1520155346-36773ab29479?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmdiJTIwbGFwdG9wfGVufDB8fDB8fHww",heading:"laptop"},{link:"https://images.unsplash.com/photo-1553499944-5472133459bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9tZWdyYW5hdGV8ZW58MHx8MHx8fDA%3D",heading:"pomegranate"},{link:"https://images.unsplash.com/photo-1613802227567-597dd00df30d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBvbWVncmFuYXRlfGVufDB8fDB8fHww",heading:"pomegranate"}]


// const  getUserdata = async()=>{
//     try{
//     // const res = await fetch("https://api.github.com/users")
//     const res = await fetch("https://api.escuelajs.co/api/v1/products")
//     const data = await res.json();
//     if(data){
//         row.innerHTML = ""     
//     }
//     // console.log(data);
//     data.forEach(element => {
//         let card = `<div class="card col-md-6 col-sm-12" style="width: 18rem;">
//         <img src="${element.images[0]}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title"></h5>
//             <p class="card-text">${element.description}</p>
//         </div></div>`;
//         row.insertAdjacentHTML('beforeend', card);
//         r.push(card)
//         // console.log(array);
//     });
//     }
//     catch(error){
//         console.log(error);
//     }
//     }


// let btn = document.querySelector("button")
// btn.addEventListener("click",function(){
//     let input = document.querySelector(".input").value;
//     // console.log(input);
//     if(input){

//     let filterarray = r.filter((data)=>{
//           let div = document.createElement("div")
//           div.innerHTML = data;
//           let names = div.querySelector(".card-text").textContent
//           return names.toLocaleLowerCase().includes(input)
//         //   console.log(names);
//     })
//     // console.log(filterarray);
//     row.innerHTML = ""
//     filterarray.forEach((items)=>{
//         row.insertAdjacentHTML('beforeend', items);
//     })
// }

// else{
//     alert("search any item")
// }

// })

// getUserdata();
let btn = document.querySelector("button")
btn.addEventListener("click",function(){
    let input = document.querySelector(".input").value;
    const  getUserdata = async()=>{
        try{
        const res = await fetch(`https://restcountries.com/v3.1/name/${input}?fullText=true`)
        const data = await res.json();
        console.log(data);
            if(data){
        row.innerHTML = ""     
    }
        data.forEach(element => {
            
        let card = `<div class="card col-md-6 col-sm-12" style="width: 18rem;">
        <img src="${element.flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.name.common}</h5>
            <p class="card-text"><span class = "bolder">Currency</span> ${element.currencies[Object.keys(element.currencies)].name}</p>
            <p class="card-text"><span class = "bolder">Capital</span> ${element.capital[0]}</p>
            <p class="card-text"><span class = "bolder">Languages</span> ${Object.values(element.languages).toString().split(",").join(", ")}</p>
            <p class="card-text"><span class = "bolder">Area</span> ${element.area} Sq KM</p>
            <p class="card-text"><span class = "bolder">Maps</span><a target="_blank"  href="${element.maps.googleMaps}"> ${element.maps.googleMaps}</a></p>
            <p class="card-text"><span class = "bolder">Population</span> ${element.population}</p></div></div>`;
        row.insertAdjacentHTML('beforeend', card);
        });
        }
        catch(error){
            console.log(error);
        }
        }
        getUserdata()
})

