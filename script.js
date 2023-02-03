

let newArr = [ "Jaamal", "ahmad", "jeorge", "mohammad" ]

     for (let i=0; i<newArr.length; i++){

        let letter = newArr[i].charAt().toLowerCase();

        if (letter=='j') {
            console.log("goodbye "+newArr[i]);
           } else {
            console.log("hello "+ newArr[i]);
           }

     }
