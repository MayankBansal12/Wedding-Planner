-- AlterTable
ALTER TABLE "User" ADD COLUMN     "FaceEmbeddings" DOUBLE PRECISION[] DEFAULT ARRAY[]::DOUBLE PRECISION[];
