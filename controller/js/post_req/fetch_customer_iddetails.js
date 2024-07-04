document.addEventListener('DOMContentLoaded', function() {
    const shopId = "<?php echo $_SESSION['shopId']; ?>";

    // Fetch customer data to populate the customer ID dropdown
    fetch(`../../controller/php/fetch_customer_id.php?shopId=${shopId}`)
        .then(response => response.json())
        .then(data => {
            const customerSelect = document.getElementById('customerId');
            const customerIdSelect = document.getElementById('customerId');
            
            data.forEach(customer => {
                const option = document.createElement('option');
                option.value = customer.CUSTOMERID;
                option.text = `${customer.NAME} (${customer.CUSTOMERID})`;
                customerIdSelect.add(option);
               
            });
        })
        .catch(error => console.error('Error fetching customers:', error));
        
    document.getElementById('customerId').addEventListener('change', function() {
        const customerId = this.value;
        fetch(`../../controller/php/fetch_customer_details.php?customerId=${customerId}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('customerGSTNo').value = `${data.GSTNO}`;
                document.getElementById('customerAddress').value = `${data.ADDRESS}`;
                document.getElementById('customerPhone').value = `${data.PHONENO}`;
                document.getElementById('customerName').value = `${data.NAME}`;
                
                console.log(data);
            })
            .catch(error => console.error('Error fetching customer details:', error));
    });

});

// function StoreCustomerId() {
//     const customerId = document.getElementById('customerId').value;
//     localStorage.setItem('customerId', customerId);
// }