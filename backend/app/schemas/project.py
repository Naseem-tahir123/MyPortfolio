from pydantic import BaseModel,  ConfigDict
from typing import List, Optional

class ProjectBase(BaseModel):
    title: str
    description: str
    case_study: str
    tech_stack: List[str]
    github_url: Optional[str] = None # Optional means this field can be null
    demo_video_url: Optional[str] = None
    live_url: Optional[str] = None
    is_featured: bool = False


class ProjectCreate(ProjectBase):
    pass


class ProjectResponse(ProjectBase):
    id: int
    model_config = ConfigDict(from_attributes=True)