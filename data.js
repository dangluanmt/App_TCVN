const tcvnDatabase = [
  // =========================================================================
  // 1. TCVN 4529:2012 (NHÀ THỂ THAO)
  // =========================================================================
  {
    code: "TCVN 4529:2012",
    title: "Công trình thể thao – Nhà thể thao – Tiêu chuẩn thiết kế",
    category: "Thể dục thể thao",
    keywords: "nha the thao nha tap luyen nha thi dau da nang bong ro bong chuyen cau long bong ban phong thay do doping trong tai khan dai tinh khong H chieu sang am hoc t60 tcvn 4529 4529 2012",
    summary: "Mật độ XD ≤ 30%, cây xanh ≥ 30%, kích thước sân đa năng/bóng rổ/chuyền/cầu lông/bóng bàn, tĩnh không H (7,0 - 12,5m), phòng thay đồ/doping/trọng tài, khán đài, độ rọi và âm vang T60 (1,2-1,8s).",
    pdfUrl: "pdf/TCVN_4529_2012.pdf",
    details: `
      <h4>1. Bảng chỉ tiêu diện tích và thông số kỹ thuật cốt lõi</h4>
      <table class="specs-table">
        <tr><th>Hạng mục</th><th>Chỉ tiêu / Quy định kỹ thuật</th><th>Thông số kỹ thuật cụ thể</th></tr>
        <tr><td><strong>Phân cấp công trình</strong></td><td>Phân cấp theo quy mô, tính chất thi đấu và độ bền vững</td><td><strong>4 cấp</strong> (Cấp I, II, III, IV)</td></tr>
        <tr><td><strong>Quy hoạch mặt bằng</strong></td><td>Mật độ xây dựng và diện tích cây xanh, mặt nước trên khu đất</td><td>Mật độ xây dựng: <strong>≤ 30%</strong>; Cây xanh, mặt nước: <strong>≥ 30%</strong></td></tr>
        <tr><td><strong>Quảng trường tập kết</strong></td><td>Diện tích quảng trường phân tán / đón khán giả trước lối vào chính</td><td><strong>Tối thiểu 0,5 m² / khán giả</strong></td></tr>
        <tr><td><strong>Bãi đỗ xe</strong></td><td>Tiêu chuẩn diện tích tính toán cho từng loại phương tiện</td><td>Ô tô: <strong>25 m² / chỗ</strong>; Xe máy: <strong>3,0 m² / chỗ</strong>; Xe đạp: <strong>0,9 m² / chỗ</strong></td></tr>
        <tr><td><strong>Thoát người sự cố</strong></td><td>Chiều rộng lối thoát nạn tính theo số lượng người</td><td><strong>1,0 m cho 500 người</strong>; Chiều rộng thông thủy cửa mở ra ngoài <strong>≥ 1,2 m</strong></td></tr>
        <tr><td><strong>Kho dụng cụ thể thao</strong></td><td>Diện tích kho chứa dụng cụ mở trực tiếp ra sàn thi đấu</td><td><strong>Tối thiểu 10% – 15%</strong> diện tích mặt sàn tập luyện/thi đấu</td></tr>
      </table>

      <h4>2. Chỉ tiêu kích thước mặt bằng và chiều cao thông thủy tĩnh (H)</h4>
      <p>Chiều cao thông thủy tĩnh (<em>H</em>) được đo từ mặt sàn đến điểm nhô ra thấp nhất của kết cấu mái hoặc các hệ thống thiết bị kỹ thuật treo:</p>
      <ul>
        <li><strong>Sân đa năng / Nhà tập tổng hợp:</strong>
          <ul>
            <li>Kích thước tập luyện phong trào: <strong>30 m × 18 m</strong> (<em>H</em> ≥ 7,0 m) hoặc <strong>36 m × 18 m</strong>.</li>
            <li>Cấp quốc gia / quốc tế: <strong>48 m × 24 m</strong> (<em>H</em> ≥ 12,5 m).</li>
          </ul>
        </li>
        <li><strong>Sân bóng rổ trong nhà:</strong>
          <ul>
            <li>Kích thước mặt sân thi đấu: <strong>28 m × 15 m</strong>; Kích thước xây dựng gồm biên an toàn: <strong>32 m × 19 m</strong>.</li>
            <li>Chiều cao thông thủy: Tập luyện <em>H</em> ≥ <strong>7,0 m</strong>; Thi đấu cấp cao <em>H</em> ≥ <strong>9,0 m</strong> (quốc tế ≥ <strong>12,5 m</strong>).</li>
          </ul>
        </li>
        <li><strong>Sân bóng chuyền trong nhà:</strong>
          <ul>
            <li>Kích thước mặt sân: <strong>18 m × 9 m</strong>; Kích thước xây dựng (gồm vùng tự do): <strong>24 m × 15 m</strong> đến <strong>34 m × 19 m</strong>.</li>
            <li>Chiều cao thông thủy: Tập luyện <em>H</em> ≥ <strong>7,0 m</strong>; Thi đấu quốc tế <em>H</em> ≥ <strong>12,5 m</strong>.</li>
          </ul>
        </li>
        <li><strong>Sân cầu lông trong nhà:</strong>
          <ul>
            <li>Kích thước sân đôi: <strong>13,4 m × 6,1 m</strong>; Kích thước xây dựng hoàn chỉnh: <strong>15,4 m × 7,1 m</strong>.</li>
            <li>Chiều cao thông thủy: Tối thiểu <em>H</em> ≥ <strong>7,5 m</strong> (thi đấu quốc gia / quốc tế <em>H</em> ≥ <strong>9,0 m – 12,0 m</strong>).</li>
          </ul>
        </li>
        <li><strong>Sân bóng bàn trong nhà:</strong>
          <ul>
            <li>Kích thước bàn chuẩn: <strong>2,74 m × 1,525 m × 0,76 m</strong>.</li>
            <li>Không gian cho 1 bàn thi đấu: Tối thiểu <strong>14 m × 7 m</strong>; Chiều cao tĩnh <em>H</em> ≥ <strong>4,0 m</strong> (thi đấu cấp cao ≥ <strong>5,0 m</strong>).</li>
          </ul>
        </li>
      </ul>

      <h4>3. Chỉ tiêu diện tích khối phụ trợ vận động viên & Hành chính</h4>
      <ul>
        <li><strong>Phòng thay đồ (phục trang):</strong> Tiêu chuẩn <strong>1,2 m² – 1,5 m² / người</strong> (bố trí tủ cá nhân, ghế ngồi và thông trực tiếp vào khu tắm, vệ sinh).</li>
        <li><strong>Khu vệ sinh & Phòng tắm:</strong>
          <ul>
            <li><strong>1 vòi tắm hoa sen</strong> cho 3 – 5 vận động viên.</li>
            <li><strong>1 bệ xí và 1 bệ tiểu</strong> cho 10 – 15 vận động viên.</li>
          </ul>
        </li>
        <li><strong>Phòng y tế & Kiểm tra Doping:</strong> Diện tích tối thiểu <strong>16 m² – 24 m²</strong> (gồm bàn khám, tủ sơ cấp cứu và phòng lấy mẫu riêng).</li>
        <li><strong>Phòng trọng tài, ban tổ chức:</strong> Diện tích từ <strong>16 m² – 24 m²</strong>, có lối đi riêng tiếp cận trực tiếp sàn thi đấu mà không giao cắt luồng khán giả.</li>
      </ul>

      <h4>4. Thông số kỹ thuật khán đài & Tiện nghi môi trường</h4>
      <ul>
        <li><strong>Khán đài trong nhà:</strong>
          <ul>
            <li>Chiều rộng mỗi chỗ ngồi: Tối thiểu <strong>0,45 m / chỗ</strong> (ghế có tay vịn: <strong>≥ 0,50 m</strong>).</li>
            <li>Chiều sâu bậc ngồi: Bậc có ghế tựa lưng: <strong>0,80 m – 0,90 m</strong>; Bậc không có ghế tựa: <strong>0,75 m</strong>.</li>
            <li>Khoảng cách giữa hai lối đi dọc: Không quá <strong>26 ghế</strong> (tiếp cận từ hai đầu) hoặc không quá <strong>12 ghế</strong> (lối vào cụt một đầu).</li>
          </ul>
        </li>
        <li><strong>Độ rọi chiếu sáng nhân tạo (mặt sàn thi đấu):</strong>
          <ul>
            <li>Luyện tập thông thường: <strong>150 – 300 Lux</strong>.</li>
            <li>Thi đấu quốc gia: <strong>500 – 750 Lux</strong>.</li>
            <li>Thi đấu quốc tế có truyền hình trực tiếp: <strong>1000 – 1500+ Lux</strong> (hệ số chói lóa <em>GR</em> ≤ 30).</li>
          </ul>
        </li>
        <li><strong>Vi khí hậu & Âm học:</strong>
          <ul>
            <li>Vận tốc gió vùng không gian thi đấu cầu lông, bóng bàn: Không vượt quá <strong>0,2 m/s</strong>.</li>
            <li>Nhiệt độ phòng tập: Mùa hè không quá <strong>28 °C</strong>, mùa đông không dưới <strong>16 °C</strong>.</li>
            <li>Thời gian âm vang tối ưu (<em>T<sub>60</sub></em>): Khống chế trong khoảng <strong>1,2 s – 1,8 s</strong> để bảo đảm độ rõ của hệ thống truyền thanh và âm thanh thi đấu.</li>
          </ul>
        </li>
      </ul>
    `
  },

  // =========================================================================
  // 2. TCVN 4205:2012 (SÂN THỂ THAO)
  // =========================================================================
  {
    code: "TCVN 4205:2012",
    title: "Công trình thể thao – Sân thể thao – Tiêu chuẩn thiết kế",
    category: "Thể dục thể thao",
    keywords: "san the thao san bong da dien kinh bong ro bong chuyen tennis quan vot khan dai do doc thoat nuoc chieu sang tcvn 4205 4205 2012",
    summary: "Trục sân Bắc - Nam (lệch ≤ 15°-20°), tỷ lệ cây xanh ≥ 30%, sân bóng đá 105x68m, đường chạy 400m, kích thước sân bóng rổ/chuyền/tennis, khán đài và độ dốc mặt sân.",
    pdfUrl: "pdf/TCVN_4205_2012.pdf",
    details: `
      <h4>1. Bảng chỉ tiêu và quy hoạch mặt bằng</h4>
      <table class="specs-table">
        <tr><th>Hạng mục</th><th>Chỉ tiêu / Quy định kỹ thuật</th><th>Thông số kỹ thuật cụ thể</th></tr>
        <tr><td><strong>Phân cấp công trình</strong></td><td>Phân cấp sân theo chất lượng sử dụng và độ bền vững</td><td><strong>4 cấp</strong> (Cấp I, II, III, IV)</td></tr>
        <tr><td><strong>Hướng sân</strong></td><td>Trục dọc chính của sân</td><td><strong>Hướng Bắc – Nam</strong> (độ lệch cho phép không quá 15° đến 20°)</td></tr>
        <tr><td><strong>Mật độ cây xanh</strong></td><td>Tỷ lệ diện tích cây xanh, thảm cỏ chắn gió bụi trên tổng khu đất</td><td><strong>Tối thiểu 30%</strong> diện tích khu đất</td></tr>
        <tr><td><strong>Dải cây xanh cách ly</strong></td><td>Chiều rộng dải cây ngăn gió, bụi / cách ly hai sân gần nhau</td><td>Giáp đường thường: <strong>≥ 5 m</strong>; Giáp đường lớn: <strong>≥ 10 m</strong>; Giữa 2 sân gần nhau: <strong>≥ 3 m</strong></td></tr>
        <tr><td><strong>Quảng trường lối vào</strong></td><td>Diện tích quảng trường trước lối vào chính tập kết khán giả</td><td><strong>Tối thiểu 0,5 m² / người</strong></td></tr>
        <tr><td><strong>Cổng và lối thoát người</strong></td><td>Chiều rộng thoát hiểm; lùi ranh giới lô đất</td><td>Thoát người sự cố: <strong>1 m cho 500 người</strong>; Hàng rào/cổng lùi sâu <strong>≥ 4 m</strong></td></tr>
        <tr><td><strong>Bãi đỗ xe</strong></td><td>Tiêu chuẩn diện tích tính toán cho các loại phương tiện</td><td>Ô tô: <strong>25 m²/xe</strong>; Mô tô/xe máy: <strong>3,0 m²/xe</strong>; Xe đạp: <strong>0,9 m²/xe</strong></td></tr>
        <tr><td><strong>Dự trữ cỏ tự nhiên</strong></td><td>Diện tích ươm trồng cỏ dự phòng mặt sân</td><td>Bằng <strong>15%</strong> diện tích phủ cỏ (nhiều sân lấy <strong>10%</strong>)</td></tr>
      </table>

      <h4>2. Kích thước sân thể thao ngoài trời tiêu chuẩn</h4>
      <ul>
        <li><strong>Sân điền kinh:</strong> Đường chạy vòng tiêu chuẩn <strong>400 m</strong> (6–8 làn, mỗi làn rộng 1,22 m ± 0,01 m); đường chạy thẳng 100–110 m (dài 130–140 m, gồm 6–10 làn). Đường chạy đà nhảy xa/3 bước dài 40–45 m, rộng 1,22 m; hố cát rộng 2,75–3,0 m, dài ≥ 7 m.</li>
        <li><strong>Sân bóng đá 11 người:</strong> Chuẩn quốc tế <strong>105 m × 68 m</strong> (dao động dài 90–120 m, rộng 45–90 m; khu an toàn biên dọc ≥ 2 m, biên ngang ≥ 3 m).</li>
        <li><strong>Sân bóng rổ:</strong> <strong>28 m × 15 m</strong> (kích thước xây dựng gồm biên an toàn: 32 m × 19 m).</li>
        <li><strong>Sân bóng chuyền:</strong> <strong>18 m × 9 m</strong> (vùng tự do quanh sân tối thiểu rộng ≥ 3 m; thi đấu cấp cao từ 5–8 m).</li>
        <li><strong>Sân quần vợt (Tennis):</strong> Đơn 23,77 × 8,23 m; đôi 23,77 × 10,97 m (khu đất hoàn chỉnh có lùi biên là 36 × 18 m hoặc 35 × 19 m).</li>
      </ul>

      <h4>3. Khán đài, độ dốc mặt sân & Chiếu sáng</h4>
      <ul>
        <li>Khán đài dốc không quá <strong>1 : 1,5</strong>; sâu bậc ngồi 0,75–0,80 m; rộng chỗ ngồi ≥ 0,45 m. Bậc thấp nhất cách mép sân ≥ 5 m, cao hơn mặt sân 0,9–1,15 m.</li>
        <li>Độ dốc thoát nước mặt sân cỏ/điền kinh: <strong>0,4% – 0,8%</strong> (dốc mu rùa từ tâm ra biên) kết hợp mương ngầm thẩm thấu.</li>
        <li>Độ rọi chiếu sáng: Luyện tập thông thường 100 – 150 Lux; Thi đấu quốc gia / truyền hình 500 – 1000+ Lux.</li>
      </ul>
    `
  },

  // =========================================================================
  // 3. TCVN 9211:2012 (CHỢ – TIÊU CHUẨN THIẾT KẾ)
  // =========================================================================
  {
    code: "TCVN 9211:2012",
    title: "Chợ – Tiêu chuẩn thiết kế",
    category: "Thương mại",
    keywords: "cho phan hang cho quy mo diem kinh doanh dkd loi di nha cho quay sap thoat nan pccc cap thoat nuoc chieu sang tcvn 9211 9211 2012",
    summary: "Điểm kinh doanh chuẩn ≥ 3,0 m², phân hạng chợ 1-2-3, nhà chợ 1-2 tầng, diện tích khách 2,4-2,8 m², lối đi chính ≥ 2,4-3,0 m, bệ sạp thực phẩm cao 0,7-0,8 m, bãi rác cách ≥ 15-20 m và cấp thoát nước.",
    pdfUrl: "pdf/TCVN_9211_2012.pdf",
    details: `
      <h4>1. Bảng chỉ tiêu diện tích và thông số thiết kế cốt lõi</h4>
      <table class="specs-table">
        <tr><th>Hạng mục</th><th>Tiêu chí / Quy định phân loại</th><th>Thông số kỹ thuật cụ thể</th></tr>
        <tr><td><strong>Điểm kinh doanh chuẩn (ĐKD)</strong></td><td>Diện tích đơn vị quy chuẩn tối thiểu cho 1 sạp/lô/quầy</td><td><strong>Tối thiểu 3,0 m² / điểm kinh doanh</strong></td></tr>
        <tr><td><strong>Phân hạng Chợ hạng 1</strong></td><td>Cấp tỉnh/TP quản lý; số điểm kinh doanh</td><td><strong>Trên 400 ĐKD</strong>; bán kính phục vụ <strong>≤ 3,0 km</strong></td></tr>
        <tr><td><strong>Phân hạng Chợ hạng 2</strong></td><td>Cấp quận/huyện quản lý; số điểm kinh doanh</td><td><strong>Từ 200 đến 400 ĐKD</strong>; bán kính phục vụ <strong>≤ 1,5 km</strong></td></tr>
        <tr><td><strong>Phân hạng Chợ hạng 3</strong></td><td>Cấp xã/phường quản lý; số điểm kinh doanh</td><td><strong>Dưới 200 ĐKD</strong>; bán kính phục vụ <strong>≤ 0,5 – 1,0 km</strong></td></tr>
        <tr><td><strong>Số tầng công trình</strong></td><td>Khuyến nghị số tầng của nhà chợ chính</td><td>Chỉ nên thiết kế từ <strong>1 đến 2 tầng</strong> (hạn chế nhà cao tầng)</td></tr>
        <tr><td><strong>Diện tích tính toán khách</strong></td><td>Định mức diện tích kinh doanh trên lượng khách cùng lúc</td><td>Từ <strong>2,4 m² đến 2,8 m² / khách hàng</strong></td></tr>
        <tr><td><strong>Bãi đỗ xe chợ</strong></td><td>Định mức bãi đỗ xe cho các phương tiện</td><td>Ô tô: <strong>25 m²/chỗ</strong>; Xe máy: <strong>2,5 – 3,0 m²/chỗ</strong>; Xe đạp: <strong>0,9 m²/chỗ</strong></td></tr>
      </table>

      <h4>2. Cơ cấu phân khu chức năng & Quy hoạch mặt bằng</h4>
      <ul>
        <li><strong>Khu kinh doanh trong nhà (Nhà chợ chính):</strong> Bố trí các quầy hàng bách hóa, thực phẩm khô, vải vóc, quần áo, dịch vụ tổng hợp.</li>
        <li><strong>Khu kinh doanh thực phẩm tươi sống:</strong> Bố trí tách biệt, nền nhà đánh dốc <strong>≥ 1,5% – 2,0%</strong> về các rãnh thoát thu gom cục bộ, thuận tiện cấp nước sạch liên tục và tẩy rửa khử trùng hằng ngày.</li>
        <li><strong>Khu kinh doanh ngoài trời:</strong> Dành cho nông sản mùa vụ, hàng tươi sống bán nhanh, chợ phiên tự do.</li>
        <li><strong>Khu tập kết & Bốc xếp hàng hóa:</strong> Bố trí sân bãi tiếp cận riêng cho xe tải giao nhận hàng ở phía sau hoặc bên hông chợ, không cắt ngang luồng khách đi bộ.</li>
        <li><strong>Khu thu gom chất thải rắn:</strong> Bố trí ở cuối hướng gió chủ đạo, cách xa khối nhà chợ chính và khu kinh doanh ăn uống tối thiểu <strong>15 m – 20 m</strong>, có tường bao che kín và lối thu gom rác chuyên dụng ra ngoài đường gom.</li>
      </ul>

      <h4>3. Thông số kích thước giao thông nội bộ & Quầy sạp</h4>
      <ul>
        <li><strong>Lối đi lại trong nhà chợ:</strong>
          <ul>
            <li>Lối đi chính (nối giữa các cửa ra vào chính): Chiều rộng thông thủy <strong>≥ 2,4 m – 3,0 m</strong>.</li>
            <li>Lối đi phụ / nhánh giữa các dãy sạp hàng: Chiều rộng thông thủy <strong>≥ 1,2 m – 1,5 m</strong>.</li>
            <li>Lối đi ngoài trời: Đường giao thông đối nội bao quanh nhà chợ rộng <strong>≥ 3,5 m</strong> (đủ cho xe cứu hỏa và xe tải bốc dỡ hàng hoạt động).</li>
          </ul>
        </li>
        <li><strong>Kích thước sạp / ki-ốt:</strong>
          <ul>
            <li>Chiều rộng mặt tiền mỗi sạp hàng: Tối thiểu <strong>1,5 m</strong>.</li>
            <li>Chiều cao bệ bày bán hàng thực phẩm: Cao cách mặt sàn hoàn thiện từ <strong>0,70 m – 0,80 m</strong> để tránh nước bẩn văng bắn.</li>
          </ul>
        </li>
      </ul>

      <h4>4. Hạ tầng kỹ thuật, PCCC & Vệ sinh môi trường</h4>
      <ul>
        <li><strong>Cửa thoát nạn & An toàn cháy nổ:</strong> Khoảng cách từ điểm xa nhất của quầy hàng đến cửa thoát nạn gần nhất <strong>≤ 25 m</strong> (gian phòng mở). Chiều rộng thông thủy các cửa thoát hiểm chính không nhỏ hơn <strong>1,2 m</strong>; cửa bắt buộc mở quay theo chiều thoát hiểm.</li>
        <li><strong>Cấp, thoát nước:</strong>
          <ul>
            <li>Định mức nước sinh hoạt: Tính toán từ <strong>15 – 20 lít / ĐKD / ngày đêm</strong> đối với hàng khô, và <strong>40 – 60 lít / ĐKD / ngày đêm</strong> đối với quầy thịt, thủy hải sản.</li>
            <li>Mương rãnh thoát nước thải bẩn phải có nắp đan bê tông hoặc lưới thép mạ kẽm tháo lắp được, có hố ga lắng cặn và bẫy ngăn mùi trước khi xả vào hệ thống xử lý nước thải chung.</li>
          </ul>
        </li>
        <li><strong>Thông gió & Chiếu sáng:</strong> Ưu tiên thông gió tự nhiên qua hệ cửa mái (louver), lam chớp đón gió xuyên phòng và cửa trời lấy sáng. Chiều cao thông thủy tầng 1 nhà chợ chính nên đạt từ <strong>4,2 m – 4,8 m</strong> để bảo đảm độ thoáng khí và thoát nhiệt tốt.</li>
      </ul>
    `
  },

  // =========================================================================
  // 4. TCVN 11856:2017 (CHỢ THỰC PHẨM)
  // =========================================================================
  {
    code: "TCVN 11856:2017",
    title: "Chợ kinh doanh thực phẩm – Yêu cầu kỹ thuật và phương pháp đánh giá",
    category: "Thương mại & ATTP",
    keywords: "cho kinh doanh thuc pham diem kinh doanh quay sap cach ly moi truong gia cam song nhiem cheo cap thoat nuoc chieu sang tcvn 11856 11856 2017",
    summary: "Điểm kinh doanh ≥ 3m², cách ly ô nhiễm ≥ 500m, đường nội bộ ≥ 1,5m, cách ly gia cầm sống ≥ 2,4m, 1 WC/25 hộ, chống nhiễm chéo, bệ sạp cao ≥ 0,7-0,8m và thoát nước mương rãnh ≥ 1%.",
    pdfUrl: "pdf/TCVN_11856_2017.pdf",
    details: `
      <h4>1. Bảng chỉ tiêu diện tích và thông số thiết kế cốt lõi</h4>
      <table class="specs-table">
        <tr><th>Hạng mục</th><th>Quy định kỹ thuật / Tiêu chí</th><th>Thông số kỹ thuật cụ thể</th></tr>
        <tr><td><strong>Quy mô điểm kinh doanh (ĐKD)</strong></td><td>Diện tích tối thiểu cho mỗi quầy sạp/điểm bán thực phẩm</td><td><strong>Tối thiểu 3,0 m² / điểm kinh doanh</strong></td></tr>
        <tr><td><strong>Khoảng cách ly môi trường</strong></td><td>Khoảng cách đến nguồn ô nhiễm lớn (bãi rác, khu chăn nuôi, KCN...)</td><td><strong>Tối thiểu 500 m</strong></td></tr>
        <tr><td><strong>Đường giao thông nội bộ</strong></td><td>Chiều rộng thông thủy lối đi chính giữa các dãy sạp</td><td><strong>Tối thiểu 1,5 m</strong></td></tr>
        <tr><td><strong>Khu bán gia cầm sống</strong></td><td>Khoảng cách ly giữa điểm bán gia cầm sống với các khu thực phẩm khác</td><td><strong>Tối thiểu 2,4 m</strong></td></tr>
        <tr><td><strong>Công trình vệ sinh</strong></td><td>Tỷ lệ phòng vệ sinh phục vụ các hộ kinh doanh</td><td><strong>Tối thiểu 1 nhà vệ sinh / 25 hộ kinh doanh</strong></td></tr>
        <tr><td><strong>Niên hạn sử dụng</strong></td><td>Niên hạn khai thác công trình chợ</td><td><strong>Tối thiểu 5 năm</strong></td></tr>
        <tr><td><strong>Bậc chịu lửa (PCCC)</strong></td><td>Bậc chịu lửa công trình theo TCVN 6161</td><td><strong>Bậc I, II</strong> (chợ kiên cố); <strong>bậc III</strong> (bán kiên cố)</td></tr>
      </table>

      <h4>2. Phân khu chức năng & Dây chuyền mặt bằng</h4>
      <ul>
        <li><strong>Tách bạch khu thực phẩm & Phi thực phẩm:</strong> Chợ phải phân chia ranh giới rõ ràng giữa khu kinh doanh hàng bách hóa, tiêu dùng với khu vực thực phẩm.</li>
        <li><strong>Nguyên tắc chống nhiễm chéo:</strong>
          <ul>
            <li>Khu thực phẩm tươi sống (thịt gia súc, gia cầm, thủy hải sản) phải tách biệt khỏi khu thực phẩm chín/ăn uống và thực phẩm bao gói sẵn.</li>
            <li>Khu kinh doanh gia cầm sống bắt buộc phải có vách ngăn hoặc khoảng cách cách ly tối thiểu <strong>2,4 m</strong>, có lối vận chuyển gia cầm riêng biệt không đi chung qua khu thực phẩm chín.</li>
          </ul>
        </li>
        <li><strong>Khu tập kết & Thu gom rác thải:</strong> Bố trí ở cuối hướng gió chủ đạo, cách biệt khu bày bán thực phẩm. Phải có bệ chứa rác có gờ bao quanh, rãnh thu nước rỉ rác riêng dẫn về hệ thống xử lý, thùng rác có nắp đậy kín và thu dọn tối thiểu <strong>1 lần/ngày</strong>.</li>
      </ul>

      <h4>3. Thông số kỹ thuật quầy sạp & Bề mặt hoàn thiện</h4>
      <ul>
        <li><strong>Nền và sàn chợ:</strong> Nền chợ phải cao hơn mặt đất xung quanh, lát vật liệu bền, phẳng, chống trơn trượt. Độ dốc sàn tối thiểu từ <strong>1,5% – 2,0%</strong> hướng dốc đều về các rãnh thu gom nước thải, không để tồn đọng vũng nước bẩn.</li>
        <li><strong>Bàn, kệ, sạp bày bán:</strong> Vật liệu bề mặt bàn tiếp xúc trực tiếp với thực phẩm phải phẳng, nhẵn, không thấm nước, không gỉ sét (inox, đá granit nhẵn hoặc composite chuyên dụng). Chiều cao bệ sạp bày bán thịt, cá tươi sống phải cao cách sàn tối thiểu <strong>0,7 m – 0,8 m</strong>. Quầy đồ chín phải có tủ kính che kín cao tối thiểu <strong>0,5 m</strong>.</li>
      </ul>

      <h4>4. Hạ tầng kỹ thuật cấp thoát nước & Chiếu sáng</h4>
      <ul>
        <li><strong>Cấp nước:</strong> Nguồn nước đạt chuẩn nước sinh hoạt/ăn uống của Bộ Y tế. Cấp nước liên tục tới từng quầy thịt tươi sống, thủy sản và ăn uống. Dãy sạp tươi sống phải có vòi rửa áp lực vệ sinh cuối ngày.</li>
        <li><strong>Thoát nước:</strong> Mương rãnh thoát nước thải dốc chuẩn <strong>≥ 1%</strong>, có tấm đan/lưới chắn rác tháo lắp dễ dàng và bẫy ngăn mùi trước khi xả ra cống chung.</li>
        <li><strong>Thông gió & Chiếu sáng:</strong> Chiếu sáng đạt độ rọi tối thiểu <strong>100 – 150 Lux</strong> tại mặt bàn sạp hàng; cấm sử dụng đèn màu làm biến đổi màu sắc tự nhiên của thực phẩm tươi sống. Thông thoáng tự nhiên qua cửa mái, lam gió hoặc quạt hút mùi cưỡng bức.</li>
      </ul>
    `
  },

  // =========================================================================
  // 5. TCVN 8794:2011 (TRƯỜNG TRUNG HỌC CƠ SỞ)
  // =========================================================================
  {
    code: "TCVN 8794:2011",
    title: "Trường trung học cơ sở – Yêu cầu thiết kế",
    category: "Giáo dục trung học",
    keywords: "trung hoc thcs cap 2 quy mo si so ban kinh phuc vu phong hoc ly thuyet phong thi nghiem hoa sinh vat ly thu vien nha da nang cau thang hanh lang chieu sang do roi tcvn 8794 8794 2011",
    summary: "Quy mô ≤ 45 lớp (≤ 45 HS/lớp), đất ≥ 6-10 m²/HS, phòng học lý thuyết (≥ 1,25 m²/HS, rộng ≤ 7,2m), phòng bộ môn Hóa-Sinh/Lý, thư viện (≥ 0,6 m²/HS), nhà đa năng ≥ 288m², thang bộ h ≤ 150mm và lan can cao ≥ 1,1m.",
    pdfUrl: "pdf/TCVN_8794_2011.pdf",
    details: `
      <h4>1. Bảng chỉ tiêu diện tích và thông số thiết kế cốt lõi</h4>
      <table class="specs-table">
        <tr><th>Hạng mục</th><th>Chỉ tiêu / Quy định kỹ thuật</th><th>Thông số kỹ thuật cụ thể</th></tr>
        <tr><td><strong>Quy mô trường</strong></td><td>Số lớp học tối đa toàn trường; số học sinh/lớp</td><td><strong>Tối đa 45 lớp</strong>; <strong>Tối đa 45 học sinh / lớp</strong></td></tr>
        <tr><td><strong>Bán kính phục vụ</strong></td><td>Khoảng cách từ nhà học sinh đến trường</td><td>Đô thị, đồng bằng: <strong>≤ 1,5 km – 2,0 km</strong>; Miền núi, nông thôn: <strong>≤ 3,0 km – 5,0 km</strong></td></tr>
        <tr><td><strong>Tiêu chuẩn khu đất</strong></td><td>Diện tích đất tối thiểu tính trên 1 học sinh</td><td>Đô thị, vùng đồng bằng: <strong>≥ 6 m² / HS</strong>; Nông thôn, miền núi: <strong>≥ 10 m² / HS</strong></td></tr>
        <tr><td><strong>Cơ cấu mặt bằng</strong></td><td>Tỷ lệ cơ cấu phân chia diện tích khu đất</td><td>Đất xây dựng: <strong>≤ 40%</strong>; Cây xanh, sân chơi, bãi tập: <strong>≥ 40%</strong>; Giao thông nội bộ: <strong>≥ 20%</strong></td></tr>
        <tr><td><strong>Tầng cao công trình</strong></td><td>Giới hạn chiều cao khối phòng học lý thuyết</td><td><strong>Tối đa 4 tầng</strong> (học sinh lớp 6, 7 ưu tiên học ở các tầng thấp)</td></tr>
        <tr><td><strong>Chiều cao thông thủy</strong></td><td>Chiều cao tĩnh từ sàn đến trần phòng học</td><td>Phòng học lý thuyết: <strong>3,30 m – 3,60 m</strong>; Chiều cao tầng: <strong>3,60 m – 3,90 m</strong></td></tr>
      </table>

      <h4>2. Chỉ tiêu diện tích khối phòng học và hỗ trợ học tập</h4>
      <ul>
        <li><strong>Phòng học lý thuyết:</strong> Tối thiểu <strong>1,25 m² / học sinh</strong> (phòng từ 54 m² – 60 m² cho lớp 40 – 45 học sinh). Chiều rộng vuông góc tường lấy sáng chính không vượt quá <strong>7,2 m</strong>.</li>
        <li><strong>Khối phòng học bộ môn & Thí nghiệm:</strong>
          <ul>
            <li>Phòng thực hành Vật lý – Công nghệ: Tối thiểu <strong>1,85 m² – 2,0 m² / học sinh</strong> (phòng 72 m² – 84 m², kho thiết bị <strong>≥ 16 m²</strong>).</li>
            <li>Phòng thực hành Hóa học – Sinh học: Tối thiểu <strong>2,0 m² – 2,2 m² / học sinh</strong> (phòng 72 m² – 96 m², có cấp thoát nước, bồn rửa chuyên dụng, tủ hút khí độc và kho hóa chất <strong>≥ 16 m²</strong>).</li>
            <li>Phòng Tin học, Ngoại ngữ: Tối thiểu <strong>1,50 m² / học sinh</strong> (không nhỏ hơn 54 m²).</li>
            <li>Phòng Âm nhạc, Mỹ thuật: Tối thiểu <strong>1,50 m² / học sinh</strong> (không nhỏ hơn 54 m², kho dụng cụ <strong>≥ 12 m²</strong>).</li>
          </ul>
        </li>
        <li><strong>Thư viện trường:</strong> Tối thiểu <strong>0,60 m² / học sinh</strong> (toàn khu thư viện không nhỏ hơn <strong>96 m²</strong>, phòng đọc học sinh 45 – 60 chỗ, phòng đọc giáo viên 20 – 25 chỗ).</li>
        <li><strong>Nhà tập đa năng:</strong> Sàn tập tối thiểu <strong>1,80 m² – 2,0 m² / học sinh</strong>; tổng diện tích <strong>≥ 288 m²</strong> (chuẩn 12 m × 24 m hoặc 18 m × 30 m, chiều cao tĩnh <em>H</em> ≥ <strong>7,0 m</strong>).</li>
      </ul>

      <h4>3. Khối hành chính quản trị & Phục vụ sinh hoạt</h4>
      <ul>
        <li>Phòng Hiệu trưởng: 14 – 16 m²; Phó Hiệu trưởng: 10 – 12 m²/người; Văn phòng trường / phòng họp giáo viên: 1,20 – 1,40 m²/giáo viên (tổng ≥ 36 – 48 m²); Phòng Y tế học đường: ≥ 16 m² (tầng 1); Phòng Đoàn – Đội: ≥ 24 – 36 m².</li>
        <li>Khu vệ sinh học sinh: Tối thiểu <strong>0,06 m² / học sinh</strong>. Nữ: 1 bệ xí / 20–30 HS nữ; 1 chậu rửa / 1–2 xí. Nam: 1 bệ xí + 1 bệ tiểu / 25–35 HS nam; 1 chậu rửa / 2 tiểu. Mép chậu rửa cao 0,65 – 0,75 m; bệ xí cao 0,38 – 0,42 m.</li>
      </ul>

      <h4>4. Thông số kỹ thuật kiến trúc, giao thông & An toàn</h4>
      <ul>
        <li>Hành lang chính / hiên chơi rộng <strong>≥ 2,10 m</strong>; hành lang phụ ≥ 1,50 m. Cầu thang chính rộng <strong>≥ 1,80 m</strong>, bậc cao <em>h</em> ≤ 150 mm, rộng <em>b</em> ≥ 300 mm. Lan can cao <strong>≥ 1,10 m</strong> chấn song đứng hở lọt sáng <strong>≤ 0,10 m</strong> (cấm hoa sắt ngang).</li>
        <li>Cửa phòng học rộng thông thủy <strong>≥ 0,90 m</strong> mở ra hành lang (lớp ≥ 40 HS làm 2 cửa ở đầu và cuối phòng). Bậu cửa sổ cao 0,80 – 0,90 m. Hướng nhà ưu tiên Nam hoặc Đông Nam. Độ rọi bàn học <strong>≥ 300 Lux</strong>, bảng lớp có đèn rọi chống lóa riêng <strong>≥ 500 Lux</strong>.</li>
      </ul>
    `
  },

  // =========================================================================
  // 6. TCVN 8793:2011 (TRƯỜNG TIỂU HỌC)
  // =========================================================================
  {
    code: "TCVN 8793:2011",
    title: "Trường tiểu học – Yêu cầu thiết kế",
    category: "Giáo dục tiểu học",
    keywords: "tieu hoc truong tieu hoc cap 1 quy mo si so ban kinh phuc vu phong hoc ly thuyet phong bo mon thu vien nha da nang cau thang hanh lang chieu sang do roi bang lop tcvn 8793 8793 2011",
    summary: "Quy mô ≤ 30 lớp (≤ 35 HS/lớp), đất ≥ 6-10 m²/HS, phòng học lý thuyết (≥ 1,25 m²/HS, rộng ≤ 7,2m), thư viện (≥ 0,6 m²/HS), nhà đa năng (≥ 1,8 m²/HS), thang bộ h ≤ 150mm và lan can cao ≥ 1,1m.",
    pdfUrl: "pdf/TCVN_8793_2011.pdf",
    details: `
      <h4>1. Bảng chỉ tiêu diện tích và thông số thiết kế cốt lõi</h4>
      <table class="specs-table">
        <tr><th>Hạng mục</th><th>Chỉ tiêu / Quy định kỹ thuật</th><th>Thông số kỹ thuật cụ thể</th></tr>
        <tr><td><strong>Quy mô trường</strong></td><td>Số lớp học tối đa toàn trường; số học sinh/lớp</td><td><strong>Tối đa 30 lớp</strong>; <strong>Tối đa 35 học sinh / lớp</strong></td></tr>
        <tr><td><strong>Bán kính phục vụ</strong></td><td>Khoảng cách từ nhà học sinh đến trường</td><td>Đô thị, đồng bằng: <strong>≤ 0,5 km – 1,0 km</strong>; Nông thôn, miền núi: <strong>≤ 2,0 km – 3,0 km</strong></td></tr>
        <tr><td><strong>Tiêu chuẩn khu đất</strong></td><td>Diện tích đất tối thiểu tính trên 1 học sinh</td><td>Đô thị, vùng đồng bằng: <strong>≥ 6 m² / HS</strong>; Nông thôn, miền núi: <strong>≥ 10 m² / HS</strong></td></tr>
        <tr><td><strong>Mặt bằng tổng thể</strong></td><td>Tỷ lệ cơ cấu phân chia diện tích khu đất</td><td>Đất xây dựng: <strong>≤ 40%</strong>; Cây xanh, sân chơi, TDTT: <strong>≥ 40%</strong>; Giao thông nội bộ: <strong>≥ 20%</strong></td></tr>
        <tr><td><strong>Tầng cao công trình</strong></td><td>Giới hạn chiều cao khối phòng học lý thuyết</td><td><strong>Tối đa 3 tầng</strong> (ở vùng đồng bào thiểu số, miền núi chỉ nên làm 1 – 2 tầng)</td></tr>
        <tr><td><strong>Chiều cao phòng học</strong></td><td>Chiều cao thông thủy từ sàn đến trần phòng</td><td>Lớp học thông thường: <strong>3,30 m – 3,60 m</strong>; Chiều cao tầng: <strong>3,60 m – 3,90 m</strong></td></tr>
      </table>

      <h4>2. Chỉ tiêu diện tích khối phòng học và hỗ trợ học tập</h4>
      <ul>
        <li><strong>Phòng học lý thuyết:</strong> Tối thiểu <strong>1,25 m² / học sinh</strong> (phòng 48 m² – 54 m² cho lớp 30 – 35 học sinh). Chiều rộng vuông góc tường lấy sáng chính không vượt quá <strong>7,2 m</strong>.</li>
        <li><strong>Khối phòng học bộ môn:</strong> Phòng Ngoại ngữ, Tin học: ≥ 1,50 m²/HS (≥ 54 m²); Phòng Âm nhạc, Mỹ thuật: ≥ 1,50 m²/HS (≥ 54 m², kho dụng cụ/giá vẽ ≥ 12 m²); Phòng Khoa học – Công nghệ: ≥ 1,50 m²/HS.</li>
        <li><strong>Thư viện trường:</strong> Tối thiểu <strong>0,60 m² / học sinh</strong> (toàn khu thư viện không dưới <strong>72 m²</strong>, phòng đọc học sinh 35 – 50 chỗ, giáo viên 15 – 20 chỗ).</li>
        <li><strong>Nhà tập đa năng:</strong> Tối thiểu <strong>1,80 m² / học sinh</strong>, tổng sàn không nhỏ hơn <strong>144 m²</strong> (kích thước 12 × 12 m hoặc 12 × 24 m, chiều cao tĩnh <em>H</em> ≥ <strong>6,0 m</strong>).</li>
      </ul>

      <h4>3. Khối hành chính quản trị & Phục vụ sinh hoạt</h4>
      <ul>
        <li>Phòng Hiệu trưởng: 12 – 15 m²; Phó Hiệu trưởng: 10 – 12 m²; Văn phòng trường: 1,20 – 1,50 m²/GV (tổng ≥ 24 m²); Y tế học đường: 12 – 16 m² (tầng 1); Phòng Đội: 24 – 36 m².</li>
        <li>Khu vệ sinh học sinh: Tối thiểu <strong>0,06 m² / học sinh</strong> (có phòng đệm). Nữ: 1 hố xí / 20–30 HS nữ; 1 chậu rửa / 1–2 xí. Nam: 1 hố xí + 1 bệ tiểu / 25–35 HS nam; 1 chậu rửa / 2 tiểu. Mép chậu rửa cao 0,55 – 0,65 m; bệ xí cao 0,30 – 0,35 m.</li>
      </ul>

      <h4>4. Thông số kỹ thuật kiến trúc, giao thông & An toàn</h4>
      <ul>
        <li>Hành lang chính / hiên chơi rộng <strong>≥ 2,10 m</strong>; hành lang phụ ≥ 1,50 m. Cầu thang bộ rộng <strong>≥ 1,80 m</strong> (thang phụ ≥ 1,50 m). Bậc thang cao <em>h</em> ≤ 150 mm, rộng <em>b</em> ≥ 300 mm (cấm bậc rẻ quạt). Lan can cao <strong>≥ 1,10 m</strong> chấn song đứng hở <strong>≤ 0,10 m</strong> (cấm gờ ngang).</li>
        <li>Trục nhà ưu tiên Nam hoặc Đông Nam. Cửa lấy sáng chính bên tay trái học sinh; tỷ lệ cửa sổ trên sàn 1/5 – 1/6. Độ rọi bàn học <strong>≥ 300 Lux</strong>; bảng lớp có đèn rọi riêng <strong>≥ 500 Lux</strong> không lóa.</li>
      </ul>
    `
  },

  // =========================================================================
  // 7. TCVN 3907:2011 (TRƯỜNG MẦM NON)
  // =========================================================================
  {
    code: "TCVN 3907:2011",
    title: "Trường mầm non – Yêu cầu thiết kế",
    category: "Giáo dục mầm non",
    keywords: "mam non mau giao nha tre quy hoach ban kinh phuc vu sinh hoat chung phong ngu phong ve sinh hien choi bep mot chieu cau thang lan can tay vin chieu sang do roi 3907 3907 2011",
    summary: "Quy mô ≤ 20 lớp (300-500 trẻ), đất ≥ 8-12 m²/trẻ, sinh hoạt chung (≥ 1,5-1,8 m²), phòng ngủ (≥ 1,2-1,5 m²), bếp 1 chiều, hiên chơi ≥ 2,1m, thang bậc h ≤ 120mm và lan can nan đứng.",
    pdfUrl: "pdf/TCVN_3907_2011.pdf",
    details: `
      <h4>1. Bảng chỉ tiêu diện tích và thông số thiết kế cốt lõi</h4>
      <table class="specs-table">
        <tr><th>Hạng mục</th><th>Chỉ tiêu / Quy định kỹ thuật</th><th>Thông số kỹ thuật cụ thể</th></tr>
        <tr><td><strong>Quy mô trường</strong></td><td>Số nhóm trẻ / lớp mẫu giáo tối đa toàn trường</td><td><strong>Không vượt quá 20 nhóm/lớp</strong> (tương đương 300 – 500 trẻ)</td></tr>
        <tr><td><strong>Bán kính phục vụ</strong></td><td>Khoảng cách đi lại từ nhà đến trường</td><td>Đồng bằng, thành phố: <strong>≤ 0,5 km – 1,0 km</strong>; Miền núi, nông thôn: <strong>≤ 1,5 km – 2,0 km</strong></td></tr>
        <tr><td><strong>Tiêu chuẩn khu đất</strong></td><td>Diện tích đất tối thiểu tính trên 1 trẻ</td><td>Thành phố, thị xã: <strong>≥ 8 m² / trẻ</strong>; Nông thôn, miền núi: <strong>≥ 12 m² / trẻ</strong></td></tr>
        <tr><td><strong>Cơ cấu mặt bằng</strong></td><td>Tỷ lệ phân chia khu đất (XD, sân chơi, cây xanh)</td><td>Xây dựng: <strong>≤ 40%</strong>; Cây xanh, sân chơi: <strong>≥ 40%</strong>; Giao thông nội bộ: <strong>≥ 20%</strong></td></tr>
        <tr><td><strong>Tầng cao công trình</strong></td><td>Giới hạn chiều cao khối phòng nuôi dưỡng, chăm sóc</td><td><strong>Tối đa 3 tầng</strong> (nhóm nhà trẻ ưu tiên bố trí ở tầng 1)</td></tr>
        <tr><td><strong>Chiều cao thông thủy</strong></td><td>Chiều cao tĩnh từ sàn đến trần phòng học</td><td>Phòng sinh hoạt chung, phòng ngủ: <strong>3,30 m – 3,60 m</strong>; Hành lang: <strong>≥ 2,40 m</strong></td></tr>
      </table>

      <h4>2. Chỉ tiêu diện tích khối phòng nhóm trẻ và lớp mẫu giáo</h4>
      <ul>
        <li><strong>Phòng sinh hoạt chung:</strong> Nhà trẻ: <strong>≥ 1,50 m² – 1,80 m² / trẻ</strong> (≥ 24 m²); Mẫu giáo: <strong>≥ 1,50 m² – 1,80 m² / trẻ</strong> (≥ 36 m²).</li>
        <li><strong>Phòng ngủ:</strong> Tiêu chuẩn <strong>≥ 1,20 m² – 1,50 m² / trẻ</strong> (nhóm trẻ ≥ 20 m²; mẫu giáo ≥ 30 m²). Nếu kết hợp phòng sinh hoạt chung làm phòng ngủ thì diện tích chung tối thiểu <strong>≥ 2,20 m² / trẻ</strong>.</li>
        <li><strong>Phòng vệ sinh:</strong> Tiêu chuẩn <strong>≥ 0,40 m² – 0,60 m² / trẻ</strong> (≥ 12 m²). Định mức: 1 bệ xí / 10 – 15 trẻ; 1 chậu rửa tay / 8 – 10 trẻ; 1 bệ tiểu / 15 – 20 trẻ nam. Chậu rửa tay cao 0,40 – 0,45 m; bệ xí cao 0,20 – 0,28 m. Vách ngăn lửng giữa các bệ xí cao 0,70 – 0,80 m (không làm cửa kín).</li>
        <li><strong>Hiên chơi (Hành lang tiếp cận):</strong> Tiêu chuẩn <strong>≥ 0,50 m² – 0,70 m² / trẻ</strong>; chiều rộng thông thủy hiên chơi tối thiểu <strong>2,10 m</strong>.</li>
      </ul>

      <h4>3. Khối phục vụ học tập, hành chính & Bếp ăn</h4>
      <ul>
        <li>Phòng giáo dục thể chất / nghệ thuật: Tối thiểu <strong>≥ 2,0 m² / trẻ</strong> (phòng không nhỏ hơn 60 m²).</li>
        <li>Hành chính: Hiệu trưởng 12 – 15 m²; Phó Hiệu trưởng 10 – 12 m²; Hội đồng giáo viên ≥ 30 m²; Y tế học đường ≥ 12 m² (tầng 1).</li>
        <li><strong>Bếp ăn (Bếp một chiều):</strong> Tiêu chuẩn diện tích bếp <strong>≥ 0,30 m² – 0,35 m² / trẻ</strong>. Quy trình 1 chiều: Giao nhận → Sơ chế → Chế biến nấu nướng → Chia thức ăn → Rửa bát, khử trùng.</li>
      </ul>

      <h4>4. An toàn kiến trúc & Vi khí hậu</h4>
      <ul>
        <li>Cầu thang: Chiều cao bậc <em>h</em> ≤ <strong>120 mm</strong>, chiều rộng mặt bậc <em>b</em> ≥ <strong>250 mm</strong>; vế thang rộng <strong>≥ 1,20 m</strong>. Tay vịn chính 0,90 – 1,10 m; tay vịn phụ trẻ em <strong>0,50 – 0,60 m</strong>. Lan can chấn song đứng khoảng cách <strong>≤ 0,10 m</strong> (cấm hoa sắt ngang).</li>
        <li>Bậu cửa sổ cao tối thiểu <strong>0,80 m</strong> (thấp hơn phải có khung bảo vệ). Cửa đi thông thủy rộng <strong>≥ 0,90 m</strong> có chặn an toàn. Hướng phòng học chính: Nam hoặc Đông Nam. Tỷ lệ cửa sổ 1/5 – 1/6. Độ rọi phòng học <strong>≥ 300 Lux</strong>.</li>
      </ul>
    `
  },

  // =========================================================================
  // 8. QCVN 01:2021/BXD (QUY HOẠCH XÂY DỰNG)
  // =========================================================================
  {
    code: "QCVN 01:2021/BXD",
    title: "Quy chuẩn kỹ thuật quốc gia về Quy hoạch xây dựng",
    category: "Quy hoạch xây dựng",
    keywords: "quy hoach mat do xay dung khoang lui lo gioi don vi o cay xanh truong hoc mam non tieu hoc thcs khoang cach ly dau hoi bai do xe qcvn 01 01 2021",
    summary: "Đất đơn vị ở (≥ 45-50 m²/người), cây xanh (≥ 2 m²), mật độ XD thuần (nhà riêng lẻ 40-100%, chung cư, công nghiệp), khoảng lùi theo lộ giới L và H, khoảng cách ly các khối nhà và bãi đỗ xe.",
    pdfUrl: "pdf/QCVN_01_2021.pdf",
    details: `
      <h4>1. Bảng chỉ tiêu diện tích và thông số khống chế cốt lõi</h4>
      <table class="specs-table">
        <tr><th>Hạng mục</th><th>Chỉ tiêu / Quy định khống chế</th><th>Thông số kỹ thuật bắt buộc</th></tr>
        <tr><td><strong>Đất đơn vị ở bình quân</strong></td><td>Chỉ tiêu đất đơn vị ở tính trên đầu người theo loại đô thị</td><td>Loại đặc biệt/I: <strong>≥ 45 m² / người</strong>; Loại II, III, IV, V: <strong>≥ 50 m² / người</strong></td></tr>
        <tr><td><strong>Cây xanh sử dụng công cộng</strong></td><td>Đất cây xanh trong đơn vị ở</td><td>Tối thiểu <strong>2,0 m² / người</strong> (toàn đô thị từ 4 – 7 m²/người tùy loại đô thị)</td></tr>
        <tr><td><strong>Bán kính phục vụ trường học</strong></td><td>Khoảng cách tiếp cận tối đa từ nhà đến trường</td><td>Mầm non, tiểu học: <strong>≤ 500 m</strong> (miền núi/nông thôn ≤ 1,0 km); THCS: <strong>≤ 1.000 m</strong></td></tr>
        <tr><td><strong>Chỉ tiêu đất trường mầm non</strong></td><td>Diện tích đất trường mầm non tính trên 1 học sinh</td><td>Tối thiểu <strong>12 m² / học sinh</strong> (vùng đô thị nén tối thiểu <strong>8 m² / học sinh</strong>)</td></tr>
        <tr><td><strong>Chỉ tiêu đất trường tiểu học</strong></td><td>Diện tích đất trường tiểu học tính trên 1 học sinh</td><td>Tối thiểu <strong>10 m² / học sinh</strong> (vùng đô thị nén tối thiểu <strong>6 m² / học sinh</strong>)</td></tr>
        <tr><td><strong>Chỉ tiêu đất trường THCS</strong></td><td>Diện tích đất trường THCS tính trên 1 học sinh</td><td>Tối thiểu <strong>10 m² / học sinh</strong> (vùng đô thị nén tối thiểu <strong>6 m² / học sinh</strong>)</td></tr>
        <tr><td><strong>Quy mô dân số 1 đơn vị ở</strong></td><td>Ngưỡng dân số quy chuẩn của 1 đơn vị ở</td><td>Từ <strong>4.000 đến 20.000 người</strong> (đô thị đặc biệt/I có thể điều chỉnh linh hoạt)</td></tr>
      </table>

      <h4>2. Mật độ xây dựng thuần tối đa (%) theo diện tích và tầng cao</h4>
      <ul>
        <li><strong>Nhà ở riêng lẻ:</strong> Lô đất ≤ 90 m²: <strong>100%</strong> | 100 m²: <strong>80%</strong> | 200 m²: <strong>70%</strong> | 300 m²: <strong>60%</strong> | 500 m²: <strong>50%</strong> | ≥ 1.000 m²: <strong>40%</strong>.</li>
        <li><strong>Nhà chung cư:</strong> Cao ≤ 16 m: Mật độ <strong>60% – 75%</strong>; Cao 16 m – 46 m: Mật độ <strong>40% – 60%</strong>; Cao > 46 m (trên 15 tầng): khối tháp tối đa <strong>35% – 40%</strong> (khối đế tối đa 50% – 60%).</li>
        <li><strong>Công trình công cộng & Nhà xưởng:</strong> Giáo dục, y tế, văn hóa: tối đa <strong>40%</strong>; Chợ, thương mại: <strong>40% – 60%</strong>; Nhà máy, kho tàng: <strong>60% – 70%</strong> (cao ≥ 5 tầng ≤ 60%).</li>
      </ul>

      <h4>3. Quy định về khoảng lùi xây dựng công trình (Setback)</h4>
      <table class="specs-table">
        <tr><th>Chiều rộng lộ giới đường tiếp giáp (L)</th><th>H ≤ 19 m</th><th>H = 22 m</th><th>H = 25 m</th><th>H ≥ 28 m</th></tr>
        <tr><td><strong>L &lt; 19 m</strong></td><td>0 m</td><td>3 m</td><td>4 m</td><td>6 m</td></tr>
        <tr><td><strong>19 m ≤ L &lt; 22 m</strong></td><td>0 m</td><td>0 m</td><td>3 m</td><td>6 m</td></tr>
        <tr><td><strong>L ≥ 22 m</strong></td><td>0 m</td><td>0 m</td><td>0 m</td><td>6 m</td></tr>
      </table>

      <h4>4. Khoảng cách tối thiểu giữa các khối nhà (Khoảng cách ly)</h4>
      <ul>
        <li><strong>Hai đầu hồi nhà:</strong> Khoảng cách tối thiểu không nhỏ hơn <strong>4,0 m</strong> (nếu cả 2 bên tường đầu hồi đều mở cửa sổ thì khoảng cách tối thiểu là <strong>6,0 m</strong>).</li>
        <li><strong>Hai mặt dài của công trình song song:</strong> Giữa 2 nhà cao ≤ 46 m: khoảng cách <strong>≥ 0,5 H</strong> và không nhỏ hơn <strong>12 m</strong>; Giữa 2 nhà cao > 46 m: khoảng cách không nhỏ hơn <strong>25 m</strong>.</li>
      </ul>

      <h4>5. Bãi đỗ xe và hạ tầng kỹ thuật</h4>
      <ul>
        <li>Nhà ở thương mại / chung cư: Tối thiểu <strong>1 chỗ đỗ ô tô cho 4 – 6 căn hộ</strong>; <strong>1 chỗ đỗ xe máy cho 1 căn hộ</strong>. Công trình thương mại, dịch vụ, văn phòng: Tối thiểu <strong>1 chỗ đỗ ô tô / 100 m²</strong> sàn sử dụng.</li>
        <li>Kích thước chỗ đỗ: Ô tô con <strong>25 m² / chỗ</strong> (đã gồm đường lưu thông); Xe máy <strong>2,5 – 3,0 m² / chỗ</strong>; Xe đạp <strong>0,9 m² / chỗ</strong>.</li>
      </ul>
    `
  },

  // =========================================================================
  // 9. QCVN 06:2022/BXD (PCCC & AN TOÀN CHÁY)
  // =========================================================================
  {
    code: "QCVN 06:2022/BXD",
    title: "Quy chuẩn kỹ thuật quốc gia về An toàn cháy cho nhà và công trình (Kèm Sửa đổi 1:2023)",
    category: "PCCC & Kỹ thuật",
    keywords: "pccc an toan chay thoat nan cua thoat nan hanh lang ve thang khoang cach thoat nan bai quay xe chua chay xe thang khoang chay thang n1 n2 n3 thang may chua chay qcvn 06 06 2022 2023",
    summary: "Thông thủy thoát nạn (cửa ≥ 0,8-1,2m, hành lang ≥ 1,0-1,4m), vế thang bộ, khoảng cách 2 lối ra (1/3 hoặc 1/2 đường chéo), khoang cháy, thang bộ N1/N2/N3, thang máy chữa cháy và bãi đỗ xe thang.",
    pdfUrl: "pdf/QCVN_06_2022.pdf",
    details: `
      <h4>1. Bảng chỉ tiêu diện tích, khoảng cách và thông số kích thước cốt lõi</h4>
      <table class="specs-table">
        <tr><th>Hạng mục</th><th>Chỉ tiêu / Quy định kỹ thuật</th><th>Thông số kỹ thuật bắt buộc</th></tr>
        <tr><td><strong>Chiều cao thông thủy thoát nạn</strong></td><td>Chiều cao tĩnh của cửa đi, hành lang, lối đi thoát nạn</td><td>Chiều cao thông thủy: <strong>≥ 2,0 m</strong> (cửa vào tầng hầm/tầng kỹ thuật cho phép <strong>≥ 1,9 m</strong>)</td></tr>
        <tr><td><strong>Chiều rộng thông thủy cửa</strong></td><td>Cửa thoát nạn ra hành lang, buồng thang</td><td>Chiều rộng: <strong>≥ 0,8 m</strong> (khi số người ≤ 15 người); <strong>≥ 1,2 m</strong> (trường hợp trên 50 người, nhóm F1.1)</td></tr>
        <tr><td><strong>Chiều rộng thông thủy hành lang</strong></td><td>Lối đi chung, hành lang thoát nạn</td><td>Chiều rộng: <strong>≥ 1,0 m</strong> (cho phòng ≤ 50 người); <strong>≥ 1,2 m</strong> (hành lang chung chính); <strong>≥ 1,4 m</strong> (cho ≥ 50 người)</td></tr>
        <tr><td><strong>Chiều rộng vế thang bộ</strong></td><td>Chiều rộng vế thang bộ dùng để thoát hiểm</td><td>Nhà cao tầng/công cộng: <strong>≥ 1,2 m</strong>; Bệnh viện, nơi chăm sóc người già (F1.1): <strong>≥ 1,35 m</strong>; Nhà ≤ 200 người: <strong>≥ 1,05 m</strong>; Nhà ở gia đình/quy mô nhỏ: <strong>≥ 0,7 m – 0,9 m</strong></td></tr>
        <tr><td><strong>Khoảng cách 2 lối thoát nạn</strong></td><td>Khoảng cách hình học giữa 2 cửa thoát hiểm</td><td>Tối thiểu bằng <strong>1/3 đường chéo</strong> mặt bằng (nhà có Sprinkler) hoặc <strong>1/2 đường chéo</strong> (nhà không có Sprinkler)</td></tr>
        <tr><td><strong>Bãi đỗ / Bãi quay xe chữa cháy</strong></td><td>Kích thước khu vực quay đầu xe chữa cháy cụt</td><td>Bãi quay xe dạng vuông: <strong>≥ 12 m × 12 m</strong>; hoặc tam giác đều cạnh <strong>≥ 12 m</strong>, hoặc bến quay chữ T/chữ Y</td></tr>
        <tr><td><strong>Đường cho xe chữa cháy</strong></td><td>Chiều rộng và chiều cao thông thủy của đường</td><td>Chiều rộng mặt đường: <strong>≥ 3,5 m</strong>; Chiều cao thông thủy: <strong>≥ 4,5 m</strong>; Bán kính quay xe tối thiểu <strong>≥ 10,0 m</strong></td></tr>
      </table>

      <h4>2. Khoảng cách di chuyển thoát nạn tối đa</h4>
      <ul>
        <li><strong>Hành lang thông giữa hai lối thoát nạn:</strong> Nhà công cộng / chung cư (Bậc I, II): Tối đa <strong>40 m</strong> (không Sprinkler) hoặc <strong>60 m</strong> (có Sprinkler); Nhóm F1.1 (mầm non, bệnh viện): Tối đa <strong>25 m – 30 m</strong>.</li>
        <li><strong>Hành lang cụt (chỉ có 1 hướng thoát):</strong> Nhà công cộng / chung cư (Bậc I, II): Tối đa <strong>15 m</strong> (không Sprinkler) hoặc <strong>20 m – 25 m</strong> (có Sprinkler); Nhóm F1.1: Tối đa <strong>10 m – 12 m</strong>.</li>
        <li><strong>Từ vị trí xa nhất trong gian phòng đến cửa phòng:</strong> Phòng giữa 2 lối ra: <strong>25 m – 30 m</strong>; Phòng trong ngõ cụt: <strong>12 m – 15 m</strong>.</li>
      </ul>

      <h4>3. Khoang cháy, Thang bộ N1/N2/N3 & Thang máy chữa cháy</h4>
      <ul>
        <li><strong>Diện tích khoang cháy:</strong> Tầng hầm tối đa <strong>3.000 m²</strong> (không Sprinkler) hoặc <strong>6.200 m²</strong> (có Sprinkler); Nhà ở dưới 50 m: <strong>2.500 – 4.000 m²</strong>; Nhà trên 50 m: <strong>2.000 – 2.500 m²</strong>.</li>
        <li><strong>Thang bộ không nhiễm khói:</strong> Nhà cao > 28 m (chung cư) hoặc > 50 m (công cộng) bắt buộc dùng buồng thang N1, N2, N3 có cửa tự đóng ngăn cháy <strong>EI 30 / EI 60</strong>.</li>
        <li><strong>Thang máy chữa cháy:</strong> Bắt buộc cho nhà > 28 m (nhà ở), > 24 m (công cộng) hoặc ≥ 2 tầng hầm. Tải trọng <strong>≥ 630 kg</strong> (lính cứu hỏa) hoặc <strong>≥ 1.000 kg</strong> (kèm cáng cứu thương). Thời gian chạy từ tầng 1 lên đỉnh ≤ 60 s. Sảnh đệm thang máy chữa cháy rộng <strong>≥ 4 m²</strong> (hầm <strong>≥ 6 m²</strong>).</li>
        <li><strong>Bãi đỗ xe thang chữa cháy:</strong> Rộng <strong>≥ 6,0 m</strong>, dài <strong>≥ 15,0 m</strong>; cách chân tường công trình 2,0 – 10,0 m (nhà ≤ 28 m) hoặc 2,0 – 8,0 m (nhà > 28 m). Tải trọng mặt bãi chịu lực trục <strong>≥ 16 tấn/trục</strong> (tổng tải trọng xe <strong>≥ 30 tấn</strong>).</li>
      </ul>
    `
  },

  // =========================================================================
  // 10. QCVN 07-4:2016/BXD (GIAO THÔNG ĐÔ THỊ)
  // =========================================================================
  {
    code: "QCVN 07-4:2016/BXD",
    title: "Quy chuẩn kỹ thuật quốc gia về Công trình giao thông đô thị",
    category: "Giao thông đô thị",
    keywords: "giao thong do thi mat cat duong lan xe tinh khong via he bai do xe o to khoang do xe ramp doc ham de xe tam nhin nut giao 07 4 074 2016",
    summary: "Tỷ lệ đất giao thông (16-26%), đất bãi xe (3-4%), bề rộng làn xe (3,0-3,75m), tĩnh không (≥ 4,75m), dốc hầm (thẳng ≤ 15%, cong ≤ 13%), khoang đỗ ô tô và tam giác tầm nhìn.",
    pdfUrl: "pdf/QCVN_07_4_2016.pdf",
    details: `
      <h4>1. Bảng chỉ tiêu diện tích, kích thước hình học và thông số cốt lõi</h4>
      <table class="specs-table">
        <tr><th>Hạng mục</th><th>Quy định / Chỉ tiêu kỹ thuật</th><th>Thông số kỹ thuật bắt buộc</th></tr>
        <tr><td><strong>Chỉ tiêu đất giao thông đô thị</strong></td><td>Tỷ lệ đất dành cho giao thông trên diện tích đất xây dựng đô thị</td><td>Đặc biệt/I: <strong>21% – 26%</strong>; Loại II, III: <strong>18% – 23%</strong>; Loại IV, V: <strong>16% – 20%</strong></td></tr>
        <tr><td><strong>Tỷ lệ đất bến, bãi đỗ xe</strong></td><td>Đất dành cho giao thông tĩnh (bãi đỗ xe, điểm trung chuyển...)</td><td>Tối thiểu <strong>3,0% – 4,0%</strong> diện tích đất xây dựng đô thị</td></tr>
        <tr><td><strong>Mật độ mạng lưới đường</strong></td><td>Chiều dài mạng lưới đường chính trên diện tích đô thị</td><td>Đạt từ <strong>4,0 km/km² – 6,5 km/km²</strong> (tính đến đường phân khu vực)</td></tr>
        <tr><td><strong>Bán kính phục vụ bến xe buýt</strong></td><td>Khoảng cách đi bộ từ nhà/công sở đến điểm dừng xe buýt</td><td>Tối đa <strong>300 m – 500 m</strong> (khu vực ngoại vi tối đa <strong>800 m</strong>)</td></tr>
        <tr><td><strong>Chiều cao thông thủy tĩnh không</strong></td><td>Chiều cao tĩnh trên lòng đường xe cơ giới chạy qua</td><td>Tuyến đường chính, đại lộ: <strong>≥ 4,75 m</strong>; Đường gom, đường nhánh: <strong>≥ 4,50 m</strong></td></tr>
        <tr><td><strong>Tĩnh không đường đi bộ / xe đạp</strong></td><td>Chiều cao tĩnh của vỉa hè, hầm đi bộ, cầu vượt bộ hành</td><td>Tối thiểu <strong>2,50 m</strong> (cho phép <strong>2,20 m</strong> ở vị trí cá biệt)</td></tr>
      </table>

      <h4>2. Thông số kích thước mặt cắt ngang đường đô thị</h4>
      <ul>
        <li><strong>Độ rộng làn xe cơ giới (b):</strong> Cao tốc / Trục chính (v ≥ 80 km/h): <strong>3,75 m</strong>; Đường chính đô thị (v = 60 km/h): <strong>3,50 m</strong>; Liên khu vực, phân khu vực (v = 50 km/h): <strong>3,25 m – 3,50 m</strong>; Đường nội bộ (v ≤ 30 km/h): <strong>3,00 m</strong>.</li>
        <li><strong>Dải phân cách giữa:</strong> Rộng thông thường <strong>≥ 2,0 m</strong> (tối thiểu 1,5 m; dải dải cứng tối thiểu <strong>0,5 m</strong>).</li>
        <li><strong>Vỉa hè & Lối đi bộ:</strong> 1 dải người đi bộ chuẩn là <strong>0,75 m</strong>. Dải đi bộ thông thủy: Đường chính đô thị <strong>≥ 3,0 m</strong>; Liên khu vực <strong>≥ 2,25 m</strong>; Phân khu vực <strong>≥ 1,5 m</strong>; Nội bộ <strong>≥ 1,0 m</strong>.</li>
        <li><strong>Độ dốc mặt đường:</strong> Dốc ngang xe chạy <strong>1,5% – 2,0%</strong>; dốc ngang hè <strong>1,0% – 2,0%</strong>. Dốc dọc tối đa: đường chính <strong>≤ 4% – 5%</strong>; nội bộ/miền núi không quá <strong>8% – 10%</strong>.</li>
      </ul>

      <h4>3. Bãi đỗ xe và công trình đỗ xe ngầm</h4>
      <ul>
        <li>Chỉ tiêu diện tích bãi xe: Ô tô con: <strong>25 m²/chỗ</strong>; Xe khách, tải: <strong>40 m²/chỗ</strong>; Xe buýt: <strong>50 m²/chỗ</strong>; Xe máy: <strong>2,5 – 3,0 m²/chỗ</strong>; Xe đạp: <strong>0,9 m²/chỗ</strong>.</li>
        <li>Kích thước ô đỗ xe con: Vuông góc 90°: dài 5,0 – 5,5 m, rộng ≥ 2,5 m (kề tường/cột ≥ 2,75 m; lối lùi xe ≥ 6,0 m); Đỗ xiên 45°–60°: luồng xe 3,5 – 4,5 m; Đỗ song song: 6,0 – 6,5 m × 2,0 – 2,5 m.</li>
        <li>Đường dốc hầm để xe: Dốc thẳng <strong>≤ 15%</strong>; Dốc cong <strong>≤ 13%</strong>. Rộng ram dốc: 1 chiều <strong>≥ 3,0 m</strong>; 2 chiều <strong>≥ 6,0 m</strong>. Chiều cao tĩnh không tầng hầm: <strong>≥ 2,20 m</strong>.</li>
      </ul>

      <h4>4. Nút giao thông & Công trình phụ trợ</h4>
      <ul>
        <li>Tam giác tầm nhìn an toàn tại nút giao đồng mức: cấm vật cản cao quá <strong>0,8 m</strong>.</li>
        <li>Bán kính bó vỉa góc giao nhau (R): Giữa 2 đường trục chính: <strong>R ≥ 12 m – 15 m</strong>; Giữa đường chính với khu vực: <strong>R ≥ 8 m – 10 m</strong>; Giữa 2 đường nội bộ: <strong>R ≥ 5 m – 6 m</strong>.</li>
        <li>Vạch sang đường: trung tâm 150 – 250 m; ven đô 300 – 400 m. Bố trí cầu vượt/hầm chui bộ hành khi người đi bộ <strong>> 1000 người/h</strong> và xe cơ giới <strong>> 2000 xe quy đổi/h</strong>.</li>
      </ul>
    `
  },

  // =========================================================================
  // 11. QCVN 10:2024/BXD (NGƯỜI KHUYẾT TẬT TIẾP CẬN)
  // =========================================================================
  {
    code: "QCVN 10:2024/BXD",
    title: "Quy chuẩn kỹ thuật quốc gia về Xây dựng công trình đảm bảo người khuyết tật tiếp cận sử dụng",
    category: "Tiếp cận & Công cộng",
    keywords: "nguoi khuyet tat xe lan tiep can duong doc chieu nghi tay vin thang may cua di nha ve sinh khuyet tat khoang do xe qcvn 10 10 2024",
    summary: "Đường dốc xe lăn (rộng ≥ 1,2m, dốc ≤ 1/12, phân đoạn ≤ 9m), chiếu nghỉ, tay vịn 2 cao độ (0,9m & 0,65m), cửa ≥ 0,9m, buồng thang máy, WC tiếp cận (≥ 1,5x1,9m) và ô đỗ xe ≥ 3,5m.",
    pdfUrl: "pdf/QCVN_10_2024.pdf",
    details: `
      <h4>1. Bảng chỉ tiêu và thông số kỹ thuật bắt buộc</h4>
      <table class="specs-table">
        <tr><th>Hạng mục</th><th>Chỉ tiêu / Quy định kỹ thuật</th><th>Thông số kỹ thuật bắt buộc</th></tr>
        <tr><td><strong>Đường dốc cho xe lăn</strong></td><td>Chiều rộng thông thủy, độ dốc tối đa và chiều dài phân đoạn</td><td>Chiều rộng: <strong>≥ 1,2 m</strong>; Độ dốc: <strong>≤ 1/12 (8,33%)</strong>; Chiều dài mỗi đoạn dốc: <strong>≤ 9,0 m</strong></td></tr>
        <tr><td><strong>Chiếu nghỉ đường dốc</strong></td><td>Kích thước chiếu nghỉ giữa các đoạn dốc hoặc tại điểm đổi hướng</td><td>Chiều dài: <strong>≥ 1,5 m</strong>; Điểm quay xe 180°: <strong>≥ 1,5 m × 1,5 m</strong></td></tr>
        <tr><td><strong>Tay vịn</strong></td><td>Chiều cao lắp đặt tay vịn tại đường dốc, bậc cấp</td><td><strong>2 cao độ:</strong> 0,9 m (người lớn) và 0,65 m (trẻ em/xe lăn); vươn dài thêm <strong>≥ 0,3 m</strong> ở hai đầu</td></tr>
        <tr><td><strong>Lối vào & Cửa đi</strong></td><td>Chiều rộng thông thủy của cửa đi chính; gờ cửa</td><td>Chiều rộng thông thủy: <strong>≥ 0,9 m</strong>; Ngưỡng cửa: <strong>≤ 20 mm</strong> (phải vát nghiêng)</td></tr>
        <tr><td><strong>Bậc cấp lối đi bộ</strong></td><td>Kích thước mặt bậc và cổ bậc bên ngoài công trình</td><td>Chiều cao bậc (h): <strong>≤ 150 mm</strong>; Chiều rộng mặt bậc (b): <strong>≥ 300 mm</strong>; Không làm mũi bậc nhô ra</td></tr>
        <tr><td><strong>Thang máy tiếp cận</strong></td><td>Kích thước thông thủy cửa và buồng thang máy</td><td>Cửa mở thông thủy: <strong>≥ 0,9 m</strong>; Buồng thang: <strong>≥ 1,1 m × 1,4 m</strong>; Bàn phím nút bấm cao từ <strong>0,9 m – 1,2 m</strong></td></tr>
        <tr><td><strong>Khu vệ sinh tiếp cận</strong></td><td>Không gian sử dụng cho 1 phòng vệ sinh riêng biệt</td><td>Kích thước phòng: <strong>≥ 1,5 m × 1,9 m</strong> (hoặc diện tích quay xe đường kính <strong>≥ 1,5 m</strong>)</td></tr>
        <tr><td><strong>Vị trí đỗ xe</strong></td><td>Kích thước khoang đỗ dành riêng cho người khuyết tật</td><td>Chiều rộng: <strong>≥ 3,5 m</strong> (gồm khoang xe 2,5 m + dải tiếp cận an toàn 1,0 m)</td></tr>
      </table>

      <h4>2. Lối đi bộ & Cảnh báo xúc giác / thị giác</h4>
      <ul>
        <li>Bề mặt lối đi phải phẳng, chống trơn trượt, không đọng nước; gờ chuyển tiếp cao độ không vượt quá <strong>5 mm</strong>.</li>
        <li>Bố trí tấm lát dẫn hướng (khối gạch sọc) và tấm lát dừng cảnh báo (khối gạch chấm bi tròn) tại các điểm giao cắt, đầu mối đường dốc, mép bậc cấp thang bộ hoặc trước cửa thang máy.</li>
        <li>Chiều cao thông thủy tuyến đường đi bộ ngoài trời và hành lang bên trong không thấp hơn <strong>2,2 m</strong>.</li>
      </ul>

      <h4>3. Thiết bị vệ sinh chuyên dụng</h4>
      <ul>
        <li><strong>Bệ xí:</strong> Chiều cao mặt ngồi từ <strong>400 mm – 450 mm</strong> tính từ mặt sàn; khoảng cách từ tâm bệ xí đến bức tường gắn tay vịn bên cạnh từ <strong>450 mm – 500 mm</strong>.</li>
        <li><strong>Chậu rửa:</strong> Chiều cao mép trên từ <strong>750 mm – 800 mm</strong>; khoảng trống dưới gầm chậu sâu <strong>≥ 200 mm</strong> và cao <strong>≥ 650 mm</strong> để chân người đi xe lăn lọt vào.</li>
        <li><strong>Thanh tay vịn an toàn:</strong> Bắt buộc bố trí ở cả bệ xí và chậu rửa; tay vịn phải chịu được tải trọng uốn tối thiểu <strong>1,0 kN</strong> theo mọi hướng.</li>
      </ul>

      <h4>4. Khu vực công cộng, Khán phòng & Báo hiệu</h4>
      <ul>
        <li>Bố trí tối thiểu từ <strong>1% đến 2%</strong> tổng số chỗ ngồi (tối thiểu 1 vị trí) dành riêng cho người đi xe lăn trong rạp hát, hội trường, nhà thi đấu, sân vận động. Mặt sàn phẳng, kích thước 1 vị trí ngồi xe lăn tối thiểu <strong>0,9 m × 1,4 m</strong>.</li>
        <li>Quầy giao dịch, tiếp tân công cộng phải có đoạn hạ thấp mặt bàn từ <strong>700 mm – 800 mm</strong> cùng khoảng trống gầm bàn để tiếp cận.</li>
        <li>Biểu tượng quốc tế ISA tại các vị trí tiếp cận; bảng tên phòng và nút bấm thang máy phải tích hợp chữ nổi Braille; báo cháy/thoát nạn kết hợp âm thanh và đèn chớp sáng cảnh báo.</li>
      </ul>
    `
  }
];