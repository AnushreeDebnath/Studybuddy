# 📚 Study Buddy

A productivity-focused web application that helps users schedule, track, and manage their study sessions with reminders and time tracking.

## 🚀 Features

- Add and manage study tasks
- Timer for study sessions
- Local notifications/reminders
- Persistent task storage using JSON
- Responsive web UI

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js with Express.js
- **Storage:** Local JSON file (`data.json`)
- **Version Control:** Git

## 📁 Project Structure

study-buddy/
├── index.html # Main frontend page
├── style.css # Styling for the UI
├── timer.js # Timer functionality script
├── backend/
│ ├── server.js # Express backend server
│ ├── data.json # Local data storage
│ ├── package.json # Node.js dependencies
│ └── node_modules/ # Installed modules


## ⚙️ Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/study-buddy.git
   cd study-buddy/backend

2. **Install backend dependencies:**
npm install
3. **Start server:**
node server.js

4. **Open the frontend**:
Open index.html in your browser or use a Live Server extension in VS Code.

🔍 How It Works
Tasks are stored in a local JSON file (backend/data.json).

The backend serves task data using RESTful endpoints.

The frontend timer helps users focus during study sessions.

Notifications remind users when it's time to start or stop.

📌 Notes
Ensure Node.js is installed (v14 or newer recommended).

Use Live Server extension in VS Code for best frontend development experience.
