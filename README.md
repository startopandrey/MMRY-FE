<img align="right" width="360px" height="410px" src="./.github/assets/project-logo-vertical.png">

# MMRY Web app

## Table of Contents

  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#-getting-started)
  - [Deployment](#-deployment)
  - [Styling and Design System](#-styling-and-design-system)
    - [CVA - A New Approach to Variants](#cva---a-new-approach-to-variants)
  - [State Management](#-state-management)
    - [Zustand](#zustand)
    - [Jotai](#jotai)
    - [Recoil](#recoil)
  - [ChatGPT Code Review](#-chatgpt-code-review)
  - [Environment Variables handling](#-environment-variables-handling)
  - [Contribution](#-contribution)
  - [Support](#support)
  - [License](#-license)
  - [Contributors](#contributors)

## 🎯 Getting Started

To get started follow these steps:

1. Fork & clone repository:

```bash
## Don't forget to ⭐ star and fork it first :)
git clone https://github.com/startopandrey/MMRY-FE
```

2. Install the dependencies:

```bash
yarn install --frozen-lockfile
```

3. Run the development server:

```bash
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## 🚀 Deployment

Easily deploy your Next.js app with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=github&utm_campaign=next-enterprise) by clicking the button below:

[![Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise)

## 📃 Scripts Overview

The following scripts are available in the `package.json`:

- `dev`: Starts the development server with colorized output
- `build`: Builds the app for production
- `start`: Starts the production server
- `lint`: Lints the code using ESLint
- `lint:fix`: Automatically fixes linting errors
- `prettier`: Checks the code for proper formatting
- `prettier:fix`: Automatically fixes formatting issues
- `analyze`: Analyzes the bundle sizes for Client, Server and Edge environments
- `storybook`: Starts the Storybook server
- `build-storybook`: Builds the Storybook for deployment
- `test`: Runs unit and integration tests
- `e2e:headless`: Runs end-to-end tests in headless mode
- `e2e:ui`: Runs end-to-end tests with UI
- `format`: Formats the code with Prettier
- `postinstall`: Applies patches to external dependencies
- `preinstall`: Ensures the project is installed with Yarn
- `coupling-graph`: **Generates a coupling and cohesion graph for the components**

## 🔗 Coupling Graph

The `coupling-graph` script is a useful tool that helps visualize the coupling and connections between your project's internal modules. It's built using the [Madge](https://github.com/pahen/madge) library. To generate the graph, simply run the following command:

```bash
yarn coupling-graph
```

This will create a `graph.svg` file, which contains a graphical representation of the connections between your components. You can open the file with any SVG-compatible viewer.

![graph](https://user-images.githubusercontent.com/28964599/233662744-3ba89713-8466-49cd-9be7-e6fb38191f58.png)

