document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('productList');
    const totalAmountInput = document.getElementById('totalAmount');

    fetch('../../controller/php/fetch_product.php')
        .then(response => response.json())
        .then(data => {
            console.log('Fetched product data:', data);
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'form-group';

                const productLabel = document.createElement('label');
                productLabel.textContent = `${product.NAME} (${product.PRODUCTID}) - Rs${product.PRICE}`;

                const quantityInput = document.createElement('input');
                quantityInput.type = 'number';
                quantityInput.className = 'form-control';
                quantityInput.name = 'quantity[]';
                quantityInput.placeholder = 'Enter Quantity';
                quantityInput.setAttribute('data-price', product.PRICE);
                quantityInput.setAttribute('data-product-id', product.PRODUCTID);

                productDiv.appendChild(productLabel);
                productDiv.appendChild(quantityInput);
                productList.appendChild(productDiv);
            });

            productList.addEventListener('input', updateTotalAmount);

            console.log('Sending product data to set_product_data.php:', data);

            fetch('../../controller/php/set_product_data.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => console.log('Result from set_product_data.php:', result))
            .catch(error => console.error('Error setting product data:', error));
        })
        .catch(error => console.error('Error fetching products:', error));

    function updateTotalAmount() {
        let totalAmount = 0;
        const quantityInputs = productList.querySelectorAll('input[name="quantity[]"]');
        quantityInputs.forEach(input => {
            const quantity = parseFloat(input.value);
            const price = parseFloat(input.getAttribute('data-price'));
            if (!isNaN(quantity) && quantity > 0) {
                totalAmount += quantity * price;
            }
        });
        totalAmountInput.value = totalAmount.toFixed(2);
        console.log('Total amount updated:', totalAmountInput.value);
    }
});
