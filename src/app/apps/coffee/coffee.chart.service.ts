import { Injectable } from "@angular/core";
import { TasteProfile } from "./coffee.models";
import { PlotlyBarChartData } from "../../shared/page-components/plotly.models";

@Injectable({ providedIn:'root' })
export class CoffeeChartService {

    getTasteProfileChart(tasteProfile: TasteProfile, title: string, height: number, orientation: 'v' | 'h'): PlotlyBarChartData {
        let data: {x: string, y: number}[] = [];
        for(const [key, value] of Object.entries(tasteProfile)){
            const result: {x: string, y: number} = {
                x: key,
                y: value,
            };
            data.push(result);
        }
        const chartData: PlotlyBarChartData = {
            x:data.map((item: {x: string, y: number}) => item.x),
            y:data.map((item: {x: string, y: number}) => item.y),
            title: title,
            height: height,
            orientation: orientation,
        }
        return chartData;
    }
}