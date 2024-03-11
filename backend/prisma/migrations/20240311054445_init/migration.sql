-- CreateTable
CREATE TABLE "User" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "name" STRING NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
