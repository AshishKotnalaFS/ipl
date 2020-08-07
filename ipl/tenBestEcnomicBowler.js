function matchIdWhichHeldOn2015(data1) {
  let idOf2015Matches = [];
  for (let i = 0; i < data1.length; i++) {
    if (data1[i].season == 2015) {
      idOf2015Matches.push(data1[i].id);
    }
  }
  return idOf2015Matches;
}
