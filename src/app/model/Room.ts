import { LazyRoute } from "@angular/compiler";

export class Room{
  id: number;
  name: string;
  location: string;
  capacities = Array<LayoutCapacity>();
}

export class LayoutCapacity {
  layout: Layout;
  capacity: number;
}

export enum Layout{
  THEATER = 'Theater',
  USHAPE ='U-SHape',
  BOARD ='Board'
}
