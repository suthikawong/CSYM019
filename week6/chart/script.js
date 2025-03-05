// const onClickButton = () => {
//   var element = document.getElementById('circle')
//   var positionLeft = element.offsetLeft
//   element.style.left = positionLeft - 10 + 'px'
// }

const onPageLoad = () => {
  // document.addEventListener('keydown', onClickButton)
  const barChartConfig = {
    labels: ['kcal', 'fat', 'saturates', 'carbs', 'sugars', 'fibre', 'protein', 'salt'],
    /* The two datasets are given below as twi items in an array of json objects, i.e. [{}, {}]*/
    datasets: [
      {
        label: 'Nutrition - R1',
        data: [12, 19, 3, 5, 2, 3, 5, 7],
        backgroundColor: ['red', 'blue', 'yellow', 'green', 'purpple', 'orange', 'black', 'white'],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderWidth: 1,
      },
      {
        label: 'Nutrition - R2',
        data: [10, 9, 13, 15, 12, 13, 3, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderWidth: 1,
      },
    ],
  }

  new Chart(document.getElementById('acquisitions'), {
    type: 'bar',
    data: barChartConfig,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  })
}

document.addEventListener('DOMContentLoaded', onPageLoad)
