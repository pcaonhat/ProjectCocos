# 5 loại design pattern
## Command Pattern
### Khái niệm
Command pattern là một pattern cho phép bạn chuyển đổi một request thành một object độc lập chứa tất cả thông tin về request. Việc chuyển đổi này cho phép bạn tham số hoá các methods với các yêu cầu khác nhau như log, queue (undo/redo), transtraction. Giống như một class trung gian được tạo ra để lưu trữ các câu lệnh và trạng thái của object tại một thời điểm nào đó.
### Ưu điểm
- Đảm bảo nguyên tắc Single Responsibility
- Đảm bảo nguyên tắc Open/Closed
- Có thể thực hiện hoàn tác
- Giảm kết nối phụ thuộc giữa Invoker và Receiver
- Cho phép đóng gói yêu cầu thành đối tượng, dễ dàng chuyển dữ liệu giữa các thành phần hệ thống

### Nhược điểm
- Khiến code trở nên phức tạp hơn, sinh ra các lớp mới gây phức tạp cho mã nguồn.

### Trường hợp sử dụng
- Khi cần tham số hóa các đối tượng theo một hành động thực hiện (biến action thành parameter)
- Khi cần tạo và thực thi các yêu cầu vào các thời điểm khác nhau (delay action)
- Khi cần hỗ trợ tính năng undo, log, callback hoặc transaction
- Phối hợp nhiều Command với nhau theo thứ tự
- Khi cần tái sử dụng một class cho những trường hợp giống nhau nhưng khác hành vi

## Flyweight Pattern
