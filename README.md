# SimpleTimer
A simple countdown website Proof of concept

## Overview
SimpleTimer is a Flask-based web application that displays a countdown timer to a specific date. The target date is configurable via a JSON configuration file.

## Features
- Clean, responsive countdown timer
- Configurable target date via `config.json`
- Real-time countdown display (days, hours, minutes, seconds)
- Beautiful gradient UI with glassmorphism effect

## Installation

1. Clone the repository:
```bash
git clone https://github.com/eva-akselrad/SimpleTimer.git
cd SimpleTimer
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Configuration

Edit the `config.json` file to set your target date and customize the display:

```json
{
  "target_date": "2025-12-31T23:59:59",
  "title": "New Year's Eve Countdown",
  "description": "Counting down to 2026!"
}
```

- `target_date`: The date and time to count down to (ISO 8601 format)
- `title`: The main heading displayed on the page
- `description`: A subtitle or description text

## Usage

### Option 1: Docker (Recommended)

The easiest way to run SimpleTimer is with Docker:

```bash
# Using docker-compose
docker-compose up -d

# Or using Docker directly
docker build -t simpletimer .
docker run -p 5000:5000 -v $(pwd)/config.json:/app/config.json simpletimer
```

Then open your browser and navigate to:
```
http://localhost:5000
```

To stop the application:
```bash
docker-compose down
```

### Option 2: Run Locally

Run the Flask application directly:
```bash
python app.py
```

Then open your browser and navigate to:
```
http://localhost:5000
```

### Development Mode

To enable debug mode for development (not recommended for production):
```bash
FLASK_DEBUG=true python app.py
```

**Security Note:** Debug mode is disabled by default. Never enable debug mode in production as it may allow attackers to run arbitrary code.

## File Structure
```
SimpleTimer/
├── app.py              # Flask application
├── config.json         # Configuration file
├── requirements.txt    # Python dependencies
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose configuration
├── .dockerignore       # Docker ignore file
├── templates/
│   └── index.html     # HTML template
└── static/
    ├── style.css      # Stylesheet
    └── script.js      # Countdown logic
```

## License
This is a proof of concept project.
