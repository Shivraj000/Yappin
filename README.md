
# 🚀 YAPPIN – A Real-Time Chat App for Speed, Style & Simplicity 💬

**YAPPIN** is a modern, full-stack messaging platform inspired by WhatsApp – designed with real-time communication, strong authentication, clean UI, and a production-ready architecture.

---

## 🔗 Live App & Repo

- 🌐 [Live App](https://yappin-crog.onrender.com/login)
- 📁 [GitHub Repo](https://github.com/Shivraj000/Yappin)

---

## 💡 Features

- 🌟 **Tech Stack**: MERN + Socket.io + TailwindCSS + DaisyUI  
- 🎃 **Authentication & Authorization** using JWT  
- 👾 **Real-time messaging** with Socket.IO  
- 🚀 **Online user presence tracking** (Socket.IO + React Context)  
- 👌 **Global state management** via Zustand  
- 🖼️ **Auto-generated avatars** with DiceBear (Base64-optimized)  
- 🌈 **Custom animated gradients** for chat UI and idle states  
- 🧠 **Smart sidebar** with live online user sync  
- 🐞 **Error handling** on both client & server  
- 📱 **Responsive & accessible UI**  
- ☁️ **Deployed on Render**

---

## 📁 Project Folder Structure

<details>
<summary>Click to view the full structure</summary>

```text
Yappin/
├── backend/
│   ├── controllers/        # Auth, Message, User controllers
│   ├── db/                 # MongoDB connection
│   ├── middleware/         # JWT & auth middleware
│   ├── models/             # Mongoose schemas
│   ├── routes/             # Express route handlers
│   ├── socket/             # Socket.IO server config
│   └── server.js           # Main backend entry point
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/     # Chat UI, Message input, Sidebar
│       ├── context/        # Auth context
│       ├── hooks/          # Custom hooks like useLogin/useSignup
│       ├── pages/          # Login, Signup, Home
│       ├── zustand/        # Zustand store (useConversation)
│       └── App.jsx         # Main routing component
│
├── .env                    # Environment variables
├── package.json            # Project metadata & scripts
├── vite.config.js          # Vite config for frontend build
└── README.md               # Project documentation
