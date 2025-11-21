# Lumina E-Commerce Automation Project

This project demonstrates a complete test automation workflow for an e-commerce search functionality (**Projet 2**). It consists of a modern, custom-built e-commerce frontend and a comprehensive automated test suite using Robot Framework.

## 🛠️ Tech Stack

### Frontend (The Website)
*   **HTML5**: Semantic structure.
*   **CSS3**: Modern "Glassmorphism" design, responsive grid, and animations.
*   **JavaScript (Vanilla)**: Dynamic DOM manipulation and client-side search logic.

### Automation (The Tests)
*   **Robot Framework**: Keyword-driven testing framework.
*   **SeleniumLibrary**: Web testing library for browser automation.
*   **Python**: Underlying runtime for Robot Framework.

## 📂 Project Structure

```
projetTest/
├── ecommerce_project/
│   ├── website/          # The Application Under Test
│   │   ├── index.html    # Main storefront
│   │   ├── style.css     # Styling
│   │   └── script.js     # Search logic & Data
│   └── tests/            # Test Automation Code
│       ├── search_tests.robot  # Test Suite
│       └── resources.robot     # Reusable Keywords
└── results/              # Test Execution Reports (Log/Report)
```

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have Python installed, then install the required libraries:
```bash
pip install robotframework robotframework-seleniumlibrary
```

### 2. Running the Website
To view the website manually, you can open `ecommerce_project/website/index.html` in your browser, or serve it locally:
```bash
cd ecommerce_project/website
python3 -m http.server 8000
```
Access it at: `http://localhost:8000`

### 3. Running the Tests
Execute the Robot Framework test suite from the project root:
```bash
robot -d results ecommerce_project/tests/search_tests.robot
```

## 🧪 Test Scenarios Covered
1.  **Existing Product**: Verifies correct results for valid search terms.
2.  **Category Search**: Verifies filtering by product category (e.g., "Audio").
3.  **No Results**: Verifies the empty state message for invalid terms.
4.  **Partial Match**: Verifies fuzzy matching logic.
