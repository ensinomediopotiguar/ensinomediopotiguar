Chart.defaults.color = '#000'; // Cor da fonte no gráfico

console.log(mat1Serie01);

//Extremoz
const ctxetz = document.getElementById('chartEtz');
new Chart(ctxetz, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie01)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie01)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie01)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Macaíba
const ctxmcb = document.getElementById('chartMcb');
new Chart(ctxmcb, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie02)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie02)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie02)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Natal
const ctxntl = document.getElementById('chartNtl');
new Chart(ctxntl, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie03)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie03)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie03)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//São Gonçalo do Amarante
const ctxsga = document.getElementById('chartSga');
new Chart(ctxsga, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie04)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie04)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie04)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Arês
const ctxars = document.getElementById('chartArs');
new Chart(ctxars, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie05)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie05)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie05)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Baía Formosa
const ctxbfs = document.getElementById('chartBfs');
new Chart(ctxbfs, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie06)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie06)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie06)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Canguaretama
const ctxcgm = document.getElementById('chartCgm');
new Chart(ctxcgm, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie07)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie07)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie07)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Goianinha
const ctxgnn = document.getElementById('chartGnn');
new Chart(ctxgnn, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie08)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie08)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie08)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Monte Alegre
const ctxmag = document.getElementById('chartMag');
new Chart(ctxmag, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie09)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie09)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie09)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Nísia Floresta
const ctxnft = document.getElementById('chartNft');
new Chart(ctxnft, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie10)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie10)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie10)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Parnamirim
const ctxpnr = document.getElementById('chartPnr');
new Chart(ctxpnr, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie11)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie11)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie11)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//São José de Mipibu
const ctxsjm = document.getElementById('chartSjm');
new Chart(ctxsjm, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie12)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie12)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie12)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Senador Georgino Avelino
const ctxsgn = document.getElementById('chartSgn');
new Chart(ctxsgn, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie13)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie13)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie13)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Tibau do Sul
const ctxtbs = document.getElementById('chartTbs');
new Chart(ctxtbs, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie14)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie14)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie14)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Vera Cruz
const ctxvrz = document.getElementById('chartVrz');
new Chart(ctxvrz, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie15)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie15)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie15)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Vila Flor
const ctxvlf = document.getElementById('chartVlf');
new Chart(ctxvlf, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie16)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie16)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie16)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Brejinho
const ctxbjn = document.getElementById('chartBjn');
new Chart(ctxbjn, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie17)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie17)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie17)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Espírito Santo
const ctxets = document.getElementById('chartEts');
new Chart(ctxets, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie18)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie18)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie18)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Januário Cicco / Boa Saúde
const ctxjrc = document.getElementById('chartJrc');
new Chart(ctxjrc, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie19)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie19)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie19)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Jundiá
const ctxjda = document.getElementById('chartJda');
new Chart(ctxjda, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie20)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie20)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie20)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
})
//Lagoa D'Anta
const ctxldt = document.getElementById('chartLdt');
new Chart(ctxldt, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie21)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie21)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie21)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Lagoa de Pedras
const ctxlgp = document.getElementById('chartLgp');
new Chart(ctxlgp, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie22)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie22)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie22)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Lagoa Salgada
const ctxlgs = document.getElementById('chartLgs');
new Chart(ctxlgs, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie23)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie23)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie23)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Montanhas
const ctxmtn = document.getElementById('chartMtn');
new Chart(ctxmtn, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie24)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie24)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie24)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Monte das Gameleiras
const ctxmtg = document.getElementById('chartMtg');
new Chart(ctxmtg, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie25)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie25)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie25)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Nova Cruz
const ctxnvz = document.getElementById('chartNvz');
new Chart(ctxnvz, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie26)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie26)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie26)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Passa e Fica
const ctxpsf = document.getElementById('chartPsf');
new Chart(ctxpsf, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie27)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie27)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie27)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Passagem
const ctxpsg = document.getElementById('chartPsg');
new Chart(ctxpsg, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie28)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie28)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie28)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Pedro Velho
const ctxpdv = document.getElementById('chartPdv');
new Chart(ctxpdv, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie29)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie29)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie29)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Santo Antônio
const ctxstn = document.getElementById('chartStn');
new Chart(ctxstn, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie30)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie30)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie30)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//São José do Campestre
const ctxsjc = document.getElementById('chartSjc');
new Chart(ctxsjc, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie31)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie31)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie31)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Serra de São Bento
const ctxssb = document.getElementById('chartSsb');
new Chart(ctxssb, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie32)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie32)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie32)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Serrinha
const ctxsrn = document.getElementById('chartSrn');
new Chart(ctxsrn, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie33)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie33)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie33)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Várzea
const ctxvza = document.getElementById('chartVza');
new Chart(ctxvza, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie34)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie34)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie34)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Barcelona
const ctxbcn = document.getElementById('chartBarcelona');
new Chart(ctxbcn, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie35)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie35)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie35)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Bom Jesus
const ctxbjs = document.getElementById('chartBomJesus');
new Chart(ctxbjs, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie36)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie36)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie36)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Caiçara do Rio do Vento
const ctxcrv = document.getElementById('chartCaicaraRioVento');
new Chart(ctxcrv, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie37)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie37)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie37)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Ielmo Marinho
const ctximm = document.getElementById('chartIelmoMarinho');
new Chart(ctximm, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie38)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie38)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie38)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Lagoa de Velhos
const ctxlgv = document.getElementById('chartLagoaVelhos');
new Chart(ctxlgv, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie39)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie39)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie39)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Riachuelo
const ctxrcl = document.getElementById('chartRiachuelo');
new Chart(ctxrcl, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie40)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie40)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie40)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Ruy Barbosa
const ctxrbs = document.getElementById('chartRuyBarbosa');
new Chart(ctxrbs, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie41)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie41)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie41)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Santa Maria
const ctxstm = document.getElementById('chartSantaMaria');
new Chart(ctxstm, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie42)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie42)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie42)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//São Paulo do Potengi
const ctxspp = document.getElementById('chartSaoPauloPotengi');
new Chart(ctxspp, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie43)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie43)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie43)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//SaoPedro
const ctxspd = document.getElementById('chartSaoPedro');
new Chart(ctxspd, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie44)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie44)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie44)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//São Tomé
const ctxstome = document.getElementById('chartSaoTome');
new Chart(ctxstome, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie45)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie45)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie45)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Senador Elói de Souza
const ctxses = document.getElementById('chartSenEloiSouza');
new Chart(ctxses, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie46)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie46)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie46)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Serra Caiada
const ctxsrc = document.getElementById('chartSerraCaiada');
new Chart(ctxsrc, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie47)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie47)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie47)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Ceará-Mirim
const ctxcrm = document.getElementById('chartCearaMirim');
new Chart(ctxcrm, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie48)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie48)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie48)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Maxaranguape
const ctxmgp = document.getElementById('chartMaxaranguape');
new Chart(ctxmgp, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie49)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie49)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie49)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Pureza
const ctxprz = document.getElementById('chartPureza');
new Chart(ctxprz, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie50)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie50)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie50)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Rio do Fogo
const ctxrfg = document.getElementById('chartRioFogo');
new Chart(ctxrfg, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie51)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie51)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie51)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//São Miguel do Gostoso
const ctxsmg = document.getElementById('chartSaoMiguelGostoso');
new Chart(ctxsmg, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie52)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie52)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie52)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Taipu
const ctxtpu = document.getElementById('chartTaipu');
new Chart(ctxtpu, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie53)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie53)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie53)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Touros
const ctxtrs = document.getElementById('chartTouros');
new Chart(ctxtrs, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie54)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie54)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie54)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Alto do Rodrigues
const ctxatr = document.getElementById('chartAltoRodrigues');
new Chart(ctxatr, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie55)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie55)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie55)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Galinhos
const ctxgln = document.getElementById('chartGalinhos');
new Chart(ctxgln, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie56)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie56)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie56)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Guamaré
const ctxgmr = document.getElementById('chartGuamare');
new Chart(ctxgmr, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie57)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie57)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie57)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Macau
const ctxmcu = document.getElementById('chartMacau');
new Chart(ctxmcu, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie58)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie58)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie58)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Pendências
const ctxpdc = document.getElementById('chartPendencias');
new Chart(ctxpdc, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie59)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie59)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie59)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Porto do Mangue
const ctxptm = document.getElementById('chartPortoMangue');
new Chart(ctxptm, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie60)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie60)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie60)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Campo Redondo
const ctxcamred = document.getElementById('chartCampoRedondo');
new Chart(ctxcamred, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie61)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie61)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie61)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Coronel Ezequiel
const ctxcoreze = document.getElementById('chartCelEzequiel');
new Chart(ctxcoreze, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie62)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie62)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie62)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Jaçanã
const ctxjacana = document.getElementById('chartJacana');
new Chart(ctxjacana, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie63)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie63)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie63)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Japi
const ctxjapi = document.getElementById('chartJapi');
new Chart(ctxjapi, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie64)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie64)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie64)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Lajes Pintadas
const ctxlajpin = document.getElementById('chartLajesPintadas');
new Chart(ctxlajpin, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie65)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie65)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie65)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Santa Cruz
const ctxsancru = document.getElementById('chartSantaCruz');
new Chart(ctxsancru, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie66)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie66)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie66)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//São Bento do Trairí
const ctxbentra = document.getElementById('chartSaoBentoTrairi');
new Chart(ctxbentra, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie67)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie67)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie67)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Sítio Novo
const ctxsitnov = document.getElementById('chartSitioNovo');
new Chart(ctxsitnov, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie68)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie68)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie68)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Tangará
const ctxtangara = document.getElementById('chartTangara');
new Chart(ctxtangara, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie69)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie69)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie69)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Afonso Bezerra
const ctxafobez = document.getElementById('chartAfonsoBezerra');
new Chart(ctxafobez, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie70)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie70)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie70)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Angicos
const ctxangicos = document.getElementById('chartAngicos');
new Chart(ctxangicos, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie71)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie71)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie71)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Bodó
const ctxbodo = document.getElementById('chartBodo');
new Chart(ctxbodo, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie72)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie72)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie72)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Fernando Pedroza
const ctxferped= document.getElementById('chartFernandoPedroza');
new Chart(ctxferped, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie73)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie73)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie73)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Lajes
const ctxlajes = document.getElementById('chartLajes');
new Chart(ctxlajes, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie74)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie74)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie74)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Pedro Avelino
const ctxtpedave = document.getElementById('chartPedroAvelino');
new Chart(ctxtpedave, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie75)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie75)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie75)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Santana do Matos
const ctxsanmat = document.getElementById('chartSantanaMatos');
new Chart(ctxsanmat, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie76)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie76)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie76)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Acari
const ctxacari = document.getElementById('chartAcari');
new Chart(ctxacari, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie77)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie77)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie77)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Carnaúba dos Dantas
const ctxcardan = document.getElementById('chartCarnaubaDantas');
new Chart(ctxcardan, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie78)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie78)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie78)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Cerro Corá
const ctxcercor = document.getElementById('chartCerroCora');
new Chart(ctxcercor, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie79)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie79)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie79)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Cruzeta
const ctxcruzeta = document.getElementById('chartCruzeta');
new Chart(ctxcruzeta, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie80)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie80)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie80)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Currais Novos
const ctxcurnov = document.getElementById('chartCurraisNovos');
new Chart(ctxcurnov, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie81)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie81)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie81)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Equador
const ctxequador = document.getElementById('chartEquador');
new Chart(ctxequador, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie82)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie82)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie82)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Florânia
const ctxFlorania = document.getElementById('chartFlorania');
new Chart(ctxFlorania, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie83)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie83)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie83)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Lagoa nova
const ctxlagnov = document.getElementById('chartLagoaNova');
new Chart(ctxlagnov, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie84)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie84)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie84)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Parelhas
const ctxParelhas = document.getElementById('chartParelhas');
new Chart(ctxParelhas, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie85)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie85)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie85)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Santana do Seridó
const ctxsanser = document.getElementById('chartSantanaSerido');
new Chart(ctxsanser, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie86)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie86)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie86)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//São Vicente
const ctxsaovic = document.getElementById('chartSaoVicente');
new Chart(ctxsaovic, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie87)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie87)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie87)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Tenente Laurentino Cruz
const ctxtenlau = document.getElementById('chartTenLaurentinoCruz');
new Chart(ctxtenlau, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie88)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie88)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie88)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Caicó
const ctxCaico = document.getElementById('chartCaico');
new Chart(ctxCaico, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie89)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie89)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie89)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Ipueira
const ctxIpueira = document.getElementById('chartIpueira');
new Chart(ctxIpueira, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie90)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie90)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie90)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Jardim de Piranhas
const ctxjarpir = document.getElementById('chartJardimPiranhas');
new Chart(ctxjarpir, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie91)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie91)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie91)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Jardim do Seridó
const ctxjarser = document.getElementById('chartJardimSerido');
new Chart(ctxjarser, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie92)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie92)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie92)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Jucurutu
const ctxJucurutu = document.getElementById('chartJucurutu');
new Chart(ctxJucurutu, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie93)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie93)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie93)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Ouro Branco
const ctxourbra = document.getElementById('chartOuroBranco');
new Chart(ctxourbra, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie94)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie94)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie94)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//São Fernando
const ctxsaofer = document.getElementById('chartSaoFernando');
new Chart(ctxsaofer, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie95)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie95)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie95)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//São João do Sabugi
const ctxjoasab = document.getElementById('chartSaoJoaoSabugi');
new Chart(ctxjoasab, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie96)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie96)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie96)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//São José do Seridó
const ctxjosser = document.getElementById('chartSaoJoseSerido');
new Chart(ctxjosser, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie97)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie97)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie97)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Serra Negra do Norte
const ctxsernor = document.getElementById('chartSerraNegraNorte');
new Chart(ctxsernor, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie98)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie98)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie98)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Timbaúba dos Batistas
const ctxtimbat = document.getElementById('chartTimbaubaBatistas');
new Chart(ctxtimbat, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie99)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie99)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie99)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Assú
const ctxAssu = document.getElementById('chartAssu');
new Chart(ctxAssu, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie100)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie100)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie100)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Campo Grande
const ctxcamgra = document.getElementById('chartCampoGrande');
new Chart(ctxcamgra, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie101)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie101)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie101)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Carnaubais
const ctxCarnaubais = document.getElementById('chartCarnaubais');
new Chart(ctxCarnaubais, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie102)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie102)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie102)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Ipanguaçu
const ctxIpanguacu = document.getElementById('chartIpanguacu');
new Chart(ctxIpanguacu, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie103)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie103)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie103)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Itajá
const ctxItaja = document.getElementById('chartItaja');
new Chart(ctxItaja, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie104)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie104)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie104)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Paraú
const ctxParau = document.getElementById('chartParau');
new Chart(ctxParau, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie105)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie105)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie105)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//São Rafael
const ctxsaoraf = document.getElementById('chartSaoRafael');
new Chart(ctxsaoraf, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie106)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie106)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie106)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Triunfo Potiguar
const ctxtripot = document.getElementById('chartTriunfoPotiguar');
new Chart(ctxtripot, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie107)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie107)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie107)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Areia Branca
const ctxarebra = document.getElementById('chartAreiaBranca');
new Chart(ctxarebra, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie108)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie108)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie108)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Baraúna
const ctxBarauna = document.getElementById('chartBarauna');
new Chart(ctxBarauna, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie109)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie109)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie109)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Governador Dix-Sept Rosado
const ctxgovdix = document.getElementById('chartGovDixSeptRosado');
new Chart(ctxgovdix, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie110)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie110)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie110)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Grossos
const ctxGrossos = document.getElementById('chartGrossos');
new Chart(ctxGrossos, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie111)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie111)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie111)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Mossoró
const ctxMossoro = document.getElementById('chartMossoro');
new Chart(ctxMossoro, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie112)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie112)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie112)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Serra do Mel
const ctxsermel = document.getElementById('chartSerraMel');
new Chart(ctxsermel, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie113)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie113)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie113)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Tibau
const ctxTibau = document.getElementById('chartTibau');
new Chart(ctxTibau, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie114)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie114)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie114)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Upanema
const ctxUpanema = document.getElementById('chartUpanema');
new Chart(ctxUpanema, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie115)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie115)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie115)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Apodi
const ctxApodi = document.getElementById('chartApodi');
new Chart(ctxApodi, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie116)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie116)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie116)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Caraúbas
const ctxCaraubas = document.getElementById('chartCaraubas');
new Chart(ctxCaraubas, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie117)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie117)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie117)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Felipe Guerra
const ctxfelgue = document.getElementById('chartFelipeGuerra');
new Chart(ctxfelgue, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie118)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie118)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie118)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Itaú
const ctxItau = document.getElementById('chartItau');
new Chart(ctxItau, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie119)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie119)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie119)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Rodolfo Fernandes
const ctxrodfer = document.getElementById('chartRodolfoFernandes');
new Chart(ctxrodfer, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie120)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie120)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie120)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Severiano Melo
const ctxsevmel = document.getElementById('chartSeverianoMelo');
new Chart(ctxsevmel, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie121)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie121)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie121)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Taboleiro Grande
const ctxtabgra = document.getElementById('chartTaboleiroGrande');
new Chart(ctxtabgra, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie122)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie122)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie122)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Almino Afonso
const ctxalmafo = document.getElementById('chartAlminoAfonso');
new Chart(ctxalmafo, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie123)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie123)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie123)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Antônio Martins
const ctxantmar = document.getElementById('chartAntonioMartins');
new Chart(ctxantmar, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie124)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie124)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie124)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Frutuoso Gomes
const ctxfrugom = document.getElementById('chartFrutuosoGomes');
new Chart(ctxfrugom, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie125)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie125)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie125)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Janduís
const ctxJanduis = document.getElementById('chartJanduis');
new Chart(ctxJanduis, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie126)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie126)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie126)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//João Dias
const ctxjoadia = document.getElementById('chartJoaoDias');
new Chart(ctxjoadia, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie127)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie127)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie127)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Lucrécia
const ctxLucrecia = document.getElementById('chartLucrecia');
new Chart(ctxLucrecia, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie128)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie128)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie128)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Martins
const ctxMartins = document.getElementById('chartMartins');
new Chart(ctxMartins, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie129)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie129)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie129)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Messias Targino
const ctxmestar = document.getElementById('chartMessiasTargino');
new Chart(ctxmestar, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie130)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie130)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie130)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Olho D'Água do Borges
const ctxolhbor = document.getElementById('chartOlhodAguaBorges');
new Chart(ctxolhbor, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie131)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie131)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie131)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Patu
const ctxPatu = document.getElementById('chartPatu');
new Chart(ctxPatu, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie132)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie132)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie132)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Rafael Godeiro
const ctxrafgod = document.getElementById('chartRafaelGodeiro');
new Chart(ctxrafgod, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie133)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie133)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie133)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Riacho da Cruz
const ctxriacru = document.getElementById('chartRiachoCruz');
new Chart(ctxriacru, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie134)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie134)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie134)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Serrinha dos Pintos
const ctxserpin = document.getElementById('chartSerrinhaPintos');
new Chart(ctxserpin, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie135)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie135)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie135)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Umarizal
const ctxUmarizal = document.getElementById('chartUmarizal');
new Chart(ctxUmarizal, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie136)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie136)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie136)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Viçosa
const ctxVicosa = document.getElementById('chartVicosa');
new Chart(ctxVicosa, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie137)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie137)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie137)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Água Nova
const ctxagunov = document.getElementById('chartAguaNova');
new Chart(ctxagunov, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie138)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie138)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie138)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Alexandria
const ctxAlexandria = document.getElementById('chartAlexandria');
new Chart(ctxAlexandria, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie139)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie139)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie139)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Coronel João Pessoa
const ctxcelpes = document.getElementById('chartCelJoaoPessoa');
new Chart(ctxcelpes, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie140)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie140)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie140)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Doutor Severiano
const ctxdousev = document.getElementById('chartDrSeveriano');
new Chart(ctxdousev, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie141)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie141)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie141)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Encanto
const ctxEncanto = document.getElementById('chartEncanto');
new Chart(ctxEncanto, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie142)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie142)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie142)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Francisco Dantas
const ctxfradan = document.getElementById('chartFranciscoDantas');
new Chart(ctxfradan, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie143)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie143)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie143)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//José da Penha
const ctxjospen = document.getElementById('chartJosePenha');
new Chart(ctxjospen, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie144)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie144)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie144)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Luís Gomes
const ctxluigom = document.getElementById('chartLuisGomes');
new Chart(ctxluigom, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie145)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie145)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie145)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Major Sales
const ctxmajsal = document.getElementById('chartMajorSales');
new Chart(ctxmajsal, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie146)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie146)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie146)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Marcelino Vieira
const ctxmarvie = document.getElementById('chartMarcelinoVieira');
new Chart(ctxmarvie, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie147)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie147)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie147)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Paraná
const ctxParana = document.getElementById('chartParana');
new Chart(ctxParana, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie148)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie148)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie148)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Pau dos Ferros
const ctxpaufer = document.getElementById('chartPauFerros');
new Chart(ctxpaufer, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie149)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie149)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie149)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Pilões
const ctxPiloes = document.getElementById('chartPiloes');
new Chart(ctxPiloes, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie150)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie150)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie150)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Portalegre
const ctxPortalegre = document.getElementById('chartPortalegre');
new Chart(ctxPortalegre, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie151)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie151)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie151)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Rafael Fernandes
const ctxraffer = document.getElementById('chartRafaelFernandes');
new Chart(ctxraffer, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie152)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie152)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie152)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Riacho de Santana
const ctxriasan = document.getElementById('chartRiachoSantana');
new Chart(ctxriasan, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie153)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie153)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie153)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//São Francisco do Oeste
const ctxsaofra = document.getElementById('chartSaoFranOeste');
new Chart(ctxsaofra, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie154)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie154)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie154)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//São Miguel
const ctxsaomig = document.getElementById('chartSaoMiguel');
new Chart(ctxsaomig, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie155)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie155)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie155)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Tenente Ananias
const ctxtenana = document.getElementById('chartTenAnanias');
new Chart(ctxtenana, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie156)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie156)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie156)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Venha-Ver
const ctxvenver = document.getElementById('chartVenhaVer');
new Chart(ctxvenver, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie157)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie157)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie157)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Bento Fernandes
const ctxbenfer = document.getElementById('chartBentoFernandes');
new Chart(ctxbenfer, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie158)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie158)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie158)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Caiçara do Norte
const ctxcainor = document.getElementById('chartCaicaraNorte');
new Chart(ctxcainor, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie159)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie159)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie159)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Jandaíra
const ctxJandaira = document.getElementById('chartJandaira');
new Chart(ctxJandaira, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie160)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie160)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie160)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Jardim de Angicos
const ctxjarang = document.getElementById('chartJardimAngicos');
new Chart(ctxjarang, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie161)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie161)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie161)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//João Câmara
const ctxjoacam = document.getElementById('chartJoaoCamara');
new Chart(ctxjoacam, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie162)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie162)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie162)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Parazinho
const ctxParazinho = document.getElementById('chartParazinho');
new Chart(ctxParazinho, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie163)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie163)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie163)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Pedra Grande
const ctxpedgra = document.getElementById('chartPedraGrande');
new Chart(ctxpedgra, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie164)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie164)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie164)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Pedra Preta
const ctxpedpre = document.getElementById('chartPedraPreta');
new Chart(ctxpedpre, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie165)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie165)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie165)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Poço Branco
const ctxpocbra = document.getElementById('chartPocoBranco');
new Chart(ctxpocbra, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie166)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie166)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie166)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//São Bento do Norte
const ctxsaoben = document.getElementById('chartSaoBentoNorte');
new Chart(ctxsaoben, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [parseInt(mat1Serie167)],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [parseInt(mat2Serie167)],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [parseInt(mat3Serie167)],
                backgroundColor: 'rgb(135, 35, 219, 86)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TOTAL DE MATRÍCULAS 2023'
            }
        }
    },
    plugins: [ChartDataLabels]
});