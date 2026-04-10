USE webnuochoa;

-- ============================================================
-- THÊM 10 SẢN PHẨM MỖI THƯƠNG HIỆU (8 brands × 10 = 80 sp)
-- brandId: 1=Chanel 2=Dior 3=Gucci 4=Tom Ford
--           5=Versace 6=YSL 7=Armani 8=Maison Margiela
-- catId:   1=Nam  2=Nữ  3=Unisex
-- ============================================================

INSERT IGNORE INTO products
  (name, slug, shortDescription, brandId, categoryId, concentration, gender, originCountry,
   topNotes, middleNotes, baseNotes, longevity, sillage, thumbnail, isFeatured, isActive, createdAt, updatedAt)
VALUES

-- ═══════════════════════════════════════════════
-- CHANEL (brandId=1) — thêm 10 sp (đã có 2)
-- ═══════════════════════════════════════════════
('Chanel Coco Mademoiselle EDP',
 'chanel-coco-mademoiselle-edp',
 'Quyến rũ, trẻ trung và độc lập – biểu tượng phụ nữ hiện đại Chanel',
 1, 2, 'EDP', 'FEMALE', 'Pháp',
 'Cam quýt, Grapefruit, Bergamot',
 'Hoa hồng Thổ Nhĩ Kỳ, Hoa nhài, Mimosa',
 'Patchouli, Vetiver, Xạ hương trắng',
 8, 4, 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Chanel Allure Homme Sport EDT',
 'chanel-allure-homme-sport-edt',
 'Năng động, tươi mát – dành cho nam giới năng động',
 1, 1, 'EDT', 'MALE', 'Pháp',
 'Bạc hà, Cam, Elemi',
 'Aldehyde, Lá ngải cứu, Cedarmoss',
 'Gỗ tuyết tùng, Vanilla, Xạ hương trắng',
 6, 3, 'https://images.unsplash.com/photo-1558618047-51c0c8a82ba8?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Chanel Chance Eau Tendre EDP',
 'chanel-chance-eau-tendre-edp',
 'Nhẹ nhàng, trong sáng và lãng mạn từ dòng Chance',
 1, 2, 'EDP', 'FEMALE', 'Pháp',
 'Grapefruit, Quince',
 'Hoa nhài, Hoa hồng',
 'Xạ hương trắng, Iris, Hổ phách trắng',
 7, 3, 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Chanel Egoiste EDT',
 'chanel-egoiste-edt',
 'Mộc mạc, lịch lãm – kinh điển nam tính Chanel',
 1, 1, 'EDT', 'MALE', 'Pháp',
 'Hương thảo, Coriander, Bergamot',
 'Gỗ tuyết tùng, Aldehydes, Labdanum',
 'Vanilla, Xạ hương, Gỗ đàn hương',
 7, 3, 'https://images.unsplash.com/photo-1558618047-51c0c8a82ba8?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Chanel Gabrielle EDP',
 'chanel-gabrielle-edp',
 'Nữ tính, trong sáng – lấy cảm hứng từ cuộc đời Coco Chanel',
 1, 2, 'EDP', 'FEMALE', 'Pháp',
 'Mandarin, Cassis',
 'Hoa tuberose, Hoa nhài, Ylang-ylang',
 'Xạ hương, Gỗ đàn hương, Hoa sữa',
 8, 3, 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Chanel Platinum Egoiste EDT',
 'chanel-platinum-egoiste-edt',
 'Thanh lịch, sang trọng – đẳng cấp quý ông Chanel',
 1, 1, 'EDT', 'MALE', 'Pháp',
 'Bergamot, Cam, Lavender',
 'Hoa hồng, Geranium, Sage',
 'Gỗ đàn hương, Hổ phách, Xạ hương',
 7, 3, 'https://images.unsplash.com/photo-1558618047-51c0c8a82ba8?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Chanel Les Exclusifs 1932 EDP',
 'chanel-les-exclusifs-1932-edp',
 'Hoa nhài và gỗ – tinh hoa từ dòng nước hoa độc quyền Chanel',
 1, 3, 'EDP', 'UNISEX', 'Pháp',
 'Grapefruit, Bergamot',
 'Hoa nhài Grasse, Aldehyde',
 'Xạ hương, Vetiver, Gỗ đàn hương',
 9, 3, 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Chanel Sycomore EDP',
 'chanel-sycomore-edp',
 'Hương khói và gỗ linh sam – cá tính và độc đáo',
 1, 3, 'EDP', 'UNISEX', 'Pháp',
 'Vetiver, Juniper',
 'Gỗ tuyết tùng, Hoa mimosa',
 'Xạ hương khói, Gỗ đàn hương, Iris',
 10, 4, 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Chanel Allure EDP',
 'chanel-allure-edp',
 'Cổ điển và nữ tính – vẻ đẹp vượt thời gian Chanel',
 1, 2, 'EDP', 'FEMALE', 'Pháp',
 'Mandarin, Bergamot, Hoa cam',
 'Magnolia, Hoa hồng, Hoa nhài',
 'Vanilla, Vetiver, Xạ hương',
 7, 3, 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Chanel Bleu de Chanel Parfum',
 'chanel-bleu-de-chanel-parfum',
 'Phiên bản Parfum đậm đà hơn của Bleu de Chanel huyền thoại',
 1, 1, 'PARFUM', 'MALE', 'Pháp',
 'Chanh, Gừng, Tiêu hồng',
 'Hoa nhài, Labdanum, Gỗ đàn hương',
 'Vetiver, Gỗ tuyết tùng, Xạ hương',
 12, 4, 'https://images.unsplash.com/photo-1558618047-51c0c8a82ba8?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

-- ═══════════════════════════════════════════════
-- DIOR (brandId=2) — thêm 10 sp (đã có 2)
-- ═══════════════════════════════════════════════
('Dior Homme Intense EDP',
 'dior-homme-intense-edp',
 'Hương hoa diên vỹ nam tính và đầy cuốn hút',
 2, 1, 'EDP', 'MALE', 'Pháp',
 'Lavender, Lemon',
 'Iris, Đậu tonka, Ambrette',
 'Gỗ đàn hương, Vetiver, Xạ hương',
 8, 3, 'https://images.unsplash.com/photo-1594736797933-d0981ba8fe89?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Dior J''adore EDP',
 'dior-jadore-edp',
 'Bông hoa vĩnh cửu – biểu tượng nữ giới sang trọng của Dior',
 2, 2, 'EDP', 'FEMALE', 'Pháp',
 'Champagne, Melon, Magnolia',
 'Hoa hồng, Hoa nhài Sambac, Tuberose',
 'Xạ hương, Blackberry musk',
 8, 4, 'https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Dior Fahrenheit EDT',
 'dior-fahrenheit-edt',
 'Độc đáo, phá cách – hương nước hoa nam huyền thoại của Dior',
 2, 1, 'EDT', 'MALE', 'Pháp',
 'Hoa cam, Mandarin, Heliotrope',
 'Hạt nhục đậu khấu, Gỗ tuyết tùng, Súng vàng',
 'Xã hương, Da thuộc, Xạ hương',
 8, 4, 'https://images.unsplash.com/photo-1594736797933-d0981ba8fe89?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Dior Hypnotic Poison EDT',
 'dior-hypnotic-poison-edt',
 'Ma mị, huyền bí – mùi hương thôi miên của Dior',
 2, 2, 'EDT', 'FEMALE', 'Pháp',
 'Hoa cam đắng, Hoa almond',
 'Nhân almond đắng, Caraway, Bruyère',
 'Vanilla, Xạ hương, Gỗ đàn hương',
 8, 4, 'https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Dior Eau Savage Parfum',
 'dior-eau-sauvage-parfum',
 'Thơm mát, tươi sáng – phiên bản Parfum tinh tế của Eau Sauvage',
 2, 1, 'PARFUM', 'MALE', 'Pháp',
 'Bergamot, Hoa nhài, Basil',
 'Hương thảo, Sage, Patchouli',
 'Gỗ đàn hương, Vetiver, Xạ hương',
 10, 4, 'https://images.unsplash.com/photo-1594736797933-d0981ba8fe89?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Dior Poison Girl EDP',
 'dior-poison-girl-edp',
 'Ngọt ngào, táo bạo và nữ tính bất ngờ',
 2, 2, 'EDP', 'FEMALE', 'Pháp',
 'Cam đắng, Hoa cam',
 'Hoa hồng tuyết, Ylang-ylang',
 'Vanilla bourbon, Benzoin, Xạ hương',
 8, 3, 'https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Dior Gris Montaigne EDP',
 'dior-gris-montaigne-edp',
 'Vải may đo và hoa – tinh thần may mặc cao cấp của Dior',
 2, 3, 'EDP', 'UNISEX', 'Pháp',
 'Hoa cam, Bergamot',
 'Hoa hồng Roland, Peony',
 'Gỗ đàn hương, Xạ hương, Patchouli',
 9, 3, 'https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Dior La Nuit Tresor EDP',
 'dior-la-nuit-tresor-edp',
 'Đêm tình yêu – hương hoa quả mọng và văn-ni lãng mạn',
 2, 2, 'EDP', 'FEMALE', 'Pháp',
 'Lychee, Đào, Mâm xôi',
 'Hoa hồng đen, Hoa nhài',
 'Vanilla đen, Xạ hương, Patchouli',
 9, 4, 'https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Dior Homme Cologne',
 'dior-homme-cologne',
 'Tươi sáng và sạch sẽ – tinh thần quý ông hiện đại',
 2, 1, 'EDC', 'MALE', 'Pháp',
 'Lemon, Bergamot, Grapefruit',
 'Iris, Hương thảo, Basil',
 'Vetiver, Xạ hương trắng, Gỗ tuyết tùng',
 5, 2, 'https://images.unsplash.com/photo-1594736797933-d0981ba8fe89?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Dior Dune EDT',
 'dior-dune-edt',
 'Cát biển và gió – cảm giác tự do bất tận',
 2, 3, 'EDT', 'UNISEX', 'Pháp',
 'Aldehydes, Hoa cam, Bergamot',
 'Peony, Hoa hồng, Ý hương',
 'Hổ phách, Gỗ đàn hương, Xạ hương',
 7, 3, 'https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

-- ═══════════════════════════════════════════════
-- GUCCI (brandId=3) — thêm 10 sp (đã có 1)
-- ═══════════════════════════════════════════════
('Gucci Flora Gorgeous Gardenia EDP',
 'gucci-flora-gorgeous-gardenia-edp',
 'Hoa gardenia tươi sáng – cảm giác mùa hè ngọt ngào',
 3, 2, 'EDP', 'FEMALE', 'Ý',
 'Hoa cam hồng, Hoa ban trắng',
 'Gardenia, Frangipani',
 'Xạ hương trắng, Gỗ đàn hương, Hổ phách',
 7, 3, 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Gucci Guilty Pour Homme EDT',
 'gucci-guilty-pour-homme-edt',
 'Lemon, lavender và gỗ – sự quyến rũ táo bạo cho nam',
 3, 1, 'EDT', 'MALE', 'Ý',
 'Lemon, Lavender',
 'Hoa cam, Neroli',
 'Gỗ đàn hương, Patchouli, Hổ phách',
 7, 3, 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Gucci Bloom EDP',
 'gucci-bloom-edp',
 'Bạch hoa xuyến chi trắng tinh khôi – vẻ đẹp thuần khiết nước Ý',
 3, 2, 'EDP', 'FEMALE', 'Ý',
 'Hoa cam, Tuberose',
 'Hoa nhài, Rangoon creeper',
 'Xạ hương, Gỗ đàn hương',
 8, 3, 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Gucci Envy Me EDT',
 'gucci-envy-me-edt',
 'Ngọt ngào và trẻ trung – duyên dáng phụ nữ Ý',
 3, 2, 'EDT', 'FEMALE', 'Ý',
 'Lychee, Hoa cam hồng, Watermelon',
 'Hoa hồng, Freesia, Cyclamen',
 'Xạ hương, Gỗ đàn hương, Hổ phách',
 6, 3, 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Gucci Pour Homme EDT',
 'gucci-pour-homme-edt',
 'Tinh tế và mạnh mẽ – hương nước hoa nam kinh điển của Gucci',
 3, 1, 'EDT', 'MALE', 'Ý',
 'Bergamot, Lavender',
 'Hương thảo, Gỗ tuyết tùng',
 'Da thuộc, Xạ hương, Patchouli',
 7, 3, 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Gucci Memoire d''une Odeur EDP',
 'gucci-memoire-dune-odeur-edp',
 'Ký ức thuần khiết – mùi hương tối giản cho mọi giới tính',
 3, 3, 'EDP', 'UNISEX', 'Ý',
 'Hoa cúc Roman, Bergamot',
 'Hoa nhài Sambac, Hoa cúc Ý',
 'Xạ hương không khí, Gỗ đàn hương, Vanilla',
 8, 3, 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Gucci Rush EDT',
 'gucci-rush-edt',
 'Sôi động, phóng khoáng – scent của phụ nữ không giới hạn',
 3, 2, 'EDT', 'FEMALE', 'Ý',
 'Freesia, Coriander, Peach',
 'Hoa hồng, Magnolia, Iris',
 'Vanilla, Patchouli, Vetiver',
 7, 3, 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Gucci Guilty Intense EDP',
 'gucci-guilty-intense-edp',
 'Phiên bản đậm đà hơn của Gucci Guilty – đam mê bất tận',
 3, 2, 'EDP', 'FEMALE', 'Ý',
 'Bergamot, Hoa cam hồng',
 'Hoa đào, Hoa hồng lilac',
 'Xạ hương, Gỗ đàn hương, Patchouli',
 8, 4, 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Gucci Alchemist''s Garden A song for the rose EDP',
 'gucci-alchemists-garden-a-song-for-the-rose-edp',
 'Vườn hoa hồng bí ẩn – dòng The Alchemist''s Garden độc đáo',
 3, 3, 'EDP', 'UNISEX', 'Ý',
 'Hoa hồng Centifolia',
 'Gỗ tuyết tùng, Hoa nhài',
 'Xạ hương, Gỗ đàn hương, Mastic',
 9, 3, 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Gucci Made to Measure EDT',
 'gucci-made-to-measure-edt',
 'Gỗ và gia vị – thêu may đo dành cho đàn ông thành đạt',
 3, 1, 'EDT', 'MALE', 'Ý',
 'Tiêu hồng, Bergamot, Chanh',
 'Hoa oải hương, Gỗ tuyết tùng',
 'Gỗ đàn hương, Xạ hương, Hổ phách',
 7, 3, 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

-- ═══════════════════════════════════════════════
-- TOM FORD (brandId=4) — thêm 10 sp (đã có 2)
-- ═══════════════════════════════════════════════
('Tom Ford Tobacco Vanille EDP',
 'tom-ford-tobacco-vanille-edp',
 'Thuốc lá và vanilla – mùi ấm nồng nàn của Tom Ford Private Blend',
 4, 3, 'EDP', 'UNISEX', 'Mỹ',
 'Thuốc lá, Gia vị',
 'Vanilla, Cacao, Tonka bean',
 'Hạt thuốc lá, Xạ hương, Gỗ đàn hương',
 12, 4, 'https://images.unsplash.com/photo-1577221866411-1c77af8d81b3?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Tom Ford Neroli Portofino EDT',
 'tom-ford-neroli-portofino-edt',
 'Tinh hoa vùng Portofino – tươi mát Địa Trung Hải',
 4, 3, 'EDT', 'UNISEX', 'Mỹ',
 'Neroli, Bergamot, Hoa cam',
 'Pitosporo, Hoa nhài Sambac',
 'Xạ hương trắng, Hổ phách, Gỗ đàn hương',
 8, 3, 'https://images.unsplash.com/photo-1577221866411-1c77af8d81b3?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Tom Ford Grey Vetiver EDP',
 'tom-ford-grey-vetiver-edp',
 'Vetiver khói và gỗ – quý ông sang trọng phong cách Tom Ford',
 4, 1, 'EDP', 'MALE', 'Mỹ',
 'Grapefruit, Salvia',
 'Orris, Sage, Oakmoss',
 'Vetiver, Gỗ đàn hương, Hổ phách',
 9, 4, 'https://images.unsplash.com/photo-1577221866411-1c77af8d81b3?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Tom Ford Velvet Orchid EDP',
 'tom-ford-velvet-orchid-edp',
 'Hoa lan nhung – gợi cảm và huyền bí cho phụ nữ',
 4, 2, 'EDP', 'FEMALE', 'Mỹ',
 'Rum, Nấm truffle đen',
 'Hoa lan, Hoa rum',
 'Labdanum, Heliotrope, Vanilla, Xạ hương',
 9, 4, 'https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Tom Ford Soleil Blanc EDP',
 'tom-ford-soleil-blanc-edp',
 'Ánh nắng trắng – xa hoa và tươi sáng mùa hè',
 4, 3, 'EDP', 'UNISEX', 'Mỹ',
 'Cardamom, Bergamot',
 'Tuberose, Hoa nhài, Ylang-ylang',
 'Coconut, Xạ hương, Gỗ đàn hương',
 8, 4, 'https://images.unsplash.com/photo-1577221866411-1c77af8d81b3?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Tom Ford Jasmin Rouge EDP',
 'tom-ford-jasmin-rouge-edp',
 'Hoa nhài đỏ thắm – nữ tính cuồng nhiệt và đầy bản lĩnh',
 4, 2, 'EDP', 'FEMALE', 'Mỹ',
 'Hoa nhài absolute',
 'Hoa ylang-ylang, Cardamom, Star anise',
 'Xạ hương, Labdanum, Hổ phách',
 9, 4, 'https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Tom Ford For Her EDP',
 'tom-ford-for-her-edp',
 'Tinh tế và sang trọng – dành riêng cho người phụ nữ Tom Ford',
 4, 2, 'EDP', 'FEMALE', 'Mỹ',
 'Bergamot, Hoa cam',
 'Iris, Hoa violet',
 'Xạ hương, Gỗ đàn hương, Vetiver',
 8, 3, 'https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Tom Ford Beau de Jour EDP',
 'tom-ford-beau-de-jour-edp',
 'Lavender và gỗ – quý ông thanh lịch ban ngày',
 4, 1, 'EDP', 'MALE', 'Mỹ',
 'Lavender, Bergamot',
 'Clary sage, Geranium',
 'Vetiver, Gỗ đàn hương, Xạ hương đen',
 8, 3, 'https://images.unsplash.com/photo-1577221866411-1c77af8d81b3?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Tom Ford Azure Lime EDC',
 'tom-ford-azure-lime-edc',
 'Xanh biển và vôi tươi – mát lành và sảng khoái',
 4, 1, 'EDC', 'MALE', 'Mỹ',
 'Lime, Bergamot, Gừng biển',
 'Violet, Lavender nước',
 'Xạ hương biển, Driftwood, Oakmoss',
 6, 3, 'https://images.unsplash.com/photo-1577221866411-1c77af8d81b3?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Tom Ford Rose Prick EDP',
 'tom-ford-rose-prick-edp',
 'Hoa hồng gai – tuyệt tác đỏ rực sang trọng của Tom Ford',
 4, 3, 'EDP', 'UNISEX', 'Mỹ',
 'Tiêu hồng, Bergamot',
 'Hoa hồng Centifolia, Hoa violet',
 'Gỗ đàn hương, Xạ hương, Vetiver',
 10, 4, 'https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

-- ═══════════════════════════════════════════════
-- VERSACE (brandId=5) — thêm 10 sp (đã có 1)
-- ═══════════════════════════════════════════════
('Versace Bright Crystal EDT',
 'versace-bright-crystal-edt',
 'Pha lê sáng rực – nữ tính tươi mát của Versace',
 5, 2, 'EDT', 'FEMALE', 'Ý',
 'Hạnh nhân, Hoa magnolia, Hoa cam',
 'Hoa mẫu đơn, Hoa nhài, Hoa sen',
 'Xạ hương, Gỗ đàn hương, Hổ phách trắng',
 6, 3, 'https://images.unsplash.com/photo-1619709114329-b595101c5342?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Versace Dylan Blue EDT',
 'versace-dylan-blue-edt',
 'Mùi hương Địa Trung Hải – mạnh mẽ và lịch lãm',
 5, 1, 'EDT', 'MALE', 'Ý',
 'Grapefruit, Bergamot, Dứa',
 'Hoa violet, Thyme, Papyrus',
 'Xạ hương, Hổ phách, Gỗ patchouli',
 8, 4, 'https://images.unsplash.com/photo-1619709114329-b595101c5342?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Versace The Dreamer EDT',
 'versace-the-dreamer-edt',
 'Giấc mơ lãng mạn – hương thuốc lá và hoa ngọt ngào',
 5, 1, 'EDT', 'MALE', 'Ý',
 'Mandarin, Bergamot, Juniper',
 'Hoa huệ, Tarragon, Iris',
 'Tabac, Ambergris, Xạ hương',
 7, 3, 'https://images.unsplash.com/photo-1619709114329-b595101c5342?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Versace Crystal Noir EDP',
 'versace-crystal-noir-edp',
 'Tinh thể đen bí ẩn – gợi cảm và sâu lắng',
 5, 2, 'EDP', 'FEMALE', 'Ý',
 'Gừng, Hoa tiêu',
 'Gardenia, Hoa nhài, Hoa cam',
 'Xạ hương, Hổ phách, Gỗ đàn hương',
 7, 3, 'https://images.unsplash.com/photo-1619709114329-b595101c5342?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Versace Versense EDT',
 'versace-versense-edt',
 'Cảm giác biển Ý – tươi mát và tự nhiên',
 5, 2, 'EDT', 'FEMALE', 'Ý',
 'Bergamot, Thyme, Chanh',
 'Hoa lily, Hoa oải hương biển, Magnolia',
 'Xạ hương trắng, Gỗ tuyết tùng, Hổ phách',
 6, 3, 'https://images.unsplash.com/photo-1619709114329-b595101c5342?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Versace Pour Homme EDT',
 'versace-pour-homme-edt',
 'Địa Trung Hải tươi mát – vẻ đẹp quý ông Ý',
 5, 1, 'EDT', 'MALE', 'Ý',
 'Bergamot, Lemon, Neroli',
 'Hải táo, Hyacinth, Sage',
 'Gỗ đàn hương, Xạ hương, Gỗ tuyết tùng',
 6, 3, 'https://images.unsplash.com/photo-1619709114329-b595101c5342?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Versace Eros Flame EDP',
 'versace-eros-flame-edp',
 'Ngọn lửa đam mê – phiên bản EDP nồng nàn của Eros',
 5, 1, 'EDP', 'MALE', 'Ý',
 'Cam ngọt, Lemon, Bưởi',
 'Tiêu đen, Hoa hồng, Rosemary',
 'Gỗ đàn hương, Hổ phách, Gỗ tuyết tùng',
 8, 4, 'https://images.unsplash.com/photo-1619709114329-b595101c5342?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Versace Gianni Versace Couture EDT',
 'versace-gianni-versace-couture-edt',
 'Xa hoa và lộng lẫy – mùi hương thời trang cao cấp Versace',
 5, 2, 'EDT', 'FEMALE', 'Ý',
 'Bergamot, Melon, Chanh vàng',
 'Hoa hồng, Hoa nhài, Tuberose',
 'Xạ hương, Gỗ đàn hương, Hổ phách',
 7, 3, 'https://images.unsplash.com/photo-1619709114329-b595101c5342?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Versace Atelier Versace Éclat de Rose EDP',
 'versace-atelier-eclat-de-rose-edp',
 'Tia sáng hoa hồng – vẻ đẹp sang trọng từ Atelier Versace',
 5, 3, 'EDP', 'UNISEX', 'Ý',
 'Bergamot, Grapefruit',
 'Hoa hồng Grasse, Hoa violet',
 'Xạ hương, Gỗ đàn hương, Hổ phách trắng',
 8, 3, 'https://images.unsplash.com/photo-1619709114329-b595101c5342?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Versace Atelier Versace Bois d''Encens EDP',
 'versace-atelier-bois-dencens-edp',
 'Nhang trầm và gỗ – hương thiền định đặc biệt từ Versace',
 5, 3, 'EDP', 'UNISEX', 'Ý',
 'Gừng, Hoa cam',
 'Nhang trầm, Hoa nhài',
 'Gỗ đàn hương, Xạ hương, Oud',
 10, 4, 'https://images.unsplash.com/photo-1619709114329-b595101c5342?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

-- ═══════════════════════════════════════════════
-- YSL (brandId=6) — thêm 10 sp (đã có 2)
-- ═══════════════════════════════════════════════
('YSL Mon Paris EDP',
 'ysl-mon-paris-edp',
 'Tình yêu Paris – hương trái cây và musk lãng mạn',
 6, 2, 'EDP', 'FEMALE', 'Pháp',
 'Dâu tây, Mâm xôi, Lý chua đen',
 'Hoa mẫu đơn, Hoa nhài, Tiêu trắng',
 'Xạ hương trắng, Patchouli, Ambrette',
 8, 4, 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('YSL L''Homme EDP',
 'ysl-lhomme-edp',
 'Sang trọng, thanh lịch và quyền lực – đại diện quý ông YSL',
 6, 1, 'EDP', 'MALE', 'Pháp',
 'Bergamot, Verveine, Gừng',
 'Hoa nhài, Hoa tử đinh hương',
 'Gỗ đàn hương, Đậu tonka, Gỗ tuyết tùng',
 8, 3, 'https://images.unsplash.com/photo-1588134818669-d7b6bd76e41f?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('YSL Opium EDP',
 'ysl-opium-edp',
 'Huyền thoại phương Đông bí ẩn – kiệt tác nữ quyền',
 6, 2, 'EDP', 'FEMALE', 'Pháp',
 'Hoa cam, Bergamot, Coriander',
 'Hoa hồng, Ylang-ylang, Lily',
 'Gỗ đàn hương, Hổ phách, Xạ hương',
 10, 5, 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('YSL Y EDP',
 'ysl-y-edp',
 'Táo bạo, sang trọng, Y của đàn ông hiện đại',
 6, 1, 'EDP', 'MALE', 'Pháp',
 'Ginger, Bergamot',
 'Sage, Geranium, Hoa oải hương',
 'Hổ phách, Gỗ tuyết tùng, Gỗ đàn hương',
 8, 4, 'https://images.unsplash.com/photo-1588134818669-d7b6bd76e41f?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('YSL Touche Eclat Radiant Touch EDP',
 'ysl-touche-eclat-radiant-touch-edp',
 'Ánh sáng rực rỡ – tinh tế và tươi sáng cho phụ nữ',
 6, 2, 'EDP', 'FEMALE', 'Pháp',
 'Bergamot, Mandarin, Lemon',
 'Hoa nhài trắng, Gỗ tuyết tùng',
 'Xạ hương trắng, Hổ phách, Gỗ đàn hương',
 7, 3, 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('YSL In Love Again EDT',
 'ysl-in-love-again-edt',
 'Yêu lại một lần nữa – ngọt ngào và đầy cảm xúc',
 6, 2, 'EDT', 'FEMALE', 'Pháp',
 'Lemon, Hoa cam, Hoa bell',
 'Magnolia, Lily of the valley',
 'Xạ hương, Gỗ đàn hương',
 6, 2, 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('YSL Kouros EDT',
 'ysl-kouros-edt',
 'Khỏe khoắn, kiêu hãnh – bất tử trong lịch sử nước hoa nam',
 6, 1, 'EDT', 'MALE', 'Pháp',
 'Bergamot, Coriander, Hoa cam',
 'Hoa nhài, Carnation, Hương trầm',
 'Hổ phách, Da thuộc, Xạ hương',
 8, 5, 'https://images.unsplash.com/photo-1588134818669-d7b6bd76e41f?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('YSL La Nuit de l''Homme EDT',
 'ysl-la-nuit-de-lhomme-edt',
 'Đêm quý ông – hương lavender và cardamom huyền mê',
 6, 1, 'EDT', 'MALE', 'Pháp',
 'Cardamom, Bergamot',
 'Lavender, Cèdre',
 'Vetiver, Tonka bean, Gỗ đàn hương',
 8, 4, 'https://images.unsplash.com/photo-1588134818669-d7b6bd76e41f?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('YSL Forêt d''Orient EDP',
 'ysl-foret-dorient-edp',
 'Khu rừng phương Đông – huyền bí và kỳ lạ từ YSL',
 6, 3, 'EDP', 'UNISEX', 'Pháp',
 'Bergamot, Hoa cam',
 'Oud, Hoa hồng',
 'Gỗ đàn hương, Xạ hương, Hổ phách',
 10, 4, 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('YSL Elle EDP',
 'ysl-elle-edp',
 'Cô ấy – nước hoa floral spicy rực rỡ đặc trưng YSL',
 6, 2, 'EDP', 'FEMALE', 'Pháp',
 'Tiêu hồng, Gừng, Saffron',
 'Hoa mẫu đơn, Hoa violet',
 'Patchouli, Gỗ tuyết tùng, Vetiver',
 8, 3, 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

-- ═══════════════════════════════════════════════
-- GIORGIO ARMANI (brandId=7) — thêm 10 sp (đã có 2)
-- ═══════════════════════════════════════════════
('Armani Code EDP',
 'armani-code-edp',
 'Bí ẩn, cuốn hút – mật mã quyến rũ của đàn ông Armani',
 7, 1, 'EDP', 'MALE', 'Ý',
 'Bergamot, Lemon, Hoa cam',
 'Hoa nhài, Guaiac wood',
 'Đậu tonka, Gỗ đàn hương, Xạ hương',
 9, 4, 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Armani My Way EDP',
 'armani-my-way-edp',
 'Theo cách của tôi – kết nối bản thân và thế giới',
 7, 2, 'EDP', 'FEMALE', 'Ý',
 'Bergamot, Neroli',
 'Hoa nhài Sambac, Hoa tuberose, Hoa cam',
 'Gỗ đàn hương, Xạ hương trắng, Vanilla',
 9, 4, 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Armani Acqua di Gio Profumo EDP',
 'armani-acqua-di-gio-profumo-edp',
 'Phiên bản EDP đậm đà của biểu tượng hương biển',
 7, 1, 'EDP', 'MALE', 'Ý',
 'Bergamot, Hương biển',
 'Hương trầm, Labdanum, Sage',
 'Xạ hương, Gỗ patchouli, Gỗ tuyết tùng',
 10, 4, 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Armani Sì Passione EDP',
 'armani-si-passione-edp',
 'Đam mê cuồng nhiệt – bản mới đầy năng lượng của Armani Sì',
 7, 2, 'EDP', 'FEMALE', 'Ý',
 'Mâm xôi đen, Bergamot',
 'Hoa hồng, Hoa nhài',
 'Patchouli đen, Vanilla, Xạ hương',
 8, 4, 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Armani Stronger With You EDP',
 'armani-stronger-with-you-edp',
 'Mạnh mẽ hơn với em – vanilla và gia vị ấm áp lãng mạn',
 7, 1, 'EDP', 'MALE', 'Ý',
 'Tiêu hồng, Cardamom, Sage',
 'Violet, Freesia',
 'Đậu tonka, Vanilla, Caramel',
 9, 4, 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Armani Diamonds EDP',
 'armani-diamonds-edp',
 'Kim cương trong suốt – tinh túy nữ giới không tì vết',
 7, 2, 'EDP', 'FEMALE', 'Ý',
 'Lychee, Bergamot',
 'Hoa hồng, Freesia',
 'Patchouli, Vetiver, Xạ hương trắng',
 7, 3, 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Armani Emporio He EDT',
 'armani-emporio-he-edt',
 'Trẻ trung, sôi động – tinh thần tự do của Emporio Armani',
 7, 1, 'EDT', 'MALE', 'Ý',
 'White pepper, Neroli, Grapefruit',
 'Driftwood, Aquatic notes',
 'Gỗ tuyết tùng, Vetiver, Xạ hương',
 6, 3, 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Armani Mania EDP',
 'armani-mania-edp',
 'Điên cuồng với tình yêu – hương hoa tinh tế cho nữ',
 7, 2, 'EDP', 'FEMALE', 'Ý',
 'Hoa cam, Bergamot',
 'Hoa nhài, Hoa hồng, Iris',
 'Xạ hương, Gỗ đàn hương, Hổ phách',
 7, 3, 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Armani Privé Rose d''Arabie EDP',
 'armani-prive-rose-darabie-edp',
 'Hoa hồng và Oud xứ Ả Rập – sang trọng và bí ẩn Privé',
 7, 3, 'EDP', 'UNISEX', 'Ý',
 'Hoa hồng, Bergamot',
 'Hoa nhài, Rose absolute',
 'Oud, Gỗ đàn hương, Xạ hương',
 12, 5, 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Armani Privé Bois d''Encens EDP',
 'armani-prive-bois-dencens-edp',
 'Nhang trầm và gỗ tinh khiết – thiền định từ Armani Privé',
 7, 3, 'EDP', 'UNISEX', 'Ý',
 'Hoa cam, Bergamot',
 'Hương trầm, Tiêu trắng',
 'Gỗ đàn hương, Hổ phách, Xạ hương',
 10, 4, 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

-- ═══════════════════════════════════════════════
-- MAISON MARGIELA (brandId=8) — thêm 10 sp (đã có 2)
-- ═══════════════════════════════════════════════
('Maison Margiela Replica Flower Market EDT',
 'maison-margiela-replica-flower-market-edt',
 'Chợ hoa sáng sớm – tươi mát như bó hoa vừa hái',
 8, 3, 'EDT', 'UNISEX', 'Pháp',
 'Violet, Hoa cam, Lily of the valley',
 'Hoa hồng, Hoa nhài, Freesia',
 'Xạ hương trắng, Gỗ đàn hương',
 7, 3, 'https://images.unsplash.com/photo-1564805356-b7b334b50b2c?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Maison Margiela Replica By The Fireplace EDT',
 'maison-margiela-replica-by-the-fireplace-edt',
 'Bên lò sưởi – ấm áp với hương khói, vanilla và clove',
 8, 3, 'EDT', 'UNISEX', 'Pháp',
 'Tiêu, Clove',
 'Chestnut, Guaiac wood',
 'Hổ phách trắng, Vanilla, Peru balsam',
 8, 3, 'https://images.unsplash.com/photo-1564805356-b7b334b50b2c?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Maison Margiela Replica Beach Walk EDT',
 'maison-margiela-replica-beach-walk-edt',
 'Bước đi trên bãi biển – hương kem chống nắng và coconut',
 8, 3, 'EDT', 'UNISEX', 'Pháp',
 'Bergamot, Citrus',
 'Hoa ylang-ylang, Coconut',
 'Vanilla, Xạ hương trắng, Gỗ đàn hương',
 7, 3, 'https://images.unsplash.com/photo-1564805356-b7b334b50b2c?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Maison Margiela Replica At The Barber''s EDT',
 'maison-margiela-replica-at-the-barbers-edt',
 'Tiệm cắt tóc ông – kem cạo râu và gỗ ấm áp',
 8, 1, 'EDT', 'MALE', 'Pháp',
 'Bergamot, Cam',
 'Kem cạo râu, Geranium',
 'Gỗ tuyết tùng, Vetiver, Xạ hương',
 7, 3, 'https://images.unsplash.com/photo-1564805356-b7b334b50b2c?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Maison Margiela Replica Matcha Meditation EDT',
 'maison-margiela-replica-matcha-meditation-edt',
 'Thiền định với trà xanh – thanh thản và nhẹ nhàng',
 8, 3, 'EDT', 'UNISEX', 'Pháp',
 'Trà xanh, Bergamot',
 'Matcha, Gỗ tuyết tùng',
 'Xạ hương trắng, Gỗ đàn hương',
 6, 2, 'https://images.unsplash.com/photo-1564805356-b7b334b50b2c?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Maison Margiela Replica When the Rain Breaks EDT',
 'maison-margiela-replica-when-the-rain-breaks-edt',
 'Khi cơn mưa tan – mùi đất ướt và không khí trong lành',
 8, 3, 'EDT', 'UNISEX', 'Pháp',
 'Petrichor, Bergamot',
 'Lá xanh, Hoa tím',
 'Đất ẩm, Xạ hương, Vetiver',
 6, 3, 'https://images.unsplash.com/photo-1564805356-b7b334b50b2c?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Maison Margiela Replica Sailing Day EDT',
 'maison-margiela-replica-sailing-day-edt',
 'Ngày ra khơi – gió biển và gỗ trên boong tàu',
 8, 1, 'EDT', 'MALE', 'Pháp',
 'Bergamot, Hương biển',
 'Geranium, Tiêu',
 'Gỗ tuyết tùng, Driftwood, Xạ hương',
 7, 3, 'https://images.unsplash.com/photo-1564805356-b7b334b50b2c?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Maison Margiela Replica Springtime in a Park EDT',
 'maison-margiela-replica-springtime-in-a-park-edt',
 'Mùa xuân trong công viên – cỏ xanh và hoa tươi',
 8, 2, 'EDT', 'FEMALE', 'Pháp',
 'Bergamot, Lemon, Green notes',
 'Lily of the valley, Hoa hồng, Magnolia',
 'Xạ hương trắng, Gỗ đàn hương',
 6, 2, 'https://images.unsplash.com/photo-1564805356-b7b334b50b2c?w=500&h=500&fit=crop', 1, 1, NOW(), NOW()),

('Maison Margiela Replica Under the Lemon Trees EDT',
 'maison-margiela-replica-under-the-lemon-trees-edt',
 'Dưới tán chanh – tươi mát như buổi sáng Địa Trung Hải',
 8, 3, 'EDT', 'UNISEX', 'Pháp',
 'Lemon, Bergamot, Verbena',
 'Hoa nhài, Rosemary',
 'Xạ hương trắng, Gỗ tuyết tùng',
 6, 3, 'https://images.unsplash.com/photo-1564805356-b7b334b50b2c?w=500&h=500&fit=crop', 0, 1, NOW(), NOW()),

('Maison Margiela Replica Whispers in the Library EDP',
 'maison-margiela-replica-whispers-in-the-library-edp',
 'Tiếng thì thầm trong thư viện – gỗ, da và vanilla ấm áp',
 8, 3, 'EDP', 'UNISEX', 'Pháp',
 'Lemon, Cam',
 'Da thuộc, Hương gỗ',
 'Vanilla, Tonka bean, Xạ hương',
 8, 3, 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&h=500&fit=crop', 0, 1, NOW(), NOW());

-- ═══════════════════════════════════════════════════════
-- THÊM VARIANTS CHO TẤT CẢ SẢN PHẨM MỚI
-- ═══════════════════════════════════════════════════════
INSERT IGNORE INTO product_variants (productId, volume, price, stock, sku)
SELECT p.id, v.volume, v.price, v.stock, v.sku
FROM products p
JOIN (
  -- CHANEL new products
  SELECT 'chanel-coco-mademoiselle-edp' AS slug, 35 AS volume, 2900000 AS price, 60 AS stock, 'CHA-CME-35' AS sku UNION ALL
  SELECT 'chanel-coco-mademoiselle-edp', 50, 3900000, 80, 'CHA-CME-50' UNION ALL
  SELECT 'chanel-coco-mademoiselle-edp', 100, 5800000, 40, 'CHA-CME-100' UNION ALL
  SELECT 'chanel-allure-homme-sport-edt', 50, 2500000, 70, 'CHA-AHS-50' UNION ALL
  SELECT 'chanel-allure-homme-sport-edt', 100, 3800000, 50, 'CHA-AHS-100' UNION ALL
  SELECT 'chanel-chance-eau-tendre-edp', 35, 2700000, 60, 'CHA-CET-35' UNION ALL
  SELECT 'chanel-chance-eau-tendre-edp', 50, 3600000, 70, 'CHA-CET-50' UNION ALL
  SELECT 'chanel-chance-eau-tendre-edp', 100, 5400000, 40, 'CHA-CET-100' UNION ALL
  SELECT 'chanel-egoiste-edt', 50, 2400000, 45, 'CHA-EGO-50' UNION ALL
  SELECT 'chanel-egoiste-edt', 100, 3600000, 30, 'CHA-EGO-100' UNION ALL
  SELECT 'chanel-gabrielle-edp', 35, 2800000, 55, 'CHA-GAB-35' UNION ALL
  SELECT 'chanel-gabrielle-edp', 50, 3700000, 60, 'CHA-GAB-50' UNION ALL
  SELECT 'chanel-gabrielle-edp', 100, 5600000, 35, 'CHA-GAB-100' UNION ALL
  SELECT 'chanel-platinum-egoiste-edt', 50, 2600000, 40, 'CHA-PEG-50' UNION ALL
  SELECT 'chanel-platinum-egoiste-edt', 100, 3900000, 30, 'CHA-PEG-100' UNION ALL
  SELECT 'chanel-les-exclusifs-1932-edp', 75, 8500000, 20, 'CHA-EXC-75' UNION ALL
  SELECT 'chanel-les-exclusifs-1932-edp', 200, 18000000, 10, 'CHA-EXC-200' UNION ALL
  SELECT 'chanel-sycomore-edp', 75, 8800000, 20, 'CHA-SYC-75' UNION ALL
  SELECT 'chanel-sycomore-edp', 200, 18500000, 10, 'CHA-SYC-200' UNION ALL
  SELECT 'chanel-allure-edp', 35, 2500000, 60, 'CHA-ALL-35' UNION ALL
  SELECT 'chanel-allure-edp', 50, 3500000, 70, 'CHA-ALL-50' UNION ALL
  SELECT 'chanel-allure-edp', 100, 5200000, 40, 'CHA-ALL-100' UNION ALL
  SELECT 'chanel-bleu-de-chanel-parfum', 50, 5200000, 45, 'CHA-BDC-PAR-50' UNION ALL
  SELECT 'chanel-bleu-de-chanel-parfum', 100, 8800000, 25, 'CHA-BDC-PAR-100' UNION ALL
  -- DIOR new products
  SELECT 'dior-homme-intense-edp', 50, 3400000, 55, 'DIO-HI-50' UNION ALL
  SELECT 'dior-homme-intense-edp', 100, 5100000, 40, 'DIO-HI-100' UNION ALL
  SELECT 'dior-jadore-edp', 30, 2400000, 60, 'DIO-JA-30' UNION ALL
  SELECT 'dior-jadore-edp', 50, 3500000, 70, 'DIO-JA-50' UNION ALL
  SELECT 'dior-jadore-edp', 100, 5200000, 45, 'DIO-JA-100' UNION ALL
  SELECT 'dior-fahrenheit-edt', 50, 2800000, 60, 'DIO-FAH-50' UNION ALL
  SELECT 'dior-fahrenheit-edt', 100, 4200000, 45, 'DIO-FAH-100' UNION ALL
  SELECT 'dior-hypnotic-poison-edt', 30, 2000000, 55, 'DIO-HP-30' UNION ALL
  SELECT 'dior-hypnotic-poison-edt', 50, 2900000, 65, 'DIO-HP-50' UNION ALL
  SELECT 'dior-hypnotic-poison-edt', 100, 4400000, 40, 'DIO-HP-100' UNION ALL
  SELECT 'dior-eau-sauvage-parfum', 75, 5500000, 30, 'DIO-ESP-75' UNION ALL
  SELECT 'dior-eau-sauvage-parfum', 200, 12000000, 15, 'DIO-ESP-200' UNION ALL
  SELECT 'dior-poison-girl-edp', 30, 2100000, 50, 'DIO-PG-30' UNION ALL
  SELECT 'dior-poison-girl-edp', 50, 3000000, 60, 'DIO-PG-50' UNION ALL
  SELECT 'dior-poison-girl-edp', 100, 4500000, 35, 'DIO-PG-100' UNION ALL
  SELECT 'dior-gris-montaigne-edp', 125, 9000000, 20, 'DIO-GM-125' UNION ALL
  SELECT 'dior-la-nuit-tresor-edp', 30, 2200000, 55, 'DIO-LNT-30' UNION ALL
  SELECT 'dior-la-nuit-tresor-edp', 50, 3200000, 65, 'DIO-LNT-50' UNION ALL
  SELECT 'dior-la-nuit-tresor-edp', 100, 4800000, 40, 'DIO-LNT-100' UNION ALL
  SELECT 'dior-homme-cologne', 75, 2200000, 70, 'DIO-HC-75' UNION ALL
  SELECT 'dior-homme-cologne', 200, 4800000, 30, 'DIO-HC-200' UNION ALL
  SELECT 'dior-dune-edt', 50, 2600000, 50, 'DIO-DUN-50' UNION ALL
  SELECT 'dior-dune-edt', 100, 3900000, 35, 'DIO-DUN-100' UNION ALL
  -- GUCCI new products
  SELECT 'gucci-flora-gorgeous-gardenia-edp', 30, 2300000, 60, 'GUC-FGG-30' UNION ALL
  SELECT 'gucci-flora-gorgeous-gardenia-edp', 50, 3200000, 70, 'GUC-FGG-50' UNION ALL
  SELECT 'gucci-flora-gorgeous-gardenia-edp', 100, 4900000, 40, 'GUC-FGG-100' UNION ALL
  SELECT 'gucci-guilty-pour-homme-edt', 50, 2500000, 60, 'GUC-GPH-50' UNION ALL
  SELECT 'gucci-guilty-pour-homme-edt', 90, 3800000, 40, 'GUC-GPH-90' UNION ALL
  SELECT 'gucci-bloom-edp', 30, 2200000, 60, 'GUC-BLO-30' UNION ALL
  SELECT 'gucci-bloom-edp', 50, 3100000, 70, 'GUC-BLO-50' UNION ALL
  SELECT 'gucci-bloom-edp', 100, 4700000, 40, 'GUC-BLO-100' UNION ALL
  SELECT 'gucci-envy-me-edt', 30, 1800000, 65, 'GUC-ENV-30' UNION ALL
  SELECT 'gucci-envy-me-edt', 50, 2600000, 75, 'GUC-ENV-50' UNION ALL
  SELECT 'gucci-pour-homme-edt', 50, 2400000, 55, 'GUC-PH-50' UNION ALL
  SELECT 'gucci-pour-homme-edt', 100, 3700000, 40, 'GUC-PH-100' UNION ALL
  SELECT 'gucci-memoire-dune-odeur-edp', 60, 3400000, 40, 'GUC-MDO-60' UNION ALL
  SELECT 'gucci-memoire-dune-odeur-edp', 100, 5000000, 25, 'GUC-MDO-100' UNION ALL
  SELECT 'gucci-rush-edt', 30, 1900000, 60, 'GUC-RUSH-30' UNION ALL
  SELECT 'gucci-rush-edt', 50, 2700000, 70, 'GUC-RUSH-50' UNION ALL
  SELECT 'gucci-guilty-intense-edp', 50, 3200000, 50, 'GUC-GI-50' UNION ALL
  SELECT 'gucci-guilty-intense-edp', 90, 4900000, 30, 'GUC-GI-90' UNION ALL
  SELECT 'gucci-alchemists-garden-a-song-for-the-rose-edp', 100, 6800000, 20, 'GUC-AGSR-100' UNION ALL
  SELECT 'gucci-made-to-measure-edt', 50, 2600000, 55, 'GUC-MTM-50' UNION ALL
  SELECT 'gucci-made-to-measure-edt', 90, 3900000, 35, 'GUC-MTM-90' UNION ALL
  -- TOM FORD new products
  SELECT 'tom-ford-tobacco-vanille-edp', 50, 6500000, 25, 'TF-TV-50' UNION ALL
  SELECT 'tom-ford-tobacco-vanille-edp', 100, 10500000, 15, 'TF-TV-100' UNION ALL
  SELECT 'tom-ford-neroli-portofino-edt', 50, 5800000, 30, 'TF-NP-50' UNION ALL
  SELECT 'tom-ford-neroli-portofino-edt', 100, 9800000, 20, 'TF-NP-100' UNION ALL
  SELECT 'tom-ford-grey-vetiver-edp', 50, 5400000, 30, 'TF-GV-50' UNION ALL
  SELECT 'tom-ford-grey-vetiver-edp', 100, 9000000, 20, 'TF-GV-100' UNION ALL
  SELECT 'tom-ford-velvet-orchid-edp', 30, 3800000, 35, 'TF-VO-30' UNION ALL
  SELECT 'tom-ford-velvet-orchid-edp', 50, 5600000, 25, 'TF-VO-50' UNION ALL
  SELECT 'tom-ford-velvet-orchid-edp', 100, 9200000, 15, 'TF-VO-100' UNION ALL
  SELECT 'tom-ford-soleil-blanc-edp', 50, 5900000, 28, 'TF-SB-50' UNION ALL
  SELECT 'tom-ford-soleil-blanc-edp', 100, 9800000, 18, 'TF-SB-100' UNION ALL
  SELECT 'tom-ford-jasmin-rouge-edp', 50, 6000000, 25, 'TF-JR-50' UNION ALL
  SELECT 'tom-ford-jasmin-rouge-edp', 100, 9500000, 15, 'TF-JR-100' UNION ALL
  SELECT 'tom-ford-for-her-edp', 50, 5200000, 30, 'TF-FH-50' UNION ALL
  SELECT 'tom-ford-for-her-edp', 100, 8500000, 20, 'TF-FH-100' UNION ALL
  SELECT 'tom-ford-beau-de-jour-edp', 50, 5300000, 30, 'TF-BDJ-50' UNION ALL
  SELECT 'tom-ford-beau-de-jour-edp', 100, 8700000, 20, 'TF-BDJ-100' UNION ALL
  SELECT 'tom-ford-azure-lime-edc', 50, 3900000, 40, 'TF-AL-50' UNION ALL
  SELECT 'tom-ford-azure-lime-edc', 100, 6500000, 25, 'TF-AL-100' UNION ALL
  SELECT 'tom-ford-rose-prick-edp', 50, 6200000, 25, 'TF-RP-50' UNION ALL
  SELECT 'tom-ford-rose-prick-edp', 100, 10000000, 15, 'TF-RP-100' UNION ALL
  -- VERSACE new products
  SELECT 'versace-bright-crystal-edt', 30, 1500000, 80, 'VER-BC-30' UNION ALL
  SELECT 'versace-bright-crystal-edt', 50, 2100000, 90, 'VER-BC-50' UNION ALL
  SELECT 'versace-bright-crystal-edt', 90, 3200000, 50, 'VER-BC-90' UNION ALL
  SELECT 'versace-dylan-blue-edt', 50, 2200000, 75, 'VER-DB-50' UNION ALL
  SELECT 'versace-dylan-blue-edt', 100, 3300000, 55, 'VER-DB-100' UNION ALL
  SELECT 'versace-dylan-blue-edt', 200, 5200000, 25, 'VER-DB-200' UNION ALL
  SELECT 'versace-the-dreamer-edt', 50, 2000000, 65, 'VER-DR-50' UNION ALL
  SELECT 'versace-the-dreamer-edt', 100, 3000000, 45, 'VER-DR-100' UNION ALL
  SELECT 'versace-crystal-noir-edp', 30, 1600000, 65, 'VER-CN-30' UNION ALL
  SELECT 'versace-crystal-noir-edp', 50, 2300000, 75, 'VER-CN-50' UNION ALL
  SELECT 'versace-crystal-noir-edp', 90, 3500000, 40, 'VER-CN-90' UNION ALL
  SELECT 'versace-versense-edt', 30, 1200000, 80, 'VER-VS-30' UNION ALL
  SELECT 'versace-versense-edt', 50, 1800000, 90, 'VER-VS-50' UNION ALL
  SELECT 'versace-pour-homme-edt', 50, 1700000, 80, 'VER-PH-50' UNION ALL
  SELECT 'versace-pour-homme-edt', 100, 2600000, 60, 'VER-PH-100' UNION ALL
  SELECT 'versace-eros-flame-edp', 50, 2400000, 65, 'VER-EF-50' UNION ALL
  SELECT 'versace-eros-flame-edp', 100, 3600000, 50, 'VER-EF-100' UNION ALL
  SELECT 'versace-gianni-versace-couture-edt', 50, 2200000, 55, 'VER-GVC-50' UNION ALL
  SELECT 'versace-gianni-versace-couture-edt', 100, 3300000, 40, 'VER-GVC-100' UNION ALL
  SELECT 'versace-atelier-eclat-de-rose-edp', 100, 5500000, 20, 'VER-AER-100' UNION ALL
  SELECT 'versace-atelier-bois-dencens-edp', 100, 5800000, 20, 'VER-ABE-100' UNION ALL
  -- YSL new products
  SELECT 'ysl-mon-paris-edp', 30, 2000000, 65, 'YSL-MP-30' UNION ALL
  SELECT 'ysl-mon-paris-edp', 50, 2900000, 75, 'YSL-MP-50' UNION ALL
  SELECT 'ysl-mon-paris-edp', 90, 4400000, 45, 'YSL-MP-90' UNION ALL
  SELECT 'ysl-lhomme-edp', 60, 3200000, 60, 'YSL-LH-60' UNION ALL
  SELECT 'ysl-lhomme-edp', 100, 4800000, 45, 'YSL-LH-100' UNION ALL
  SELECT 'ysl-opium-edp', 30, 2100000, 55, 'YSL-OPM-30' UNION ALL
  SELECT 'ysl-opium-edp', 50, 3000000, 65, 'YSL-OPM-50' UNION ALL
  SELECT 'ysl-opium-edp', 90, 4500000, 40, 'YSL-OPM-90' UNION ALL
  SELECT 'ysl-y-edp', 60, 3300000, 60, 'YSL-Y-60' UNION ALL
  SELECT 'ysl-y-edp', 100, 5000000, 45, 'YSL-Y-100' UNION ALL
  SELECT 'ysl-touche-eclat-radiant-touch-edp', 50, 2800000, 60, 'YSL-TE-50' UNION ALL
  SELECT 'ysl-touche-eclat-radiant-touch-edp', 90, 4200000, 40, 'YSL-TE-90' UNION ALL
  SELECT 'ysl-in-love-again-edt', 40, 1600000, 70, 'YSL-ILA-40' UNION ALL
  SELECT 'ysl-in-love-again-edt', 75, 2600000, 55, 'YSL-ILA-75' UNION ALL
  SELECT 'ysl-kouros-edt', 50, 1800000, 65, 'YSL-KOU-50' UNION ALL
  SELECT 'ysl-kouros-edt', 100, 2700000, 45, 'YSL-KOU-100' UNION ALL
  SELECT 'ysl-la-nuit-de-lhomme-edt', 40, 1800000, 65, 'YSL-LNH-40' UNION ALL
  SELECT 'ysl-la-nuit-de-lhomme-edt', 60, 2600000, 70, 'YSL-LNH-60' UNION ALL
  SELECT 'ysl-la-nuit-de-lhomme-edt', 100, 3900000, 45, 'YSL-LNH-100' UNION ALL
  SELECT 'ysl-foret-dorient-edp', 80, 5800000, 20, 'YSL-FDE-80' UNION ALL
  SELECT 'ysl-elle-edp', 30, 2000000, 60, 'YSL-ELLE-30' UNION ALL
  SELECT 'ysl-elle-edp', 50, 2900000, 70, 'YSL-ELLE-50' UNION ALL
  SELECT 'ysl-elle-edp', 90, 4400000, 40, 'YSL-ELLE-90' UNION ALL
  -- ARMANI new products
  SELECT 'armani-code-edp', 60, 3000000, 60, 'ARM-CODE-60' UNION ALL
  SELECT 'armani-code-edp', 110, 4600000, 45, 'ARM-CODE-110' UNION ALL
  SELECT 'armani-my-way-edp', 30, 1900000, 65, 'ARM-MW-30' UNION ALL
  SELECT 'armani-my-way-edp', 50, 2700000, 75, 'ARM-MW-50' UNION ALL
  SELECT 'armani-my-way-edp', 90, 4000000, 45, 'ARM-MW-90' UNION ALL
  SELECT 'armani-acqua-di-gio-profumo-edp', 40, 2800000, 55, 'ARM-ADGP-40' UNION ALL
  SELECT 'armani-acqua-di-gio-profumo-edp', 75, 4500000, 40, 'ARM-ADGP-75' UNION ALL
  SELECT 'armani-acqua-di-gio-profumo-edp', 125, 6800000, 25, 'ARM-ADGP-125' UNION ALL
  SELECT 'armani-si-passione-edp', 30, 1800000, 65, 'ARM-SIP-30' UNION ALL
  SELECT 'armani-si-passione-edp', 50, 2600000, 75, 'ARM-SIP-50' UNION ALL
  SELECT 'armani-si-passione-edp', 100, 4000000, 45, 'ARM-SIP-100' UNION ALL
  SELECT 'armani-stronger-with-you-edp', 50, 2700000, 65, 'ARM-SWY-50' UNION ALL
  SELECT 'armani-stronger-with-you-edp', 100, 4200000, 45, 'ARM-SWY-100' UNION ALL
  SELECT 'armani-diamonds-edp', 30, 1700000, 65, 'ARM-DIA-30' UNION ALL
  SELECT 'armani-diamonds-edp', 50, 2500000, 75, 'ARM-DIA-50' UNION ALL
  SELECT 'armani-diamonds-edp', 100, 3800000, 45, 'ARM-DIA-100' UNION ALL
  SELECT 'armani-emporio-he-edt', 50, 1800000, 75, 'ARM-EHE-50' UNION ALL
  SELECT 'armani-emporio-he-edt', 100, 2700000, 55, 'ARM-EHE-100' UNION ALL
  SELECT 'armani-mania-edp', 30, 1600000, 65, 'ARM-MAN-30' UNION ALL
  SELECT 'armani-mania-edp', 50, 2300000, 75, 'ARM-MAN-50' UNION ALL
  SELECT 'armani-prive-rose-darabie-edp', 100, 9500000, 15, 'ARM-PRA-100' UNION ALL
  SELECT 'armani-prive-bois-dencens-edp', 100, 9000000, 15, 'ARM-PBE-100' UNION ALL
  -- MAISON MARGIELA new products
  SELECT 'maison-margiela-replica-flower-market-edt', 100, 3400000, 45, 'MM-FM-100' UNION ALL
  SELECT 'maison-margiela-replica-flower-market-edt', 200, 5800000, 25, 'MM-FM-200' UNION ALL
  SELECT 'maison-margiela-replica-by-the-fireplace-edt', 100, 3400000, 45, 'MM-BTF-100' UNION ALL
  SELECT 'maison-margiela-replica-by-the-fireplace-edt', 200, 5800000, 25, 'MM-BTF-200' UNION ALL
  SELECT 'maison-margiela-replica-beach-walk-edt', 100, 3200000, 50, 'MM-BW-100' UNION ALL
  SELECT 'maison-margiela-replica-beach-walk-edt', 200, 5500000, 25, 'MM-BW-200' UNION ALL
  SELECT 'maison-margiela-replica-at-the-barbers-edt', 100, 3200000, 45, 'MM-ATB-100' UNION ALL
  SELECT 'maison-margiela-replica-matcha-meditation-edt', 100, 3300000, 40, 'MM-MM-100' UNION ALL
  SELECT 'maison-margiela-replica-when-the-rain-breaks-edt', 100, 3100000, 40, 'MM-WRB-100' UNION ALL
  SELECT 'maison-margiela-replica-sailing-day-edt', 100, 3200000, 45, 'MM-SD-100' UNION ALL
  SELECT 'maison-margiela-replica-springtime-in-a-park-edt', 100, 3000000, 50, 'MM-SIP-100' UNION ALL
  SELECT 'maison-margiela-replica-springtime-in-a-park-edt', 200, 5200000, 25, 'MM-SIP-200' UNION ALL
  SELECT 'maison-margiela-replica-under-the-lemon-trees-edt', 100, 3100000, 45, 'MM-ULT-100' UNION ALL
  SELECT 'maison-margiela-replica-whispers-in-the-library-edp', 100, 3600000, 40, 'MM-WIL-100'
) v ON p.slug = v.slug
WHERE NOT EXISTS (
  SELECT 1 FROM product_variants pv WHERE pv.productId = p.id AND pv.sku = v.sku
);
