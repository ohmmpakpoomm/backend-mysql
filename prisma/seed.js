const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const data = [
  {
    student_name: "Shubham Verma",
    student_age: 21,
  },
  {
    student_name: "Rahul Verma",
    student_age: 22,
  },
  {
    student_name: "Rohit Verma",
    student_age: 23,
  },
];

const seed = async () => {
  return await prisma.student.createMany({ data: data });
};

seed();
