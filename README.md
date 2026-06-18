# asaulyuk.com

Personal site for Marko Asaulyuk — rebuilt locally from the live v0/Vercel version so you can edit and deploy without being tied to Vercel.

## Local development

```bash
npm install --cache .npm-cache
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit the site

- **Content & layout:** `src/app/page.tsx`
- **Colors & typography:** `src/app/globals.css`
- **Hero image:** `public/images/hero.jpg`
- **Social links:** `src/components/social-links.tsx`

## Push to a private GitHub repo

This is **not** your profile README repo. GitHub only uses a repo named exactly `YOUR_USERNAME/YOUR_USERNAME` for the profile card on github.com. This project should live in a separate repo, e.g. `asaulyuk/asaulyuk-website`, set to **Private**.

1. On GitHub: **New repository**
   - Name: `asaulyuk-website` (or anything except your username duplicated)
   - Visibility: **Private**
   - Do **not** add a README, .gitignore, or license (this folder already has them)

2. From this folder:
   ```bash
   git add -A
   git commit -m "Initial local site from asaulyuk.com"
   git remote add origin git@github.com:asaulyuk/asaulyuk-website.git
   git push -u origin main
   ```

Replace `asaulyuk` with your GitHub username if different.

## Deploy to Cloudflare Pages (when ready)

3. Select the repo. Build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`

4. Deploy. Cloudflare gives you a preview URL like `asaulyuk-website.pages.dev`.

## Point Namecheap at Cloudflare

1. Add `asaulyuk.com` to Cloudflare (free plan is fine). Cloudflare will scan your existing DNS.

2. In Namecheap → **Domain List** → **Manage** → **Nameservers**, switch to Cloudflare's nameservers.

3. In Cloudflare DNS, add:
   - `CNAME` `@` → `<your-project>.pages.dev` (proxied)
   - Or use Cloudflare's custom domain flow under Pages → **Custom domains** → add `asaulyuk.com` and `www.asaulyuk.com`.

4. In Cloudflare Pages → **Custom domains**, attach `asaulyuk.com`.

5. Once verified, remove the old Vercel DNS records from Namecheap/Cloudflare.

## Alternative hosts

The site exports as static HTML (`out/` after build), so it also works on Netlify, GitHub Pages, or any static host.
