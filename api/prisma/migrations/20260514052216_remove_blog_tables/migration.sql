/*
  Warnings:

  - You are about to drop the `post_ideas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `posts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `posts` DROP FOREIGN KEY `posts_postIdeaId_fkey`;

-- DropForeignKey
ALTER TABLE `posts` DROP FOREIGN KEY `posts_userId_fkey`;

-- DropTable
DROP TABLE `post_ideas`;

-- DropTable
DROP TABLE `posts`;
