-- AlterTable
ALTER TABLE `orders` MODIFY `paymentMethod` ENUM('COD', 'VNPAY') NOT NULL DEFAULT 'COD';
