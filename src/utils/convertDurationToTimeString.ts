export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600) // Math.floor arredonda pra baixo, por ex.: se tiver 3500sec ele ira arredondar pra 0h:58:00 
  const minutes = Math.floor((duration % 3600) / 60) // Pega o RESTO de segundos que sobra de horas que não fecharam e transforma em minutos.
  const seconds = (duration % 60)

  const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0')) // mapear o array criado com o cálculo feito em cima, transformando em string e tratando com o padStar, que se valor de cada index do array nao tiver 2 caractéres ele irá adicionar 0 no ínicio
    .join(':')

  return timeString;
  }

