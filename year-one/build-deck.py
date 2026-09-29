from pptx import Presentation
from pptx.util import Inches as In, Pt, Emu
from pptx.dml.color import RGBColor as C
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

# --- brand palette (from website/src/styles/_colors.scss) ---
NAVY9=C(0x0D,0x1F,0x36); NAVY8=C(0x17,0x37,0x5F); NAVY7=C(0x21,0x4E,0x88); NAVY6=C(0x2B,0x66,0xB1)
NAVY2=C(0xBA,0xD1,0xEE); NAVY1=C(0xE3,0xEC,0xF8); NAVY05=C(0xF3,0xF7,0xFC)
TURQ7=C(0x00,0x81,0x9C); TURQ6=C(0x00,0xAB,0xCF); TURQ5=C(0x03,0xD3,0xFF); TURQ1=C(0xCF,0xF7,0xFF)
CORAL6=C(0xD7,0x00,0x1C); CORAL4=C(0xFF,0x3E,0x57); CORAL1=C(0xFF,0xD7,0xDC)
G7=C(0x40,0x40,0x40); G6=C(0x52,0x52,0x52); G5=C(0x73,0x73,0x73); G4=C(0xA3,0xA3,0xA3)
G3=C(0xD4,0xD4,0xD4); G2=C(0xE5,0xE5,0xE5); G1=C(0xF5,0xF5,0xF5); WHITE=C(0xFF,0xFF,0xFF)
FONT='Arial'
W, H = 13.333, 7.5
M = 0.72                      # side margin
CW = W - 2*M                  # content width

prs = Presentation(); prs.slide_width=In(W); prs.slide_height=In(H)
BLANK = prs.slide_layouts[6]

def sl(bg=WHITE):
    s = prs.slides.add_slide(BLANK)
    s.background.fill.solid(); s.background.fill.fore_color.rgb = bg
    return s

def tb(s, x, y, w, h, align=PP_ALIGN.LEFT, anchor=MSO_ANCHOR.TOP):
    t = s.shapes.add_textbox(In(x), In(y), In(w), In(h)); tf = t.text_frame
    tf.word_wrap = True; tf.vertical_anchor = anchor
    tf.margin_left=tf.margin_right=tf.margin_top=tf.margin_bottom=0
    p = tf.paragraphs[0]; p.alignment = align
    return tf

def run(p, text, size=14, color=G6, bold=False, italic=False, font=FONT):
    r = p.add_run(); r.text = text
    r.font.size=Pt(size); r.font.color.rgb=color; r.font.bold=bold; r.font.italic=italic; r.font.name=font
    return r

def para(tf, text='', size=14, color=G6, bold=False, italic=False, space_before=0, space_after=6, align=PP_ALIGN.LEFT, line=None):
    p = tf.paragraphs[0] if (len(tf.paragraphs)==1 and not tf.paragraphs[0].runs and not tf.paragraphs[0].text) else tf.add_paragraph()
    p.alignment=align; p.space_before=Pt(space_before); p.space_after=Pt(space_after)
    if line: p.line_spacing=line
    if text: run(p, text, size, color, bold, italic)
    return p

def rect(s, x, y, w, h, fill, line=None, shape=MSO_SHAPE.RECTANGLE):
    sh = s.shapes.add_shape(shape, In(x), In(y), In(w), In(h))
    sh.fill.solid(); sh.fill.fore_color.rgb = fill
    if line: sh.line.color.rgb = line; sh.line.width=Pt(1)
    else: sh.line.fill.background()
    sh.shadow.inherit = False
    sh.text_frame.text=''
    return sh

def notes(s, text):
    s.notes_slide.notes_text_frame.text = text

def header(s, kicker, title, sub=None):
    """standard content-slide header. returns y of next free row"""
    rect(s, 0, 0, W, 0.13, TURQ5)
    tf = tb(s, M, 0.52, CW, 0.3)
    run(tf.paragraphs[0], kicker.upper(), 11, TURQ7, True)
    tf = tb(s, M, 0.86, CW, 0.8)
    run(tf.paragraphs[0], title, 30, NAVY9, True)
    y = 1.72
    if sub:
        tf = tb(s, M, y, CW, 0.4)
        run(tf.paragraphs[0], sub, 15, G5)
        y += 0.52
    return y

def footer(s, left, n=None):
    tf = tb(s, M, H-0.52, CW-1.0, 0.3)
    run(tf.paragraphs[0], left, 9, G4)
    if n is not None:
        tf = tb(s, W-M-0.7, H-0.52, 0.7, 0.3, align=PP_ALIGN.RIGHT)
        run(tf.paragraphs[0], str(n), 9, G4)

def stats(s, y, items, color=NAVY7, h=1.25):
    """items: [(value, label)] evenly spread"""
    n=len(items); gap=0.22; w=(CW-gap*(n-1))/n
    for i,(v,lab) in enumerate(items):
        x=M+i*(w+gap)
        rect(s, x, y, w, h, NAVY05)
        tf=tb(s, x+0.18, y+0.16, w-0.36, 0.55)
        run(tf.paragraphs[0], v, 30, color, True)
        tf=tb(s, x+0.18, y+0.74, w-0.36, 0.45)
        run(tf.paragraphs[0], lab, 10.5, G5)
    return y+h+0.3

def compare(s, y, rows, before_label='Old site', after_label='New site', maxw=None, h=0.44, gap=0.2, labelw=3.05):
    """rows: [(label, before_text, after_text, before_frac, after_frac)] frac 0..1 of bar area"""
    barx = M+labelw; barw = CW-labelw
    tf=tb(s, M, y, labelw, 0.3); run(tf.paragraphs[0],'PER DAY',9,G4,True)
    tf=tb(s, barx, y, barw/2, 0.3); run(tf.paragraphs[0], before_label.upper(),9,G4,True)
    tf=tb(s, barx+barw/2, y, barw/2, 0.3); run(tf.paragraphs[0], after_label.upper(),9,TURQ7,True)
    y+=0.32
    for lab, bt, at, bf, af in rows:
        tf=tb(s, M, y+0.04, labelw-0.15, h, anchor=MSO_ANCHOR.MIDDLE)
        run(tf.paragraphs[0], lab, 12, G7)
        half=barw/2-0.25
        bw=max(0.06, half*bf); aw=max(0.06, half*af)
        rect(s, barx, y+0.09, bw, 0.26, G3)
        tf=tb(s, barx+bw+0.08, y+0.04, 1.4, h, anchor=MSO_ANCHOR.MIDDLE)
        run(tf.paragraphs[0], bt, 11.5, G5, True)
        rect(s, barx+barw/2, y+0.09, aw, 0.26, TURQ6)
        tf=tb(s, barx+barw/2+aw+0.08, y+0.04, 1.4, h, anchor=MSO_ANCHOR.MIDDLE)
        run(tf.paragraphs[0], at, 11.5, NAVY8, True)
        y+=h+gap*0.55
    return y+0.1

def bullets(s, x, y, w, items, size=13.5, color=G6, gap=9, bullet_color=TURQ6, title=None):
    if title:
        tf=tb(s,x,y,w,0.3); run(tf.paragraphs[0], title.upper(), 9.5, G4, True); y+=0.34
    tf = tb(s, x, y, w, 4.2)
    first=True
    for it in items:
        if isinstance(it, tuple): txt, bold = it
        else: txt, bold = it, False
        p = tf.paragraphs[0] if first else tf.add_paragraph()
        first=False
        p.space_after=Pt(gap); p.line_spacing=1.15
        run(p, '● ', 8, bullet_color, True)
        run(p, txt, size, color, bold)
    return y

def table(s, x, y, w, headers, rows, colw=None, fs=11.5, rh=0.34, head_fill=NAVY8, zebra=True, bold_last=True):
    nrows=len(rows)+1; ncols=len(headers)
    shp = s.shapes.add_table(nrows, ncols, In(x), In(y), In(w), In(rh*nrows))
    tbl = shp.table
    tbl.first_row=True; tbl.horz_banding=False
    if colw:
        tot=sum(colw)
        for i,cw in enumerate(colw): tbl.columns[i].width=Emu(int(In(w)*cw/tot))
    for i,htxt in enumerate(headers):
        c=tbl.cell(0,i); c.fill.solid(); c.fill.fore_color.rgb=head_fill
        c.margin_left=In(0.12); c.margin_right=In(0.08); c.margin_top=In(0.05); c.margin_bottom=In(0.05)
        c.vertical_anchor=MSO_ANCHOR.MIDDLE
        tf=c.text_frame; tf.word_wrap=True; p=tf.paragraphs[0]
        run(p, htxt, fs-0.5, WHITE, True)
        if i>0: p.alignment=PP_ALIGN.RIGHT
    for r,rowvals in enumerate(rows, start=1):
        for i,val in enumerate(rowvals):
            c=tbl.cell(r,i); c.fill.solid()
            c.fill.fore_color.rgb = (G1 if (zebra and r%2==0) else WHITE)
            c.margin_left=In(0.12); c.margin_right=In(0.08); c.margin_top=In(0.04); c.margin_bottom=In(0.04)
            c.vertical_anchor=MSO_ANCHOR.MIDDLE
            tf=c.text_frame; tf.word_wrap=True; p=tf.paragraphs[0]
            emph = bold_last and i==len(rowvals)-1
            run(p, str(val), fs, NAVY8 if emph else G7, emph)
            if i>0: p.alignment=PP_ALIGN.RIGHT
        tbl.rows[r].height=In(rh)
    tbl.rows[0].height=In(rh)
    return y + rh*nrows + 0.2

def callout(s, x, y, w, h, text, fill=NAVY05, bar=TURQ5, size=12.5, color=G7, bold_prefix=None):
    rect(s, x, y, w, h, fill)
    rect(s, x, y, 0.06, h, bar)
    tf=tb(s, x+0.3, y+0.16, w-0.55, h-0.3, anchor=MSO_ANCHOR.MIDDLE)
    p=tf.paragraphs[0]; p.line_spacing=1.2
    if bold_prefix: run(p, bold_prefix, size, NAVY8, True)
    run(p, text, size, color)
    return y+h+0.2

def section(num, title, sub, n):
    s = sl(NAVY9)
    rect(s, 0, 0, W, 0.13, TURQ5)
    tf = tb(s, M, 2.55, CW, 0.5)
    run(tf.paragraphs[0], f'{num}', 13, TURQ5, True)
    tf = tb(s, M, 3.0, CW*0.8, 1.0)
    run(tf.paragraphs[0], title, 46, WHITE, True)
    tf = tb(s, M, 4.25, CW*0.62, 0.8)
    p=tf.paragraphs[0]; p.line_spacing=1.25
    run(p, sub, 16, NAVY2)
    tf = tb(s, W-M-0.7, H-0.52, 0.7, 0.3, align=PP_ALIGN.RIGHT)
    run(tf.paragraphs[0], str(n), 9, NAVY6)
    return s

# =========================== SLIDES ===========================
# Copy rewritten to content-design principles: front-loaded headings that state the
# finding, plain-language glosses for every metric, argument moved to speaker notes.
n = 0

# --- 1 · title ---
n += 1
s = sl(NAVY9)
rect(s, 0, 0, W, 0.16, TURQ5)
rect(s, M, 1.95, 1.5, 0.055, TURQ5)
tf = tb(s, M, 2.25, CW*0.85, 1.6)
p = tf.paragraphs[0]; p.line_spacing = 1.02
run(p, 'One year of', 40, NAVY2)
p = tf.add_paragraph(); p.line_spacing = 1.02
run(p, 'nr2f1.org', 58, WHITE, True)
tf = tb(s, M, 4.35, CW*0.72, 0.6)
run(tf.paragraphs[0], 'What changed for families, supporters and researchers', 19, TURQ1)
tf = tb(s, M, 5.15, CW*0.7, 0.4)
run(tf.paragraphs[0], '21 September 2025 to 14 September 2026', 15, NAVY2)
tf = tb(s, M, H-0.95, CW, 0.3)
run(tf.paragraphs[0], 'NR2F1 Foundation  ·  Red Badger', 11, NAVY6)
notes(s, "A year ago we launched the new nr2f1.org. This is what the data says: what worked, "
          "what didn't, and what we would do next.\n\n"
          "Everything here comes from three places — Google Search Console, Google Analytics, "
          "and Givebutter, which is the Foundation's contact database.")

# --- 2 · what we were asked to build ---
n += 1
s = sl()
y = header(s, 'Background', 'What we were asked to build',
           'The NR2F1 Foundation supports families living with BBSOAS — a rare condition caused by a change in a single gene. '
           'It affects sight, movement and development. A few hundred families worldwide have a diagnosis.')
bullets(s, M, y, CW*0.47, [
    'Raise awareness of the Foundation',
    'Explain the NR2F1 gene and BBSOAS',
    'Give families resources they can use',
    'Help families join the patient registry',
    'Support clinicians, researchers and drug companies',
    'Publish the Foundation\'s own blog',
    'Make donating simple',
], title='The seven goals we were given')
bullets(s, M+CW*0.53, y, CW*0.47, [
    'Easy to keep up to date',
    'Accessible to everyone',
    'Works on any device',
    'Works in seven languages',
    'Easy for Google to read',
], title='And five things it had to be')
callout(s, M, 5.6, CW, 0.88,
        'a WordPress site of mostly English pages, whose four best-read items were PDF guides. '
        'Seven languages, a registration form and a measurable presence in Google are all new.',
        bold_prefix='What we replaced:  ')
footer(s, 'Source: project readme', n)
notes(s, "Two things to land.\n\n"
         "One: what BBSOAS actually is, because most of the numbers later only mean something if you "
         "know this affects a few hundred families in the world, not a few hundred thousand.\n\n"
         "Two: we were given seven goals and five constraints. Keep an eye on the last two constraints — "
         "seven languages and being readable by Google. They look like engineering hygiene. They turned out "
         "to produce the biggest measurable change for families.")

# --- 3 · personas (dedicated slide) ---
n += 1
s = sl()
y = header(s, 'Background', 'Who we built it for',
           'We ranked five groups by who mattered most at the time. Newly diagnosed parents came first.')
axis_y = y
tf = tb(s, M, axis_y, CW*0.5, 0.3)
run(tf.paragraphs[0], 'MOST VALUABLE TO REACH RIGHT NOW', 9, TURQ7, True)
tf = tb(s, M+CW*0.5, axis_y, CW*0.5, 0.3, align=PP_ALIGN.RIGHT)
run(tf.paragraphs[0], 'IMPORTANT, BUT LATER', 9, G4, True)
rect(s, M, axis_y+0.3, CW, 0.035, TURQ5)
rect(s, M+CW*0.62, axis_y+0.3, CW*0.38, 0.035, G3)

personas = [
    ('1st', 'Newly diagnosed parents', TURQ5,
     '"I have just been given this diagnosis. I need to understand it, so I can take the right steps for my child."',
     'Join the patient registry'),
    ('2nd', 'Families we already know', TURQ6,
     '"I need to keep up with the latest research and news, so I can find treatment for my child."',
     'Follow our news, and fundraise'),
    ('3rd', 'Supporters', NAVY2,
     '"I want to help people with BBSOAS. I need to know how."',
     'Give regularly, not just once'),
    ('3rd', 'Doctors', NAVY2,
     '"I have just diagnosed a patient. I need to understand the condition, so I can care for them well."',
     'Become a doctor we can recommend'),
    ('5th', 'Researchers', G3,
     '"I need to see what research is already under way, so I can take part."',
     'Use our data and our patient numbers'),
]
cy = axis_y + 0.55
gap = 0.16
cardw = (CW - gap*4)/5
for i, (rank, name, accent, quote, need) in enumerate(personas):
    x = M + i*(cardw+gap)
    rect(s, x, cy, cardw, 3.05, NAVY05)
    rect(s, x, cy, cardw, 0.08, accent)
    tf = tb(s, x+0.16, cy+0.26, cardw-0.32, 0.3)
    run(tf.paragraphs[0], rank, 9.5, G4, True)
    tf = tb(s, x+0.16, cy+0.56, cardw-0.32, 0.62)
    p = tf.paragraphs[0]; p.line_spacing = 1.05
    run(p, name, 14, NAVY9, True)
    tf = tb(s, x+0.16, cy+1.24, cardw-0.32, 1.25)
    p = tf.paragraphs[0]; p.line_spacing = 1.18
    run(p, quote, 10.5, G6, italic=True)
    rect(s, x+0.16, cy+2.5, cardw-0.32, 0.015, G3)
    tf = tb(s, x+0.16, cy+2.62, cardw-0.32, 0.36)
    p = tf.paragraphs[0]; p.line_spacing = 1.1
    run(p, 'We need them to: ', 9.5, G5)
    run(p, need, 9.5, TURQ7, True)
footer(s, 'Source: discovery workshop with the Foundation. Every number in this deck belongs to one of these five people.', n)
notes(s, "This is the spine of the deck, so it is worth a minute.\n\n"
         "In discovery we ranked five groups by who was most valuable to reach right now. Newly diagnosed "
         "parents came first, and everything else followed from that. A parent who has just been handed "
         "this diagnosis usually finds us by searching the words the geneticist said — and their own "
         "neurologist often has not heard of the condition either.\n\n"
         "Note the bottom row: what the Foundation needs back from each group. Those are the things we can "
         "actually measure, and they are how we judge the year. Registrations for parents. Regular giving "
         "for supporters. Research participation for scientists.\n\n"
         "Doctors and supporters were ranked equal third. Researchers came last — not because they matter "
         "least, but because they were the least urgent in year one.")

# --- 4 · what we can compare ---
n += 1
s = sl()
y = header(s, 'Background', 'What we can compare, and what we cannot',
           'We cannot get into the old site\'s analytics. So "before and after" means something different depending on the source.')
table(s, M, y+0.1, CW, ['Where the data comes from', 'Before', 'After', 'Can we compare it?'],
      [['Google Search', 'Old site, 4 May to 20 Sep 2025', 'New site, 358 days',
        'Yes — same web address, measured by Google'],
       ['Family registrations', 'Sep 2024 to Sep 2025', 'Sep 2025 to Sep 2026',
        'Yes — same record, same database'],
       ['Donations', 'Contacts added the year before', 'Contacts added in year one',
        'Counts yes. Amounts are lifetime totals, so treat with care'],
       ['Website visits', 'Old analytics exist, but no one can log in', 'Year one only',
        'No — the baseline is there, we just cannot reach it']],
      colw=[2.7, 3.0, 2.4, 4.0], fs=11.5, rh=0.52, bold_last=False)
callout(s, M, y+2.9, CW, 0.9,
        'Google Search Console measures the web address, not the code, and its records reach back to May 2025. '
        'That gives us 140 days of the old site against 358 days of the new one. We compare them per day.',
        bold_prefix='Why Google Search is the honest comparison:  ')
footer(s, 'Pulled from the Google Analytics, Search Console and Givebutter APIs on 15–16 September 2026', n)
notes(s, "Say this once, clearly, and then we never have to hedge again.\n\n"
         "The old WordPress site was measured — someone set analytics up years ago — but the account "
         "is not ours and nobody still involved can get into it. So any claim about visits going up "
         "would be invented. I would rather say that now than be asked it in questions. If anyone here "
         "can find the login, we can go back and do this comparison properly.\n\n"
         "What we can compare properly is Google Search, because Search Console measures the domain and "
         "keeps 16 months of history. And family registrations, because it is the same field in the same "
         "database before and after.")

# --- SECTION A ---
n += 1
section('PART 1', 'Can families find us?', 'The first thing a newly diagnosed parent does is search.', n)
notes(prs.slides[-1], "Persona one. If a parent cannot find us in the hour after a diagnosis, nothing else in this deck matters.")

# --- 5 · a thousand people ---
n += 1
s = sl()
y = header(s, 'Part 1 · Can families find us?', '1,033 people used the site',
           'They came from 56 countries and read it in 25 languages.')
y = stats(s, y, [('1,033', 'people'), ('56', 'countries'), ('25', 'languages'),
                 ('3,375', 'visits'), ('71%', 'read it on a phone')])
y = bullets(s, M, y+0.05, CW*0.54, [
    'A few hundred families worldwide have this diagnosis. This is the community, plus the people around it',
    'Half of all visits come from Google, so the site brings its own audience',
    'People read 2.34 pages a visit and stayed 3m 22s',
], title='What that number means')
callout(s, M+CW*0.58, y-0.34, CW*0.42, 1.95,
        'small charity websites average 1.74 pages a visit. We beat that. But the typical small charity '
        'site gets around 7,200 people a year and we get 1,000. High quality, a seventh of the volume — '
        'that is the honest size of this community.',
        fill=G1, bar=NAVY6, size=11.5, bold_prefix='Compared with other charities:  ')
footer(s, 'Google Analytics · Benchmark: Wired Impact 2025, 130+ charity websites', n)
notes(s, "A thousand people sounds small until you remember how rare this is.\n\n"
         "On quality we are ahead of the typical small charity site. On volume we are a seventh of it. "
         "Both are true and I would say both — if we only said the first, someone would check.")

# --- 6 · page 2 to page 1 ---
n += 1
s = sl()
y = header(s, 'Part 1 · Can families find us?', 'We moved from page 2 of Google to page 1',
           'Google shows about 10 results a page. Being 15th means page two. Being 8th means page one.')
y = compare(s, y, [
    ('People clicking through', '15.2', '18.4', 15.2/19, 18.4/19),
    ('Clicks per 100 times seen', '3.1', '4.4', 3.1/5, 4.4/5),
    ('Where we appear in Google', '15th', '8th', 1.0, 7.6/15.3),
    ('Where we appear, on a phone', '11th', '4th', 1.0, 4.1/10.9),
], labelw=3.0)
tf = tb(s, M, y+0.02, CW*0.55, 1.35)
p = tf.paragraphs[0]; p.line_spacing = 1.2
run(p, 'Same web address, same searches, measured by Google itself. ', 13, G6)
run(p, 'On a phone we now appear fourth.', 13, NAVY8, True)
p = tf.add_paragraph(); p.space_before = Pt(8); p.line_spacing = 1.2
run(p, 'We are seen slightly less often than before, because we lost page-two listings nobody clicked. '
       'We are clicked 21% more. Fewer listings, better ones.', 12, G5)
callout(s, M+CW*0.58, y+0.02, CW*0.42, 1.55,
        'most websites get 1 to 2 clicks for every 100 times they appear, and low-profile sites get less than 1. '
        'We get 4.4 — and that rose during a year when AI answers cut everyone else\'s clicks.',
        fill=G1, bar=NAVY6, size=11.5, bold_prefix='Compared with the web:  ')
footer(s, 'Google Search Console · old site 140 days vs new site 358 days, measured per day · Benchmarks: Ahrefs 2026, Advanced Web Ranking 2026', n)
notes(s, "This is the one genuine before-and-after in the deck, so give it time.\n\n"
         "Average position 15th to 8th is page two to page one. On a phone, 11th to 4th — and phones are "
         "71% of our visitors, so that is the number that matters.\n\n"
         "Be fair about one thing: some of our high click rate is because people search our name. But it "
         "rose through a year when AI answers in Google were cutting clicks for everyone else.")

# --- 7 · condition not foundation ---
n += 1
s = sl()
y = header(s, 'Part 1 · Can families find us?', 'People search for the condition, not for the Foundation',
           'Most people who find us have never heard of us. They type the words a doctor has just said to them.')
rowsL = [('nr2f1 foundation', '739'), ('bbsoas', '736'), ('nr2f1', '599'),
         ('bbsoas syndrome', '287'), ('bosch boonstra schaaf optic atrophy syndrome', '244')]
rowsR = [('bbsoas symptoms', '40'), ('bbsoas life expectancy', '34'),
         ('syndrome de bosch boonstra schaaf', '15th → 2nd'), ('gendefekt nr2f1', 'new, now 1st'),
         ('síndrome de bosch boonstra schaaf', '12')]
tf = tb(s, M, y, CW*0.46, 0.3); run(tf.paragraphs[0], 'WHAT PEOPLE TYPED  ·  CLICKS IN A YEAR', 9.5, G4, True)
tf = tb(s, M+CW*0.52, y, CW*0.46, 0.3); run(tf.paragraphs[0], 'AND THE QUIETER SEARCHES, IN EVERY LANGUAGE', 9.5, G4, True)
yy = y+0.36
for i, (q, v) in enumerate(rowsL):
    rect(s, M, yy+i*0.52, CW*0.46, 0.44, G1 if i % 2 else NAVY05)
    tf = tb(s, M+0.16, yy+i*0.52+0.04, CW*0.33, 0.36, anchor=MSO_ANCHOR.MIDDLE); run(tf.paragraphs[0], q, 11.5, G7)
    tf = tb(s, M+CW*0.46-1.1, yy+i*0.52+0.04, 0.95, 0.36, align=PP_ALIGN.RIGHT, anchor=MSO_ANCHOR.MIDDLE)
    run(tf.paragraphs[0], v, 12.5, NAVY8, True)
for i, (q, v) in enumerate(rowsR):
    x = M+CW*0.52
    rect(s, x, yy+i*0.52, CW*0.46, 0.44, G1 if i % 2 else NAVY05)
    tf = tb(s, x+0.16, yy+i*0.52+0.04, CW*0.27, 0.36, anchor=MSO_ANCHOR.MIDDLE); run(tf.paragraphs[0], q, 11.5, G7)
    tf = tb(s, x+CW*0.46-1.75, yy+i*0.52+0.04, 1.6, 0.36, align=PP_ALIGN.RIGHT, anchor=MSO_ANCHOR.MIDDLE)
    run(tf.paragraphs[0], v, 11.5, TURQ7, True)
callout(s, M, 5.75, CW, 0.85,
        'Two thirds of clicks are the name of the condition, not the name of the Foundation. Searches for '
        '"bbsoas syndrome" went from one every four days to almost one a day. That is our first persona, '
        'on the evening of a diagnosis.')
footer(s, 'Google Search Console · clicks, 21 September 2025 to 14 September 2026', n)
notes(s, "This slide ties search back to the mission.\n\n"
         "Look at the right-hand column. 'bbsoas life expectancy' is somebody's worst evening. We are now "
         "the page that answers it, and we answer it in their language — the French and German searches at "
         "the bottom went from nowhere to first or second.")

# --- 8 · languages ---
n += 1
s = sl()
y = header(s, 'Part 1 · Can families find us?', 'A third of our search results are not in English',
           'We publish in seven languages. The story Google shows most often is in French.')
langs = [('English', '128,973'), ('French', '36,024'), ('German', '20,413'), ('Spanish', '13,457'),
         ('Chinese', '11,274'), ('Portuguese', '6,485'), ('Italian', '6,179')]
mx = 128973
tf = tb(s, M, y, CW*0.5, 0.3); run(tf.paragraphs[0], 'TIMES WE APPEARED IN GOOGLE, BY LANGUAGE', 9.5, G4, True)
yy = y+0.36
for i, (lg, v) in enumerate(langs):
    tf = tb(s, M, yy+i*0.42, 1.0, 0.34, anchor=MSO_ANCHOR.MIDDLE); run(tf.paragraphs[0], lg, 11, G7, True)
    wdt = max(0.08, (CW*0.36)*int(v.replace(',', ''))/mx)
    rect(s, M+1.05, yy+i*0.42+0.06, wdt, 0.22, TURQ6 if lg != 'English' else NAVY7)
    tf = tb(s, M+1.1+wdt, yy+i*0.42, 1.2, 0.34, anchor=MSO_ANCHOR.MIDDLE); run(tf.paragraphs[0], v, 10.5, G5)
x2 = M+CW*0.55
tf = tb(s, x2, y, CW*0.45, 0.3); run(tf.paragraphs[0], 'DAILY CLICKS FROM GOOGLE  ·  OLD SITE → NEW SITE', 9.5, G4, True)
cc = [('France', '0.7', '1.9', True), ('Germany', '0.75', '1.6', True), ('United Kingdom', '1.7', '2.8', True),
      ('United States', '6.2', '7.0', True), ('Italy', '1.5', '0.7', False)]
for i, (c, b, a, up) in enumerate(cc):
    yr = y+0.36+i*0.42
    tf = tb(s, x2, yr, 1.9, 0.34, anchor=MSO_ANCHOR.MIDDLE); run(tf.paragraphs[0], c, 11.5, G7)
    tf = tb(s, x2+1.9, yr, 0.6, 0.34, anchor=MSO_ANCHOR.MIDDLE); run(tf.paragraphs[0], b, 11.5, G4)
    tf = tb(s, x2+2.5, yr, 0.4, 0.34, anchor=MSO_ANCHOR.MIDDLE); run(tf.paragraphs[0], 'to', 10, G3)
    tf = tb(s, x2+2.9, yr, 0.7, 0.34, anchor=MSO_ANCHOR.MIDDLE); run(tf.paragraphs[0], a, 12.5, TURQ7 if up else CORAL6, True)
callout(s, M, 5.6, CW*0.62, 1.0,
        'French and German families get roughly twice as many results as they did. The French community '
        'now links to us from their own site.', size=12)
callout(s, M+CW*0.66, 5.6, CW*0.34, 1.0,
        'Italy halved. Its readers came from a PDF we no longer publish.',
        fill=CORAL1, bar=CORAL4, size=12, bold_prefix='One exception:  ')
footer(s, 'Google Search Console · language taken from the page address', n)
notes(s, "Translation was one of the five constraints, and it is the one that paid back hardest. A third of "
         "everything Google shows for us is not in English.\n\n"
         "The detail I like: the story Google shows most often is Aydn's, in French. A family in Lyon meets "
         "us before an English-speaking family does.\n\n"
         "And the exception, which we come back to later: Italy halved, because Italian readers were "
         "arriving at a PDF guide that did not survive the move.")

# --- 9 · where visits come from ---
n += 1
s = sl()
y = header(s, 'Part 1 · Can families find us?', 'Half of all visits come from Google',
           '"Direct" means someone typed the address in, or followed a link from an email, WhatsApp or Facebook.')
ch = [('Google and other search', '1,623', '48%', NAVY7), ('Direct', '1,307', '39%', TURQ6),
      ('Links from other sites', '290', '9%', NAVY2), ('Social media', '96', '3%', G3),
      ('AI chatbots', '12', 'under 1%', CORAL4)]
yy = y
for i, (name, v, pc, col) in enumerate(ch):
    wdt = max(0.1, (CW*0.36)*int(v.replace(',', ''))/1623)
    tf = tb(s, M, yy+i*0.62, 2.2, 0.4, anchor=MSO_ANCHOR.MIDDLE); run(tf.paragraphs[0], name, 12, G7)
    rect(s, M+2.25, yy+i*0.62+0.08, wdt, 0.26, col)
    tf = tb(s, M+2.33+wdt, yy+i*0.62, 1.8, 0.4, anchor=MSO_ANCHOR.MIDDLE)
    p = tf.paragraphs[0]; run(p, v+'  ', 12, NAVY8, True); run(p, pc, 11, G5)
x2 = M+CW*0.58
bullets(s, x2, y, CW*0.42, [
    'Givebutter, our donation platform — 223 visits. Donors come here to find out why they should care',
    'Global Genes, NORD, the NIH and EyeWiki — the rare disease world links to us',
    'nr2f1france.wordpress.com — the French community sends people our way',
    'ChatGPT, Gemini and Claude — a route that did not exist a year ago',
], title='WHO SENDS US PEOPLE', size=11.5)
callout(s, M, 5.9, CW, 0.8,
        'charity websites get 37 to 39% of their visits from search, and that share fell across the sector last year. '
        'Ours is 48%.',
        fill=G1, bar=NAVY6, size=12, bold_prefix='Compared with other charities:  ')
footer(s, 'Google Analytics · visits by channel and referring site', n)
notes(s, "Half our visits come from search, which means the site brings its own audience rather than "
         "depending on us pushing links out. Direct is the existing community.\n\n"
         "The last line is small but worth flagging: twelve visits from AI chatbots. That is nothing today. "
         "It is how a doctor will look this up in two years.")

# --- SECTION B ---
n += 1
section('PART 2', 'Do families register?', 'The registry is what makes research possible. Getting families into it is the Foundation\'s first ask.', n)
notes(prs.slides[-1], "Finding us is only half of it. The Foundation's first ask of a newly diagnosed parent is that they join the patient registry.")

# --- 10 · a family every three days ---
n += 1
s = sl()
y = header(s, 'Part 2 · Do families register?', 'A family registers every 3 days',
           'The patient registry is the Foundation\'s record of diagnosed families. Researchers need it to run studies.')
y = stats(s, y, [('127', 'families registered'), ('113', 'given a patient number'), ('24', 'countries'),
                 ('112 of 113', 'signed up on the website'), ('567', 'patients in the registry')], color=TURQ7)
y = bullets(s, M, y+0.1, CW*0.56, [
    'Of the 113 families given a patient number, 112 came through the form we built',
    'The registration page was read about 280 times across seven languages. Roughly half of those became a registration',
    'This is the first thing the Foundation needs from persona one, and it now happens on the site',
], title='WHAT HAPPENED')
callout(s, M+CW*0.60, y-0.34, CW*0.40, 1.6,
        'families registered from Denmark, Finland, Sweden, Poland, Colombia and Mexico for the first time, '
        'alongside the United States, the UK, Germany, Spain, Australia, France and Canada.', size=11.5,
        bold_prefix='Where they are:  ')
footer(s, 'Givebutter API, 3,428 contacts · counted by the date each family was added', n)
notes(s, "This is the heart of it. 127 families registered in year one — one every three days — and of the "
         "113 who were given a patient number, 112 came through the form on the website.\n\n"
         "That is the clearest line we have from 'we built a website' to 'the Foundation can do research'.")

# --- 11 · steady not bursts ---
n += 1
s = sl()
y = header(s, 'Part 2 · Do families register?', 'Registrations did not go up. They became steady.',
           'Roughly the same number of families as the year before — but arriving every month instead of in bursts.')
months_before = [9, 8, 3, 21, 7, 4, 31, 5, 10, 7, 13, 13]
months_after = [11, 10, 11, 7, 20, 11, 10, 11, 9, 9, 10, 10, 6]
mx = 31; chart_y = y+0.1; chart_h = 1.85; barw = 0.33; gapb = 0.075
tf = tb(s, M, chart_y-0.02, 4.4, 0.3); run(tf.paragraphs[0], 'FAMILIES REGISTERING EACH MONTH', 9.5, G4, True)
chart_y += 0.34
x = M
for i, v in enumerate(months_before):
    h = max(0.03, chart_h*v/mx)
    rect(s, x+i*(barw+gapb), chart_y+chart_h-h, barw, h, G3)
xb = x+len(months_before)*(barw+gapb)
rect(s, xb+0.03, chart_y-0.12, 0.022, chart_h+0.3, CORAL4)
tf = tb(s, xb-0.42, chart_y-0.42, 1.6, 0.25); run(tf.paragraphs[0], 'NEW SITE', 8.5, CORAL6, True)
xa = xb+0.14
for i, v in enumerate(months_after):
    h = max(0.03, chart_h*v/mx)
    rect(s, xa+i*(barw+gapb), chart_y+chart_h-h, barw, h, TURQ6)
tf = tb(s, x, chart_y+chart_h+0.08, 4.4, 0.3); run(tf.paragraphs[0], 'Sep 2024 to Sep 2025  ·  old site', 9.5, G5)
tf = tb(s, xa, chart_y+chart_h+0.08, 4.4, 0.3); run(tf.paragraphs[0], 'Sep 2025 to Sep 2026  ·  new site', 9.5, TURQ7, True)
tf = tb(s, x+2.3, chart_y-0.42, 2.4, 0.3); run(tf.paragraphs[0], 'two days in March: 24 families', 8.5, G5, True)
y2 = chart_y+chart_h+0.55
table(s, M, y2, CW*0.52, ['', 'Year before', 'Year one'],
      [['Families registered', '133', '127'],
       ['Most in a single two-day period', '24 (an event)', '3'],
       ['Months with fewer than 5', '3', '0']],
      colw=[3.2, 1.6, 1.4], fs=11.5, rh=0.36)
tf = tb(s, M+CW*0.57, y2, CW*0.43, 1.9)
p = tf.paragraphs[0]; p.line_spacing = 1.25
run(p, 'The website did not make more families register. ', 13, NAVY8, True)
run(p, 'That follows diagnoses, and a website does not diagnose anyone.', 13, NAVY8, True)
p = tf.add_paragraph(); p.space_before = Pt(9); p.line_spacing = 1.25
run(p, 'What changed is how they arrive. Before, registrations came in bursts around events — 18% of the '
       'whole year landed in two days in March. Now nine to eleven arrive every month, in seven languages.', 12.5, G6)
p = tf.add_paragraph(); p.space_before = Pt(9); p.line_spacing = 1.25
run(p, 'For the first time the registry does not depend on the events calendar.', 12.5, TURQ7, True)
footer(s, 'Givebutter API · families counted by the date they were added', n)
notes(s, "I want us to be the ones who say this, not the board.\n\n"
         "The number did not go up. 133 the year before, 127 in year one.\n\n"
         "What changed is the shape. Look at March 2025 — 24 families in two days, from one event. That was "
         "18% of the year. Take it away and the old baseline was thin and unpredictable.\n\n"
         "Now it is nine to eleven every single month. No empty months, no waiting for someone to organise a "
         "conference. That is something the Foundation can plan research around.")

# --- SECTION C ---
n += 1
section('PART 3', 'Do supporters give?', 'Two waves of generosity — and one number we did not move.', n)
notes(prs.slides[-1], "Persona three. Mostly friends and colleagues of families, not the families themselves.")

# --- 12 · 431 people donated ---
n += 1
s = sl()
y = header(s, 'Part 3 · Do supporters give?', '431 people donated in the first year',
           'They gave $88,000 between them. The middle donation was $55.')
y0 = y
mo = [('Sep', 0), ('Oct', 0), ('Nov', 0), ('Dec', 137), ('Jan', 0), ('Feb', 0), ('Mar', 48),
      ('Apr', 0), ('May', 64), ('Jun', 77), ('Jul', 0), ('Aug', 0), ('Sep', 0)]
mxd = 137; ch_h = 1.7; bw = 0.62; gp = 0.24
tf = tb(s, M, y0, 4.0, 0.3); run(tf.paragraphs[0], 'NEW DONORS EACH MONTH', 9.5, G4, True)
y0 += 0.34
for i, (mlab, v) in enumerate(mo):
    xx = M+i*(bw+gp)
    h = max(0.03, ch_h*v/mxd)
    rect(s, xx, y0+ch_h-h, bw, h, NAVY7 if v >= 60 else (TURQ6 if v > 0 else G2))
    if v:
        tf = tb(s, xx-0.1, y0+ch_h-h-0.3, bw+0.2, 0.28, align=PP_ALIGN.CENTER); run(tf.paragraphs[0], str(v), 10.5, NAVY8, True)
    tf = tb(s, xx-0.1, y0+ch_h+0.06, bw+0.2, 0.25, align=PP_ALIGN.CENTER); run(tf.paragraphs[0], mlab, 9, G5)
y = y0+ch_h+0.45
y = stats(s, y, [('431', 'people gave'), ('$88,000', 'raised'), ('$55', 'middle donation'),
                 ('15', 'gave $1,000 or more'), ('$20,000', 'largest single gift')], h=1.05)
tf = tb(s, M, y+0.02, CW*0.54, 1.0)
p = tf.paragraphs[0]; p.line_spacing = 1.2
run(p, 'December 2025: ', 12.5, NAVY8, True); run(p, '137 people, $20,000 — year-end giving in the US and UK.   ', 12.5, G6)
run(p, 'May and June 2026: ', 12.5, NAVY8, True); run(p, '141 people, $34,000, and 132 of them British.', 12.5, G6)
callout(s, M+CW*0.58, y+0.02, CW*0.42, 1.0,
        'charities take 37% of their online income in December. We took 23% then, and 38% in a British '
        'spring campaign. We depend on Christmas less than most.',
        fill=G1, bar=NAVY6, size=11.5, bold_prefix='Compared with other charities:  ')
footer(s, 'Givebutter API · people added between 21 September 2025 and 14 September 2026 · Benchmark: M+R Benchmarks 2026', n)
notes(s, "Two waves, not one: the December year-end push, and a British spring campaign that brought in 132 "
         "UK donors.\n\n"
         "Note what the website's job actually is here. Donations happen on Givebutter campaign pages, but "
         "Givebutter is the second biggest source of visits to our site. Donors come here to find out why "
         "they should give. The site does the persuading.\n\n"
         "One more thing: only four of the 431 donors are parents. Friends and colleagues raise money for "
         "families. That is exactly what the supporter persona describes.")

# --- 13 · only five ---
n += 1
s = sl()
y = header(s, 'Part 3 · Do supporters give?', 'Only 5 people set up a monthly donation',
           'Out of 431 people who gave. This is the one thing the persona work asked for that we did not deliver.')
rect(s, M, y+0.1, CW*0.40, 2.75, NAVY05)
tf = tb(s, M, y+0.35, CW*0.40, 1.7, align=PP_ALIGN.CENTER, anchor=MSO_ANCHOR.MIDDLE)
run(tf.paragraphs[0], '5', 112, CORAL6, True)
tf = tb(s, M, y+2.15, CW*0.40, 0.7, align=PP_ALIGN.CENTER)
p = tf.paragraphs[0]; p.line_spacing = 1.15
run(p, 'people give every month', 15, NAVY8, True)
bullets(s, M+CW*0.46, y+0.25, CW*0.54, [
    'The persona board asked for exactly this: donations the Foundation can count on month to month',
    'At small charities, a fifth of online income comes from monthly giving. Ours is about 1 in 80 donors',
    'The typical monthly gift is $24 to $27. The amount is not the barrier — finding the option is',
    '71% of our visitors are on a phone, and small charities convert only 4% of phone visitors who reach a donation page',
], title='WHY IT MATTERS', size=13)
callout(s, M+CW*0.46, y+2.35, CW*0.54, 0.7,
        'put monthly giving front and centre on the donate page, and design it for a phone first.',
        fill=CORAL1, bar=CORAL4, size=13, bold_prefix='What to do:  ')
footer(s, 'Givebutter API · Benchmarks: M+R Benchmarks 2026, 180 charities', n)
notes(s, "I want one slide in this deck that is just a number we did not move.\n\n"
         "Five people out of 431. The persona work said plainly that the Foundation needs income it can "
         "count on, and we did not deliver it.\n\n"
         "The sector gets a fifth of its online income this way, and the average monthly gift is 25 dollars. "
         "So this is not a big ask, it is an invisible one. That is a design problem, and it should be top "
         "of next year's list.")

# --- SECTION D ---
n += 1
section('PART 4', 'Can professionals rely on us?', 'Doctors who have never met this condition, and researchers who need the numbers.', n)
notes(prs.slides[-1], "Personas four and five. Lower priority in year one, but this is where the long-term value sits.")

# --- 14 · doctors ---
n += 1
s = sl()
y = header(s, 'Part 4 · Can professionals rely on us?', 'Doctors can now find us in the first few results',
           'The persona asked for one thing: be in the top five results. On a phone we are fourth.')
y = stats(s, y, [('8th', 'where we appear in Google'), ('4th', 'where we appear on a phone'),
                 ('1st–2nd', 'on the main medical terms'), ('1,034', 'pages Google can show')], h=1.2)
bullets(s, M, y+0.05, CW*0.52, [
    'Global Genes, NORD, the NIH rare disease service, EyeWiki and CRID all link to us',
    'Bing and DuckDuckGo bring 4% of visits — these are hospital computers',
    'Findable in French, German, Spanish, Italian, Portuguese and Chinese',
], title='WHERE THEY COME FROM')
callout(s, M+CW*0.56, y+0.05, CW*0.44, 1.5,
        'we still have no page written for doctors, and the medical network sign-up from the persona board '
        'has not been built.',
        fill=CORAL1, bar=CORAL4, size=12.5, bold_prefix='What we have not done:  ')
footer(s, 'Google Search Console and Google Analytics', n)
notes(s, "The persona need was specific and testable: a doctor should find us in the top five. We clear that "
         "for the main terms, and on a phone we are fourth.\n\n"
         "The gap is content, not findability. We rank, but we have written nothing specifically for a "
         "clinician. That is cheap to fix.")

# --- 15 · researchers ---
n += 1
s = sl()
y = header(s, 'Part 4 · Can professionals rely on us?', 'Our registry is 12 times larger than the biggest published study',
           'The researcher persona could not find this information before. Now every page of it is in Google.')
rows = [('Publications', '8,430'), ('Research', '7,385'), ('Get involved in BBSOAS research', '5,151'),
        ('Resources for researchers', '3,834'), ('How many patients we know of', '3,228')]
tf = tb(s, M, y, CW*0.5, 0.3); run(tf.paragraphs[0], 'TIMES EACH RESEARCH PAGE APPEARED IN GOOGLE', 9.5, G4, True)
yy = y+0.36
for i, (p_, v) in enumerate(rows):
    rect(s, M, yy+i*0.5, CW*0.48, 0.42, G1 if i % 2 else NAVY05)
    tf = tb(s, M+0.16, yy+i*0.5+0.03, CW*0.33, 0.36, anchor=MSO_ANCHOR.MIDDLE); run(tf.paragraphs[0], p_, 11.5, G7)
    tf = tb(s, M+CW*0.48-1.2, yy+i*0.5+0.03, 1.05, 0.36, align=PP_ALIGN.RIGHT, anchor=MSO_ANCHOR.MIDDLE)
    run(tf.paragraphs[0], v, 12, NAVY8, True)
x2 = M+CW*0.54
rect(s, x2, y, CW*0.46, 2.55, NAVY9)
tf = tb(s, x2+0.3, y+0.3, CW*0.4, 0.45)
run(tf.paragraphs[0], 'THE SENTENCE TO SAY TO A RESEARCHER', 9.5, TURQ5, True)
tf = tb(s, x2+0.3, y+0.75, CW*0.4, 1.6)
p = tf.paragraphs[0]; p.line_spacing = 1.25
run(p, 'The largest published study of this condition followed ', 13, NAVY2)
run(p, '47 people', 13, WHITE, True)
run(p, ' — and it recruited partly through this Foundation.', 13, NAVY2)
p = tf.add_paragraph(); p.space_before = Pt(10); p.line_spacing = 1.25
run(p, 'Our registry holds ', 13, NAVY2)
run(p, '567 patients and 688 families.', 13, TURQ5, True)
p = tf.add_paragraph(); p.space_before = Pt(6)
run(p, 'About twelve times the size.', 13, WHITE, True)
bullets(s, M, 5.15, CW, [
    'Three researchers and clinicians signed up this year, including Heidelberg University and the University of Verona',
    'Our grant stories rank in German. People search for the researcher we fund by name, 51 times a year',
    'The persona asked us to show a population large enough for trials. That is now a page anyone can find',
], size=12.5)
footer(s, 'Google Search Console · Givebutter API · Study: Valentin and others, Clinical Genetics, 2025', n)
notes(s, "The researcher persona's complaint was 'I cannot find this on the website'. Now the biorepository, "
         "the publications, and the patient count are all pages that turn up in Google.\n\n"
         "Here is the line worth saying to a drug company: the biggest published study of this condition has "
         "47 people in it, and it recruited partly through this Foundation. Our registry has 567. That is the "
         "argument for running a trial, and now it is a web page.")

# --- SECTION E ---
n += 1
section('PART 5', 'What next?', 'What we got wrong, and the seven things to fix.', n)
notes(prs.slides[-1], "Two slides. The honest one first, because it makes the asks that follow credible.")

# --- 16 · what we got wrong ---
n += 1
s = sl()
y = header(s, 'Part 5 · What next?', 'What we got wrong')
items = [('Visits halved from May 2026',
          'From 226 people a month to about 110, and it stayed there. Google Search shows the same drop, so it is real, not a broken tag. Publishing less often is the likely cause.'),
         ('We dropped the old site\'s second best content',
          'Four PDF guides — "How to read your genetic report" in Italian, Spanish, French and German — were 18% of all clicks on the old site. They now lead nowhere. That is Italy\'s whole decline.'),
         ('Families register, then stop',
          'None of the 113 new families has a genetic report or health survey recorded yet. All of the earlier families do. Either the paperwork is lagging or people are dropping out, and we need to know which.'),
         ('The sign-up form loses information',
          'We now record a child\'s date of birth 8 times a year, down from 74. Country is missing for 29% of new families, up from 9%, because the address is dropped when the postcode does not match.'),
         ('Five monthly donors, and no page for doctors', '')]
yy = y
for i, (t, d) in enumerate(items):
    rect(s, M, yy, 0.055, 0.78, CORAL4)
    tf = tb(s, M+0.24, yy+0.01, CW*0.33, 0.7)
    p = tf.paragraphs[0]; p.line_spacing = 1.1
    run(p, t, 13, NAVY9, True)
    if d:
        tf = tb(s, M+CW*0.37, yy, CW*0.63, 0.78)
        p = tf.paragraphs[0]; p.line_spacing = 1.15
        run(p, d, 11.5, G6)
    yy += 0.86
footer(s, 'Google Analytics, Google Search Console and Givebutter', n)
notes(s, "Five things we would want a new team to know.\n\n"
         "The May drop is the one I would watch. It shows up in both Google Analytics and Search Console, so "
         "it is genuine, and it lines up with us publishing less.\n\n"
         "The PDFs are the most fixable: about 530 clicks every 140 days that we simply stopped serving.\n\n"
         "And the form quietly losing date of birth and country is a small code change with a real cost to "
         "research.")

# --- 17 · seven things ---
n += 1
s = sl()
y = header(s, 'Part 5 · What next?', 'Seven things to fix next', 'In rough order of what they give back for the effort.')
left = [('Bring back the genetic report guides', 'Publish them as proper pages, and redirect the six old addresses. About 530 clicks every 140 days, and Italy recovers.'),
        ('Make monthly giving visible', 'Front and centre on the donate page, designed for a phone. Aim for 5 to 50.'),
        ('Fix the sign-up form', 'Ask for the child\'s date of birth. Stop dropping the address without telling anyone.'),
        ('Write something for doctors', 'A page for clinicians, and the medical network sign-up.')]
right = [('Keep publishing in French and German', 'The translated blog does better per page than the English one.'),
         ('Find out what happened in May', 'Mark campaigns on the chart, and agree how often we publish.'),
         ('Close the loop on registrations', 'Chase genetic reports and surveys from the 113 new families.'),
         ('Change the Givebutter key', 'It is currently sent to the browser. Move it to the server.')]


def col(x, entries, start):
    yy = y
    for i, (t, d) in enumerate(entries):
        rect(s, x, yy, 0.42, 0.42, NAVY05)
        tf = tb(s, x, yy+0.02, 0.42, 0.38, align=PP_ALIGN.CENTER, anchor=MSO_ANCHOR.MIDDLE)
        run(tf.paragraphs[0], str(start+i), 15, TURQ7, True)
        tf = tb(s, x+0.58, yy-0.02, CW*0.40, 0.4)
        run(tf.paragraphs[0], t, 13.5, NAVY9, True)
        tf = tb(s, x+0.58, yy+0.36, CW*0.40, 0.62)
        p = tf.paragraphs[0]; p.line_spacing = 1.15
        run(p, d, 11.5, G6)
        yy += 1.1


col(M, left, 1); col(M+CW*0.52, right, 5)
footer(s, 'Detail in year-one-story.md', n)
notes(s, "Seven asks, in rough order of return for the effort.\n\n"
         "The first two are the ones I would defend hardest. The redirects are pure recovered value — that "
         "content already earned its audience. And monthly giving is the only line in this deck where we are "
         "far below everyone else.")

# --- 18 · close ---
n += 1
s = sl(NAVY9)
rect(s, 0, 0, W, 0.16, TURQ5)
tf = tb(s, M, 1.15, CW, 0.4)
run(tf.paragraphs[0], 'AGAINST THE SEVEN GOALS WE WERE GIVEN', 11, TURQ5, True)
checks = [('Raise awareness', True), ('Explain the gene and BBSOAS', True), ('Resources for families', True),
          ('Help families join the registry', True), ('Support professionals', False),
          ('The Foundation\'s own blog', True), ('Make donating simple', True)]
yy = 1.72
for i, (t, done) in enumerate(checks):
    x = M if i < 4 else M+CW*0.52
    row = i if i < 4 else i-4
    tf = tb(s, x, yy+row*0.44, CW*0.46, 0.38)
    p = tf.paragraphs[0]
    run(p, 'Done   ' if done else 'Part done   ', 12, TURQ5 if done else CORAL4, True)
    run(p, t, 14, WHITE if done else NAVY2)
tf = tb(s, M+CW*0.52, yy+3*0.44, CW*0.46, 0.38)
p = tf.paragraphs[0]
run(p, 'Done   ', 12, TURQ5, True); run(p, 'All five build constraints', 14, WHITE)
rect(s, M, 3.85, 1.5, 0.05, TURQ5)
tf = tb(s, M, 4.2, CW*0.84, 1.8)
p = tf.paragraphs[0]; p.line_spacing = 1.22
run(p, 'The old site told people what BBSOAS is.', 24, NAVY2)
p = tf.add_paragraph(); p.line_spacing = 1.22
run(p, 'The new one is where a family, anywhere, in their own language, finds the diagnosis on page one '
       'and registers in the same visit.', 24, WHITE, True)
p = tf.add_paragraph(); p.space_before = Pt(14); p.line_spacing = 1.22
run(p, 'A year in, that happens every three days.', 24, TURQ5, True)
tf = tb(s, M, H-0.8, CW, 0.3)
run(tf.paragraphs[0], 'nr2f1.org  ·  21 September 2025 to 14 September 2026', 11, NAVY6)
notes(s, "Six of the seven goals met, one part met — supporting professionals, where we rank but have not "
         "written for them.\n\n"
         "All five build constraints met. And the two that looked like engineering hygiene, translation and "
         "being readable by Google, are the two that changed the most for families.\n\n"
         "Then read the line and stop talking.")

# --- 19 · appendix ---
n += 1
s = sl()
y = header(s, 'Appendix', 'Where these numbers come from')
table(s, M, y, CW, ['Source', 'What it tells us', 'Period', 'Worth knowing'],
      [['Google Search Console', 'Clicks, how often we appear, where we rank, what people search',
        '4 May 2025 to 14 Sep 2026', 'The only true old-versus-new comparison. Records reach back 16 months'],
       ['Google Analytics', 'Visits, countries, languages, how people arrive',
        '21 Sep 2025 to 14 Sep 2026', 'Set up 27 Aug 2025. The old site\'s data exists but we have no access'],
       ['Givebutter (3,428 contacts)', 'Families, patient numbers, donors',
        'All time', 'Donation totals are lifetime per person, not per year'],
       ['Sector benchmarks', 'How we compare with other charities',
        '2024 to 2026', '21 sources checked, 25 claims verified, 5 rejected and left out'],
       ['Published research', 'The size of the largest BBSOAS study',
        'February 2025', 'Valentin and others, Clinical Genetics, doi 10.1111/cge.14731']],
      colw=[2.7, 3.4, 2.3, 3.5], fs=10.5, rh=0.56, bold_last=False)
footer(s, 'Full analysis in year-one-story.md · benchmarks in benchmarks.md · raw data in the api folder', n)
notes(s, "Leave this up during questions.")

out = '/private/tmp/claude-502/-Users-pataruco-dev-website/f0f10d27-2ed8-4f8e-adbb-f286e5565420/scratchpad/deck/nr2f1-year-one.pptx'
prs.save(out)
import os
print('saved', out, os.path.getsize(out), 'bytes,', len(prs.slides._sldIdLst), 'slides')
