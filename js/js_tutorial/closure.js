// Bước 1: Tạo hàm closure
function Student()
{
    var name = '';
    var age = '';
 
    return {
        set : function(in_name, in_age){
            name = in_name;
            age = in_age;
        },
        getName : function(){
            return name;
        },
        getAge : function(){
            return age;
        }
    };
}
 
// Bước 2: khởi tạo hàm closure
var studentObj = Student();
 
// Bước 3: Chạy hàm closure
studentObj.set('Nguyễn Văn Cường', '27');
alert(studentObj.getName()); // Nguyễn Văn Cường
alert(studentObj.getAge());  // 27