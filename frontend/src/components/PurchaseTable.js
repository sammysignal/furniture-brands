import React, { Component } from "react";

class PurchaseTable extends Component {
  render() {
    return (
      <table id='purchases'>
        <thead>
          <tr>
            <td>Purchase Time</td>
            <td>Brands</td>
          </tr>
        </thead>
        <tbody>
          {this.props.purchases.map((purchase) => (
            <tr key={purchase.time}>
              <td>{purchase.time}</td>
              <td>{purchase.brands}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default PurchaseTable;
