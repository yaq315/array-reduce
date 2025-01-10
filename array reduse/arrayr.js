//task1

Names=([" injustice", " SuperMan", "Batman ", " flash "])

 function cleanNames (array){

     return array.map(array=>array.trim())

 }

 document.writeln(cleanNames(Names))

//task2

 const miles = [10, 20, 30, 40];

 function  convertmilestokelometers (miles){
    const  KM =miles.map(miles=>miles*1.60934)
    console.log (KM )
    const totalDistanceInKilometers= KM .reduce((sum,km)=>sum+km,0)
    return totalDistanceInKilometers

}

console.log (convertmilestokelometers (miles))

//task3
const num=[1, 2, 3, 4, 5]
function SSA(num){
    const square= num.map(num=>num**2)
    const sum=square.reduce((sum,square)=>sum+square,0)
    const Average=sum/(num.length)
    return (Average)
   
}

console.log(SSA(num))

//task4
const numbers = [1, 2, 3, 4, 5]

function newarray(numbers){
const n= numbers.map(numbers=>numbers+4)
return (n)
}
console.log(newarray(numbers))


 //task5
 const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 function PSS(number){
    const postive=number.filter(number=>number % 2 === 0)
    const squ= postive.map(postive=>postive*2)
    console.log(squ)
    const  total= squ.reduce((sum,squ)=>sum+squ,0)
    return total
 }
console.log(PSS(number))



//task6
const words = ['apple', 'banana', 'cherry', 'date']
 const UPW= words.map(words=>words.toUpperCase())
 console.log(UPW)

 //task7

 const heros = [
    {name: 'Iron Man', power: 'Tech'},
    {name: 'Spider-Man', power: 'Spider abilities'},
    {name: 'Thor', power: 'Godly powers'},
    {name: 'Hulk', power: 'Super strength'}
    ]
    const newheros= heros.map((hero,index)=>({
        hero:hero.name,
        power:hero.power,
        id:index

    }))
    console.log(newheros)

    //task8

    const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

   function lengthword(inputWords){
    const newwords=inputWords.filter(inputWords=>inputWords.length>=7);
    return newwords
   }
   console.log(lengthword(inputWords))

   //task9

   const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const odd= numb.filter(numb=>numb % 2 !== 0)
    console.log(odd)
   const divisibleBy2or5= numb.filter(numb=>numb%5===0||numb%2===0)
   console.log(divisibleBy2or5)
   const divisibleBy=numb.filter(numb=>numb%3===0)
   const  divisibleBy3Squared=divisibleBy.map(divisibleBy=>divisibleBy**2)
   console.log(divisibleBy3Squared)

   const divisiblBy=numb.filter(numb=>numb%5===0)
   const  divisibleBy5Squared=divisiblBy.map(divisiblBy=>divisiblBy**2)
   const sumdivisibleBy5Square= divisibleBy5Squared.reduce((sum,divisibleBy5Squared)=>sum + divisibleBy5Squared,0)
   console.log(sumdivisibleBy5Square)
  
   
  //task10
  let nums = [11, 22, 33, 46, 75, 86, 97, 98];
 
    const squaredEvenNums =nums.filter(num=>num%2===0).map(num=>num**2)
   console.log(`squaredEvenNums: ${squaredEvenNums}`);
    const sum =nums.reduce((sum,num)=>sum+num,0)
  
    console.log(`Sum of array elements: ${sum}`);


  //task11
  let countries = ['India', 'United States', 'Russia', 'Japan', 'China'];

  let  filterOutWordsStartingWithUorR= countries.filter(word => !(word[0].toUpperCase() === 'U' || word[0].toUpperCase() === 'R'));
  console.log( filterOutWordsStartingWithUorR)
  
  const UP= filterOutWordsStartingWithUorR.map(word=>word.toUpperCase())
  console.log(UP)

  const w=filterOutWordsStartingWithUorR.map(word=>word.length)
  const totalw=w.reduce((sum,word)=>sum+word,0)
  console.log(totalw)

  //task12

  const numbe = [12, 45, 67, 89, 23, 56, 73, 99, 100];
  const greaterthan =numbe.filter(num=>num>50)
  console.log(greaterthan)

