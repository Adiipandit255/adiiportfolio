# How to Set Up Firebase Live Sync for GitHub Pages

This portfolio is configured in **Dual Mode**:
* **Local Mode (Default):** Runs offline using browser `localStorage` if keys are missing.
* **Live Mode:** Syncs database changes instantly across the web once Firebase credentials are added.

Follow these 5 easy steps to connect your portfolio to a 100% Free Firebase Database:

---

## Step 1: Create a Free Firebase Project
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Log in with your Google Account and click **Add Project**.
3. Name your project (e.g. `"portfolio-db"`), click **Continue**, and turn off Google Analytics (optional, to speed up setup).
4. Click **Create Project**. Once ready, click **Continue**.

---

## Step 2: Set Up Firestore Database (Cloud DB)
1. In the Firebase Sidebar, under **Build**, click **Firestore Database**.
2. Click **Create Database**.
3. Choose your database location (default is fine) and click **Next**.
4. Select **Start in Test Mode** (this enables public read/write access so the portfolio can load and save data instantly). Click **Create**.
5. Once created, your online database is active!

---

## Step 3: Get Your Web App Credentials
1. In the Firebase Project Overview dashboard, click the **Web icon (`</>`)** to register a web app.
2. Name your app (e.g. `"portfolio-web"`) and click **Register app**.
3. Firebase will show you an `npm install` code snippet containing `firebaseConfig`. Copy the keys inside this object:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

---

## Step 4: Configure the Environment Keys
Create a file named `.env` in the root folder of your project (same level as `package.json`) and paste your keys in the following format:

```env
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_PROJECT_ID.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_PROJECT_ID.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
```
*(Replace `YOUR_...` with the actual strings you copied from Firebase. Save the file and restart your local dev server).*

---

## Step 5: Hosting on GitHub Pages with Keys
When you deploy to GitHub Pages, the `.env` file is not pushed (since it is added in `.gitignore` for security). To make sure the live site has access to Firebase:
* In your GitHub Repository page, go to **Settings** -> **Secrets and variables** -> **Actions**.
* Click **New repository secret** or variables to add these keys, or you can build the site locally with the keys and push the `dist/` folder directly to GitHub.
