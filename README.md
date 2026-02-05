# Odoi-Laryea Foundation Website

A modern, responsive website for the Odoi-Laryea Foundation built with React 18, Vite, React Router v6, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ⚡ **Lightning Fast** - Built with Vite for optimal development experience
- 🎨 **Modern UI** - Tailwind CSS with custom design system
- 🔄 **Smooth Animations** - Framer Motion for engaging user interactions
- 📱 **Fully Responsive** - Mobile-first design approach
- 🧭 **Client-side Routing** - React Router v6 for seamless navigation
- ♿ **Accessible** - WCAG 2.1 AA compliant components
- 🎯 **SEO Optimized** - Meta tags and semantic HTML

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16.0 or higher)
- **npm** (version 7.0 or higher) or **yarn**

## 🛠️ Installation

1. **Extract the project files** to your desired location

2. **Navigate to the project directory**
   ```bash
   cd odoi-laryea-foundation
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```
   or if you prefer yarn:
   ```bash
   yarn install
   ```

## 🏃‍♂️ Running the Development Server

Start the development server:

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will open automatically in your browser at `http://localhost:3000`

## 📦 Building for Production

Create an optimized production build:

```bash
npm run build
```

or with yarn:

```bash
yarn build
```

The build files will be generated in the `dist` folder.

## 👀 Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
odoi-laryea-foundation/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── layouts/        # Layout components
│   │   └── MainLayout.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   ├── Impact.jsx
│   │   ├── GetInvolved.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── NotFound.jsx
│   │   └── programs/
│   │       ├── CapacityBuilding.jsx
│   │       ├── AcademicSupport.jsx
│   │       └── Publications.jsx
│   ├── styles/         # Global styles
│   │   └── index.css
│   ├── utils/          # Utility functions
│   ├── hooks/          # Custom React hooks
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Application entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── .eslintrc.cjs
```

## 🎨 Design System

### Colors

The project uses a custom color palette optimized for NGO branding:

- **Primary** (Orange tones) - Main brand color
- **Secondary** (Green tones) - Growth and sustainability
- **Accent** (Red tones) - Call-to-action elements

### Typography

- **Headings**: Merriweather (Serif) - Professional and authoritative
- **Body**: Inter (Sans-serif) - Clean and readable

### Custom Tailwind Classes

- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.btn-outline` - Outlined button style
- `.card` - Card container with shadow
- `.section-container` - Consistent page width with padding
- `.section-padding` - Consistent vertical spacing

## 🧩 Key Components

### Header
- Responsive navigation with mobile menu
- Sticky positioning for better UX
- Active link highlighting

### Footer
- Quick links and site navigation
- Social media links
- Contact information

### Pages
- **Home** - Hero section, impact stats, program overview
- **About** - Foundation story, founder profile
- **Programs** - Three main program areas
- **Impact** - Success stories and metrics
- **Get Involved** - Donation and volunteer opportunities
- **Blog** - News and updates
- **Contact** - Contact form and information

## 🔧 Customization

### Updating Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: { ... },
      secondary: { ... },
      accent: { ... }
    }
  }
}
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/Header.jsx`

### Modifying Fonts

Update the Google Fonts link in `index.html` and the `fontFamily` in `tailwind.config.js`

## 📱 Responsive Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel auto-detects Vite and deploys

### Deploy to Netlify

1. Push your code to GitHub
2. Create new site in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

## 📝 Environment Variables

Create a `.env` file in the root directory for sensitive data:

```
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=info@odoilaryeafoundation.org
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is proprietary to Odoi-Laryea Foundation.

## 🆘 Support

For issues or questions:
- Email: info@odoilaryeafoundation.org
- Create an issue in the project repository

## 🎯 Next Steps

1. **Add Content** - Replace placeholder text with actual foundation content
2. **Add Images** - Include high-quality photos in `src/assets/`
3. **Set up CMS** - Integrate Sanity.io or Strapi for content management
4. **Add Forms** - Implement contact and donation forms
5. **Analytics** - Add Google Analytics or similar
6. **SEO** - Add meta tags and structured data
7. **Testing** - Implement unit and integration tests

## 🔮 Roadmap

- [ ] Blog/News section with CMS integration
- [ ] Donation payment gateway integration
- [ ] Volunteer registration system
- [ ] Photo gallery with lightbox
- [ ] Annual reports download section
- [ ] Multi-language support (English/Twi)
- [ ] Newsletter subscription
- [ ] Impact dashboard with data visualization

---

**Built with ❤️ for the Odoi-Laryea Foundation**
