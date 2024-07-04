document.getElementById('customerId').addEventListener('change', function() {
    const customerId = this.value;
    console.log('Sending customerId to fetch_customer_details.php:', customerId);

    fetch(`../../controller/php/fetch_customer_details.php?customerId=${customerId}`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Customer Data:', data);
        document.getElementById('customerGSTNo').value = data.GSTNO || '';
        document.getElementById('customerAddress').value = data.ADDRESS || '';
        document.getElementById('customerPhone').value = data.PHONENO || '';
        document.getElementById('Name').value = data.NAME || '';

        console.log('Sending customer data to set_customer_details.php:', data);

        return fetch(`../../controller/php/set_customer_details.php?customerId=${customerId}&GSTNo=${data.GSTNO}&address=${data.ADDRESS}&phone=${data.PHONENO}&name=${data.NAME}`, {
            method: 'GET'
        });
    })
    .then(response => response.json())
    .then(result => console.log('Result from set_customer_details.php:', result))
    .catch(error => console.error('Error setting customer details:', error));
});
