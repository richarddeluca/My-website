import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  month: 'short',
  day: 'numeric',
  year: '2-digit',
})

export function dateDistanceToNow(date) {
  const distance = formatDistanceToNow(new Date(date), {
    locale: ptBR,
    addSuffix: true,
  })

  return distance
}
