from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def health_check():
    """
    Check if the API is running.
    """
    return {"status": "ok", "version": "1.0.0"}
