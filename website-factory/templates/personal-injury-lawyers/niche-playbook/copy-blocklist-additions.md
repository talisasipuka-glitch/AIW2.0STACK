<!-- niche-playbook v1 -->
# Niche-specific AI-vocab additions: Personal Injury Lawyers

These bans are derived from the niche's top-of-pool sites
(morgan-and-morgan, dolman-law-group, pm-law-firm), which consistently use
plain, direct, number-led language. Lower-scoring or directory-style sites
lean on generic legal-marketing phrasing that the niche's real practitioners
avoid. Replace each banned phrase with a specific claim, a number, or a
plain-language statement.

---

## Banned words (single tokens)

```
litigious
adversarial
remuneration
exculpatory
indemnification
```

## Banned phrases (multi-word)

```
navigate the complexities
experienced legal counsel
vigorous representation
complex legal landscape
zealous advocacy
your trusted advocate
fighting for justice on your behalf
we are here for you every step of the way
ambulance chaser
settlement mill (when used to describe the client's own firm, only acceptable
when explicitly positioning AGAINST settlement mills, per "not a settlement
mill" framing)
your day in court
let us handle the legal heavy lifting
peace of mind during difficult times
holistic legal solutions
comprehensive legal services
```

## Niche-specific imagery references to avoid in copy

```
gavel
scales of justice
courtroom drama
"lady justice"
law books stacked on a desk
```

These are imagery cues, not just text bans. If generated copy describes or
implies these images (e.g. "picture the scales of justice tipping in your
favor"), it fails the niche copy-lint pass the same as a banned phrase.

---

## Notes

- "Settlement mill" is the one banned phrase with a conditional exception:
  the niche's trust signal #4 (`05-trust-signals.md`) explicitly POSITIONS
  firms AGAINST being a settlement mill ("we are not a settlement mill", "we
  litigate, we don't just settle fast"). This usage is preferred-phrase, not
  banned. The ban applies only when the phrase is used to describe or imply
  the client's OWN firm IS one, or when used as filler without the
  risk-removal framing.
- "Ambulance chaser" is banned outright, it is a self-deprecating or
  defensive framing that no top-of-pool site uses, and introducing it (even
  to deny it) puts a negative frame in the visitor's mind.
- Replace "we are here for you every step of the way" with a specific
  communication commitment (see `copywriting.md` Section 1, principle 1):
  "When you call, you talk to the attorney handling your case."

## Validation

```bash
python3 tools/copy-lint.py --check \
  --include-niche personal-injury-lawyers \
  clients/[Client Name]/Pipeline Data/copy/copy-deck.md
```
