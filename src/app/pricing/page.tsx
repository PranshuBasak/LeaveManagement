import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Check } from "lucide-react";

export default function PricingPage() {
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
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            How it works
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium underline underline-offset-4"
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
                  Simple, Transparent Pricing
                </h1>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that&apos;s right for your business. All plans
                  include a 14-day free trial.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Monthly</span>
                <div className="h-6 w-12 rounded-full bg-blue-200 flex items-center p-1">
                  <div className="h-4 w-4 rounded-full bg-blue-600 ml-auto"></div>
                </div>
                <span className="text-sm font-medium">Annual (Save 20%)</span>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
              {/* Starter Plan */}
              <Card className="border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Starter</CardTitle>
                  <CardDescription>Perfect for small teams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">$9</span>
                    <span className="text-gray-500 ml-1">/ user / month</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">Up to 25 employees</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">Basic leave types</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">Email notifications</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">Basic reporting</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">Email support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/sign-up?plan=starter">Start Free Trial</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Professional Plan */}
              <Card className="border-2 border-blue-600 shadow-md hover:shadow-lg transition-shadow relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Professional</CardTitle>
                  <CardDescription>
                    Ideal for growing businesses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">$19</span>
                    <span className="text-gray-500 ml-1">/ user / month</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">Up to 100 employees</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">Custom leave types</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">Advanced notifications</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">Advanced reporting</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">Priority email support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">Calendar integration</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/sign-up?plan=professional">
                      Start Free Trial
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card className="border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Enterprise</CardTitle>
                  <CardDescription>For large organizations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">$39</span>
                    <span className="text-gray-500 ml-1">/ user / month</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">Unlimited employees</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">Custom workflows</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">Advanced integrations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">Custom reporting</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">Dedicated support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">SSO authentication</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">API access</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/sign-up?plan=enterprise">
                      Start Free Trial
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600">
                  Find answers to common questions about our pricing and plans.
                </p>
              </div>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-lg font-medium mb-2">
                    Can I change plans later?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Yes, you can upgrade or downgrade your plan at any time.
                    Changes will be reflected in your next billing cycle.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-lg font-medium mb-2">
                    Is there a setup fee?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    No, there are no setup fees for any of our plans. You only
                    pay the monthly or annual subscription fee.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-lg font-medium mb-2">
                    Do you offer discounts for non-profits?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Yes, we offer special pricing for non-profit organizations.
                    Please contact our sales team for more information.
                  </p>
                </div>
                <div className="pb-4">
                  <h3 className="text-lg font-medium mb-2">
                    What payment methods do you accept?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We accept all major credit cards, PayPal, and bank transfers
                    for annual plans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Need a custom solution?
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact our sales team to discuss your specific requirements
                  and get a tailored quote.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/sign-up">Start Free Trial</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 LeaveManagement. All rights reserved.
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
