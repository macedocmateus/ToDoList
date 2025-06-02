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

export default function TaskItem() {
  const [isEditing, setIsEditing] = React.useState(false)

  function handleEditTask() {
    setIsEditing(true)
  }

  function handleExitEditTask() {
    setIsEditing(false)
  }

  return (
    <Card size="md" className="flex items-center gap-4">
      {!isEditing ? (
        <>
          <InputCheckbox />
          <Text className="flex-1">🛒 Fazer compras da semana</Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </>
      ) : (
        <>
          <InputText className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XIcon}
              variant="secondary"
              onClick={handleExitEditTask}
            />
            <ButtonIcon icon={CheckIcon} variant="primary" />
          </div>
        </>
      )}
    </Card>
  )
}
