🏃‍♂️ GetFitWithMe

GetFitWithMe is a full-stack fitness web application that helps users build healthier routines through personalized coaching, habit tracking, workout planning, and analytics dashboards.

✨ Features

🌐 Landing Page

Hero section with muted theme & 8-point spacing system
Intro from coach Arun with profile + story section
Plans section with UPI/GPay payment gateway integration
Client transformation gallery
Reviews & FAQs
Responsive design for desktop & mobile

📊 Dashboard

Sign in with Google → profile picture integration
Sidebar navigation: Dashboard, Analytics, Goals, Meals, Settings
Switch themes: Dark / Light / Vibrant
Metrics: Height, Weight, BMI, Steps (editable inputs)
Analytics with charts (steps, meals macros, workouts)
Goals & Meals → Premium feature (redirects to Plans)
App showcase section (mobile screenshots)

💳 Payments

Simple UPI/GPay integration for plan subscriptions
Deep links to UPI apps on mobile

🚀 Tech Stack

Frontend: React + Vite, TailwindCSS, Framer Motion
UI Components: shadcn/ui, Lucide React
Charts: Recharts
State & Routing: React Router, LocalStorage persistence
Payments: UPI/GPay deep links
Version Control: Git + GitHub

📦 Installation

Clone the repo:
git clone https://github.com/NilamXSC/getfitwithme.git

cd getfitwithme

Install dependencies:

npm install

Start dev server:

npm run dev

📱 Mobile Support

App is noy yet fully responsive and optimized for iOS/Android.
Option to force desktop-like layout on mobile via custom viewport settings.

🧑‍💻 Development Notes

Code is organized into components/, pages/, and assets/.
Landing page content lives in components.
Dashboard logic lives in pages/Dashboard.jsx.
Styles are handled in index.css with Tailwind utilities + custom CSS layers.

🗺️ Roadmap

 Authentication with Firebase / Supabase
 Real UPI transaction backend verification
 Push notifications for habits
 Native iOS/Android wrapper (React Native / Expo)

🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

📄 License

This project is licensed under the MIT License.

👨‍🏫 About

Built with ❤️ by Nilam Chakraborty.
