# 💬 YAPPIN – Real-Time Chat App

**YAPPIN** is a full-stack real-time chat application built with the MERN stack and Socket.IO. It offers a seamless messaging experience with modern UI, real-time WebSocket communication, JWT-based authentication, and online presence detection.

---

## 🚀 Live Demo

🌐 [Live App on Render](https://yappin-crog.onrender.com/login)  
📁 [GitHub Repository](https://github.com/Shivraj000/Yappin)

---

## 🔥 Features

- 🌟 **Tech Stack**: MERN + Socket.IO + TailwindCSS + DaisyUI  
- 🎃 **Authentication & Authorization** using JWT  
- 👾 **Real-time messaging** with Socket.IO  
- 🚀 **Online user presence** tracking (Socket.IO + React Context)  
- 👌 **Global State Management** via Zustand  
- 🖼️ **Dynamic Avatar Generator** with DiceBear + Base64 optimization  
- 🌈 **Gradient UI** for "no chat selected" and chat layout  
- 🧠 **Smart Sidebar** with live online users  
- 🐞 **Error Handling** on both frontend and backend  
- 📱 **Fully Responsive Design**  
- ☁️ **Deployed on Render** (Backend + Frontend)

---

## 📁 Folder Structure

📁 Yappin
├── 📂 backend
│   ├── 📂 controllers       # Auth, Message, User controllers
│   ├── 📂 db                # MongoDB connection
│   ├── 📂 middleware        # JWT & auth middleware
│   ├── 📂 models            # Mongoose schemas
│   ├── 📂 routes            # Express route handlers
│   ├── 📂 socket            # Socket.IO server config
│   └── 📄 server.js         # Main backend entry
│
├── 📂 frontend
│   ├── 📂 public
│   └── 📂 src
│       ├── 📂 components    # Chat UI, Message input, Sidebar
│       ├── 📂 context       # Auth context
│       ├── 📂 hooks         # Custom hooks like useLogin/useSignup
│       ├── 📂 pages         # Login, Signup, Home
│       ├── 📂 zustand       # Zustand store (useConversation)
│       └── 📄 App.jsx       # Main routing component
│
├── 📄 .env                  # Environment variables
├── 📄 package.json          # Project metadata & scripts
├── 📄 vite.config.js        # Vite config for frontend build
└── 📄 README.md             # Project documentation

