# 🎬 Movie Explorer

A beautiful, responsive web application for searching and exploring movies and TV series using the OMDb API. Built with Next.js 14, TypeScript, and Tailwind CSS.

![Movie Explorer Screenshot](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Movie+Explorer+Screenshot)

## ✨ Features

### 🔍 **Search & Discovery**
- **Powerful Search**: Search through millions of movies, TV series, and episodes
- **Real-time Results**: Instant search results with smooth animations
- **Pagination**: Navigate through results with elegant pagination controls
- **Empty States**: Beautiful empty states and error handling

### 🎛️ **Advanced Filtering**
- **Content Type Filter**: Filter by Movies, TV Series, or Episodes
- **Year Filter**: Search by specific release years (1900-2024)
- **Combined Filters**: Use multiple filters together for precise results

### 🎨 **Beautiful UI/UX**
- **Modern Design**: Clean, professional interface with glassmorphism effects
- **Theme Support**: Light, Dark, and System theme options
- **Smooth Animations**: Staggered card animations and hover effects
- **Responsive Design**: Perfect experience on desktop, tablet, and mobile

### 🎭 **Detailed Movie Information**
- **Comprehensive Details**: Plot, cast, crew, ratings, awards, and more
- **High-Quality Posters**: Movie posters with graceful fallbacks
- **IMDb Integration**: Ratings and vote counts from IMDb
- **Modal View**: Clean, scrollable modal for detailed information

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- OMDb API Key (free)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/movie-explorer.git
   cd movie-explorer
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Get your OMDb API Key**
   - Visit [OMDb API](http://www.omdbapi.com/apikey.aspx)
   - Sign up for a free account
   - Check your email for the API key

4. **Configure API Key**
   - Open \`app/page.tsx\`
   - Replace \`YOUR_OMDB_API_KEY\` with your actual API key:
   \`\`\`typescript
   const API_KEY = "your-actual-api-key-here"
   \`\`\`

5. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful, accessible UI components

### **Features**
- **next-themes** - Theme switching functionality
- **Lucide React** - Beautiful icons
- **OMDb API** - Movie and TV series data

## 📁 Project Structure

\`\`\`
movie-explorer/
├── app/
│   ├── globals.css          # Global styles and theme variables
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main application page
├── components/
│   ├── ui/                  # Shadcn/ui components
│   ├── header.tsx           # Application header
│   ├── footer.tsx           # Application footer
│   ├── search-bar.tsx       # Search input component
│   ├── filter-panel.tsx     # Filter controls
│   ├── movie-grid.tsx       # Movie results grid
│   ├── movie-card.tsx       # Individual movie card
│   ├── movie-modal.tsx      # Movie details modal
│   ├── pagination-controls.tsx # Pagination component
│   ├── loading-spinner.tsx  # Loading states
│   ├── error-message.tsx    # Error handling
│   ├── empty-state.tsx      # Empty state component
│   └── theme-toggle.tsx     # Theme switcher
├── types/
│   └── movie.ts             # TypeScript type definitions
└── README.md
\`\`\`

## 🎯 Key Components

### **SearchBar**
- Real-time search with debouncing
- Clear button for easy query removal
- Responsive design with gradient button

### **MovieCard**
- Hover animations and effects
- Type-specific color coding
- Graceful image loading and fallbacks
- Click to view detailed information

### **MovieModal**
- Comprehensive movie information
- Scrollable content with clean layout
- IMDb ratings with color coding
- Responsive design for all screen sizes

### **FilterPanel**
- Content type filtering (Movie/Series/Episode)
- Year-based filtering (1900-2024)
- Clean, accessible dropdown interfaces

## 🎨 Theme System

The application supports three theme modes:

- **Light Theme**: Clean, bright interface
- **Dark Theme**: Modern dark interface (default)
- **System Theme**: Automatically matches your system preference

Themes are persistent across sessions and include smooth transitions.

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Perfect experience on tablets
- **Desktop**: Full-featured desktop experience
- **Touch Friendly**: Proper touch targets and interactions

## 🔧 API Integration

### **OMDb API Features Used**
- **Search**: \`s\` parameter for movie/series search
- **Pagination**: \`page\` parameter for result pagination
- **Filtering**: \`type\` and \`y\` parameters for filtering
- **Details**: \`i\` parameter for detailed movie information
- **Plot**: \`plot=full\` for complete plot descriptions

### **Error Handling**
- Network error handling
- API rate limit handling
- Invalid API key detection
- Graceful fallbacks for missing data

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### **Netlify**
1. Build the project: \`npm run build\`
2. Deploy the \`out\` folder to Netlify

### **Other Platforms**
The app can be deployed to any platform that supports Next.js applications.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: \`git checkout -b feature/amazing-feature\`
3. Commit your changes: \`git commit -m 'Add amazing feature'\`
4. Push to the branch: \`git push origin feature/amazing-feature\`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OMDb API** for providing comprehensive movie data
- **Shadcn/ui** for beautiful, accessible components
- **Tailwind CSS** for the utility-first CSS framework
- **Next.js** team for the amazing React framework

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

⭐ **Star this repository if you found it helpful!**
