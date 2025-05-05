"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { updateEmployeeAllowance } from "@/lib/actions/admin-actions";

import { UserRole } from "@prisma/client";

const USER_ROLES = ["ADMIN", "EMPLOYEE"];

interface AllowanceFormProps {
  employeeId: string;
  firstName: string;
  lastName: string;
  department: string;
  role: UserRole;
  availableDays: number;
}

export default function AllowanceForm({
  employeeId,
  firstName,
  lastName,
  department: initialDepartment,
  role: initialRole,
  availableDays: initialAllowance,
}: AllowanceFormProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [allowance, setAllowance] = useState<number>(initialAllowance);
  const [department, setDepartment] = useState<string>(initialDepartment);
  const [role, setRole] = useState<string>(initialRole);
  const [first, setFirst] = useState<string>(firstName);
  const [last, setLast] = useState<string>(lastName);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await updateEmployeeAllowance({
        employeeId,
        firstName: first,
        lastName: last,
        department,
        role: role as UserRole,
        availableDays: allowance,
      });

      if (result.success) {
        toast.success("Employee data updated successfully");
        setIsOpen(false);
      }
    } catch (error) {
      console.error("Error updating employee data:", error);
      toast.error("Failed to update employee data. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"} size="sm">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Employee Data</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input
              id="first-name"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last Name</Label>
            <Input
              id="last-name"
              value={last}
              onChange={(e) => setLast(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="employee-department">Department</Label>
            <Input
              id="employee-department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="employee-role">Role</Label>
            <select
              id="employee-role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            >
              {USER_ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="allowance">Holiday allowance (days)</Label>
            <Input
              id="allowance"
              type="number"
              min={0}
              value={allowance}
              onChange={(e) => setAllowance(parseInt(e.target.value))}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Updating..." : "Update Employee"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
