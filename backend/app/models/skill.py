from sqlalchemy import String, Integer
from sqlalchemy.orm import Mapped, mapped_column
from app.core.database import Base

class Skill(Base):
    __tablename__ = "skills"
    # mapped_column is a new way to define columns in SQLAlchemy 2.0, providing better type safety and clarity.
    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)

    name: Mapped[str] = mapped_column(String(50), unique=True, index=True)
    # Categories like "AI/ML", "Web Development", "Data Science", etc. can be used to group skills and make it easier for users to navigate through the portfolio.
    category: Mapped[str] = mapped_column(String(50))

    # Top skill flag to indicate if the skill is a core strength of the user. This can be used to highlight key skills in the portfolio.
    is_core_strength: Mapped[bool] = mapped_column(default  =False)