export function makeDepartmentNamePretty(name: string) {
  const space = name.replace("_", " ");
  return space.charAt(0).toUpperCase() + space.slice(1);
}

export function makeDatePretty(date: string | undefined) {
  if (!date) return;
  const list = date.split(" ");
  list.splice(4);
  return list.join(" ");
}
