import React from "react";
import DataTable from "../views/DataTable";

export default class DataTableContainer extends React.Component {
  constructor() {
    super();     
  }
  render() {   
    return (
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="section-content">
              <div className="section-title">Table Data Demonstration</div>
              <div className="mt-4">
                <div style={{ textAlign: "left", color: '#CCC000' }}>
                  <em>Tip: Hold and drag a column to another column to change the order</em>
                </div>
                <DataTable                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );  
  }
}
