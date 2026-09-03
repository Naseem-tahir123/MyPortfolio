from pydantic import BaseModel, ConfigDict

# 1. Base Schema (Common fields)
class SkillBase(BaseModel):
    name: str
    category: str
    is_core_strength: bool = False

# 2. Create Schema (For receiving data from the user)
class SkillCreate(SkillBase):
    pass

# 3. Response Schema (For sending data back to the user)
class SkillResponse(SkillBase):
    id: int
    # This line tells Pydantic that if the data comes in the form of a SQLAlchemy Model (Object),
    # It should automatically convert it to JSON.
    model_config = ConfigDict(from_attributes=True)