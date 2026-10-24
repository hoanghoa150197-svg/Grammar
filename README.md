# Grammar Studio PWA

## Triển khai GitHub Pages
1. Giải nén ZIP và tải **các tệp bên trong** lên thư mục gốc repository (không tải ZIP nguyên vẹn).
2. Trong GitHub → Settings → Pages → Deploy from a branch → `main` / `(root)` → Save.
3. Mở URL HTTPS GitHub Pages, tải lại một lần để Service Worker lưu tài nguyên.

## Cài đặt
- Android/Chrome: menu → Install app / Add to Home screen.
- iPhone/Safari: Share → Add to Home Screen. iPhone cần mở bằng Safari.
- Máy tính/Chrome/Edge: biểu tượng Install ở thanh địa chỉ (tùy trình duyệt).

## Dữ liệu
Thư viện và tiến độ vẫn lưu trong localStorage với khóa `grammar_studio_topics_v1`, không đổi cấu trúc. **Không xóa dữ liệu website**; sao lưu thường xuyên bằng nút `Sao lưu JSON`, đặc biệt trước khi chuyển domain hoặc trình duyệt. Dữ liệu không tự đồng bộ giữa các thiết bị.

## Ngoại tuyến
Giao diện, đọc và chỉnh sửa bài học đã lưu, đánh dấu tiến độ, sao lưu/khôi phục JSON hoạt động offline. **Nhập PDF cần thư viện PDF.js tải từ CDN**; chỉ hoạt động khi có mạng hoặc khi tài nguyên CDN đã được trình duyệt lưu sẵn (không được Service Worker đảm bảo). PDF scan vẫn cần OCR và chưa hỗ trợ. Không có AI/API.

## Cập nhật
Khi thay đổi ứng dụng, cập nhật chuỗi `VERSION` trong `sw.js` (ví dụ `grammar-studio-v1.0.1`), tải các file mới lên GitHub Pages. Khi có bản mới, ứng dụng sẽ hỏi người dùng tải lại. Cache cũ bị dọn sau khi bản mới kích hoạt; dữ liệu localStorage không bị xóa.

## Kiểm tra
Kiểm tra sau triển khai: mở thư viện, tạo/sửa/xóa chủ đề, Markdown, tiến độ, JSON backup/restore, PDF trực tuyến, offline sau lần truy cập đầu, cài đặt, và cập nhật phiên bản. Chưa có kiểm thử trình duyệt thực tế tự động.
