import React from 'react';
import { useCountUp } from 'react-countup';

interface Props {
  year: number;
  commits: number;
}

function GitHubCommitDisplayPerYear(props: Props) {
  const id = 'counter-' + props.year;

  useCountUp({
    ref: id,
    end: props.commits,
    duration: 2.75,
    useEasing: true,
  });

  return (
    <div className='w-40 text-center my-4'>
      <div className='text-xs font-mono opacity-70'>{props.year}</div>
      <div className='text-2xl'>
        <span id={id}></span>
        {props.year === new Date().getFullYear() ? '+' : undefined}
      </div>
    </div>
  );
}

export default GitHubCommitDisplayPerYear;
