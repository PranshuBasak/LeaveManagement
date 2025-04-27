import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ArrowRight } from "lucide-react";

export default function TutorialPage() {
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
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="/tutorial"
            className="text-sm font-medium underline underline-offset-4"
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
                  How LeaveManagement Works
                </h1>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform simplifies leave management for both employees
                  and administrators. Here&apos;s how it works.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    1
                  </div>
                  <h2 className="text-2xl font-bold">Company Setup</h2>
                  <p className="text-gray-600">
                    Administrators configure company settings, including working
                    days, holidays, and leave policies. This forms the
                    foundation of your leave management system.
                  </p>
                </div>
                <Card className="overflow-hidden border-2 border-blue-100">
                  <CardContent className="p-6">
                    <div className="rounded-lg bg-gray-100 p-4">
                      <div className="space-y-4">
                        <div className="h-8 bg-blue-600 rounded-md w-full flex items-center px-4">
                          <span className="text-white text-sm font-medium">
                            Company Settings
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="h-24 bg-white rounded-md p-3 border border-gray-200">
                            <div className="text-sm font-medium">
                              Working Days
                            </div>
                            <div className="mt-2 flex gap-1">
                              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs">
                                M
                              </div>
                              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs">
                                T
                              </div>
                              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs">
                                W
                              </div>
                              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs">
                                T
                              </div>
                              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs">
                                F
                              </div>
                            </div>
                          </div>
                          <div className="h-24 bg-white rounded-md p-3 border border-gray-200">
                            <div className="text-sm font-medium">Holidays</div>
                            <div className="mt-2 text-xs text-gray-500">
                              New Year&apos;s Day, Independence Day, Labor Day, etc.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 2 */}
              <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    2
                  </div>
                  <h2 className="text-2xl font-bold">Employee Onboarding</h2>
                  <p className="text-gray-600">
                    Employees are invited to join the platform. They complete
                    their profiles and can immediately start managing their time
                    off requests.
                  </p>
                </div>
                <Card className="overflow-hidden border-2 border-blue-100">
                  <CardContent className="p-6">
                    <div className="rounded-lg bg-gray-100 p-4">
                      <div className="space-y-4">
                        <div className="h-8 bg-blue-600 rounded-md w-full flex items-center px-4">
                          <span className="text-white text-sm font-medium">
                            Employee Onboarding
                          </span>
                        </div>
                        <div className="bg-white rounded-md p-4 border border-gray-200">
                          <div className="space-y-3">
                            <div className="h-6 bg-gray-100 rounded w-3/4"></div>
                            <div className="h-6 bg-gray-100 rounded w-1/2"></div>
                            <div className="h-6 bg-gray-100 rounded w-2/3"></div>
                            <div className="flex justify-end mt-2">
                              <div className="h-8 w-24 bg-blue-600 rounded-md flex items-center justify-center">
                                <span className="text-white text-sm">
                                  Complete
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 3 */}
              <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    3
                  </div>
                  <h2 className="text-2xl font-bold">
                    Leave Request Submission
                  </h2>
                  <p className="text-gray-600">
                    Employees submit leave requests by selecting dates,
                    specifying leave type, and adding any necessary notes. The
                    system automatically checks for conflicts.
                  </p>
                </div>
                <Card className="overflow-hidden border-2 border-blue-100">
                  <CardContent className="p-6">
                    <div className="rounded-lg bg-gray-100 p-4">
                      <div className="space-y-4">
                        <div className="h-8 bg-blue-600 rounded-md w-full flex items-center px-4">
                          <span className="text-white text-sm font-medium">
                            New Leave Request
                          </span>
                        </div>
                        <div className="bg-white rounded-md p-4 border border-gray-200">
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <div className="text-sm font-medium">
                                Date Range
                              </div>
                              <div className="text-sm text-blue-600">
                                June 10-15, 2023
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <div className="text-sm font-medium">
                                Leave Type
                              </div>
                              <div className="text-sm text-blue-600">
                                Vacation
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <div className="text-sm font-medium">
                                Duration
                              </div>
                              <div className="text-sm text-blue-600">
                                5 working days
                              </div>
                            </div>
                            <div className="flex justify-end mt-2">
                              <div className="h-8 w-24 bg-blue-600 rounded-md flex items-center justify-center">
                                <span className="text-white text-sm">
                                  Submit
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 4 */}
              <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    4
                  </div>
                  <h2 className="text-2xl font-bold">Approval Process</h2>
                  <p className="text-gray-600">
                    Managers receive notifications about new requests and can
                    approve or reject them with comments. Employees are
                    automatically notified of decisions.
                  </p>
                </div>
                <Card className="overflow-hidden border-2 border-blue-100">
                  <CardContent className="p-6">
                    <div className="rounded-lg bg-gray-100 p-4">
                      <div className="space-y-4">
                        <div className="h-8 bg-blue-600 rounded-md w-full flex items-center px-4">
                          <span className="text-white text-sm font-medium">
                            Approval Dashboard
                          </span>
                        </div>
                        <div className="bg-white rounded-md p-4 border border-gray-200">
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <div className="text-sm font-medium">
                                John Doe - Vacation
                              </div>
                              <div className="flex gap-2">
                                <div className="h-8 w-20 bg-green-600 rounded-md flex items-center justify-center">
                                  <span className="text-white text-xs">
                                    Approve
                                  </span>
                                </div>
                                <div className="h-8 w-20 bg-red-600 rounded-md flex items-center justify-center">
                                  <span className="text-white text-xs">
                                    Reject
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="text-sm font-medium">
                                Jane Smith - Sick Leave
                              </div>
                              <div className="flex gap-2">
                                <div className="h-8 w-20 bg-green-600 rounded-md flex items-center justify-center">
                                  <span className="text-white text-xs">
                                    Approve
                                  </span>
                                </div>
                                <div className="h-8 w-20 bg-red-600 rounded-md flex items-center justify-center">
                                  <span className="text-white text-xs">
                                    Reject
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 5 */}
              <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    5
                  </div>
                  <h2 className="text-2xl font-bold">Tracking & Reporting</h2>
                  <p className="text-gray-600">
                    Both employees and administrators can track leave balances,
                    usage history, and generate reports for planning and
                    compliance purposes.
                  </p>
                </div>
                <Card className="overflow-hidden border-2 border-blue-100">
                  <CardContent className="p-6">
                    <div className="rounded-lg bg-gray-100 p-4">
                      <div className="space-y-4">
                        <div className="h-8 bg-blue-600 rounded-md w-full flex items-center px-4">
                          <span className="text-white text-sm font-medium">
                            Leave Dashboard
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white rounded-md p-3 border border-gray-200">
                            <div className="text-sm font-medium">
                              Leave Balance
                            </div>
                            <div className="mt-2">
                              <div className="flex justify-between text-xs">
                                <span>Vacation</span>
                                <span className="font-medium">15 days</span>
                              </div>
                              <div className="flex justify-between text-xs mt-1">
                                <span>Sick Leave</span>
                                <span className="font-medium">10 days</span>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white rounded-md p-3 border border-gray-200">
                            <div className="text-sm font-medium">
                              Recent Requests
                            </div>
                            <div className="mt-2 text-xs">
                              <div className="flex justify-between">
                                <span>Jun 10-15</span>
                                <span className="text-green-600">Approved</span>
                              </div>
                              <div className="flex justify-between mt-1">
                                <span>May 5</span>
                                <span className="text-green-600">Approved</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Ready to streamline your leave management?
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get started today and transform how your company handles time
                  off requests.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/sign-up">Start Free Trial</Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/features">Explore Features</Link>
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
