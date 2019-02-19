     google.charts.load('current', {'packages':['gauge']});
     google.charts.load("current", {packages:["corechart"]});
     google.charts.setOnLoadCallback(drawChart);
     function drawChart() {
       window.onresize = resize;

       var meeteenheid = [85,85,85,95,40];
       var pieChartData = google.visualization.arrayToDataTable([

         ['Task', 'Percent'],
         ['Breakfast', 100 - meeteenheid[0]],
         ['Lunch',100 - meeteenheid[1]],
         ['Dinner',100 - meeteenheid[2]],
         ['Snacks',100 - meeteenheid[3]],
         ['Water',100 - meeteenheid[4]]
       ]);


       var lineChartData = new google.visualization.DataTable();
        lineChartData.addColumn('number','X');
        lineChartData.addColumn('number', 'Kilometer');
        lineChartData.addRows([
        [1,6],   [5,20],  [10,34],  [15,50],  [20,63],  [25,74],
        [30,84],  [35,90],  [40,95],  [45,98],  [50,100], [55,102],
        [60,103], [65,104], [70,104], [75,104], [80,104.3], [85,104.6],
        [90,104.8], [95,105], [100,109], [105,109.2], [110,109.4], [115,115],
        [120,120], [125,123], [130,123.6], [135,128]
      ]);

       var areaChartData = google.visualization.arrayToDataTable([
          ['Meters up in KM','troposfeer', 'stratosfeer','mesosfeer','thermosfeer','exosfeer'],
          ['80',200,175,150,100,0],
          ['120',150,175,150,120,30],
          ['160',50,220,200,175,100],
          ['200',30,150,170,200,250]
       ]);

       var columnChartData = google.visualization.arrayToDataTable([
          ['Height','Gravity',{role: 'style' }],
          ['20',10,'#25282B'],
          ['40',25,'#C6C5B9'],
          ['60',40,'#69A8BB'],
          ['80',60,'#E14D43'],
          ['100',80,'#6B8F71'],
          ['120',100,'#69A8BB']
      ]);

       var pieChartOptions = {
         title: 'Food and Drinks:',
         colors: ['#25282B', '#363B3F', '#69A8BB', '#E14D43', '#6B8F71'],
         is3D:true
       };
       var lineChartOptions = {
         title:'Distance over time',
         hAxis: {
           title: 'Dagen'
         },
         vAxis: {
           title: 'Distance in KM'
         },
         colors:['#6B8F71'],
         lineWidth:2,
       };
       var areaChartOptions  = {
         title: 'Atmosphere',
         legend: { position: 'top', alignment: 'start' },
         colors: ['#25282B', '#C6C5B9', '#69A8BB', '#E14D43', '#6B8F71'],
         hAxis: {title: 'Meters up in KM',  titleTextStyle: {color: '#333'}},
         vAxis: {title: ' Amount of Sphere'}
       };

       var columnChartOptions = {
          title: 'Gravity in Space',
          hAxis: {
            title: 'Height in KM',
          },
          vAxis: {
            title: ' Gravity in %'
          },
          legend: {position: 'none'}
        };
       var pieChart = new google.visualization.PieChart(document.getElementById('piechart'));
       pieChart.draw(pieChartData, pieChartOptions);
       var lineChart = new google.visualization.LineChart(document.getElementById('linechart'));
       lineChart.draw(lineChartData, lineChartOptions);
       var areaChart = new google.visualization.AreaChart(document.getElementById('areachart'));
       areaChart.draw(areaChartData, areaChartOptions);
       var columnChart = new google.visualization.ColumnChart(document.getElementById('columnchart'));
        columnChart.draw(columnChartData, columnChartOptions);


       function resize () {
         var pieChart = new google.visualization.PieChart(document.getElementById('piechart'));
         pieChart.draw(pieChartData, pieChartOptions);
         var lineChart = new google.visualization.LineChart(document.getElementById('linechart'));
         lineChart.draw(lineChartData, lineChartOptions);
         var areaChart = new google.visualization.AreaChart(document.getElementById('areachart'));
         areaChart.draw(areaChartData, areaChartOptions);
         var columnChart = new google.visualization.ColumnChart(document.getElementById('columnchart'));
         columnChart.draw(columnChartData, columnChartOptions);

       }
     }
