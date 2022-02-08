const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Bieen!');
        } else {
            reject('Bahhh');
        }
    })
};

// somethingWillHappen()
//     .then(response => console.log(response))
//     .catch(err => console.log(err))

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Bahhhhh!');
            reject(error);
        }
    })
}

// somethingWillHappen2()
//     .then(response => console.log(response))
//     .catch(err => console.log(err))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(error => {
        console.log(err)
    })