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
