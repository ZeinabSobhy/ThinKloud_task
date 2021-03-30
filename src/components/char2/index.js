import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage2 extends React.Component {
  state = {
  
    dataPie: {
      labels: ["Nokia", "Samsung", "Apple", "Sony",],
      datasets: [
        {
          data: [2005, , 2006, 2014, 2015],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
           
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
           
          ]
        }
      ]
    }
  }

  render() {
    return (
      <MDBContainer style={{  width: '50%',
      height: '100px',
       }}>
        <h4 className="mt-5">Pie chart</h4>
        <Pie data={this.state.dataPie} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default ChartsPage2;