# Simple Carousel Component

## Getting Started

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js and npm (Node Package Manager)

### Cloning the Repository

To get started, clone the project's repository to your local machine using the following Git command:

```bash
git clone https://github.com/k-vassilev/carousel.git
```

## Running the Project

Once the project's dependencies are installed, you can start the development server by running the following command:

```
npm run dev
```

This will launch the development server, and you can access the carousel component in your web browser at `http://localhost:3000` (or another port if specified).

## Customization

The Simple Carousel Component is customizable. You can adjust its appearance and behavior using the following props:

- `slides` (array of objects): An array of objects, where each object should contain a `url` property with the URL of the image to display in the slide.

- `width` (string): The width of the carousel container. The default value is `"500px"`.

- `height` (string): The height of the carousel container. The default value is `"280px"`.

- `sensitivity` (number): The sensitivity of the swipe gesture for navigating between slides. A higher value makes it more sensitive. The default value is `50`.
