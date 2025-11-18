# Admin Panel - ambotique

This is the admin panel for the ambotique eCommerce platform, built with [Next.js](https://nextjs.org).

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the admin panel.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Features

- Admin login with email and password validation
- Password visibility toggle
- Form validation with error messages
- Responsive design matching the main website theme
- Built with Next.js 16, React 19, and Tailwind CSS v3

## Project Structure

```
admin/
├── app/
│   ├── components/
│   │   ├── AdminLoginForm.tsx
│   │   └── icons/
│   │       └── EyeIcon.tsx
│   ├── data/
│   │   └── adminLoginMockData.ts
│   ├── theme/
│   │   └── adminTheme.ts
│   ├── types/
│   │   └── admin.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── brandLogo.png
└── tailwind.config.js
```

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v3
- **Language**: TypeScript
- **Font**: Montserrat (Google Fonts)

## Development

The admin panel runs on port 3001 to avoid conflicts with the main frontend application (port 3000).

## TODO

- Implement actual authentication API integration
- Add admin dashboard after login
- Add protected routes
- Implement session management
- Add admin user management features

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.