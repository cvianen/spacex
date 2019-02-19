     google.charts.load('current', {'packages':['gauge']});
     google.charts.load("current", {packages:["corechart"]});
     google.charts.setOnLoadCallback(drawChart);
     function drawChart() {
       var meeteenheid = [85,85,85,95,40];
       var data = google.visualization.arrayToDataTable([

         ['Task', 'Percent'],
         ['Breakfast', 100 - meeteenheid[0]],
         ['Lunch',100 - meeteenheid[1]],
         ['Dinner',100 - meeteenheid[2]],
         ['Snacks',100 - meeteenheid[3]],
         ['Water',100 - meeteenheid[4]]
       ]);


       var data2 = new google.visualization.DataTable();
        data2.addColumn('number','X');
        data2.addColumn('number', 'Kilometer');

        data2.addRows([
        [1,6],   [5,20],  [10,34],  [15,50],  [20,63],  [25,74],
        [30,84],  [35,90],  [40,95],  [45,98],  [50,100], [55,102],
        [60,103], [65,104], [70,104], [75,104], [80,104.3], [85,104.6],
        [90,104.8], [95,105], [100,109], [105,109.2], [110,109.4], [115,115],
        [120,120], [125,123], [130,123.6], [135,128]
      ]);

       var data3 = google.visualization.arrayToDataTable([
          ['Meters up in KM','troposfeer', 'stratosfeer','mesosfeer','thermosfeer','exosfeer'],
          ['80',200,175,150,100,0],
          ['120',150,175,150,120,30],
          ['160',50,220,200,175,100],
          ['200',30,150,170,200,250]
       ]);
       var options = {
         title: 'Food and Drinks:',
         colors: ['#25282B', '#363B3F', '#69A8BB', '#E14D43', '#6B8F71'],
         is3D:true
       };
       var options2 = {
         hAxis: {
           title: 'Dagen'
         },
         vAxis: {
           title: 'Distance in KM'
         },
         colors:['#6B8F71'],
         lineWidth:2,
       };
       var options3  = {
         title: 'Atmosfeer',
         legend: { position: 'top', alignment: 'start' },
         colors: ['#25282B', '#C6C5B9', '#69A8BB', '#E14D43', '#6B8F71'],
         hAxis: {title: 'Meters up in KM',  titleTextStyle: {color: '#333'}},
         vAxis: {minValue: 0}
       };

       var chart = new google.visualization.PieChart(document.getElementById('piechart'));
       chart.draw(data, options);
       var chart2 = new google.visualization.LineChart(document.getElementById('linechart'));
       chart2.draw(data2, options2);
       var chart3 = new google.visualization.AreaChart(document.getElementById('areachart'));
      chart3.draw(data3, options3)
     }
