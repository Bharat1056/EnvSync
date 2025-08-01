const fs = require("fs");
const path = require("path");
const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.cwd());

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  console.error("DATABASE_URL environment variable is not set.");
  process.exit(1);
}

const templatePath = path.join(__dirname, "../prisma/schema.template.prisma");
const targetPath = path.join(__dirname, "../prisma/schema.prisma");

let schema = fs.readFileSync(templatePath, "utf-8");
schema = schema.replace("__DATABASE_URL__", dbUrl);

fs.writeFileSync(targetPath, schema, "utf-8");

console.log(
  `Prisma schema generated at ${targetPath} with DATABASE_URL: ${dbUrl}`
);
