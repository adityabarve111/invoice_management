document.addEventListener('DOMContentLoaded', function() {
    const viewProductsTab = document.getElementById('viewProductsTab');
    const content = document.getElementById('viewProduct');
    viewProductsTab.addEventListener('click', function() {
        fetch('../../model/php/view_product.php')
            .then(response => response.json())
            .then(data => {
                let html = '<h4>Product List</h4>';
                html += '<table class="table table-bordered bg-dark">';
                html += '<thead><tr><th>Product ID</th><th>Name</th><th>Type</th><th>Date of Manufacture</th><th>Date of Expiry</th><th>Quantity</th></tr></thead>';
                html += '<tbody>';
                data.forEach(product => {
                    html += `<tr>
                        <td>${product.PRODUCTID}</td>
                        <td>${product.NAME}</td>
                        <td>${product.TYPE}</td>
                        <td>${product.DATEOFMANUFACTURE || 'N/A'}</td>
                        <td>${product.DATEOFEXPIRY || 'N/A'}</td>
                        <td>${product.QUANTITY}</td>
                    </tr>`;
                });
                html += '</tbody></table>';
                content.innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                content.innerHTML = '<p>Error fetching products.</p>';
            });
    });

    // Trigger click on View Products tab to load products on page load
   // viewProductsTab.click();
});
