# 🐉 Dragon News – React Firebase News Portal

A modern news portal web app built with React and Firebase, featuring user authentication, dynamic routing, and category-based news browsing.

🔗 **Live Site:** [your-live-link]  
📁 **Client Repository:** [your-github-link]

---

## 🌟 Features

- 🔐 **Firebase Authentication** – Login with Google or Email/Password  
- 📰 **Category-based News Listing** – Filter news by different categories  
- 📄 **News Details Page** – Dynamic route to show full news (`/news/:id`)  
- 🔐 **Private Route Protection** – Only logged-in users can read full news  
- 🌙 **Dark/Light Theme Toggle** – (Optional feature)  
- 📱 **Fully Responsive** – Optimized for mobile, tablet, and desktop  
- 🎉 **SweetAlert2** – Stylish alerts for login/register actions  

---

## 🧭 Routes Overview

| Route         | Access   | Description                        |
|---------------|----------|------------------------------------|
| `/`           | Public   | Home page with news categories     |
| `/login`      | Public   | User login page                    |
| `/register`   | Public   | User registration page             |
| `/news/:id`   | Private  | View full news details             |
| `/terms`      | Public   | Terms and conditions page          |
| `*`           | Public   | 404 Not Found                      |

---

## 🛠️ Getting Started – Run the Project Locally

### ⚙️ Prerequisites

Make sure you have the following installed:

- **Node.js**
- **npm**
- **Git** (optional)

---

### 🚀 Installation

```bash
git clone https://github.com/your-username/dragon-news.git
cd dragon-news
npm install

🔐 Setup Firebase Configuration

   VITE_apiKey: "AIzaSyCzW1ST3P4vh6OrXrV3m_ZCyVEkl0jUEgQ",
   VITE_authDomain: "the-dragon-news-2c592.firebaseapp.com",
   VITE_projectId: "the-dragon-news-2c592",
   VITE_storageBucket: "the-dragon-news-2c592.firebasestorage.app",
   VITE_messagingSenderId: "902868779945",
   VITE_appId: "1:902868779945:web:361aeca62fdb897e2dbab8"

npm run dev

