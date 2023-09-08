import type { Shape } from '../../config';
import type { RA } from '../../lib/types';

export type RendererProps = {
  readonly board: RA<RA<Shape>>;
  readonly score: number;
  readonly nextShape: Shape;
};

export type Renderer = (props: RendererProps) => JSX.Element;
