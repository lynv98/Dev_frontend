// sử dụng hàm thông thường
function showDomain()
{
    alert('Học Javascript tại Freetuts.net');
}
// Gọi hàm
showDomain();

// sử dụng anonymous
var showDomain1 = function()
{
    alert('Học Javascript tại Freetuts.net');
};
 
// Gọi hàm
showDomain1();

// hàm không trên(function(){
    (function(){
        alert('freetuts.net');
    }).call(this);