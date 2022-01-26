// ĐOẠN 1
var message = 'Website freetuts.net thật tuyệt';
 
// ĐOẠN 2
$.ajax({
    url : "some-url",
    data : {}
    success : function(result){
        message = 'Giá trị đã được thay đổi';
    }
});
 
// ĐOẠN 3
setTimeout(function(){
    alert(message); 
}, 10000);
 
//// Giá trị đã được thay đổi