from web3 import Web3
import pymongo
import os

w3 = Web3(Web3.HTTPProvider(f'https://mainnet.infura.io/v3/{os.getenv("INFURA_PROJECT_ID")}'))
mongo = pymongo.MongoClient(os.getenv("MONGODB_URI"))
db = mongo["eigeneye"]

# Fetch and parse events, then insert into MongoDB
# Example:
# db.restakers.insert_one({ "user": ..., "amount": ..., "operator": ... })
