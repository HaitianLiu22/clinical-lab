layui.use(function () {
    var $ = layui.$;

    $(document).ready(function () {
        // 加载温度图数据
        var x_dept = ['Breast Surgical Dept.', 'Obstetrics Dept.', 'Pediatrics Dept.', 'Endocrinology Dept.', 'Respiratory Medicine Dept.', 'Gynecology Dept.', 'Cardiac Surgical Dept.', 'Cardiovascular Medicine Dept.', 'Urinary Surgical Dept.', 'Gastroenterology Dept.', 'Thyroid Surgical Dept.', 'Hernia Surgical Dept.', 'Neurology Dept.', 'Neurosurgery Dept.', 'Otolaryngology Head & Neck Surgical Dept.', 'Anus & Intestine Surgical Dept.', 'Hepatobiliary & Pancreas Surgical Dept.', 'Nephrology Dept.', 'Gastrointestinal Surgical Dept.', 'Thoracic Surgical Dept.', 'Hematology Dept.', 'Vascular Surgical Dept.', 'Orthopedics Dept.']
        var y_model = ['InternLM2-20B-Chat', 'Qwen-72B-Chat', 'GPT-4', 'Gemini-Pro', 'Yi-34B-Chat', 'HuatuoGPT2-34B', 'Claude-3', 'GPT-3.5', 'Baichuan2-13B-Chat', 'ChatGLM3-6B', 'PULSE-20B', 'WiNGPT2-14B-Chat', 'BlueLM-7B-Chat', 'Spark-3', 'Taiyi-LLM']
        var rankingData = [[0, 0, 1], [1, 0, 13], [2, 0, 8], [3, 0, 6], [4, 0, 2], [5, 0, 3], [6, 0, 5], [7, 0, 12], [8, 0, 14], [9, 0, 4], [10, 0, 7], [11, 0, 11], [12, 0, 9], [13, 0, 15], [14, 0, 10], [0, 1, 6], [1, 1, 9], [2, 1, 8], [3, 1, 14], [4, 1, 1], [5, 1, 10], [6, 1, 4], [7, 1, 7], [8, 1, 11], [9, 1, 2], [10, 1, 13], [11, 1, 3], [12, 1, 15], [13, 1, 5], [14, 1, 12], [0, 2, 2], [1, 2, 8], [2, 2, 4], [3, 2, 7], [4, 2, 5], [5, 2, 11], [6, 2, 3], [7, 2, 6], [8, 2, 1], [9, 2, 15], [10, 2, 10], [11, 2, 12], [12, 2, 9], [13, 2, 13], [14, 2, 14], [0, 3, 8], [1, 3, 10], [2, 3, 7], [3, 3, 13], [4, 3, 12], [5, 3, 6], [6, 3, 9], [7, 3, 3], [8, 3, 5], [9, 3, 1], [10, 3, 11], [11, 3, 15], [12, 3, 2], [13, 3, 14], [14, 3, 4], [0, 4, 2], [1, 4, 10], [2, 4, 12], [3, 4, 3], [4, 4, 8], [5, 4, 7], [6, 4, 6], [7, 4, 4], [8, 4, 11], [9, 4, 1], [10, 4, 9], [11, 4, 5], [12, 4, 13], [13, 4, 15], [14, 4, 14], [0, 5, 1], [1, 5, 6], [2, 5, 8], [3, 5, 2], [4, 5, 7], [5, 5, 5], [6, 5, 11], [7, 5, 10], [8, 5, 4], [9, 5, 9], [10, 5, 12], [11, 5, 15], [12, 5, 3], [13, 5, 14], [14, 5, 13], [0, 6, 3], [1, 6, 9], [2, 6, 8], [3, 6, 2], [4, 6, 7], [5, 6, 10], [6, 6, 12], [7, 6, 4], [8, 6, 11], [9, 6, 5], [10, 6, 14], [11, 6, 6], [12, 6, 1], [13, 6, 13], [14, 6, 15], [0, 7, 9], [1, 7, 3], [2, 7, 4], [3, 7, 12], [4, 7, 1], [5, 7, 2], [6, 7, 8], [7, 7, 7], [8, 7, 5], [9, 7, 10], [10, 7, 13], [11, 7, 6], [12, 7, 15], [13, 7, 11], [14, 7, 14], [0, 8, 3], [1, 8, 11], [2, 8, 7], [3, 8, 2], [4, 8, 1], [5, 8, 9], [6, 8, 10], [7, 8, 8], [8, 8, 5], [9, 8, 4], [10, 8, 6], [11, 8, 12], [12, 8, 15], [13, 8, 14], [14, 8, 13], [0, 9, 6], [1, 9, 8], [2, 9, 1], [3, 9, 3], [4, 9, 2], [5, 9, 4], [6, 9, 7], [7, 9, 5], [8, 9, 13], [9, 9, 9], [10, 9, 10], [11, 9, 15], [12, 9, 12], [13, 9, 14], [14, 9, 11], [0, 10, 1], [1, 10, 6], [2, 10, 7], [3, 10, 8], [4, 10, 3], [5, 10, 10], [6, 10, 12], [7, 10, 5], [8, 10, 9], [9, 10, 15], [10, 10, 11], [11, 10, 2], [12, 10, 4], [13, 10, 13], [14, 10, 14], [0, 11, 4], [1, 11, 3], [2, 11, 2], [3, 11, 6], [4, 11, 10], [5, 11, 1], [6, 11, 5], [7, 11, 11], [8, 11, 12], [9, 11, 14], [10, 11, 15], [11, 11, 13], [12, 11, 9], [13, 11, 8], [14, 11, 7], [0, 12, 2], [1, 12, 4], [2, 12, 3], [3, 12, 1], [4, 12, 5], [5, 12, 12], [6, 12, 11], [7, 12, 9], [8, 12, 6], [9, 12, 7], [10, 12, 8], [11, 12, 13], [12, 12, 10], [13, 12, 14], [14, 12, 15], [0, 13, 3], [1, 13, 9], [2, 13, 5], [3, 13, 4], [4, 13, 7], [5, 13, 8], [6, 13, 1], [7, 13, 12], [8, 13, 11], [9, 13, 10], [10, 13, 13], [11, 13, 6], [12, 13, 2], [13, 13, 14], [14, 13, 15], [0, 14, 5], [1, 14, 2], [2, 14, 4], [3, 14, 1], [4, 14, 3], [5, 14, 6], [6, 14, 10], [7, 14, 8], [8, 14, 9], [9, 14, 15], [10, 14, 7], [11, 14, 13], [12, 14, 11], [13, 14, 12], [14, 14, 14], [0, 15, 3], [1, 15, 5], [2, 15, 8], [3, 15, 1], [4, 15, 10], [5, 15, 4], [6, 15, 2], [7, 15, 11], [8, 15, 14], [9, 15, 9], [10, 15, 7], [11, 15, 6], [12, 15, 15], [13, 15, 13], [14, 15, 12], [0, 16, 3], [1, 16, 2], [2, 16, 7], [3, 16, 8], [4, 16, 5], [5, 16, 4], [6, 16, 9], [7, 16, 10], [8, 16, 1], [9, 16, 12], [10, 16, 11], [11, 16, 6], [12, 16, 13], [13, 16, 15], [14, 16, 14], [0, 17, 1], [1, 17, 2], [2, 17, 7], [3, 17, 3], [4, 17, 8], [5, 17, 6], [6, 17, 4], [7, 17, 5], [8, 17, 15], [9, 17, 9], [10, 17, 11], [11, 17, 12], [12, 17, 10], [13, 17, 14], [14, 17, 13], [0, 18, 1], [1, 18, 10], [2, 18, 8], [3, 18, 3], [4, 18, 2], [5, 18, 4], [6, 18, 5], [7, 18, 7], [8, 18, 9], [9, 18, 6], [10, 18, 14], [11, 18, 12], [12, 18, 11], [13, 18, 13], [14, 18, 15], [0, 19, 1], [1, 19, 9], [2, 19, 13], [3, 19, 2], [4, 19, 3], [5, 19, 8], [6, 19, 11], [7, 19, 12], [8, 19, 10], [9, 19, 5], [10, 19, 4], [11, 19, 6], [12, 19, 7], [13, 19, 14], [14, 19, 15], [0, 20, 4], [1, 20, 3], [2, 20, 2], [3, 20, 1], [4, 20, 5], [5, 20, 7], [6, 20, 11], [7, 20, 6], [8, 20, 13], [9, 20, 8], [10, 20, 10], [11, 20, 14], [12, 20, 9], [13, 20, 12], [14, 20, 15], [0, 21, 8], [1, 21, 2], [2, 21, 1], [3, 21, 3], [4, 21, 4], [5, 21, 5], [6, 21, 6], [7, 21, 7], [8, 21, 11], [9, 21, 9], [10, 21, 14], [11, 21, 13], [12, 21, 12], [13, 21, 10], [14, 21, 15], [0, 22, 5], [1, 22, 6], [2, 22, 8], [3, 22, 1], [4, 22, 3], [5, 22, 4], [6, 22, 7], [7, 22, 10], [8, 22, 2], [9, 22, 11], [10, 22, 12], [11, 22, 9], [12, 22, 15], [13, 22, 14], [14, 22, 13]]
            .map(function (item) {
                return [item[1], item[0], item[2]];
            });

        // 加载温度图
        var echartsHeatmap = echarts.init(document.getElementById('echarts-heatmap'), 'macarons');
        var optionHeatmap = {
            tooltip: {},
            grid: {
                top: '0%',
                right: '10%',
                bottom: '35%',
            },
            xAxis: {
                name: 'Dept.',
                type: 'category',
                data: x_dept,
                axisLabel: {
                    interval: 0,
                    rotate: -35
                },
                splitArea: {
                    show: true
                }
            },
            yAxis: {
                name: 'Model',
                type: 'category',
                data: y_model,
                axisLabel: {
                    interval: 0
                },
                inverse: true,
                splitArea: {
                    show: true
                }
            },
            visualMap: {
                min: 1,
                max: 17,
                calculable: true,
                orient: 'vertical',
                top: '20%',
                right: '0%',
                inverse: true
            },
            series: [
                {
                    name: 'Ranking',
                    type: 'heatmap',
                    data: rankingData,
                    label: {
                        show: true
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        echartsHeatmap.setOption(optionHeatmap);

        // 加载雷达图数据
        var indicatorData = [
            {name: 'Average', max: 100},
            {name: 'Fluency', max: 100},
            {name: 'Relevance', max: 100},
            {name: 'Completeness', max: 100},
            {name: 'Proficiency', max: 100}
        ]
        var radarData = [
            {
                value: [85.61, 99.5, 79.94, 81.7, 81.32],
                name: 'Agent#3@1 [GPT-4o]',
                itemStyle: {
                    color: 'rgba(0,0,255,0.4)'
                },
                lineStyle: {
                    color: 'rgba(0,0,255,0.4)'
                }
            },
            {
                value: [89.4, 100.0, 84.86, 88.01, 84.73],
                name: 'Agent#1@3 [GPT-4o]',
                itemStyle: {
                    color: 'rgba(0,128,0,0.4)'
                },
                lineStyle: {
                    color: 'rgba(0,128,0,0.4)'
                }
            },
            {
                value: [82.46, 99.5, 76.28, 76.09, 77.98],
                name: 'Agent#1@1 [GPT-4o]',
                itemStyle: {
                    color: 'rgba(255,0,0,0.4)'
                },
                lineStyle: {
                    color: 'rgba(255,0,0,0.4)'
                }
            },
            {
                value: [85.09, 99.81, 78.8, 81.77, 80.0],
                name: 'InternLM2-20B-Chat [GPT-4o]',
                itemStyle: {
                    color: 'rgba(0,0,128,0.4)'
                },
                lineStyle: {
                    color: 'rgba(0,0,128,0.4)'
                }
            },
            {
                value: [85.09, 99.81, 78.8, 81.77, 80.0],
                name: 'GPT-4 [GPT-4o]',
                itemStyle: {
                    color: 'rgba(0,191,255,0.4)'
                },
                lineStyle: {
                    color: 'rgba(0,191,255,0.4)'
                }
            },
            {
                value: [90.93, 100.0, 87.76, 89.34, 86.62],
                name: 'Gemini-Pro [GPT-4o]',
                itemStyle: {
                    color: 'rgba(128,0,128,0.4)'
                },
                lineStyle: {
                    color: 'rgba(128,0,128,0.4)'
                }
            },
            {
                value: [86.61, 100.0, 80.69, 83.22, 82.52],
                name: 'Yi-34B-Chat [GPT-4o]',
                itemStyle: {
                    color: 'rgba(255,165,0,0.4)'
                },
                lineStyle: {
                    color: 'rgba(255,165,0,0.4)'
                }
            },
            {
                value: [59.42, 64.83, 51.25, 52.47, 69.14],
                name: 'Agent#3@1 [Human]',
                itemStyle: {
                    color: 'rgba(0,0,255,0.4)'
                },
                lineStyle: {
                    color: 'rgba(0,0,255,0.4)',
                    type: 'dashed'
                }
            },
            {
                value: [62.76, 70.2, 59.57, 61.78, 59.48],
                name: 'Agent#1@3 [Human]',
                itemStyle: {
                    color: 'rgba(0,128,0,0.4)'
                },
                lineStyle: {
                    color: 'rgba(0,128,0,0.4)',
                    type: 'dashed'
                }
            },
            {
                value: [57.84, 73.79, 57.51, 41.36, 58.7],
                name: 'Agent#1@1 [Human]',
                itemStyle: {
                    color: 'rgba(255,0,0,0.4)'
                },
                lineStyle: {
                    color: 'rgba(255,0,0,0.4)',
                    type: 'dashed'
                }
            },
            {
                value: [54.66, 64.16, 50.66, 52.53, 51.39],
                name: 'InternLM2-20B-Chat [Human]',
                itemStyle: {
                    color: 'rgba(0,0,128,0.4)'
                },
                lineStyle: {
                    color: 'rgba(0,0,128,0.4)',
                    type: 'dashed'
                }
            },
            {
                value: [55.9, 61.48, 53.95, 54.92, 53.25],
                name: 'GPT-4 [Human]',
                itemStyle: {
                    color: 'rgba(0,191,255,0.4)'
                },
                lineStyle: {
                    color: 'rgba(0,191,255,0.4)',
                    type: 'dashed'
                }
            },
            {
                value: [58.84, 73.35, 54.24, 51.57, 56.19],
                name: 'Gemini-Pro [Human]',
                itemStyle: {
                    color: 'rgba(128,0,128,0.4)'
                },
                lineStyle: {
                    color: 'rgba(128,0,128,0.4)',
                    type: 'dashed'
                }
            },
            {
                value: [52.42, 61.78, 50.1, 46.59, 51.2],
                name: 'Yi-34B-Chat [Human]',
                itemStyle: {
                    color: 'rgba(255,165,0,0.4)'
                },
                lineStyle: {
                    color: 'rgba(255,165,0,0.4)',
                    type: 'dashed'
                }
            },
        ]

        // 加载雷达图
        var echartsRadar = echarts.init(document.getElementById('echarts-radar'), 'macarons');
        var optionRadar = {
            legend: {
                type: 'scroll',
                x: 'center',
                y: 'top'
            },
            tooltip: {},
            radar: {
                shape: 'circle',
                center: ['50%', '50%'],
                indicator: indicatorData
            },
            series: [
                {
                    type: 'radar',
                    data: radarData
                }
            ]
        };
        echartsRadar.setOption(optionRadar);

        // 加载折线图数据
        var x_model = ['Agent#3@1', 'Agent#1@3', 'Agent#1@1', 'InternLM2-20B-Chat', 'GPT-4', 'Gemini-Pro', 'Yi-34B-Chat']

        // 加载折线图
        var echartsLine = echarts.init(document.getElementById('echarts-line'), 'macarons');
        var optionLine = {
            legend: {
                type: 'scroll',
                x: 'center',
                y: 'top'
            },
            tooltip: {},
            grid: {
                top: '10%',
                bottom: '20%',
            },
            xAxis: {
                name: 'Model',
                type: 'category',
                data: x_model,
                axisLabel: {
                    interval: 0,
                    rotate: -35
                },
            },
            yAxis: {
                name: 'Score',
                type: 'value',
                axisLine: {
                    show: true
                }
            },
            series: [
                {
                    name: 'DWR',
                    type: 'line',
                    showBackground: true,
                    smooth: false,
                    data: [14.30, 14.30, 17.00, 14.91, 12.70, 14.48, 14.30]
                },
                {
                    name: 'CDR',
                    type: 'line',
                    showBackground: true,
                    smooth: false,
                    data: [52.73, 54.00, 35.13, 31.40, 33.27, 30.13, 26.13]
                },
                {
                    name: 'Acceptability',
                    type: 'line',
                    showBackground: true,
                    smooth: false,
                    data: [17.82, 18.22, 12.57, 11.11, 11.37, 10.85, 9.25]
                },
                {
                    name: 'Avg.',
                    type: 'line',
                    showBackground: true,
                    smooth: false,
                    data: [54.46, 51.66, 53.02, 51.98, 49.45, 50.63, 50.53]
                },
                {
                    name: 'Human Score',
                    type: 'line',
                    showBackground: true,
                    smooth: false,
                    data: [59.42, 62.76, 57.84, 54.66, 55.90, 58.84, 52.42]
                },
                {
                    name: 'GPT-4o Score',
                    type: 'line',
                    showBackground: true,
                    smooth: false,
                    data: [85.61, 89.40, 82.46, 85.09, 90.93, 79.61, 86.61]
                }
            ]
        };
        echartsLine.setOption(optionLine);

        // 图像自适应缩放
        window.addEventListener('resize', function () {
            echartsHeatmap.resize();
            echartsRadar.resize();
            echartsLine.resize();
        });

    });

});