# Seabird Computer Official Website

## Overview

This repository contains the official website for **Seabird Computer**, a fiber optic internet service provider (ISP) based in Mirpur, Dhaka, Bangladesh. The website serves as the primary public-facing platform for customers and prospective clients to learn about services, view service packages, submit connection requests, and access support resources.

## Purpose of the Website

The Seabird Computer website is designed to:

- **Showcase Services**: Present fiber optic internet packages and service offerings to the target market
- **Enable Customer Acquisition**: Provide a streamlined interface for prospective customers to request new connections
- **Support Existing Customers**: Offer billing, FTP server information, and technical support resources
- **Provide Information**: Deliver company information, terms of service, privacy policies, and refund policies
- **Facilitate Communication**: Enable direct contact with the company through contact forms and integrated communication channels

## Key Features

- **Service Package Displays**: Interactive cards showcasing different internet service tiers and their specifications
- **Client Testimonials**: Slider component featuring client feedback and success stories
- **Connection Request Forms**: Streamlined interface for customers to request new internet connections
- **Billing Resources**: Instructions and guidance for bill payment processes
- **Technical Support**: FTP server access information and technical resources
- **Responsive Design**: Fully responsive interface optimized for desktop and mobile devices
- **Real-time Chat**: Integrated live chat functionality for customer support
- **WhatsApp Integration**: Direct messaging link for WhatsApp-based customer support

## Technology Stack

This project is built with modern, industry-standard web technologies:

- **Vite**: Fast build tool and development server
- **React**: Component-based UI library
- **TypeScript**: Type-safe JavaScript development
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **shadcn-ui**: High-quality, accessible component library built on Radix UI
- **Supabase**: Backend-as-a-Service for database and authentication (where applicable)

## Project Structure

The project is organized as follows:

```
├── src/
│   ├── pages/              # Page components (About, Contact, Packages, etc.)
│   ├── components/         # Reusable UI components
│   │   └── ui/            # shadcn-ui component library
│   ├── lib/               # Utility functions and services
│   ├── hooks/             # Custom React hooks
│   ├── integrations/      # Third-party service integrations
│   └── assets/            # Static assets (images, icons, etc.)
├── public/                # Static files served at root
├── supabase/              # Supabase backend configuration
└── Configuration files    # Vite, TypeScript, Tailwind, ESLint setup
```

## Local Development Setup

### Prerequisites

- **Node.js** (v16 or higher) and **npm** installed on your system
- Git for version control

If Node.js is not installed, install it via [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation & Running

1. **Clone the Repository**
   ```sh
   git clone <https://github.com/seabirdisp/Seabird-Computer.git>
   cd <Seabird-Computer>
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Start the Development Server**
   ```sh
   npm run dev
   ```
   The application will be available at `http://localhost:8080` with hot module reloading enabled.

4. **Build for Production**
   ```sh
   npm run build
   ```

### Editing in GitHub

**Direct File Editing:**
- Navigate to the file you wish to edit
- Click the pencil icon (Edit button) in the top right
- Make your changes and commit directly

**Using GitHub Codespaces:**
- Go to the repository main page
- Click the green "Code" button
- Select the "Codespaces" tab
- Click "New codespace" to launch a cloud-based development environment
- Edit files and commit changes when done

## Deployment

The website can be deployed to any modern static hosting platform:

- **Vercel** (Recommended): Optimized for Vite/React projects with automatic deployments on push
- **Netlify**: Simple deployment with continuous integration support
- **GitHub Pages**: Cost-effective option for static hosting

Deployment configuration files are included in the repository (e.g., `vercel.json`) to facilitate easy deployment to supported platforms.

## Maintenance & Ownership

This repository is maintained by the Seabird Computer development team. All changes should follow the company's development standards and coding guidelines.

### For Questions or Issues

Contact the development team or project maintainer for questions regarding deployment, maintenance, or architectural decisions.
