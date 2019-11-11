import React from 'react';
import GraphImgBlue from './line-chart-blue.svg';
import PieChartBlue from './pie-chart-blue.svg';

import GraphImgPink from './line-chart-pink.svg';
import PieChartPink from './pie-chart-pink.svg';
import styled from 'styled-components';
import NormalImg from 'components/Img';


const wrapper = {
  'display': 'flex',
  'gridColumn': 'span 4'

}

const title = {
  'fontSize': '20.5px',
  'marginBottom': '30px',
}



const count = {
  'width': '34px',
  'height': '16px',
  'fontSize': '25.5px',
  'fontWeight': 'normal',
  'fontStretch': 'normal',
  'fontStyle': 'normal',
  'lineHeight': 'normal',
  'letterSpacing': 'normal',
  'textAlign': 'center',
  'color': '#37394c',
  'marginRight': '10px',
}


const countTitle = {
  'width': '33px',
  'height': '14.5px',
  'fontFamily': 'Lato',
  'fontSize': '15.5px',
  'fontWeight': 'normal',
  'fontStretch': 'normal',
  'fontStyle': 'normal',
  'lineHeight': '1.93',
  'letterSpacing': '0.05px',
  'color': '#8a96a0',
}



const GraphImg = styled(NormalImg)`
width: 250px;
height: 86.5px;
display: block;
margin-top: 10px;
`;

const PieChart = styled(NormalImg)`
width: 100px;
height: 100px;
display: block;
margin-left: 50px;
margin-top: 80px;
`;

function Chart(props) {
  return (
    <div style={wrapper}>

      <div>
        <div style={title}>{props.title}</div>
        <span style={count}>{props.count}</span>
        <span style={countTitle}>Followers</span>
        <GraphImg src={props.color === 'blue' ? GraphImgBlue : GraphImgPink} alt="graph" />
      </div>

      <PieChart src={props.color === 'blue' ? PieChartBlue : PieChartPink} alt="graph" />

    </div>
  );
}

export default Chart;
