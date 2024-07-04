document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('productList');
    const totalAmountInput = document.getElementById('totalAmount');

    // Fetch products to populate the product list
    fetch('../../controller/php/fetch_product.php')
        .then(response => response.json())
        .then(data => {
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

            // Add event listener to update total amount
            productList.addEventListener('input', updateTotalAmount);
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

        fetch(generateInvoiceForm.action, {
            method: 'POST',
            body: JSON.stringify(invoiceData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            generatePDF(invoiceData);
        })
        .catch(error => console.error('Error:', error));
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
    }
});
