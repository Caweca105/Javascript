const getSleepHours = day => {
    if (day === 'Monday') {
      return 8;
    } else if (day === 'Tuesday') {
      return 9;
    } else if (day === 'Wednesday') {
      return 7;
    } else if (day === 'Thursday')  {
      return 5;
    } else if (day === 'Friday')  {
      return 6;
    } else if (day === 'Saturday')  {
      return 10;
    } else if (day === 'Sunday')  {
      return 12;
    }
  };
  
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  
  const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log('You have the perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You need to get more sleep');
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`You got ${idealSleepHours - actualSleepHours} hour(s) less sleep than you needed this week. Get some rest.`);
    }
  }
  
  calculateSleepDebt();