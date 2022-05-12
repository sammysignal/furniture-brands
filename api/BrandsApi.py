from flask_restful import Api, Resource, reqparse
from datetime import datetime
from .db import addPurchase, getBrandsList

def purchaseToReadablePurchase(p):
    return {"time": str(p.get("time")), "brands": p.get("brands")}


class BrandsApi(Resource):

    # Get existing purchases list
    def get(self):
        # db call
        existingBrandsList = getBrandsList()

        result = list(map(purchaseToReadablePurchase, existingBrandsList))
        return result

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('brands', action='append')
        args = parser.parse_args()
        brands = args['brands']
        print("receiving purchase...")
        print(brands)

        purchase = {
            "time": datetime.now(),
            "brands": brands
        }

        # db call
        addPurchase(purchase)

        final_ret = {"status": "Success", "message": str(brands)}

        return final_ret
