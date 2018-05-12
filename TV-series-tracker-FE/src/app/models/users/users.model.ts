import { TVSeriesViewModel } from "../tvSeries/tvseries-view.model";
import { TVSerieDateModel } from "../tvseriesdates/tvseriedate.model";

export class UserModel {
    id: number;
    username: string;
    email: string;
    usertype: number;
    watching: TVSeriesViewModel[]; //pervadinti į watching ??
    watched: TVSerieDateModel[];
}