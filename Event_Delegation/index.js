
// document.getElementById("myList").addEventListener("click", function(event) {
//     if (event.target && event.target.nodeName === "LI") {
//         console.log("Clicked on:", event.target.textContent);
//     }
// });


document.getElementById('grandParent').addEventListener('click', (event) => {
    if(event.target.id == 'grandParent') {
        console.log('Grand parent click')
    }
    else if(event.target.id == 'child') {
        console.log('child click')
    }
})
