export interface Destination extends NewDestination {
    id: string;
  }

  export interface NewDestination {
    name: string;
    description: string;
    difficulty: string;
    isFavorite: boolean;
  }
  
  export interface ApiResponse_DestiantionList {
    statusCode: number;
    data: Destination[];
  }

  export interface ApiResponse_DestinationDetail {
    statusCode: number;
    data: Destination;
  }