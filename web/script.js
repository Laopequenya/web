document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los botones de los menús desplegables
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const menuId = this.getAttribute('data-menu');
            const menu = document.getElementById(menuId);
            const sidebar = this.closest('.sidebar'); // Div contenedor de cada menú
            
            if (menu.style.display === 'block') {
                // Cierra el menú y restaura la imagen de fondo
                menu.style.display = 'none';
                if (sidebar.id === 'left-sidebar') {
                    sidebar.classList.remove('open-left');
                } else if (sidebar.id === 'right-sidebar') {
                    sidebar.classList.remove('open-right');
                }
            } else {
                // Cierra otros menús antes de abrir este
                document.querySelectorAll('.menu').forEach(m => m.style.display = 'none');
                document.querySelectorAll('.sidebar').forEach(s => {
                    s.classList.remove('open-left', 'open-right');
                });

                // Abre el menú y cambia la imagen de fondo
                menu.style.display = 'block';
                if (sidebar.id === 'left-sidebar') {
                    sidebar.classList.add('open-left');
                } else if (sidebar.id === 'right-sidebar') {
                    sidebar.classList.add('open-right');
                }
            }
        });
    });
});
