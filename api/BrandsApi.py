from flask_restful import Api, Resource, reqparse
from .db import addPurchase, getBrandsList

class BrandsApi(Resource):
    def purchaseToReadablePurchase(p):
        return {"time": str(p.get("time")), "brands": p.get("brands")}

    # Get existing purchases list
    def get(self):
        # db call
        existingBrandsList = getBrandsList()

        result = list(map(self.purchaseToReadablePurchase, existingBrandsList))

        return getBrandsList()

    def post(self):
        print(self)
        parser = reqparse.RequestParser()
        parser.add_argument('firstName', type=str)
        parser.add_argument('lastName', type=str)

        args = parser.parse_args()

        print(args)
        # note, the post req from frontend needs to match the strings here (e.g. 'type and 'message')

        firstName = args['firstName']
        lastName = args['lastName']

        final_ret = {"status": "Success", "message": firstName + " " + lastName}

        return final_ret
