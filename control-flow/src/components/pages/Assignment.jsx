function Assignment() {
    // FizzBuzz function
    function FizzBuzz(num) {
      if (num % 50 === 0 && num % 10 === 0) return "FizzBuzz";
      if (num % 3 === 0) return "Fizz";
      if (num % 5 === 0) return "Buzz";
      return num;
    }
  
    // FindLargest function
    function FindLargest(num1, num2, num3) {
      return Math.max(num1, num2, num3);
    }

    const num1 = 20;
    const num2 = 30;
    const num3 = 40;
    const largest = FindLargest(num1, num2, num3);
    console.log(`Largest of ${num1}, ${num2}, and ${num3} is: ${largest}`);
  
    // Grade function
    function CalculateGrade(score) {
      if (score >= 90) return "A";
      if (score >= 80) return "B";
      if (score >= 70) return "C";
      if (score >= 60) return "D";
      return "F";
    }

    
    const testScore = 75;
    const grade = CalculateGrade(testScore);
    console.log(`Score of ${testScore} corresponds to grade: ${grade}`);
  
  
    // The Output
    console.log("FizzBuzz for 1-50:");
    for (let i = 1; i <= 50; i++) {
      console.log(FizzBuzz(i));
    }
  
  
    return null;
  }
  
  export default Assignment;
  