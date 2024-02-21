import React from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const VarianceIndicator = ({ actual, goal, size }) => {
  const variance = ((actual - goal) / goal) * 100;
  const formattedVariance = 
    size === 'small' && variance < 0 
    ? variance.toFixed(1).substring(1) // Remove the negative sign for small size
    : variance.toFixed(1);

  const isSuccess = actual >= goal;
  const iconSize = size === 'large' ? 'large' : 'small';
  const fontSize = size === 'large' ? '1em' : '0.8em';
  const color = isSuccess ? '#64B864' : '#DA615C';

  return (
    <div style={{ display: 'flex', alignItems: 'center', color: color }}>
      {variance < 0 ? (
        <ArrowDownwardIcon fontSize={iconSize} style={{ marginRight: '-4px' }} />
      ) : (
        <ArrowUpwardIcon fontSize={iconSize} style={{ marginRight: '-4px' }} />
      )}
      <span style={{ marginLeft: '2px', fontSize: fontSize }}>{`${formattedVariance}%`}</span>
    </div>
  );
};

export default VarianceIndicator;
