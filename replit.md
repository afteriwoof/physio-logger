# Overview

Physio Logger is a minimal, single-page web application designed for tracking physical therapy exercises and daily routines. The application provides a simple interface for logging exercise sets, managing daily routines, and monitoring completion statistics over time. Built as a lightweight client-side application, it focuses on fast interaction and ease of use for physiotherapy patients who need to track their exercise compliance.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a **client-side only architecture** with no backend server requirements:
- **Alpine.js** for reactive state management and DOM manipulation
- **Tailwind CSS** for utility-first styling via CDN
- **Single HTML file** approach for maximum portability and simplicity
- **Local storage** for data persistence (implied from the export functionality)

## Data Management
- **Client-side data storage** using browser localStorage
- **JSON export functionality** for data backup and portability
- **Exercise tracking** with set-based logging system
- **7-day completion statistics** with visual progress indicators

## User Interface Design
- **Mobile-first responsive design** with grid layouts
- **Keyboard shortcuts** for quick actions (X for next set, N for add exercise, S for export)
- **Progressive disclosure** with modal dialogs for adding exercises
- **Visual completion tracking** using color-coded completion indicators

## Component Structure
- **Header section** with app title, date display, and completion statistics
- **Quick actions bar** with primary CTA for logging sets and secondary actions
- **Exercise list** displaying today's routine with completion states
- **Modal dialogs** for adding new exercises and managing data

The architecture prioritizes **simplicity and speed** over complex features, making it ideal for daily use by patients who need quick exercise logging without technical complexity.

# External Dependencies

## CDN Resources
- **Tailwind CSS** - Utility-first CSS framework loaded via CDN
- **Alpine.js** - Lightweight JavaScript framework for reactivity and state management

## Browser APIs
- **localStorage** - For persistent data storage across sessions
- **JSON** - For data serialization and export functionality

The application has minimal external dependencies and operates entirely in the browser without requiring server infrastructure, databases, or authentication services.