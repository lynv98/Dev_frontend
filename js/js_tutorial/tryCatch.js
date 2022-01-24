try {
    // Quăng lỗi ra
    throw("Noi dung loi");  
} catch (e){
    // Đón nhận lỗi và in ra
    // Vị trí này chỉ chạy khi ở try có quăng lỗi hoặc ở try 
    // sử dụng sai cú pháp ...
    console.log(e.message);
} finally{
    // Cuối cùng chạy cái này
    // Luôn luôn chạy sau cùng
    console.log('End of try catch');
}

// sử dụng thow new đề xuất lỗi
var domain = 'techtuts.net'
 
try {
    if (domain !== 'freetuts.net'){
        throw new Error('Domain nay khong phai la trang chu');
    }
} catch (e){
    console.log(e.message);
} finally{
    console.log('End');
}

// tạo một object userError
function UserError(){
     
    this.throwLogin = function(){
        throw new Error('Invalid username and password');
    };
     
    this.throwSession = function(){
        throw new Error('Your request is timeout');
    };
     
    return this;
}

// cách sử dụng
var username = 'thehalfheart';
var password = 'admin@';
try {
    if (username !== 'admin' || password != 'admin@'){
        new UserError().throwLogin();
    }
}catch (e){
    console.log(e.message);
}