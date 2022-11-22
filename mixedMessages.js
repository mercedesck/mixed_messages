function randomNumber(num) {
    return Math.floor(Math.random() * num)
  }
  
  const inspirationalMessage = {
    word: ['Perseverance', 'Challenge', 'Determination', 'Freedom'],
    quote: ['It always seems impossible until it is done', 'The greater the obstacle, the more glory in overcoming it', 'Victory is always possible for the person who refuses to stop fighting', 'The only real prison is fear, and the only real freedom is freedom from fear'],
    todo: ['Never give up', 'Always have patience', 'Try something new', 'Believe in yourself']
  }
  
  let personalMessage = []

  for(let mess in inspirationalMessage) {
    let wordIndex = randomNumber(inspirationalMessage[mess].length)
	
    switch(mess) {
      case 'word':
        personalMessage.push(`Your inspirational word is "${inspirationalMessage[mess][wordIndex]}".`)
        break
      case 'quote':
        personalMessage.push(`Today's inspirational quote is: "${inspirationalMessage[mess][wordIndex]}".`)
        break
      case 'todo':
        personalMessage.push(`You should "${inspirationalMessage[mess][wordIndex]}".`)
        break
      default:
        personalMessage.push('There is not enough info.')
    }
  }
  
  function finalMessage(message) {
    const joinMessage = personalMessage.join(' ')
    console.log(joinMessage)
  }
  
  finalMessage(personalMessage);