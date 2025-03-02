# 🚀 LinkedIn Automation Script

This project automates LinkedIn messaging using **Puppeteer**. It sends a "Hi" message to your connections while avoiding LinkedIn’s detection systems.  

---

## 📌 Features
✅ Send automated messages to your LinkedIn connections  
✅ Use your real Chrome profile to avoid detection  
✅ Mimic human behavior with random delays & typing speed  
✅ Hide Puppeteer fingerprints from LinkedIn’s bot detection  
✅ Limit message sending to prevent bans  

---

## 🛠️ Setup Instructions

### 1️⃣ Install Dependencies
Make sure you have **Node.js** installed. Then, install the required packages:  
```sh
npm install puppeteer dotenv
```

### 2️⃣ Configure Your Credentials
Create a **`.env`** file in the project directory and add your LinkedIn login details:  
```
LINKEDIN_EMAIL=your-email@example.com
LINKEDIN_PASSWORD=your-password
```
⚠ **DO NOT share your `.env` file or commit it to GitHub!**  

### 3️⃣ Run the Script
```sh
node index.js
```
The script will:  
- **Log in to LinkedIn**  
- **Open your messages**  
- **Send "Hi" to the first 10 connections**  
- **Avoid detection using human-like behavior**  

---

## 🔹 How to Prevent LinkedIn from Blocking You
🔸 **Use your real browser profile** (already configured in the script)  
🔸 **Limit messages to ~20/day** (to avoid spam detection)  
🔸 **Rotate IPs if needed** (use a VPN or proxy)  
🔸 **Avoid running the script too often**  

---

## 📜 .gitignore
Make sure your project has this `.gitignore` file to protect sensitive data:
```
# Node.js dependencies
node_modules/
package-lock.json

# Environment variables
.env

# Puppeteer cache & logs
puppeteer-screenshots/
puppeteer-trace.json
debug.log

# OS-specific files
.DS_Store
Thumbs.db

# Logs & temp files
*.log
*.tmp
*.cache

# VS Code settings
.vscode/
```

---

## 🚀 Future Enhancements
🔹 Auto-connect with recruiters  
🔹 Auto-reply to incoming messages  
🔹 Auto-invite people to follow your profile  

---

## ❓ Need Help?
If you have any issues or want new features, feel free to ask! 🚀

