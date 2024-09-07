# app/controllers/tasks_controller.rb
class TasksController < ApplicationController
  before_action :set_task, only: [:show, :edit, :update, :destroy]

  # GET /tasks
  def index
    @tasks = Task.all
  end

  # GET /tasks/:id
  def show
  end

  # GET /tasks/new
  def new
    @task = Task.new
  end

  # POST /tasks
  def create
    @task = Task.new(task_params)
    if @task.save
      redirect_to tasks_path, notice: 'Task was successfully created.'
    else
      render :new
    end
  end

  # GET /tasks/:id/edit
  def edit
  end

  # PATCH/PUT /tasks/:id
  def update
    if @task.update(task_params)
      head :ok
    else
      head :unprocessable_entity
    end
  end

  # DELETE /tasks/:id
  def destroy
    if @task.destroy
      head :ok
    else
      head :unprocessable_entity
    end
  end

  private

  # Callback to set the task before certain actions
  def set_task
    @task = Task.find(params[:id])
  end

  # Only allow a list of trusted parameters through
  def task_params
    params.require(:task).permit(:title, :description, :status, :priority, :due_date, :category, :user_id)
  end
end
