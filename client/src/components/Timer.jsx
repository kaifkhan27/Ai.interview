import React from 'react';
import { Flat } from '@alptugidin/react-circular-progress-bar';

function Timer({ timeLeft, totalTime }) {
  const percentage = (timeLeft / totalTime) * 100;

  return (
    <div className='w-20 h-20'>
      <Flat
        progress={percentage}
        range={{ from: 0, to: 100 }}
        text={`${timeLeft}s`}
        showValue={false}
        sign={{ value: '', position: 'end' }}
        sx={{
          strokeColor: '#10b981',
          barWidth: 8,
          bgStrokeColor: '#e5e7eb',
          bgColor: { value: '#000000', transparency: '0' },
          shape: 'full',
          strokeLinecap: 'round',
          valueSize: 13,
          textSize: 16,
          valueColor: '#ef4444',
          textColor: '#ef4444',
          loadingTime: 300,
          valueAnimation: false,
        }}
      />
    </div>
  );
}

export default Timer;