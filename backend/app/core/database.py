from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase
from app.core.config import settings

#  1. Create the database engine
# echo = True means that every SQL query executed against the database
# will be printed in the terminal. This is especially useful for learning and debugging
engine = create_engine(settings.DATABASE_URL, echo=True)

# 2. Create a session factory
# autocommit = False: We will manually decide when to commit changes to the database.
# autoflush = False: SQLAlchemy will not automatically flush pending changes to the database.
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

# 3. Create the base class
# DeclaritiveBase is the recommended approach for defining models in SQLAlchemy 2.0.
class Base(DeclarativeBase):
    pass