document.addEventListener('DOMContentLoaded', () => {
  const columns = document.querySelectorAll('.column');
  
  columns.forEach(column => {
    Sortable.create(column, {
      group: 'tasks',
      animation: 150,
      onEnd: (event) => {
        const taskId = event.item.dataset.id;
        const newStatus = event.to.dataset.status;
        
        fetch(`/tasks/${taskId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
          },
          body: JSON.stringify({ task: { status: newStatus } })
        }).then(response => {
          if (!response.ok) {
            console.error('Failed to update task status');
          }
        }).catch(error => {
          console.error('Error:', error);
        });
      }
    });
  });
});
