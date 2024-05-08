-- CreateTable
CREATE TABLE "P_ContactMe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "subject" TEXT,
    "message" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "logoUrl" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "Asset" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "assetUrl" TEXT NOT NULL,
    "project_id" INTEGER NOT NULL,
    CONSTRAINT "Asset_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ProjectSkills" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ProjectSkills_A_fkey" FOREIGN KEY ("A") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProjectSkills_B_fkey" FOREIGN KEY ("B") REFERENCES "Skill" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "P_ContactMe_email_key" ON "P_ContactMe"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectSkills_AB_unique" ON "_ProjectSkills"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectSkills_B_index" ON "_ProjectSkills"("B");
