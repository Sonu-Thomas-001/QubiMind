# Architecture

The system follows a modern Clean Architecture approach, split into a Next.js frontend and a FastAPI backend.

## Frontend (Next.js 15)

- **App Router**: Uses standard Next.js 15 App router conventions.
- **State Management**: Zustand for global state, TanStack Query for server state.
- **Styling**: Tailwind CSS + shadcn/ui.

### Folder Structure
- `app/`: Next.js routes.
- `components/`: UI components (layout, ui, sections).
- `lib/`: Utility functions.
- `hooks/`: Custom React hooks.

## Backend (FastAPI)

- **Framework**: FastAPI (Python 3.12).
- **ORM**: SQLAlchemy with asyncpg.
- **Database**: PostgreSQL for relational data, Redis for caching and agent states.

### Folder Structure
- `api/`: API routes.
- `core/`: Config and security.
- `db/`: Database session and migrations.
- `models/`: SQLAlchemy models.
- `schemas/`: Pydantic schemas.
- `services/`: Business logic.
- `agents/`: LangGraph agent definitions.
- `rag/`: Document ingestion and retrieval.

## Deployment

- Docker and Docker Compose for local development and self-hosting.
- CI/CD pipeline via GitHub Actions.
