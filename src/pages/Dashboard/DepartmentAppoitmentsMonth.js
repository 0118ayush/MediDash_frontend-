import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class DepartmentAppoitmentsMonth extends Component {
  state = {
    dataBar: {
      labels: ["Cardiology", "Neurological", "Anatomical", "Physiological"],
      datasets: [
        {
          labels: [],
          data: [12, 19, 3, 5],
          backgroundColor: [
            "rgba(255, 134,159,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(255, 218, 128,0.4)",
            "rgba(113, 205, 205,0.4)",
            "rgba(170, 128, 252,0.4)",
            "rgba(255, 177, 101,0.4)"
          ],
          borderWidth: 2,
          borderColor: [
            "rgba(255, 134, 159, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(255, 218, 128, 1)",
            "rgba(113, 205, 205, 1)",
            "rgba(170, 128, 252, 1)",
            "rgba(255, 177, 101, 1)"
          ]
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  };

  getNumberOfAppointments = department => {
    return this.props.currentMonthAppointments[department].reduce(
      (total, dailyTotal) => total + dailyTotal,
      0
    );
  };

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5" align="center">Departmental Appointments over Month</h3>
        <Bar
          data={{
            ...this.state.dataBar,
            datasets: [
              {
                ...this.state.dataBar.datasets[0],
                data: [
                  this.getNumberOfAppointments("Cardiological"),
                  this.getNumberOfAppointments("Neurological"),
                  this.getNumberOfAppointments("Anatomical"),
                  this.getNumberOfAppointments("Physiological")
                ]
              }
            ]
          }}
          options={this.state.barChartOptions}
        />
      </MDBContainer>
    );
  }
}

export default DepartmentAppoitmentsMonth;
