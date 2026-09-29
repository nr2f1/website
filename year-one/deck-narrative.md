# nr2f1.org — one year on. Deck narrative (before → after)

Talking points for the company-meeting Google Slides deck. Every slide names the
readme goal and the persona it speaks to, the number(s) to show, the chart CSV in
`charts/`, and a **Benchmark** line so each of our figures gets a "vs. the sector"
comparison (sources and caveats in [benchmarks.md](./benchmarks.md)). One warning to voice once:
every fundraising benchmark describes organisations far larger than the Foundation —
they orient, they don't grade.

Supporting analysis: [year-one-story.md](./year-one-story.md). Raw API pulls: `api/`.

> **Note (16 Sep 2026):** the built deck (`nr2f1-year-one.pptx`, 24 slides) has since had its
> copy rewritten against content-design principles, and gained a dedicated personas slide.
> Slide headings there state the finding in plain words rather than using the evocative titles
> below, and every metric carries a one-line gloss. This file remains the *argument*; the deck
> is the *delivery*. Heading changes:
>
> | Here | In the deck |
> | --- | --- |
> | The world showed up | 1,033 people used the site |
> | Page 2 → page 1 | We moved from page 2 of Google to page 1 |
> | Seven languages, one community | A third of our search results are not in English |
> | How people arrive | Half of all visits come from Google |
> | Every three days, a new family | A family registers every 3 days |
> | Same number, different shape | Registrations did not go up. They became steady. |
> | Supporters showed up in two waves | 431 people donated in the first year |
> | The number to move: 5 | Only 5 people set up a monthly donation |
> | Clinicians: credible and findable | Doctors can now find us in the first few results |
> | Researchers can see the infrastructure | Our registry is 12 times larger than the biggest published study |
> | Sections: Found / Registered / Supported / Trusted / Next | Questions: Can families find us? / Do families register? / Do supporters give? / Can professionals rely on us? / What next? |

---

## What "before" and "after" mean — say this once, on slide 3, then never apologise again

| Lens | Before | After | Comparable? |
| --- | --- | --- | --- |
| **Google Search** (Search Console) | Old WordPress site, 4 May → 20 Sep 2025 (140 days) | New site, 21 Sep 2025 → 14 Sep 2026 (358 days) | ✅ per-day, same domain |
| **Families registering** (Givebutter) | 21 Sep 2024 → 20 Sep 2025 | 21 Sep 2025 → 14 Sep 2026 | ✅ same field, same CRM |
| **Supporters / donors** (Givebutter) | contacts created in the year before | contacts created in year one | ✅ counts; ⚠ "$" is lifetime-per-contact |
| **Visits** (GA4) | old site's analytics exist but we cannot access the account; ours was created 27 Aug 2025 | year one | ❌ after only |

Launch date: **21 September 2025.**

---

## The arc (6 beats, ~18 slides, 20 minutes)

1. **Why** — mission, the 7 goals, the 5 personas ranked (slides 1–3)
2. **Found** — search went from page 2 to page 1, in 7 languages (slides 4–8)
3. **Registered** — the registry got a front door (slides 9–11)
4. **Supported** — donors and the recurring gap (slides 12–13)
5. **Trusted** — clinicians and researchers (slides 14–15)
6. **Next** — honest gaps and year-two asks (slides 16–18)

The emotional peak is beat 3. Put it in the middle, not at the end.

---

## Slide-by-slide

### 1 · Title
**"One year of nr2f1.org — 21 Sep 2025 → 14 Sep 2026"**
Visual: homepage screenshot in 3 languages side by side.

### 2 · Why we rebuilt it
*Goals: all seven (readme) · Personas: all five*
Talking point: The Foundation's mission is education, advocacy and research for
families living with NR2F1 variants. The old site was a WordPress build with a
handful of English pages and four PDFs doing most of the work. The brief was seven
goals — awareness, information, family resources, registry guidance, professional
resources, a blog, donations — and five build constraints: maintainable, accessible,
responsive, multilingual, SEO-friendly.
Visual: the 7 goals as a checklist (we'll tick them as we go).

### 3 · Who we built it for, and how we measured
*Personas ranked from the Miro board*
Talking point: We ranked five personas by "most valuable right now": newly diagnosed
parents first, then families we already know, then supporters and clinicians, then
researchers. Every number in this deck is tagged to one of them. And one honesty
slide up front: what "before" means for each data source (table above).
Visual: the five persona cards + the before/after table.

---

### 4 · The world showed up
*Goal: awareness · Persona: newly diagnosed*
**1,033 users · 56 countries · 25 languages · 3,375 sessions · 7,896 pageviews**
71% on mobile. 53% of sessions engaged; 3m22s engagement per user.
Talking point: In year one the site was used by just over a thousand people from 56
countries — for a syndrome with a few hundred diagnosed families worldwide, that is
the community plus the people around it.
Chart: world map — `ga-users-by-country.csv`.
Benchmark: small-nonprofit medians are **43% engagement rate, 1.74 pages/session** (Wired Impact 2025) — we're at 53% and 2.34. But the median small site gets **~7,200 users a year**; we get ~1,000. Say it: high quality, one-seventh the volume — the honest size of this community.

### 5 · Page 2 → page 1  ← the one true before/after
*Goal: SEO-friendly · Persona: newly diagnosed, clinicians*

| per day | Old site | New site |
| --- | --- | --- |
| Google clicks | 15.2 | **18.4** (+21%) |
| CTR | 3.1% | **4.4%** |
| Average position | 15.3 | **7.6** |
| … on mobile | 10.9 | **4.1** |
| Pages Google shows | 487 | **1,034** |
| Countries with a click | 74 | **91** |

Talking point: Same domain, same searches, measured by Google itself. The old site
sat on page 2 for the average query; the new one is on page 1, and on a phone it's
in the top 4. Impressions per day actually fell 14% — we lost a lot of page-2
impressions that never converted — while clicks rose 21%. Fewer, better placements.
Chart: `search-console-before-after.csv` (two-column bars) + `search-console-monthly.csv` (line, launch marked).
Benchmark: a whole-site organic CTR of **1–2% is the median; 0.4% for low-authority sites** (Ahrefs, 422k sites, Jun 2026). Ours is 4.4%. Part of that is that people search our names ("nr2f1", "bbsoas") — say so. And it rose while **AI Overviews cut position-1 clicks by a third to a half** sector-wide (Ahrefs 2025, AWR 2026).

### 6 · People search for the condition, not for us
*Goal: information about BBSOAS · Persona: newly diagnosed, clinicians*
Top queries: "nr2f1 foundation" 739 · "bbsoas" 736 · "nr2f1" 599 · "bbsoas syndrome" 287 ·
"bosch boonstra schaaf optic atrophy syndrome" 244 · "bbsoas symptoms" 40 ·
"bbsoas life expectancy" 34 · and in other languages: "syndrome de bosch boonstra
schaaf" (position 5.7 → 2.0), "gendefekt nr2f1" (unranked → #1), "síndrome de bosch
boonstra schaaf".
Talking point: Two-thirds of clicks are condition terms, not brand terms — parents
typing the diagnosis they were just given. "bbsoas syndrome" went from 0.24 to 0.80
clicks a day. That is persona #1's exact moment.
Chart: `search-top-queries.csv` table; highlight non-English rows.

### 7 · Seven languages, one community
*Goal: internationalisation · Persona: newly diagnosed, families*
Non-`/en` pages earn **33% of Google impressions** (fr 36k, de 20k, es 13k, zh-CN 11k,
pt-BR 6.5k, it 6.2k). Daily search clicks from **France 0.7 → 1.9, Germany 0.75 → 1.6,
UK 1.7 → 2.8**. The most-seen blog post in Google is in French (Aydn, 7,397 impressions).
Talking point: Localisation wasn't a checkbox — it's a third of our search presence,
and it doubled the French and German communities' access. The site is being cited by
`nr2f1france.wordpress.com`.
Chart: `search-impressions-by-locale.csv` stacked bar; `ga-users-by-language.csv`.
Caveat to voice: Italy halved (1.5 → 0.7 clicks/day) — see slide 16.

### 8 · How people arrive
*Goal: awareness · Persona: families, supporters*
Sessions: Organic Search 48% · Direct 39% · Referral 9% · Social 3% · AI assistants 12 sessions.
Referrers: google 1,477 · **givebutter.com 223** · bing 110 · globalgenes.org 27 ·
nr2f1france 27 · facebook ≈61 · chatgpt.com 10 · gemini 6 · claude.ai 2.
Talking point: Half of visits come from search — the new site earns its own
audience. Direct is the community (email, WhatsApp, Facebook groups). And a channel
that didn't exist a year ago: people arriving from ChatGPT, Gemini and Claude.
Chart: `ga-sessions-by-channel.csv` donut.
Benchmark: nonprofit sites get **37.5–39% of visits from organic search** and ~37% direct (Wired Impact 2025; M+R 2026), with organic *declining* through 2025. Ours: 48% organic, 39% direct. Mobile: sector 52%, ours 71%.

---

### 9 · Every three days, a new family
*Goal: registry guidance · Persona: newly diagnosed*
**127 new family contacts in year one · 113 assigned a patient number · 24 countries ·
112 of 113 came through the website's form.**
Talking point: The registry is the Foundation's most valuable asset for research.
In year one, 127 families registered — one every three days — and 112 of the 113 who
got a patient number did it on the website. `/register-a-patient` was viewed ~280
times across languages; roughly half of those views became a registration.
Chart: `givebutter-new-families-by-country.csv` map + monthly bars.

### 10 · Same number, different shape
*Goal: registry guidance · Persona: newly diagnosed*

| | Year before | Year one |
| --- | --- | --- |
| Family contacts created | **133** | **127** |
| Busiest two days | 7–8 Mar 2025: **24** (an event) | never more than 3 |
| Months with < 5 registrations | 3 | 0 |
| Top country | USA 42, France 26 | USA 30, GB 11 |

Talking point: Be straight: the website did not increase the number of families
registering — that is driven by diagnoses, not by design. What changed is the
mechanism. Before, registrations came in bursts around events and one French
campaign; 18% of the year arrived in two days. After, they arrive every month,
9–11 at a time, through a form that works in seven languages. That is a pipeline the
Foundation can count on — and the first time the registry has been independent of
the events calendar.
Chart: `givebutter-families-by-month-2yrs.csv` — 24 monthly bars, launch line.
Benchmark: no generic registry growth rate survived fact-checking. The one hard number: the largest published BBSOAS natural-course study (Heidelberg, *Clin Genet* 2025) enrolled **47 individuals** — recruited partly through "the NR2F1 association". The Foundation's registry now holds **567 patients / 688 family contacts**, ~12× that cohort. Use on slide 15.

### 11 · Where the community is
*Goal: family resources · Persona: families*
New families: USA 30, GB 11, Germany 6, Spain 6, Australia 5, France 5, Canada 3,
Denmark 3, Finland 2, Sweden 2, Colombia 2, Mexico 2, Poland 2… Nordic and Latin
American families for the first time.
Talking point: 37 of the 127 didn't give a country — the form's address step
silently drops when postcode and country don't match. Fix on slide 17.
Chart: map.

---

### 12 · Supporters showed up in two waves
*Goal: donations · Persona: supporter*
**431 new donors · $88k · median gift $55 · 15 gifts ≥ $1,000 (one of $20,000).**
December 2025: 137 donors, $20k (Giving Tuesday + year-end, US + UK).
May–June 2026: 141 donors, $34k — **132 from the UK** (a UK campaign; Bath is the
site's #3 city worldwide).
Talking point: The website isn't where donations happen — Givebutter campaign pages
are — but it's where donors go to understand *why*: givebutter.com is the #2 referrer
into the site (223 sessions). Only 4 of the 431 donors are parents: friends and
colleagues fundraise *for* families, exactly as the supporter persona describes.
Chart: `givebutter-monthly-contacts.csv` — donors per month, two waves annotated.
Benchmark: sector average one-time online gift **$126** (M+R 2024 data); ours median $55, with 15 gifts ≥ $1,000. Sector took **37% of online revenue in December 2025** (M+R 2026); our December contacts = 23% of the year, because the **UK spring campaign was 38%** — we are *less* December-dependent than the sector. Context: small US nonprofits' revenue **fell 6.4% in 2025** (Blackbaud) — anything flat or up is against the tide (we can't prove the $ change from Givebutter's lifetime field).

### 13 · The number to move: 5
*Goal: donations · Persona: supporter (Foundation need #2)*
**5 recurring donors** out of 431. Zero among pre-launch families.
Talking point: The persona board's second ask for supporters was "increase monthly
recurring donations we can count on". We didn't move it. One-off campaign giving
works; the recurring product on the site isn't visible enough. This is the clearest
year-two target.
Visual: a single huge "5".
Benchmark: monthly giving is **22% of online revenue for small nonprofits, 20% for Health** (M+R). Ours: 5 of 431 donors (1.2%). Sector average monthly gift is $24–27 — the ask is small; the path isn't visible. Also: **only 4% of mobile visitors who reach a donation page convert at small nonprofits** (M+R) and 71% of our users are on mobile — make recurring a mobile-first flow.

---

### 14 · Clinicians: credible and findable
*Goal: resources for professionals · Persona: medical professional*
Persona need: "find the website in the top 5 results" → average position **7.6**,
**4.1 on mobile**; core terms at 1.3–2.2. (Per-position CTR values: read AWR's live
chart — none were verifiable in text; see benchmarks.md §1.) Referrals from globalgenes.org,
rarediseases.org, NIH GARD, EyeWiki, CRID. Bing + DuckDuckGo ≈ 4% of sessions.
Talking point: A neurologist who has never heard of BBSOAS can now type it and land
on us in the top results, in their language. What we don't yet have: a page written
*for* them — and the medical-network form on the persona board is still a future story.
Visual: search-results mock-up in 4 languages.

### 15 · Researchers can see the infrastructure
*Goal: biorepository, research resources · Persona: scientific researcher*
Research pages: publications 8.4k impressions · research 7.4k ·
get-involved-in-bbsoas-research 5.2k · resources-available-to-researchers 3.8k ·
**patient-count 3.2k**. ~950 pageviews on research content. 3 researcher signups
(Heidelberg, Verona). Grant stories rank in German; "magdalena laugsch" gets 51 clicks.
Talking point: The researcher persona's challenge was "can't find this on the
website". Now the biorepository, publications and — crucially — the patient count
are indexed pages. Persona need #3, "show a sizeable-enough population for trials":
567 registered patients, 688 family contacts, and that number is a URL.
Benchmark: the largest published BBSOAS natural-course study (Valentin et al.,
*Clin Genet* 2025) has **n = 47**, recruited via the Heidelberg registry, the BBSOAS
Families Facebook group and the NR2F1 association. Our registry is ~12× that cohort.
That is the sentence for a researcher.
Visual: research section screenshot + the count.

---

### 16 · Honest gaps
1. **Traffic halved in May 2026** and stayed there (226 → ~110 users/month). Search
   Console shows the same dip, so it's real, not a tag change. Blog cadence and the
   newsletter are the levers.
2. **We lost the old site's second-biggest asset.** Four PDFs — *How to read your
   genetic report* in IT/ES/FR/DE — were 18% of old-site clicks. They 404 now. Italy's
   search traffic halved because of it. Same for `/learn-the-symptoms-of-bbsoas/`,
   `/nr2f1-gene/`, `/bbsoas-and-vision-impairment/` (now anchors, which Google
   doesn't rank).
3. **Registry follow-through:** 0 of the 113 new patients have a genetic report or
   H&D survey recorded yet (vs 100% of the pre-launch cohort). Data-entry lag or drop-off — find out.
4. **Form data quality:** child's DOB recorded 74 → 8; country missing 9% → 29%.
5. **No clinician page**, no medical-network form.
6. **5 recurring donors.**

### 17 · Year two
- Restore the genetic-report guides as localised pages; add redirects for the six
  legacy URLs (≈530 clicks / 140 days recovered; Italy back).
- Make recurring giving a first-class path on `/donate` and `/support-us`.
- Fix the form: ask for DOB, don't drop the address.
- A "for clinicians" page + the medical-network capture form.
- Keep publishing in French and German — the localised blog outperforms English.
- Diagnose May: annotate campaigns on the traffic line; agree a publishing cadence.
- Rotate the Givebutter API key and move it server-side (it's `NEXT_PUBLIC_*`).

### 18 · Close
Back to slide 2's checklist: 7 goals — 6 ticked (awareness, information, family
resources, registry guidance, blog, donations), 1 half (professional resources).
Five build constraints — 5 ticked, with i18n and SEO as the ones that produced
measurable outcomes.
Closing line: *"The old site told people what BBSOAS is. The new one is where a
family, anywhere, in their language, finds the diagnosis on page one and registers
in the same visit. A year in, that happens every three days."*

---

## Numbers cheat-sheet (for speaker notes)

| | Before | After |
| --- | --- | --- |
| Search clicks / day | 15.2 | 18.4 |
| Search CTR | 3.1% | 4.4% |
| Avg position (all / mobile) | 15.3 / 10.9 | 7.6 / 4.1 |
| Pages in Google | 487 | 1,034 |
| Countries with a search click | 74 | 91 |
| Family contacts created | 133 | 127 |
| Patient numbers assigned | 127 | 113 |
| Registrations via website form | (old WP form, untagged) | 112 / 113 |
| Busiest registration day | 12 | 3 |
| New Givebutter contacts | 1,065 | 662 |
| Users / sessions (GA) | — | 1,033 / 3,375 |
| Languages of visitors | — | 25 |
| Donors / $ (new contacts) | — | 431 / $88k |
| Recurring donors | 0 (pre-launch families) | 5 |
