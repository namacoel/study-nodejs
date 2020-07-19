const wait1seconds = new Promise((resolve, reject) => {
    console.log("시작한다");
    const result = false;

    if (result) {
        setTimeout(() => {
            resolve(console.log("1초뒤에 찍는다"));
        }, 1000);
    } else {
        reject("에러");
    }
});

wait1seconds
    .then(() => {
        console.log("찍고난후");
    })
    .catch((err) => {
        console.log(err);
    });
