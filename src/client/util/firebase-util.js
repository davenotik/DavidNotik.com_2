export const snapshotToObjectList = snapshot => {
  const list = [];
  snapshot.forEach(entry => {
    const obj = entry.data();
    obj.id = entry.id;
    list.push(obj);
  });
  return list;
};
