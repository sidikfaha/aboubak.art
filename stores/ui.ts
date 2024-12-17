export const useUiStore = defineStore("ui", {
  state: () => ({
    _darkMode: true,
    _loading: true,
    _drawer: false,
  }),

  actions: {
    toggleDarkMode() {
      this._darkMode = !this._darkMode;
      localStorage.setItem("darkMode", this._darkMode.toString());
    },
    async setDarkMode(value: boolean) {
      this._darkMode = value;
      localStorage.setItem("darkMode", value.toString());
    },
    setLoading(value: boolean) {
      this._loading = value;
    },
    setDrawerOpen(value: boolean) {
      this._drawer = value;
    }
  },

  getters: {
    darkMode: (state) => state._darkMode,
    loading: (state) => state._loading,
    drawerOpen: (state) => state._drawer,
  },
});
