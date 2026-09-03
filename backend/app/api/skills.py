from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.api.deps import get_db
from app.models.skill import Skill
from app.schemas.skill import SkillCreate, SkillResponse

router = APIRouter()

# 1. CREATE SKILL (POST Method)
@router.post("/skills", response_model=SkillResponse)
def create_skill(skill: SkillCreate, db: Session = Depends(get_db)):
    # Check if the skill already exists
    existing_skill = db.query(Skill).filter(Skill.name == skill.name).first()
    if existing_skill:
        raise HTTPException(
            status_code=400,
            detail=f"Skill already exists"
        )

    # Convert Pydantic schema to SQLAlchemy model
    # .model_dump() converts the schema to a dictonary, (e.g., {"name":"Python","category":"Programming Language"})
    new_skill = Skill(**skill.model_dump())
    db.add(new_skill) # Add to the database session
    db.commit() # Save changes
    db.refresh(new_skill) # Fetch the latest data (with new ID) from the DB
    return new_skill


# 2. GET ALL SKILLS (GET Method)
@router.get("/skills", response_model=List[SkillResponse])
def get_all_skills(db: Session = Depends(get_db)):
    skills = db.query(Skill).all()
    return skills