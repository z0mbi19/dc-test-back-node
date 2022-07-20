/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Person` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Person" ALTER COLUMN "updateAt" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "Person_nome_key" ON "Person"("nome");
