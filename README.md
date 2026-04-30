# Desk Work Dan

Plain-English software reviews for plumbers, roofers, mechanics, landscapers and other working businesses.

A 100% static site. No backend, no database, no build step. It runs anywhere that serves HTML files — including GitHub Pages for free.

## File structure

```
.
├── index.html       # Homepage
├── review.html      # Review article template (the one your AI will fill in)
├── about.html       # About The Mechanic
├── assets/
│   └── main.js      # Mobile nav toggle + footer year
└── README.md
```

Tailwind CSS is loaded via the official Play CDN (`https://cdn.tailwindcss.com`) and a small custom theme is configured inline in each page's `<head>`. Fonts come from Google Fonts (`Inter` + `Roboto Slab`).

## Color palette

| Token       | Use                          | Hex example   |
| ----------- | ---------------------------- | ------------- |
| `steel-900` | primary brand / nav / footer | `#1d2433`     |
| `steel-50`  | quiet backgrounds            | `#f5f7fa`     |
| `signal-500/600` | CTAs, "Check Current Price" buttons | `#f97316 / #ea580c` |
| `white` / `steel-700` | body text on light bg | — |

## Hosting on GitHub Pages

1. Create a new public repo (e.g. `deskworkdan.github.io` or any name).
2. Drop these files into the repo root and push.
3. In the repo: **Settings → Pages → Source: Deploy from branch → `main` / `(root)` → Save.**
4. Wait ~1 minute. Your site will be live at `https://<your-username>.github.io/<repo>/`.

That's it. No build step. No CI to set up.

## Adding a new review

1. Duplicate `review.html` and rename it (for example `review-jobber.html`).
2. Inside the new file, replace every `[bracketed placeholder]` with real content.
3. Update the article header: title, category, date, read time.
4. Fill in the **Bottom Line** box (1 paragraph + best-for + price + score).
5. Drop pros/cons into the two-column box (4 each is a good default).
6. Replace the affiliate `href="#"` on every "Check Current Price" button.
7. Link the new file from a card on `index.html`.

The article body uses the `.article-body` style block which automatically formats `<h2>`, `<h3>`, `<p>`, `<ul>`, `<ol>`, `<blockquote>`, and inline links. Just write semantic HTML inside `.article-body` and it'll look right.

## Affiliate buttons

Every "Check Current Price" / "Buy" button uses:

```html
<a href="https://example.com/your-affiliate-link"
   target="_blank"
   rel="nofollow sponsored noopener">
  Check Current Price
</a>
```

The `rel="nofollow sponsored noopener"` value is required by Google for affiliate links — keep it.

## Going for production polish

The Tailwind Play CDN is great while you're building and tweaking. Once content is locked in, you can swap to a precompiled `tailwind.css` to avoid the CDN runtime cost — but for a small affiliate site loaded a few thousand times a month, the CDN is fine.

## License

All site copy and design is © Desk Work Dan. Use it for your own purposes; don't republish wholesale.
