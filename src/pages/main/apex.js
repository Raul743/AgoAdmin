import Chart from 'react-apexcharts'
import React,{useState} from 'react'


export default function IssApexCharts(props) {
    const [state,setState] = useState({
      options:props.options,
      series:props.series,
    })

    return (
      <div className={props.type}>
        <Chart
          options={state.options}
          series={state.series}
          type={props.type}
          height={props.height}
          width={props.width}
          {...props}
        />
      </div>
    )
}


IssApexCharts.defaultProps = {
  type:"bar",
  width:"100%",
  height:"100%",
  background:"#f4f4f4",
  forecolor:"#333",
  options:{
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      categories: [1991,1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  },
  series: [{
    name: 'Population',
    data: [30,30, 40, 45, 50, 49, 60, 70, 99]
  }],
  

}
