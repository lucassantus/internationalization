"use client";

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const mockData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Developer",
    isActive: true,
    age: 28,
    hireDate: new Date("2021-03-15"),
    projects: ["Project A", "Project B"],
    performance: 4.5,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Designer",
    isActive: true,
    age: 32,
    hireDate: new Date("2019-07-22"),
    projects: ["Project C"],
    performance: 4.8,
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Manager",
    isActive: false,
    age: 45,
    hireDate: new Date("2015-11-03"),
    projects: ["Project A", "Project D", "Project E"],
    performance: 4.2,
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Tester",
    isActive: true,
    age: 26,
    hireDate: new Date("2022-01-10"),
    projects: ["Project B", "Project C"],
    performance: 4.0,
  },
];

export function TableDashboard() {
  // const { language } = await params;

  // const server = getTranslations("dashboard", language);

  return (
    <Table>
      <TableCaption>Employee Information</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Active</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Hire Date</TableHead>
          <TableHead>Projects</TableHead>
          <TableHead>Performance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.role}</TableCell>
            <TableCell>{item.isActive ? "Yes" : "No"}</TableCell>
            <TableCell>{item.age}</TableCell>
            <TableCell>{item.hireDate.toLocaleDateString()}</TableCell>
            <TableCell>{item.projects.join(", ")}</TableCell>
            <TableCell>{item.performance.toFixed(1)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
