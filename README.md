This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Contact leads in Google Sheets

The contact form appends each lead to a `Leads` tab using Google Apps Script.
No paid integration or Google API package is required.

1. Upload `Contact-Leads-Template.xlsx` to Google Drive, open it with Google
   Sheets, and convert it to a Google spreadsheet if prompted. The template
   already has a `Leads` tab with Received at (UTC), Name, Phone, Business type,
   Status, and Remark columns.
2. In the sheet, open **Extensions → Apps Script** and paste the contents of
   `scripts/google-sheets-leads.gs`. Save the project, return to the sheet, and
   reload it.
3. In the sheet, choose **FreeKit Leads → Connect webhook** and paste the exact
   `GOOGLE_SHEETS_WEBHOOK_TOKEN` from `.env.local` when prompted. This saves the
   active sheet ID and token to Script Properties without needing to find that
   settings panel.
4. In Apps Script, deploy the latest code as a **Web app**, executing as
   yourself and allowing access to anyone. Copy the deployed web app URL.
5. Add the web app URL and the same secret to `.env.local`:
   - `GOOGLE_SHEETS_WEBHOOK_URL`
   - `GOOGLE_SHEETS_WEBHOOK_TOKEN`
6. Add those same two server-side environment variables to the production host
   and redeploy. Keep the token out of client-side variables and source control.

If submissions receive an HTTP 403 Drive access page, the request is being
blocked before `doPost` runs. Redeploy the web app as a new version with access
set to **Anyone**. If an anonymous POST with an invalid token still gets that
page instead of the JSON `Unauthorized.` response, the deploying Google
Workspace account may prohibit public web apps; use an account that permits
anonymous web apps or ask the Workspace administrator to allow them. Opening
the `/exec` URL in a browser may say `Script function not found: doGet`; this
is expected because the integration accepts POST requests only.

If there is no `Leads` tab, the script creates it with the same six headers.
Each submission adds a row with status `New` and an empty remark. Resend email
notifications remain optional; the lead is considered received once Sheets
confirms it.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
