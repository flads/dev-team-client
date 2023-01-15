const LOCAL_STORAGE_NAME = 'dev-team';

export function setItemInLocalStorage(key: string, value: any) {
  const devTeamLocalStorage = localStorage.getItem(LOCAL_STORAGE_NAME);

  if (value) {
    const localStorageObject = devTeamLocalStorage
      ? JSON.parse(devTeamLocalStorage)
      : {};

    localStorageObject[key] = value;

    localStorage.setItem(
      LOCAL_STORAGE_NAME,
      JSON.stringify(localStorageObject)
    );
  }
}

export function getItemFromLocalStorage(key: string) {
  const devTeamLocalStorage = localStorage.getItem(LOCAL_STORAGE_NAME);

  if (devTeamLocalStorage) {
    const localStorageObject = JSON.parse(devTeamLocalStorage);

    return localStorageObject[key];
  }
}
