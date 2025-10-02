#!/bin/bash

# Color codes for terminal output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}====================================${NC}"
echo -e "${GREEN}DevOps Arsenal Website Launcher${NC}"
echo -e "${BLUE}====================================${NC}"
echo -e "${CYAN}A beautiful UI for exploring DevOps tools collection${NC}"
echo -e "${BLUE}====================================${NC}"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}Error: Node.js not found. Please install Node.js (v14+) to continue.${NC}"
    echo -e "${YELLOW}Visit https://nodejs.org/en/download/ for installation instructions.${NC}"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}Error: npm not found. Please install npm to continue.${NC}"
    echo -e "${YELLOW}npm usually comes bundled with Node.js - visit https://nodejs.org/en/download/ for installation instructions.${NC}"
    exit 1
fi

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo -e "${BLUE}Installing dependencies...${NC}"
    npm install

    if [ $? -ne 0 ]; then
        echo -e "${RED}Failed to install dependencies. Please try again.${NC}"
        echo -e "${YELLOW}If the error persists, try manually running 'npm install' or check your internet connection.${NC}"
        exit 1
    fi

    echo -e "${GREEN}Dependencies installed successfully!${NC}"
else
    echo -e "${GREEN}Dependencies already installed.${NC}"
fi

# Display options
echo -e "\n${BLUE}Available commands:${NC}"
echo -e "1. ${GREEN}Start development server${NC} - Run the website in development mode with hot reloading"
echo -e "2. ${GREEN}Build for production${NC} - Create optimized production build"
echo -e "3. ${GREEN}Start production server${NC} - Run the optimized production build"
echo -e "4. ${GREEN}Lint code${NC} - Check for code quality and formatting issues"
echo -e "5. ${GREEN}Exit${NC} - Close this launcher"

# Prompt user for option
read -p "Enter option number: " option

case $option in
    1)
        echo -e "\n${BLUE}Starting development server...${NC}"
        echo -e "${CYAN}DevOps Arsenal will be available at:${NC}"
        echo -e "${YELLOW}http://localhost:3000${NC}"
        echo -e "${CYAN}Press Ctrl+C to stop the server when finished.${NC}"
        npm run dev
        ;;
    2)
        echo -e "\n${BLUE}Building for production...${NC}"
        echo -e "${CYAN}Creating optimized build for deployment...${NC}"
        npm run build
        ;;
    3)
        echo -e "\n${BLUE}Starting production server...${NC}"
        echo -e "${YELLOW}Make sure you've built the project first with option 2${NC}"
        echo -e "${CYAN}DevOps Arsenal (production build) will be available at:${NC}"
        echo -e "${YELLOW}http://localhost:3000${NC}"
        echo -e "${CYAN}Press Ctrl+C to stop the server when finished.${NC}"
        npm run start
        ;;
    4)
        echo -e "\n${BLUE}Linting code...${NC}"
        echo -e "${CYAN}Checking code quality and formatting...${NC}"
        npm run lint
        ;;
    5)
        echo -e "\n${BLUE}Exiting...${NC}"
        echo -e "${CYAN}Thanks for using DevOps Arsenal!${NC}"
        exit 0
        ;;
    *)
        echo -e "\n${RED}Invalid option.${NC}"
        echo -e "${YELLOW}Please select a number between 1-5.${NC}"
        exit 1
        exit 1
        ;;
esac
