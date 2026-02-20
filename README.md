# 🟢 WhatsApp Cloud API Cost Calculator

A modern, high-fidelity cost estimation tool for the WhatsApp Cloud API. This application helps businesses accurately calculate their potential messaging costs across different conversation categories and global regions using live exchange rates.

# Live Demo - https://whatsapp-cloud-api-cost-calculator.vercel.app <!-- Placeholder for actual screenshot if available -->

## ✨ Features

- **🎯 Precision Estimation**: 4-step interactive flow to calculate costs based on Country, Conversation Type, Template Category, and Customer Volume.
- **💱 Live Currencies**: Integrated live exchange rates to provide costs in both USD and local currencies (BDT, INR, GBP, EUR, etc.).
- **🧩 Smart Categories**: Handles all Meta conversation types:
  - **Marketing**: Outbound promotions.
  - **Utility**: Transactional updates.
  - **Authentication**: Secure OTPs.
  - **Service**: Customer-initiated support (including the **1,000 free conversation tier** logic).
- **🎨 Premium UI/UX**:
  - Glassmorphic design with subtle animations using `framer-motion`.
  - Custom Portal-based dropdowns to prevent Z-index and overflow clipping.
  - Fully responsive layout for Desktop and Mobile.
- **📚 Educational Content**: A detailed breakdown of Meta's 24-hour conversation window billing logic and rate comparison tables.
- **🔍 SEO Optimized**: Comprehensive metadata for search engines and social sharing.

## 🚀 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Hooks (useState, useMemo, useCallback)
- **Utilities**: `clsx`, `tailwind-merge`

## 🛠️ Local Development

### 1. Clone the repository
```bash
git clone https://github.com/fahim27/cloud_api_costing.git
cd cloud_api_costing
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📂 Project Structure

```text
├── app/                  # Next.js App Router (Layout & Pages)
├── components/           # Reusable UI Components
│   ├── Calculator.jsx    # The core pricing engine
│   ├── Hero.jsx          # Engaging intro section
│   └── Explanation.jsx   # Detailed billing guide
├── constants/            # Billing rates and country data
├── utils/                # Helper functions (Currency conversion, etc.)
└── public/               # Static assets
```

## 📈 How it Calculates

The calculator follows Meta's official conversation-based pricing model:
1.  **Window**: Opens a 24-hour window on the first message.
2.  **Category**: Billed once per category per window.
3.  **Country**: Rate is determined by the recipient's country code.
4.  **Free Tier**: Automatically deducts the first 1,000 Service (user-initiated) conversations each month.

---

Built with ❤️ for professional businesses scaling with WhatsApp Cloud API.
