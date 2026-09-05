import sys
import os

# To add the root folder to the Python path so that the app module can be found
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.main import app