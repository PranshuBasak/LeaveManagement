import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CalendarDays,
  Clock,
  CheckCircle,
  Users,
  Shield,
  BarChart,
  Bell,
  Calendar,
  FileText,
} from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
        <Link href="/" className="flex items-center">
          <Clock className="h-6 w-6 mr-2 text-blue-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            LeaveManagement
          </span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="/features"
            className="text-sm font-medium underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="/tutorial"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            How it works
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Pricing
          </Link>
        </nav>
        <div className="flex gap-4">
          <Button asChild size="sm">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Powerful Features for Effortless Leave Management
                </h1>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive platform streamlines the entire leave
                  management process, from request to approval and tracking.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    <CardTitle>Intuitive Leave Requests</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Employees can easily submit time-off requests with just a
                    few clicks. Select dates, specify leave type, and add
                    optional notes.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                    <CardTitle>Streamlined Approvals</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Managers receive instant notifications and can approve or
                    reject requests from anywhere. Set up custom approval
                    workflows for your organization.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-6 w-6 text-blue-600" />
                    <CardTitle>Holiday Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Configure company holidays and working days. Automatically
                    calculate leave balances based on your company&apos;s specific
                    policies.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-blue-600" />
                    <CardTitle>Team Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Easily manage employees, departments, and roles. Assign
                    managers and set up reporting structures to match your
                    organization.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BarChart className="h-6 w-6 text-blue-600" />
                    <CardTitle>Comprehensive Reports</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Generate detailed reports on leave usage, balances, and
                    trends. Export data for payroll integration and compliance
                    requirements.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Bell className="h-6 w-6 text-blue-600" />
                    <CardTitle>Smart Notifications</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Automated notifications keep everyone informed about request
                    status, upcoming time off, and team availability.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Ready to transform your leave management process?
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join hundreds of companies already using our platform to
                  streamline their operations.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/sign-up">Get Started Today</Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2025 LeaveManagement. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
