function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

export const dayObject = {
  required: {
    value: true,
    message: "This is Required",
  },
  pattern: {
    value: /^([1-9]|0[1-9]|1\d|2[0-9]|3[01])$/,
    /*  /^(?:[1-9]|[12]\d|3[01])$/ no leading Zeros */
    message: "Must be a valid day",
  },
  validate: {
    correctDate: (day, { dayResult, monthResult, yearResult }) => {
      const daysInMonths = {
        1: 31,
        2: isLeapYear(yearResult) ? 29 : 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31,
      };

      const selectedOption = parseInt(monthResult, 10);
      const selectedValue = daysInMonths[selectedOption];

      if (dayResult > selectedValue) {
        return "The date is invalid";
      }
    },
  },
};

export const monthObject = {
  required: {
    value: true,
    message: "This is Required",
  },
  pattern: {
    value: /^([1-9]|0[1-9]|1[0-2])$/,
    /* /^(?:[1-9]|1[0-2])$/ no leading Zeros*/
    message: "Must be a valid Month",
  },
};

export const yearObject = {
  required: {
    value: true,
    message: "This is Required",
  },

  maxLength: {
    value: 4,
    message: "Must be a valid Year",
  },

  minLength: {
    value: 4,
    message: "Must be a valid Year",
  },

  validate: {
    notFuture: (value) => {
      return value <= new Date().getFullYear() || "Must be in the Past";
    },
    notFutureDate: (val, { dayResult, monthResult, yearResult }) => {
      const currentDate = new Date();

      const inputDate = new Date(
        `${val},${monthResult},${parseInt(dayResult)}`
      );

      return currentDate > inputDate || "The date is invalid";
    },
  },
};
