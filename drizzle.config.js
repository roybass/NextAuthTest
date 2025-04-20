/** @type {import('drizzle-kit').Config} */
module.exports = {
  schema: "./shared/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
    connectionString: process.env.DATABASE_URL || "",
  },
};
