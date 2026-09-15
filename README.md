# Meng Gao Research Group website

A lightweight, responsive static website for the Meng Gao Research Group at the Institute of Applied Physics and Materials Engineering, University of Macau.

## Preview locally

Open `index.html` directly in a browser, or run a simple local server from this directory:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Content to replace before publishing

- `assets/images/research-placeholder.svg` — homepage and research feature image
- `assets/images/profile-placeholder.svg` — Professor Meng Gao portrait
- `assets/images/member-placeholder.svg` — duplicate/replace for each group member
- Placeholder biographies and member names in `people.html`
- Placeholder citations in `publications.html`
- Placeholder updates in `news.html` and on the homepage
- Bracketed email and office details in `contact.html`
- Add verified academic profile links and DOI links

## Structure

- `index.html` — Home
- `research.html` — Research
- `people.html` — People
- `publications.html` — Publications
- `news.html` — News
- `join.html` — Join Us
- `contact.html` — Contact
- `assets/css/styles.css` — shared responsive styles
- `assets/js/main.js` — mobile navigation and automatic footer year
- `assets/images/` — image placeholders

No build step or external dependencies are required.
