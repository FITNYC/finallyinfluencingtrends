# finallyinfluencingtrends Next.js Website Template

A simple brand website starter built with Next.js and configured for **static export**, so it works with **GitHub Pages**.

## Why this works on GitHub Pages

GitHub Pages serves static files, and Next.js supports static export with `output: 'export'`. Next.js documents that a static export can be deployed on any web server that serves HTML, CSS, and JavaScript, and the official `nextjs/deploy-github-pages` template uses GitHub Actions for deployment. citeturn995690search0turn523645view0

## Edit locally in Visual Studio Code

1. Open the folder in Visual Studio Code.
2. Run:

```bash
npm install
npm run dev
```

3. Visit `http://localhost:3000`
4. Edit these files:
   - `app/page.tsx` for homepage content
   - `app/globals.css` for styling
   - `public/logo.svg` for your logo
   - `public/hero-pattern.svg` for the hero image

## Deploy to GitHub Pages

1. Use your existing GitHub repository: `FITNYC/finallyinfluencingtrends`.
2. Push this project to the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Push a commit.

Your site will deploy to:

- `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`
- or `https://YOUR-USERNAME.github.io/` if the repository name is `YOUR-USERNAME.github.io`

## Notes

- This starter avoids server-only features so it can export statically.
- `NEXT_PUBLIC_BASE_PATH` is set automatically in the workflow so links and assets work on GitHub Pages project sites.
- `.nojekyll` is included so GitHub Pages does not try to process the output as a Jekyll site.

## Customize faster

Search for these placeholder strings and replace them:

- `Your Brand`
- `hello@example.com`
- service card text
- testimonial text
- contact links
