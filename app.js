//1) დავწეროთ ფუნქცია რომელსაც გადაეცემა რაიმე პარამეტრი და არგუმენტად
//მიიღებს ისეთ რიცხვებს რომლის დახმარებითაც უნდა გამოვითვალო
//მაგალითად რამდენი წელი გვაკლდება თითოეულს პენსიამდე და ეს
//ყველაფერი უნდა დავწეროთ ამ ფუნქციაში.
//answer:



// function retireAgeCalculator (currentAge) {
//     let retireAge = 60;
//     let Age = currentAge;
//     let TimeBeforeRetire = retireAge - Age;
//     if (Age < 0) {
//         console.log('error')
//     } else {
//         console.log(TimeBeforeRetire)
//     }
// }

// retireAgeCalculator(prompt("enter your age"))



//2)შექმენით კალკულატორის ფუნქცია სახელად კალკულატორი,
// რომელიც ასრულებს ძირითად არითმეტიკულ ოპერაციებს.
// ამ ფუნქციამ უნდა მიიღოს სამი პარამეტრი: ორი რიცხვი და სტრიქონი,მაგალითად num1,num2, "+".
// რომელიც წარმოადგენს არითმეტიკულ ოპერატორს ('+', '-', '*', '/').
// მოწოდებული ოპერატორის მიხედვით, ფუნქციამ უნდა შეასრულოს შესაბამისი ოპერაცია ორ ნომერზე და დააბრუნოს შედეგი.
//answer:


    // function calculator(num1, move, num2){
    //     if (num1 === '' || move === '' || num2 === '') {
    //         console.log('enter something')
    //     } else if(move === '+') {
    //         console.log(parseInt(num1) + parseInt(num2))
    //     } else if(move === '-') {
    //         console.log(num1 - num2)
    //     } else if(move === '*') {
    //         console.log(num1 * num2)
    //     } else if(move === '/') {
    //         console.log(num1 / num2)
    //     } else{
    //         console.log('error')
    //     }
    // }

    // calculator(prompt('num1'), prompt('move'), prompt('num2'))



//3)შეიმუშავეთ ფუნქცია სახელწოდებით checkPasswordStrength, რომელიც აფასებს მოცემული პაროლის სიძლიერეს.
// პაროლის სიძლიერე განისაზღვრება რამდენიმე კრიტერიუმის საფუძველზე: ის უნდა იყოს მინიმუმ 8 სიმბოლო და მაქსიმუმ 16 სიმბოლო;
// ფუნქციამ უნდა დააბრუნოს სტრიქონი სადაც გვეწერება რომ თუ ნაკლებია 8 მაშინ შესაბამისი ერორით თუ მეტია 16 მაშინ შესაბამისი ერრორით და თუ ცარიელია input უნდა შევამოწმოთ ეგეც
//გამოიყენეთ if-else განცხადებები თითოეული კრიტერიუმის შესამოწმებლად და სიძლიერის შესაფასებლად.


// function checkPasswordStrength(password){
//     if (password === '') {
//         console.log('enter something')
//     } else if(password < 8 ) {
//         console.log('it must be more then 8')
//     } else if(password > 16 ){
//         console.log('it must be less then 16')
//     }else{
//         console.log('welcome')
//     }

//     return checkPasswordStrength
// }

// checkPasswordStrength(prompt('enter your password'))

//4) დაწერეთ ფუქნცია სადაც პარამეტრად გავატანთ flowers და არგუმენტად გავატანთ ყვავილების სახეობებს.
//და გვჭირდება რომ switch case დავწეროთ ლოგიკა რომ თუ შესაბამისი სახელის ყვავილები გვაქვს მაშინ დავაბრუნოთ console-ში 
//ეს ყვავილი ნაპოვნია!!


// function findflowers(flowers){
//     switch (flowers) {
//         case 'lily':
//         case 'orchid':
//         case 'tulip':
//         case 'aster':
//         case 'daffodil':
//             console.log('napovnia')
//             break;
    
//         default:
//             console.log('cant find')
//             break;
//     }

// }

// findflowers(prompt('enter flower type'))


//5)გვჭირდება სამი prompt.გვჭირდება რომ ამ სამ ინფუტში შემოყვანილი რიცხვებიდან რომელი არის უდიდესი ის დავიჭიროთ და დავლოგოთ უბრალოდ.
// მაგალითად.2,5,7 და აქედან უდიდესი არის 7.
//დაწერეთ ფუნქციაში ეს ყველაფერი და შემდეგ ამ ფუნქციაში შეამოწმეთ if else დახმარებით!!
// ეს ყველაზე მარტივია ახალი მიდგომაა


// function biggestNum(a, b, c){
    
//     console.log(Math.max(a, b, c))
// }

// biggestNum(prompt('num1'), prompt('num2'), prompt('num3'))