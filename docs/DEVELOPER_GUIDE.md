# Developer Guide

Welcome to the Enterprise AI Assistant developer guide.

## Code Standards

- **TypeScript**: Always use strict typing. Avoid `any`.
- **Python**: Use type hints for all function arguments and return types. Use Pydantic for validation.
- **Components**: Write reusable, compositional React components. Use shadcn/ui patterns.
- **API**: Keep controllers thin. Move business logic to the `services` layer.

## Adding a New Agent

1. Define the agent's state in `backend/agents/states/`.
2. Create the agent's logic in `backend/agents/nodes/`.
3. Register the agent in the LangGraph workflow in `backend/agents/workflow.py`.
4. Add any required tools to `backend/tools/`.

## Running Tests

### Frontend
```bash
npm run test
npm run lint
```

### Backend
```bash
cd backend
pytest
```
