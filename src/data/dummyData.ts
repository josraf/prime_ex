export const dummyData = [
  {
    id: 1,
    key: {
      model: "Urus",
      maker: "Lamborghini",
      year: "2017",
      transmissionType: "Automatic",
    },
  },
  {
    id: 2,
    key: {
      model: "Cayenne Turbo",
      maker: "Porsche",
      year: "2018",
      transmissionType: "Automatic",
    },
  },
  {
    id: 3,
    key: {
      model: "Durango SRT",
      maker: "Dodge",
      year: "2018",
      transmissionType: "Automatic",
    },
  },
  {
    id: 4,
    key: {
      model: "Juke Nismo RS",
      maker: "Nissan",
      year: "2014",
      transmissionType: "Manual",
    },
  },
  {
    id: 5,
    key: {
      model: "Escalade ESV",
      maker: "Cadillac",
      year: "2012",
      transmissionType: "Automatic",
    },
  },
  {
    id: 6,
    key: {
      model: "Levante S",
      maker: "Maserati",
      year: "2017",
      transmissionType: "Automatic",
    },
  },
];

export const retrieveData = (filters: any) => {
  return dummyData.filter((item) => {
    return Object.entries(filters).every(([key, value]) => {
      return value === "All" || item.key[key] === value;
    });
  });
};
