import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material.js";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.scss']
})
export class ConfigurationsComponent implements OnInit {

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {

      let chart = am4core.create("chartdiv-sankey__chart", am4charts.SankeyDiagram);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

      chart.data = [
        { from: "IT Role", to: "Supplier Service Manager", value: 6 },
        { from: "IT Role", to: "Supplier Project Manager", value: 1 },
        { from: "IT Role", to: "Line Manager / 2nd level LM", value: 1 },
        { from: "Non-HR", to: "Line Manager / 2nd level LM", value: 6 },
        { from: "Supplier Service Manager", to: "IT Service Owner", value: 6 },
        { from: "Supplier Project Manager", to: "IT Project Manager", value: 1 },
        { from: "Line Manager / 2nd level LM", to: "IT Service Owner", value: 1 },
        { from: "Line Manager / 2nd level LM", to: "HRBP Head", value: 2 },
        { from: "Line Manager / 2nd level LM", to: "GHRS Team Action", value: 2 },
        { from: "Line Manager / 2nd level LM", to: "GHRS Validation", value: 1 },
        { from: "Line Manager / 2nd level LM", to: "Country HR Head for Germany", value: 1 },
        { from: "IT Service Owner", to: "GHRS Validation", value: 7 },
        { from: "IT Project Manager", to: "IT Service Owner", value: 1 },
        { from: "HRBP Head", to: "GHRS Team Action", value: 2 },
        { from: "Country HR Head for Germany", to: "GHRS Validation", value: 1 },
        { from: "GHRS Validation", to: "HR Operations TSS", value: 1 },
        { from: "GHRS Team Action", to: "Completed", value: 2 },
        { from: "GHRS Validation", to: "HR Operations TSS", value: 6 },
        { from: "I", to: "J", value: 1 },
        { from: "H", to: "J", value: 9 }
      ];

      let hoverState = chart.links.template.states.create("hover");
      hoverState.properties.fillOpacity = 0.6;

      chart.dataFields.fromName = "from";
      chart.dataFields.toName = "to";
      chart.dataFields.value = "value";

      // for right-most label to fit
      chart.paddingRight = 30;

      // make nodes draggable
      let nodeTemplate = chart.nodes.template;
      nodeTemplate.inert = true;
      nodeTemplate.readerTitle = "Drag me!";
      nodeTemplate.showSystemTooltip = true;
      nodeTemplate.width = 20;

      // make nodes draggable
      // let nodeTemplate = chart.nodes.template;
      // nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
      // nodeTemplate.showSystemTooltip = true;
      // nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer

    });
  }

}
