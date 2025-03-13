# AI Text Summarizer Chrome Extension

## Overview

The **AI Text Summarizer** is a Chrome extension that allows users to quickly summarize selected text on any webpage using OpenAI's API. This extension provides a convenient way to condense long passages into concise summaries, making it ideal for students, researchers, and professionals who need quick insights.

It was written in conjunction with an article on the Software Sushi blog detailing the creation of a Chrome Extension that makes use of OpenAI's API.

## Features

- Summarizes selected text on any webpage
- Uses OpenAI's API for high-quality text summarization
- Lightweight and fast, built with React and Vite
- Simple and intuitive UI for ease of use

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-repository>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the extension:
   ```bash
   npm run build
   ```
4. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `dist` folder in your project repo that was generated after step 3.

## Usage

1. Select text on any webpage.
2. Click the extension icon in the Chrome toolbar.
3. The summarized text will appear in the popup.

## Technologies Used

- **React** – for building the UI
- **Vite** – for fast development and bundling
- **OpenAI API** – for generating text summaries

## Configuration

To use OpenAI's API, create a `.env` file in the root directory and add your API key:

```env
VITE_OPENAI_API_KEY=your-api-key-here
```
