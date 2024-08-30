const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();

const prisma = new PrismaClient();

app.get("/", async (req, res) => {
  const result = await prisma.student.findMany();
  res.status(200).json(result);
});

app.listen(3000, () => console.log("listening on port 3000"));
