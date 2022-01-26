// // tạo ra 1 promise
// var promise = new Promise(function(resolve, reject){
//     resolve('succsess!');
//     //or
//     reject('error!');
// })

// promise.then(
//     function(success){
//         console.log(success);
//     },
//     function(error){
//         console.log(error);
//     }
// )

// // suer dụng catch để bắt lỗi
// var promise1 = new Promise(function(resolve, reject){
//     reject('error!');
// })

// promise1.then(function(mes){
//     console.log(mes);
// })
// .catch(function(message){
//     console.log(message);
// })

// // callback func
// var promise2 = new Promise(function(resolve, reject){
//     reject('error!');
// })

// promise2.then(function(mes){
//     console.log(mes);
// }, function(message){{
//     console.log(message);
// }})

// sử dụng cả callback and catch
var promise3 = new Promise(function(resolve, reject){
    // reject('error!');
    resolve('succsess');
})

promise3
    .then(function(){
        console.log('succ full then 1');
    })
    .then(function(){
       return new Promise(function(resolve, reject){
           reject();
       })
    })
    .catch(function(){
        console.log('Error!');
    });