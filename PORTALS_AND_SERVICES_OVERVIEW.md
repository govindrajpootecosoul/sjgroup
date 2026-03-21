# Worklytics HRMS & Asset Platform — Portals & Services Overview

**Document purpose:** Board presentation — overview of all portals and services offered under the Worklytics HRMS & Asset ecosystem.

---

## 1. Platform at a Glance

The platform is **multi-tenant** and supports companies such as **Ecosoul Home** and **Thrive**. Users log in once and choose a portal from the **Select Portal** screen. Access to each portal is controlled per user (e.g. via `portals` or `portalAccess`). Company-scoped portals (HRMS, Asset Tracker, Finance) use a company context so data is isolated per tenant.

---

## 2. All Portals Summary

| Portal | Audience | Description |
|--------|----------|-------------|
| **HRMS** | HR / Admin | Human resources, employees, attendance, leaves, recruitment, expenses, reports |
| **Employee Portal** | Employees | Self-service: check-in/out, attendance, requests, org view, reports |
| **Asset Tracker** | Admin / Operations | Track and manage company assets, assignments, locations, categories |
| **Finance (Organisation Tools)** | Finance / Admin | Financial operations, dashboard, invoice processing |
| **Query Tracker** | Support / Operations | Track queries, support tickets, customer interactions; reports (Excel, PDF, CSV) |
| **Admin Portal** | Super Admin | User management, portal configuration, visitors, schedule, payments, messages |
| **Project Tracker** | External link | Projects, tasks, deadlines (opens external URL) |
| **DataHive** | Data / Analytics | Data sources, analytics, and reports (integrated route) |
| **Demand / Panel** | Planning | Demand planning, panel management, resource allocation (external URL) |

---

## 3. HRMS Portal

**Purpose:** Manage human resources, employee data, attendance, leaves, recruitment, and expenses in one place.

### 3.1 Services & Features

- **Dashboard**  
  Company-scoped overview and key metrics.

- **Employees**  
  - List all employees (company-scoped).  
  - Filter by search (name, employee ID, email), department, status.  
  - View employee details, joining date, designation, location, biometric ID.

- **Attendance**  
  - Daily attendance view by date.  
  - Check-in/check-out times, present/absent, late marking.  
  - Department filter.  
  - **Attendance stats:** total employees, present, absent, late, WFH, on leave.

- **Leaves**  
  - Leave list and management.  
  - **Leave overview:** stats and utilization.  
  - **Leave policy:** view and update leave policy.

- **Attendance Requests (Approvals)**  
  - List attendance correction/regularization requests.  
  - Approve / Reject / Update / Delete requests.  
  - Create new attendance requests (e.g. on behalf of employee).  
  - Request stats for reporting.

- **Recruitment**  
  - **Analytics:** recruitment funnel and metrics.  
  - **Candidates:** list, add, edit, delete; bulk upload.  
  - **Hiring:** hiring pipeline view.  
  - **Onboarding:** onboarding status and tracking.  
  - **Scheduled interviews:** list and manage interviews (date, interviewer, status).  
  - **Recruiters:** CRUD for recruiter names (e.g. Priyanka, Charu, Megha, Harshita, Deepali).

- **Expenses**  
  - Overview, management, approvals.  
  - Expenses, advances, expense advances.  
  - Claims & policies.

- **Reports**  
  Central place for HR reports.

- **Organisation Chart**  
  View company structure.

- **Candidate Onboarding**  
  Per-candidate onboarding flow (`/candidate-onboarding/[candidateId]`).

### 3.2 Technical Notes

- Backend: `worklytics_HRMS_backend/hrms-portal/routes/index.js`.  
- Company required for all company-scoped APIs (`company` query or `x-company` header).  
- Data stored in company-specific or default HRMS DB; employee check-ins from Employee Portal DB.

---

## 4. Employee Portal

**Purpose:** Employee self-service — view HR information and perform day-to-day actions without switching companies.

### 4.1 Services & Features

- **Dashboard**  
  - Quick stats: leave balance, upcoming shift, pending requests, last payout.  
  - Attendance trend (e.g. last 7 days).  
  - Announcements, request history, assigned assets, learning journeys, kudos, community highlights.

- **Attendance**  
  - Check-in / Check-out.  
  - Today’s status and last 7 days summary.  
  - Check-in history.

- **Requests**  
  - Leave balances by type (Casual, Sick, Earned, WFH, Comp-off, LOP).  
  - Recent requests (leave, WFH, expense).  
  - **Attendance request:** submit correction/regularization (e.g. forgot to check in/out); HR approves via HRMS.

- **My Organisation**  
  - Org structure: departments, CXO, directors, managers, leads (default/stored org data).

- **Reports**  
  - Attendance history, expense submissions, leave & request log; export (e.g. CSV, PDF).

### 4.2 Technical Notes

- Backend: `worklytics_HRMS_backend/employee-portal/routes/index.js`.  
- Company from request for DB routing; employee identified by `employeeId`.  
- Collections: `employee_checkins`, `portal_dashboard`, `portal_attendance`, `portal_requests`, `portal_org`, `portal_reports`, attendance-request documents.

---

## 5. Asset Tracker Portal

**Purpose:** Track and manage company assets, assignments, maintenance, and utilization.

### 5.1 Services & Features

- **Dashboard**  
  Overview of assets and usage (company-scoped).

- **Assets**  
  - List all assets.  
  - Asset detail view (by ID).  
  - (Backend placeholders for full CRUD; frontend supports dashboard, list, detail.)

- **Settings**  
  - **Employees:** link to asset assignments.  
  - **Locations:** manage asset locations.  
  - **Categories:** manage asset categories.

### 5.2 Technical Notes

- Backend: `worklytics_HRMS_backend/asset-tracker-portal/routes/index.js`.  
- Routes: `GET /assets`, `GET /assets/:id` (implementations can be extended).  
- Company-scoped via `/asset-tracker/[companyId]/...` in frontend.

---

## 6. Finance Portal (Organisation Tools)

**Purpose:** Financial operations, dashboards, and business management utilities.

### 6.1 Services & Features

- **Dashboard**  
  Finance overview (company-scoped); endpoint ready for real data.

- **Invoice processing**  
  - `POST /invoices/process` for processing invoices (to be implemented as needed).

### 6.2 Technical Notes

- Backend: `worklytics_HRMS_backend/finance-portal/routes/index.js`.  
- Uses SQL pool (`config/database`); can be extended for more finance workflows.

---

## 7. Query Tracker Portal

**Purpose:** Track and manage customer queries, support tickets, and customer interactions in one place.

### 7.1 Services & Features

- **Auth**  
  - Login, register, get current user (`/auth/me`).

- **Queries**  
  - List queries, get by ID, create, update, delete (with auth).

- **Users**  
  - List users, get by ID, update, delete (admin).

- **Reports**  
  - By report type: view, export to **Excel**, **PDF**, **CSV**.

### 7.2 Technical Notes

- Backend: `worklytics_HRMS_backend/query-tracker-portal/routes/` (auth, queries, users, reports).  
- Separate auth and role checks (e.g. admin for user management).  
- Frontend: dashboard, queries, reports, settings.

---

## 8. Admin Portal

**Purpose:** Super-admin only. Manage users, portal access, and organisation-level settings.

### 8.1 Services & Features

- **Dashboard**  
  - Space overview (e.g. coworking, shared, private).  
  - Recent activities (bookings, check-ins, profile updates).  
  - High-level stats.

- **Users**  
  - User list and management.  
  - Assign portals (e.g. HRMS, Asset Tracker, Finance, Employee Portal, Query Tracker, etc.) via multi-select.  
  - Activate/deactivate users.

- **Portals**  
  - Configure which portals exist and how they are presented (uses `portalList.json`, `portalConfig.json`).

- **Visitors**  
  - Visitor management (e.g. check-in/visits).

- **Schedule**  
  - Scheduling (e.g. space or resources).

- **Payments**  
  - Payment-related views/actions.

- **Message**  
  - Messaging/notifications.

- **Help**  
  - Help/support content.

### 8.2 Technical Notes

- Only users with role `superadmin` see the Admin Portal entry on Select Portal.  
- Frontend: `worklytics_HRMS_frontend/src/app/admin-portal/` (dashboard, users, portals, visitors, schedule, payments, message, help).

---

## 9. External / Integrated Portals

- **Project Tracker**  
  - Description: Track projects, tasks, and deadlines.  
  - Access: Opens external URL (e.g. `https://project-tracker.thrivebrands.in/auth/signin`).

- **Demand / Panel**  
  - Description: Demand planning, panel management, resource allocation.  
  - Access: Opens external URL (e.g. `https://cp.thrivebrands-hrms.com/auth`).

- **DataHive**  
  - Description: Data sources, analytics, and reports.  
  - Access: Internal route `/datahive/[companyId]/dashboard` (can be wired to backend later).

---

## 10. Access & Multi-Tenancy

- **Login**  
  Single login; company can be inferred from email domain (e.g. `@thrivebrands.ai` → Thrive, `@ecosoulhome.com` → Ecosoul Home).

- **Select Portal**  
  After login, user sees only portals they are allowed (from `user.portals` or `user.portalAccess`).  
  Company-scoped portals (HRMS, Asset Tracker, Finance, DataHive) redirect to `/[portal]/[companyId]/...`.

- **Employee Portal**  
  No company in URL; company is taken from session/context so employees see only their own company’s data.

- **Data isolation**  
  HRMS, Employee, and company-specific DBs ensure tenant data is separated.

---

## 11. One-Page Summary for Board

| Portal | Main services |
|--------|----------------|
| **HRMS** | Employees, attendance, leaves, leave policy, attendance approvals, recruitment (candidates, hiring, onboarding, interviews, recruiters), expenses (overview, approvals, advances, claims), reports, organisation chart |
| **Employee** | Dashboard, check-in/out, attendance, attendance requests, leave/request view, my organisation, reports |
| **Asset Tracker** | Dashboard, assets list/detail, settings (employees, locations, categories) |
| **Finance** | Dashboard, invoice processing |
| **Query Tracker** | Auth, queries CRUD, user management (admin), reports (Excel/PDF/CSV) |
| **Admin** | Dashboard, users & portal access, portal config, visitors, schedule, payments, message, help |
| **External** | Project Tracker, Demand/Panel (external URLs); DataHive (internal route) |

---

*This document is intended for board presentation and reflects the current structure of the Worklytics HRMS & Asset platform (frontend and backend).*


**Shreejiva theme color pallet to design system**
* Logo
* Website
* Dashboards
* Social posts
* Pitch decks

---

# 🎯 SJ Tech – Unified Color System (Final Brand Palette)

## 🔵 1. Core Brand Colors (Primary Identity)

| Role                 | Color           | Hex       | Usage                              |
| -------------------- | --------------- | --------- | ---------------------------------- |
| **Primary**          | Deep Space Blue | `#012436` | Main brand, headers, dark sections |
| **CTA**              | Pumpkin Spice   | `#F96900` | Buttons, highlights, actions       |
| **Secondary**        | Powder Blue     | `#9EB3C2` | Sections, UI elements              |
| **Accent (Premium)** | Rich Mahogany   | `#3B0D11` | Luxury touch, special sections     |
| **Base Background**  | White Smoke     | `#F2F4F3` | Main background                    |

---

# 🧠 2. Extended UI Palette (VERY IMPORTANT)

You’ll need shades for real-world usage 👇

## Deep Space Blue Variants

* Darker: `#001A29` (hover / depth)
* Light: `#0A3A52` (cards / gradients)

## Pumpkin Spice Variants

* Hover: `#E65D00`
* Soft: `#FF8A33` (icons / subtle highlights)

## Powder Blue Variants

* Light BG: `#D6E1E8`
* Border: `#C3D1DB`

## Neutral System (for text & UI)

* Heading Text: `#012436`
* Body Text: `#4A5A66`
* Light Text: `#7A8A96`
* Border: `#E5E7EB`
* White: `#FFFFFF`

---

# 🎨 3. Gradient System (For Premium Feel)

Use gradients to make everything look **modern SaaS + AI-level premium**

### Primary Gradient

```
#012436 → #0A3A52
```

👉 Hero sections, banners, dashboards

### CTA Gradient

```
#F96900 → #FF8A33
```

👉 Buttons, highlights

### Premium Gradient

```
#3B0D11 → #012436
```

👉 Pricing / enterprise sections

---

# 🧩 4. Ready-to-Use Design Rules

## 🔘 Buttons

### Primary Button

* Background: `#F96900`
* Text: `#FFFFFF`
* Hover: `#E65D00`

### Secondary Button

* Border: `#012436`
* Text: `#012436`
* Hover BG: `#9EB3C2`

---

## 🧱 Cards (Dashboards / UI)

* Background: `#FFFFFF`
* Border: `#E5E7EB`
* Title: `#012436`
* Icon: `#012436`
* Hover: slight shadow + `#D6E1E8`

---

## 📊 Dashboard Theme (Important for your business)

* Background: `#F2F4F3`
* Top Bar: `#012436`
* Charts:

  * Primary Line: `#F96900`
  * Secondary: `#012436`
  * Neutral: `#9EB3C2`

---

# 📱 5. Social Media Creative Theme (VERY USEFUL)

## Layout Formula

### Background Options:

1. Deep Space Blue (premium posts)
2. White Smoke (clean posts)
3. Gradient Blue (hero posts)

---

## Text Hierarchy:

* Headline → White / Deep Blue
* Subtext → Powder Blue / Grey
* CTA → Pumpkin Spice

---

## Example Styling:

### Post Type 1 (Dark Premium)

* BG: `#012436`
* Heading: White
* Accent words: `#F96900`

### Post Type 2 (Clean SaaS)

* BG: `#F2F4F3`
* Cards: White
* Icons: `#012436`

---

# 🧬 6. Logo Color Strategy

Use ONLY these combinations:

### Option 1 (Primary Logo)

* Icon: `#F96900`
* Text: `#012436`

### Option 2 (Dark Mode Logo)

* Background: `#012436`
* Text: White
* Accent: `#F96900`

### Option 3 (Premium Version)

* Text: White
* Accent line: `#3B0D11`

---

# ⚖️ 7. Golden Ratio (Stick to this always)

* 60% → White Smoke
* 25% → Deep Space Blue
* 10% → Powder Blue
* 4% → Pumpkin Spice
* 1% → Rich Mahogany

👉 This is what keeps your brand looking **premium instead of cluttered**

---

# 🚀 8. One-Line Brand Visual Identity

If someone asks how your brand should look:

> “Clean SaaS UI (white), strong tech authority (deep blue), with sharp action highlights (orange).”

---

# 🔥 9. Bonus: Canva Setup (Do this once)

Create a **Brand Kit in Canva**:

* Add all hex codes
* Set:

  * Heading Font → Bold modern (like Montserrat / Poppins)
  * Body Font → Clean (Inter / Open Sans)

---

If you want next step 🔥
I can design:

* Full **SJ Tech logo concepts**
* 5–10 **ready-to-use Canva templates**
* Your **website UI screens (hero, pricing, dashboard look)**

Just tell me what you want next 👍
