# Save a dictionary into a pickle file.
import pickle
import sys
from datetime import datetime
from os.path import exists

PICKLE_FILE_PATH = "api/db.p"

VALID_BRANDS = ["Design Within Reach", "Restoration Hardware", "West Elm"]

# purchase == {
#     "time": datetime.now()
#     "brands": ["DWR", "RH"]
# }


def validatePurchase(purchase):
    assert(type(purchase) is dict)
    assert("time" in purchase)
    assert(purchase.get("time"))
    assert("brands" in purchase)
    brands = purchase.get("brands")
    assert(brands)
    for i in range(len(brands)):
        assert(brands[i] in VALID_BRANDS)

# purchase == {
#     "time": datetime.now()
#     "brands": ["DWR", "RH"]
# }
def addPurchase(purchase):
    # Validation step
    validatePurchase(purchase)

    # Update db
    db_file_exists = exists(PICKLE_FILE_PATH)
    existingBrandsList = []
    if (db_file_exists):
        existingBrandsList = pickle.load(open(PICKLE_FILE_PATH, "rb"))

    existingBrandsList.append(purchase)

    pickle.dump(existingBrandsList, open(PICKLE_FILE_PATH, "wb"))


def getBrandsList():
    db_file_exists = exists(PICKLE_FILE_PATH)
    if (db_file_exists):
        existingBrandsList = pickle.load(open(PICKLE_FILE_PATH, "rb"))
        return existingBrandsList
    return []
