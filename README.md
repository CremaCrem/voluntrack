# VolunTrack Usability Testing Website

This website showcases the usability testing results for the VolunTrack application, featuring detailed analysis, participant information, task descriptions, and recommended improvements.

## Features

- Modern, responsive design using Tailwind CSS
- Interactive data visualizations with Chart.js
- Mobile-friendly navigation
- Comprehensive testing documentation
- Downloadable resources and reports

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd voluntrack
```

2. Install dependencies:

```bash
npm install
```

3. Build the Tailwind CSS:

```bash
npm run build:css
```

## Development

To start the development server:

```bash
npm run dev
```

This will start a local development server at `http://localhost:3000`.

## Project Structure

```
voluntrack/
├── public/
│   └── output.css        # Compiled Tailwind CSS
├── src/
│   ├── components/       # HTML components
│   │   ├── participants.html
│   │   ├── tasks.html
│   │   ├── results.html
│   │   ├── decide.html
│   │   ├── videos.html
│   │   ├── improvements.html
│   │   └── poster.html
│   └── scripts/         # JavaScript files
│       └── main.js
├── index.html           # Main entry point
├── package.json         # Project dependencies
└── tailwind.config.js   # Tailwind configuration
```

## Dependencies

- Tailwind CSS - Utility-first CSS framework
- Chart.js - Data visualization library
- Google Fonts (Poppins, Intro Rust)

## Building for Production

To build the project for production:

```bash
npm run build
```

This will:

1. Compile and minify the CSS
2. Optimize assets
3. Generate production-ready files

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- VolunTrack Development Team
- Usability Testing Participants
- Open Source Community
