import asyncio
import logging

from db.session import engine
from db.base_class import Base
import models # Make sure models are loaded

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

async def init_db() -> None:
    try:
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)
        logger.info("Successfully created database tables")
    except Exception as e:
        logger.error(f"Error creating database tables: {e}")
        raise e

async def main() -> None:
    logger.info("Initializing database")
    await init_db()
    logger.info("Database initialized")

if __name__ == "__main__":
    asyncio.run(main())
