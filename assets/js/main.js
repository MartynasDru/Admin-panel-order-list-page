$(document).ready(function(){

      $.fn.dataTable.moment('DD/MM/YY');
      $('#order-table').DataTable();
});

for (let i = 0; i < orderInfo.length; i++) {

  $("tbody").append(`
    <tr>
    <td>${orderInfo[i].orderID}</td>
    <td>${orderInfo[i].customerName}</td>
    <td>${orderInfo[i].orderStage}</td>
    <td>${orderInfo[i].orderDate}</td>
    <td>${orderInfo[i].total}</td>
    <td><a href="#">Details</a></td>
    </tr>
  `);

}

$(".login-information").html(`<a href="#">You have logged in as ${adminInfo.name}</a>`)
