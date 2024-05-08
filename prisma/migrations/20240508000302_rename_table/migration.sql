/*
  Warnings:

  - You are about to drop the `P_ContactMe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "P_ContactMe";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ContactMe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "subject" TEXT,
    "message" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ContactMe_email_key" ON "ContactMe"("email");
