export const LocalStorage = {
  get: (key) => {
    return localStorage.getItem(key);
  },
  set: (key, value) => {
    localStorage.setItem(key, value);
  },
};

export const useStorage = () => {
  const getItem = (key) => {
    return LocalStorage.get(key);
  };

  const setItem = (key, value) => {
    LocalStorage.set(key, value);
  };

  return { getItem, setItem };
};

export const STORAGE_KEYS = {
  ACTIVE_CATEGORY_ID: 'activeCategoryId',
  REMEMBERED_DESCRIPTIONS: 'rememberedDescriptions',
};
