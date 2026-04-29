const { PrismaMariaDb } = require("@prisma/adapter-mariadb");
const { PrismaClient } = require("../../generated/prisma");

const isProduction = process.env.NODE_ENV === "production";

const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  allowPublicKeyRetrieval: true,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
});

const prisma = new PrismaClient({ adapter });

module.exports = prisma;
