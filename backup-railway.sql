-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: mysql-25b3e606-webnuochoa.h.aivencloud.com    Database: defaultdb
-- ------------------------------------------------------
-- Server version	8.0.45

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('1013800f-1bbd-45b4-87d3-1292b21f9157','886b777ce4ddb97810284839a7c04a2ff02b8c412c6fbf8c327e3f53ad6b7522','2026-04-29 13:24:27.956','20260415110453_add_product_usage_policy',NULL,NULL,'2026-04-29 13:24:25.387',1),('12348bda-bcda-4abc-8921-7385822aa382','b906222569af55ac7077c22fc0c6abfbd6709dcda55f36181f9ed56a4380a4fe','2026-04-29 13:24:12.283','20260327151142_create_products_table',NULL,NULL,'2026-04-29 13:24:09.850',1),('198c4958-8b2e-4926-8940-f19e094d003d','a76e94bae244af110013a26a41d1eb738f9395668848a164bd518a6b4ccbb9b3','2026-04-29 13:24:25.145','20260412114816_replace_blog_with_post_postidea',NULL,NULL,'2026-04-29 13:24:23.693',1),('1df19425-b709-440f-a696-577a55b455a4','1e5c995263b432bb984719698e6cd82f8d4321b346af4be0ce46855577c3a443','2026-04-29 13:24:17.118','20260404155127_create_order_tables',NULL,NULL,'2026-04-29 13:24:16.127',1),('4460ebde-50fd-42e9-a975-8172dd671767','384ddc24daebbe539b3ff80b32f07013106a9053095b0e5ff79607cd1639d4d0','2026-04-29 13:24:30.085','20260415113825_make_order_item_variant_nullable',NULL,NULL,'2026-04-29 13:24:28.641',1),('8eadfbe9-271b-4802-adef-ec65b85c9c65','781e30fb0d331b7cc48b177564305b81c91568fb10200f24376c098cf7d6f313','2026-04-29 13:24:00.169','20260320164924_create_user_and_refresh_token_table',NULL,NULL,'2026-04-29 13:23:57.293',1),('91958c8b-f86d-4367-b42d-2266af3d0304','1b79d3777c473222128ed4d4432f208d56eafcb79e69ad4379b9e886bf851f9b','2026-04-29 13:24:09.606','20260322161925_edit_user_table',NULL,NULL,'2026-04-29 13:24:00.654',1),('9c3d41e2-1431-4fd7-8b85-8d24981975f2','bfa3845b436420da5d64e98350ea9a1e578a0bb9855a5d4aa5dbdae307dd1053','2026-04-29 13:24:15.884','20260403081148_update_user_table_phone_dateof_birth',NULL,NULL,'2026-04-29 13:24:14.657',1),('abaa5bc8-aa0e-49f3-9704-b02902692147','68f5d9fa40f8b4a4ccffbe4a79b014e852fcadf8ce7d455b2c8d5d5fced6e0df','2026-05-14 05:22:20.457','20260514052216_remove_blog_tables',NULL,NULL,'2026-05-14 05:22:18.045',1),('c1794eaf-c6d6-4fa8-8803-f8dc6c3138d2','e5d9128de1c32046f4452f15ff548d46ad845275737d0ddac424f32017dff655','2026-04-29 13:24:13.964','20260401182758_create_cart_table',NULL,NULL,'2026-04-29 13:24:12.525',1),('c27fdccd-c4da-4884-8c87-4ea61996583a','51058b87b35f854269296ae1f13ae029c18f41d2f06e5b58365a6a47a2ab2786','2026-04-29 13:24:22.217','20260411191915_add_vnpay_payment_method',NULL,NULL,'2026-04-29 13:24:20.585',1),('e619c78b-714b-4fa3-a5b7-05e02198e3d7','db41bca1253f034502afffe6a40ffb719718d4dda0c8bd186bf97215c0f06fd4','2026-04-29 13:24:23.451','20260412113013_create_blog_tables',NULL,NULL,'2026-04-29 13:24:22.460',1),('fff61e63-3529-442a-b0c3-b0b27e2d19cd','4935ed9024a72a213a5cb7812e207a9dc6b8d8751c597d4dce0e5ef67b071630','2026-04-29 13:24:19.444','20260409094515_add_queue_table',NULL,NULL,'2026-04-29 13:24:18.257',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `brands_name_key` (`name`),
  UNIQUE KEY `brands_slug_key` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Chanel','chanel','https://www.freepnglogos.com/uploads/chanel-logo-24.png','Thương hiệu nước hoa hàng đầu thế giới đến từ Pháp, nổi tiếng với những mùi hương bất hủ như Chanel No.5.',1,'2026-03-28 00:10:30.000','2026-03-28 00:10:30.000'),(2,'Dior','dior','https://cdn.freebiesupply.com/logos/large/2x/dior-logo-png-transparent.png','Nhà mốt Christian Dior sở hữu dòng nước hoa đẳng cấp với những bestseller như Sauvage, Miss Dior, J\'adore.',1,'2026-03-28 00:10:30.000','2026-03-28 00:10:30.000'),(3,'Gucci','gucci','https://mondialbrand.com/wp-content/uploads/2024/03/gucci-logo_brandlogos.net_3dblq.png','Thương hiệu Ý mang phong cách xa hoa, độc đáo với bộ sưu tập nước hoa đa dạng.',1,'2026-03-28 00:10:30.000','2026-03-28 00:10:30.000'),(4,'Tom Ford','tom-ford','https://1000logos.net/wp-content/uploads/2020/05/Logo1-Tom-Ford.jpg','Biểu tượng của sự sang trọng và gợi cảm, Tom Ford Private Blend là dòng nước hoa được săn đón nhất thế giới.',1,'2026-03-28 00:10:30.000','2026-03-28 00:10:30.000'),(5,'Versace','versace','https://e7.pngegg.com/pngimages/318/575/png-clipart-versace-designer-clothing-italian-fashion-perfume-miscellaneous-white-thumbnail.png','Thương hiệu thời trang Ý mang đến những mùi hương mạnh mẽ, quyến rũ và đậm chất Địa Trung Hải.',1,'2026-03-28 00:10:30.000','2026-03-28 00:10:30.000'),(6,'YSL (Yves Saint Laurent)','ysl','https://icon2.cleanpng.com/lnd/20241123/hr/7921f12e882c84a8a8302819e8b664.webp','YSL Beauté nổi tiếng với Black Opium, Libre và Y – những mùi hương đỉnh cao của nghệ thuật nước hoa Pháp.',1,'2026-03-28 00:10:30.000','2026-03-28 00:10:30.000'),(7,'Giorgio Armani','giorgio-armani','https://logoart.vn/blog/wp-content/uploads/2013/08/giorgio-armani-logo.png','Thương hiệu Ý tinh tế với Acqua di Giò và Sì – biểu tượng của sự thanh lịch, hiện đại và trường tồn.',1,'2026-03-28 00:10:30.000','2026-03-28 00:10:30.000'),(8,'Maison Margiela','maison-margiela','https://logos-world.net/wp-content/uploads/2024/07/Maison-Margiela-Logo-1988.png','Dòng Replica của Maison Margiela tái hiện những khoảnh khắc đáng nhớ qua mùi hương, nổi bật với Lazy Sunday Morning và Jazz Club.',1,'2026-03-28 00:10:30.000','2026-03-28 00:10:30.000'),(9,'Perfume The Marly ','perfume-the-marly','https://uk.parfums-de-marly.com/cdn/shop/files/header-logo_22553491-7108-459f-b911-d6a44a873b13.webp?v=1728919998','Thương hiệu nước hoa nổi tiếng PHÁP ',1,'2026-04-16 12:33:47.426','2026-04-16 12:33:47.426');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cartId` int NOT NULL,
  `variantId` int NOT NULL,
  `quantity` int NOT NULL DEFAULT '1',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cart_items_cartId_variantId_key` (`cartId`,`variantId`),
  KEY `cart_items_cartId_idx` (`cartId`),
  KEY `cart_items_variantId_idx` (`variantId`),
  CONSTRAINT `cart_items_cartId_fkey` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `cart_items_variantId_fkey` FOREIGN KEY (`variantId`) REFERENCES `product_variants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_items`
--

LOCK TABLES `cart_items` WRITE;
/*!40000 ALTER TABLE `cart_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `carts_userId_key` (`userId`),
  CONSTRAINT `carts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,30,'2026-04-02 07:47:52.472','2026-04-02 07:47:52.472'),(2,32,'2026-04-08 17:23:55.884','2026-04-08 17:23:55.884');
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parentId` int DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `categories_name_key` (`name`),
  UNIQUE KEY `categories_slug_key` (`slug`),
  KEY `categories_parentId_idx` (`parentId`),
  CONSTRAINT `categories_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Nước hoa nam','nuoc-hoa-nam','Bộ sưu tập nước hoa dành cho nam giới',NULL,NULL,1,'2026-03-28 00:12:05.000','2026-03-28 00:12:05.000'),(2,'Nước hoa nữ','nuoc-hoa-nu','Bộ sưu tập nước hoa dành cho nữ giới',NULL,NULL,1,'2026-03-28 00:12:05.000','2026-03-28 00:12:05.000'),(3,'Nước hoa Unisex','nuoc-hoa-unisex','Bộ sưu tập nước hoa dành cho mọi giới tính',NULL,NULL,1,'2026-03-28 00:12:05.000','2026-03-28 00:12:05.000');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `orderId` int NOT NULL,
  `variantId` int DEFAULT NULL,
  `productName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `volume` int NOT NULL,
  `priceAtOrder` decimal(12,0) NOT NULL,
  `quantity` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `order_items_orderId_idx` (`orderId`),
  KEY `order_items_variantId_idx` (`variantId`),
  CONSTRAINT `order_items_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `order_items_variantId_fkey` FOREIGN KEY (`variantId`) REFERENCES `product_variants` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (2,2,385,'Dior Fahrenheit EDT',100,4200000,2),(3,3,NULL,'Ombre Leather',100,4650000,2),(4,4,NULL,'Versace Eros Flame EDP',50,2400000,2),(5,5,495,'Armani Acqua di Gio Profumo EDP',125,6800000,1),(6,6,NULL,'Armani Stronger With You EDP',50,2700000,1),(7,7,71,'Dior Sauvage EDP',200,8500000,1),(8,8,473,'YSL Y EDP',60,3300000,1);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `receiverName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `receiverPhone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shippingAddress` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` text COLLATE utf8mb4_unicode_ci,
  `totalAmount` decimal(12,0) NOT NULL,
  `shippingFee` decimal(12,0) NOT NULL DEFAULT '0',
  `paymentMethod` enum('COD','VNPAY') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'COD',
  `paymentStatus` enum('UNPAID','PAID') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'UNPAID',
  `status` enum('PENDING','CONFIRMED','SHIPPING','DELIVERED','CANCELLED') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'PENDING',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_userId_idx` (`userId`),
  CONSTRAINT `orders_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (2,30,'Nguyễn Tiến Dũng','0869271243','124A tổ 11 khu 7, Xã Đồng Phú, Huyện Tân Phú, Tỉnh Đồng Nai','kcj',8400000,0,'COD','UNPAID','CONFIRMED','2026-04-05 17:44:54.062','2026-04-09 17:32:48.487'),(3,32,'Nguyễn Tiến Dũng','0869271243','abc123, Xã Bắc Lý, Huyện Thanh Chương, Tỉnh Nghệ An','kcj',9300000,0,'VNPAY','UNPAID','CONFIRMED','2026-04-11 19:25:48.469','2026-04-12 17:27:42.037'),(4,32,'Nguyễn Tiến Dũng','0869271243','124A tổ 11 khu 7, Xã Tân Phú, Huyện Tân Phú, Tỉnh Đồng Nai','abcd',4800000,0,'VNPAY','UNPAID','DELIVERED','2026-04-14 11:45:56.963','2026-04-14 11:48:46.986'),(5,32,'Nguyễn Tiến Dũng','0869271243','124A tổ 11 khu 7, Xã Đồng Phú, Huyện Tân Phú, Tỉnh Đồng Nai','doin thứ 3',6800000,0,'VNPAY','UNPAID','CANCELLED','2026-04-14 11:52:47.565','2026-04-14 11:55:01.281'),(6,32,'Nguyễn Tiến Dũng','0869271243','124A tổ 11 khu 7, Phường Bến Cát, Quận 1, Thành phố Hồ Chí Minh','124A tổ 11 khu 7',2700000,0,'VNPAY','UNPAID','DELIVERED','2026-04-14 11:55:56.094','2026-04-14 12:03:06.707'),(7,32,'Nguyễn Tiến Dũng','0869271243','124A tổ 11 khu 7, Phường Bến Cát, Quận Gò Vấp, Thành phố Hồ Chí Minh','124A tổ 11 khu 7',8500000,0,'VNPAY','UNPAID','DELIVERED','2026-04-15 08:58:56.649','2026-04-15 09:00:36.810'),(8,32,'Nguyễn Tiến Dũng','0869271243','124A tổ 11 khu 7, Phường An Nhơn, Thành phố Thủ Đức, Thành phố Hồ Chí Minh','124A tổ 11 khu 7',3300000,0,'VNPAY','UNPAID','PENDING','2026-04-15 09:02:20.373','2026-04-15 09:02:20.373');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_images`
--

DROP TABLE IF EXISTS `product_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` int NOT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `altText` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sortOrder` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `product_images_productId_idx` (`productId`),
  CONSTRAINT `product_images_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_images`
--

LOCK TABLES `product_images` WRITE;
/*!40000 ALTER TABLE `product_images` DISABLE KEYS */;
INSERT INTO `product_images` VALUES (3,147,'https://lanperfume.com/wp-content/uploads/2024/07/dior-homme-intense.jpg',NULL,0),(7,217,'https://lanperfume.com/wp-content/uploads/2024/07/ombre-leather.jpg','Mẫu 1',0);
/*!40000 ALTER TABLE `product_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_variants`
--

DROP TABLE IF EXISTS `product_variants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_variants` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` int NOT NULL,
  `volume` int NOT NULL,
  `price` decimal(12,0) NOT NULL,
  `salePrice` decimal(12,0) DEFAULT NULL,
  `stock` int NOT NULL DEFAULT '0',
  `sku` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_variants_sku_key` (`sku`),
  KEY `product_variants_productId_idx` (`productId`),
  CONSTRAINT `product_variants_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=539 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_variants`
--

LOCK TABLES `product_variants` WRITE;
/*!40000 ALTER TABLE `product_variants` DISABLE KEYS */;
INSERT INTO `product_variants` VALUES (64,43,35,2800000,NULL,50,'CHA-NO5-35'),(65,43,50,3800000,NULL,80,'CHA-NO5-50'),(66,43,100,5500000,NULL,40,'CHA-NO5-100'),(67,44,50,3900000,NULL,60,'CHA-BDC-50'),(68,44,100,5800000,NULL,45,'CHA-BDC-100'),(69,45,60,3500000,NULL,100,'DIO-SAU-60'),(70,45,100,5200000,NULL,70,'DIO-SAU-100'),(71,45,200,8500000,NULL,19,'DIO-SAU-200'),(72,46,30,2500000,NULL,60,'DIO-MD-30'),(73,46,50,3600000,NULL,80,'DIO-MD-50'),(74,46,100,5300000,NULL,50,'DIO-MD-100'),(75,47,50,2900000,NULL,45,'GUC-GUI-50'),(76,47,90,4200000,NULL,30,'GUC-GUI-90'),(77,48,50,5500000,NULL,30,'TF-BO-50'),(78,48,100,8800000,NULL,20,'TF-BO-100'),(79,49,50,7200000,NULL,25,'TF-OW-50'),(80,49,100,11500000,NULL,15,'TF-OW-100'),(81,50,50,1800000,NULL,80,'VER-ERO-50'),(82,50,100,2700000,NULL,60,'VER-ERO-100'),(83,50,200,4200000,NULL,25,'VER-ERO-200'),(84,51,30,2200000,NULL,60,'YSL-BO-30'),(85,51,50,3100000,NULL,70,'YSL-BO-50'),(86,51,90,4600000,NULL,40,'YSL-BO-90'),(87,52,30,2400000,NULL,50,'YSL-LIB-30'),(88,52,50,3400000,NULL,60,'YSL-LIB-50'),(89,52,90,5000000,NULL,30,'YSL-LIB-90'),(90,53,50,1900000,NULL,90,'ARM-ADG-50'),(91,53,100,2800000,NULL,70,'ARM-ADG-100'),(92,53,200,4400000,NULL,30,'ARM-ADG-200'),(93,54,30,2100000,NULL,55,'ARM-SI-30'),(94,54,50,3000000,NULL,65,'ARM-SI-50'),(95,54,100,4500000,NULL,40,'ARM-SI-100'),(96,55,30,1900000,NULL,40,'MM-JC-30'),(97,55,100,4200000,NULL,35,'MM-JC-100'),(98,56,30,1800000,NULL,35,'MM-LSM-30'),(99,56,100,3900000,NULL,30,'MM-LSM-100'),(355,137,35,2900000,NULL,60,'CHA-CME-35'),(356,137,50,3900000,NULL,80,'CHA-CME-50'),(357,137,100,5800000,NULL,40,'CHA-CME-100'),(358,138,50,2500000,NULL,70,'CHA-AHS-50'),(359,138,100,3800000,NULL,50,'CHA-AHS-100'),(360,139,35,2700000,NULL,60,'CHA-CET-35'),(361,139,50,3600000,NULL,70,'CHA-CET-50'),(362,139,100,5400000,NULL,40,'CHA-CET-100'),(365,141,35,2800000,NULL,55,'CHA-GAB-35'),(366,141,50,3700000,NULL,60,'CHA-GAB-50'),(367,141,100,5600000,NULL,35,'CHA-GAB-100'),(368,142,50,2600000,NULL,40,'CHA-PEG-50'),(369,142,100,3900000,NULL,30,'CHA-PEG-100'),(374,145,35,2500000,NULL,60,'CHA-ALL-35'),(375,145,50,3500000,NULL,70,'CHA-ALL-50'),(376,145,100,5200000,NULL,40,'CHA-ALL-100'),(381,148,30,2400000,NULL,60,'DIO-JA-30'),(382,148,50,3500000,NULL,70,'DIO-JA-50'),(383,148,100,5200000,NULL,45,'DIO-JA-100'),(384,149,50,2800000,NULL,60,'DIO-FAH-50'),(385,149,100,4200000,NULL,43,'DIO-FAH-100'),(386,150,30,2000000,NULL,55,'DIO-HP-30'),(387,150,50,2900000,NULL,65,'DIO-HP-50'),(388,150,100,4400000,NULL,40,'DIO-HP-100'),(389,151,75,5500000,NULL,30,'DIO-ESP-75'),(390,151,200,12000000,NULL,15,'DIO-ESP-200'),(391,152,30,2100000,NULL,50,'DIO-PG-30'),(392,152,50,3000000,NULL,60,'DIO-PG-50'),(393,152,100,4500000,NULL,35,'DIO-PG-100'),(395,154,30,2200000,NULL,55,'DIO-LNT-30'),(396,154,50,3200000,NULL,65,'DIO-LNT-50'),(397,154,100,4800000,NULL,40,'DIO-LNT-100'),(398,155,75,2200000,NULL,70,'DIO-HC-75'),(399,155,200,4800000,NULL,30,'DIO-HC-200'),(402,157,30,2300000,NULL,60,'GUC-FGG-30'),(403,157,50,3200000,NULL,70,'GUC-FGG-50'),(404,157,100,4900000,NULL,40,'GUC-FGG-100'),(405,158,50,2500000,NULL,60,'GUC-GPH-50'),(406,158,90,3800000,NULL,40,'GUC-GPH-90'),(407,159,30,2200000,NULL,60,'GUC-BLO-30'),(408,159,50,3100000,NULL,70,'GUC-BLO-50'),(409,159,100,4700000,NULL,40,'GUC-BLO-100'),(412,161,50,2400000,NULL,55,'GUC-PH-50'),(413,161,100,3700000,NULL,40,'GUC-PH-100'),(414,162,60,3400000,NULL,40,'GUC-MDO-60'),(415,162,100,5000000,NULL,25,'GUC-MDO-100'),(418,164,50,3200000,NULL,50,'GUC-GI-50'),(419,164,90,4900000,NULL,30,'GUC-GI-90'),(421,166,50,2600000,NULL,55,'GUC-MTM-50'),(422,166,90,3900000,NULL,35,'GUC-MTM-90'),(427,169,50,5400000,NULL,30,'TF-GV-50'),(428,169,100,9000000,NULL,20,'TF-GV-100'),(429,170,30,3800000,NULL,35,'TF-VO-30'),(430,170,50,5600000,NULL,25,'TF-VO-50'),(431,170,100,9200000,NULL,15,'TF-VO-100'),(432,171,50,5900000,NULL,28,'TF-SB-50'),(433,171,100,9800000,NULL,18,'TF-SB-100'),(434,172,50,6000000,NULL,25,'TF-JR-50'),(435,172,100,9500000,NULL,15,'TF-JR-100'),(438,174,50,5300000,NULL,30,'TF-BDJ-50'),(439,174,100,8700000,NULL,20,'TF-BDJ-100'),(440,175,50,3900000,NULL,40,'TF-AL-50'),(441,175,100,6500000,NULL,25,'TF-AL-100'),(442,176,50,6200000,NULL,25,'TF-RP-50'),(443,176,100,10000000,NULL,15,'TF-RP-100'),(447,178,50,2200000,NULL,75,'VER-DB-50'),(448,178,100,3300000,NULL,55,'VER-DB-100'),(449,178,200,5200000,NULL,25,'VER-DB-200'),(450,179,50,2000000,NULL,65,'VER-DR-50'),(451,179,100,3000000,NULL,45,'VER-DR-100'),(452,180,30,1600000,NULL,65,'VER-CN-30'),(453,180,50,2300000,NULL,75,'VER-CN-50'),(454,180,90,3500000,NULL,40,'VER-CN-90'),(457,182,50,1700000,NULL,80,'VER-PH-50'),(458,182,100,2600000,NULL,60,'VER-PH-100'),(464,186,100,5800000,NULL,20,'VER-ABE-100'),(465,187,30,2000000,NULL,65,'YSL-MP-30'),(466,187,50,2900000,NULL,75,'YSL-MP-50'),(467,187,90,4400000,NULL,45,'YSL-MP-90'),(468,188,60,3200000,NULL,60,'YSL-LH-60'),(469,188,100,4800000,NULL,45,'YSL-LH-100'),(473,190,60,3300000,NULL,59,'YSL-Y-60'),(474,190,100,5000000,NULL,45,'YSL-Y-100'),(479,193,50,1800000,NULL,65,'YSL-KOU-50'),(480,193,100,2700000,NULL,45,'YSL-KOU-100'),(488,197,60,3000000,NULL,60,'ARM-CODE-60'),(489,197,110,4600000,NULL,45,'ARM-CODE-110'),(490,198,30,1900000,NULL,65,'ARM-MW-30'),(491,198,50,2700000,NULL,75,'ARM-MW-50'),(492,198,90,4000000,NULL,45,'ARM-MW-90'),(493,199,40,2800000,NULL,55,'ARM-ADGP-40'),(494,199,75,4500000,NULL,40,'ARM-ADGP-75'),(495,199,125,6800000,NULL,24,'ARM-ADGP-125'),(496,200,30,1800000,NULL,65,'ARM-SIP-30'),(497,200,50,2600000,NULL,75,'ARM-SIP-50'),(498,200,100,4000000,NULL,45,'ARM-SIP-100'),(527,147,50,3500000,NULL,55,'DIO-HI-50'),(528,147,100,5100000,NULL,40,'DIO-HI-100'),(529,183,50,2400000,NULL,63,'VER-EF-50'),(530,183,100,3600000,NULL,50,'VER-EF-100'),(535,201,50,2700000,NULL,64,'ARM-SWY-50'),(536,201,100,4200000,NULL,42,'ARM-SWY-100'),(538,217,100,4650000,NULL,18,'OmbreLeather');
/*!40000 ALTER TABLE `product_variants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shortDescription` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `brandId` int NOT NULL,
  `categoryId` int NOT NULL,
  `concentration` enum('PARFUM','EDP','EDT','EDC','EDX') COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` enum('MALE','FEMALE','UNISEX') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'UNISEX',
  `originCountry` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `topNotes` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `middleNotes` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `baseNotes` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longevity` int DEFAULT NULL,
  `sillage` int DEFAULT NULL,
  `thumbnail` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isFeatured` tinyint(1) NOT NULL DEFAULT '0',
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `policy` longtext COLLATE utf8mb4_unicode_ci,
  `usage` longtext COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `products_slug_key` (`slug`),
  KEY `products_brandId_idx` (`brandId`),
  KEY `products_categoryId_idx` (`categoryId`),
  KEY `products_slug_idx` (`slug`),
  CONSTRAINT `products_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `brands` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `products_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=218 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (43,'Chanel No.5 EDP','chanel-no5-edp','Huyền thoại nước hoa nữ mọi thời đại',NULL,1,2,'EDP','FEMALE','Pháp','Aldehyde, Chanh bergamot, Neroli','Hoa hồng, Hoa nhài, Diên vĩ','Xạ hương, Gỗ đàn hương, Vani',8,4,'https://www.chanel.com/images/t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1920/n-5-eau-de-parfum-spray-3-4fl-oz--packshot-default-125530-9564912943134.jpg',1,1,'2026-03-28 00:15:56.000','2026-03-28 00:15:56.000',NULL,NULL),(44,'Chanel Bleu de Chanel EDP','chanel-bleu-de-chanel-edp','Mùi hương gỗ thơm lịch lãm dành cho nam',NULL,1,1,'EDP','MALE','Pháp','Chanh, Gừng, Tiêu hồng','Hoa nhài, Nhục đậu khấu, Iso E Super','Gỗ đàn hương, Gỗ tuyết tùng, Hổ phách',8,4,'https://product.hstatic.net/1000025647/product/nuoc-hoa-chanel-bleu-de-chanel-min_grande.png',1,1,'2026-03-28 00:15:56.000','2026-03-28 00:15:56.000',NULL,NULL),(45,'Dior Sauvage EDP','dior-sauvage-edp','Biểu tượng nước hoa nam của thời đại mới',NULL,2,1,'EDP','MALE','Pháp','Hạt tiêu Sichuan, Chanh bergamot','Lavender, Tiêu','Ambroxan, Gỗ tuyết tùng, Labdanum',10,5,'https://orchard.vn/wp-content/uploads/2018/04/dior-sauvage-edp_5.jpg',1,1,'2026-03-28 00:15:56.000','2026-03-28 00:15:56.000',NULL,NULL),(46,'Dior Miss Dior EDP','dior-miss-dior-edp','Tinh tế, lãng mạn – biểu tượng nước hoa nữ của Dior',NULL,2,2,'EDP','FEMALE','Pháp','Hoa hồng cánh cung, Chanh bergamot','Peony, Grasse Rose','Xạ hương trắng, Hổ phách, Gỗ đàn hương',7,3,'https://orchard.vn/wp-content/uploads/2021/12/dior-miss-dior-edp-2021_2.jpg',1,1,'2026-03-28 00:15:56.000','2026-03-28 00:15:56.000',NULL,NULL),(47,'Gucci Guilty EDP','gucci-guilty-edp','Nước hoa nữ táo bạo, gợi cảm mang phong cách Ý',NULL,3,2,'EDP','FEMALE','Ý','Hoa cam, Chanh bergamot, Hoa oải hương','Hoa hồng, Hoa đào','Xạ hương, Gỗ đàn hương, Hổ phách',7,3,'https://bizweb.dktcdn.net/100/335/381/products/tapis-f270a3ea-cfe7-4af1-b736-9f45d989187b.png?v=1688455400747',0,1,'2026-03-28 00:15:56.000','2026-03-28 00:15:56.000',NULL,NULL),(48,'Tom Ford Black Orchid EDP','tom-ford-black-orchid-edp','Huyền bí, đen và quyến rũ — kiệt tác của Tom Ford',NULL,4,3,'EDP','UNISEX','Mỹ','Nấm truffle, Bergamot, Hoa cúc Pháp','Hoa lan đen, Hoa sen','Patchouli đen, Vanilla, Nhựa cây benzoin',10,5,'https://orchard.vn/wp-content/uploads/2024/09/tom-ford-black-orchid-edp-mini-4ml_2.jpg',1,1,'2026-03-28 00:15:56.000','2026-03-28 00:15:56.000',NULL,NULL),(49,'Tom Ford Oud Wood EDP','tom-ford-oud-wood-edp','Gỗ trầm hương quý hiếm trong dòng Private Blend',NULL,4,3,'EDP','UNISEX','Mỹ','Hoa hồi, Cardamom, Tiêu Sichuan','Gỗ oud, Gỗ tuyết tùng, Gỗ đàn hương','Vani, Hổ phách, Tonka bean',12,4,'https://lanperfume.com/wp-content/uploads/2024/07/oud-wood-1200x675.jpg',1,1,'2026-03-28 00:15:56.000','2026-03-28 00:15:56.000',NULL,NULL),(50,'Versace Eros EDT','versace-eros-edt','Mùi hương nam mạnh mẽ lấy cảm hứng từ thần tình yêu Eros',NULL,5,1,'EDT','MALE','Ý','Bạc hà, Táo xanh, Chanh','Tonka bean, Hoa nhài, Geranium','Vanilla, Vetiver, Gỗ tuyết tùng',7,4,'https://lanperfume.com/wp-content/uploads/2024/07/eros-edt.jpg',0,1,'2026-03-28 00:15:56.000','2026-03-28 00:15:56.000',NULL,NULL),(51,'YSL Black Opium EDP','ysl-black-opium-edp','Nước hoa nữ quyến rũ với hương cà phê đen và vanilla',NULL,6,2,'EDP','FEMALE','Pháp','Hoa cam hồng, Lê','Cà phê đen, Hoa nhài, Cam bergamot','Vanilla, Patchouli, Gỗ tuyết tùng',8,4,'https://product.hstatic.net/1000025647/product/ysl-black-opium-edp-extreme-90ml_6d9ac82d938f4d9cb1590a380065e32d_1024x1024.png',1,1,'2026-03-28 00:15:56.000','2026-03-28 00:15:56.000',NULL,NULL),(52,'YSL Libre EDP','ysl-libre-edp','Tự do và mạnh mẽ — tinh thần phụ nữ hiện đại',NULL,6,2,'EDP','FEMALE','Pháp','Lavender Marocco, Mandarin','Tuberose, Hoa cam','Xạ hương, Ambergris, Vanilla Bourbon',8,4,'https://lanperfume.com/wp-content/uploads/2024/07/libre-edp-90.jpg',0,1,'2026-03-28 00:15:56.000','2026-03-28 00:15:56.000',NULL,NULL),(53,'Armani Acqua di Gio EDT','armani-acqua-di-gio-edt','Hương biển mát lành, biểu tượng nước hoa nam thập niên 90',NULL,7,1,'EDT','MALE','Ý','Chanh Sicily, Lá limes, Bergamot','Hyacinth, Sage, Jasmine biển','Gỗ tuyết tùng, Xạ hương, Amber',6,3,'https://eap.com.vn/wp-content/themes/yootheme/cache/43/1577701905_7248_nuoc-hoa-giorgio-armani-acqua-di-gio-edt-100ml-43f01ac6.webp',0,1,'2026-03-28 00:15:56.000','2026-03-28 00:15:56.000',NULL,NULL),(54,'Armani Si EDP','armani-si-edp','Quyến rũ, hiện đại và tao nhã – dành cho phụ nữ mạnh mẽ',NULL,7,2,'EDP','FEMALE','Ý','Nước hoa hồng, Berries đen','Hoa hồng, Freesia','Vanilla, Xạ hương trắng, Gỗ đàn hương',7,3,'https://lanperfume.com/wp-content/uploads/2024/12/mui-huong-chinh-giorgio-armani-si.jpg',0,1,'2026-03-28 00:15:56.000','2026-03-28 00:15:56.000',NULL,NULL),(55,'Maison Margiela Replica Jazz Club EDT','maison-margiela-replica-jazz-club-edt','Hơi ấm của quán jazz ban đêm — rum, thuốc lá và gỗ',NULL,8,3,'EDT','UNISEX','Pháp','Hạt tiêu hồng, Neroli, Tiểu hồi','Clary sage, Hoa ylang-ylang','Rum, Thuốc lá, Vanilla, Gỗ đàn hương',8,3,'https://lanperfume.com/wp-content/uploads/2024/12/fullbox-replica-jazz-club-edt-1.jpg',1,1,'2026-03-28 00:15:56.000','2026-03-28 00:15:56.000',NULL,NULL),(56,'Maison Margiela Replica Lazy Sunday Morning EDT','maison-margiela-replica-lazy-sunday-morning-edt','Sáng Chủ nhật thư giãn — hương sữa, xạ hương và hoa tinh khiết',NULL,8,3,'EDT','UNISEX','Pháp','Ý dĩ, Mộc lan','Hoa hồng, Xạ hương','Xạ hương trắng, Vải bông, Kem sữa',6,2,'https://clmensstore.com/wp-content/uploads/2022/02/d5f9363fe8b2ecd32e063949992fb5b1-Recovered-2.jpg',0,1,'2026-03-28 00:15:56.000','2026-03-28 00:15:56.000',NULL,NULL),(137,'Chanel Coco Mademoiselle EDP','chanel-coco-mademoiselle-edp','Quyến rũ, trẻ trung và độc lập – biểu tượng phụ nữ hiện đại Chanel',NULL,1,2,'EDP','FEMALE','Pháp','Cam quýt, Grapefruit, Bergamot','Hoa hồng Thổ Nhĩ Kỳ, Hoa nhài, Mimosa','Patchouli, Vetiver, Xạ hương trắng',8,4,'https://product.hstatic.net/1000340570/product/chanel-coco-mademoiselle-eau-de-parfum_07182a39e1284e6baa039201260e0236_master.jpg',1,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(138,'Chanel Allure Homme Sport EDT','chanel-allure-homme-sport-edt','Năng động, tươi mát – dành cho nam giới năng động',NULL,1,1,'EDT','MALE','Pháp','Bạc hà, Cam, Elemi','Aldehyde, Lá ngải cứu, Cedarmoss','Gỗ tuyết tùng, Vanilla, Xạ hương trắng',6,3,'https://lanperfume.com/wp-content/uploads/2024/07/allure-homme-sport-b.jpg',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(139,'Chanel Chance Eau Tendre EDP','chanel-chance-eau-tendre-edp','Nhẹ nhàng, trong sáng và lãng mạn từ dòng Chance',NULL,1,2,'EDP','FEMALE','Pháp','Grapefruit, Quince','Hoa nhài, Hoa hồng','Xạ hương trắng, Iris, Hổ phách trắng',7,3,'https://lanperfume.com/wp-content/uploads/2024/07/chance-eau-tendre.jpg',1,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(141,'Chanel Gabrielle EDP','chanel-gabrielle-edp','Nữ tính, trong sáng – lấy cảm hứng từ cuộc đời Coco Chanel',NULL,1,2,'EDP','FEMALE','Pháp','Mandarin, Cassis','Hoa tuberose, Hoa nhài, Ylang-ylang','Xạ hương, Gỗ đàn hương, Hoa sữa',8,3,'https://lanperfume.com/wp-content/uploads/2024/07/gabrielle-b.jpg',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(142,'Chanel Platinum Egoiste EDT','chanel-platinum-egoiste-edt','Thanh lịch, sang trọng – đẳng cấp quý ông Chanel',NULL,1,1,'EDT','MALE','Pháp','Bergamot, Cam, Lavender','Hoa hồng, Geranium, Sage','Gỗ đàn hương, Hổ phách, Xạ hương',7,3,'https://lamoon.vn/wp-content/uploads/2020/11/platinum100.jpg',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(145,'Chanel Allure EDP','chanel-allure-edp','Cổ điển và nữ tính – vẻ đẹp vượt thời gian Chanel',NULL,1,2,'EDP','FEMALE','Pháp','Mandarin, Bergamot, Hoa cam','Magnolia, Hoa hồng, Hoa nhài','Vanilla, Vetiver, Xạ hương',7,3,'https://missi.com.vn/wp-content/uploads/2016/11/Chanel-Allure-EDP-1.jpg',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(147,'Dior Homme Intense EDP','dior-homme-intense-edp','Hương hoa diên vỹ nam tính và đầy cuốn hút',NULL,2,1,'EDP','MALE','Pháp','Lavender, Lemon','Iris, Đậu tonka, Ambrette','Gỗ đàn hương, Vetiver, Xạ hương',8,3,'https://orchard.vn/wp-content/uploads/2015/04/dior-homme-intense_2.jpg',1,1,'2026-04-01 17:51:03.000','2026-04-08 16:50:44.274',NULL,NULL),(148,'Dior J\'adore EDP','dior-jadore-edp','Bông hoa vĩnh cửu – biểu tượng nữ giới sang trọng của Dior',NULL,2,2,'EDP','FEMALE','Pháp','Champagne, Melon, Magnolia','Hoa hồng, Hoa nhài Sambac, Tuberose','Xạ hương, Blackberry musk',8,4,'https://lanperfume.com/wp-content/uploads/2024/07/jadore-parfum-b.jpg',1,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(149,'Dior Fahrenheit EDT','dior-fahrenheit-edt','Độc đáo, phá cách – hương nước hoa nam huyền thoại của Dior',NULL,2,1,'EDT','MALE','Pháp','Hoa cam, Mandarin, Heliotrope','Hạt nhục đậu khấu, Gỗ tuyết tùng, Súng vàng','Xã hương, Da thuộc, Xạ hương',8,4,'https://product.hstatic.net/1000340570/product/fahrenheit-christian-dior-for-men_41c944dba34842ba98d3d31dd20082cd.jpg',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(150,'Dior Hypnotic Poison EDT','dior-hypnotic-poison-edt','Ma mị, huyền bí – mùi hương thôi miên của Dior',NULL,2,2,'EDT','FEMALE','Pháp','Hoa cam đắng, Hoa almond','Nhân almond đắng, Caraway, Bruyère','Vanilla, Xạ hương, Gỗ đàn hương',8,4,'https://nuochoamc.com/upload/images/san-pham/104/dior-hypnotic-poison-edt-50ml12.webp',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(151,'Dior Eau Savage Parfum','dior-eau-sauvage-parfum','Thơm mát, tươi sáng – phiên bản Parfum tinh tế của Eau Sauvage',NULL,2,1,'PARFUM','MALE','Pháp','Bergamot, Hoa nhài, Basil','Hương thảo, Sage, Patchouli','Gỗ đàn hương, Vetiver, Xạ hương',10,4,'https://images-na.ssl-images-amazon.com/images/I/51C+xX9QHFL.jpg',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(152,'Dior Poison Girl EDP','dior-poison-girl-edp','Ngọt ngào, táo bạo và nữ tính bất ngờ',NULL,2,2,'EDP','FEMALE','Pháp','Cam đắng, Hoa cam','Hoa hồng tuyết, Ylang-ylang','Vanilla bourbon, Benzoin, Xạ hương',8,3,'https://apaniche.vn/wp-content/uploads/2023/05/Dior-Poison-Girl-for-Women-EDP-apa-niche.jpeg',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(154,'Dior La Nuit Tresor EDP','dior-la-nuit-tresor-edp','Đêm tình yêu – hương hoa quả mọng và văn-ni lãng mạn',NULL,2,2,'EDP','FEMALE','Pháp','Lychee, Đào, Mâm xôi','Hoa hồng đen, Hoa nhài','Vanilla đen, Xạ hương, Patchouli',9,4,'https://apaniche.vn/wp-content/uploads/2023/05/Lancome-La-nuit-Tresor-EDP-apa-niche.png',1,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(155,'Dior Homme Cologne','dior-homme-cologne','Tươi sáng và sạch sẽ – tinh thần quý ông hiện đại',NULL,2,1,'EDC','MALE','Pháp','Lemon, Bergamot, Grapefruit','Iris, Hương thảo, Basil','Vetiver, Xạ hương trắng, Gỗ tuyết tùng',5,2,'https://xomthom.vn/wp-content/uploads/2023/01/Dior-Homme-Cologne-Eau-de-Cologne.jpg',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(157,'Gucci Flora Gorgeous Gardenia EDP','gucci-flora-gorgeous-gardenia-edp','Hoa gardenia tươi sáng – cảm giác mùa hè ngọt ngào',NULL,3,2,'EDP','FEMALE','Ý','Hoa cam hồng, Hoa ban trắng','Gardenia, Frangipani','Xạ hương trắng, Gỗ đàn hương, Hổ phách',7,3,'https://product.hstatic.net/1000340570/product/flora-gorgeous-gardenia-eau-de-parfum-gucci-for-women_6d16a07f88874f7d860d424992487e4c_master.jpg',1,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(158,'Gucci Guilty Pour Homme EDT','gucci-guilty-pour-homme-edt','Lemon, lavender và gỗ – sự quyến rũ táo bạo cho nam',NULL,3,1,'EDT','MALE','Ý','Lemon, Lavender','Hoa cam, Neroli','Gỗ đàn hương, Patchouli, Hổ phách',7,3,'https://product.hstatic.net/1000340570/product/gucci-guilty-pour-homme-edt-_151ce2b68c6d4ce8a25d2ffcaabeba15.jpg',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(159,'Gucci Bloom EDP','gucci-bloom-edp','Bạch hoa xuyến chi trắng tinh khôi – vẻ đẹp thuần khiết nước Ý',NULL,3,2,'EDP','FEMALE','Ý','Hoa cam, Tuberose','Hoa nhài, Rangoon creeper','Xạ hương, Gỗ đàn hương',8,3,'https://product.hstatic.net/1000340570/product/bloom-edp_af83b7f7217e433dbafa621ec2f2509e_master.jpg',1,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(161,'Gucci Pour Homme EDT','gucci-pour-homme-edt','Tinh tế và mạnh mẽ – hương nước hoa nam kinh điển của Gucci',NULL,3,1,'EDT','MALE','Ý','Bergamot, Lavender','Hương thảo, Gỗ tuyết tùng','Da thuộc, Xạ hương, Patchouli',7,3,'https://lanperfume.com/wp-content/uploads/2024/07/pour-homme-edt-1200x900.jpg',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(162,'Gucci Memoire d\'une Odeur EDP','gucci-memoire-dune-odeur-edp','Ký ức thuần khiết – mùi hương tối giản cho mọi giới tính',NULL,3,3,'EDP','UNISEX','Ý','Hoa cúc Roman, Bergamot','Hoa nhài Sambac, Hoa cúc Ý','Xạ hương không khí, Gỗ đàn hương, Vanilla',8,3,'https://lanperfume.com/wp-content/uploads/2024/07/memoire-1080x1080.jpg',1,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(164,'Gucci Guilty Intense EDP','gucci-guilty-intense-edp','Phiên bản đậm đà hơn của Gucci Guilty – đam mê bất tận',NULL,3,2,'EDP','FEMALE','Ý','Bergamot, Hoa cam hồng','Hoa đào, Hoa hồng lilac','Xạ hương, Gỗ đàn hương, Patchouli',8,4,'https://orchard.vn/wp-content/uploads/2024/07/gucci-guilty-intense-pour-femme_2.jpg',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(166,'Gucci Made to Measure EDT','gucci-made-to-measure-edt','Gỗ và gia vị – thêu may đo dành cho đàn ông thành đạt',NULL,3,1,'EDT','MALE','Ý','Tiêu hồng, Bergamot, Chanh','Hoa oải hương, Gỗ tuyết tùng','Gỗ đàn hương, Xạ hương, Hổ phách',7,3,'https://theperfume.vn/wp-content/uploads/2017/03/Gucci-Made-To-Measure-e1668505839821.png',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(169,'Tom Ford Grey Vetiver EDP','tom-ford-grey-vetiver-edp','Vetiver khói và gỗ – quý ông sang trọng phong cách Tom Ford',NULL,4,1,'EDP','MALE','Mỹ','Grapefruit, Salvia','Orris, Sage, Oakmoss','Vetiver, Gỗ đàn hương, Hổ phách',9,4,'https://lanperfume.com/wp-content/uploads/2024/07/grey-vetiver-1200x1197.jpg',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(170,'Tom Ford Velvet Orchid EDP','tom-ford-velvet-orchid-edp','Hoa lan nhung – gợi cảm và huyền bí cho phụ nữ',NULL,4,2,'EDP','FEMALE','Mỹ','Rum, Nấm truffle đen','Hoa lan, Hoa rum','Labdanum, Heliotrope, Vanilla, Xạ hương',9,4,'https://lanperfume.com/wp-content/uploads/2024/07/velvet-orchid-b.jpg',1,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(171,'Tom Ford Soleil Blanc EDP','tom-ford-soleil-blanc-edp','Ánh nắng trắng – xa hoa và tươi sáng mùa hè',NULL,4,3,'EDP','UNISEX','Mỹ','Cardamom, Bergamot','Tuberose, Hoa nhài, Ylang-ylang','Coconut, Xạ hương, Gỗ đàn hương',8,4,'https://xxivstore.com/wp-content/uploads/2020/06/Solei-Blanc.png',1,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(172,'Tom Ford Jasmin Rouge EDP','tom-ford-jasmin-rouge-edp','Hoa nhài đỏ thắm – nữ tính cuồng nhiệt và đầy bản lĩnh',NULL,4,2,'EDP','FEMALE','Mỹ','Hoa nhài absolute','Hoa ylang-ylang, Cardamom, Star anise','Xạ hương, Labdanum, Hổ phách',9,4,'https://lanperfume.com/wp-content/uploads/2024/07/jasmin-rouge-1200x675.jpg',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(174,'Tom Ford Beau de Jour EDP','tom-ford-beau-de-jour-edp','Lavender và gỗ – quý ông thanh lịch ban ngày',NULL,4,1,'EDP','MALE','Mỹ','Lavender, Bergamot','Clary sage, Geranium','Vetiver, Gỗ đàn hương, Xạ hương đen',8,3,'https://mfparis.vn/wp-content/uploads/2023/02/nuoc-hoa-nam-tom-ford-beau-de-jour-eau-de-parfum-359273.jpg',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(175,'Tom Ford Azure Lime EDC','tom-ford-azure-lime-edc','Xanh biển và vôi tươi – mát lành và sảng khoái',NULL,4,1,'EDC','MALE','Mỹ','Lime, Bergamot, Gừng biển','Violet, Lavender nước','Xạ hương biển, Driftwood, Oakmoss',6,3,'https://nuochoamc.com/upload/images/san-pham/2210/tom-ford-azure-lime-edp-50ml1.webp',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(176,'Tom Ford Rose Prick EDP','tom-ford-rose-prick-edp','Hoa hồng gai – tuyệt tác đỏ rực sang trọng của Tom Ford',NULL,4,3,'EDP','UNISEX','Mỹ','Tiêu hồng, Bergamot','Hoa hồng Centifolia, Hoa violet','Gỗ đàn hương, Xạ hương, Vetiver',10,4,'https://lanperfume.com/wp-content/uploads/2024/07/rose-prick-b.jpg',1,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(178,'Versace Dylan Blue EDT','versace-dylan-blue-edt','Mùi hương Địa Trung Hải – mạnh mẽ và lịch lãm',NULL,5,1,'EDT','MALE','Ý','Grapefruit, Bergamot, Dứa','Hoa violet, Thyme, Papyrus','Xạ hương, Hổ phách, Gỗ patchouli',8,4,'https://lanperfume.com/wp-content/uploads/2024/07/dylan-blue-b.jpg',1,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(179,'Versace The Dreamer EDT','versace-the-dreamer-edt','Giấc mơ lãng mạn – hương thuốc lá và hoa ngọt ngào',NULL,5,1,'EDT','MALE','Ý','Mandarin, Bergamot, Juniper','Hoa huệ, Tarragon, Iris','Tabac, Ambergris, Xạ hương',7,3,'https://theperfume.vn/wp-content/uploads/2020/08/Nuoc-hoa-Versace-The-Dreamer-200x200.jpg',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(180,'Versace Crystal Noir EDP','versace-crystal-noir-edp','Tinh thể đen bí ẩn – gợi cảm và sâu lắng',NULL,5,2,'EDP','FEMALE','Ý','Gừng, Hoa tiêu','Gardenia, Hoa nhài, Hoa cam','Xạ hương, Hổ phách, Gỗ đàn hương',7,3,'https://cdn.dafc.com.vn/catalog/product/dafc/1204698_000.jpg',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(182,'Versace Pour Homme EDT','versace-pour-homme-edt','Địa Trung Hải tươi mát – vẻ đẹp quý ông Ý',NULL,5,1,'EDT','MALE','Ý','Bergamot, Lemon, Neroli','Hải táo, Hyacinth, Sage','Gỗ đàn hương, Xạ hương, Gỗ tuyết tùng',6,3,'https://cdn.dafc.com.vn/catalog/product/dafc/1196330_000_67d9210b92981.jpg',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(183,'Versace Eros Flame EDP','versace-eros-flame-edp','Ngọn lửa đam mê – phiên bản EDP nồng nàn của Eros','Eros Flame của Versace được cho ra mắt vào năm 2018, được điều chế bởi nhà điều hương khá nổi tiếng Aurelien Guichard.\n\nEros Flame khởi đầu đầy mát mẻ và sảng khoái đến từ những nốt hương cam quýt như mở ra một không gian đầy ánh sáng. Vị thanh mát của chanh, tinh dầu cam Mandarin và cam Chinotto mang đến sự ngọt ngào. Đan xen trong đó là chút nhẹ nhàng của hương thảo khiến cho vị cay nồng của tiêu đen trở nên hài hòa hơn.\nỞ lớp hương giữa là một hương vị đầy ấm áp và dễ chịu, phong vị của tiêu đen vẫn còn để lại dấu ấn bền lâu. Tiêu đen trong nốt hương này tượng trưng cho sự mạnh mẽ, cá tính của người đàn ông. Versace Eros Flame sử dụng thêm hương hoa khiến cho hương tiêu không bị quá nồng. Sự duyên dáng, dịu nhẹ của hoa hồng và hoa phong lữ quyến luyến, quấn chặt lấy tiêu đen. Và cuối cùng để làm tăng sự quyến rũ, gợi cảm một cách tinh tế đã đẩy cảm xúc lên đến cao trào. Sự the mát, sảng khoái của rêu sồig đan vào sự dịu ngọt, mềm mại của hương Vanilla và đậu Tonka. Dư vị cay ngọt của hoắc hương được nâng đỡ bởi sự ấm áp, tự nhiên đến từ gỗ đàn hương và gỗ tuyết tùng.\n\nHương đầu: Cây hương thảo, Cam chinotto, Quả chanh vàng, Quả quýt hồng, Tiêu đen. \nHương giữa: Hoa hồng, Hoa phong lữ, Hạt tiêu. \nHương cuối: Cây hoắc hương, Đậu Tonka, Gỗ đàn hương, Gỗ tuyết tùng Texas, Hương Vani, Rêu sồi.',5,1,'EDP','MALE','Ý','Cam ngọt, Lemon, Bưởi','Tiêu đen, Hoa hồng, Rosemary','Gỗ đàn hương, Hổ phách, Gỗ tuyết tùng',8,4,'https://www.jordan1.vn/wp-content/uploads/2023/09/admin.vuahanghieu-removebg-preview_7fc4ba644912453bbbe9974cb56f2b83_cfcd7d2462ed4b459b8c3427f552547d.png',1,1,'2026-04-01 17:51:03.000','2026-04-15 11:40:29.112','Chính sách bảo hành\nLAN Perfume sẽ hỗ trợ khách hàng đổi sản phẩm trong vòng 03 ngày kể từ ngày mua tại cửa hàng hoặc 03 ngày kể từ ngày nhận hàng online (Quý khách vui lòng quay lại video khi nhận hàng).\n\nChính sách đổi trả\n1. ĐIỀU KIỆN ĐỔI HÀNG\nSản phẩm khách hàng chưa sử dụng: còn nguyên seal, tem niêm phong của LAN Perfume hoặc hóa đơn mua hàng.\nSản phẩm bị hư hỏng do lỗi của nhà sản xuất.\nHư hỏng phần vòi xịt, thân chai nứt, bể trong quá trình vận chuyển.\nNước hoa bị rò rỉ, giảm dung tích so với thực tế khi vừa nhận hàng.\nNước hoa bị biến đổi màu hoặc mùi hương khi nhận hàng.\nGiao sai hoặc nhầm lẫn với mùi hương khác so với đơn đặt hàng.\nLƯU Ý: Chỉ nhận đổi hàng khi có video nhận hàng\n\n2. QUY TRÌNH ĐỔI HÀNG\nĐổi với sản phẩm khách hàng chưa sử dụng:\nGiá trị sản phẩm mới phải tương đương hoặc cao hơn giá trị đổi của sản phẩm cũ (nếu giá cao hơn khách hàng vui lòng thanh toán thêm phần chênh lệch).\nĐổi với các sản phẩm bị hư hỏng do lỗi của nhà sản xuất:\nLAN Perfume sẽ hỗ trợ khách đổi sản phẩm, hỗ trợ 100% chi phí phát sinh.\n3. CÁC TRƯỜNG HỢP KHÔNG HỖ TRỢ ĐỔI\nKhông áp dụng đổi hàng cho các sản phẩm chiết, gốc chiết.\nCác sản phẩm không còn nguyên seal, seal có dấu hiệu bị rách, bẩn.\nCác sản phẩm không có tem niêm phong của LAN Perfume hoặc tem có dấu hiệu bị cậy, rách.\nCác sản phẩm được LAN Perfume tặng kèm khi mua hàng tại cửa hàng hoặc qua hình thức online.\nCác sản phẩm đã quá hạn đổi trả.\n4. CÁC LƯU Ý ĐẶC BIỆT\nKhách hàng vui lòng trả phí vận chuyển, phí phát sinh trong trường hợp muốn đổi sản phẩm qua hình thức Online.\nKhách hàng mua Online vui lòng quay lại video khi nhận hàng.\nTrước khi đổi hàng qua hình thức Online, quý khách vui lòng quay chụp lại 6 mặt của sản phẩm gửi qua Fanpage:@Lanperfumeauth (LAN Perfume) hoặc Instargram: lanperfume.official','Hướng Dẫn Sử Dụng:\n\nƯu tiên xịt nước hoa vào các vị trí như cổ tay, khuỷu tay, sau tai, gáy và cổ trước.\nSau khi xịt nước hoa, tránh việc chà xát hoặc làm khô da bằng bất kỳ vật dụng nào khác. Điều này có thể làm phá vỡ các tầng hương của nước hoa, dẫn đến sự thay đổi mùi hương hoặc làm nước hoa bay mùi nhanh hơn.\nXịt nước hoa từ khoảng cách 15-20 cm với một lực xịt mạnh và dứt khoát để đảm bảo nước hoa phủ đều, tăng cường độ bám tỏa trên da.\nHiệu quả của nước hoa có thể thay đổi tùy thuộc vào thời gian, không gian, cơ địa và thói quen sinh hoạt, chế độ ăn uống của bạn.\nNên mang theo nước hoa bên mình hoặc sử dụng các mẫu nhỏ tiện lợi để dễ dàng bổ sung khi cần.\nBảo Quản Nước Hoa:\n\nNước hoa thường không có hạn sử dụng cụ thể, tuy nhiên, một số loại có thể có hạn sử dụng từ 24 đến 36 tháng kể từ ngày mở nắp và sử dụng lần đầu.\nBảo quản nước hoa ở nơi khô ráo, thoáng mát, tránh ánh nắng mặt trời, nhiệt độ cao hoặc quá lạnh. Tránh để nước hoa trong cốp xe hoặc các khu vực có nhiệt độ thay đổi thất thường.\nThông Tin Sản Phẩm:\n\nHạn sử dụng và ngày sản xuất được in trên bao bì sản phẩm.\nCảm ơn quý khách đã chọn LAN Perfume, chúng tôi cam kết cung cấp sản phẩm chính hãng và chất lượng cao. Sau khi sử dụng, xin vui lòng để lại nhận xét và đánh giá để chúng tôi có thể cải thiện và mang đến cho bạn những trải nghiệm tốt nhất.\n\nThông tin liên hệ:\n\nĐịa chỉ: 17 Ngõ 236 Khương Đình, Thanh Xuân, Hà Nội\nĐiện thoại: 058 950 6666\nMail: duwngperfume@gmail.com'),(186,'Versace Atelier Versace Bois d\'Encens EDP','versace-atelier-bois-dencens-edp','Nhang trầm và gỗ – hương thiền định đặc biệt từ Versace',NULL,5,3,'EDP','UNISEX','Ý','Gừng, Hoa cam','Nhang trầm, Hoa nhài','Gỗ đàn hương, Xạ hương, Oud',10,4,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVLZiWegCyYMV8T0lldW-ttrWIlWR8lz1Ig&s',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(187,'YSL Mon Paris EDP','ysl-mon-paris-edp','Tình yêu Paris – hương trái cây và musk lãng mạn',NULL,6,2,'EDP','FEMALE','Pháp','Dâu tây, Mâm xôi, Lý chua đen','Hoa mẫu đơn, Hoa nhài, Tiêu trắng','Xạ hương trắng, Patchouli, Ambrette',8,4,'https://lanperfume.com/wp-content/uploads/2024/07/mon-paris.jpg',1,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(188,'YSL L\'Homme EDP','ysl-lhomme-edp','Sang trọng, thanh lịch và quyền lực – đại diện quý ông YSL',NULL,6,1,'EDP','MALE','Pháp','Bergamot, Verveine, Gừng','Hoa nhài, Hoa tử đinh hương','Gỗ đàn hương, Đậu tonka, Gỗ tuyết tùng',8,3,'https://missi.com.vn/wp-content/uploads/2020/08/YSL-La-Nuit-de-IHomme-EDT.png',1,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(190,'YSL Y EDP','ysl-y-edp','Táo bạo, sang trọng, Y của đàn ông hiện đại',NULL,6,1,'EDP','MALE','Pháp','Ginger, Bergamot','Sage, Geranium, Hoa oải hương','Hổ phách, Gỗ tuyết tùng, Gỗ đàn hương',8,4,'https://nuochoamc.com/upload/images/san-pham/1034/yves-saint-laurent-ysl-y-1.webp',1,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(193,'YSL Kouros EDT','ysl-kouros-edt','Khỏe khoắn, kiêu hãnh – bất tử trong lịch sử nước hoa nam',NULL,6,1,'EDT','MALE','Pháp','Bergamot, Coriander, Hoa cam','Hoa nhài, Carnation, Hương trầm','Hổ phách, Da thuộc, Xạ hương',8,5,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOPi37MALbTPfWivZ1LHaZajtlspScQwpwiA&s',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(197,'Armani Code EDP','armani-code-edp','Bí ẩn, cuốn hút – mật mã quyến rũ của đàn ông Armani',NULL,7,1,'EDP','MALE','Ý','Bergamot, Lemon, Hoa cam','Hoa nhài, Guaiac wood','Đậu tonka, Gỗ đàn hương, Xạ hương',9,4,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAOIJAfUsgtJ9tRGdRedp7jnwHSfUjeAm1kg&s',1,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(198,'Armani My Way EDP','armani-my-way-edp','Theo cách của tôi – kết nối bản thân và thế giới',NULL,7,2,'EDP','FEMALE','Ý','Bergamot, Neroli','Hoa nhài Sambac, Hoa tuberose, Hoa cam','Gỗ đàn hương, Xạ hương trắng, Vanilla',9,4,'https://lanperfume.com/wp-content/uploads/2024/12/spct-giorgio-armani-my-way-edp-1200x1200.jpg',1,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(199,'Armani Acqua di Gio Profumo EDP','armani-acqua-di-gio-profumo-edp','Phiên bản EDP đậm đà của biểu tượng hương biển',NULL,7,1,'EDP','MALE','Ý','Bergamot, Hương biển','Hương trầm, Labdanum, Sage','Xạ hương, Gỗ patchouli, Gỗ tuyết tùng',10,4,'https://lanperfume.com/wp-content/uploads/2024/07/gio-profumo-1200x1193.jpg',1,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(200,'Armani Sì Passione EDP','armani-si-passione-edp','Đam mê cuồng nhiệt – bản mới đầy năng lượng của Armani Sì',NULL,7,2,'EDP','FEMALE','Ý','Mâm xôi đen, Bergamot','Hoa hồng, Hoa nhài','Patchouli đen, Vanilla, Xạ hương',8,4,'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&h=500&fit=crop',0,1,'2026-04-01 17:51:03.000','2026-04-01 17:51:03.000',NULL,NULL),(201,'Armani Stronger With You EDP','armani-stronger-with-you-edp','Mạnh mẽ hơn với em – vanilla và gia vị ấm áp lãng mạn','Phong cách: Ấm áp, Cuốn hút, Mạnh mẽ',7,1,'EDP','MALE','Ý','Tiêu hồng, Cardamom, Sage','Violet, Freesia','Đậu tonka, Vanilla, Caramel',9,4,'https://lanperfume.com/wp-content/uploads/2024/11/stronger-with-you-intensely-spct-1.jpg',1,1,'2026-04-01 17:51:03.000','2026-04-15 12:01:09.521',NULL,NULL),(217,'Ombre Leather','tf-ombre-leather',NULL,'Tom Ford Ombre Leather là hương nước hoa dành cho nam giới được ra mắt 2018. Mùi hương được điều chế bởi nhà điều hương Sonia Constant.\n\nMở đầu là hương thơm của Bạch đậu khấu với chút cay cay và thơm nhẹ. Ở lớp hương tiếp theo là sự góp mặt của Hoa nhài Sambac và Da thuộc tạo nên một hương thơm sang trọng và hứng khởi. Cuối cùng, với các nốt hương từ Cây hoắc hương, Hổ phách, Rêu sồi. Ombre Leather của TF làm nổi bật phần hư hỏng, trần trụi, mạnh mẽ.\n\n',4,1,'EDP','MALE',NULL,'Bạch đậu khấu.','Da thuộc, Hoa nhài Sambac','Hương cuối: Cây hoắc hương, Hổ phách, Rêu sồi Moss',6,2,'https://lanperfume.com/wp-content/uploads/2024/07/ombre-leather-b.jpg',0,1,'2026-04-08 15:54:29.612','2026-04-15 12:04:06.518','Chính sách bảo hành\nLAN Perfume sẽ hỗ trợ khách hàng đổi sản phẩm trong vòng 03 ngày kể từ ngày mua tại cửa hàng hoặc 03 ngày kể từ ngày nhận hàng online (Quý khách vui lòng quay lại video khi nhận hàng).\n\nChính sách đổi trả\n1. ĐIỀU KIỆN ĐỔI HÀNG\nSản phẩm khách hàng chưa sử dụng: còn nguyên seal, tem niêm phong của LAN Perfume hoặc hóa đơn mua hàng.\nSản phẩm bị hư hỏng do lỗi của nhà sản xuất.\nHư hỏng phần vòi xịt, thân chai nứt, bể trong quá trình vận chuyển.\nNước hoa bị rò rỉ, giảm dung tích so với thực tế khi vừa nhận hàng.\nNước hoa bị biến đổi màu hoặc mùi hương khi nhận hàng.\nGiao sai hoặc nhầm lẫn với mùi hương khác so với đơn đặt hàng.\nLƯU Ý: Chỉ nhận đổi hàng khi có video nhận hàng\n\n2. QUY TRÌNH ĐỔI HÀNG\nĐổi với sản phẩm khách hàng chưa sử dụng:\nGiá trị sản phẩm mới phải tương đương hoặc cao hơn giá trị đổi của sản phẩm cũ (nếu giá cao hơn khách hàng vui lòng thanh toán thêm phần chênh lệch).\nĐổi với các sản phẩm bị hư hỏng do lỗi của nhà sản xuất:\nLAN Perfume sẽ hỗ trợ khách đổi sản phẩm, hỗ trợ 100% chi phí phát sinh.\n3. CÁC TRƯỜNG HỢP KHÔNG HỖ TRỢ ĐỔI\nKhông áp dụng đổi hàng cho các sản phẩm chiết, gốc chiết.\nCác sản phẩm không còn nguyên seal, seal có dấu hiệu bị rách, bẩn.\nCác sản phẩm không có tem niêm phong của LAN Perfume hoặc tem có dấu hiệu bị cậy, rách.\nCác sản phẩm được LAN Perfume tặng kèm khi mua hàng tại cửa hàng hoặc qua hình thức online.\nCác sản phẩm đã quá hạn đổi trả.\n4. CÁC LƯU Ý ĐẶC BIỆT\nKhách hàng vui lòng trả phí vận chuyển, phí phát sinh trong trường hợp muốn đổi sản phẩm qua hình thức Online.\nKhách hàng mua Online vui lòng quay lại video khi nhận hàng.\nTrước khi đổi hàng qua hình thức Online, quý khách vui lòng quay chụp lại 6 mặt của sản phẩm gửi qua Fanpage:@Lanperfumeauth (LAN Perfume) hoặc Instargram: lanperfume.official','Hướng Dẫn Sử Dụng:\n\nƯu tiên xịt nước hoa vào các vị trí như cổ tay, khuỷu tay, sau tai, gáy và cổ trước.\nSau khi xịt nước hoa, tránh việc chà xát hoặc làm khô da bằng bất kỳ vật dụng nào khác. Điều này có thể làm phá vỡ các tầng hương của nước hoa, dẫn đến sự thay đổi mùi hương hoặc làm nước hoa bay mùi nhanh hơn.\nXịt nước hoa từ khoảng cách 15-20 cm với một lực xịt mạnh và dứt khoát để đảm bảo nước hoa phủ đều, tăng cường độ bám tỏa trên da.\nHiệu quả của nước hoa có thể thay đổi tùy thuộc vào thời gian, không gian, cơ địa và thói quen sinh hoạt, chế độ ăn uống của bạn.\nNên mang theo nước hoa bên mình hoặc sử dụng các mẫu nhỏ tiện lợi để dễ dàng bổ sung khi cần.\nBảo Quản Nước Hoa:\n\nNước hoa thường không có hạn sử dụng cụ thể, tuy nhiên, một số loại có thể có hạn sử dụng từ 24 đến 36 tháng kể từ ngày mở nắp và sử dụng lần đầu.\nBảo quản nước hoa ở nơi khô ráo, thoáng mát, tránh ánh nắng mặt trời, nhiệt độ cao hoặc quá lạnh. Tránh để nước hoa trong cốp xe hoặc các khu vực có nhiệt độ thay đổi thất thường.\nThông Tin Sản Phẩm:\n\nHạn sử dụng và ngày sản xuất được in trên bao bì sản phẩm.\nCảm ơn quý khách đã chọn LAN Perfume, chúng tôi cam kết cung cấp sản phẩm chính hãng và chất lượng cao. Sau khi sử dụng, xin vui lòng để lại nhận xét và đánh giá để chúng tôi có thể cải thiện và mang đến cho bạn những trải nghiệm tốt nhất.\n\nThông tin liên hệ:\n\nĐịa chỉ: 17 Ngõ 236 Khương Đình, Thanh Xuân, Hà Nội\nĐiện thoại: 0869 271 243\nMail: dungwperfume@gmail.com');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `queues`
--

DROP TABLE IF EXISTS `queues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `queues` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('PENDING','INPROGRESS','COMPLETED','FAILED') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'PENDING',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `queues_status_idx` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `queues`
--

LOCK TABLES `queues` WRITE;
/*!40000 ALTER TABLE `queues` DISABLE KEYS */;
/*!40000 ALTER TABLE `queues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `refresh_tokens`
--

DROP TABLE IF EXISTS `refresh_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `refresh_tokens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int NOT NULL,
  `expiresAt` datetime(3) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `refresh_tokens_token_key` (`token`),
  KEY `refresh_tokens_userId_idx` (`userId`),
  CONSTRAINT `refresh_tokens_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=157 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `refresh_tokens`
--

LOCK TABLES `refresh_tokens` WRITE;
/*!40000 ALTER TABLE `refresh_tokens` DISABLE KEYS */;
INSERT INTO `refresh_tokens` VALUES (7,'892b780604c937ec13b51005a786f39435672827369c3054c2fdde66b6d53b27',30,'2026-03-25 18:36:06.459','2026-03-25 16:36:06.462'),(8,'f457fbe7dd91ebf5461c5e3a3a668371ed7ab712c31bf1057c6d8642cb2a1217',31,'2026-03-26 08:48:42.349','2026-03-26 06:48:42.351'),(9,'5b6e3bd8c5bf9ed99e1b41f7df00d795f5c039738769404142c819b59c1e54a4',30,'2026-03-26 16:20:41.454','2026-03-26 14:20:41.463'),(10,'3fadb5b8b20a752d3b515a18887bce2e1993fbc8289c1cfba8cc343f20b0c793',30,'2026-03-26 16:20:50.019','2026-03-26 14:20:50.019'),(11,'0a53497c8a7ac6f4f028d8386ff4f4dd9dfb3adc3fbbe017241037732b23bc0b',30,'2026-03-26 16:24:14.791','2026-03-26 14:24:14.800'),(12,'a2c942d51cb7257b61d4baf152e192c3f7531da7873e3a5ab4f5887771fcf0b1',30,'2026-03-26 16:25:11.874','2026-03-26 14:25:11.875'),(13,'15b6fb637e5cd9a6164cf32dc1e8b5579d3afaf4c6645b6a005b65b883b5a96f',30,'2026-03-26 16:25:43.348','2026-03-26 14:25:43.348'),(14,'8576db49778255c1894c58c7044cbdf2391c7399838eeeed4b13d84ae4b57ff1',30,'2026-03-26 16:26:18.317','2026-03-26 14:26:18.318'),(15,'ae785f9b2ebef1726ecf932849c1091e028469fe82c91fc618f45c1f74e00675',30,'2026-03-26 16:26:46.985','2026-03-26 14:26:46.985'),(16,'164d9604c560ace45e5ecf101d02dbf9bb627dfd891b8ae3d82d98161e95a971',30,'2026-03-26 16:29:05.190','2026-03-26 14:29:05.190'),(17,'97f0c1efa6822f960ac663aa864e9322789dbe3447554c6553a9aea241400281',30,'2026-03-26 16:31:42.066','2026-03-26 14:31:42.066'),(18,'62571b4ff8dfb0d0d16b6c6a2a206204d824a449e6f2dd2f00428d215c837865',30,'2026-03-26 16:34:12.373','2026-03-26 14:34:12.373'),(19,'7e87bd8fd619ab2a1408a59418510f3c280da6caab77b83191f0f0250f54dd90',30,'2026-03-26 16:36:54.070','2026-03-26 14:36:54.070'),(20,'c6bf2076c65190192d461a21597c7df67217eb6cf0a75293928705523edb7e6b',30,'2026-03-26 16:37:59.830','2026-03-26 14:37:59.831'),(21,'97f146e417de0ebe59f740ae44338589e01cecb9163ced7db195e0471657e637',30,'2026-03-26 16:39:33.626','2026-03-26 14:39:33.626'),(22,'0173e6af4505f1326ac2be62566736334c4439852fbb71ac8b35b44f3d87ed7a',30,'2026-03-26 16:41:41.034','2026-03-26 14:41:41.034'),(23,'95c43764a17ef6e6c105dc328e190dd265ae511cdd0579da1dea67c759b357e9',30,'2026-03-26 16:55:38.225','2026-03-26 14:55:38.226'),(24,'a5dbfa9f317a2be5948fbb3d823576f2d1fbc8a9de5d53cf472cbe3926bd3e3b',30,'2026-03-26 16:57:42.167','2026-03-26 14:57:42.167'),(25,'90d9426fae55aabefc7ab102df948209ce02863c38f54befb699eb5b69d811c7',30,'2026-03-26 16:58:41.263','2026-03-26 14:58:41.263'),(26,'b678ff6664b45f8ab6bbf82fdb1285a1fd208aefec07c23891c9de1ef2a5560b',30,'2026-03-26 17:00:57.197','2026-03-26 15:00:57.197'),(27,'b8720eb1d97d86121384b37e54c25ba017efa82fe6e8ecb7084600c00a93f249',30,'2026-03-26 17:02:55.327','2026-03-26 15:02:55.328'),(28,'161ff2ae3e7caeb89c7ad9b0ad6251eacd7d1f362db8d35d3268c655a17a08c6',30,'2026-03-26 17:03:40.944','2026-03-26 15:03:40.944'),(29,'5ca7f8a78307edcc9427fbbf2b1c9ce39144dd2c7e7357f159a6fc8a7851149d',30,'2026-03-26 19:03:04.937','2026-03-26 17:03:04.953'),(30,'9a0302684f6c9e86495751d608f7b7601169a2b406bf4a43d7d8b74631a8866e',30,'2026-03-26 19:03:05.263','2026-03-26 17:03:05.263'),(31,'f00bdbb0b0fa5d79e4951358923ca4b7d88f32338e40e69c0ba8221312c7a209',30,'2026-03-26 19:03:23.069','2026-03-26 17:03:23.069'),(32,'2eee3e2fc5eab3edd98dce63617cadf1e451b7661f81a37b1246001b9e9bfb45',30,'2026-03-26 19:03:38.829','2026-03-26 17:03:38.830'),(33,'09450d0775814b8336e1679b878aaee74334990a49fc0be82f4e99e453ac68c1',30,'2026-03-26 19:04:06.682','2026-03-26 17:04:06.683'),(34,'0cf3bb76835224941b5ff32b88f9e1816a1763e9051d1f204e61604b292290eb',30,'2026-03-26 19:05:05.321','2026-03-26 17:05:05.321'),(35,'d89e148b0f92d8ff01a003f6f33a1a912ae63d46f79f724d18e8a8618efed633',30,'2026-03-26 19:05:47.673','2026-03-26 17:05:47.673'),(36,'6bb8045d28dd8c875a5cacd801eef46b54aa242d8fd10502328e66b1b764a4d6',30,'2026-03-26 19:06:29.664','2026-03-26 17:06:29.664'),(37,'fce82a9a295435f6e54dbbe5d2e37cb6dafb2b722ef8a6e43991098f6fae1e1d',30,'2026-03-26 19:08:29.858','2026-03-26 17:08:29.858'),(38,'13e2fa335f7aced12006121173a4724e788d0fad724f747ef6c223c3843d1257',30,'2026-03-26 19:08:30.396','2026-03-26 17:08:30.397'),(39,'9a3159eb18ad8a1e0b24f98d0049f03f68278cff0f215d4a03a247784886c48a',30,'2026-03-26 19:08:31.279','2026-03-26 17:08:31.280'),(40,'1342cfb509c4d202367d6d23fa7e615cbafc969c7e3c017bb8ba8c5e9157aefa',30,'2026-03-26 19:08:54.319','2026-03-26 17:08:54.320'),(41,'9429320fe55c4528ca8b4bf99dedfc935f26438c9b33a154bb8047a22af41dae',30,'2026-03-26 19:12:30.184','2026-03-26 17:12:30.185'),(42,'b50bbfef4c66e0f92b7b5e55d0fa544733b4c2fe8dc64d780e7d77557d28ac28',30,'2026-03-26 19:12:31.446','2026-03-26 17:12:31.447'),(43,'da03a5a1107650e618c2090678bd9874095f3b43390a87644d22d180c5dec3ae',30,'2026-03-26 19:12:40.495','2026-03-26 17:12:40.495'),(44,'b1150d6358ebfb08481691d4cc48978e4378cd6bae027a1cc9d294b6518afe88',30,'2026-03-26 19:12:43.045','2026-03-26 17:12:43.046'),(45,'ca29efe015d43964fcb8b5df4021cc79fdadc276d0f4ca5bf36d35224e6890bf',30,'2026-03-26 19:12:43.482','2026-03-26 17:12:43.483'),(46,'d64f8b304f9a0731ee65f1649fffb47d767e4e82d95d7cd73b14417349c630e5',30,'2026-03-26 19:33:53.728','2026-03-26 17:33:53.736'),(47,'6e6ae4ab07ccc8c7d966250b7ff0867774bf14cb88dd6ccae7112cf999218d1d',30,'2026-03-26 19:35:04.276','2026-03-26 17:35:04.276'),(48,'c994e57eb1e1412b924a5abef6e4796d4e6918d43bf4d289c9f7d544df52cbf9',30,'2026-03-26 19:36:18.615','2026-03-26 17:36:18.615'),(49,'52e1c3730630e6a3663342794b7aac391a9c60974460a28730b62c4547c0c606',30,'2026-03-26 19:36:38.516','2026-03-26 17:36:38.517'),(50,'e362690e426bf41348ae7ad141b28ffeda0cbc7cc8cb3267e6400e41008be7df',30,'2026-03-26 19:51:07.107','2026-03-26 17:51:07.108'),(51,'1ea034dcbe054a32e455194b076828da6aba174014a82735787ac4eb7e29b32a',30,'2026-03-26 19:52:29.191','2026-03-26 17:52:29.191'),(52,'7e3a378d9dcf3072ed29a322c4b79223a653c45b1a92728bdf2382f0353c1c61',30,'2026-03-26 19:52:29.513','2026-03-26 17:52:29.513'),(53,'20de8d0a605be9d3a2318f52b8f4bd475249ce14a6568bd44597e160ad428890',30,'2026-03-26 19:57:59.969','2026-03-26 17:57:59.970'),(54,'c52a71149df2e83a81208618f15aad8e69ee70695728aa6029c3ddaab9a44d01',30,'2026-03-26 19:59:02.962','2026-03-26 17:59:02.962'),(55,'45df3415a038f6f927cb2a001c577f3d5e4865e629b3b0d428feec12a46b269c',30,'2026-03-26 20:03:10.988','2026-03-26 18:03:10.988'),(56,'a388868d23d706ffe61b1235613a4cbd406b602a377756a80b5bd8dcbb0d3972',30,'2026-03-26 20:07:00.350','2026-03-26 18:07:00.350'),(57,'37f7be390c414739f1b83cd800cae4ced94209fdf5fecc2148e429ba4e0b790f',30,'2026-03-26 20:08:04.693','2026-03-26 18:08:04.693'),(58,'e505ea7056bd0b358a0f978fcfa9d7cdca7ed30775bb9394fa0ee47977464146',30,'2026-03-26 20:09:19.128','2026-03-26 18:09:19.128'),(59,'80e6c955c6fac76141845fe82d063fb74bca3f822a5b98a9706208e9d9766a25',30,'2026-03-26 20:11:34.918','2026-03-26 18:11:34.927'),(60,'b6743e522c0a2259ea50c2ff47ed3450a5b1bc6e6d3e81a2430bf964de70b063',30,'2026-03-26 20:11:51.477','2026-03-26 18:11:51.487'),(61,'65a1fb1e046f8c5378ac0801ed46b11ebb967c874a7d01bab3a444a596cf7d8c',30,'2026-03-26 20:28:51.055','2026-03-26 18:28:51.055'),(62,'884148ea2d6fe5548aab59dd70da23c4dae59e651ada3da12378f68e460e8482',30,'2026-03-26 20:29:14.091','2026-03-26 18:29:14.091'),(63,'4579d87a44b247859b589b52e2d71bc244cd297bfc2e49ce73195bfca451e440',30,'2026-03-26 20:30:30.905','2026-03-26 18:30:30.905'),(64,'51cc4f480f6a2032b17d103afa15af6007175fcf0c7681ffcb5cde38ac504d1c',30,'2026-03-26 20:30:52.198','2026-03-26 18:30:52.198'),(65,'828e5bdfeb8502aa49f7bedeade191e1700d7eaae258ad404715a63aff4831e5',30,'2026-03-26 20:31:11.081','2026-03-26 18:31:11.081'),(66,'3c66b5c5a119bf276f0f1c4436eae3f4701fb01252c23059ea56ac8f6a636154',30,'2026-03-26 20:31:29.852','2026-03-26 18:31:29.853'),(67,'8b91bdb1e014e3f5f799651adef1b2640d266629c547766d6fd050063ea872d4',30,'2026-03-26 20:32:05.116','2026-03-26 18:32:05.116'),(68,'06d7629ad54795cd98e708e5bf5f71ef23907ef638156719fda3c89b0bad6e8a',30,'2026-03-26 20:32:22.924','2026-03-26 18:32:22.924'),(69,'fc27a13ec92c6243d034c644663683465f89d9371ddeb3a7e0e1fd3c4036fce5',30,'2026-03-26 20:32:34.686','2026-03-26 18:32:34.687'),(70,'ae073c83643dfb604d9d8b6d312d7a18e4cbcb2eb4c018ad307fba4506eb12fa',30,'2026-03-26 20:33:17.470','2026-03-26 18:33:17.472'),(71,'e424bd887a03cb8b21a5fb50dffd2b75883bd92807fcea26daae12d4a994d36e',30,'2026-03-26 20:34:08.359','2026-03-26 18:34:08.359'),(72,'9407718c65127e92d2cfef59a3604c062e83e62605ce3fefae196e60381656b8',30,'2026-03-26 20:34:37.469','2026-03-26 18:34:37.469'),(73,'2293badb232663a34a557eda832215129ad7b98b505ff7b4f956ea6d72a0cd8a',30,'2026-03-26 20:37:24.623','2026-03-26 18:37:24.624'),(74,'ebcb839f27339c0692478f425f9c836cc3d4d47cda9f79c55d82e36b4e4492a8',30,'2026-03-27 16:06:49.480','2026-03-27 14:06:49.489'),(75,'eec8b2cae978601d575a1fd3ddd3c8dc566e97ab5a7ae6628038a88307ccad1f',30,'2026-03-28 06:59:40.436','2026-03-28 04:59:40.448'),(76,'d9dc1dbcec4bbf5654150ec1963f6a33755fa34103bd9069b747ba0ef01f36ed',30,'2026-03-28 16:16:02.693','2026-03-28 14:16:02.702'),(77,'2471872aad73390e351bf6495da01a9e39dd8b57f86ab05fd0d5c2736074aaec',30,'2026-03-28 17:56:54.508','2026-03-28 15:56:54.518'),(78,'32bd8bc2f8a685e3e0346a692990d7d563fab3ac56e67d2b60cb2a6b67a1f3a2',30,'2026-03-29 09:37:13.073','2026-03-29 07:37:13.081'),(79,'f5d5172db06b268ad74d8910f1b5a7d848239c2c954d9e8c72ea8f42dcd147c2',30,'2026-03-29 09:37:13.694','2026-03-29 07:37:13.702'),(80,'1e00fde7cfb12847e522e98327c2decdc88cd081b0ed371f607368c2cf1813c5',30,'2026-03-29 15:38:21.004','2026-03-29 13:38:21.005'),(81,'91a154913998c23776ad6b7baf0c24959551b7db3ad7ddaa249632be610768eb',30,'2026-03-29 15:38:20.984','2026-03-29 13:38:20.998'),(82,'e11a162b30eca3e24feb9295262b869cea1a6b13e0f3a9775f22e3138654ae44',30,'2026-03-29 16:45:00.766','2026-03-29 14:45:00.768'),(83,'ce897462f6ef110efc8d308c2ea48120cb22461bace43f438133f97e9cdb7be7',30,'2026-03-29 16:50:41.938','2026-03-29 14:50:41.938'),(84,'becb4fc08e54fd1fb8f6adcbf39f8c2c0fdaa4df0c0a86dab0c6630c315b5349',30,'2026-03-29 18:12:08.139','2026-03-29 16:12:08.146'),(85,'ba81a1130b16e7faa79404b9694a12fc0ef9d64e5258503ee5ffbea8188fc04f',30,'2026-03-30 11:56:40.137','2026-03-30 09:56:40.147'),(86,'6cb2d5a3b6eafac3be82d16b029fa5827205d7aeae5e310c2d5c9ebbdd2cb2e9',30,'2026-03-30 13:14:52.349','2026-03-30 11:14:52.397'),(88,'e18001dd23e613f1fba8cf4e49ae32c009e2d0a55792a83c62cf7c7363787edf',30,'2026-03-30 16:40:47.882','2026-03-30 14:40:47.891'),(89,'17074a6b9cf40d3045fd97485a01f6da270e679684793b13c513f97d7d2f68ae',30,'2026-03-30 18:20:28.242','2026-03-30 16:20:28.258'),(90,'2ea9a58be18525178fa3d6a2b45d8d612f4d325c7b3f2ee709b3b83bb6357199',30,'2026-03-30 19:44:53.356','2026-03-30 17:44:53.364'),(91,'911df551c06bab89e7331e84a07c6220ff172dbbbe1e2157e6795e372f75c6cb',30,'2026-03-31 19:42:50.659','2026-03-31 17:42:50.666'),(92,'715bef99d7d91b9ca191252c950f6ba55af5427a57fbd9f810930907754d010d',30,'2026-04-01 13:51:31.247','2026-04-01 11:51:31.258'),(93,'306f03dddcae1c3ca7db3d452858efb576023985864f941cd492392586baac5a',30,'2026-04-01 15:55:20.901','2026-04-01 13:55:20.950'),(94,'0f8b957594acb9e2eebef07e08ea25bc4d7add9ab3987ddf579ab3a2271925e2',30,'2026-04-01 19:51:20.511','2026-04-01 17:51:20.521'),(95,'a251c82973c7bd5fb6604d9f77dda00b801c90149f5e3c774f20c6b0bc5ab128',30,'2026-04-02 09:03:50.102','2026-04-02 07:03:50.110'),(96,'22af59d80f5277de780174ada69e03256d80e448b041e3806e1da4f40324b200',30,'2026-04-02 10:12:39.629','2026-04-02 08:12:39.638'),(97,'ab652eaf1f645c642ba2ff4276b407f91a14f13d3934341622139fbdd9615a3f',30,'2026-04-02 16:08:30.127','2026-04-02 14:08:30.128'),(98,'079f8b8b379fa102c92c722a9c2e1ff9d1cc4e5541eb6f2c36acac04d308345f',30,'2026-04-02 16:08:30.093','2026-04-02 14:08:30.115'),(99,'8971dbdef0f50fdca72dc40232f0bf601cdf6412b9d58b177868150f7ea62997',30,'2026-04-02 16:08:30.122','2026-04-02 14:08:30.125'),(100,'8d55ed74708571ee70622601f79039c3d840422e1135ddd23138e0eea142116b',30,'2026-04-02 16:42:05.212','2026-04-02 14:42:05.220'),(101,'828925cee51e12c2589150ddbff7b8a4aa1983be60e1227fa69a7395b9d8f7e9',30,'2026-04-02 17:42:30.815','2026-04-02 15:42:30.817'),(102,'b6ca30fec39d3452dc8e3eeb9f38f85611380acb2a77c3535d338a085f8f6564',30,'2026-04-03 09:28:55.523','2026-04-03 07:28:55.534'),(103,'0a55dff39b503b9debe20028717fe78a1779e8e415d1ec6f894552d74af4708e',30,'2026-04-03 10:05:21.764','2026-04-03 08:05:21.765'),(104,'2a7ce84bc191b1be3e7a23e7853e0f1a9a6d590d1eeeaa4fb11380b6f6a279f9',30,'2026-04-03 10:24:05.657','2026-04-03 08:24:05.670'),(105,'4701a545976b3797703815e83c79bb4b2d92cf1383ac589008e8833d6df8f443',30,'2026-04-04 14:35:51.723','2026-04-04 12:35:51.735'),(106,'2a3fdd49a9880a3dcd2de613f274866f8377f00aeeaffc39da33f31794d323e2',30,'2026-04-04 17:16:12.975','2026-04-04 15:16:12.983'),(107,'b57ce1e040e0c3c62641c3d808cea709fbfa89368d00c7511d02575002ef0774',30,'2026-04-04 17:22:41.299','2026-04-04 15:22:41.308'),(108,'c4f411e03c68835ef9f20e8a972602d2e0fc257ea3e4677c0114999cced79a9e',30,'2026-04-04 17:24:12.688','2026-04-04 15:24:12.689'),(109,'ac710d7d012de46b0481a7cadf5251d16e4e3e8e0d7d9ac5bb453b2c2ceb115f',30,'2026-04-04 20:30:31.510','2026-04-04 18:30:31.520'),(110,'2b77898ef004541f95ea7f6fc9f3d28c26c58fa8be77180861185603be498e7d',30,'2026-04-05 12:56:50.477','2026-04-05 10:56:50.489'),(111,'ae2bbf98aad2b38245ca8cb96c6af95daa1b09998d4d7d65b917651ac25cb34d',30,'2026-04-05 19:14:07.248','2026-04-05 17:14:07.258'),(112,'0d701f8ff289106e15f2a786228fb01dc15633dc4d1f2ff6e3abc384e146717e',30,'2026-04-05 20:16:04.399','2026-04-05 18:16:04.410'),(113,'90a275f313ea18e26345f62b8c70bf02a00550479bf816df6ca95572822c479f',30,'2026-04-07 19:55:43.915','2026-04-07 17:55:43.923'),(114,'5ef2481cf967e3bb658d90e974a03005db7971988b998dad76cc35c1fdbe2e95',32,'2026-04-07 20:05:09.458','2026-04-07 18:05:09.458'),(115,'a1b95cc466b9a3c33654a10da85379b5f015812b2a766590bc7ac54b153ef1d2',32,'2026-04-07 20:56:46.285','2026-04-07 18:56:46.294'),(116,'02f6aa1b5c034f0f7f17d542e596163dbaefae78c0f11d2c1c470b7f90d673b6',32,'2026-04-07 21:12:08.899','2026-04-07 19:12:08.908'),(117,'fa4daa5621ae5ea96ebd713157dc56557dc880072dfbaa13f473ec32bfc1c7a9',32,'2026-04-08 10:26:17.591','2026-04-08 08:26:17.605'),(118,'c37d7617bf1a4026aa3e54287959353a04929d66b7ac580eec7bac42821a5691',32,'2026-04-08 10:30:34.374','2026-04-08 08:30:34.379'),(120,'4b1226ca0c3652e53b7cf67c8b4aa13944115867af9d226451ef90d7706b025c',30,'2026-04-08 11:50:24.368','2026-04-08 09:50:24.377'),(121,'a90d3be6f77fbc89c61a8bb5f00be65735e22f20f58b5cf7a4fcd7f5dd7f05d2',32,'2026-04-08 11:50:46.307','2026-04-08 09:50:46.307'),(122,'57562343381590a508683308b57eb112d6c48b3346fccd80a19e4f15c222efb6',32,'2026-04-08 11:51:31.744','2026-04-08 09:51:31.744'),(123,'2e6f4a9adeeab4d345cc11b5eaa27f04746aa9cd58134c281795dae2c295e159',32,'2026-04-08 12:55:48.778','2026-04-08 10:55:48.788'),(124,'6f9f07a25c6d4eae58cf77ddff2e9de589ea6a93e7d5d55f0fead39a02868dd8',32,'2026-04-08 14:19:05.036','2026-04-08 12:19:05.044'),(125,'def9675740e066421c6005512a6400a34a39930f9e1b10e6f2862520ffd6641b',32,'2026-04-08 17:50:00.925','2026-04-08 15:50:00.936'),(126,'e1e94b5628bd53daf84cae59f36e562fd9a83e033bc110e79169de827ea40ead',32,'2026-04-08 17:50:01.675','2026-04-08 15:50:01.684'),(127,'def4cc284fabc9a4e4e332b84536678fc7b1c07c65538fdbc2ac9a64bdf98672',32,'2026-04-08 18:50:24.863','2026-04-08 16:50:24.870'),(128,'ac1105a2322666e979752d8c1f4d3fa3cdea77028f1384882dde16d30ae63576',32,'2026-04-08 19:53:06.528','2026-04-08 17:53:06.536'),(129,'ad96083c7af134bb4b1c3acfea2966ab2ab7c69529f1372a146b713cfdb8f0a8',32,'2026-04-08 21:04:07.190','2026-04-08 19:04:07.215'),(130,'73400970500dca788c9e4263708cbc8b95a79f2889f9f317d8ba00dba2f4b04e',32,'2026-04-09 10:26:37.656','2026-04-09 08:26:37.665'),(132,'4afcb9d8b084e32be52af13a7c0aa4ab493be1f4dd97b57eba2584724686ff79',32,'2026-04-09 16:46:17.639','2026-04-09 14:46:17.647'),(133,'e03aeda9b8259dc9816eac55191ae71c9d6d4afc5f2a51fa51ad7e711c0c2a87',32,'2026-04-09 17:51:38.132','2026-04-09 15:51:38.146'),(134,'c79924db796a512befe00db8f1c70be555b34edde3dfef28e6a005ddb63ef661',32,'2026-04-09 19:25:22.938','2026-04-09 17:25:22.946'),(135,'567705fbaa33e315c7bdca7da7539b43aab2a67b52d933c195f1d57e0e46dc0f',32,'2026-04-10 10:28:01.257','2026-04-10 08:28:01.267'),(136,'a76cdd0c58364f61b2d634b96fc865db3892d645afdf2b9d9423e6ce96c20f6e',32,'2026-04-10 11:53:03.074','2026-04-10 09:53:03.075'),(137,'216a3afddaf9c72eb4aac066e028e32eb01b688123e837114456b75def469180',32,'2026-04-11 21:14:19.522','2026-04-11 19:14:19.530'),(138,'3203b847558d3724f301f2a5df7c336ea2f8d562454524dfee144f5ad9ea3bb5',32,'2026-04-11 21:23:18.781','2026-04-11 19:23:18.790'),(139,'5665bb25a8bd59853e41e8d7c1cca62908403b9687dd078765d68c30986ee040',32,'2026-04-12 13:14:44.885','2026-04-12 11:14:44.897'),(140,'19253520927ab90b00041075401ea409b1b5cd3f4ca0bea0a87eea27d72a77f6',32,'2026-04-12 19:27:14.707','2026-04-12 17:27:14.714'),(141,'9e2cfc56ae5bec778ae6db3dd0bdc96bebd65edb97ad8285bd1c52ee66a719d9',32,'2026-04-14 13:45:20.063','2026-04-14 11:45:20.078'),(142,'f1746449cda5d7008cb972a4b0d0956b038b0b946b4de026be0bfddb72151f92',32,'2026-04-15 10:35:58.993','2026-04-15 08:35:59.001'),(144,'51d21f3463bcf2fd23898bb6a77216b8ae9e81231bf9ff0f639c41758b6b31ee',46,'2026-04-15 12:06:41.474','2026-04-15 10:06:41.479'),(145,'6e0a86b87c00ff818f5e4f491e803164a67adb0a3c003ab2ee7902f7315d96d0',46,'2026-04-15 12:07:00.725','2026-04-15 10:07:00.726'),(146,'abd041899c3c22dad9ce5ec60901f8975889cd1064c4a78b0c39919410bbeee8',32,'2026-04-15 12:59:41.295','2026-04-15 10:59:41.305'),(147,'18a8dab72c81b999f7e428d45ba358cfe08a3b4a15d1baa445c0d14750e89b4d',32,'2026-04-15 14:00:44.580','2026-04-15 12:00:44.588'),(148,'66d72eede8a2ca7299993f122a6893a95327e2acae30506a928c0af0b649c847',32,'2026-04-16 14:04:14.878','2026-04-16 12:04:14.896'),(149,'8fb710b794999ad8a960d26b97662f3b1e80ea5b1598653b5e6545360b69abb7',32,'2026-04-29 16:13:46.422','2026-04-29 14:13:46.440'),(150,'63a42017509cab283145e9e0766bd0b24bafcff6044b43f676f76be3562f1659',32,'2026-04-30 06:03:44.984','2026-04-30 04:03:45.182'),(151,'dbf8fb3c002755c89ac35f6f49b2bbdf38b10aed3147065281cf63305c5a1899',32,'2026-04-30 06:03:45.383','2026-04-30 04:03:45.384'),(152,'1a654c22e7c3dbb482ee7907dd8aa77fa08caf77c32c5e620862d40430ba7658',32,'2026-04-30 06:03:45.491','2026-04-30 04:03:45.492'),(153,'4f54c4f211a992197a800a5cd760bfa938825c682ba6561781841dc72ff42557',32,'2026-05-09 15:42:22.643','2026-05-09 13:42:22.747'),(154,'a0e54468f8f0b6fc488361770b986151e0e8cedbbe1ca78efdf6e3da8cab92ab',32,'2026-05-09 15:42:23.546','2026-05-09 13:42:23.546'),(155,'08c7cc81218be0f4bd87f62e427306dea15595b373828f733299f6ac3885be27',32,'2026-05-14 07:20:08.733','2026-05-14 05:20:08.744'),(156,'b4415a7324e71845b6e9b2097553889e9efe1547b526cab2fb63df96b8174a6a',32,'2026-05-14 07:20:09.133','2026-05-14 05:20:09.133');
/*!40000 ALTER TABLE `refresh_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fullName` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('USER','ADMIN') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'USER',
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `isEmailVerified` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `authProvider` enum('LOCAL','GOOGLE','FACEBOOK','GITHUB') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'LOCAL',
  `dateOfBirth` datetime(3) DEFAULT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_key` (`email`),
  UNIQUE KEY `users_username_key` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (30,'nguyentiendungt123@gmail.com','DungDubai123','$2b$10$wPYIxtguYvbGxBEbV0X3l.3r/A2Oa7WoQds2vzAQskZrKgVQUoKk6','Nguyễn Tiến Dũng',NULL,'USER',1,0,'2026-03-25 16:36:06.437','2026-04-04 15:24:26.040','LOCAL','2004-07-03 00:00:00.000','0869271243'),(31,'ltin22022004@gmail.com','ltin22022004','$2b$10$hnOqcIRUNsqYa6hL0PI8f.Ufqt8LnidPXL8TKD5/61vgCCg7lAcUq',NULL,NULL,'USER',1,0,'2026-03-26 06:48:42.329','2026-03-26 06:48:42.329','LOCAL',NULL,NULL),(32,'admin@duwng.com','Admin','$2b$10$w2QYDSa2u2okWUetGqXJueTygdWtIDF7fxB69GmRc08Id6SEY3ZE.','Nguyễn Tiến Dũnggg',NULL,'ADMIN',1,1,'2026-04-07 18:03:40.768','2026-04-15 09:03:50.550','LOCAL','2004-07-03 00:00:00.000','0869271243'),(46,'nguyentiendung030704@gmail.com','MrDung',NULL,'MrDung','https://lh3.googleusercontent.com/a/ACg8ocK_3cnAb9S5fdn0Oz70SY9ftiAByzK-zcEt31sVLoUzMQHutQ=s96-c','USER',1,1,'2026-04-15 10:06:41.453','2026-04-15 10:18:54.493','GOOGLE',NULL,'');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-09-29 23:31:12
