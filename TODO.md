# Think India – MANIT Chapter: Data Accuracy & Action Items (TODO)

This document tracks items from the presentation slides and data files that require chapter confirmation or high-resolution replacement assets.

---

## 1. Content & Historical Date Accuracy Confirmations

- [ ] **Paris Olympics Year**:
  - *Slide Observation*: The slide text reads *"Paris 2023"*.
  - *Website Status*: Displayed as **Paris Olympics 2024** to reflect the official Olympic Games timeline.
  - *Action*: Confirm this is preferred for all references.

- [ ] **Bharat Buzz View Metrics**:
  - *Slide Observation*: Slide 10 ("Why Think India") states **2.5M+ views**, while Slide 4/9 states **200K+ views** for the 3.0 edition.
  - *Website Status*: 2.5M+ is highlighted as the aggregate series metric in "Why Us", and 200K+ is attributed specifically to the Bharat Buzz 3.0 edition.
  - *Action*: Confirm whether the aggregate view count has surpassed 2.5M+ recently.

- [ ] **Cleanliness Drive Date**:
  - *Slide Observation*: Poster reads `01.10.26, 4:30 PM` under "Swachhata Hi Seva 2026", while Gandhi Jayanti is formally celebrated on October 2.
  - *Website Status*: Kept as `1 October 2026, 4:30 PM` as indicated on the poster.
  - *Action*: Confirm if the date should be displayed as 1 October or 2 October.

- [ ] **Missing Event Years**:
  - **Innofest 2.0**: Poster shows `18 Oct, 3 PM` without a year specified.
  - **Innofest 3.0**: Poster shows speakers and topics without year.
  - **Indiglam 2.0**: Poster states `7–9 February` without year.
  - *Action*: Provide the correct calendar years (e.g., 2023, 2024) to display in `src/data/events.js`.

- [ ] **Guest Names & Designations to Verify**:
  - **Dr. Himanshu Rai**: Slide 11 lists Dr. Rai with the designation *"Co-founder of AgriGator, an agricultural logistics startup"*, which appears to be copied from Mr. Udit Sangwan's card. (Dr. Himanshu Rai is widely recognized as Director of IIM Indore).
  - **Mrs. Zakia / Zarika Soman**: Slide 13 lists *"Mrs. Zarika Soman"*. BMMA co-founder is typically spelled *"Zakia Soman"*.
  - **Laxita Sandilya & Parmjeet Kumar**: Confirm sport/medal details in the Paralympics engagement section.

- [ ] **Social Media Follower & Engagement Counts**:
  - The collaborator follower counts (e.g., `Upsc.desire: 419K`, `iamsimratsahota: 75.4K`, `official handle: 7,828 followers`) reflect the snapshot when the slides were compiled in early 2024.
  - *Action*: Update with latest Instagram statistics in `src/data/buzz.js` and `src/data/stats.js` as desired.

---

## 2. High-Resolution Assets & Photography Needed

While all 26 event posters, speaker portraits, and buzz graphics have been cleanly cropped from the presentation slides and converted to `.webp`, replacing them with original uncompressed assets will improve visual crispness:

- [ ] `src/assets/events/cleanliness-drive.webp` (original poster graphic)
- [ ] `src/assets/events/aws-workshop.webp` (original banner / poster)
- [ ] `src/assets/events/block-printing.webp` (high-res workshop photograph)
- [ ] `src/assets/events/freedom-wall.webp` (high-res canvas / wall photo)
- [ ] `src/assets/events/voting-campaign.webp` (ECI voter awareness poster)
- [ ] `src/assets/events/pottery-workshop.webp` (original poster/photos)
- [ ] `src/assets/events/innofest-2.webp` and `innofest-3.webp` (original banners)
- [ ] `src/assets/events/indiglam-2.webp` and `swarndeep.webp` (original graphics)
- [ ] `src/assets/buzz/eci-certificate.webp` (high-res scan of ECI Certificate of Appreciation)
- [ ] Guest headshots (original uncompressed portrait files for the 10 speakers)

---

## 3. Social Handles & Links

- [x] Instagram: Linked to `https://instagram.com/thinkindia.manit`
- [ ] Official Email: Currently configured as `thinkindia@manit.ac.in` (confirm active mailbox).
- [ ] Official Handles for X (Twitter), LinkedIn, YouTube (commented out in `src/components/Footer.jsx` until provided).
