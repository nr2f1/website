# NR2F1 Foundation website — Year One (21 Sep 2025 → 14 Sep 2026)

Working document for the "one year of the new website" Google Slides deck.
It maps what the data says to the personas in [personas.md](./personas.md) and the
goals in the [repo readme](../readme.md), and proposes a slide-by-slide outline.

Chart-ready CSVs live in [`charts/`](./charts/) — paste each into a Google Sheet and
insert as a linked chart in Slides.

---

## 0. Read this first — what the data can and cannot say

| Source | File | Period | What it is |
| --- | --- | --- | --- |
| GA4 — Acquisition overview | `Acquisition_overview.csv` | 21 Sep 2025 → 14 Sep 2026 only | Daily active/new users, channels, Google Search impressions & queries, referrers |
| GA4 — User attributes | `User_attributes_overview.csv` (the `(1)` copy is byte-identical) | Both years | Country, city, language — with a "previous year" comparison (21 Sep 2024 → 20 Sep 2025) |
| Givebutter — contacts created since launch | `contacts-2026-09-15-638352179.csv` | Contact Since ≥ 21 Sep 2025 | 662 contacts: donors, newsletter, families, researchers |
| Givebutter — pre-launch family segments | `contacts-2026-09-15-10519972.csv` (17) and `…-1200651168.csv` (12) | Contact Since 2023 → Jun 2025 | Registered families with a patient number and uploaded genetic report; 10 contacts overlap. **Filter unknown — please confirm what these two exports are.** |
| Givebutter API — all contacts | pulled 15 Sep 2026 (3,428 contacts; raw JSON kept out of the repo) | all time | Source for §1.1 |
| GA4 Data API | `api/ga-*.csv` | both windows | Same property, pulled via service account `ga-reader@nr2f1-508809`; `dateRange` column = `before` / `after` |
| Search Console API | `api/sc-*.csv` | **4 May 2025 → 14 Sep 2026** | `sc-domain:nr2f1.org`; covers the **old site** from 4 May 2025 (16-month retention) — source for §1.2 |

**Caveat 1 — the GA "year before" is not the old website.** Confirmed via the Admin
API: the property was **created 27 Aug 2025**, so its "before" window is 138 users of
staging traffic (27 Aug → 20 Sep 2025). The old site **was** measured — analytics were set
up years ago — but that account is not ours and no one still on the project can log in, so
the baseline is unreachable rather than non-existent. If access is ever recovered, a real
visits comparison becomes possible. Do **not** present "7× more users than last year". The real before/after
for *search* comes from Search Console instead (§1.2); for *visits* there is no
old-site baseline.

**Caveat 2 — Givebutter "Total Contributions" is lifetime per contact**, not
donations in the period. For contacts created after launch the two are the same,
so the $88k figure is safe. Pre-launch family totals ($22.7k / $34.3k) span
2023 → 2026 and should not be compared 1:1.

**Caveat 3 — the registry did *not* grow faster after launch; it grew *differently*.**
Pulled from the Givebutter API (3,428 contacts, 15 Sep 2026): contacts with
*BBSOAS Child Name* filled = **133 in the year before launch vs 127 in year one** —
flat. The story is channel and reach, not volume (see §1.1). Do not claim
"more families registered because of the new site".

**Caveat 4 — traffic halves from May 2026** (226 active users in April → 114 in
May, flat since). Check whether a consent banner, tag change or Vercel/GA config
changed around 1 May 2026 before reading this as audience loss.

---

## 1. Headline numbers (year one)

| | Value | Source |
| --- | --- | --- |
| Active users | **1,042** (56 countries) | GA country table |
| New users | **1,007** | GA daily new users |
| Sessions | **3,373** | GA channel table |
| Languages of visitors | **25** (vs 13 with any traffic pre-launch) | GA language table |
| Google Search impressions | **283,030** across 599 landing pages | GA landing page table |
| Organic search share of sessions | **48%** (1,623) | GA channel table |
| Impressions on localised (non-`/en`) pages | **93,832 = 33%** | derived |
| Google Search: average position | **7.6** (old site: 15.3) · mobile **4.1** (was 10.9) | Search Console API |
| Google Search: clicks per day | **18.4** (old site: 15.2, +21%) · CTR 4.4% (was 3.1%) | Search Console API |
| New Givebutter contacts | **662** | Givebutter |
| New family contacts (BBSOAS Child Name filled) | **127** (vs **133** the year before) — see §1.1 | Givebutter API |
| New registered patients (Patient Number assigned) | **113** (vs 127 the year before); patient # 453 → 567 | Givebutter API |
| Of those, created via the website signup form | **112 / 113** (tagged `Parent` by `create-contact` API route) | Givebutter + code |
| New donors | **431**, **$88,019** (median gift $55) | Givebutter |
| New monthly/recurring donors | **5** | Givebutter |
| New researcher/clinician contacts | **3** (Heidelberg, Verona, +1) | Givebutter |
| Email-subscribed new contacts | **470 / 662 (71%)** | Givebutter |

### 1.1 Family registrations — year before vs year one (Givebutter API, all 3,428 contacts)

Counting contacts whose *BBSOAS Child Name (First & Last)* custom field is filled,
by `contact_since`:

| | Year before (21 Sep 2024 → 20 Sep 2025) | Year one (21 Sep 2025 → 14 Sep 2026) |
| --- | --- | --- |
| Family contacts created | **133** | **127** |
| … with a Patient Number assigned | 127 | 113 |
| … with Child's Birthday recorded | 74 | 8 |
| Countries (where given) | 29 | 24 |
| Country not given | 12 (9%) | 37 (29%) |
| Top countries | USA 42, **FRA 26**, GBR 8, DEU 5, ESP 4, CAN 4, JPN 3, AUS 3 | USA 30, GBR 11, DEU 6, ESP 6, AUS 5, FRA 5, CAN 3, DNK 3 |
| Busiest days | 7–8 Mar 2025: **24 in two days** (event/import — 26 French families that year), 6 Aug 2025: 8, 31 Jul 2025: 7 | never more than 3/day |
| Tagged `Website Form` / `Parent` (form-driven) | 110 `Parent` | 102 `Parent`, 33 `Newsletter Signup - Top` |
| Newsletter-tagged | 55 | 12 |

All-time: 688 family contacts (313 created in 2023 = the Givebutter migration, 150 in 2024, 129 in 2025, 96 in 2026 so far).

What this supports:
- **Volume is flat (~130/yr).** Registrations are driven by diagnoses and community
  events, not by the website. Don't sell growth.
- **The website became the steady channel.** Before launch, registrations came in
  bursts (two March days = 18% of the year). After launch they arrive at 9–11 a
  month with no burst and no dead month — a pipeline, not a campaign.
- **Data quality dropped on two fields.** Child's Birthday 74 → 8 and country
  12 → 37 missing: the new form (`create-contact` route) only sends the child's
  first name and only sends the address when the country/postcode regex matches.
  That is a concrete year-two fix (ask for DOB; relax or validate the address step).
- **Reach shifted.** France fell (26 → 5, the 2025 event was French), while
  Denmark/Finland/Sweden/Poland/Colombia/Mexico appear for the first time.

Chart: `charts/givebutter-families-by-month-2yrs.csv` (24 months, launch marked).

### 1.2 Google Search — old site vs new site (Search Console API)

Search Console's domain property backfills, so within its 16-month retention we
have the **old WordPress site from 4 May 2025 to 20 Sep 2025 (140 days)** against
the new site's 358 days. Per-day figures make the windows comparable.

| Metric | Old site (4 May → 20 Sep 2025) | New site (21 Sep 2025 → 14 Sep 2026) |
| --- | --- | --- |
| Clicks per day | 15.2 | **18.4** (+21%) |
| Impressions per day | 487 | 420 (−14%) |
| CTR | 3.1% | **4.4%** |
| Average position | 15.3 (page 2) | **7.6** (page 1) |
| … mobile | 10.9 | **4.1** |
| … desktop | 17.7 | 9.5 |
| Pages appearing in Google | 487 | **1,034** |
| Countries with ≥1 click | 74 | **91** |
| Clicks/day — USA | 6.2 | 7.0 |
| Clicks/day — GB | 1.7 | **2.8** |
| Clicks/day — France | 0.7 | **1.9** |
| Clicks/day — Germany | 0.75 | **1.6** |
| Clicks/day — Italy | **1.5** | 0.7 ⚠ |
| Clicks/day — Spain | 0.36 | 0.40 |

Monthly clicks: old site 400–550/month; new site 577 (Oct) → **762 (Jan 2026)**,
705 (Apr), then 405–490 from May — same May dip as GA, so it is real, not a tracking
artefact (see Caveat 4).

Core queries held or improved position while volume grew: "nr2f1 foundation"
1.1 → 1.3 (clicks/day 1.5 → 2.1), "nr2f1" 3.3 → 2.2, "bbsoas syndrome" 2.0 → 1.6
(0.24 → 0.80 clicks/day), "syndrome de bosch boonstra schaaf" 5.7 → 2.0,
"gendefekt nr2f1" unranked → 1.0. Only "bbsoas" slipped (1.9 → 2.8) while tripling
impressions.

**What was lost in the migration (the Italy drop explained):** the old site's
#3–#5 and #8 pages were four PDFs, *How to read your genetic report* in Italian,
Spanish, French and German — **386 clicks and 25.7k impressions in 140 days, 18% of
all old-site clicks**. They 404 on the new site (no `wp-content` redirects; `proxy.ts`
only adds a locale prefix). Also gone: `/learn-the-symptoms-of-bbsoas/` (60 clicks),
`/nr2f1-gene/` (55), `/bbsoas-and-vision-impairment/` (28) — content now lives as
anchors inside `what-is-bbsoas`, which Google does not rank as separate results.
Fewer impressions per day is mostly these pages disappearing; the clicks moved to
better-ranked pages, which is why clicks and CTR still rose.

Charts: `charts/search-console-before-after.csv`, `charts/search-console-monthly.csv`.

---

## 2. Narratives — one per persona, tied to the readme goals

### Narrative A — "The front door for newly diagnosed families"
*Persona 1 (newly diagnosed) · Readme goals: information about BBSOAS, resources, registry guidance*

- `what-is-bbsoas` is the site: **130,616 Google impressions, 46% of all** — and it
  ranks in 7 languages (`/en` 97k, `/fr` 6.8k, `/de` 6.3k, `/es` 5.2k, `/zh-CN` 4.5k…).
- People search the condition, not just the brand: "bbsoas" 736 clicks,
  "bosch boonstra schaaf optic atrophy syndrome" 244 + 162, "bbsoas symptoms" 40,
  "bbsoas life expectancy" 34, plus French/German/Spanish queries
  ("syndrome de bosch boonstra schaaf", "gendefekt nr2f1", "síndrome de bosch boonstra schaaf").
  This is exactly the persona's "my neurologist doesn't know about it, and there is
  nothing online" gap being filled.
- **112 of the 113 new registered patients came through the website's signup form**
  (the `Parent` tag is set by `website/src/app/api/create-contact/route.ts`). The
  Foundation need #1 for this persona — "register with the registry" — is now
  happening *on the site*, at ~10 families a month, every month, with no month at zero
  and no dependency on events (the year before, 24 of 133 arrived in two March days).
- Families registered from **15 countries**: USA 27, GB 9, Spain 6, France 5,
  Germany 5, Australia 4, Canada 3, Finland, Sweden, Colombia, Denmark, Poland,
  Mexico (2 each), Netherlands 1 — plus 31 who did not give a country.
- Year-before registrations were US 42 / France 26 (one French event); year one is
  spread thinner across 24 countries with Nordic and Latin American families
  appearing for the first time — but 29% gave no country (see §1.1).

**Slide angle:** "Every 3 days a new family finds us and registers." Map of new
families + bar of `what-is-bbsoas` impressions by language.

### Narrative B — "Built in 7 languages, and the world showed up"
*Persona 1 & 2 · Readme feature: internationalisation and localisation; SEO-friendly*

- Visitors from **56 countries** and **25 browser languages**. Top non-English:
  German 92, French 91, Spanish 44, Italian 28, Portuguese 25, Polish 12, Dutch 10.
- The best-performing blog post in Google is **French**: `/fr/news/blog/meet-3-yr-old-aydn`
  (7,397 impressions), then `/fr/…/first-international-bbsoas-awareness-day` (5,239),
  `/de/…/dont-worry-that-you-dont-know-you-will` (3,206), `/fr/…/first-bbsoas-cvi-clinic` (2,967).
- Localised pages earn a third of all Google impressions (fr 36k, de 20k, es 13k,
  zh-CN 11k, pt-BR 6.5k, it 6.2k).
- `nr2f1france.wordpress.com` is a top-5 referrer (27 sessions) — the French
  community links to us.
- Legacy URLs without a locale (e.g. `/what-is-bbsoas`, `/conference`, `/research`)
  still got **60k impressions** — the locale redirect preserved most of the old site's
  SEO equity. France and Germany doubled their daily search clicks (§1.2). The
  exception is Italy, which halved: its traffic came from a PDF guide that no longer
  exists (§1.2).

**Slide angle:** world map of active users; stacked bar of impressions by locale;
"our most-read story in Google is in French".

### Narrative C — "Families already known to us keep coming back"
*Persona 2 · Readme goals: blog for updates and stories; awareness*

- `news` is the second-biggest section in Google: **57,134 impressions**. Family
  stories travel: Aydn (fr), *A sibling's perspective on rare disease* (en 2.3k + zh-CN 1.2k),
  Edith, Ebony, plus Foundation news (new board president, grants to Dr Laugsch).
- **Direct** is the #1 acquisition channel for new users (539) and #2 for sessions
  (1,307): people type the URL or come from email/WhatsApp/Facebook groups. Organic
  Social adds 96 sessions (facebook.com variants ≈ 61, Instagram 5).
- People search for the Foundation's *people*: "magdalena laugsch" 51 clicks,
  "leora westbrook" 24, "jennifer coughlin" 8 — the site is where the community
  looks up who is who.
- Peak days: **10 Apr 2026 (28 users)**, 20 Jan 2026 (23), 9 Apr 2026 (21),
  28 Feb 2026 (19 — Rare Disease Day), 2–3 Dec 2025 (Giving Tuesday). Worth
  annotating on the chart what happened on 10 April and 20 January.
- Persona 2's challenge was "why check the website?" — the answer the data gives is
  *the blog*. Gap: monthly active users fell from 226 (Apr) to ~110 (May–Sep);
  the blog cadence + newsletter are the levers.

**Slide angle:** monthly active users line with annotated spikes; top 5 stories.

### Narrative D — "Supporters: many gave, few gave monthly"
*Persona 3 · Readme goal: donation page*

- **431 new donors, $88,019**, median $55; 15 gifts ≥ $1,000 (one $20,000, one $6,600).
- Two clear campaign waves: **December 2025** (137 donors, $20.4k; USA 72 / GB 63 —
  Giving Tuesday + year-end) and **May–June 2026** (141 donors, $33.7k, **132 from GB**
  — a UK campaign; GA shows Bath as the #3 city worldwide with 20 users, London #1 with 59).
- `givebutter.com` is the #2 referrer into the site (223 sessions): donors click
  through from campaign pages to learn about the cause — the site is doing the
  "why" for the fundraising.
- **Only 5 recurring donors** and 0 among pre-launch families. Persona 3's Foundation
  need #2 ("increase monthly recurring donations") is the clearest unmet objective.
- 4 of the 431 donors are tagged `Parent` — fundraising is being done *for* families
  by their networks (friends, colleagues), exactly as the persona describes.
- `/donate` had only 1,585 Google impressions: donation traffic comes from campaigns,
  not search — fine, but worth saying out loud.

**Slide angle:** monthly new donors bar (two waves annotated); big stat "5 recurring" as
the ask for year two.

### Narrative E — "Medical professionals: we own the search results"
*Persona 4 · Readme goal: resources for healthcare professionals*

- Brand and condition terms both rank: "nr2f1 foundation" 739 clicks, "bbsoas" 736,
  "nr2f1" 599, "bbsoas syndrome" 287, "nr2f1-related neurodevelopmental disorder" 18,
  "nr2f1 gene mutation" 45. The persona need "top-5 search results" is met and
  measurable: **average position went from 15.3 (old site) to 7.6, and 4.1 on
  mobile** — page 2 to page 1 (§1.2).
- Bing (110) and DuckDuckGo (17) add ~4% of sessions — clinicians on institutional
  machines.
- Referrals from `globalgenes.org` (27), `rarediseases.org` (2),
  `rarediseases.info.nih.gov` (1), `eyewiki.org` (1), `thecrid.org` (2) show the
  site is being cited in the rare-disease ecosystem.
- **AI assistants are a new channel**: chatgpt.com 10, gemini.google.com 6,
  claude.ai 2 (12 sessions, 4 new users). Small, but it did not exist a year ago
  and it is how a clinician will look this up in 2027.
- Gap: no dedicated "for clinicians" page shows up in landing pages; the
  medical-network/data-capture form on the persona board remains a future story.

**Slide angle:** "Search for the condition in any of 4 languages and you find us";
table of top queries; small callout on AI assistants.

### Narrative F — "Researchers can now find the infrastructure"
*Persona 5 · Readme goal: biorepository guidance, resources for researchers*

- Research pages are indexed and seen: `publications` 8,430 impressions,
  `research` 7,385, `get-involved-in-bbsoas-research` 5,151,
  `resources-available-to-researchers` 3,834, `patient-count` 3,228.
- 3 researcher/clinician contacts registered via the site (Heidelberg University,
  University of Verona, one anonymous) — persona 5's challenge was "can't find this
  on the website"; now they can, and some raise their hand.
- The grant story reaches Germany: `/de/…/bioinformatics-analysis-grant-to-dr-laugsch`
  1,097 impressions, `/de/…/nr2f1-foundation-grant-for-research` 967; "magdalena laugsch"
  51 clicks.
- **Persona 5 Foundation need #3** — "show a sizeable-enough population for trials" —
  is the registry story from Narrative A: 113 new patients in 12 months, 567 total,
  688 family contacts all-time.
  `patient-count` being a landing page people find in Google is that need, live.

**Slide angle:** research section impressions + the 567 patient-count number.

### Narrative G — "Foundations for year two" (closing / asks)
1. **Recurring giving** — 5 monthly donors is the number to move.
2. **Traffic since May** — diagnose the drop; annotate campaigns on the line.
3. **Old-site baseline** — pull the old GA property so the "before" is real.
4. **Clinician page + medical network form** — the persona board's future story.
5. **Keep publishing in French/German** — the localised blog is outperforming.
6. **Complete the registry** — 113 new patients, 0 with the H&D survey / genetic
   report recorded in Givebutter yet (vs 100% of the pre-launch cohort). Whether that
   is a data-entry lag or a real drop-off, it is the next conversion step.
7. **Fix the form's data quality** — collect the child's date of birth (74 → 8
   recorded) and stop silently dropping the address (country missing 9% → 29%).
8. **Bring back *How to read your genetic report*** (IT/ES/FR/DE) as localised
   pages, and add redirects for `/learn-the-symptoms-of-bbsoas/`, `/nr2f1-gene/`,
   `/bbsoas-and-vision-impairment/` and `/wp-content/uploads/…` → the matching
   `what-is-bbsoas` anchors. That is ~530 clicks per 140 days the old site had and
   the new one doesn't — and it is Italy's entire drop.

---

## 3. Proposed slide outline (Google Slides)

| # | Slide | Content | Visual (CSV in `charts/`) |
| --- | --- | --- | --- |
| 1 | Title | *One year of nr2f1foundation.org — 21 Sep 2025 → 14 Sep 2026* | Site screenshot |
| 2 | Why we rebuilt | Mission/vision + readme goals as 7 checkboxes | Text |
| 3 | Who we built it for | The 5 personas, ranked (from the Miro board) | Persona cards |
| 4 | Year one in numbers | 1,042 users · 56 countries · 25 languages · 283k impressions · 662 contacts · 113 families · $88k | 6–7 stat tiles |
| 5 | The world showed up | World map of active users by country | `ga-users-by-country.csv` |
| 6 | Seven languages, one community | Impressions by locale (stacked) + languages before/after | `search-impressions-by-locale.csv`, `ga-users-by-language.csv` |
| 7 | How people find us | Sessions by channel donut; organic 48% | `ga-sessions-by-channel.csv` |
| 8 | What they search for | Top 15 queries table, multilingual ones highlighted | `search-top-queries.csv` |
| 8b | **Page 2 → page 1** | Old site vs new site: position 15.3 → 7.6 (mobile 4.1), CTR 3.1 → 4.4%, clicks/day +21%, pages in Google 487 → 1,034 | `search-console-before-after.csv`, `search-console-monthly.csv` |
| 9 | What they read | Impressions by section; `what-is-bbsoas` = 46% | `search-impressions-by-section.csv` |
| 10 | A year of visits | Monthly active + new users line, spikes annotated | `ga-monthly-users.csv` |
| 11 | **Every 3 days a new family** | 127 family contacts / 113 registered patients, 24 countries, 112 via the site form | `givebutter-new-families-by-country.csv` |
| 12 | Registry: before vs after | 133 → 127 (flat) but bursts → steady pipeline; 24 months side by side with launch marked | `givebutter-families-by-month-2yrs.csv` |
| 13 | Stories that travel | Top 5 blog posts by impressions; the French one wins | Post thumbnails |
| 14 | Supporters | 431 donors · $88k · two campaign waves (Dec, May–Jun UK) | `givebutter-monthly-contacts.csv` |
| 15 | The number to move | **5** recurring donors | Single stat |
| 16 | Clinicians & researchers | Top-5 rankings for condition terms; research pages found; 3 researcher signups; AI assistants appear | Table + callout |
| 17 | Honest gaps | Traffic dip since May (real — also in Search Console); no clinician page; registry follow-through; lost genetic-report guides (Italy −55%) | Text |
| 18 | Year two | The 6 asks from Narrative G | Text |

Slide 8b is the one true before/after we have — give it a full slide.

Suggested arc: **built for families → found worldwide → families registered →
supporters funded → clinicians/researchers served → what's next**. Slides 11–12
are the emotional peak; put them right after the traffic story, not at the end.

---

## 4. Appendix — supporting tables

### 4.1 Monthly active / new users (GA)

| Month | Active | New | Notes |
| --- | --- | --- | --- |
| 2025-09 (from 21st) | 71 | 37 | Launch |
| 2025-10 | 168 | 79 | |
| 2025-11 | 152 | 83 | |
| 2025-12 | 185 | 100 | Giving Tuesday 2–3 Dec |
| 2026-01 | 200 | 116 | Spike 20 Jan (23) |
| 2026-02 | 215 | 99 | 28 Feb Rare Disease Day (19) |
| 2026-03 | 221 | 90 | |
| 2026-04 | 226 | 115 | Spikes 9–10 Apr (21, 28) |
| 2026-05 | 114 | 61 | ⚠ halves — check tracking |
| 2026-06 | 118 | 59 | UK campaign (Givebutter) |
| 2026-07 | 102 | 51 | |
| 2026-08 | 118 | 67 | |
| 2026-09 (to 14th) | 81 | 50 | |

### 4.2 Sessions by channel

| Channel | Sessions | New users (first-touch) |
| --- | --- | --- |
| Organic Search | 1,623 | 401 |
| Direct | 1,307 | 539 |
| Referral | 290 | 16 |
| Organic Social | 96 | 47 |
| Unassigned | 42 | — |
| AI Assistant | 12 | 4 |
| Organic Shopping / Video | 3 | — |

### 4.3 Top referrers (sessions)

google 1,477 · givebutter.com 223 · bing 110 · globalgenes.org 27 ·
nr2f1france.wordpress.com 27 · facebook (all variants) 61 · duckduckgo 17 ·
dropbox.com 16 · chatgpt.com 10 · gemini.google.com 6 · l.instagram.com 5 · claude.ai 2

### 4.4 New Givebutter contacts by month

| Month | Contacts | Registered patients | Donors | $ |
| --- | --- | --- | --- | --- |
| 2025-09 | 11 | 3 | — | — |
| 2025-10 | 16 | 9 | — | — |
| 2025-11 | 36 | 11 | — | — |
| 2025-12 | 149 | 6 | 137 | 20,398 |
| 2026-01 | 65 | 18 | — | — |
| 2026-02 | 56 | 10 | — | — |
| 2026-03 | 87 | 10 | 48 | 3,902 |
| 2026-04 | 36 | 11 | — | — |
| 2026-05 | 78 | 9 | 64 | 8,035 |
| 2026-06 | 88 | 8 | 77 | 25,695 |
| 2026-07 | 14 | 10 | — | — |
| 2026-08 | 18 | 8 | — | — |
| 2026-09 | 8 | 0 | — | — |

(— = see `charts/givebutter-monthly-contacts.csv` for every month.)

### 4.5 Active users by country (top 15, GA)

US 417 · GB 159 · DE 96 · FR 79 · CA 42 · IT 31 · ES 28 · AU 27 · BR 18 · PL 12 ·
DK 10 · NL 10 · PT 9 · IN 7 · AT / CO / HU / MX 6

### 4.6 Top cities

London 59 · Dallas 21 · Bath 20 · Chicago 19 · Paris 16 · New York 15 · Melbourne 15 ·
Frankfurt 15 · Newark 13 · Toronto 13 · Turin 13 · Lake Buena Vista 13 · Houston 12 · Atlanta 12
