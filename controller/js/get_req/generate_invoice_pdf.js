document.addEventListener('DOMContentLoaded', function() {
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
