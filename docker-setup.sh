#!/usr/bin/env bash
# Docker Setup Script
# Regenerates package-lock.json and starts Docker services

set -e  # Exit on error

echo "🔧 Setting up Docker environment..."

# Load nvm if it exists (common Node version manager)
if [ -s "$HOME/.nvm/nvm.sh" ]; then
    echo "📌 Loading nvm..."
    source "$HOME/.nvm/nvm.sh"
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ npm not found. Please ensure Node.js is installed."
    exit 1
fi

echo "✅ Found npm: $(npm --version)"
echo "✅ Found node: $(node --version)"

# Step 1: Install dependencies locally (updates package-lock.json)
echo ""
echo "📦 Installing dependencies and updating package-lock.json..."
npm install

# Step 2: Commit the updated lock file
echo ""
echo "💾 Committing updated package-lock.json..."
git add package-lock.json
if git diff --cached --quiet; then
    echo "ℹ️  No changes to package-lock.json, skipping commit"
else
    git commit -m "chore: update package-lock.json for Express dependencies"
fi

# Step 3: Start Docker services
echo ""
echo "🐳 Starting Docker services..."
docker-compose up --build

echo ""
echo "✅ Docker setup complete!"
echo "   Frontend: http://localhost:5173"
echo "   Backend:  http://localhost:3001"
