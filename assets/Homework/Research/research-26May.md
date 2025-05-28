## Trimmed và Raw mode của ảnh là gì và được sử dụng khi nào
`Trimmed mode` sẽ tự động cắt bỏ vùng trong suốt (transparent) xung quanh hình ảnh gốc khi import.

Ưu điểm:
- Giảm kích thước texture và tiết kiệm bộ nhớ GPU.
- Tối ưu khi dùng ảnh trong Sprite Atlas hoặc animation.

Khi nào dùng:
- Khi bạn không cần vùng trong suốt xung quanh ảnh gốc.
- Khi bạn làm UI hoặc animation nhiều frame sprite, và không muốn dư pixel

`Raw mode` giữ nguyên kích thước ảnh gốc, không cắt bỏ phần trong suốt.

Ưu điểm:
- Đảm bảo ảnh hiển thị đúng theo kích thước ban đầu.
- Không cần tính toán lại pivot, position, offset.

Khi nào dùng:
- Khi muốn dùng vùng trống để căn chỉnh layout, UI, hoặc pixel-perfect.
- Khi dùng ảnh là mask, button, hoặc cần căn giữa chính xác.
- Khi 1 spriteframe cần phải đổi qua đổi lại giữa nhiều sprite khác nhau có cùng kích thước gốc nhưng lại không giống nhau về phần trong suốt. Điều này giúp giữ đúng layout thiết kế

## Tại sao EventController phải là singleton
- Do nếu không phải là singleton, mỗi khi gán 1 component controller khác vào scene sẽ khởi tạo mới và chỉ đăng kí sự kiện cho node chứa component đó. Trong khi node chứa component cũ sẽ bị mất liên kết do không còn con trỏ nào trỏ đến nó. (Thứ tự gọi sẽ phụ thuộc vào hierachy của scene)
- Khi là singleton, tạo các node mới sẽ đảm bảo tiếp tục đăng kí thêm event cho đúng instance đó và thể hiện đúng số lần đăng kí event