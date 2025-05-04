import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays,  CheckCircle, Users, Shield } from "lucide-react";
// import { SignInButton } from "@clerk/nextjs";
// import { UserButton } from "@clerk/nextjs";
// import { SignedIn } from "@clerk/nextjs";
// import { SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function Home() {
  const { userId, sessionClaims } = await auth();

  if (sessionClaims?.metadata?.role === "ADMIN") {
    redirect("/admin");
  } else if (sessionClaims?.metadata?.role === "EMPLOYEE") {
    redirect("/employee");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-2">
                  <CheckCircle className="h-4 w-4 mr-1" /> Trusted by 500+
                  companies
                </div>
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Effortless Leave Management
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-400 leading-relaxed">
                    Streamline your company&apos;s Leave requests, approvals,
                    and tracking all in one place. Boost productivity and
                    employee satisfaction with our intuitive platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="/sign-up">Get Started</Link>
                  </Button>
                  <Button variant={"outline"} asChild>
                    <Link href="/features">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl border border-gray-200">
                  <Image
                    src="/dashboard-screenshot.jpg"
                    alt="Dashboard screenshot"
                    width={600}
                    height={400}
                    priority
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/20 to-transparent h-8">
                    <div className="flex items-center gap-2 px-4 py-2">
                      <div className="bg-red-500 w-2 h-2 rounded-full" />
                      <div className="bg-yellow-500 w-2 h-2 rounded-full" />
                      <div className="bg-green-500 w-2 h-2 rounded-full" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-2">
                <Shield className="h-4 w-4 mr-1" /> Enterprise-grade features
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Powerful Features
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Everything you need to manage your Leave requests, approvals,
                  and tracking all in one place. Designed for businesses of all
                  sizes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-2 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="p-3 bg-blue-100 rounded-full w-fit">
                      <CalendarDays className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">
                        Easy Request Submission
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Employees can submit Leave requests in seconds with our
                        intuitive interface. Set date ranges, request types, and
                        add notes all in one place.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="p-3 bg-indigo-100 rounded-full w-fit">
                      <CheckCircle className="w-8 h-8 text-indigo-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">
                        Streamlined Approvals
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Managers can quickly review and approve requests with a
                        simplified workflow. Get notifications and manage team
                        availability from one dashboard.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="p-3 bg-blue-100 rounded-full w-fit">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Team Calendar View</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        See your entire team`&apos;s schedule at a glance with
                        our comprehensive calendar view. Plan ahead and avoid
                        scheduling conflicts effortlessly.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to transform your LeaveManagement?
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                Join thousands of companies already using LeaveManagement to
                streamline their processes.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button
                  size="lg"
                  asChild
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="/sign-up">Get Started Today</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/tutorial">Watch Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
