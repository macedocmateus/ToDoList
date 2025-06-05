import Badge from '../components/badge'
import Button from '../components/button'
import ButtonIcon from '../components/button-icon'
import Card from '../components/card'
import Container from '../components/container'
import Icon from '../components/icon'
import InputCheckbox from '../components/input-checkbox'
import InputText from '../components/input-text'
import Skeleton from '../components/skeleton'
import Text from '../components/text'

import CheckIcon from '../assets/Check-Regular.svg?react'
import PlusIcon from '../assets/Plus-Regular.svg?react'
import PencilIcon from '../assets/PencilSimple-Regular.svg?react'
import SpinnerIcon from '../assets/spinner.svg?react'
import TrashIcon from '../assets/Trash-Regular.svg?react'
import XIcon from '../assets/X-Regular.svg?react'

export default function PageComponents() {
  return (
    <Container>
      <div className="grid gap-10">
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

        <div className="flex gap-1">
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge loading>5</Badge>
        </div>

        <div>
          <Button icon={PlusIcon}>Nova Tarefa</Button>
          <Button icon={PlusIcon} handling>
            Criando...
          </Button>
        </div>

        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
          <ButtonIcon icon={TrashIcon} loading />
          <ButtonIcon icon={TrashIcon} handling />
        </div>

        <div>
          <InputText />
        </div>

        <div>
          <InputCheckbox />
          <InputCheckbox loading />
        </div>

        <div>
          <Card size="md">Olá Mundo</Card>
        </div>
      </div>

      <div className="space-y-2">
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
        <Skeleton className="w-96 h-6" />
      </div>
    </Container>
  )
}
