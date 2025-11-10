# Use Python 3.11 slim image as base
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy requirements first to leverage Docker cache
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application files
COPY app.py .
COPY config.json .
COPY templates/ templates/
COPY static/ static/

# Expose port 5000
EXPOSE 5000

# Run the application
CMD ["python", "app.py"]
