document.addEventListener('DOMContentLoaded', function() {
    const addProductTab = document.getElementById('addProductTab');
    const viewProductsTab = document.getElementById('viewProductsTab');
    const addCustomerTab = document.getElementById('addCustomerTab');
    const viewCustomersTab = document.getElementById('viewCustomersTab');
    const generateInvoiceTab = document.getElementById('generateInvoiceTab');
    const viewInvoiceTab = document.getElementById('viewInvoiceTab');
    const addProductForm = document.getElementById('addProductForm');
    const addCustomerForm = document.getElementById('addCustomerForm');
    const viewproductform = document.getElementById('viewProduct');
    const viewcustomerform = document.getElementById('viewCustomer');
    const generateInvoiceForm = document.getElementById('generateInvoiceForm');

    addProductTab.addEventListener('click', function() {
        addProductForm.style.display = 'block';
        addCustomerForm.style.display = 'none';
        viewproductform.style.display = 'none';
        viewcustomerform.style.display = 'none';
        generateInvoiceForm.style.display = 'none';
    });

    addCustomerTab.addEventListener('click', function() {
        addCustomerForm.style.display = 'block';
        addProductForm.style.display = 'none';
        viewproductform.style.display = 'none';
        viewcustomerform.style.display = 'none';
        generateInvoiceForm.style.display = 'none';
    });

    viewProductsTab.addEventListener('click', function() {
        addCustomerForm.style.display = 'none';
        addProductForm.style.display = 'none';
        viewproductform.style.display = 'block';
        viewcustomerform.style.display = 'none';
        generateInvoiceForm.style.display = 'none';
    });

    viewCustomersTab.addEventListener('click', function() {
        addCustomerForm.style.display = 'none';
        addProductForm.style.display = 'none';
        viewproductform.style.display = 'none';
        viewcustomerform.style.display = 'block';
        generateInvoiceForm.style.display = 'none';
    });

    generateInvoiceTab.addEventListener('click', function() {
        addCustomerForm.style.display = 'none';
        addProductForm.style.display = 'none';
        viewproductform.style.display = 'none';
        viewcustomerform.style.display = 'none';
        generateInvoiceForm.style.display = 'block';
    });

    // Initially disable other tabs
    //viewProductsTab.classList.add('disabled');
    //viewCustomersTab.classList.add('disabled');
    //generateInvoiceTab.classList.add('disabled');
    //viewInvoiceTab.classList.add('disabled');
});
