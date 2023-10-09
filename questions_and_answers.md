
                                    MCQ TEST


    1. Write the correct answer from the following options and give an explanation (2-5 lines).
    let greeting;
    greetign = {};
    console.log(greetign);
    A: {}
    B: ReferenceError: greetign is not defined
    C: undefined

    Answer: A

        1. In first line declares a variable with the name "greeting."
        2. In the second line, an attempt is made to assign an empty object to a variable named "greetign".
        3. In the third line, you tried to log the value of the "greeting" variable.
        4. The answer is {}

    2. Write the correct answer from the following options and give an explanation (2-5 lines).
    function sum(a, b) {
    return a + b;
    }

    sum(1, "2");
    A: NaN
    B: TypeError
    C: "12"
    D: 3

    Answer: C

        1. A function sum(a, b) is defined that expects two parameters, a and b
        2. When you call the sum function, you pass 1 as the first argument and "2" as the second argument. then the answer is string beacuse the secund parameter is string
        3. number + string = string ; 1 + "2" = "12"

    3. Write the correct answer from the following options and give an explanation (2-5 lines).
    const food = ["🍕", "🍫", "🥑", "🍔"];
    const info = { favoriteFood: food[0] };

    info.favoriteFood = "🍝";

    console.log(food);
    A: ['🍕', '🍫', '🥑', '🍔']
    B: ['🍝', '🍫', '🥑', '🍔']
    C: ['🍝', '🍕', '🍫', '🥑', '🍔']
    D: ReferenceError

    Answer: A

        1. Array food is defined with four elements: 🍕, 🍫, 🥑, and 🍔.
        2. info is defined with a property favoriteFood that is initially set to the first element of the food array, which is 🍕. So, info.favoriteFood initially holds 🍕.
        3. We want to console the food but food variable is not changed so the answer is [🍕, 🍫, 🥑, and 🍔]

    4. Write the correct answer from the following options and give an explanation (2-5 lines).
    function sayHi(name) {
    return `Hi there, ${name}`;
    }

    console.log(sayHi());
    A: Hi there,
    B: Hi there, undefined
    C: Hi there, null
    D: ReferenceError

    Answer: B

        1. defined a function name "sayHi". it expect a parameter 'name'
        2. when we call the function but we not provide the parameter so the Answer is 'Hi there, undefined'

    5. Write the correct answer from the following options and give an explanation (2-5 lines).
    let count = 0;
    const nums = [0, 1, 2, 3];

    nums.forEach((num) => {
    if (num) count += 1;
    });

    console.log(count);
    A: 1
    B: 2
    C: 3
    D: 4

    Answer: C

        1. This forEach loop also work 4 time. the condition if(number) is true for three time.
        2. So the value of count is increment 3 time. so (((0+1)+1)+1) = 3;