import { select, BaseType } from 'd3-selection';
import { addTimelineTriangleMarker } from './addTimelineTriangleMarker';



export function initializeRender(parentSelector: string) {
  const parent = select(parentSelector);
  const svg = parent.append('svg')
    .attr('width', 1200)
    .attr('height', 500)

  addTimelineTriangleMarker(svg);
}

        