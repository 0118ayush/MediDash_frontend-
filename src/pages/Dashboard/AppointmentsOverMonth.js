import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class AppointmentsOverMonth extends Component {
  state = {
    dataLine: {
      labels: [],
      datasets: [
        {
          label: "Number of Appointments",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgb(35, 26, 136)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(35, 26, 136)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: []
        }
      ]
    }
  };

  componentDidMount() {
    this.setState({
      dataLine: {
        ...this.state.dataLine,
        labels: this.props.currentMonthAppointments.map(
          (dailyTotal, index) => index + 1
        ),
        datasets: [
          {
            ...this.state.dataLine.datasets[0],
            data: this.props.currentMonthAppointments
          }
        ]
      }
    });
  }

  render() {
    // debugger;

    return (
      <MDBContainer>
        <h3 className="mt-5" align="center">Appointments over month</h3>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default AppointmentsOverMonth;
