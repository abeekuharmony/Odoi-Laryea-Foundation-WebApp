# 🚀 Quick Start Guide - Odoi-Laryea Foundation Website

## Step 1: Install Node.js

If you don't have Node.js installed:

1. Visit [https://nodejs.org](https://nodejs.org)
2. Download the **LTS version** (Long Term Support)
3. Run the installer
4. Verify installation by opening terminal/command prompt and typing:
   ```bash
   node --version
   npm --version
   ```

## Step 2: Extract & Navigate

1. **Extract** the project folder to a location on your computer
2. **Open Terminal/Command Prompt**
   - Windows: Press `Win + R`, type `cmd`, press Enter
   - Mac: Press `Cmd + Space`, type `terminal`, press Enter
   - Linux: Press `Ctrl + Alt + T`
3. **Navigate to project folder**:
   ```bash
   cd path/to/odoi-laryea-foundation
   ```
   Example (Windows): `cd C:\Users\YourName\Desktop\odoi-laryea-foundation`
   Example (Mac/Linux): `cd ~/Desktop/odoi-laryea-foundation`

## Step 3: Install Dependencies

Run this command in the terminal:

```bash
npm install
```

⏱️ This will take 2-5 minutes depending on your internet speed.

## Step 4: Start Development Server

Once installation is complete, run:

```bash
npm run dev
```

✅ **Success!** Your browser should automatically open to `http://localhost:3000`

If it doesn't, manually open your browser and go to: `http://localhost:3000`

## Step 5: Start Editing

The website is now running! You can:

- Edit files in the `src/` folder
- Changes will automatically show in the browser (hot reload)
- Press `Ctrl + C` in terminal to stop the server

## 🎨 Quick Customization

### Change Logo Text
**File:** `src/components/Header.jsx`
**Line:** Find `<span className="text-white font-bold text-xl">OLF</span>`
**Change:** Replace "OLF" with your preferred text

### Update Homepage Hero
**File:** `src/pages/Home.jsx`
**Lines:** 14-21
**Change:** Edit the headline and description text

### Modify Colors
**File:** `tailwind.config.js`
**Lines:** 10-46
**Change:** Adjust color values in the `colors` section

### Add Your Content
**Files to edit:**
- `src/pages/About.jsx` - About page content
- `src/pages/Programs.jsx` - Programs information
- `src/components/Footer.jsx` - Contact information

## 📦 Build for Production

When ready to deploy:

```bash
npm run build
```

This creates optimized files in the `dist/` folder ready for hosting.

## ❓ Common Issues

### "npm: command not found"
→ Node.js is not installed. Go back to Step 1.

### Port 3000 is already in use
→ Another app is using port 3000. Either:
- Stop that app, or
- Edit `vite.config.js` and change `port: 3000` to `port: 3001`

### "Cannot find module"
→ Dependencies not installed. Run `npm install` again.

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- Google the error message
- Contact: info@odoilaryeafoundation.org

## 📋 Checklist for Launch

- [ ] Replace all placeholder content
- [ ] Add real images to `src/assets/`
- [ ] Update contact information in Footer
- [ ] Test on mobile devices
- [ ] Add Google Analytics
- [ ] Set up domain name
- [ ] Deploy to hosting service

---

**You're ready to build! 🎉**
