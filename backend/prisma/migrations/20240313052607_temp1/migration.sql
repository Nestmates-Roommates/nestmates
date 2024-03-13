/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bringingPets` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cigs` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cleanliness` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diet` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `drinking` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `drugs` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hobbies` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `interests` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `noiseTolerance` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `socialMeter` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `socials` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Frequency" AS ENUM ('Often', 'Sometimes', 'DontMind', 'Mind');

-- CreateEnum
CREATE TYPE "Diet" AS ENUM ('Vegan', 'Vegetarian', 'NonVegetarian');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bringingPets" BOOL NOT NULL;
ALTER TABLE "User" ADD COLUMN     "cigs" "Frequency" NOT NULL;
ALTER TABLE "User" ADD COLUMN     "cleanliness" INT4 NOT NULL;
ALTER TABLE "User" ADD COLUMN     "description" STRING;
ALTER TABLE "User" ADD COLUMN     "diet" "Diet" NOT NULL;
ALTER TABLE "User" ADD COLUMN     "drinking" "Frequency" NOT NULL;
ALTER TABLE "User" ADD COLUMN     "drugs" "Frequency" NOT NULL;
ALTER TABLE "User" ADD COLUMN     "email" STRING NOT NULL;
ALTER TABLE "User" ADD COLUMN     "gender" STRING NOT NULL;
ALTER TABLE "User" ADD COLUMN     "hobbies" JSONB NOT NULL;
ALTER TABLE "User" ADD COLUMN     "interests" JSONB NOT NULL;
ALTER TABLE "User" ADD COLUMN     "noiseTolerance" INT4 NOT NULL;
ALTER TABLE "User" ADD COLUMN     "notes" STRING;
ALTER TABLE "User" ADD COLUMN     "phone" STRING;
ALTER TABLE "User" ADD COLUMN     "school" STRING;
ALTER TABLE "User" ADD COLUMN     "socialMeter" INT4 NOT NULL;
ALTER TABLE "User" ADD COLUMN     "socials" JSONB NOT NULL;

-- CreateTable
CREATE TABLE "Internship" (
    "ID" INT8 NOT NULL DEFAULT unique_rowid(),
    "UserID" INT8 NOT NULL,
    "Location" STRING NOT NULL,
    "Company" STRING NOT NULL,
    "StartDate" INT4 NOT NULL,
    "EndDate" INT4 NOT NULL,
    "Monthly" FLOAT8 NOT NULL,
    "Description" STRING,

    CONSTRAINT "Internship_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Likes" (
    "ID" INT8 NOT NULL DEFAULT unique_rowid(),
    "LikerID" INT8,
    "LikedID" INT8,

    CONSTRAINT "Likes_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
