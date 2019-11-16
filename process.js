const data = {
  "homework": [540, 560, 60, 80],
  "lecture": [85, 100, 35, 10],
  "lab": [89, 100, 5, 0]
}

const targetGrade = 95;

let totalGrade = 0;
let totalEffort = 0;

for (const key in data) {
  const currentPoint = data[key][0];
  const availablePoint = data[key][1];
  const weight = data[key][2];
  const effort = data[key][3];
  const grade = (currentPoint / availablePoint) * weight;
  totalGrade += grade;
  totalEffort += effort;
}

const calculateGrade = theData => {
  let result = {};
  for (const key in theData) {
    result[key] = [];
    const currentPoint = theData[key][0]; // 540
    const availablePoint = theData[key][1]; // 560
    const weight = theData[key][2]; // 60
    const effort = theData[key][3]; // 80

    const effortGrade = (effort / totalEffort) * (targetGrade - totalGrade); //  80 / 90   * 95 - 92.057
    const grade = (currentPoint / availablePoint) * weight ; // 96.4 * 0.6
    const effortWeight = effortGrade + grade;
    const targetCategoryScore = (effortWeight / weight) * 100;
    result[key].push((currentPoint / availablePoint * 100));
    result[key].push(targetCategoryScore);
  }
  return result;
}

const output = calculateGrade(data);
console.log(output);
