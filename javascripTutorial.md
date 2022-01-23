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