# Save a dictionary into a pickle file.
import pickle, sys
from datetime import datetime
from os.path import exists

PICKLE_FILE_PATH = "db.p"

# purchase == {
#     "time": datetime.now()
#     "brands": ["DWR", "RH"]
# }
def validatePurchase(purchase):
    assert(purchase.get("time"))
    assert(purchase.get("brands"))

def addPurchase(purchase):
    # Validation step
    validatePurchase(purchase)

    # Update db
    db_file_exists = exists(PICKLE_FILE_PATH)
    existingBrandsList = []
    if (db_file_exists):
        existingBrandsList = pickle.load( open(PICKLE_FILE_PATH, "rb" ) )

    existingBrandsList = existingBrandsList + purchase
    pickle.dump( existingBrandsList, open(PICKLE_FILE_PATH, "wb" ) )


def getBrandsList():
    db_file_exists = exists(PICKLE_FILE_PATH)
    if (db_file_exists):
        existingBrandsList = pickle.load( open(PICKLE_FILE_PATH, "rb" ) )
        return existingBrandsList
    return []
