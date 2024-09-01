// app/assets/javascripts/kanban.js

document.addEventListener('DOMContentLoaded', () => {
    if (typeof Sortable === 'undefined') {
      console.error('Sortable is not loaded.');
      return;
    }
  
    const columns = document.querySelectorAll('.column');
    
    columns.forEach(column => {
      Sortable.create(column, {
        group: 'tasks',
        animation: 150,
        onEnd: (event) => {
          console.log(`Moved task ${event.item.dataset.id} to column ${event.from.dataset.status}`);
        }
      });
    });
  });
  