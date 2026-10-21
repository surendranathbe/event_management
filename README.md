# Event For You — Premium Event Management & Luxury Wedding Planners

> **“Your Vision. Our Celebration.”**  
> *PLAN • DECORATE • CELEBRATE*

A multi-page, luxury event management website built in **React.js + Vite**, designed with a rich royal palette of **burgundy, maroon, champagne gold, ivory, rose pink, and emerald green**.

---

## 📸 Visual Identity & Design Fidelity

The website matches the primary visual reference image:
- **Top Announcement Bar**: Burgundy ribbon with `"CELEBRATE LIFE'S BIGGEST MOMENTS"`, ornamental floral dividers, and social links (Facebook, Instagram, YouTube, Pinterest).
- **Luxury Header & Logo**: Intricate 24k gold floral mandala emblem with `"EVENT FOR YOU"`, tagline `"PLAN • DECORATE • CELEBRATE"`, quick contact info (`hello@eventforyou.example`, `+91 90000 12345`), and gold pill button `"PLAN YOUR EVENT →"`.
- **Cinematic Hero Stage**: Opulent Indian grand wedding stage with royal mandap florals, crystal chandeliers, warm candle glow, dual action CTAs (*"Explore Our Services"* & *"Get a Free Consultation"*), and calligraphy script flourish (*"Making Moments Unforgettable"*).
- **Four Feature Highlights Ribbon**:
  1. *Thoughtful Planning* — Your ideas, our expertise.
  2. *Beautiful Décor* — Spaces that tell your story.
  3. *Seamless Coordination* — Stress-free celebrations.
  4. *Memorable Moments* — Experiences for a lifetime.
- **"OUR EVENTS / CELEBRATE EVERY CHAPTER"**:
  6 core category cards on the homepage with glowing rounded corners and interactive arrow circles:
  - Weddings & Receptions
  - Engagements
  - Haldi & Mehendi
  - Birthdays
  - Baby Showers
  - Corporate Events
- **Deep Burgundy Stats Bar**:
  - `500+` Events Planned
  - `100%` Client Satisfaction
  - `10+` Years of Experience
  - `50+` Corporate Clients
  - Calligraphy flourish: *"Let's Create Something Beautiful Together"* with `"GET IN TOUCH →"` button.

---

## 🏛️ Comprehensive Multi-Page Architecture

1. **Home (`/`)**: Complete showcase honoring the design mockup, followed by Bespoke Services, Signature 4-Step Process, Portfolio preview, Testimonial Carousel, FAQs, and Consultation CTA.
2. **About Us (`/about`)**: Includes the exact brand introduction required by the brief:
   > *“At Event For You, we believe every celebration deserves to be extraordinary. From elegant weddings and vibrant traditional ceremonies to joyful birthdays and professional corporate events, we bring your ideas to life through creative planning, beautiful décor, and seamless coordination.”*
3. **Events (`/events`)**: All 12 event categories with category filtering, guest capacities, vibes, and detail modal with direct inquiry button:
   - Weddings and Receptions
   - Engagements
   - Haldi and Mehendi
   - Birthday Parties
   - Baby Showers
   - Naming Ceremonies (Barasala)
   - Housewarming Ceremonies (Griha Pravesh)
   - Anniversary Celebrations
   - Sangeet and Pre-Wedding Events
   - Corporate Events & Summits
   - Private Parties & Soirées
   - Traditional Family Functions
4. **Services (`/services`)**: All 12 dedicated event management services:
   - Complete Event Planning and Coordination
   - Wedding and Stage Decoration
   - Floral Arrangements and Theme Decoration
   - Photography and Videography
   - DJ, Music, and Entertainment
   - Sound Systems and Lighting
   - Catering and Hospitality
   - Venue Selection and Management
   - Invitations and Customized Gifts
   - Bridal Entry and Special Event Arrangements
   - Corporate Event Planning
   - Guest Accommodation and Transportation Coordination
5. **Portfolio & Gallery (`/gallery`)**: High-res image gallery with category filter tabs and interactive lightbox modal (with image counter, captions, tags, and keyboard arrow navigation).
6. **Contact & Inquiries (`/contact`)**:
   - Client-side validated multi-field inquiry form: Full Name, Mobile, Email, Category, Preferred Date, Location, Guest Count, Budget Range, Required Services (checkboxes), and Special Requests.
   - Interactive celebratory confetti burst on validation.
   - Transparent demo notice informing users that no server database is connected.
   - Direct WhatsApp forward button pre-filling the inquiry details.
   - Direct clickable phone, email, and studio location cards.

---

## ⚙️ Configurable Data Files

To update contact information, phone numbers, email addresses, or images without editing JSX code:
- **`src/data/siteConfig.js`**: Brand names, phone numbers, email, WhatsApp number, studio address, social URLs, process steps, and metrics.
- **`src/data/events.js`**: All 12 event categories, descriptions, images, and highlights.
- **`src/data/services.js`**: All 12 services, feature checklists, and deliverables.
- **`src/data/gallery.js`**: Portfolio images, categories, locations, and tags.
- **`src/data/testimonials.js`**: Sample client testimonials (clearly labeled as demo content).
- **`src/data/faqs.js`**: Frequently asked questions.

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start Vite Development Server
npm run dev

# Build for Production
npm run build
```
