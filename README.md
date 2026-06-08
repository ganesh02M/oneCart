# 🛒 OneCart — Full Stack E-Commerce Platform
 
A complete full-stack e-commerce web application built using the **MERN Stack** with Admin Dashboard, Google Authentication, Payment Integration, and Cloud Image Upload.
 
---
 
## 🌐 Live Demo
 
| Service | URL |
|---------|-----|
| 🛒 **Frontend** | [one-cart-ten.vercel.app](https://one-cart-ten.vercel.app) |
| 🛠️ **Admin Panel** | [onecart-admin-beta.vercel.app](https://onecart-admin-beta.vercel.app) |
| ⚙️ **Backend API** | [onecart-backend-4hrf.onrender.com](https://onecart-backend-4hrf.onrender.com) |
 
---
 
## ✨ Features
 
### 👤 User Side
- ✅ User Registration & Login (Email/Password)
- ✅ Google OAuth Authentication (Firebase)
- ✅ Product Browsing & Search
- ✅ Add to Cart & Cart Management
- ✅ Secure Checkout with Razorpay Payment Gateway
- ✅ Order Placement & Order History
- ✅ Responsive UI for all devices
### 🛠️ Admin Panel
- ✅ Secure Admin Login (Role-Based Access Control)
- ✅ Add / Edit / Delete Products
- ✅ Product Image Upload via Cloudinary
- ✅ View & Manage All Orders
- ✅ Order Status Management
---
 
## 🛠️ Tech Stack
 
| Layer | Technology |
|-------|-----------|
| **Frontend** | React.js, Tailwind CSS, Axios |
| **Admin Panel** | React.js, Tailwind CSS, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Authentication** | JWT, bcrypt, Firebase Google Auth |
| **Image Upload** | Cloudinary, Multer |
| **Payment** | Razorpay |
| **State Management** | React Context API |
| **Deployment** | Vercel (Frontend + Admin), Render (Backend), MongoDB Atlas (DB) |
 
---
 
## 📂 Project Structure
 
```
oneCart/
├── frontend/          → User-facing React Application (Port 5173)
├── admin/             → Admin Dashboard React Application (Port 5174)
├── backend/           → Node.js + Express REST API (Port 8000)
└── README.md
```
 
---
 
## ⚙️ Installation & Setup
 
### Prerequisites
- Node.js v18+
- MongoDB (Local or Atlas)
- Git
### 1. Clone the Repository
```bash
git clone https://github.com/ganesh02M/oneCart.git
cd oneCart
```
 
### 2. Backend Setup
```bash
cd backend
npm install
```
 
Create `.env` file:
```env
PORT=8000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```
 
```bash
npm run dev
```
✅ Backend runs on `http://localhost:8000`
 
### 3. Frontend Setup
```bash
cd ../frontend
npm install
```
 
Create `.env` file:
```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```
 
```bash
npm run dev
```
✅ Frontend runs on `http://localhost:5173`
 
### 4. Admin Panel Setup
```bash
cd ../admin
npm install
npm run dev
```
✅ Admin runs on `http://localhost:5174`
 
---
 
## 🔐 Admin Setup
 
Create admin user by running:
```bash
cd backend
node createAdmin.js
```
- **Email:** `admin@onecart.com`
- **Password:** `admin123`
---
 
## 📡 API Endpoints
 
### Auth Routes (`/api/auth`)
| Method | Route | Description |
|--------|-------|-------------|
| POST | `/registration` | Register new user |
| POST | `/login` | User login |
| POST | `/googlelogin` | Google OAuth login |
| POST | `/adminlogin` | Admin login |
| GET | `/logout` | Logout |
 
### User Routes (`/api/user`)
| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| GET | `/getcurrentuser` | Get logged in user | ✅ |
| GET | `/getadmin` | Get admin info | ✅ Admin |
 
### Product Routes (`/api/product`)
| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| GET | `/getallproduct` | Get all products | ❌ |
| POST | `/addproduct` | Add product | ✅ Admin |
| DELETE | `/deleteproduct/:id` | Delete product | ✅ Admin |
 
### Cart Routes (`/api/cart`)
| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| POST | `/addtocart` | Add item to cart | ✅ |
| POST | `/updatecart` | Update cart | ✅ |
| GET | `/getusercart` | Get user cart | ✅ |
 
### Order Routes (`/api/order`)
| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| POST | `/placeorder` | Place new order | ✅ |
| GET | `/getuserorder` | Get user orders | ✅ |
| GET | `/getallorder` | Get all orders | ✅ Admin |
 
---
 
## 🚀 Deployment
 
### Backend (Render)
1. Connect GitHub repo on [render.com](https://render.com)
2. Root Directory: `backend`
3. Build Command: `npm install`
4. Start Command: `node index.js`
5. Add all environment variables in Render dashboard
### Frontend & Admin (Vercel)
1. Connect GitHub repo on [vercel.com](https://vercel.com)
2. Set Root Directory to `frontend` or `admin`
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Add environment variables in Vercel dashboard
---
 
## 👨‍💻 Author
 
**Ganesh Mishra**
- 📧 mishraganesh9305@gmail.com
- 🔗 [GitHub](https://github.com/ganesh02M)
- 💼 [LinkedIn](https://linkedin.com/in/ganesh-mishra-6baa9828b)
- 💻 [LeetCode](https://leetcode.com/u/Ganesh9305)
---
 

 
