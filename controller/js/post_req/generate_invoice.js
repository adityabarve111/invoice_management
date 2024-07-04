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
        fetch('../../controller/php/set_customer_id.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ customerId: customerId })
        })
        .then(response => response.json())
        .then(result => {
            console.log('Result from set_customer_id.php:', result);
            if (result.success) {
                console.log('Customer ID set successfully in session');
                return fetch('../../controller/php/fetch_customer_details.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ customerId: customerId })
                });
            } else {
                throw new Error('Failed to set customer ID in session');
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Fetched Customer Data:', data);
            document.getElementById('customerGSTNo').value = data.GSTNO || '';
            document.getElementById('customerAddress').value = data.ADDRESS || '';
            document.getElementById('customerPhone').value = data.PHONENO || '';
            document.getElementById('Name').value = data.NAME || '';

            console.log('Sending customer data to set_customer_details.php:', data);

            return fetch('../../controller/php/set_customer_details.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    customerId: customerId,
                    GSTNo: data.GSTNO,
                    address: data.ADDRESS,
                    phone: data.PHONENO,
                    name: data.NAME
                })
            });
        })
        .then(response => response.json())
        .then(result => console.log('Result from set_customer_details.php:', result))
        .catch(error => console.error('Error setting customer details:', error));
    });

    // FETCH PRODUCT DATA
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

    const generateInvoiceForm = document.getElementById('generateInvoiceForm');
    generateInvoiceForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(generateInvoiceForm);
        const invoiceData = {
            invoiceId: formData.get('invoiceId'),
            customerId: formData.get('customerId'),
            shopId: formData.get('shopId'),
            productId: formData.getAll('productId[]'),
            quantity: formData.getAll('quantity[]'),
            totalAmount: formData.get('totalAmount'),
            paymentStatus: formData.get('paymentStatus')
        };

        console.log('Sending invoice data to generate invoice:', invoiceData);

        fetch(generateInvoiceForm.action, {
            method: 'POST',
            body: JSON.stringify(invoiceData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.text())
        .then(data => {
            console.log('Invoice generated:', data);
            alert(data);
            generatePDF(invoiceData);
        })
        .catch(error => console.error('Error generating invoice:', error));
    });

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

    function generatePDF(invoiceData) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text(20, 20, `Invoice ID: ${invoiceData.invoiceId}`);
        doc.text(20, 30, `Customer ID: ${invoiceData.customerId}`);
        doc.text(20, 40, `Total Amount: ${invoiceData.totalAmount}`);
        doc.text(20, 50, `Payment Status: ${invoiceData.paymentStatus}`);
        doc.text(20, 60, `Products:`);
        invoiceData.productId.forEach((productId, index) => {
            const quantity = invoiceData.quantity[index];
            doc.text(30, 70 + index * 10, `Product ID: ${productId}, Quantity: ${quantity}`);
        });
        doc.save(`invoice_${invoiceData.invoiceId}.pdf`);
        console.log('PDF generated for invoice:', invoiceData.invoiceId);
    }
});
