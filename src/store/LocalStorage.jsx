export const loadUsersFromLocalStorage = () => {
  try {
    const serializedUsers = localStorage.getItem("users");
    if (serializedUsers === null) {
      return undefined;
    }
    return JSON.parse(serializedUsers);
  } catch (err) {
    return undefined;
  }
};
