from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Naseem Tahir Portfolio"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    # The database URL will be provided through the .env file later
    # For now, we are using a default value
    DATABASE_URL: str = "postgresql+psycopg://user:password@localhost/dbname"
    GROQ_API_KEY: str = ""

    class Config:
        env_file = ".env"


# Create a single settings instance to use thoughout the application.
settings = Settings()