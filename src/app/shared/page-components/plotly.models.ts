export interface PlotlyBarChartData {
    x: (string | number)[];
    y: (string | number)[];
    title: string;
    height: number;
    orientation: 'v' | 'h';
    margin?: PlotlyChartMargin
}

export interface PlotlyChartMargin {
    l: number;
    r: number;
    b: number;
    t: number;
    pad: number;
}