import Text from './components/text'
import Icon from './components/icon'
import TrashIcon from './assets/Trash-Regular.svg?react'
import CheckIcon from './assets/Check-Regular.svg?react'
import PencilIcon from './assets/PencilSimple-Regular.svg?react'
import PlusIcon from './assets/Plus-Regular.svg?react'
import SpinnerIcon from './assets/spinner.svg?react'
import XIcon from './assets/X-Regular.svg?react'

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text variant={'body-md-bold'} className="text-pink-base">
          Olá Mundo
        </Text>
        <Text className="text-green-base">Olá Mundo</Text>
        <Text variant={'body-md-bold'}>Olá Mundo</Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-green-base" />
        <Icon svg={CheckIcon} className="fill-green-base" />
        <Icon svg={PencilIcon} className="fill-green-base" />
        <Icon svg={PlusIcon} className="fill-green-base" />
        <Icon svg={SpinnerIcon} className="fill-green-base" />
        <Icon svg={XIcon} className="fill-green-base" />
      </div>
    </div>
  )
}
