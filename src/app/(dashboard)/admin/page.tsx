import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const page = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  const adminUser = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
    select: {
      companyId: true,
      company: {
        select: {
          name: true,
        },
      },
    },
  });

  if (!adminUser) {
    redirect("/onboarding");
  }

  const companyId = adminUser.companyId;
  const companyName = adminUser.company?.name;

  const pendingRequestsCount = await prisma.timeOffRequest.count({
    where: {
      employee: {
        companyId: companyId,
      },
      status: "PENDING",
    },
  });

  const approvedRequestsCount = await prisma.timeOffRequest.count({
    where: {
      employee: {
        companyId: companyId,
      },
      status: "APPROVED",
    },
  });

  const employeeCount = await prisma.user.count({
    where: {
      companyId,
      role: {
        in: ["EMPLOYEE", "ADMIN"],
      },
    },
  });

  const activeInvitationCodesCount = await prisma.code.count({
    where: {
      used: false,
      companyId,
    },
  });

  const data = [
    {
      title: "Pending Requests",
      data: pendingRequestsCount,
    },
    {
      title: "Approved Requests",
      data: approvedRequestsCount,
    },
    {
      title: "Employee Count",
      data: employeeCount,
    },
    {
      title: "Active Invitation Codes",
      data: activeInvitationCodesCount,
    },
  ];

  return (
    <div className="relative space-y-10 mt-14 px-4 max-w-7xl mx-auto">
      {/* Accent Bar */}
      <div className="absolute left-0 right-0 -top-8 flex justify-center z-10">
        {/* <div className="h-2 w-screen rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg"></div> */}
      </div>
      <div className="flex flex-col space-y-1 md:space-y-2 items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white drop-shadow-sm text-center">
          {companyName} Dashboard
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 text-center">
          Manage your company and employees
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {data?.map((item) => {
          return (
            <Card key={item.title} className="shadow-md border-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
              <CardContent className="p-8 flex flex-col items-center justify-center">
                <p className="text-base font-medium text-gray-500 dark:text-gray-400 mb-2">{item.title}</p>
                <h3 className="text-4xl font-bold text-gray-900 dark:text-white">{item.data}</h3>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <Card className="shadow-sm border-0">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Leave requests</CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">Manage employee Leave requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-3">
              <Button asChild size="lg" className="w-full">
                <Link href="/admin/time-off-requests">View all requests</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-0">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Company Settings</CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">Manage company configuration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-3">
              <Button asChild size="lg" className="w-full">
                <Link href="/admin/company-settings">General settings</Link>
              </Button>
              <Button asChild size="lg" className="w-full">
                <Link href="/admin/company-settings/holidays">
                  Company Holidays
                </Link>
              </Button>
              <Button asChild size="lg" className="w-full">
                <Link href="/admin/company-settings/working-days">
                  Working Days
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-0">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Team management</CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">Manage your company&apos;s team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-3">
              <Button asChild size="lg" className="w-full">
                <Link href="/admin/employees">View Employees</Link>
              </Button>
              <Button asChild size="lg" className="w-full">
                <Link href="/admin/invitation-codes">Invitation Codes</Link>
              </Button>
              <p className="text-base text-gray-500 dark:text-gray-400 mt-3 text-center">
                You have {activeInvitationCodesCount} active invitation code
                {activeInvitationCodesCount !== 1 ? "s" : ""}.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
