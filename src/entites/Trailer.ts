export interface Trailer {
  id: number;
  name: string;
  preview: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: { 480: string; max: string };
}
