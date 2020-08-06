function fetchAndVisualizeData() {
  fetch("./data.json")
    .then((r) => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMatchWonByTeamOverAllYear(data.matchWonByTeamOverAllYear);
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
          rotation: -90,
          color: "#FFFFFF",
          align: "right",
          format: "{point.y:.1f}", // one decimal
          y: 10, // 10 pixels down from the top
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
  console.log(matchWonByTeamOverAllYear, "matchWonByTeamOverAllYear");
  const seriesData = [];
  for (let key in matchWonByTeamOverAllYear) {
    seriesData.push({ name: key, data: matchWonByTeamOverAllYear[key] });
  }
  console.log(seriesData, "eriesData");
  Highcharts.chart("match-won-by-team-over-all-year", {
    chart: {
      type: "column",
    },
    title: {
      text: "2. Number Of Matches Won By Each Team Over all Years Of IPL",
    },
    subtitle: {
      text: "Source: Ipl.com",
    },
    xAxis: {
      categories: [
        "Sunrisers Hyderabad",
        "Mumbai Indians",
        "Gujarat Lions",
        "Rising Pune Supergiant",
        "Royal Challengers Bangalore",
        "Kolkata Knight Riders",
        "Delhi Daredevils",
        "Kings XI Punjab",
        "Chennai Super Kings",
        "Rajasthan Royals",
        "Deccan Chargers",
        "Kochi Tuskers Kerala",
        "Pune Warriors",
        "Rising Pune Supergiants",
        "Delhi Capitals",
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
