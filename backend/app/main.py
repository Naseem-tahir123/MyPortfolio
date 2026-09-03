from fastapi import FastAPI
from app.core.config import settings
from app.api import health, projects, skills
from app.core.database import engine, Base
from app.models import *  # Import all models  

# Initialize the FastAPI application
app = FastAPI(
    title = settings.PROJECT_NAME,
    version = settings.VERSION,
    openapi_url = f"{settings.API_V1_STR}/openapi.json"

)

# Include the routes in the FastAPI application
app.include_router(
    health.router,
    prefix = settings.API_V1_STR,
    tags = ["Health"]
)
app.include_router(
    projects.router,
    prefix = settings.API_V1_STR,
    tags = ["Projects"]
)
app.include_router(
    skills.router,
    prefix = settings.API_V1_STR,
    tags = ["Skills"]
)
 


@app.get("/")
def root():
    return{
        "message": "Welcome to Naseem's Portfolio Backend!"
    }
