import { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import * as venn from '@upsetjs/venn.js';

interface Props {
  sets: { sets: string[]; size: number }[];
  width?: number;
  height?: number;
}

const VennThreeDiagram = ({ sets, width = 400, height = 400 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const chart = venn.VennDiagram().width(width).height(height);
    const selection = d3.select(ref.current);
    selection.selectAll('*').remove(); // clear previous render

    selection.datum(sets).call(chart);

    selection
      .selectAll('g')
      .on('mouseenter', (event, d) => {
        venn.sortAreas(selection, d);
        selection
          .selectAll('g')
          .transition()
          .style('opacity', (p) =>
            p.sets.join() === d.sets.join() ? 1 : 0.3
          );
      })
      .on('mouseleave', () => {
        selection.selectAll('g').transition().style('opacity', 1);
      });
  }, [sets, width, height]);

  return <div ref={ref} className="mx-auto" />;
};

export default VennThreeDiagram;
