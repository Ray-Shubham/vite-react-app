// const chopVegetables = () => {
//     console.log("Start Chopping Vegetables");
//     for ( i = 0; i <= 10; i++) {}
//     console.log("Vegetables Chopped");
// }

// const cookVegetables = () => {
//     console.log("Start Cooking Vegetables");
//     for ( i = 0; i <= 10; i++) {}
//     console.log("Vegetables Cooked");
// }

// const serveVegetables = () => {
//     console.log("Start Serving Vegetables");
//     for ( i = 0; i <= 10; i++) {}
//     console.log("Vegetables Served");
// }

// chopVegetables();
// cookVegetables();
// serveVegetables();



// Callback Example

// const chopVegetables = (callback) => {
//     console.log("Start Chopping Vegetables");
//     setTimeout(() => {
//         console.log("Chopping of Vegetables Done");
//         callback();
//     }, 2000);
//     console.log("Thinking of next steps");
// };

// const cookVegetables = (callback) => {
//     console.log("Start Cooking Vegetables");
//     setTimeout(() => {
//         console.log("Cooking of Vegetables Done");
//         callback();
//     }, 2000);
//     console.log("Thinking of next steps");
// };

// const serveVegetables = (callback) => {
//     console.log("Start Serving Vegetables");
//     setTimeout(() => {
//         console.log("Serving of Vegetables Done");
//         callback();
//     }, 2000);
//     console.log("Enjoy the Dish");
// };


// console.log("Cooking of Dish Started");
// chopVegetables(() => {
//     cookVegetables(() => {
//         serveVegetables(() => {
//             console.log("Cooking of Dish Done");
//         });
//     });
// });



// Promise Example

// const chopVegetables = (callback) => {
//     console.log("Started Chopping Vegetables");
//     const myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Chopping of Vegetables Done");
//             resolve();
//             reject("I am tired of chopping, lets make dish tomorrow");
//         }, 2000);
//         console.log("Thinking of next steps");
//     });
//     return myPromise;
// };

// const cookVegetables = (callback) => {
//     console.log("Started Cooking Vegetables");
//     const myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Cooking of Vegetables Done");
//             resolve();
//         }, 2000);
//         console.log("Thinking of next steps");
//     });
//     return myPromise;
// };

// const serveVegetables = (callback) => {
//     console.log("Started Serving Vegetables");
//     const myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Serving of Vegetables Done");
//             resolve();
//         }, 2000);
//         console.log("Thinking of next steps");
//     });
//     return myPromise;
// };

// chopVegetables()
// .then(() => {
//     return cookVegetables();
// }).then(() => {
//     return serveVegetables();
// }).then(() => {
//     console.log("Dish Served, Enjoy it!!!");
// })
// .catch((message) => console.log(message))


// Async await Example

const chopVegetables = (callback) => {
    console.log("Started Chopping Vegetables");
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Chopping of Vegetables Done");
            resolve();
            reject("I am tired of chopping, lets make dish tomorrow");
        }, 2000);
        console.log("Thinking of next steps");
    });
    return myPromise;
};

const cookVegetables = (callback) => {
    console.log("Started Cooking Vegetables");
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Cooking of Vegetables Done");
            resolve();
        }, 2000);
        console.log("Thinking of next steps");
    });
    return myPromise;
};

const serveVegetables = (callback) => {
    console.log("Started Serving Vegetables");
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Serving of Vegetables Done");
            resolve();
        }, 2000);
        console.log("Thinking of next steps");
    });
    return myPromise;
};


const dishMaker = async() => {
    console.log("Cooking of dish started");
    await chopVegetables();
    await cookVegetables();
    await serveVegetables();
    console.log("Enjoy the Dish")
}

dishMaker();




// Modern way of fetching data from server using async await

const fetchData = async() => {
    const response = await fetch("url");
    const finalResponse = await response.json();
};

fetchData();