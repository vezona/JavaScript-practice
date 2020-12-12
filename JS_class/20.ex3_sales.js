let ctx = document.getElementById('myChart')

let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['一月', '二月', '三月'],
    datasets: [
      // 第一個物件
      {
        // label是資料集，這邊是第一個資料集
        label: '水果茶',
        data: [25, 33, 33],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
      // 第二個物件
      {
        // label是資料集，這邊是第一個資料集
        label: '黑糖粉圓',
        data: [32, 99, 60],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
      // 第三個物件
      {
        // label是資料集，這邊是第一個資料集
        label: '黑糖粉圓',
        data: [72, 55, 40],
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  // options: {
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true,
  //         },
  //       },
  //     ],
  //   },
  // },
})
