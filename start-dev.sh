#!/bin/bash

# Start development servers for both frontend and backend

echo "🚀 Starting eCommerce Development Servers..."
echo ""

# Check if we're in the project root
if [ ! -d "frontend" ] || [ ! -d "backend" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping servers..."
    kill $(jobs -p) 2>/dev/null
    exit
}

trap cleanup SIGINT SIGTERM

# Start backend
echo "📦 Starting Backend Server (Port 5000)..."
cd backend && npm run dev &
BACKEND_PID=$!

# Wait a bit for backend to start
sleep 3

# Start frontend
echo "🎨 Starting Frontend Server (Port 3000)..."
cd ../frontend && npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ Servers started successfully!"
echo "   Backend:  http://localhost:5000"
echo "   Frontend: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop all servers"

# Wait for both processes
wait