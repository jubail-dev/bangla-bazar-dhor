<div align="center">

🛒 বাজার দর | BazarDor
প্রয়োজনীয় পণ্যের দাম এক নজরে
BazarDor is a Bengali-first market price web application that helps users explore everyday grocery prices, compare price movements, browse product categories, and view market-wise price information — all in one place.
<p>
  <a href="https://bangla-bazar-dhor.vercel.app/"><strong>🌐 Live Demo</strong></a>
  &nbsp; · &nbsp;
  <a href="https://github.com/jubail-dev/bangla-bazar-dhor"><strong>💻 GitHub Repository</strong></a>
</p>

<p>
  <img src="https://img.shields.io/badge/Next.js-16.4.0-000000?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.3-149ECA?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Better_Auth-MongoDB-47A248?logo=mongodb&logoColor=white" alt="Better Auth and MongoDB" />
  <img src="https://img.shields.io/badge/Deployment-Vercel-000000?logo=vercel" alt="Vercel" />
</p>

</div>

📖 Project Overview
বাজার দর (BazarDor) হলো বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের দাম সহজে দেখার জন্য তৈরি একটি responsive web application। ব্যবহারকারীরা চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও অন্যান্য পণ্যের দাম এবং দামের পরিবর্তন এক জায়গায় দেখতে পারেন। Category অনুযায়ী পণ্য খোঁজা, দামের ভিত্তিতে সাজানো এবং পণ্যের বিস্তারিত তথ্য দেখার সুবিধাও রয়েছে।
The project is built with Next.js App Router, Tailwind CSS, Better Auth, and MongoDB. Its Bengali-first interface is designed to remain usable on mobile, tablet, and desktop screens.
দ্রষ্টব্য: প্রদর্শিত দাম API-তে থাকা তথ্যের ওপর নির্ভরশীল এবং বাজারের প্রকৃত দামের সঙ্গে পার্থক্য হতে পারে। কেনাকাটার আগে স্থানীয় বাজারে দাম যাচাই করুন।

✨ Key Features
Feature	Description
📊 Market Price Overview	পণ্যের নাম, একক, আজকের দাম এবং দামের পরিবর্তন এক নজরে দেখুন।
📈 Price Movers	দাম বেড়েছে এবং দাম কমেছে — এমন পণ্যের আলাদা section।
🧺 Product & Category Browsing	সব পণ্য দেখুন, category অনুযায়ী filter করুন এবং product details-এ যান।
↕️ Price Sorting	ডিফল্ট, কম দাম থেকে বেশি দাম এবং বেশি দাম থেকে কম দাম অনুযায়ী পণ্য সাজান।
🔐 Authentication	Better Auth-এর মাধ্যমে email/password, Google ও GitHub sign-in flow।
🗄️ MongoDB Integration	Better Auth user, account এবং session data সংরক্ষণের জন্য MongoDB adapter।
👤 Profile Management	Profile দেখা এবং ব্যবহারকারীর নাম update করার সুবিধা।
🔔 Toast Feedback	Authentication ও form action-এর success/error feedback।
⏳ Loading & Empty States	Data load হওয়ার সময় loading UI এবং ফলাফল না থাকলে উপযুক্ত message।
📱 Responsive Design	Mobile, tablet ও desktop-এর জন্য adaptable layout।
🚫 Friendly Not Found Page	Unknown বা invalid route-এর জন্য homepage-এ ফেরার সুবিধা।


🧰 Tech Stack
Technology	Purpose
Next.js 16 — App Router	Application framework, routing এবং rendering
React 19	Reusable UI components
TypeScript	Type-safe application development
Tailwind CSS 4	Utility-first styling ও responsive layouts
DaisyUI 5	Tailwind CSS-based UI utilities and components
HeroUI	UI components and toast provider
Better Auth	Email/password এবং social authentication
MongoDB	Authentication data storage through the Better Auth MongoDB adapter
Sonner	Toast notifications
React Icons & Lucide React	Icons
react-marquee-text	Scrolling market-price ticker
Hind Siliguri	Bengali-friendly typography via next/font/google
BazarDor API	Product and category data
Vercel	Hosting and deployment


🧭 Main Pages & Routes
Route	Purpose
/	Hero banner, price ticker, rising/falling prices এবং all products
/category/[slug]	Category-based product listing and price sorting
/product/[slug]	Product overview, price summary এবং market-wise prices; login required
/signin	Email/password, Google ও GitHub sign-in
/signup	নতুন account তৈরি
/profile	User profile এবং profile update-এর entry point
/profile/update	User information update form
not-found.tsx	Unknown বা invalid route-এর not-found UI


Route-এর নাম project-এর বর্তমান implementation-এর সঙ্গে মিলিয়ে রাখুন, যদি কোনো path পরিবর্তন করা হয়।

🔌 Product API
Primary base URL
https://api.api-store.workers.dev/api/bazardor
Alternative base URL
https://api.abcz.workers.dev/api/bazardor
Endpoint	Purpose
GET /products	সব পণ্যের তালিকা
GET /products?category=chal	নির্দিষ্ট category-র পণ্য
GET /products/1	একটি পণ্যের বিস্তারিত
GET /categories	সব category
GET /categories/chal	একটি category-র বিস্তারিত


API response-এর প্রকৃত field অনুযায়ী product name, price, unit, category এবং price-change information ব্যবহার করা হয়। API data load না হলে UI-তে উপযুক্ত loading বা error state দেখানো উচিত।
🧱 Project Structure
bangla-bazar-dhor/
├── public/                   # Static assets
├── src/
│   ├── app/                  # App Router pages and global styles
│   │   ├── layout.tsx        # Root layout, font, header, ticker and footer
│   │   ├── page.tsx          # Homepage
│   │   └── ...               # Category, product, auth and profile routes
│   ├── components/           # Shared UI components
│   │   ├── Header
│   │   ├── Marquee
│   │   └── Footer
│   └── lib/
│       ├── auth.ts           # Better Auth and MongoDB configuration
│       └── auth-client.ts    # Client-side auth functions
├── .env.local                # Local environment variables (do not commit)
├── package.json
└── README.md
⚙️ Getting Started
Prerequisites
- Node.js — use a version supported by your installed Next.js release
- npm
- Git
- MongoDB Atlas account or another accessible MongoDB deployment
- Google and GitHub OAuth credentials for social sign-in testing
1. Clone the repository
git clone https://github.com/jubail-dev/bangla-bazar-dhor.git
cd bangla-bazar-dhor
2. Install dependencies
npm install
3. Configure environment variables
Project root-এ .env.local নামে একটি file তৈরি করুন এবং নিচের variable-গুলো যোগ করুন। Variable name-গুলো project-এর Better Auth configuration-এর সঙ্গে মিলিয়ে রাখা হয়েছে।
# Better Auth
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=replace_with_a_long_random_secret

# MongoDB connection string
BETTER_AUTH_MONGODB_URL=mongodb+srv://<username>:<password>@<cluster-url>/?retryWrites=true&w=majority

# Google OAuth
BETTER_AUTH_GOOGLE_CLIENT_ID=your_google_client_id
BETTER_AUTH_GOOGLE_SECRET=your_google_client_secret

# GitHub OAuth
BETTER_AUTH_GITHUB_CLIENT_ID=your_github_client_id
BETTER_AUTH_GITHUB_SECRET=your_github_client_secret
Environment variable notes
- BETTER_AUTH_MONGODB_URL-এ আপনার MongoDB connection string দিন। Username, password এবং cluster address নিজের credentials দিয়ে প্রতিস্থাপন করুন।
- BETTER_AUTH_SECRET-এ একটি secure, random secret ব্যবহার করুন।
- Google ও GitHub OAuth চালাতে সংশ্লিষ্ট provider dashboard থেকে client ID ও secret তৈরি করতে হবে।
- OAuth callback URL local এবং production environment-এর জন্য সঠিকভাবে configure করুন:
Local Google:  http://localhost:3000/api/auth/callback/google
Local GitHub:  http://localhost:3000/api/auth/callback/github

Production Google: https://bangla-bazar-dhor.vercel.app/api/auth/callback/google
Production GitHub: https://bangla-bazar-dhor.vercel.app/api/auth/callback/github
- .env.local-এ থাকা secret কখনো GitHub-এ commit করবেন না। .gitignore-এ এটি উপেক্ষা করা হচ্ছে কি না যাচাই করুন।
- Vercel-এও একই environment variable-গুলো Production environment-এর জন্য যোগ করুন এবং BETTER_AUTH_URL-কে live site URL দিন।
4. Start the development server
npm run dev
Browser-এ খুলুন: http://localhost:3000
🧪 Useful Scripts
Command	Purpose
npm run dev	Start local development server
npm run lint	Run ESLint checks
npm run build	Create a production build
npm run start	Run the production build locally


Before deployment, run:
npm run lint
npm run build
🚀 Deployment on Vercel
1. GitHub repository-টি Vercel-এ import করুন।
2. Project Settings → Environment Variables-এ MongoDB, Better Auth, Google এবং GitHub credentials যোগ করুন।
3. Production BETTER_AUTH_URL হিসেবে https://bangla-bazar-dhor.vercel.app অথবা আপনার নিজস্ব domain দিন।
4. Google ও GitHub OAuth provider settings-এ production callback URL যোগ করুন।
5. Deploy শেষ হলে homepage, product/category routes, authentication, profile update এবং direct URL refresh পরীক্ষা করুন।
✅ Submission Checklist
- [ ] Homepage-এর সব product section সঠিকভাবে render হচ্ছে।
- [ ] Category filtering এবং price sorting কাজ করছে।
- [ ] Bengali price formatting ও price-change badges সঠিকভাবে দেখাচ্ছে।
- [ ] Product detail route-এর protected access পরীক্ষা করা হয়েছে।
- [ ] Email/password, Google এবং GitHub authentication পরীক্ষা করা হয়েছে।
- [ ] Sign in, sign up, sign out এবং error-এর জন্য toast feedback দেখা যাচ্ছে।
- [ ] MongoDB connection ও profile update কাজ করছে।
- [ ] Loading state, empty state এবং invalid route পরীক্ষা করা হয়েছে।
- [ ] Mobile, tablet এবং desktop layout পরীক্ষা করা হয়েছে।
- [ ] Dynamic route-এর direct URL ও refresh পরীক্ষা করা হয়েছে।
- [ ] অন্তত ৮টি meaningful Git commit রয়েছে।
- [ ] .env.local বা secret repository-তে নেই।
- [ ] Production build এবং deployed site পরীক্ষা করা হয়েছে।
- [ ] Live URL ও repository URL README-তে ঠিক আছে।
👨‍💻 Author
Jubail
GitHub: @jubail-dev
<div align="center">

বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
Made with ❤️ using Next.js, Better Auth and MongoDB.
</div>