const words1 = ["Easy to use", "User-friendly", "Intuitive"];
const textDiv1 = document.getElementById("text_1");
let i1 = 0;
let j1 = 0;

// Function to type the words (all the rest are  the same)
function typeWriter1() {
    if (j1 < words1[i1].length) {
        textDiv1.innerHTML += words1[i1].charAt(j1);
        j1++;
        setTimeout(typeWriter1, 60);
    } else {
        setTimeout(() => {
            textDiv1.innerHTML = "";
            i1++;
            j1 = 0;
            if (i1 >= words1.length) {
                i1 = 0; 
            }
            typeWriter1();
        }, 1500); 
    }
}


const words2 = ["Practical", "Efficient", "Effective"];
const textDiv2 = document.getElementById("text_2");
let i2 = 0;
let j2 = 0;

function typeWriter2() {
    if (j2 < words2[i2].length) {
        textDiv2.innerHTML += words2[i2].charAt(j2);
        j2++;
        setTimeout(typeWriter2, 60);
    } else {
        setTimeout(() => {
            textDiv2.innerHTML = "";
            i2++;
            j2 = 0;
            if (i2 >= words2.length) {
                i2 = 0; 
            }
            typeWriter2();
        }, 1500); 
    }
}

const words3 = ["Secure", "Protected", "Safe"];
const textDiv3 = document.getElementById("text_3");
let i3 = 0;
let j3 = 0;

function typeWriter3() {
    if (j3 < words3[i3].length) {
        textDiv3.innerHTML += words3[i3].charAt(j3);
        j3++;
        setTimeout(typeWriter3, 60);
    } else {
        setTimeout(() => {
            textDiv3.innerHTML = "";
            i3++;
            j3 = 0;
            if (i3 >= words3.length) {
                i3 = 0; 
            }
            typeWriter3();
        }, 1500); 
    }
}

// Call the functions
typeWriter1();
typeWriter2();
typeWriter3();
console.log("It's working!");//random messaje in the console