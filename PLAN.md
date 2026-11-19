# Topheight Website — Project Plan

_Last updated: 19 Nov 2026 · Budget: ₦0 (everything free until we choose otherwise)_

## 1. What we know (source of truth)

| Item | Value | Status |
|---|---|---|
| **Official brand** | **Topheight Schools** — *Topheight Academy* (Nursery & Primary) · *Topheight College* (Secondary) | ✅ Decided 19 Nov 2026. Google profile still says "Topheight Academy" → rename it to match |
| Colours | Academy: **blue & white** · College: **yellow & blue** · shared colour is blue (umbrella brand) | ✅ |
| Logo | Coming from the school | ⏳ Using a text wordmark until it arrives |
| Levels | Nursery, Primary, Secondary | ✅ |
| Motto | Humility · Empathy · Prospect | ✅ |
| Founded | 2015 (business name RC DE31706, registered 24 Dec 2014) | ✅ |
| Address | Phase 2, No. 2 Elder Thaddeus Ediale Street, off Ibusa Expressway, Akwofor, Asaba 320108, Delta State | ✅ |
| Phone | +234 803 296 9491 · +234 803 889 4126 | ✅ |
| Hours | Mon–Thu 7:45am–3:00pm, Fri 7:45am–1:00pm | ✅ |
| WAEC | Approved WAEC exam centre (other schools write WAEC here) | ✅ This is a big selling point |
| Google Business Profile | Exists, with photos and a video | ✅ Link it to the website once the site is live |

**Brand decision needed:** pick one public name and one structure. A suggestion:
**Topheight Schools** as the umbrella name, with *Topheight Academy* (Nursery & Primary) and *Topheight College* (Secondary).
After that, every place the name appears (Google, website, banners, social media) should use exactly the same wording. Using one consistent name helps a lot with Google ranking.

## 2. What the photos give us

All originals are in `photos/raw/`. They are phone photos at roughly 720–1280 px. That's fine for cards, the gallery and section images. For a full-screen hero we'll layer an overlay and motion on top so the resolution isn't noticeable.

| Use on site | Photos |
|---|---|
| **Hero / campus** | 12 (College building with balloons, landscape: best hero), 18, 15, 16 |
| **Science & labs** (a key strength) | 04 (golden light: beautiful), 03, 09 (teacher demo), 11 (students in lab), 13/20 (lab building) |
| **Character / identity** | 17 (the science mural is distinctive and photographs well) |
| **Student life** | 02 & 19 (assembly in house colours), 10 (event day) |
| **Career Day** | 07 (lawyers), 08 (doctors). Great for a "Future Leaders" story |
| **WAEC results** | 14, 16. Use the *numbers*, not the banner photo (see below) |
| **Do not publish** | 05, 06 (children in swimwear). Moved to `photos/excluded/`; agreed with the school. |

**Safeguarding:** before launch, confirm the school's admission forms include photo consent from parents. Never print a child's full name next to their photo.

## 3. Can this stand out? Yes, with this approach

Most school websites in Asaba are old templates or Facebook pages. We win with:
1. **A premium, fast, mobile-first design.** Most parents will browse on a phone with mobile data, so it has to be smooth on a cheap Android.
2. **Leading with proof:** our WAEC results, the fact that we're a WAEC centre, the science laboratory, and Career Day.
3. **Real photos with tasteful motion:** scroll reveals, a parallax hero, counters that animate up, and a lightbox gallery.
4. **Making enquiry effortless:** a WhatsApp button on every page, a simple admission enquiry form, and one-tap call and directions.
5. **Being findable:** proper SEO, structured data that tells Google "this is a school", and a link from the Google profile.

## 4. Tech stack (all free)

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro + React components** | We write React, but pages are pre-rendered to HTML, which makes them very fast and Google reads them perfectly. A plain React SPA is slower on first load and weaker for SEO. |
| Styling | Tailwind CSS | Fast to build and keeps the design consistent |
| Animation | Motion (Framer Motion) + CSS scroll animations | Smooth, and switches off automatically for users who prefer reduced motion |
| Images | Astro's image pipeline (auto WebP/AVIF, responsive sizes) | Turns 300 KB phone photos into ~40 KB files |
| Hosting | **Cloudflare Pages** | Free, unlimited bandwidth, global CDN (servers close to Nigeria), free HTTPS |
| Code storage | GitHub (free private repo) | Version history, and Cloudflare deploys automatically on every push |
| Admission form | Cloudflare Pages Function → Google Sheet + email notification | Free. Staff see enquiries in a spreadsheet they already know how to use |
| News & events | Markdown files now, then **Keystatic** (free CMS) | Later, the principal can post news from a browser without touching code |
| Analytics | Cloudflare Web Analytics | Free, privacy-friendly, no cookie banner needed |
| Domain | Free `topheight.pages.dev` at launch → `topheightschools.com.ng` (or similar) later | The domain is the only part that costs money, and it's optional |

## 5. Site map

- **Home:** hero, motto, quick facts (levels, since 2015, WAEC centre), why Topheight, labs teaser, results counter, gallery strip, call to action
- **About:** our story since 2015, motto explained (Humility · Empathy · Prospect), vision/mission, leadership
- **Academics:** Nursery · Primary · Secondary (curriculum, subjects, approach)
- **Facilities:** science laboratory, classrooms, compound/security
- **WAEC Centre:** our results, plus information for *other schools* who want to register candidates here (a unique page that no competitor has)
- **Student Life:** Career Day, inter-house sports and houses, events
- **Gallery:** filterable grid with a lightbox
- **News & Events**
- **Admissions:** steps, requirements, enquiry form, FAQ
- **Contact:** map, phone, WhatsApp, hours

## 6. Phases

1. **Foundations:** finalise the brand name, logo, and colours; set up the project, GitHub and Cloudflare. *(Week 1)*
2. **Design:** design system (colours, fonts, components) and a homepage prototype for your approval. *(Week 1–2)*
3. **Build:** all pages, animations, gallery, and the form with its backend. *(Week 2–4)*
4. **Content:** real text written together with the principal; optimised photos. *(in parallel)*
5. **Launch:** test on real phones and speed scores (target 90+ on Lighthouse), then deploy. *(Week 4–5)*
6. **Get found:** add the site link to the Google profile, submit to Google Search Console, list on Edusko and School Registry NG, collect Google reviews from parents. *(ongoing)*

## 7. What we need from the school (checklist)

**Must-have before launch**
- [x] Final official name(s) and structure (see §1)
- [x] Official colours (see §1)
- [x] Second phone number confirmed
- [ ] **Logo** as a high-quality file (the original from the designer, or a clear photo of the printed logo so we can redraw it)
- [ ] Short founding story: who started it, why, and how it has grown since 2015
- [ ] WAEC results in numbers: e.g. "2025: X candidates, Y% with 5 credits including English & Maths", plus best results
- [ ] Subjects offered (secondary) and curriculum (Nigerian / British / blend?)
- [ ] Admission process, requirements, and whether to show fees or say "contact us"
- [ ] Confirm phone numbers, WhatsApp number, and email
- [ ] Confirmation that parents have given photo consent

**Nice-to-have (makes the site much stronger)**
- [ ] Principal/proprietor photo and a short welcome message
- [ ] 1–3 parent testimonials (first name + "parent of a JSS2 student" is fine)
- [ ] House names and colours (purple, green, yellow, red, blue?)
- [ ] Any awards, competitions, or alumni success stories
- [ ] **A 20-minute photo walk.** Shoot in landscape, in morning or evening light: classrooms with lessons in progress, nursery classroom, teachers teaching, the gate, a close-up of the logo, the lab in use, the library or ICT room if there is one. A phone is fine; just wipe the lens first.

## 8. Do right now (free, 10 minutes)
- Check who owns the Google Business Profile, and make sure it's someone at the school. If no one does, use "Claim this business" on Google Maps.
- Ask a few happy parents to leave Google reviews. Reviews are a major ranking factor.

## 9. Gap audit of draft 1 (why it still feels "AI-made")

**Status:** code on GitHub (`peter-ediale/TopheightSchool`). Homepage only. Not deployed yet.

### A. Content: the biggest gap (needs the school)
| Gap | Why it feels fake | Fix |
|---|---|---|
| All wording is written by Claude | Generic slogans; no real voice, names or stories | Principal's welcome (name + photo), the true founding story, real quotes |
| No real people | Real school sites show their proprietor, principal and teachers | Staff photos and names (at least the leadership) |
| Empty WAEC numbers ("—") | Looks unfinished | Real figures from the principal |
| No testimonials | No outside proof | 3 parent/alumni quotes (first name + class is enough) |
| No logo | The "T" mark is a placeholder | Real logo file |
| No local detail | Could be any school anywhere | Landmarks/directions, JSS1–SS3 class names, term dates, uniform, school bus, etc. |
| No trust credentials | Parents look for approval | Ministry of Education approval no., WAEC centre no., RC DE31706 |

### B. Design: AI-template patterns to replace with a Topheight identity
- Gold italic accent word in headlines, the scrolling marquee, giant faded "01/02/03" numbers, glassy stat strip, gradient "blobs", an uppercase label above every section. These are now common template tropes.
- **Replace with things only Topheight has:** the **five house colours** (purple, green, yellow, red, blue, seen in the assembly photos) as a design motif; the **science mural** style as illustrations; the real logo/crest; photos of real people over buildings.
- The same photos repeat (lab and Career Day appear twice). Each photo should appear once.
- Phone photos under overcast skies → one good photo walk fixes most of this (see §7).

### C. Missing pages & features (a real school site has depth)
- About (story, leadership, vision/mission) · Academy page · College page (subjects, JSS/SSS) · Admissions (steps, requirements, FAQ, enquiry form) · WAEC Centre page · Gallery · News & Events · Contact
- Working admission enquiry form (Pages Function → Google Sheet + email)
- Term calendar / key dates; downloadable prospectus (PDF)
- Social media links, school email, 404 page

### D. Technical / launch
- Deploy on Cloudflare Pages (needs your Cloudflare sign-in)
- Share image for WhatsApp/Facebook link previews, sitemap, robots.txt, Google Search Console
- Rename the Google Business Profile to "Topheight Schools" and add the website link
- Accessibility & speed pass on a real low-end Android
- Free CMS (Keystatic) so the school can post news itself
- Custom domain (optional, the only paid item)

## 10. Roadmap: steps left
1. **Deploy draft 1** to a free `*.pages.dev` link (you sign in to Cloudflare; ~10 min)
2. **Collect content** from the school (§7 + §9A). This unlocks everything else
3. ✅ **Design pass 2:** house-colour identity, template tropes removed (19 Nov 2026). *Real logo still pending*
4. ✅ **Inner pages built** (19 Nov 2026): About, Academy, College, Admissions (WhatsApp enquiry form + FAQ), WAEC Centre, Gallery, News, Contact, 404. Copy needs checking: see `CONTENT-REVIEW.md`
5. **Admissions form + backend**
6. **News/events + CMS**
7. **SEO & launch polish** (§9D), test on real phones
8. **Go live & get found:** Google profile link, Search Console, directories, reviews
9. *(Later)* custom domain, photo shoot refresh, alumni page
