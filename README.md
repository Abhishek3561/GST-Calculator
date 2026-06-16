# GST Calculator

A modern GST Calculator built using React and Vite that allows users to quickly calculate GST amounts and final prices. The tool supports both GST addition and GST removal calculations with an intuitive user interface.

## Features

* Calculate GST instantly
* Add GST to a base amount
* Remove GST from an inclusive amount
* Supports common GST slabs:

  * 5%
  * 12%
  * 18%
  * 28%
* Responsive design for desktop and mobile devices
* Clean and modern user interface
* Real-time accurate calculations

## Tech Stack

* React
* Vite
* JavaScript
* CSS3

## Live Demo

Vercel deployment URL here:

https://gst-calculator-rho.vercel.app/

## Installation

Clone the repository:

```bash
git clone https://github.com/Abhishek3561/GST-Calculator
```

Navigate to the project folder:

```bash
cd gst-calculator
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

## Project Structure

```text
src/
├── App.jsx
├── App.css
├── main.jsx
```

## How It Works

### Add GST

Formula:

GST Amount = (Amount × GST Rate) / 100

Total Amount = Amount + GST Amount

### Remove GST

Formula:

Base Amount = Inclusive Amount / (1 + GST Rate / 100)

GST Amount = Inclusive Amount − Base Amount

## Author

Abhishek Tyagi


## Project Purpose

This project was built as part of a developer trial task to demonstrate:

* React fundamentals
* State management using hooks
* UI design skills
* GitHub workflow
* Vercel deployment
* Problem-solving ability

## License

This project is open source and available for educational purposes.
