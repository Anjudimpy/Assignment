# Dabang Sales Dashboard

A React application implementing the **Dabang Sales Dashboard** UI design (Part 1) and a **Users data table** with API integration (Part 2).

## Project Setup

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Anjudimpy/Assignment.git
cd Test

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Features Implemented

### Part 1: Dashboard UI

- **Sidebar navigation** with Dabang branding, menu items, and Pro upgrade card
- **Top navigation bar** with search, language selector, notifications, and user profile
- **Today's Sales** summary cards with dummy metrics (Total Sales, Orders, Products Sold, New Customers)
- **Visitor Insights** — multi-line chart (Loyal, New, Unique Customers)
- **Total Revenue** — grouped bar chart (Online vs Offline Sales)
- **Customer Satisfaction** — area chart (Last Month vs This Month)
- **Target vs Reality** — grouped bar chart
- **Top Products** — table with popularity progress bars and sales badges
- **Sales Mapping by Country** — stylized world map visualization
- **Volume vs Service Level** — bar chart

All dashboard data uses local dummy data defined in `src/data/dummyData.js`.

### Part 2: API Integration & Data Table

Accessible via the **Users** link in the sidebar (`/users`).

- Fetches user data from [JSONPlaceholder Users API](https://jsonplaceholder.typicode.com/users)
- Displays columns: **Name**, **Email**, **Company Name**, **City**
- **Search** by name or email
- **Sort** by name (A–Z / Z–A toggle)
- **Filter** by city (dropdown populated from API data)
- **Loading state** with spinner
- **Error state** with retry option

## Tech Stack

- **React** (functional components)
- **Vite** — build tool
- **Tailwind CSS** — styling
- **Recharts** — chart components
- **React Router** — client-side routing
- **Lucide React** — icons
- **Fetch API** — data fetching

## Assumptions & Decisions

1. **Pixel-perfect accuracy** was not strictly pursued; layout, sections, and visual hierarchy closely follow the Figma design reference.
2. **Dummy data** is used for all dashboard charts and metrics (Part 1), as specified.
3. The **Users table** (Part 2) is placed on a separate `/users` route, linked from the sidebar, to keep the dashboard UI faithful to the design while meeting API integration requirements.
4. Other sidebar links (Leaderboard, Order, Products, etc.) render placeholder "Coming Soon" pages.
5. The world map is a **simplified SVG illustration** with colored regions rather than a full geographic map library, to keep dependencies minimal while matching the design intent.
6. **Tailwind CSS v4** with the Vite plugin was chosen for rapid, utility-first styling consistent with the design system colors.

## Project Structure

```
src/
├── components/
│   ├── dashboard/       # Part 1 dashboard cards and charts
│   ├── layout/          # Sidebar, TopNav, Layout wrapper
│   └── users/           # Part 2 Users table
├── data/
│   └── dummyData.js     # Static dashboard data
├── App.jsx              # Routes
├── main.jsx             # Entry point
└── index.css            # Global styles & Tailwind
```
