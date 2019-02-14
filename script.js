     google.charts.load('current', {'packages':['gauge']});
     google.charts.load("current", {packages:["corechart"]});
     google.charts.setOnLoadCallback(drawChart);
     function drawChart() {
       var data = google.visualization.arrayToDataTable([
         ['Task', 'Aantal wate'],
         ['Food',     5],
         ['Water',    10],

       ]);
       var data2 = google.visualization.arrayToDataTable([
         ['Label', 'Value'],
         ['Memory', 80],
         ['CPU', 55],
         ['Network', 68]
       ]);

       var options = {
         title: 'Inventory stock:',
       };
       var options2  = {
         width: 400, height: 120,
         redFrom: 90, redTo: 100,
         yellowFrom:75, yellowTo: 90,
         minorTicks: 5
       };

       var chart = new google.visualization.PieChart(document.getElementById('piechart'));
       chart.draw(data, options);
       var chart2 = new google.visualization.Gauge(document.getElementById('chart'));
       chart2.draw(data2, options2);

       setInterval(function() {
         data2.setValue(0, 1, 40 + Math.round(60 * Math.random()));
         chart2.draw(data2, options2);
       }, 13000);
       setInterval(function() {
         data2.setValue(1, 1, 40 + Math.round(60 * Math.random()));
         chart2.draw(data2, options2);
       }, 5000);
       setInterval(function() {
         data2.setValue(2, 1, 60 + Math.round(20 * Math.random()));
         chart2.draw(data2, options2);
       }, 26000);
     }
