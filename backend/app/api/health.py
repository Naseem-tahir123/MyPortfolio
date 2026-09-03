from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.core.config import settings
from app.api.deps import get_db

# APIRouter allows us to organize and keep our routes in separate files.
router = APIRouter()

@router.get("/health")
def health_check(db: Session = Depends(get_db)):
    # Try to test the database connection
    try:
        # Execute a raw SQL query to verify that the database is accessible
        db.execute(text("SELECT 1"))
        db_status = "connected"
    except Exception as e:
        # Return the error message if the database connection fails
        db_status = f"disconnected (Error: {str(e)})"

    
    return {
        "status": "ok",
        "project_name": settings.PROJECT_NAME,
        "message": "Naseem's Portfolio Backend is running smoothly!",
        "database_status": db_status
    }