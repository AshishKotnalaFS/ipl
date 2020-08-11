function fetchAndVisualizeData() {
  fetch("./data.json")
    .then((r) => r.json())
    .then(visualizeData);
}
fetchAndVisualizeData();
//this is basically calling all the function of all graphs
function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMatchWonByTeamOverAllYear(data.matchWonByTeamOverAllYear);
  visualizeRunConcededByTeamIn2016(data.runConcededByTeamIn2016);
  visualizeTenBestEcnomicBowler(data.tenBestEcnomicBowler);
  visualizeMatchWonByEachTeamPerVenue(data.matchWonByEachTeamPerVenue);

  return;
}
function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }
  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column",
    },
    title: {
      text: "1.Matches Played Per Year",
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>',
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Match per year <b>{point.y:.1f}</b>",
    },
    series: [
      {
        name: "Years",
        data: seriesData,
        dataLabels: {
          enabled: true,
          rotation: 0,
          color: "#FFFFFF",
          align: "center",
          format: "{point.y:.0f}", // one decimal
          y: 25, // 10 pixels down from the top
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
  });
}
function visualizeMatchWonByTeamOverAllYear(matchWonByTeamOverAllYear) {
  const seriesData = [];
  for (let key in matchWonByTeamOverAllYear) {
    seriesData.push({ name: key, data: matchWonByTeamOverAllYear[key] });
  }
  Highcharts.chart("match-won-by-team-over-all-year", {
    chart: {
      type: "column",
    },
    title: {
      text: "2. Number Of Matches Won By Each Team Over all Years Of IPL",
    },
    subtitle: {
      text: "Source: ",
    },
    xAxis: {
      categories: [
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches Won",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: seriesData,
  });
}
function visualizeRunConcededByTeamIn2016(runConcededByTeamIn2016) {
  const seriesData = [];
  for (let team in runConcededByTeamIn2016) {
    seriesData.push([team, runConcededByTeamIn2016[team]]);
  }
  Highcharts.chart("run-conceded-by-team-in-2016", {
    chart: {
      type: "column",
    },
    title: {
      text: "3. Run Conceded By Each Team In 2016",
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>',
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Extra runs <b>{point.y:.1f}</b>",
    },
    series: [
      {
        name: "Years",
        data: seriesData,
        dataLabels: {
          enabled: true,
          rotation: 0,
          color: "#FFFFFF",
          align: "center",
          format: "{point.y:.0f}", // one decimal
          y: 25, // 10 pixels down from the top
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
  });
}
function visualizeTenBestEcnomicBowler(tenBestEcnomicBowler) {
  const seriesData = [];
  for (let bowler in tenBestEcnomicBowler) {
    seriesData.push([bowler, tenBestEcnomicBowler[bowler]]);
  }
  Highcharts.chart("ten-best-ecnomic-bowler", {
    chart: {
      type: "column",
    },
    title: {
      text: "4. Top Best Economical Bowler in 2015 Season",
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>',
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Economy <b>{point.y:.2f}</b>",
    },
    series: [
      {
        name: "Years",
        data: seriesData,
        dataLabels: {
          enabled: true,
          rotation: 0,
          color: "#FFFFFF",
          align: "center",
          format: "{point.y:.2f}", // one decimal
          y: 25, // 10 pixels down from the top
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
  });
}
function visualizeMatchWonByEachTeamPerVenue(matchWonByEachTeamPerVenue) {
  const seriesData = [];
  for (let key in matchWonByEachTeamPerVenue) {
    seriesData.push({ name: key, data: matchWonByEachTeamPerVenue[key] });
  }
  Highcharts.chart("match-won-by-each-team-per-venue", {
    chart: {
      type: "bar",
    },
    title: {
      text: "5. Stroy : Match Won By Each Team Per Venue",
    },
    xAxis: {
      categories: [
        "Rajiv Gandhi International Stadium, Uppal",
        "Maharashtra Cricket Association Stadium",
        "Saurashtra Cricket Association Stadium",
        "Holkar Cricket Stadium",
        "M Chinnaswamy Stadium",
        "Wankhede Stadium",
        "Eden Gardens",
        "Feroz Shah Kotla",
        "Punjab Cricket Association IS Bindra Stadium, Mohali",
        "Green Park",
        "Punjab Cricket Association Stadium, Mohali",
        "Sawai Mansingh Stadium",
        "MA Chidambaram Stadium, Chepauk",
        "Dr DY Patil Sports Academy",
        "Newlands",
        "St George's Park",
        "Kingsmead",
        "SuperSport Park",
        "Buffalo Park",
        "New Wanderers Stadium",
        "De Beers Diamond Oval",
        "OUTsurance Oval",
        "Brabourne Stadium",
        "Sardar Patel Stadium, Motera",
        "Barabati Stadium",
        "Vidarbha Cricket Association Stadium, Jamtha",
        "Himachal Pradesh Cricket Association Stadium",
        "Nehru Stadium",
        "Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium",
        "Subrata Roy Sahara Stadium",
        "Shaheed Veer Narayan Singh International Stadium",
        "JSCA International Stadium Complex",
        "Sheikh Zayed Stadium",
        "Sharjah Cricket Stadium",
        "Dubai International Cricket Stadium",
        "M. A. Chidambaram Stadium",
        "Feroz Shah Kotla Ground",
        "M. Chinnaswamy Stadium",
        "Rajiv Gandhi Intl. Cricket Stadium",
        "IS Bindra Stadium",
        "ACA-VDCA Stadium",
      ],
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
    },
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: "normal",
      },
    },
    series: seriesData,
  });
}
