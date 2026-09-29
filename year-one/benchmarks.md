# Sector benchmarks for the year-one deck

Output of a deep-research run (16 Sep 2026: 21 sources fetched, 105 claims extracted,
25 verified by 3-vote adversarial check, 20 confirmed, 5 refuted, 9 findings after
merge). Only claims that survived verification are listed. Our numbers come from
[year-one-story.md](./year-one-story.md) and `api/`.

**Population warning, say it once:** every fundraising benchmark below describes
organisations orders of magnitude larger than NR2F1 Foundation (M+R "Small" = under
$1M online revenue; Blackbaud ≈ $8.8M average revenue). The closest analogue is
Wired Impact's 130+ small nonprofit client sites. Use benchmarks as orientation,
not as pass/fail.

---

## 1. Search

| Benchmark | Value | Source (year, population) | Ours |
| --- | --- | --- | --- |
| Whole-site organic CTR, median | **1–2%**; DR 0–10 sites **0.4%**; every DR bucket below 60–70 is under 1% | Ahrefs, *What is a good CTR*, Jun 2026 snapshot (422k sites' Search Console data, refreshed monthly) | old site **3.1%** → new site **4.4%** |
| Per-position CTR curve | AWR publishes it monthly (top-20, GSC data, millions of keywords) — values only in the interactive chart, none verified in text | Advanced Web Ranking, Jul 2026 | avg position 15.3 → **7.6** (mobile 4.1) — read the AWR chart for the implied CTR at each |
| AI Overviews effect on position 1 | CTR **−34.5%** when an AIO is present (Ahrefs, 300k keywords, Mar 2024 vs Mar 2025); AWR: reduction "on the order of half"; Seer −61%, Pew 8% vs 15% | Ahrefs Apr 2025; AWR Jul 2026 | our CTR *rose* 3.1 → 4.4% through the same period |

**Reading for the deck:** a 4.4% whole-site CTR is 2–4× the median for any site and
~10× the median for a low-authority domain. Ahrefs' own caveat applies to us: sites
whose impressions are dominated by entity/navigational queries ("nr2f1", "bbsoas")
beat their bucket — so present it as "well above the norm", not as a ranking feat.
The AI Overview headwind is real and sector-wide; holding CTR up while positions
improved is the defensible claim.

*Refuted, do not cite:* Health-category CTR 1.15% (1–2); "position-1 CTR ≈ 3% for
informational queries" (0–3).

## 2. Traffic mix and engagement

| Benchmark | Value | Source | Ours |
| --- | --- | --- | --- |
| Organic search share of visits | **37.5%** (Wired Impact) / **39%** and declining (M+R) | Wired Impact 2025 (130+ client sites, medians); M+R Benchmarks 2026 (180 nonprofits, 2025 data) | **48%** |
| Direct share | **37%** | Wired Impact 2025 | **39%** |
| GA4 engagement rate | **43.2%** | Wired Impact 2025 | **53%** |
| Pages / session | **1.74** | Wired Impact 2025 | **2.34** |
| Session duration | 2m 03s | Wired Impact 2025 | 3m 22s engagement time per active user (different metric — don't put side by side) |
| Volume | **~601 users / ~782 sessions per month** (≈7,200 users, ≈9,400 sessions a year) | Wired Impact 2025 | **~86 users / ~281 sessions per month** — about **1/7** of the median small site's users, 1/3 of its sessions |
| Mobile share | **52%** of traffic | M+R 2026 | **71%** |

**Reading for the deck:** on every *quality* measure — organic share, engagement,
depth — the site beats the small-nonprofit median. On *volume* it is a seventh of
the median, which is the honest size of a syndrome with a few hundred diagnosed
families. Say both. Wired Impact notes its own numbers are under-counted by
ad-blockers and consent banners, which applies to ours too.

## 3. Fundraising

| Benchmark | Value | Source | Ours |
| --- | --- | --- | --- |
| Visitors who donate | **1.6%** of all visitors; $1.33 revenue per visitor | M+R 2026 (2025 data, medians) | not measurable — our donors arrive via Givebutter campaign pages, and givebutter.com is the #2 *referrer into* the site. 1.6% × 1,033 users ≈ **16 web-originated donors** is the yardstick |
| Mobile donation conversion, Small nonprofits | **4%** of mobile landers on a donation page (desktop 11%, mobile 8% overall) | M+R 2026 | 71% of our users are on mobile — the persona-3 flow must be a mobile flow |
| Monthly giving share of online revenue | **27%** all (2025); **22%** Small cohort; **20%** Health (2024); 31% in 2024 overall | M+R 2026 / 2025 | **5 recurring donors of 431 (1.2%)**; revenue share well under 20% however the field is read |
| Average online gift (2024) | one-time **$126** ($129 Health); monthly **$24** ($27 Health) | M+R 2025 | median gift **$55**; 15 gifts ≥ $1,000 |
| December share of online revenue | **37%** in 2025 (Giving Tuesday and 31 Dec both in December — M+R flags it as a calendar high); 2024: Nov+Dec 38% (Health 45%), December = 30% of one-time online revenue (Health 44%) | M+R 2026 / 2025 | December-2025 contacts = **23%** of year-one $; the **UK May–June campaign = 38%** |
| All-channel Q4 / December | Q4 **36.1%**, December **~18%** of annual giving | Blackbaud Institute, 2025 Trends in Giving (7,500+ orgs, $66B) | — |
| Small-nonprofit revenue trend 2025 | **−6.4%** for orgs under $1M revenue (sector median +4.3%; large +11.7%) | Blackbaud, Mar 2026 | cannot compute a like-for-like $ change (Givebutter "Total Contributions" is lifetime per contact) |
| Donor retention | **43.3%** overall; new-donor retention **18.9%**; donor counts −3.6% while dollars +5% | Fundraising Effectiveness Project 2025 (15,102 US nonprofits) | not yet measurable — year two will tell |

**Reading for the deck:** the Foundation is *less* December-dependent than the
sector because of the UK spring campaign — a genuine resilience point. Recurring
giving is the clear miss: 1.2% of donors versus a sector where a fifth of online
revenue is monthly. Small nonprofits shrank 6.4% in 2025, so any flat-or-up result
for the Foundation is against the tide — but we cannot prove ours from Givebutter's
lifetime field without a per-transaction export.

*Refuted, do not cite:* "$183/yr per one-time donor ⇒ ~$140 gift" (1–2); "Q4 lifted
FEP growth from 3.7% to 5.0%" (0–3). No UK-specific giving benchmark survived.

## 4. Registry / research population

| Benchmark | Value | Source | Ours |
| --- | --- | --- | --- |
| Largest published BBSOAS natural-course cohort | **47 individuals** (48 questionnaires), recruited via the Heidelberg BBSOAS registry, the closed *BBSOAS Families* Facebook group **and "the NR2F1 association"** | Valentin et al., *Clin Genet* 2025;108(2):168-178, doi 10.1111/cge.14731 | Foundation registry: **567 patient numbers, 688 family contacts, +127 in year one** — ~12× the largest published study cohort, and one of that study's recruitment channels |

No generic rare-disease registry enrolment-rate or "share of diagnosed population"
benchmark survived verification (NORD IAMRARE, EURORDIS). The Heidelberg figure is
a study cohort, not a registry growth rate — use it as "the research community's
sample size", which is exactly persona 5's need #3.

*Refuted, do not cite:* "only 92 BBSOAS individuals described in the literature" (1–2).

## 5. Measurement caveats

Nothing survived verification from web sources. What we know first-hand from this
project (not benchmarks — observations):

- GA4 property `502754037` was created 27 Aug 2025 (Admin API), so its pre-launch
  data is staging traffic. The old site's own analytics exist but we have no access to the account.
- Search Console domain property `sc-domain:nr2f1.org` was added 5 Sep 2025 yet
  returns data from 4 May 2025 — i.e. domain properties **do** show pre-verification
  data, bounded by the 16-month retention. That window shrinks daily.
- Wired Impact and M+R both note consent banners and ad-blockers under-count GA4
  traffic; our UK/EU-heavy audience makes this material but unquantified.
- GA CSV export (1,042 users) vs Data API (1,033) differ by <1% — thresholding.

## Open questions the run could not close

1. Per-position CTR values for 2026, mobile vs desktop — read AWR's chart directly.
2. UK giving patterns (CAF UK Giving, Enthuse, Blackbaud Europe) — none verified.
3. Enrolment rates for comparable single-gene registries.
4. Size of consent-banner under-measurement for EU/UK GA4 traffic.

## Sources (verified)

- Ahrefs — *What is a good CTR?* (Jun 2026) — https://ahrefs.com/blog/what-is-a-good-ctr/
- Ahrefs — *AI Overviews reduce clicks by 34.5%* (Apr 2025) — https://ahrefs.com/blog/ai-overviews-reduce-clicks/
- Advanced Web Ranking — *Google organic CTR history* (Jul 2026) — https://www.advancedwebranking.com/free-seo-tools/google-organic-ctr
- Wired Impact — *Nonprofit website benchmarks* (2025 data) — https://wiredimpact.com/nonprofit-website-benchmarks/
- M+R Benchmarks 2026 — *Website performance* — https://mrbenchmarks.com/website-performance/
- M+R Benchmarks 2026 — *Fundraising* — https://mrbenchmarks.com/fundraising/
- M+R Benchmarks 2025 — *Fundraising* — https://2025.mrbenchmarks.com/fundraising.html
- Blackbaud Institute — *2025 Trends in Giving* (Mar 2026) — https://www.blackbaud.com/newsroom/article/2025-trends-in-giving-spotlight
- AFP / Fundraising Effectiveness Project — 2025 Q4 report (Apr 2026) — https://afpglobal.org/news/fundraising-effectiveness-project-reports-strongest-revenue-growth-five-years-even-fewer
- Valentin et al. — *Natural course of BBSOAS*, Clin Genet 2025 — https://onlinelibrary.wiley.com/doi/10.1111/cge.14731
