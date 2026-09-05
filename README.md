# Naseem Tahir — AI Engineer Portfolio

A full-stack AI engineering portfolio featuring production-oriented LLM systems, hybrid RAG pipelines, and a cloud-native backend.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-naseemtahir--ai.vercel.app-10b981?style=for-the-badge\&logo=vercel\&logoColor=white)](https://naseemtahir-ai.vercel.app)
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge\&logo=fastapi\&logoColor=white)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/Frontend-React%2018-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)](https://react.dev/)
[![PostgreSQL](https://img.shields.io/badge/Database-Neon%20PostgreSQL-336791?style=for-the-badge\&logo=postgresql\&logoColor=white)](https://neon.tech/)
[![Groq](https://img.shields.io/badge/AI%20Engine-Groq%20Llama%203-F05032?style=for-the-badge\&logo=ai\&logoColor=white)](https://groq.com/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)](https://tailwindcss.com/)

**[Live Portfolio](https://naseemtahir-ai.vercel.app)** · **[API Documentation](https://naseemtahir-ai.vercel.app/docs)** · **[LinkedIn](https://linkedin.com/in/naseem-tahir-balti)**

## Overview

This project is more than a static portfolio. It is a full-stack application designed to demonstrate practical AI engineering, backend architecture, and production-ready development practices.

### Key Features

* **Full-stack architecture:** React 18 + Vite frontend with an asynchronous FastAPI backend.
* **Database-driven content:** Skills, projects, and metadata stored in Neon PostgreSQL using SQLAlchemy 2.0.
* **Grounded AI assistant:** Groq-powered Llama 3 agent that answers questions using a curated engineering knowledge base.
* **Hybrid RAG experience:** Demonstrates retrieval-based AI systems, including pgvector and BM25 concepts.
* **Migration management:** Version-controlled database schema changes with Alembic.
* **Performance-focused UI:** On-demand project videos and a responsive, component-based interface.

## Architecture

```text
React 18 + Vite + Tailwind CSS
              │
              ▼
       FastAPI REST API
              │
       ┌──────┴──────┐
       ▼             ▼
Neon PostgreSQL   Groq Llama 3
SQLAlchemy 2.0   Grounded AI Agent
Alembic          Conversation History
```

## Engineering Highlights

### Grounded AI Agent

* Endpoint: `/api/v1/chat/`
* Powered by Groq and `llama-3.3-70b-versatile`.
* Uses curated system context to provide relevant, experience-based responses.
* Maintains a sliding conversation history to preserve context within token limits.
* Includes optimistic UI updates and automatic chat scrolling.

### Project Case Studies

Projects are presented using an engineering-focused format:

**Problem → Approach → Architecture & Guardrails → Result**

Featured examples include:

* **Arca AI:** Internal HR chatbot using hybrid RAG and security guardrails.
* **TBB Travel Assistant:** FAQ retrieval system built with PostgreSQL, pgvector, and Cohere embeddings.

### Database & Backend

* SQLAlchemy 2.0 declarative models.
* Alembic migrations for version-controlled schema changes.
* FastAPI dependency injection for database session management.
* Pydantic V2 for request validation and response serialization.

## Tech Stack

| Layer           | Technology              |
| --------------- | ----------------------- |
| Frontend        | React 18, Vite          |
| Styling         | Tailwind CSS            |
| Icons & Media   | Lucide React            |
| HTTP Client     | Axios                   |
| Backend         | FastAPI, Uvicorn        |
| Validation      | Pydantic V2             |
| Database        | Neon PostgreSQL         |
| ORM             | SQLAlchemy 2.0          |
| Migrations      | Alembic                 |
| AI              | Groq Cloud SDK, Llama 3 |
| Package Manager | uv                      |
| Deployment      | Vercel                  |

## Project Structure

```text
naseem-ai-portfolio/
├── backend/
│   ├── alembic/              # Database migrations
│   ├── app/
│   │   ├── api/              # API routes
│   │   ├── core/             # Configuration, database, AI context
│   │   ├── models/           # SQLAlchemy models
│   │   ├── schemas/          # Pydantic schemas
│   │   └── main.py           # FastAPI application
│   ├── pyproject.toml
│   ├── requirements.txt
│   └── vercel.json
│
└── frontend/
    ├── src/
    │   ├── components/       # UI components
    │   ├── pages/            # Application pages
    │   ├── services/         # API communication
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── tailwind.config.js
    └── vercel.json
```

## API Reference

All endpoints are prefixed with `/api/v1`.

| Method | Endpoint     | Description                     |
| ------ | ------------ | ------------------------------- |
| GET    | `/health`    | Check API and database health   |
| GET    | `/skills/`   | Retrieve skills                 |
| POST   | `/skills/`   | Create a skill                  |
| GET    | `/projects/` | Retrieve project case studies   |
| POST   | `/projects/` | Create a project                |
| POST   | `/chat/`     | Ask the AI assistant a question |

Interactive Swagger documentation is available at `/docs`.

## Local Development

### Prerequisites

* Python 3.11+
* Node.js 18+
* uv and npm
* PostgreSQL database or a Neon connection string
* Groq API key

### 1. Clone the Repository

```bash
git clone https://github.com/Naseem-tahir123/naseem-ai-portfolio.git
cd naseem-ai-portfolio
```

### 2. Configure the Backend

```bash
cd backend
uv venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
uv sync
```

Create `backend/.env`:

```env
PROJECT_NAME="Naseem AI Portfolio API"
DATABASE_URL="postgresql+psycopg://<username>:<password>@<host>/<dbname>?sslmode=require"
GROQ_API_KEY="gsk_your_groq_api_key_here"
```

Run migrations:

```bash
alembic upgrade head
```

Start the API:

```bash
uvicorn app.main:app --reload --port 8000
```

* API: http://127.0.0.1:8000
* Swagger Docs: http://127.0.0.1:8000/docs

### 3. Configure the Frontend

Open a new terminal:

```bash
cd frontend
npm install
```

Optional: create `.env.local`:

```env
VITE_API_URL=http://localhost:8000/api/v1
```

Start the development server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`.

## Deployment

The project is designed for deployment on Vercel as two integrated projects.

### Backend

* **Root Directory:** `backend`
* **Framework Preset:** Other
* **Required Environment Variables:**

  * `DATABASE_URL`
  * `GROQ_API_KEY`

### Frontend

* **Root Directory:** `frontend`
* **Framework Preset:** Vite
* **Required Environment Variable:**

```env
VITE_API_URL=https://your-backend-api.vercel.app/api/v1
```

Deployment routing is configured through the respective `vercel.json` files.

## Author

**Naseem Tahir**
AI Engineer — LLMs, RAG Systems & Applied Machine Learning

* **Location:** Islamabad, Pakistan
* **Email:** [naseemtahir507@gmail.com](mailto:naseemtahir507@gmail.com)
* **LinkedIn:** [linkedin.com/in/naseem-tahir-balti](https://linkedin.com/in/naseem-tahir-balti)
* **GitHub:** [github.com/Naseem-tahir123](https://github.com/Naseem-tahir123)
* **Portfolio:** [naseemtahir-ai.vercel.app](https://naseemtahir-ai.vercel.app)

## License

This project is licensed under the MIT License.
