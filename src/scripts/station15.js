async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  const result = await test();
  return await result;
}

function test() {
  const createData = [{
      id: 1,
      first_name: "優",
      family_name: "大木",
      affilication: "TechTrain",
      is_student: false,
    },
    {
      id: 2,
      first_name: "太郎",
      family_name: "山田",
      affilication: "HogeHoge大学",
      is_student: true,
    },
  ].map((student) => {
    return {
      ...student,
      full_name: student.family_name + " " + student.first_name,
    };
  });

  return new Promise((resolve) => {
    resolve(createData);
  });

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        data
      )
    }, 3000);
  })
}