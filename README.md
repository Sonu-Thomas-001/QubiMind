# QubiMind

QubiMind is an enterprise-grade Multi-Agent AI Operating System developed by QubiQode. Built with Next.js, FastAPI, LangGraph, LangChain, RAG, PostgreSQL, Redis, and modern LLMs, it delivers intelligent automation, enterprise knowledge retrieval, AI agent collaboration, and scalable workflow orchestration through a secure, production-ready architecture.

## Features

- **Multi-Agent Collaboration**: Deploy swarms of specialized agents.
- **Enterprise RAG**: Ground agents in company knowledge bases.
- **Tool Calling**: Agents can trigger tools and APIs.
- **Human-in-the-Loop**: Interrupt nodes requiring explicit approval.
- **Bank-Grade Security**: SOC2 compliant infrastructure, RBAC, SSO.

## Getting Started

### Prerequisites

- Node.js 20+
- Python 3.12+
- Docker & Docker Compose

### Environment Setup

1. Copy `.env.example` to `.env`
2. Fill in the required environment variables.

### Running Locally (Docker)

```bash
docker-compose up --build
```

### Running Locally (Manual)

#### Frontend
```bash
npm install
npm run dev
```

#### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```
