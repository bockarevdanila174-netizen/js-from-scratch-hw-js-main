/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resource,amount){
  if( !(resource in game.resources)){
    throw new Error("Invalid resource")
  }
  game.resources[resource] += amount;
  
}
}
game.addResource("silver",50)
game.addResource("gold",150)
console.log(game.resources)

// function  addResource(resource,amount){
//   if( resource in game ){
//     return  "Invalid resource"
//   }
//   return game[resource] = amount
// }
// console.log(addResource())
// console.log(game)
