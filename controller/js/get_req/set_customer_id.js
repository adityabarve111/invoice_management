document.addEventListener('DOMContentLoaded', function() {
    const shopId = "<?php echo $_SESSION['shopId']; ?>";

    // Fetch customer data to populate the customer ID dropdown
    fetch(`../../controller/php/fetch_customer_id.php?shopId=${shopId}`)
        .then(response => response.json())
        .then(data => {
            console.log('Fetched customer data:', data);
            const customerSelect = document.getElementById('customerId');
            data.forEach(customer => {
                const option = document.createElement('option');
                option.value = customer.CUSTOMERID;
                option.text = `${customer.NAME} (${customer.CUSTOMERID})`;
                customerSelect.add(option);
            });
        })
        .catch(error => console.error('Error fetching customers:', error));

    document.getElementById('customerId').addEventListener('change', function() {
        const customerId = this.value;
        console.log('Sending customerId to set_customer_id.php:', customerId);

        // Send the customerId to the server to set it in the session
        fetch(`../../controller/php/set_customer_id.php?customerId=${customerId}`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(result => {
            console.log('Result from set_customer_id.php:', result);
            if (result.success) {
                console.log('Customer ID set successfully in session');
            } else {
                throw new Error('Failed to set customer ID in session');
            }
        })
        .catch(error => console.error('Error setting customer ID:', error));
    });
});
