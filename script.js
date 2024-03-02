const div = document.querySelector(".countdown");

let firstCountdown = (callback) => {
    setTimeout(() => {
        div.textContent = '10';
        callback();
    }, 1000);
}

let secondCountdown = (callback) => {
    setTimeout(() => {
        div.textContent = "9";
        callback();
    }, 1000);
}

let thirdCountdown = (callback) => {
    setTimeout(() => {
        div.textContent = "8";
        callback();
    }, 1000);
}

let fourthCountdown = (callback) => {
    setTimeout(() => {
        div.textContent = "7";
        callback();
    }, 1000);
}

let fifthCountdown = (callback) => {
    setTimeout(() => {
        div.textContent = "6";
        callback();
    }, 1000);
}

let sixthCountdown = (callback) => {
    setTimeout(() => {
        div.textContent = "5";
        callback();
    }, 1000);
}

let seventhCountdown = (callback) => {
    setTimeout(() => {
        div.textContent = "4";
        callback();
    }, 1000);
}

let eighthCountdown = (callback) => {
    setTimeout(() => {
        div.textContent = "3";
        callback();
    }, 1000);
}

let ninthCountdown = (callback) => {
    setTimeout(() => {
        div.textContent = "2";
        callback();
    }, 1000);
}

let tenthCountdown = (callback) => {
    setTimeout(() => {
        div.textContent = "1";
        callback();
    }, 1000);
}

let Finalcountdown = () => {
    setTimeout(() => {
        div.textContent = "Happy Independance Day";
        callback();
    }, 1000);
}

firstCountdown(() => {
    secondCountdown(() => {
        thirdCountdown(() => {
            fourthCountdown(() => {
                fifthCountdown(() => {
                    sixthCountdown(() => {
                        seventhCountdown(() => {
                            eighthCountdown(() => {
                                ninthCountdown(() => {
                                    tenthCountdown(() => {
                                        Finalcountdown();
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
