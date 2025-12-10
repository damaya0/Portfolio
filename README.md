# Damsith Adikari - Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing my work as an Electronic & Telecommunication Engineering undergraduate at University of Moratuwa.

🌐 **Live Site**: [www.damsith.com](https://www.damsith.com)

## 🚀 Features

- **Modern Design**: Clean, professional interface with dark mode support
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Next.js 15 for optimal performance
- **Animations**: Smooth animations using Framer Motion
- **SEO Optimized**: Structured for search engine visibility

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion (motion/react)
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **TypeScript**: Full type safety


## 📁 Project Structure

```
├── app/
│   ├── data.ts           # Portfolio data (education, experience, projects, etc.)
│   ├── page.tsx          # Main portfolio page
│   ├── header.tsx        # Hero section
│   ├── navigation.tsx    # Navigation bar
│   ├── footer.tsx        # Footer component
│   └── globals.css       # Global styles
├── components/
│   └── ui/               # Reusable UI components
├── public/
│   ├── projects/         # Project images
│   ├── awards/           # Award images
│   └── internship/       # Internship photos
└── README.md
```

## ✏️ Customization

To customize this portfolio for your own use:

1. **Update Personal Information**: Edit `app/data.ts` to add your own:
   - Education history
   - Work experience
   - Projects
   - Awards
   - Skills
   - Contact information

2. **Add Images**: Place your images in the respective folders:
   - `/public/projects/` - Project screenshots
   - `/public/awards/` - Award certificates
   - `/public/internship/` - Internship photos

3. **Modify Styling**: Adjust colors and styles in:
   - `app/globals.css` - Global styles and theme colors
   - Tailwind classes in components

4. **Update Metadata**: Edit SEO metadata in `app/layout.tsx`

## 🚀 Deployment

The portfolio is deployed on Vercel. To deploy your own:

```bash
# Build the project
npm run build

# Deploy to Vercel
vercel deploy
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📝 License

This project is open source and available for personal use.

## 🔗 Connect

- **LinkedIn**: [Damsith Adikari](https://www.linkedin.com/in/damsith-adikari-5244711a0/)
- **GitHub**: [damaya0](https://github.com/damaya0)

---

Built with ❤️ using Next.js and Tailwind CSS
