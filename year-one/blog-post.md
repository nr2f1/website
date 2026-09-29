# Most website relaunches can't prove they worked

**We nearly couldn't either. Here is what a year of data from a rare-disease charity taught us about measuring a replatform honestly — including the part where our headline number didn't move.**

---

A year after we relaunched nr2f1.org, we sat down to answer what should have been a simple question. Did it work?

We opened Google Analytics. The property had been created on 27 August 2025, three weeks before we went live. There was nothing before that date.

The old site had been measured. Someone had set analytics up years earlier and it had been quietly collecting all along. But the account was not ours, nobody still involved could get into it, and the data might as well not exist. We were standing next to the answer with no way to open the door.

This is more common than anyone admits. Teams spend a year and a serious budget replacing a website, launch it, and then find they cannot say what changed. The old analytics belong to an agency that was replaced two procurement cycles ago, or to a marketing manager who left, or to a personal Google account nobody wants to admit was used. Sometimes they were switched off during the migration. Sometimes they sat in a Universal Analytics property that Google deleted in 2024 while everyone assumed someone else had exported it. The new site produces a great many numbers. None of them answer the only question the board actually asked.

We got lucky, and then we got useful. Here are the three things we would now do differently on any replatform, whoever it is for.

## 1. Get the keys to the old numbers before you start

We could not compare visits. We could compare Google.

Google Search Console measures the web address, not the website. It does not care that we replaced WordPress with Next.js, because as far as Google is concerned, nr2f1.org is nr2f1.org. And when you verify a domain property, Search Console backfills its records — ours reached back to 4 May 2025, months before we launched.

That gave us 140 days of the old site to hold against 358 days of the new one. Measured per day, so the windows are comparable:

| Per day | Old site | New site |
| --- | --- | --- |
| Clicks from Google | 15.2 | 18.4 |
| Clicks per 100 times shown | 3.1 | 4.4 |
| Where we appear in results | 15th | 8th |
| Where we appear on a phone | 11th | 4th |
| Pages Google can show | 487 | 1,034 |

Fifteenth is page two. Eighth is page one. On a phone, where 71% of this audience reads, we went from eleventh to fourth.

We only have that comparison because Search Console keeps 16 months of history and we happened to ask inside the window. Two months later the "before" would have aged out, and a year of work would have been unprovable. That is not a measurement strategy. That is a near miss.

**What we would do now:** put analytics access on the discovery checklist, alongside the domain registrar and the DNS. Not "does the old site have analytics" — everybody says yes — but "can someone on this project log in today, and show us a report". Then verify a Search Console domain property in an account you control, export the old numbers before anything is switched over, and write down the three you intend to move.

It takes an afternoon. It is the difference between a case study and an opinion.

## 2. Traffic is not the outcome. Find the thing that is.

The NR2F1 Foundation supports families living with BBSOAS, a rare condition caused by a change in a single gene. It affects sight, movement and development. A few hundred families worldwide have a diagnosis.

The Foundation's most valuable asset is not its website. It is its patient registry — the record of diagnosed families that makes research possible. The largest published study of this condition followed 47 people. The Foundation's registry holds 567.

So the number that matters is not visits. It is registrations. And when we looked, registrations had not gone up.

- The year before launch: **133 families registered**
- The year after: **127**

If we had gone looking for a good number, we would have stopped at "traffic is up" and never mentioned this. Instead it turned out to be the most interesting finding in the project.

Look at how those registrations arrived. In March 2025, on two consecutive days, 24 families registered — 18% of the entire year, from a single event. Three months that year saw fewer than five registrations. The old baseline was thin, lumpy and entirely dependent on somebody organising something.

After launch: nine to eleven families every single month. No empty months. Never more than three on any one day. Of the 113 families given a patient number, 112 came through the form on the new site, in seven languages.

The volume was flat. The mechanism changed completely. A charity that used to depend on the events calendar now has a pipeline it can plan research around.

> A website cannot make more families receive a diagnosis. It can decide whether the ones who do ever find you.

That distinction only becomes visible if you agree, in advance, what the website is for. "More traffic" would have hidden it in both directions — it would have taken credit for a busy month and panicked about a quiet one.

**What we would do now:** before launch, name the one action that means the organisation has succeeded. Registrations. Applications. Qualified enquiries. Renewals. Then measure that, and treat traffic as diagnostic rather than as the score.

## 3. Count what you lost, not just what you gained

Here is the part that does not usually make it into a case study.

The old site's third, fourth, fifth and eighth most-read items were PDFs: *How to read your genetic report*, in Italian, Spanish, French and German. Between them they earned 386 clicks and 25,700 appearances in Google in 140 days. That is 18% of everything the old site earned from search.

They do not exist on the new site. The addresses lead nowhere.

Three more pages went the same way — the symptoms page, the gene page and the page on vision impairment. Their content was folded into a single, better page as anchor links. That is good information architecture and bad search behaviour. Google does not rank a section of a page as its own result.

You can see the damage in one country. Italian families were finding the Foundation almost entirely through that Italian PDF. Their daily clicks from Google halved, from 1.5 to 0.7, in a year when French and German clicks roughly doubled.

This is the honest reason our impressions per day fell 14% while clicks rose 21%. We lost a lot of listings. The ones we kept were far better placed. That is a good trade, but it is a trade, and it should have been a decision rather than a discovery.

**What we would do now:** before switching over, export every URL the old site ranks for, sorted by clicks. Anything in the top 50 gets a redirect or a replacement, and someone signs off on whatever is being retired. A content inventory is not glamorous. It is the cheapest thing on this list and it recovers the most.

## The three questions to settle before you replatform

1. **What is the one action that means this worked?** Not a proxy. The thing the organisation actually needs a person to do.
2. **Where does the "before" number live, and can you log in?** If the answer is "the old analytics", have someone open it and screenshot a report. Today, not at launch. "It exists" and "we can reach it" are different answers.
3. **What does the old site earn that the new one will not inherit?** Sorted by clicks, with a named owner for each row.

None of this is sophisticated. All of it has to happen before the build, which is exactly why it usually doesn't.

## Why we are telling you the awkward parts

Because they are the useful parts, and because a year of data is worth more than a launch announcement.

The relaunch did work. A family searching the words a geneticist just said to them now finds the Foundation on the first page of Google, in their own language, and can register in the same visit. A third of the Foundation's search presence is now in languages other than English. That happens about once every three days, in 24 countries.

But "it worked" is not a measurement. It took Search Console's backfill, a flat number we could easily have skipped past, and a content inventory we should have run a year earlier to know it with any confidence.

If you are planning a replatform, the most valuable hour you will spend on it is the one before the work starts, agreeing what would count as proof.

---

*Red Badger built the new nr2f1.org for the [NR2F1 Foundation](https://nr2f1.org), which supports families living with BBSOAS. The site runs on Next.js with Contentful, in seven languages.*

**Planning a replatform and not sure you could prove it worked?** [Get in touch] — we will happily spend that hour with you.
