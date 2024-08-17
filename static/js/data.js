layui.use(function () {
    var $ = layui.$;

    $(document).ready(function () {
        // 加载饼图数据
        var rawData = {
            'Breast Surgical Dept.': 40,
            'Obstetrics Dept.': 20,
            'Pediatrics Dept.': 60,
            'Endocrinology Dept.': 80,
            'Respiratory Medicine Dept.': 70,
            'Gynecology Dept.': 80,
            'Cardiac Surgical Dept.': 70,
            'Cardiovascular Medicine Dept.': 40,
            'Urinary Surgical Dept.': 90,
            'Gastroenterology Dept.': 70,
            'Thyroid Surgical Dept.': 50,
            'Hernia Surgical Dept.': 40,
            'Neurology Dept.': 80,
            'Neurosurgery Dept.': 70,
            'Otolaryngology Head & Neck Surgical Dept.': 80,
            'Anus & Intestine Surgical Dept.': 100,
            'Hepatobiliary & Pancreas Surgical Dept.': 100,
            'Nephrology Dept.': 60,
            'Gastrointestinal Surgical Dept.': 60,
            'Thoracic Surgical Dept.': 70,
            'Hematology Dept.': 30,
            'Vascular Surgical Dept.': 40,
            'Orthopedics Dept.': 100
        }
        var pieData = []
        Object.entries(rawData).forEach(([key, value]) => {
            pieData.push(
                {
                    name: key,
                    value: value,
                }
            )
        });

        // 加载饼图
        var echartsPie = echarts.init(document.getElementById('echarts-pie'), 'macarons');
        var optionPie = {
            legend: {
                type: 'scroll',
                x: 'center',
                y: 'top'
            },
            tooltip: {},
            series: [
                {
                    name: 'Clinical Cases',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['50%', '50%'],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    data: pieData
                }
            ]
        };
        echartsPie.setOption(optionPie);

        // 图像自适应缩放
        window.addEventListener('resize', function () {
            echartsPie.resize();
        });

    });

});