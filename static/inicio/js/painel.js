Chart.defaults.color = '#000'; // Cor da fonte no gráfico

///Gerar Gráficos
if (parseFloat(idebEscola) === 0) {
    idebEscola = 'ND';
}

if (parseFloat(metIdebEscola) === 0) {
    metIdebEscola = 'ND';
}

//Gráfico - Matrículas 2024
const ctxmat = document.getElementById('chartMat');
new Chart(ctxmat, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: '1ª Série',
                data: [mat1Serie],
                backgroundColor: 'rgb(35, 133, 219, 74)',
                borderWidth: 1,
            },
            {
                label: '2ª Série',
                data: [mat2Serie],
                backgroundColor: 'rgb(219, 182, 14, 86)',
                borderWidth: 1,
            },
            {
                label: '3ª Série',
                data: [mat3Serie],
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
                text: 'MATRÍCULAS 2024'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Gráfico - Matrículas por Oferta
const ctxmatdino = document.getElementById('chartMatDiNo');
new Chart(ctxmatdino, {
    type: 'pie',
    data: {
        labels: ['Diurno Parcial', 'Diurno Integral', 'Noturno'],
        datasets: [{
            data: [matDiurnoParcial, matDiurnoIntegral, matNoturno],
            backgroundColor: ['rgb(0, 32, 96)', 'rgb(12, 156, 248, 97)', 'SteelBlue'],
            borderWidth: 1,
        }],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'MATRÍCULAS POR OFERTA'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Gráfico - Modalidades
const ctxmod = document.getElementById('chartMod');
new Chart(ctxmod, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: 'Regular',
                data: [matRegular],
                backgroundColor: 'rgb(101, 205, 219, 86)',
                borderWidth: 1,
            },
            {
                label: 'Profissional',
                data: [matProfissional],
                backgroundColor: 'rgb(219, 205, 101, 86)',
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
                text: 'MATRÍCULAS POR MODALIDADES'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Gráfico - IDEB
const ctxideb = document.getElementById('chartIDEB');
new Chart(ctxideb, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: 'IDEB RN - 2021',
                data: [parseFloat(idebRN.replace(",", "."))],
                backgroundColor: 'rgb(255, 117, 25, 100)',
                borderWidth: 1,
            },
            {
                label: 'IDEB ESCOLA - 2021',
                data: [parseFloat(idebEscola.replace(",", "."))],
                backgroundColor: 'rgb(0, 153, 153)',
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
                text: 'IDEB'
            },
        }
    },
    plugins: [ChartDataLabels]
});
//Gráfico - META IDEB
const ctxmetideb = document.getElementById('chartMETAIDEB');
new Chart(ctxmetideb, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: 'IDEB RN - 2023',
                data: [parseFloat(metIdebRN.replace(",", "."))],
                backgroundColor: 'rgb(255, 175, 124, 100)',
                borderWidth: 1,
            },
            {
                label: 'IDEB ESCOLA - 2023',
                data: [parseFloat(metIdebEscola.replace(",", "."))],
                backgroundColor: 'rgb(87, 153, 144, 60)',
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
                text: 'META IDEB'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Gráfico - SIMAIS
const ctxsimais = document.getElementById('chartSIMAIS');
new Chart(ctxsimais, {
    type: 'bar',
    data: {
        labels: [''],
        datasets: [
            {
                label: 'Língua Portuguesa',
                data: [parseFloat(simaisPor.replace(",", "."))],
                backgroundColor: 'rgb(25, 48, 255, 100)',
                borderWidth: 1,
            },
            {
                label: 'Matemática',
                data: [parseFloat(simaisMat.replace(",", "."))],
                backgroundColor: 'rgb(227, 177, 0, 89)',
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
                text: 'SIMAIS 2022'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Gráfico - META SIMAIS
const ctxmetsimais = document.getElementById('chartMETASIMAIS');
new Chart(ctxmetsimais, {
    type: 'bar',
    data: {
        labels: [''],
        datasets: [
            {
                label: 'Língua Portuguesa',
                data: [parseFloat(metSimaisPor.replace(",", "."))],
                backgroundColor: 'rgb(143, 152, 255, 100)',
                borderWidth: 1,
            },
            {
                label: 'Matemática',
                data: [parseFloat(metSimaisMat.replace(",", "."))],
                backgroundColor: 'rgb(227, 201, 105, 89)',
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
                text: 'META SIMAIS 2024'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Gráfico - Taxa de Aprovação - 1ª Série
const ctxta1s = document.getElementById('chartTA1s');
new Chart(ctxta1s, {
    type: 'pie',
    data: {
        labels: ['Aprovação', 'Reprovação', 'Abandono'],
        datasets: [{
            data: [parseFloat(taxApr1Serie.replace(",", ".")).toFixed(1), parseFloat(taxRet1Serie.replace(",", ".")).toFixed(1), parseFloat(taxEva1Serie.replace(",", ".")).toFixed(1)],
            backgroundColor: ['rgb(6, 143, 110, 56)', 'rgb(191, 0, 210, 82)', 'rgb(148, 114, 9, 58)'],
            borderWidth: 1,
        }],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '1ª SÉRIE (%)'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Gráfico - Taxa de Aprovação - 2ª Série
const ctxta2s = document.getElementById('chartTA2s');
new Chart(ctxta2s, {
    type: 'pie',
    data: {
        labels: ['Aprovação', 'Reprovação', 'Abandono'],
        datasets: [{
            data: [parseFloat(taxApr2Serie.replace(",", ".")).toFixed(1), parseFloat(taxRet2Serie.replace(",", ".")).toFixed(1), parseFloat(taxEva2Serie.replace(",", ".")).toFixed(1)],
            backgroundColor: ['rgb(6, 143, 110, 56)', 'rgb(191, 0, 210, 82)', 'rgb(148, 114, 9, 58)'],
            borderWidth: 1,
        }],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '2ª SÉRIE (%)'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Gráfico - Taxa de Aprovação - 3ª Série
const ctxta3s = document.getElementById('chartTA3s');
new Chart(ctxta3s, {
    type: 'pie',
    data: {
        labels: ['Aprovação', 'Reprovação', 'Abandono'],
        datasets: [{
            data: [parseFloat(taxApr3Serie.replace(",", ".")).toFixed(1), parseFloat(taxRet3Serie.replace(",", ".")).toFixed(1), parseFloat(taxEva3Serie.replace(",", ".")).toFixed(1)],
            backgroundColor: ['rgb(6, 143, 110, 56)', 'rgb(191, 0, 210, 82)', 'rgb(148, 114, 9, 58)'],
            borderWidth: 1,
        }],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '3ª SÉRIE (%)'
            }
        }
    },
    plugins: [ChartDataLabels]
});
//Gráfico - AVALIAÇÃO GERAL DA ESCOLA
/*
const ctxavaliacao = document.getElementById('chartAva');
new Chart(ctxavaliacao, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: 'Resultado',
                data: [3.6],
                backgroundColor: 'orange',
                borderWidth: 1,
            },
            {
                label: 'Execução',
                data: [100.0],
                backgroundColor: 'gold',
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
                text: 'AVALIAÇÃO GERAL DA ESCOLA'
            }
        }
    }
});
//Gráfico - NOTAS - 1ª SÉRIE
const ctxnota1 = document.getElementById('chartNota1');
new Chart(ctxnota1, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
        {
                label: 'Duas ou mais notas vermelhas',
                data: [444],
                backgroundColor: 'rgb(192, 0, 0)',
                borderWidth: 1,
            },
            {
                label: 'Uma Nota vermelha',
                data: [39],
                backgroundColor: 'orange',
                borderWidth: 1,
            },
            {
                label: 'Apenas notas azuis',
                data: [22],
                backgroundColor: 'rgb(0, 176, 80)',
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
                text: 'NOTAS - 1ª SÉRIE'
            }
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                min: 410,
                max: 510,
                stacked: true
            }
        }
    }
});
//Gráfico - NOTAS - 2ª SÉRIE
const ctxnota2 = document.getElementById('chartNota2');
new Chart(ctxnota2, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
            {
                label: 'Duas ou mais notas vermelhas',
                data: [444],
                backgroundColor: 'rgb(192, 0, 0)',
                borderWidth: 1,
            },
            {
                label: 'Uma Nota vermelha',
                data: [39],
                backgroundColor: 'orange',
                borderWidth: 1,
            },
            {
                label: 'Apenas notas azuis',
                data: [22],
                backgroundColor: 'rgb(0, 176, 80)',
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
                text: 'NOTAS - 2ª SÉRIE'
            }
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                min: 410,
                max: 510,
                stacked: true
            }
        }
    }
});
//Gráfico - NOTAS - 3ª SÉRIE
const ctxnota3 = document.getElementById('chartNota3');
new Chart(ctxnota3, {
    type: 'bar',
    data: {
        labels:  [''],
        datasets: [
        {
                label: 'Duas ou mais notas vermelhas',
                data: [444],
                backgroundColor: 'rgb(192, 0, 0)',
                borderWidth: 1,
            },
            {
                label: 'Uma Nota vermelha',
                data: [39],
                backgroundColor: 'orange',
                borderWidth: 1,
            },
            {
                label: 'Apenas notas azuis',
                data: [22],
                backgroundColor: 'rgb(0, 176, 80)',
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
                text: 'NOTAS - 3ª SÉRIE'
            }
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                min: 410,
                max: 510,
                stacked: true
            }
        }
    }
});*/