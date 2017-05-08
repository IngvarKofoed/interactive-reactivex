import { BaseType, Selection } from "@types/d3-selection";


export function addTimelineTriangleMarker<GElement extends BaseType, OldDatum>(element: Selection<GElement, {}, HTMLElement, any>): 
  Selection<GElement, {}, HTMLElement, any> {

  // <marker id="timeline-triangle"
  //   viewBox="0 0 20 20" refX="0" refY="10" 
  //   markerUnits="strokeWidth"
  //   markerWidth="8" markerHeight="6"
  //   orient="auto"
  //   style="fill:rgb(80,80,80);stroke:rgb(80,80,80);">          
  //   <path d="M 0 0 L 20 10 L 0 20 z" />
  // </marker>
  element.append('marker')
    .attr('id', 'timeline-triangle')
    .attr('viewBox', '0 0 20 20')
    .attr('refX', 0)
    .attr('refY', 10)
    .attr('markerUnits', 'strokeWidth')
    .attr('markerWidth', '8')
    .attr('markerHeight', '6')
    .attr('orient', 'auto')
    .attr('style', 'fill:rgb(80,80,80);stroke:rgb(80,80,80);')
    .append('path')
    .attr('d', 'M 0 0 L 20 10 L 0 20 z');

  return element;
}