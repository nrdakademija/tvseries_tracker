import { TVSerieDateModel } from "../tvseriesdates/tvseriedate.model";

export class TVSerieModel {
    id: number;
    name: string;
    seriesYear: number;
    seasons: number;
    enddate: number;
    description: string;
    genre: number;
    tvSerieDate: TVSerieDateModel[];
}