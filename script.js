(() => {
    let myNumb = 0;
    let myNumbPlus = 1;
    let counter = document.getElementById("counter");
    let button = document.getElementsByTagName("button")[0];
    let counterValue = document.getElementById("counter").value;
    let upgrade1 = document.getElementById("updatePriceButton1");
    let upgrade2 = document.getElementById("updatePriceButton2");
    let upgrade3 = document.getElementById("updatePriceButton3");
    let upgrade4 = document.getElementById("updatePriceButton4");
    let upgrade5 = document.getElementById("updatePriceButton5");
    let firstUpgrade
    let myAudio = new Audio("audio.mp3/audio1.mp3");
    let myPrice1 = 100;
    let myPrice2 = 250;
    let myPrice3 = 500;
    let myPrice4 = 1000;
    let myPrice5 = 3000;

    button.addEventListener("click", () => {
        myNumb += myNumbPlus;
        counter.innerHTML = myNumb;
    })
    setInterval(() => {
        if (myNumb < myPrice1) {
            document.getElementById("updatePriceButton1").setAttribute("disabled", "");
            document.getElementById("updatePriceButton1").removeAttribute("enabled", "");
        } 
        else if (myNumb >= myPrice1) {
            document.getElementById("updatePriceButton1").setAttribute("enabled", "");
            document.getElementById("updatePriceButton1").removeAttribute("disabled", "");
        }
        if (myNumb < myPrice2) {
            document.getElementById("updatePriceButton2").setAttribute("disabled", "");
            document.getElementById("updatePriceButton2").removeAttribute("enabled", "");
        } 
        else if (myNumb >= myPrice2) {
            document.getElementById("updatePriceButton2").setAttribute("enabled", "");
            document.getElementById("updatePriceButton2").removeAttribute("disabled", "");
        }
        if (myNumb < myPrice3) {
            document.getElementById("updatePriceButton3").setAttribute("disabled", "");
            document.getElementById("updatePriceButton3").removeAttribute("enabled", "");
        } 
        else if (myNumb >= myPrice3) {
            document.getElementById("updatePriceButton3").setAttribute("enabled", "");
            document.getElementById("updatePriceButton3").removeAttribute("disabled", "");
        }
        if (myNumb < myPrice4) {
            document.getElementById("updatePriceButton4").setAttribute("disabled", "");
            document.getElementById("updatePriceButton4").removeAttribute("enabled", "");
        } 
        else if (myNumb >= myPrice4) {
            document.getElementById("updatePriceButton4").setAttribute("enabled", "");
            document.getElementById("updatePriceButton4").removeAttribute("disabled", "");
        }
        if (myNumb < myPrice5) {
            document.getElementById("updatePriceButton5").setAttribute("disabled", "");
            document.getElementById("updatePriceButton5").removeAttribute("enabled", "");
        } 
        else if (myNumb >= myPrice5) {
            document.getElementById("updatePriceButton5").setAttribute("enabled", "");
            document.getElementById("updatePriceButton5").removeAttribute("disabled", "");
        }
    }, 100);
    
    upgrade1.addEventListener("click", () => {
        myNumbPlus *= 2;
        myAudio.play();
        myNumb -= myPrice1;
        counter.innerHTML = myNumb;
        myPrice1 *= 3;
        document.getElementById("updatePrice1").innerHTML = myPrice1;
    })
    upgrade2.addEventListener("click", () => {
        myAudio.play();
        myNumb -= myPrice2;
        myPrice2 *= 2;
        counter.innerHTML = myNumb;
        document.getElementById("updatePrice2").innerHTML = myPrice2;
        setInterval(function () {
            counter.innerHTML = myNumb;
            myNumb += 1
        },1000);
    })
    /*upgrade3.addEventListener("click", () => {
        myAudio.play();
        setTimeout(() => {
            myNumbPlus *=10;
            let myTimer = 30;
            console.log(myTimer);
            setInterval(() => {
                if(myTimer === 0) {
                    clearInterval();
                }
                upgrade3.innerHTML = myTimer;
                myTimer -= 1;
            }, 1000)
        }, 1000)
        clearTimeout();
    })*/
    upgrade4.addEventListener("click", () => {
        myPrice4 *=2;
        myAudio.play();
        myNumb -= myPrice4;
        counter.innerHTML = myNumb;
        myNumbPlus *= 3;
        document.getElementById("updatePrice4").innerHTML = myPrice4;
    })
    upgrade5.addEventListener("click", () => {
        myAudio.play();
        myPrice5 *= 2;
        myNumb -= myPrice5;
        counter.innerHTML = myNumb;
        document.getElementById("updatePrice5").innerHTML = myPrice5;
        setInterval(function () {
            counter.innerHTML = myNumb;
            myNumb += 10;
        }, 1000)
    })

})();