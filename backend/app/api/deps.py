from typing import Generator
from app.core.database import SessionLocal

def get_db() -> Generator:
    # Open a new database session
    db = SessionLocal()
    try:
        # Provide the database session to the API endpoint
        yield db
    finally:
        # Close the database session after the request is completed
        db.close()
    