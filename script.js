document.addEventListener('DOMContentLoaded', function() {
    const properties = [
        { name: 'Casa en el centro', address: 'Calle Mayor 1, Madrid', price: '250,000€', status: 'Disponible' },
        { name: 'Apartamento en la playa', address: 'Avenida de la Costa 25, Valencia', price: '180,000€', status: 'Vendido' }
    ];

    const clients = [
        { name: 'Juan Pérez', phone: '612345678', email: 'juan@email.com', interest: 'Casa en el centro' },
        { name: 'María López', phone: '623456789', email: 'maria@email.com', interest: 'Apartamento en la playa' }
    ];

    const propertiesTable = document.getElementById('propertiesTable').getElementsByTagName('tbody')[0];
    const clientsTable = document.getElementById('clientsTable').getElementsByTagName('tbody')[0];

    properties.forEach(property => {
        const row = propertiesTable.insertRow();
        row.insertCell(0).textContent = property.name;
        row.insertCell(1).textContent = property.address;
        row.insertCell(2).textContent = property.price;
        row.insertCell(3).textContent = property.status;
    });

    clients.forEach(client => {
        const row = clientsTable.insertRow();
        row.insertCell(0).textContent = client.name;
        row.insertCell(1).textContent = client.phone;
        row.insertCell(2).textContent = client.email;
        row.insertCell(3).textContent = client.interest;
    });
});
