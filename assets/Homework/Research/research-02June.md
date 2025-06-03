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
- Khi cần tái sử dụng một class cho những trường hợp giống nhau nhưng khác hành vi. Nhằm tách phần xử lý ra phần riêng để dễ nang cấp và chỉnh sửa.

## Flyweight Pattern
Mẫu thiết kế Flyweight là một mẫu thiết kế cấu trúc cho phép bạn lắp nhiều đối tượng hơn vào dung lượng RAM có sẵn bằng cách chia sẻ, phân phối các phần trạng thái chung - riêng giữa nhiều đối tượng thay vì giữ tất cả dữ liệu trong mỗi đối tượng.

### Ưu điểm
- Giảm số lương đối tượng được tạo ra bằng cách chia sẻ đối tượng. Vì vậy tiết kiệm bộ nhớ và các thiết bị lưu trữ cần thiết
- Cải thiện khả năng cache dữ liệu vì thời gian đáp ứng nhanh.
- Tăng Performance cho hệ thống

### Nhược điểm
- Đánh đổi về mặt sử dụng CPU khi các flyweight object bị truy cập nhiều lần.
- Code trở nên phức tạp hơn nhiều, xây dựng không tốt sẽ bị thiếu tường minh

### Trường hợp sử dụng
- Khi có một số lớn các đối tượng được ứng dụng tạo ra một cách lặp đi lặp lại.
- Khi việc tạo ra đối tượng đòi hỏi nhiều bộ nhớ và thời gian
- Khi muốn tái sử dụng đối tượng đã tồn tại thay vì phải tối thời gian để tạo mới
- Khi nhóm đối tượng chứa nhiều đối tượng tương tự và hai đối tượng trong nhóm không khác nhau nhiều như quái vật, vũ khí, vật phẩm.

## Observer pattern
Observer pattern là một mẫu thiết kế phần mềm mà một đối tượng, gọi là subject, duy trì một danh sách các thành phần phụ thuộc nó, gọi là observer, và thông báo tới chúng một cách tự động về bất cứ thay đổi nào, thường thì bằng cách gọi 1 hàm của chúng.

### Ưu điểm
 - Open/Closed Code base. Có thể thêm bớt các object đăng ký mà không cần thay đổi object gốc.
- Có thể đăng ký ngay cả khi runtime mà không phải hard-code

### Nhược điểm
- Khó kiểm soát thứ tự gọi hàm của các object đăng ký khi phát sự kiện

### Trường hợp sử dụng
- Sử dụng khi việc thay đổi trạng thái của một đối tượng có thể cần phải thay đổi đối tượng khác, tuy nhiên danh sách cách đối tượng chưa được xác định rõ từ trước.
- Dùng khi các đối tượng cần phải observe đến đối tượng khác nhưng chỉ trong vài trường hợp nhất định hoặc khoảng thời gian giới hạn

## State pattern
State Pattern là một mẫu thiết kế hành vi cho phép một object thay đổi hành vi của nó khi trạng thái bên trong của nó thay đổi.

### Ưu điểm
- Đảm bảo nguyên tắc Single Responsibility (SRP): Tách biệt mỗi State tương ứng với 1 class riêng biệt.
- Đảm bảo nguyên tắc Open/Closed Principle (OCP): chúng ta có thể thêm một State mới mà không ảnh hưởng đến State khác hay Context hiện có.
- Giữ hành vi cụ thể tương ứng với mỗi State (trạng thái).
- Giúp chuyển State một cách rõ ràng.
- Loại bỏ các câu lệnh xét trường hợp (If, Switch case) giúp đơn giản code của context

### Nhược điểm
Việc sử dụng state pattern quá mức cần thiết khi state machine chỉ có một vài trạng thái hoặc hiếm khi thay đổi có thể dẫn đến việc tăng độ phức tạp của code

### Trường hợp sử dụng
- Sử dụng State pattern khi bạn có một object hoạt động khác nhau tùy thuộc vào trạng thái hiện tại của nó, số lượng trạng thái là rất lớn và code của trạng thái cụ thể thường xuyên thay đổi.
- Sử dụng State pattern khi bạn có một lớp với nhiều các điều kiện lớn làm thay đổi cách class hoạt động theo các giá trị hiện tại của các trường của class.
- Sử dụng State Pattern khi bạn có nhiều code trùng lặp qua các trạng thái và chuyển đổi tương tự của State Pattern dựa trên điều kiện.
- Thay đổi hành vi object dựa trên trạng thái object
- Thay thế việc sử dụng rất nhiều điều kiện thay đổi cách lớp hành động dựa trên các giá trị của lớp

## Singleton pattern
Mẫu thiết kế Singleton đảm bảo rằng một lớp chỉ có một thể hiện (instance) duy nhất, đồng thời cung cấp phạm vi truy cập tianf cục đến instance này.

### Ưu điểm
- Dảm bảo rằng một lớp chỉ có duy nhất một thể hiện (instance), để đồng bộ dữ liệu.
- Có điểm truy cập toàn cục (global access point) đến thể hiện đó.
- Đối tượng singleton chỉ được khởi tạo khi nó được yêu cầu lần đầu tiên.

### Nhược điểm
- Vi phạm Single Responsibility Principle – Mẫu thiết kế này giải quyết hai vấn đề cùng lúc: quản lý vòng đời thể hiện và cung cấp điểm truy cập toàn cục.
- Mẫu Singleton có thể che giấu thiết kế tệ.
- Trong môi trường đa luồng (multithreaded), mẫu này cần được xử lý đặc biệt để tránh việc nhiều luồng tạo ra nhiều thể hiện singleton cùng lúc.

### Trường hợp sử dụng
- Sử dụng khi có 1 class nào chỉ có 1 instance xuyên suốt từ đầu đến khi kết thúc vòng đời của chương trình dành cho toàn bộ client.
- Sử dụng khi cần quản lý nghiêm ngặc về việc sử dụng các biến hoặc dữ liệu toàn cục