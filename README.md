# 📝 Task Manager App

A modern, feature-rich task management application built with React, TypeScript, and Tailwind CSS.

![Task Manager Demo](screenshots/demo.png)

## ✨ Features

- ✅ **Add, edit, and delete tasks** - Full CRUD operations
- ✅ **Mark tasks as complete** - Track your progress
- ✅ **Drag & drop to reorder** - Organize tasks your way
- ✅ **Filter by status** - View All/Active/Completed tasks
- ✅ **Dark mode support** - Easy on the eyes
- ✅ **Persistent storage** - Data saved in localStorage
- ✅ **Fully responsive** - Works on all devices
- ✅ **Smooth animations** - Delightful user experience

## 🚀 Live Demo

👉 **[View Live Demo](https://task-manager-nbv9704.vercel.app)**

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3** - Styling
- **@hello-pangea/dnd** - Drag & drop functionality
- **Lucide React** - Beautiful icons
- **Vite** - Build tool

## 💻 Getting Started

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation
```bash
# Clone repository
git clone https://github.com/nbv9704/task-manager.git
cd task-manager

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📸 Screenshots

### Light Mode
![Light Mode](screenshots/light-mode.png)

### Dark Mode
![Dark Mode](screenshots/dark-mode.png)

### Drag & Drop
![Drag and Drop](screenshots/drag-drop.gif)

## 🎯 Key Learnings

### 1. State Management
- Custom hooks for reusable logic (`useLocalStorage`, `useTheme`)
- Efficient state updates with immutability
- Performance optimization with `useMemo`

### 2. TypeScript Best Practices
- Strict typing with interfaces
- Type-safe event handlers
- Generic custom hooks

### 3. Drag & Drop Implementation
- Integrated @hello-pangea/dnd library
- Smooth reordering with visual feedback
- Persisting order in localStorage

### 4. User Experience
- Smooth animations and transitions
- Intuitive hover effects
- Responsive design for all screen sizes
- Accessible with keyboard navigation

## 🔮 Future Enhancements

- [ ] Task editing (double-click to edit)
- [ ] Categories and tags
- [ ] Due dates and reminders
- [ ] Search functionality
- [ ] Export/import tasks
- [ ] Backend integration
- [ ] Multi-user support

## 👨‍💻 Author

**Ngô Bảo Việt**
- GitHub: [@nbv9704](https://github.com/nbv9704)
- Email: ngobaoviet97@gmail.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
