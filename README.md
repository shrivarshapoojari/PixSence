# PixSence 🎬✨

**Transform Your Visual Content with AI-Powered Optimization**

PixSence is a modern web application that revolutionizes how you manage, compress, and optimize videos and images for web and social media platforms. Built with cutting-edge technology and a beautiful dark theme interface.

![PixSence Banner](https://via.placeholder.com/1200x400/1F2937/FFFFFF?text=PixSence+-+Transform+Your+Visual+Content)

## 🌟 Features

### 🎥 **Video Compression & Management**
- **Smart Compression**: AI-powered video compression that maintains quality while reducing file size
- **Web Optimization**: Automatically optimize videos for web delivery
- **Gallery Management**: Organize and browse your compressed videos
- **Progress Tracking**: Real-time upload and compression progress
- **Size Comparison**: See before/after file size comparisons

### 📱 **Social Media Image Creator**
- **Multi-Platform Support**: Instagram, Twitter, Facebook, LinkedIn formats
- **Auto-Cropping**: Smart cropping with AI-powered gravity detection
- **Perfect Sizing**: Pre-configured dimensions for all major platforms
- **Instant Preview**: Real-time preview of transformed images
- **One-Click Download**: Download optimized images for any platform

### ☁️ **Cloud Storage & Delivery**
- **Cloudinary Integration**: Powered by Cloudinary's robust infrastructure
- **Global CDN**: Fast content delivery worldwide
- **Secure Storage**: Enterprise-grade security for your media files
- **Instant Access**: Access your content from anywhere

## 🚀 Tech Stack

### **Frontend**
- **Next.js 15.5.2** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **DaisyUI** - Beautiful component library
- **Lucide React** - Modern icon library

### **Backend & Database**
- **Prisma ORM** - Type-safe database access
- **PostgreSQL** - Robust relational database
- **Next.js API Routes** - Serverless API endpoints

### **Authentication & Storage**
- **Clerk** - Complete authentication solution
- **Cloudinary** - Media management and optimization
- **Axios** - HTTP client for API calls

### **Development Tools**
- **ESLint** - Code linting (configurable)
- **PostCSS** - CSS processing
- **Turbopack** - Ultra-fast bundler

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shrivarshapoojari/Pixence.git
   cd pixence
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Configure the following variables in `.env`:
   ```env
   # Database
   DATABASE_URL="your_postgresql_database_url"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
   CLERK_SECRET_KEY="your_clerk_secret_key"
   NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
   NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
   
   # Cloudinary
   CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
   CLOUDINARY_API_KEY="your_cloudinary_api_key"
   CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
pixence/
├── app/                          # Next.js App Router
│   ├── (app)/                   # Authenticated app routes
│   │   ├── home/               # Video gallery
│   │   ├── video-upload/       # Video upload interface
│   │   └── social-share/       # Social media image creator
│   ├── (auth)/                 # Authentication routes
│   │   ├── sign-in/           # Sign in page
│   │   └── sign-up/           # Sign up page
│   ├── api/                    # API routes
│   │   ├── video/             # Video processing endpoints
│   │   └── image-upload/      # Image upload endpoints
│   ├── generated/              # Generated Prisma client
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx              # Landing page
├── components/                 # Reusable components
│   ├── AnimatedBackground.tsx # Background animations
│   ├── AuthHeader.tsx        # Authentication header
│   ├── PixenceLogo.tsx       # Brand logo component
│   ├── TrustIndicators.tsx   # Trust badges
│   └── VideoCard.tsx         # Video display component
├── prisma/                    # Database schema and migrations
│   ├── schema.prisma         # Database schema
│   └── migrations/           # Database migrations
└── public/                   # Static assets
```

## 🎨 Design System

### **Color Palette**
- **Primary**: Blue to Purple gradients (`from-blue-500 to-purple-600`)
- **Background**: Dark theme (`from-gray-900 to-gray-800`)
- **Cards**: Glassmorphism (`bg-gray-800/85 backdrop-blur-sm`)
- **Text**: High contrast (`text-white`, `text-gray-300`)

### **Key Design Elements**
- **Glassmorphism**: Translucent cards with backdrop blur
- **Gradient Backgrounds**: Smooth color transitions
- **Hover Effects**: Interactive animations and state changes
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## 🚀 Deployment

### **Vercel (Recommended)**

1. **Connect to Vercel**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Configure environment variables in Vercel dashboard

2. **Build Configuration**
   The project is already configured for Vercel deployment:
   ```json
   {
     "scripts": {
       "build": "prisma generate && next build --turbopack",
       "postinstall": "prisma generate"
     }
   }
   ```

3. **Environment Variables**
   Add all variables from your `.env` file to Vercel's environment settings.

### **Database Setup**
- Use Vercel Postgres, Railway, or any PostgreSQL provider
- Run migrations after deployment: `npx prisma migrate deploy`

## 🔧 Development

### **Available Scripts**
```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production (includes Prisma generation)
npm run start    # Start production server
npm run lint     # Run ESLint (currently disabled)
```

### **Key Development Notes**
- **Prisma Client**: Auto-generated in `app/generated/prisma/`
- **Authentication**: Fully integrated with Clerk
- **File Uploads**: Handled via Cloudinary with size validation
- **Dark Theme**: Consistent across all pages
- **TypeScript**: Strict type checking enabled

## 📱 Pages & Features

### **🏠 Landing Page** (`/`)
- Hero section with animated background
- Feature showcase with interactive cards
- User testimonials and statistics
- How-it-works section
- Call-to-action with trust indicators

### **🔐 Authentication** (`/sign-in`, `/sign-up`)
- Clerk-powered authentication
- Social login support
- Glassmorphism design
- Mobile-responsive layouts

### **🎬 Video Gallery** (`/home`)
- Grid layout of uploaded videos
- Video preview on hover
- File size comparisons
- Download functionality
- Responsive card layout

### **📤 Video Upload** (`/video-upload`)
- Drag-and-drop file upload
- Real-time progress tracking
- File size validation
- Success/error states
- Automatic compression

### **📸 Social Image Creator** (`/social-share`)
- Multi-format support (Instagram, Twitter, Facebook)
- Smart cropping and resizing
- Real-time preview
- One-click download
- Format-specific optimization

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | ✅ |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk public key | ✅ |
| `CLERK_SECRET_KEY` | Clerk secret key | ✅ |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | ✅ |
| `CLOUDINARY_API_KEY` | Cloudinary API key | ✅ |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | ✅ |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Public Cloudinary name | ✅ |



 

**Made with ❤️ by [Shrivarshapoojari](https://github.com/shrivarshapoojari)**

> ✨ Transform your visual content today with PixSence!
