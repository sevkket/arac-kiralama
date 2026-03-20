 google.charts.load('current', {
            packages: ['corechart', 'bar']
        });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Araç Modeli', 'Toplam Gelir (₺)'],
                ['Fiat Egea', 16200],
                ['Hyundai i20', 14600],
                ['Renault Clio Symbol', 13600],
                ['Citroen C-Elysee', 12400],
                ['Ford Tourneo', 9600],
                ['Renault Clio Joy', 19000],
                ['Dacia Sandero', 15000],
                ['Peugeot 308', 17000],
                ['Honda Civic', 10600],
                ['Renault Taliant', 14200]
            ]);

            var options = {
                chart: {
                    title: 'Araçların Toplam Gelir Dağılımı',
                    subtitle: 'Toplam gelir verileri (₺)',
                },
                bars: 'vertical',
                backgroundColor: '#34495e',
                colors: ['#1abc9c'],
                hAxis: {
                    title: 'Gelir',
                    minValue: 0
                },
                vAxis: {
                    title: 'Araç Modeli'
                }
            };

            var chart = new google.visualization.BarChart(document.getElementById('google_chart'));
            chart.draw(data, options);
        }