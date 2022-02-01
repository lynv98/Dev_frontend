<!-- settimeout(), setinterval() -->
-settimeout(function, time): thực thi sau khoảng thời gian, chạy 1 lần
-cleartimeout(): func xóa đi nhiệm vụ thực hiên ở settimeout
setinterval(func, time): thực thi sau khoảng thời gian, chạy nhiều lần
-clearinterval(): tương tự
<!-- loop -->
break: dừng vòng lặp cho dù loop true
<!-- Data types -->
-string: là một đoạn text chứa 1 hoặc nhiều ký tự
- +: nối chuỗi
- \: xuống hàng
- "": nội dung chuỗi
<!-- array -->
- array.valueOf(): tương tự jopi() nối phần tử cách nhau ,
- array.push(...): thêm phần tử vào cuối mảng
- array.pop(): xóa đi phần tử cuối mảng
- array.shift(): xóa đi phần tử đầu mảng
- array.unshift(): thêm 1 ptu vào đầu mảng
- array.splice(vt, number_remove, value1..., value2...):thêm 1 phần tử vào vị trí 
- array.sort(): sắp xếp thứ tự trong mảng
- array..reverse(): đảo ngược phần tử trong mảng
- array.concat(): nối 2 mảng trả về mảng tổng số phần tử 2 mảng đó
- array.slice(start, end): lấy một phần tử con trong mảng

<!-- number -->
-number to string: number.toString()
-số infinity: biến có giá trị là infinity vượt mức lưu trữ cho phép
- NaN: vị phạm quy tắc tính

<!-- Date -->
- khởi tạo : dateTime = new Date();
- getDate(): lấy ngày
......
-setDate(...): thiết lặp ngày

<!-- 3 cách tạo class -->
-3.1: sử dụng func
    mỗi func tồn tại biến cục bộ this, đại diện cho chính func. dùng this để khai báo các phương thức, thuộc tính. phải return this để sử dụng từ khóa new khởi tạo đối tượng.
-3.2 sử dụng object
    dễ dàng khởi tạo thuộc tính, phương thức. Có thểm thêm ngay tỏng lúc khai báo hoặc lúc khởi tạo
-3.3 sử dụng singleon Object
    sử dụng từ khóa new để tạo mới 1 function và không cần return this
 note: lời kết 
    c1 hay nhất vì thể hiện rõ đối tượng khai báo 1 lần tạo nhiều đối tượng khác nhau bằng từ kháo new, c2,3 mang tính toàn cục bản chất nó chỉ là 1 đối tượng khi thay đổi thuộc tính nó sẽ lưu lại cho các lần sử dụng tiếp theo

 <!--try catch  -->
 - là một khối lệnh bắt lỗi, muốn chương trình không bị dừng khi bị một lỗi nào đó
 - luồng try catch
 -- bước 1: thực thi trong try
 -- buwoc2: nếu try xuất hiện lỗi thì nhảy sang catch
 -- bước 3: nhảy xuống finally dù lỗi hay không

---thow new Error() trong try catch
tham số e trong catch là một errol object mặc định. 
 note: 
 -EvalError: lỗi trong hàm eval
 -RangeError: nằm ngoài pvi giới hạn của một kiểu dl nào đó
 -SystaxError: lỗi cú pháp
 urlError: sử dụng ký tự không hợp lệ trong url

 <!-- closuse -->
- là một làm được tạo ra từ bên trong một hàm khác, nó có thể sử dụng biến toàn cục, biến cục bộ của hàm cha  và biến cục bộ của chính nó. 
- scope: là phạm vi biến, nơi mà biến tồn tại 
- các biến bên trong hàm sẽ kết thúc khi hàm đó chạy xong
- Closure có thể sd biến cục bộ, biến hàm cha và biến chính nó.
-note: nó return lại 1 func
- trong strict thì con trỏ this sẽ là undified , còn ko là window
-closure có thể thay đổi giá trị biến toàn cục, cục bộ
-độ ưu tiên các biến trong closure
-- trong closure > trong cha > toàn cục

<!-- call balck -->
- hàm call balck là một hàm được gọi bởi một hàm khác 
- note: truyền callback func vào các hàm xử lý sự kiện, hàm xử lý bất đồng bộ nào đó.
- ví dụ: settimeout(function){ callback func}, milisecond);
 khác nhau callback và closure
 -> closure được truyền vào thông qua tham số
-- Nguyên tắc
-> phải chắc chắn tham số truyền vào là 1 func
-> cận thận với this khi callback nằm trong object

 // lỗi this trong object khi sử dụng call back
 // cách fix lỗi trên
 // Trước đây
callback(var1, var2, ...);
 
// Bây giờ
callback.apply(callbackObject, [var1, var2, ... ]);

<!-- bind() -->
khi sử dụng closure lưu ý đến this và dùng bind để khắc phục

<!-- call() & apply() -->
-1 call: dùng để thực thi 1 hàm nào đó với các tham số truyền vào, hàm này được tích hợp sẵn trong các đối tượng là func
note: 
-- dùng hàm call để gán gia trị cho hàm khởi tạo( nếu muốn tạo nhiều đối tượng có hàm khởi tạo giống nhau thì hãy sử dụng hàm call để thực hiện, chương trình gọn hơn)
-- dùng hàm call để gọi hàm anonymous
-- dùng call để đổi giá trị của this
=> tham số đầu vào của hàm call() là đối tượng this, tiếp theo là tham số của hàm cần gọi

- 2 apply(): 
=> tham số đầu vào cảu hàm apply() là đối tượng this, tiếp theo là một mảng thao số đầu vào

<!-- anonymous func -->
- là hàm ẩn danh, được sinh ra đúng thời điểm chạy của chương trình
- được khai báo bằng cách sử dụng toán tử thay vì cú pháp  định nghĩa thông thường.
- đối với anonumous lưu ý hàm khi gọi trước hoặc sau, gọi trước không được
- anonumous là hàm không tên, phải có () mới sử dụng được

<!-- this -->
- this là từ khóa để trỏ đến đối tượng hiện tại, qua đó có thể truy cập đến phương thức, thuộc tính đối tượng đó.
điều kiện phải đặt this trong phạm vi đối tượng, ngoài cùng window
- sử dụng this
-- TH1:nếu không bật chế độ strict mode: this là một biến toàn cục( cao nhất window), dể dàng bổ sung thuộc tính cho window
-- TH2: nếu bật strict mode: this trong hàm là một biến chưa được định nghĩa => undefined 
     thêm thuộc tính -> lỗi vì this ở đây không phải là object
- note: nếu như hàm khởi tạo this chính là instance
    anonymous func không tồn tại this

<!-- contructor -->
- là một kỹ thuật giúp ta có thểm thêm phương thức và thuộc tính cho một func, lúc này func hoạt động như một đối tượng
-contructor là một function
-- có thể xem func là một object
-- có thể thêm thuộc tính và phương thức
-- có thể dùng từ khóa new để khởi tạo cho nhiều đối tượng
- contructor với func
-> khác với object không thể thêm thuộc tính từ bên ngoài 
-contructor là một class

<!-- class -->
- class tạo ra lớp mẫu cho trương trình để thể hiện các đối tượng. qua đó thể thêm hành động, thuộc tính của đối tượng vào trong lớp

note:
trong object cần dấu phẩy để ngăn cách thuộc tính
trong class không cần
 - getters và setters  trong class
 -- getters là những hàm có nhiệm vụ lấy giá trị của thuộc tính 
 -- setters có nhiệm vụ gán giá trị cho các thuộc tính 
<!-- extend -->
- dùng để khai báo một lớp được kế thừa từ một lớp khác
- extends dùng để kế thừa từ 1 class
- overriding in js
-- phương thức sẽ bị ghi đè
-- overriding constructor in js
 tạo constructor ở hàm con bắt buộc phải sử dụng từ khóa supper để gọi tới hàm constructor của lớp cha

<!-- static -->
- là từ khóa giúp khai báo các phương thức tĩnh và thuộc tính tĩnh trong các class
- khi kb static không cần dùng từ khó new để khởi tạo đối tượng
-- static method 
note: this trong method chính là class
không thể dùng this gọi phương thức không phải là static
-- static property
thuộc tính tĩnh này không thể dùng this gọi giống phương thức được
 => note: thuộc tính và phương thức in js là duy nhất 

--static extends
note: lớp con thay đổi static chỉ thay đổi ở lớp con lớp cha không thay đổi static
        lớp cha thay đổi static lớp con thay đổi theo

<!-- private, protected and public -->
-private: bảo mật cao nhất, chỉ sử dụng bên trong class, ngoài không được truy cấp
-protected: bên trong class và class kế thừa
-public: ở đâu cũng có thể truy cập

--sử dụng protected 
--- quy ước bắt đầu bằng dâu _
--- tạo một getter nhưng không tạo setter để bên ngoài class có thể sử dụng, nếu có setter thì không tác dụng

--sử dụng private 
--- quy ước bứt đầu bằng #

<!-- import and export in js -->
 -module: là 1 file js có tên ý nghĩa, code phục vụ cho ý nghĩa
 - chia module là chia từng file giúp code nhanh hơn...
 - từ khóa export: dùng để kb dữ liệu được chia sẻ, module khác muốn dùng chỉ việc gọi đến. nếu không đặt module thì dữ liệu cục bộ

 - sử dụng lệnh import để gọ dữ liệu từ module khác 
 -default export module là cách kb dữ liệu  mặc định , trong trường gọi đến không có return default
 - dùng từ khóa as để đổi tên func hoặc variable
 - dùng * để import toàn bộ

 <!-- block scope: pvi khối-->
 - là phạm vi khối, chỉ được sử dụng trong {}
 - sư dụng từ khóa  let để khai báo biến

 <!-- arrow func -->
 - cú pháp ví dụ
 -- có 2 biến
    var hello = (name, mes) => {...code};
    hello();
 --có 1 biến
    var hello = name => {...code};
 -- ko có biến
    var hello = () => {...code};
-note: nếu arrow trong hàm thì phải bao ()
- có thể sử dụng arrow func thay bind()

<!-- destructuring assignment -->
- tách phần tử array hoặc object thành nhiều biến

<!-- defalt parameter -->
- là giá trị mặt định của tham số khi truyền vào func
- ví dụ: function sayHi(name: 'nguyen van a '){
    //code
    return name;
}

<!-- rest parameter -->
- sử dụng dấu ... để khai báo các tham số còn lại
- ví dụ: var domain = (para1, para2, ...other) => {
    ccl(para1);
    ccl(para2);
    ccl(other);
};

domain(a, b, c, d, e);

<!-- const -->
- là hằng số, khai báo phải gán giá trị và không thay đổi giá trị cho biến đó nữa.
- là một block scope

<!-- kiểu dữ liệu set-->
- là kiểu dữ liệu với các giá trị truyền vào tùy ý
- khởi tạo: let set = new Set();
- thêm phần tử: set.add(...);
- xóa phần tử: set.delete(...);
- kiểm tra tồn tại: set.has(value);
- tổng số ptu: set.size;
- xóa toàn bộ phần tử: set.clear();

-Mapping: là một hàm tích hợp sẵn array chức năng thiết lập giá trị cho phần tử trong mỗi vòng lặp
-filtering: trả về true nếu phần tử được chọn, flase nếu phần tử không được chọn

- chuyển đổi set và array
ví dụ: let numbers = set([1, 2, 3]);
chuyển set -> arr
let arr = [...numbers];
chuyển arr -> set
let set = new Set(ar_numbers);

<!-- kiểu dữ liệu Map -->
- tương tự set nhưng có cấu trúc dạng key: value;. set thì chỉ có value
ví dụ: let map = new Map([
     ["Name", "Nguyen Van Cuong"],
     ["Email", "thehalfheart@gmail.com"],
     ["Website", "freetuts.net"]
]);

<!-- kiểu dữ liệu weakMap -->
- là một kiểu dữ liệu giống Map tồn tại 2 tham số key, value. 
- weakMap truyền vào là 1 biến, biến này object(class, func, obj)
- còn Map thiết lập key là chuôi, number, obj đều được
ví dụ: 
// Khởi tạo
var weak = new WeakMap();
 
// Danh sách key 
var key1 = {};
var key2 = {};
 
// Thêm phần tử
weak.set(key1, "Giá trị 01");
weak.set(key2, "Giá trị 02");
 
// Lấy giá trị
console.log(weak.get(key1)); // Giá trị 01
console.log(weak.get(key2)); // Giá trị 02
 
// Kiểm tra tồn tại
var other_key = {};
console.log(weak.has(key1)); // true
console.log(weak.has(other_key)); // false
 
// Xóa phần tử
weak.delete(key1);
console.log(weak.get(key1)); // Undefined

<!-- kiểu dữ liệu weakSet -->
- tương tự set nhưng giá trị truyền vào phải là obj

<!-- symbol -->
 
<!-- synchronous và Asyschronous -->
- sync là xử lý đồng bộ. 
-- bước 1 xong -> bước 2. chương trình 1 xong -> chương trình 2.
--sinh ra trạng thái chờ.
--- ưu điểm: chạy đúng quy tắc, và không mắc lỗi về tiến trình, có lỗi biết ngay ở đâu
--- nhược điểm: sinh ra trạng thái chờ không cần thiết ở 1 số th => bộ nhớ tràn

-Async: chương trình có thể nhảy qua bước nào đó
-- chương trình không chặt chẽ, không có quy trình -> quản lý khó khăn
-- ưu điểm: xử lý nhiều cv cùng lúc
-- nhược điểm: chương trình ko chặt chẽ và quản lý khó khăn

- Ajax Asynchronous
-- là kỹ thuật xử lý bất đồng bộ

<!-- Promise -->
- sinh ra để xử lý kết quả của một hành động cụ thể, cụ thể thành công hoặc thất bại 
- khi promise tạo ra sẽ có 3 trạng thái 
-- fulfilled: -> thành công
-- Rejected: thất bại
-- pending: -> đang chờ xử lý 

-- ví dụ
    // tạo ra 1 promise 
    var promise = new Promise(callback);
    callback là 1 func có 2 tham sô truyền vào 
    -- resolve: hàm callback cho hành động thành công
    -- reject: thất bại

-- thenable in promise
là phương thức ghi nhận kết quả ở trạng thái

-note: nếu có cả resolve và reject ở promise chỉ có tác dụng với khai báo đầu tiên

- catch in Promise
nhảy vào catch để xử lý
- có cả callback and catch => vào callback vào catch
==> kết luận: promise là gói để quán lý một hành động Async

3 trạng thái của promise
-pendding: là trạng thái khi khởi tạo 1 promise nhưng chưa thiết lập kết quả cho nó( chưa sử dụng: resolve, reject)
-Fulfilled (resolve) promise thành công khi sử dụng resolve
- Rejected (reject) promise thất bại khi sử dụng reject. khi sử dụng reject bắt buộc phải khai báo hành động cho nó (then hoặc catch)
- then có thể sử dụng nhiều lần 
- nếu then thứ nhất return về reject promise  -> then tiếp theo sẽ không chạy => catch sẽ được chạy
 - note: gặp reject vào thẳng catch không qua then nữa
 
 <!-- tính năng mới trên ES7 -->
 - toán tử lũy thừu: ** hoặc Math.pow();
 - array.include(value): kiểm tra val có nằm trong mảng
 - ... để tách các phần tử còn lại gọi là spread

<!-- strict mode -->
- khi bật thì không thể cancel
- strict mode nằm ở đầu file, hàm   

<!-- viết comment -->
- what: comment là phần giải thích thêm cho code hiện tại
- when: khi có logic code phức tạp 
- where: trước đoạn code cần giải thích
- why: để hiểu được tại sao code như thế
- who: ai là người viết
=> viết bằng english

<!-- đặt tên biến -->
true, false --> có thêm tiền tố với prefix: has, is ,show
đặt tên biến có giá trị
không đặt tên 1b đằng lưu 1 nẻo
dùng danh từ

camelcase   student, students   var name, func name
Uppercase   PI, API_URL         contants
Pascalcase  Menu, Slidebar, ProductList     class or component
keybarcase  menu-item   css class name

<!-- đặt tên cho hàm -->
 dùng english
 dùng động từ 
 thường dùng với prefix: create, apdate, add, check, convert, new, map, get...
-lưu ý
 - mỗi hàm làm một nhiệm vụ
 - ngắn dưới 30 dòng co
 - kiểm tra tính hợp lệ của tham số đầu vào
 - return kiểu dữ liệu đồng nhất với nhau
 - có comment cho logic phức tạo
 - tối đa 3 tham số truyền vào

 <!-- truthy và falsy -->
 truthy là những giá trị chuyển về boolearn -> true
 falsy là những giá trị chuyển về boolearn -> false

 <!-- switch case -->
 sử dụng switch case khi điều kiện tà tập giá trị xác đinh
 khoảng bao nhiêu đến bao nhiêu thì suer dụng if else

-- kỹ thuật dùng flag để kiểm tra phù hợp thỏa mãn điều kiện nào đó hay không trả về true hoặc false

<!--  -->
