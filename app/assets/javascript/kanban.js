document.addEventListener('DOMContentLoaded', () => {
  const columns = document.querySelectorAll('.column');
  const trashCan = document.getElementById('trash-can');

  const updateTask = (taskId, method, body = null) => {
    return fetch(`/tasks/${taskId}`, { 
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
      },
      body: body ? JSON.stringify(body) : null
    });
  };

  // Function to manage the drop event
  const handleTaskDrop = (event) => {
    const taskId = event.item.dataset.id;
    const newStatus = event.to.dataset.status;

    if (!taskId) {
      console.error('Task ID not found');
      return;
    }

    if (newStatus === 'delete') {
      updateTask(taskId, 'DELETE')
        .then(response => {
          if (response.ok) {
            document.querySelector(`[data-id='${taskId}']`).remove();
          } else {
            console.error('Failed to delete task');
          }
        })
        .catch(error => console.error('Error:', error));
    } else {
      updateTask(taskId, 'PATCH', { task: { status: newStatus } })
        .then(response => {
          if (!response.ok) {
            console.error('Failed to update task status');
          }
        })
        .catch(error => console.error('Error:', error));
    }
  };

  // Set up the sortable
  const sortableConfig = {
    group: 'tasks',
    animation: 150,
    onEnd: handleTaskDrop
  };

  // Crreate the sortables
  columns.forEach(column => Sortable.create(column, sortableConfig));
  Sortable.create(trashCan, sortableConfig);
});
