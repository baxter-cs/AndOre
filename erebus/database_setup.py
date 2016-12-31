from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
import config

Base = declarative_base()


# The table for user accounts.
class User(Base):
	__tablename__ = 'Users'
	pk = Column(Integer, primary_key=True)
	aid = Column(String())
	username = Column(String())
	hashed_password = Column(String())
	last_login = Column(DateTime)
	# The privilege of the user,
	# 0 = normal user,
	# 1 = chat moderator,
	# 2 = game moderator,
	# 3 = senior game moderator
	# 4 = qa
	# 5 = admin
	# 6 = senior admin
	privilege = Column(String())


# The new table for user accounts.
class UserV2(Base):
	__tablename__ = 'UsersV2'
	pk = Column(Integer, primary_key=True)
	aid = Column(String())
	username = Column(String())
	hashed_password = Column(String())
	last_login = Column(DateTime)
	# The privilege of the user,
	# 0 = banned user
	# 1 = normal user,
	# 2 = chat moderator,
	# 3 = game moderator,
	# 4 = senior game moderator
	# 5 = qa
	# 6 = admin
	# 7 = senior admin
	# 8 = Sleipnir
	# 9 = production access
	privilege_level = Column(String())


# Create an engine that stores data in the local directory's
# database.db file.
engine = create_engine(config.path_to_db())

# Create all tables in the engine. This is equivalent to "Create Table"
# statements in raw SQL.
Base.metadata.create_all(engine)
