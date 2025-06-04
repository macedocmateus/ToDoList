import ButtonIcon from '../components/button-icon'
import Card from '../components/card'
import InputCheckbox from '../components/input-checkbox'
import Text from '../components/text'
import InputText from '../components/input-text'
import TrashIcon from '../assets/Trash-Regular.svg?react'
import PencilIcon from '../assets/PencilSimple-Regular.svg?react'
import XIcon from '../assets/X-Regular.svg?react'
import CheckIcon from '../assets/Check-Regular.svg?react'
import React from 'react'
import { TaskState, type Task } from '../models/task'
import { cx } from 'class-variance-authority'
import useTask from '../hooks/use-task'

interface TaskItemProps {
  task: Task
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(
    task?.state === TaskState.Creating
  )
  const [taskTitle, setTaskTitle] = React.useState(task.title || '')
  const { updateTask, updateTaskStatus } = useTask()

  function handleEditTask() {
    setIsEditing(true)
  }

  function handleExitEditTask() {
    setIsEditing(false)
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || '')
  }

  function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log({ id: task.id, title: taskTitle })

    updateTask(task.id, { title: taskTitle })
    setIsEditing(false)
  }

  function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked

    updateTaskStatus(task.id, checked)
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            checked={task?.concluded}
            onChange={handleChangeTaskStatus}
          />
          <Text
            className={cx('flex-1', {
              'line-through': task?.concluded,
            })}
          >
            {task?.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon type="button" icon={TrashIcon} variant="tertiary" />
            <ButtonIcon
              type="button"
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText
            value={taskTitle}
            className="flex-1"
            onChange={handleChangeTaskTitle}
            required
            autoFocus
          />
          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon={XIcon}
              variant="secondary"
              onClick={handleExitEditTask}
            />
            <ButtonIcon type="submit" icon={CheckIcon} variant="primary" />
          </div>
        </form>
      )}
    </Card>
  )
}
