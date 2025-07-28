import React from 'react';

const Star = ({ color }) => {
  return (
    <svg width="200" height="200" viewBox="-100 -100 200 200">
      <g transform="translate(0 5)">
        <g>
          <polygon
            points="0,0 36,-50 0,-100"
            fill={color || 'text-bermuda-200'}
          />
          <polygon
            points="0,0 -36,-50 0,-100"
            fill={color || 'text-bermuda-200'}
          />
        </g>
        <g transform="rotate(72)">
          <polygon
            points="0,0 36,-50 0,-100"
            fill={color || 'text-bermuda-200'}
          />
          <polygon
            points="0,0 -36,-50 0,-100"
            fill={color || 'text-bermuda-200'}
          />
        </g>
        <g transform="rotate(-72)">
          <polygon
            points="0,0 36,-50 0,-100"
            fill={color || 'text-bermuda-200'}
          />
          <polygon
            points="0,0 -36,-50 0,-100"
            fill={color || 'text-bermuda-200'}
          />
        </g>
        <g transform="rotate(144)">
          <polygon
            points="0,0 36,-50 0,-100"
            fill={color || 'text-bermuda-200'}
          />
          <polygon
            points="0,0 -36,-50 0,-100"
            fill={color || 'text-bermuda-200'}
          />
        </g>
        <g transform="rotate(-144)">
          <polygon
            points="0,0 36,-50 0,-100"
            fill={color || 'text-bermuda-200'}
          />
          <polygon
            points="0,0 -36,-50 0,-100"
            fill={color || 'text-bermuda-200'}
          />
        </g>
      </g>
    </svg>
  );
};

export default Star;
