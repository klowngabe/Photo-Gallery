// Write a query selector that selects #imageContainer
let imageContainer= document.querySelector(".imageContainer");
console.log(imageContainer);
// Add at least four (4) image urls to this array
let imageUrls = [
"https://pbs.twimg.com/media/FXa5IP2WQAA0I7U.png", "https://i.pinimg.com/originals/5c/5d/f0/5c5df098a2ca050c9508d8c3c9794386.jpg", "https://i.pinimg.com/736x/d5/01/b1/d501b10409f9669c7becb5886876b587--funny-faces-justin-bieber.jpg", "https://static.wikia.nocookie.net/superwhybettersite/images/e/e5/Super_Why_Official.jpg/revision/latest/scale-to-width-down/332?cb=20200501142652"
];

// Write your for of loop using .insertAdjacentHTML below
for (let image of imageUrls) {
console.log(image);
    imageContainer.insertAdjacentHTML("afterbegin", "<img= https://pbs.twimg.com/media/FXa5IP2WQAA0I7U.png>", "<img=https://i.pinimg.com/originals/5c/5d/f0/5c5df098a2ca050c9508d8c3c9794386.jpg>", "<img=https://i.pinimg.com/736x/d5/01/b1/d501b10409f9669c7becb5886876b587--funny-faces-justin-bieber.jpg>", "<img= https://static.wikia.nocookie.net/superwhybettersite/images/e/e5/Super_Why_Official.jpg/revision/latest/scale-to-width-down/332?cb=20200501142652>" );
}