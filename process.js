module.exports = data => {
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

  let result = {};
  for (const key in data) {
    result[key] = [];
    const currentPoint = data[key][0]; // 540
    const availablePoint = data[key][1]; // 560
    const weight = data[key][2]; // 60
    const effort = data[key][3]; // 80
    const targetGrade = data[key][4];

    const effortGrade = (effort / totalEffort) * (targetGrade - totalGrade); //  80 / 90   * 95 - 92.057
    const grade = (currentPoint / availablePoint) * weight ; // 96.4 * 0.6
    const effortWeight = effortGrade + grade;
    const targetCategoryScore = (effortWeight / weight) * 100;
    result[key].push((currentPoint / availablePoint * 100));
    result[key].push(targetCategoryScore);
  }
  return result;
}