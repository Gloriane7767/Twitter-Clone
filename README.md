# 🐦 Twitter Clone

A full-featured **Twitter Clone** built from scratch to mimic core Twitter functionality — including posting tweets, liking, following users, and much more!

## 🚀 Features

- 🔐 User Authentication (Sign up / Login / Logout)
- 📝 Post Tweets with character limit
- ❤️ Like and Unlike Tweets
- 🔄 Follow and Unfollow users
- 📜 Personalized Timeline
- 🔍 Search users and tweets
- 🖼️ Optional profile pictures and bios
- 🌓 Light/Dark Mode toggle (if applicable)

## 🧰 Tech Stack

### Frontend
- **React** (or any JS framework you're using)
- **Tailwind CSS** / **Bootstrap** / Custom CSS
- **Axios** for API calls

### Backend
- **Node.js** with **Express.js**
- **MongoDB** / **PostgreSQL** (Specify your DB)
- **JWT** for authentication
- **Mongoose** / **Prisma** (depending on DB)

## 📸 Screenshots

| Home Feed | Profile Page | Tweet Detail |
|-----------|--------------|--------------|
| ![Home](./screenshots/home.png) | ![Profile](./screenshots/profile.png) | ![Tweet](./screenshots/tweet.png) |

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/twitter-clone.git
   cd twitter-clone

    Install dependencies

        For frontend:

cd client
npm install

For backend:

    cd server
    npm install

Set up environment variables Create a .env file in the root of your server folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Run the app

    Start the backend:

cd server
npm run dev

Start the frontend:

        cd client
        npm start

🛠️ Future Improvements

    Real-time notifications using WebSockets

    Tweet reply threads

    Image and video uploads

    Direct messaging

    Trending topics and hashtags

🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any feature, bug, or improvement.
🧑‍💻 Author

    Your Name

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
