document.addEventListener('DOMContentLoaded', function() {
    const viewCustomerTab = document.getElementById('viewCustomersTab');
    const content = document.getElementById('viewCustomer');
    viewCustomerTab.addEventListener('click', function() {
        fetch('../../model/php/view_customer.php')
            .then(response => response.json())
            .then(data => {
                let html = '<h4>Customers List</h4>';
                html += '<table class="table table-bordered bg-dark">';
                html += '<thead><tr><th>Customer ID</th><th>Name</th><th>Address</th><th>Phone Number</th><th>GST NO</th></tr></thead>';
                html += '<tbody>';
                data.forEach(customers => {
                    html += `<tr>
                        <td>${customers.CUSTOMERID}</td>
                        <td>${customers.NAME}</td>
                        <td>${customers.ADDRESS}</td>
                        <td>${customers.PHONENO}</td>
                        <td>${customers.GSTNO}</td>
                    </tr>`;
                });
                html += '</tbody></table>';
                content.innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching Customers:', error);
                content.innerHTML = '<p>Error fetching Customers.</p>';
            });
    });

    // Trigger click on View customer tab to load customer on page load
   // viewCustomerTab.click();
});
