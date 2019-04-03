import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material.js";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  private chart: am4charts.XYChart;
  private chart_timeline: am4charts.XYChart;

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.chart.scrollbarX = new am4core.Scrollbar();

  }
  ngAfterViewInit() {
    // this.zone.runOutsideAngular(() => {
    //   let chart = am4core.create("chartdiv-requests__HR", am4charts.XYChart);
    //   chart.scrollbarX = new am4core.Scrollbar();

    //   chart.data = [{
    //     "country": "USA",
    //     "visits": 3025
    //   }, {
    //     "country": "China",
    //     "visits": 1882
    //   }, {
    //     "country": "Japan",
    //     "visits": 1809
    //   }, {
    //     "country": "Germany",
    //     "visits": 1322
    //   }, {
    //     "country": "UK",
    //     "visits": 1122
    //   }, {
    //     "country": "France",
    //     "visits": 1114
    //   }, {
    //     "country": "India",
    //     "visits": 984
    //   }, {
    //     "country": "Spain",
    //     "visits": 711
    //   }, {
    //     "country": "Netherlands",
    //     "visits": 665
    //   }, {
    //     "country": "Russia",
    //     "visits": 580
    //   }, {
    //     "country": "South Korea",
    //     "visits": 443
    //   }, {
    //     "country": "Canada",
    //     "visits": 441
    //   }];

    //   // Create axes
    //   let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    //   categoryAxis.dataFields.category = "country";
    //   categoryAxis.renderer.grid.template.location = 0;
    //   categoryAxis.renderer.minGridDistance = 30;
    //   categoryAxis.renderer.labels.template.horizontalCenter = "right";
    //   categoryAxis.renderer.labels.template.verticalCenter = "middle";
    //   categoryAxis.renderer.labels.template.rotation = 270;
    //   categoryAxis.tooltip.disabled = true;
    //   categoryAxis.renderer.minHeight = 110;

    //   let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    //   valueAxis.renderer.minWidth = 50;

    //   // Create series
    //   let series = chart.series.push(new am4charts.ColumnSeries());
    //   series.sequencedInterpolation = true;
    //   series.dataFields.valueY = "visits";
    //   series.dataFields.categoryX = "country";
    //   series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    //   series.columns.template.strokeWidth = 0;

    //   series.tooltip.pointerOrientation = "vertical";

    //   series.columns.template.column.cornerRadiusTopLeft = 10;
    //   series.columns.template.column.cornerRadiusTopRight = 10;
    //   series.columns.template.column.fillOpacity = 0.8;

    //   // on hover, make corner radiuses bigger
    //   let hoverState = series.columns.template.column.states.create("hover");
    //   hoverState.properties.cornerRadiusTopLeft = 0;
    //   hoverState.properties.cornerRadiusTopRight = 0;
    //   hoverState.properties.fillOpacity = 1;

    //   series.columns.template.adapter.add("fill", function (fill, target) {
    //     return chart.colors.getIndex(target.dataItem.index);
    //   });

    //   // Cursor
    //   chart.cursor = new am4charts.XYCursor();

    // })

    let chart_timeline = am4core.create("chartdiv-requests__TimeLine", am4charts.XYChart);

    chart_timeline.colors.step = 2;
    chart_timeline.maskBullets = false;

    // Add data
    chart_timeline.data = [{
      "date": "2012-01-01",
      "distance": 227,
      "townName": "New York",
      "townName2": "New York",
      "townSize": 12,
      "latitude": 40.71,
      "duration": 408
    }, {
      "date": "2012-01-02",
      "distance": 371,
      "townName": "Washington",
      "townSize": 7,
      "latitude": 38.89,
      "duration": 482
    }, {
      "date": "2012-01-03",
      "distance": 433,
      "townName": "Wilmington",
      "townSize": 3,
      "latitude": 34.22,
      "duration": 562
    }, {
      "date": "2012-01-04",
      "distance": 345,
      "townName": "Jacksonville",
      "townSize": 3.5,
      "latitude": 30.35,
      "duration": 379
    }, {
      "date": "2012-01-05",
      "distance": 480,
      "townName": "Miami",
      "townName2": "Miami",
      "townSize": 5,
      "latitude": 25.83,
      "duration": 501
    }, {
      "date": "2012-01-06",
      "distance": 386,
      "townName": "Tallahassee",
      "townSize": 3.5,
      "latitude": 30.46,
      "duration": 443
    }, {
      "date": "2012-01-07",
      "distance": 348,
      "townName": "New Orleans",
      "townSize": 5,
      "latitude": 29.94,
      "duration": 405
    }, {
      "date": "2012-01-08",
      "distance": 238,
      "townName": "Houston",
      "townName2": "Houston",
      "townSize": 8,
      "latitude": 29.76,
      "duration": 309
    }, {
      "date": "2012-01-09",
      "distance": 218,
      "townName": "Dalas",
      "townSize": 8,
      "latitude": 32.8,
      "duration": 287
    }, {
      "date": "2012-01-10",
      "distance": 349,
      "townName": "Oklahoma City",
      "townSize": 5,
      "latitude": 35.49,
      "duration": 485
    }, {
      "date": "2012-01-11",
      "distance": 603,
      "townName": "Kansas City",
      "townSize": 5,
      "latitude": 39.1,
      "duration": 890
    }, {
      "date": "2012-01-12",
      "distance": 534,
      "townName": "Denver",
      "townName2": "Denver",
      "townSize": 9,
      "latitude": 39.74,
      "duration": 810
    }, {
      "date": "2012-01-13",
      "townName": "Salt Lake City",
      "townSize": 6,
      "distance": 425,
      "duration": 670,
      "latitude": 40.75,
      "dashLength": 8,
      "alpha": 0.4
    }, {
      "date": "2012-01-14",
      "latitude": 36.1,
      "duration": 470,
      "townName": "Las Vegas",
      "townName2": "Las Vegas"
    }, {
      "date": "2012-01-15"
    }, {
      "date": "2012-01-16"
    }, {
      "date": "2012-01-17"
    }];

    // Create axes
    let dateAxis = chart_timeline.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 50;
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.renderer.fullWidthTooltip = true;

    let distanceAxis = chart_timeline.yAxes.push(new am4charts.ValueAxis());
    distanceAxis.title.text = "Distance";
    distanceAxis.renderer.grid.template.disabled = true;

    let durationAxis = chart_timeline.yAxes.push(new am4charts.DurationAxis());
    durationAxis.title.text = "Duration";
    durationAxis.baseUnit = "minute";
    durationAxis.renderer.grid.template.disabled = true;
    durationAxis.renderer.opposite = true;

    durationAxis.durationFormatter.durationFormat = "hh'h' mm'min'";

    let latitudeAxis = chart_timeline.yAxes.push(new am4charts.ValueAxis());
    latitudeAxis.renderer.grid.template.disabled = true;
    latitudeAxis.renderer.labels.template.disabled = true;

    // Create series
    let distanceSeries = chart_timeline.series.push(new am4charts.ColumnSeries());
    distanceSeries.dataFields.valueY = "distance";
    distanceSeries.dataFields.dateX = "date";
    distanceSeries.yAxis = distanceAxis;
    distanceSeries.tooltipText = "{valueY} miles";
    distanceSeries.name = "Distance";
    distanceSeries.columns.template.fillOpacity = 0.7;
    distanceSeries.columns.template.propertyFields.strokeDasharray = "dashLength";
    distanceSeries.columns.template.propertyFields.fillOpacity = "alpha";

    let disatnceState = distanceSeries.columns.template.states.create("hover");
    disatnceState.properties.fillOpacity = 0.9;

    let durationSeries = chart_timeline.series.push(new am4charts.LineSeries());
    durationSeries.dataFields.valueY = "duration";
    durationSeries.dataFields.dateX = "date";
    durationSeries.yAxis = durationAxis;
    durationSeries.name = "Duration";
    durationSeries.strokeWidth = 2;
    durationSeries.propertyFields.strokeDasharray = "dashLength";
    durationSeries.tooltipText = "{valueY.formatDuration()}";

    let durationBullet = durationSeries.bullets.push(new am4charts.Bullet());
    let durationRectangle = durationBullet.createChild(am4core.Rectangle);
    durationBullet.horizontalCenter = "middle";
    durationBullet.verticalCenter = "middle";
    durationBullet.width = 7;
    durationBullet.height = 7;
    durationRectangle.width = 7;
    durationRectangle.height = 7;

    let durationState = durationBullet.states.create("hover");
    durationState.properties.scale = 1.2;

    let latitudeSeries = chart_timeline.series.push(new am4charts.LineSeries());
    latitudeSeries.dataFields.valueY = "latitude";
    latitudeSeries.dataFields.dateX = "date";
    latitudeSeries.yAxis = latitudeAxis;
    latitudeSeries.name = "Duration";
    latitudeSeries.strokeWidth = 2;
    latitudeSeries.propertyFields.strokeDasharray = "dashLength";
    latitudeSeries.tooltipText = "Latitude: {valueY} ({townName})";

    let latitudeBullet = latitudeSeries.bullets.push(new am4charts.CircleBullet());
    latitudeBullet.circle.fill = am4core.color("#fff");
    latitudeBullet.circle.strokeWidth = 2;
    latitudeBullet.circle.propertyFields.radius = "townSize";

    let latitudeState = latitudeBullet.states.create("hover");
    latitudeState.properties.scale = 1.2;

    let latitudeLabel = latitudeSeries.bullets.push(new am4charts.LabelBullet());
    latitudeLabel.label.text = "{townName2}";
    latitudeLabel.label.horizontalCenter = "left";
    latitudeLabel.label.dx = 14;

    // Add legend
    chart_timeline.legend = new am4charts.Legend();

    // Add cursor
    chart_timeline.cursor = new am4charts.XYCursor();
    chart_timeline.cursor.fullWidthLineX = true;
    chart_timeline.cursor.xAxis = dateAxis;
    chart_timeline.cursor.lineX.strokeOpacity = 0;
    chart_timeline.cursor.lineX.fill = am4core.color("#000");
    chart_timeline.cursor.lineX.fillOpacity = 0.1;


    //useage


    let chart__tools = am4core.create("chartdiv-tools__useage", am4charts.PieChart3D);
    chart__tools.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart__tools.legend = new am4charts.Legend();

    chart__tools.data = [
      {
        country: "Lithuania",
        litres: 501.9
      },
      {
        country: "Czech Republic",
        litres: 301.9
      },
      {
        country: "Ireland",
        litres: 201.1
      },
      {
        country: "Germany",
        litres: 165.8
      },
      {
        country: "Australia",
        litres: 139.9
      },
      {
        country: "Austria",
        litres: 128.3
      },
      {
        country: "UK",
        litres: 99
      },
      {
        country: "Belgium",
        litres: 60
      },
      {
        country: "The Netherlands",
        litres: 50
      }
    ];

    let series = chart__tools.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";

    //status__compare



  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
