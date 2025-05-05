# Business App Tutorial

This project is a business application built with Next.js, TypeScript, Prisma, and Clerk for authentication. It provides functionalities for managing company settings, employee onboarding, and time off requests.

## Key Features

- **User Roles:** Supports distinct interfaces and functionalities for Admins and Employees.
- **Authentication:** Secure sign-in/sign-up and user management powered by Clerk.
- **Onboarding:** Streamlined process for new users (both Admins and Employees) to set up their accounts.
- **Company Settings (Admin):**
  - Manage Company Profile (Name, Website, Logo).
  - Define Company Working Days.
  - Manage Company-wide Holidays (add, edit, delete recurring/non-recurring holidays).
  - Generate and manage Employee Invitation Codes.
- **Employee Features:**
  - View company holidays.
  - Request Time Off.
  - View remaining allowance.
- **Time Off Management (Admin):**
  - Approve or reject employee time off requests.
  - Set default employee time off allowance.
- **UI Components:** Built using Shadcn UI for a consistent and modern look and feel.
- **Database:** Uses Prisma ORM for database interactions.

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── (dashboard)/      # Routes protected by authentication
│   │   ├── admin/        # Admin-specific pages
│   │   ├── employee/     # Employee-specific pages
│   │   └── layout.tsx    # Dashboard layout
│   ├── api/              # API routes (e.g., webhooks)
│   ├── onboarding/       # Onboarding page
│   ├── sign-in/          # Clerk sign-in page
│   ├── sign-up/          # Clerk sign-up page
│   └── ...             # Other public pages (contact, features, etc.)
├── components/           # Reusable React components
│   ├── ui/               # Shadcn UI components
│   ├── AllowanceForm.tsx
│   ├── ApproveRejectButtons.tsx
│   ├── CompanyHolidaysForm.tsx
│   ├── CompanyProfileForm.tsx
│   ├── CompanyWorkingDaysForm.tsx
│   ├── InvitationCodes.tsx
│   ├── OnboardingForm.tsx
│   ├── TimeOffRequestForm.tsx
│   └── ...             # Other shared components
├── lib/                  # Core logic and utilities
│   ├── actions/          # Server actions (admin, employee, onboarding)
│   ├── prisma.ts         # Prisma client instance
│   └── utils.ts          # Utility functions
├── middleware.ts         # Next.js middleware (e.g., for authentication)
└── globals.css           # Global styles
```

## Getting Started

### Prerequisites

- Node.js (version recommended by Next.js)
- npm or yarn
- A database supported by Prisma (e.g., PostgreSQL, MySQL, SQLite)
- Clerk account for authentication

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd businessapptutorial
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Set up environment variables:**
    - Create a `.env.local` file in the root directory.
    - Add your Clerk API keys (`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`).
    - Add your database connection URL (`DATABASE_URL`).
    - Refer to `.env.example` if available.
4.  **Set up the database:**
    ```bash
    npx prisma migrate dev
    npx prisma db seed # If seed data is configured
    ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1.  **Sign Up / Sign In:** Use the Clerk-provided pages to create an account or log in.
2.  **Onboarding:** Complete the onboarding process based on whether you are an Admin (creating a company) or an Employee (joining with an invitation code).
3.  **Admin Dashboard:** Access `/admin` routes to manage company settings, invitation codes, and time off requests.
4.  **Employee Dashboard:** Access `/employee` routes to request time off and view allowances/holidays.

## Technologies Used

- **Framework:** Next.js
- **Language:** TypeScript
- **Authentication:** Clerk
- **Database ORM:** Prisma
- **UI Library:** Shadcn UI (built on Radix UI & Tailwind CSS)
- **Forms:** React Hook Form with Zod validation
- **Notifications:** Sonner
- **Date Handling:** date-fns
