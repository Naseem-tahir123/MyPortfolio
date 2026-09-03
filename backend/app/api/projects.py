from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.api.deps import get_db
from app.models.project import Project
from app.schemas.project import ProjectCreate, ProjectResponse

router = APIRouter()

# 1. CREATE PROJECT (POST Method)
@router.post("/projects", response_model=ProjectResponse)
def create_project(project: ProjectCreate, db: Session = Depends(get_db)):
    # Check if the project already exists
    existing_project = db.query(Project).filter(Project.title == project.title).first()
    if existing_project:
        raise HTTPException(
            status_code=400,
            detail = f"Project already exists"
        )

    # Convert Pydantic schema to SQLAlchemy model
    # .model_dump() converts the schema to a dictionary, (e.g., {"title
    new_project = Project(**project.model_dump())
    db.add(new_project) # Add to the database session
    db.commit() # Save changes
    db.refresh(new_project) # Fetch the latest data (with new ID) from the DB
    return new_project

# 2. GET ALL PROJECTS (GET Method)
@router.get("/projects", response_model=list[ProjectResponse])
def get_all_projects(db: Session = Depends(get_db)):
    projects = db.query(Project).all()
    return projects