function showForm(formId) {
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => {
        if (form.id === formId) {
            form.classList.add('active'); // Az aktuális formot megjelenítjük
        } else {
            form.classList.remove('active'); // A többi formot elrejtjük
        }
    });
}

// Kezdetben a vásárlás formot mutatjuk
document.addEventListener('DOMContentLoaded', () => {
    showForm('vasarlasForm');
});
