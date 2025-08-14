import { Injectable } from "@angular/core";
import { TasteProfile } from "./coffee.models";
import { PlotlyBarChartData } from "../../shared/page-components/plotly.models";
import { sum } from "lodash";

@Injectable({ providedIn:'root' })
export class CoffeeChartService {

    getTasteProfileChart(tasteProfile: TasteProfile, title: string, height: number, orientation: 'v' | 'h'): PlotlyBarChartData | undefined {
        let data: {x: string, y: number}[] = [];
        for(const [key, value] of Object.entries(tasteProfile)){
            if(value !== 0){
                let keyName = '';
                switch(key){
                    case 'acidity':
                        keyName = 'Acidity';
                        break;
                    case 'bitterness':
                        keyName = 'Bitterness';
                        break;
                    case 'roastiness':
                        keyName = 'Roastiness';
                        break;
                    case 'body':
                        keyName = 'Body';
                        break;
                    case 'milkyTaste':
                        keyName = 'Milky Taste';
                        break;
                    case 'bitternessWithMilk':
                        keyName = 'Bitterness with Milk';
                        break;
                    case 'creamyTexture':
                        keyName = 'Creamy Texture';
                        break;
                    default:
                        break;
                }
                const result: {x: string, y: number} = {
                    x: keyName,
                    y: value,
                };
                data.push(result);
            }
        }

        const chartData: PlotlyBarChartData = {
            x:data.map((item: {x: string, y: number}) => item.x),
            y:data.map((item: {x: string, y: number}) => item.y),
            title: title,
            height: height,
            orientation: orientation,
        }

        if(sum(chartData.y) === 0){
            return undefined;
        }
        return chartData;
    }
}