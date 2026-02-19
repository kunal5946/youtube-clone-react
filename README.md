# 📺 YouTube Clone (React + Vite)

A modern, responsive YouTube clone application built with **React JS** and **Vite**, utilizing the **YouTube Data API v3** to fetch real-time video data. This project demonstrates advanced React concepts including hooks, routing, and component-based architecture.

## � Live Demo

[Link to Live Demo](https://dazzling-madeleine-db6b52.netlify.app/)

## ✨ Key Features

### 🏠 Home Feed
- **Dynamic Content**: Fetches and displays a grid of trending videos from the YouTube API.
- **Category Filtering**: Filter videos by categories such as Music, Gaming, Technology, and more using the sidebar.
- **Responsive Layout**: Adapts seamlessly to different screen sizes.

### 🎥 Video Player
- **Embedded Playback**: Seamless video playback using the YouTube Embed player.
- **Video Details**: Displays title, description, view counts, and publish date formatted with Moment.js.
- **Channel Info**: Shows channel logo and subscriber count.
- **Comments Section**: Fetches and displays top-level comments for the video.
- **Interactive UI**: Like, Dislike, Share, and Save buttons (UI simulation).
- **Recommended Videos**: Sidebar with related video suggestions (if implemented).

### ⚡ Tech Stack
- **Frontend Framework**: [React](https://reactjs.org/) (Hooks, Functional Components)
- **Build Tool**: [Vite](https://vitejs.dev/) for fast development and building.
- **Routing**: [React Router DOM](https://reactrouter.com/) (v6) for client-side navigation.
- **CSS**: Custom CSS with Flexbox and Grid.
- **Data Fetching**: Javascript Fetch API.
- **API**: [YouTube Data API v3](https://developers.google.com/youtube/v3).
- **Utilities**: [Moment.js](https://momentjs.com/) for date formatting.

## 🛠️ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js installed (v14 or higher recommended)
- npm or yarn package manager
- A **YouTube Data API v3** Key from the [Google Cloud Console](https://console.cloud.google.com/).

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/kunal5946/youtube-clone-react.git
    cd youtube-clone-react
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Configure API Key**
    Create a `.env` file in the root directory of the project and add your YouTube API Key:

    ```env
    VITE_YOUTUBE_API_KEY=your_api_key_here
    ```

    > **Note:** The application uses `import.meta.env.VITE_YOUTUBE_API_KEY` to access the key securely.

4.  **Run the Development Server**
    ```bash
    npm run dev
    ```

    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 📂 Project Structure

```
src/
├── Components/
│   ├── Feed/          # Main video feed component
│   ├── Navbar/        # Top navigation bar
│   ├── PlayVideo/     # Video player and details
│   ├── Recommended/   # Recommended videos sidebar
│   └── Sidebar/       # Category sidebar navigation
├── Pages/
│   ├── Home/          # Home page container
│   └── Video/         # Video playback page container
├── assets/            # Static images and icons
├── App.jsx            # Main application component with routing
├── main.jsx           # Entry point
└── data.js            # Key configuration and helper functions
```

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

## 📬 Contact

Project Link: [https://github.com/kunal5946/youtube-clone-react](https://github.com/kunal5946/youtube-clone-react)
