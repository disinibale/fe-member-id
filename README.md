# Frontend Application

This frontend application is built using React.js and `react-router-dom`. It provides authentication, award filtering, and implements lazy-loading with infinite scroll.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/disinibale/fe-member-id.git
cd fe-member-id
```

### Install the node Modules packages
```
npm install
```

### Setting up the environment variable
```
cp .env.example .env
```
Change the `VITE_BASE_URL` to your running backend instances, by default the backend application runs at `http://localhost:8000/api/v1`.

### Running the application
To run the application, you could just simply copy this command to your terminal/command prompt.
``` bash
npm run dev
```