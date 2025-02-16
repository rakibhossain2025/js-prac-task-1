function multinumbers(numbers, terget){
  let count =0
  for(let i =0; i<numbers.length ; i++){
    if(numbers[i]===terget){
      count++;
    }
  }
  return count;
}
const num =[5,6,11,12,98, 5]
const terget = 5
console.log(multinumbers(num,terget))



function multi(numbers, terget){
  let found = 0;
  for(const number of numbers){
    if(number===terget){
      found++
    }
  }
  return found>0?found:'not found'
}

console.log(multi([5,6,11,12,98, 5],5))