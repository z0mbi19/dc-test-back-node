-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "dtNascimento" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);
