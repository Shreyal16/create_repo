confirm("Click OK to win Lottery")

let cont = document.querySelector(".container")

// APPENDING CARDS INTO WEB PAGE WITH DELAY

async function card(d) {

    return new Promise((resolve, reject) => {

        cons = true

        if (cons) {

            setTimeout(() => {
            
                let html = ` <div class="card">
               
               <span class="alert"> ${d} </span>
               
               <div class="dot-container">
                <span class="dot">.</span>
                <span class="dot">.</span>
                <span class="dot">.</span>
                </div>
               </div> `

                cont.innerHTML += html
                resolve("card created")

            }, 2000);
        }
        else {
            reject("Not Created any card")
        }

    })

}


// CREATING CARDS   

async function main() {

    try {

        //  WE CAN MAKE IT MORE BETTER BY USING LOOP HERE AND ARRAY

        await card("Scanning Your Phone!!!")
        await card("Bank Account Detected 😏😏😏")
        await card("Transferring Money😏😏")
        await card("Bank Balance = '0000'☠️☠️☠️")
        await card("Fuck Off!!!🖕🖕")
    } catch (err) {
        console.log(err);

    }
}

main()