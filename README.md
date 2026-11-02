# NiyatBook — Universal Professional Services Marketplace

**Product Name:** NiyatBook  
**Tagline:** Discover. Connect. Book. Manage.  
**Initial Market:** Gujarat, India  
**Version:** 1.0 (Frontend Prototype / Launch-ready UI)

---

## What is NiyatBook?

NiyatBook is a multi-category professional services marketplace that allows:

- **Individuals (Customers)** to discover, compare and book appointments with professionals.
- **Professionals** to manage their profile, services, calendar and appointment requests.
- **Admins** to oversee the platform.

### Supported Categories
- Healthcare & Wellness (Doctors, Dentists, Physiotherapists, Yoga, etc.)
- Legal Services (Advocates, Legal Consultants)
- Finance & Accounting (CAs, Tax Consultants)
- Design & Creative (Architects, Designers, Photographers)
- Personal Care & Lifestyle
- Education & Career
- Business & Property
- Animal Care

---

## How to Run (Ready to Launch)

1. Open the folder.
2. Double-click **`index.html`** or open it in any modern browser (Chrome / Edge / Firefox recommended).
3. No server required for this prototype version — everything runs in the browser using localStorage.

### Recommended Flow for Testing

1. Open `index.html` → Netflix-style “Who’s visiting?” screen.
2. **Register as Professional** → Add services.
3. **Register as Individual** (or use guest view) → Search → Book appointment.
4. Login as the Professional → Confirm / manage the booking.
5. Check Admin panel for overview.

### Demo Professional Login
- Email: `priya.sharma@example.com`
- Password: `demo123`

---

## Features Included

### Customer Portal
- Dashboard with stats & category browsing
- Advanced search & filters (category, city, name)
- Professional profiles with services & pricing
- Appointment booking with date/time slots
- My Bookings (status tracking)
- Profile management

### Professional Portal
- Dashboard with pending/confirmed stats
- Add & manage services (duration, price, mode, buffer)
- Appointment management (Confirm / Reject / Complete / Cancel)
- Profile view

### Admin
- Overview stats
- List of professionals & recent appointments

### System
- Role-based portals (Individual / Professional / Admin)
- Local data persistence
- Sample seeded professionals from Gujarat cities
- Responsive dark Netflix-inspired UI
- Gujarati font support

---

## Technical Notes (Important for Real Launch)

This version is a **complete frontend prototype** with simulated backend using `localStorage`.

For production launch you will need to:

1. Replace localStorage with a real backend (recommended: **Supabase** free tier or Firebase).
2. Add proper authentication (JWT / Auth providers).
3. Implement real calendar availability engine.
4. Add online payments (Razorpay / Stripe).
5. Add document verification workflow.
6. Deploy on Vercel / Netlify / custom domain.

The current code structure is clean and ready for this upgrade.

---

## File Structure

```
niyatbook/
├── index.html                 ← Netflix-style portal selector
├── register-customer.html
├── register-professional.html
├── login-customer.html
├── login-professional.html
├── css/styles.css
├── js/storage.js              ← Core data & auth logic
├── customer/
│   ├── dashboard.html
│   ├── search.html
│   ├── professional.html      ← Profile + Booking
│   ├── bookings.html
│   └── profile.html
├── professional/
│   ├── dashboard.html
│   ├── services.html
│   ├── bookings.html
│   └── profile.html
├── admin/
│   └── dashboard.html
└── README.md
```

---

## Next Steps Recommendation

1. Test all flows thoroughly.
2. Collect feedback from 5–10 real professionals in Jamnagar / Gujarat.
3. Connect Supabase for real database + auth.
4. Add Razorpay for payments.
5. Launch soft beta in one city (Jamnagar / Rajkot / Ahmedabad).

---

**Built for Bhargavsinh Sisodiya / Devdamanprabhu**  
NiyatBook © 2026
