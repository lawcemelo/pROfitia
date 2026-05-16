const ENTRY_STORAGE_KEY = "game-ledger-entries";
const MAP_LIST_STORAGE_KEY = "game-ledger-map-list";
const ITEM_LIST_STORAGE_KEY = "game-ledger-item-list";
const LINK_STORAGE_KEY = "game-ledger-map-item-links";
const THEME_STORAGE_KEY = "game-ledger-theme";
const PLANNED_STORAGE_KEY = "game-ledger-planned-purchases";
const MEMO_STORAGE_KEY = "game-ledger-memos";
const PLANNED_CASH_STORAGE_KEY = "game-ledger-planned-cash";
const TOP_COLLAPSED_STORAGE_KEY = "game-ledger-top-collapsed";
const TARGET_BALANCE_STORAGE_KEY = "game-ledger-target-balance";
const WEEKLY_TARGET_BALANCE_STORAGE_KEY = "game-ledger-weekly-target-balance";
const BAR_AXIS_MAX_STORAGE_KEY = "game-ledger-bar-axis-max";
const NET_AXIS_MAX_STORAGE_KEY = "game-ledger-net-axis-max";
const WEEKLY_BAR_AXIS_MAX_STORAGE_KEY = "game-ledger-weekly-bar-axis-max";
const WEEKLY_NET_AXIS_MAX_STORAGE_KEY = "game-ledger-weekly-net-axis-max";
const MONTHLY_BAR_AXIS_MAX_STORAGE_KEY = "game-ledger-monthly-bar-axis-max";
const MONTHLY_NET_AXIS_MAX_STORAGE_KEY = "game-ledger-monthly-net-axis-max";
const LEGACY_ENTRY_STORAGE_KEY = "money-journal-entries";
const LEGACY_MAP_STORAGE_KEY = "game-ledger-maps";
const APP_STORAGE_KEYS = [
  ENTRY_STORAGE_KEY,
  MAP_LIST_STORAGE_KEY,
  ITEM_LIST_STORAGE_KEY,
  LINK_STORAGE_KEY,
  THEME_STORAGE_KEY,
  PLANNED_STORAGE_KEY,
  MEMO_STORAGE_KEY,
  PLANNED_CASH_STORAGE_KEY,
  TOP_COLLAPSED_STORAGE_KEY,
  TARGET_BALANCE_STORAGE_KEY,
  WEEKLY_TARGET_BALANCE_STORAGE_KEY,
  BAR_AXIS_MAX_STORAGE_KEY,
  NET_AXIS_MAX_STORAGE_KEY,
  WEEKLY_BAR_AXIS_MAX_STORAGE_KEY,
  WEEKLY_NET_AXIS_MAX_STORAGE_KEY,
  MONTHLY_BAR_AXIS_MAX_STORAGE_KEY,
  MONTHLY_NET_AXIS_MAX_STORAGE_KEY,
  LEGACY_ENTRY_STORAGE_KEY,
  LEGACY_MAP_STORAGE_KEY,
];
const TITLE_LOGO_LIGHT = "assets/profitia-title.png";
const TITLE_LOGO_DARK = "assets/profitia-title-dark.png";
const DISPLAY_QUANTITY_DECIMALS = 2;

const themes = {
  default: {
    label: "クラシック",
    values: {
      bg: "#f6f5ef",
      panel: "#ffffff",
      ink: "#202124",
      muted: "#667085",
      line: "#dedbd0",
      green: "#1c7c54",
      red: "#c44d3f",
      blue: "#315c9b",
      amber: "#c57a21",
    },
  },
  night: {
    label: "ナイト",
    values: {
      bg: "#0f141c",
      panel: "#182230",
      ink: "#f7fbff",
      muted: "#c3ccda",
      line: "#445166",
      green: "#6ee7a8",
      red: "#ff7b7b",
      blue: "#8fc7ff",
      amber: "#ffd166",
    },
  },
  forest: {
    label: "フォレスト",
    values: {
      bg: "#edf6e8",
      panel: "#fbfff4",
      ink: "#1f3324",
      muted: "#5d7562",
      line: "#c7dbc2",
      green: "#247a3f",
      red: "#bd5549",
      blue: "#32798d",
      amber: "#b98220",
    },
  },
  rose: {
    label: "ローズ",
    values: {
      bg: "#fbf0f2",
      panel: "#fffafa",
      ink: "#31252a",
      muted: "#806a72",
      line: "#e5ccd3",
      green: "#2d7d67",
      red: "#c94d69",
      blue: "#7a5ea8",
      amber: "#bd7a32",
    },
  },
  ocean: {
    label: "オーシャン",
    values: { bg: "#eaf8ff", panel: "#fbfdff", ink: "#103246", muted: "#527383", line: "#bdddea", green: "#0f8b72", red: "#c84f63", blue: "#187fc2", amber: "#c58d22" },
  },
  sunset: {
    label: "サンセット",
    values: { bg: "#fff1e0", panel: "#fff9f0", ink: "#3d2417", muted: "#84624f", line: "#efc8a8", green: "#2f8d66", red: "#d4513d", blue: "#6868b8", amber: "#e08b1d" },
  },
  mint: {
    label: "ミント",
    values: { bg: "#effaf5", panel: "#ffffff", ink: "#183329", muted: "#60786e", line: "#cde5d9", green: "#16945d", red: "#c95757", blue: "#3b82a0", amber: "#b8892c" },
  },
  graphite: {
    label: "グラファイト",
    values: { bg: "#eeeeef", panel: "#fbfbfc", ink: "#232427", muted: "#6f7178", line: "#d2d3d8", green: "#347b52", red: "#b84e4e", blue: "#4f6692", amber: "#a9792b" },
  },
  royal: {
    label: "ロイヤル",
    values: { bg: "#f2f1fb", panel: "#ffffff", ink: "#25203b", muted: "#6d6886", line: "#d8d4eb", green: "#2e8463", red: "#c5566f", blue: "#594ba8", amber: "#be8434" },
  },
  citrus: {
    label: "シトラス",
    values: { bg: "#fffbe5", panel: "#fffef5", ink: "#313014", muted: "#747046", line: "#e8df91", green: "#5a8f2f", red: "#c95a3d", blue: "#327da4", amber: "#d9a300" },
  },
  sakura: {
    label: "サクラ",
    values: { bg: "#fff2f6", panel: "#ffffff", ink: "#38242f", muted: "#826c77", line: "#ebcad7", green: "#34836c", red: "#d84f7c", blue: "#806bb3", amber: "#c18438" },
  },
  cyber: {
    label: "サイバー",
    values: { bg: "#07131f", panel: "#0d2436", ink: "#f4fdff", muted: "#b8d7e8", line: "#31526b", green: "#2ef2a0", red: "#ff5f87", blue: "#35c7ff", amber: "#ffe45e" },
  },
  parchment: {
    label: "パーチメント",
    values: { bg: "#f7f0df", panel: "#fffaf0", ink: "#332b20", muted: "#796e5f", line: "#dfd0b6", green: "#597d43", red: "#aa5847", blue: "#58728d", amber: "#b77f2a" },
  },
  slate: {
    label: "スレート",
    values: { bg: "#eaf0f3", panel: "#ffffff", ink: "#1f2c34", muted: "#64737c", line: "#c9d4db", green: "#2d8764", red: "#bf5656", blue: "#3d719d", amber: "#b9822f" },
  },
  lavender: {
    label: "ラベンダー",
    values: { bg: "#f5edff", panel: "#fffaff", ink: "#2f2440", muted: "#77668c", line: "#decaf2", green: "#2e8a78", red: "#c75585", blue: "#7a55c7", amber: "#b77c2f" },
  },
  ember: {
    label: "エンバー",
    values: { bg: "#fff0e5", panel: "#fff9f3", ink: "#3b2118", muted: "#856556", line: "#edc8b2", green: "#2f855a", red: "#cf4a38", blue: "#516fa7", amber: "#e47f1f" },
  },
  ice: {
    label: "アイス",
    values: { bg: "#edfaff", panel: "#ffffff", ink: "#18323d", muted: "#5d7c89", line: "#c2e2ef", green: "#168b80", red: "#c65468", blue: "#258bd1", amber: "#b98b23" },
  },
  olive: {
    label: "オリーブ",
    values: { bg: "#f3f5e9", panel: "#fffffa", ink: "#2a3020", muted: "#70775f", line: "#d6dcc0", green: "#5b853a", red: "#b65a4a", blue: "#5f7692", amber: "#b98d24" },
  },
  berry: {
    label: "ベリー",
    values: { bg: "#fff0f8", panel: "#fffafd", ink: "#3a2033", muted: "#836377", line: "#e8bfd6", green: "#19846e", red: "#c53672", blue: "#8a5cc2", amber: "#c47b2b" },
  },
  sandstorm: {
    label: "サンド",
    values: { bg: "#f7f2e8", panel: "#fffdf8", ink: "#30291f", muted: "#796f61", line: "#ded4c2", green: "#547c4c", red: "#b55a4b", blue: "#647c94", amber: "#bd8629" },
  },
  monoDark: {
    label: "モノダーク",
    values: { bg: "#0f1113", panel: "#1c2024", ink: "#f8fafc", muted: "#c9d0d8", line: "#464d56", green: "#8be59d", red: "#ff8585", blue: "#9cc9ff", amber: "#f2ca6b" },
  },
  candy: {
    label: "キャンディ",
    values: { bg: "#fff1fb", panel: "#ffffff", ink: "#37223f", muted: "#80638a", line: "#efc7e9", green: "#169f7d", red: "#e54982", blue: "#4f90e6", amber: "#df9228" },
  },
  aurora: {
    label: "オーロラ",
    values: { bg: "#e9faf4", panel: "#fbfffd", ink: "#183832", muted: "#5a7d75", line: "#bee3d9", green: "#00a878", red: "#c65370", blue: "#4778d1", amber: "#c99722" },
  },
};

const state = {
  entries: loadEntries(),
  maps: loadMaps(),
  items: loadItems(),
  links: loadLinks(),
  plannedPurchases: loadPlannedPurchases(),
  memos: loadMemos(),
  plannedCash: Number(localStorage.getItem(PLANNED_CASH_STORAGE_KEY) || 0),
  theme: localStorage.getItem(THEME_STORAGE_KEY) || "default",
  periodMode: "week",
  periodStart: rangeKeyForMode(getWeekStart(new Date()), "week"),
  selectedSummaryKey: "",
  editingEntryId: "",
  sendingPlannedId: "",
  editingPlannedId: "",
  editingMaster: null,
  editingMemoId: "",
  draggingPlannedId: "",
  calcContext: null,
  settlementContext: null,
  settlementDistributionTargets: new Set(["通常"]),
  pendingSettlementEntries: [],
  unitPriceTrendCollapsed: false,
  searchSort: { key: "date", direction: "desc" },
  tradeSummarySort: { key: "count", direction: "desc" },
  breakdownSort: { key: "amount", direction: "desc" },
  memoSort: { key: "updatedAt", direction: "desc" },
  search: "",
  typeFilter: "all",
  barsExpanded: false,
  topCollapsed: localStorage.getItem(TOP_COLLAPSED_STORAGE_KEY) === "true",
  targetBalance: Number(localStorage.getItem(TARGET_BALANCE_STORAGE_KEY) || 0),
  weeklyTargetBalance: Number(localStorage.getItem(WEEKLY_TARGET_BALANCE_STORAGE_KEY) || 0),
  weeklyBarAxisMax: Number(localStorage.getItem(WEEKLY_BAR_AXIS_MAX_STORAGE_KEY) || 0),
  weeklyNetAxisMax: Number(localStorage.getItem(WEEKLY_NET_AXIS_MAX_STORAGE_KEY) || 0),
  monthlyBarAxisMax: Number(localStorage.getItem(MONTHLY_BAR_AXIS_MAX_STORAGE_KEY) || localStorage.getItem(BAR_AXIS_MAX_STORAGE_KEY) || 0),
  monthlyNetAxisMax: Number(localStorage.getItem(MONTHLY_NET_AXIS_MAX_STORAGE_KEY) || localStorage.getItem(NET_AXIS_MAX_STORAGE_KEY) || 0),
};

const elements = {
  stickyTop: document.querySelector(".sticky-top"),
  titleRefresh: document.querySelector("#titleRefreshButton"),
  titleLogo: document.querySelector("#titleLogoImage"),
  topCollapse: document.querySelector("#topCollapseButton"),
  settingsAnchors: document.querySelectorAll(".settings-anchor-nav button"),
  tabs: document.querySelectorAll(".tab-button"),
  openHelp: document.querySelector("#openHelpButton"),
  helpModal: document.querySelector("#helpModal"),
  closeHelp: document.querySelector("#closeHelpButton"),
  helpCloseAction: document.querySelector("#helpCloseActionButton"),
  panels: {
    entry: document.querySelector("#entryPanel"),
    search: document.querySelector("#searchPanel"),
    planned: document.querySelector("#plannedPanel"),
    summary: document.querySelector("#summaryPanel"),
    memo: document.querySelector("#memoPanel"),
    maps: document.querySelector("#mapsPanel"),
    items: document.querySelector("#itemsPanel"),
    links: document.querySelector("#linksPanel"),
    settings: document.querySelector("#settingsPanel"),
  },
  entryWorkspace: document.querySelector("#entryWorkspace"),
  form: document.querySelector("#entryForm"),
  date: document.querySelector("#dateInput"),
  todayDate: document.querySelector("#todayDateButton"),
  timeToggle: document.querySelector("#timeToggleButton"),
  time: document.querySelector("#timeInput"),
  incomeFields: document.querySelector("#incomeFields"),
  expenseFields: document.querySelector("#expenseFields"),
  entryGroupDetails: document.querySelector("#entryGroupDetails"),
  entryMap: document.querySelector("#entryMapInput"),
  entryItem: document.querySelector("#entryItemInput"),
  entryItemSelect: document.querySelector("#entryItemSelect"),
  expenseName: document.querySelector("#expenseNameInput"),
  expenseNameSelect: document.querySelector("#expenseNameSelect"),
  unitPriceLabel: document.querySelector("#unitPriceLabel"),
  unitPrice: document.querySelector("#unitPriceInput"),
  entryCalcAssist: document.querySelector("#entryCalcAssistButton"),
  quantity: document.querySelector("#quantityInput"),
  amount: document.querySelector("#amountInput"),
  settlementFields: document.querySelector("#settlementFields"),
  settlementPeopleCount: document.querySelector("#settlementPeopleCountInput"),
  settlementPeopleDown: document.querySelector("#settlementPeopleDownButton"),
  settlementPeopleUp: document.querySelector("#settlementPeopleUpButton"),
  settlementRows: document.querySelector("#settlementRows"),
  settlementTotal: document.querySelector("#settlementTotalAmount"),
  addSettlementRow: document.querySelector("#addSettlementRowButton"),
  purchaseRows: document.querySelector("#purchaseRows"),
  addPurchaseRow: document.querySelector("#addPurchaseRowButton"),
  purchaseBuyTotal: document.querySelector("#purchaseBuyTotalAmount"),
  purchaseTotal: document.querySelector("#purchaseTotalAmount"),
  buyerDistributionList: document.querySelector("#buyerDistributionList"),
  tagChipInput: document.querySelector("#tagChipInput"),
  tagChipList: document.querySelector("#tagChipList"),
  tags: document.querySelector("#tagsInput"),
  tagSuggestions: document.querySelector("#tagSuggestions"),
  frequentTagList: document.querySelector("#frequentTagList"),
  mapName: document.querySelector("#mapNameInput"),
  addMap: document.querySelector("#addMapButton"),
  mapList: document.querySelector("#mapList"),
  itemName: document.querySelector("#itemNameInput"),
  itemAmount: document.querySelector("#itemAmountInput"),
  addItem: document.querySelector("#addItemButton"),
  itemList: document.querySelector("#itemList"),
  itemHistoryOptions: document.querySelector("#itemHistoryOptions"),
  linkMap: document.querySelector("#linkMapInput"),
  linkItem: document.querySelector("#linkItemInput"),
  addLink: document.querySelector("#addLinkButton"),
  linkList: document.querySelector("#linkList"),
  modeButtons: document.querySelectorAll(".mode-button"),
  monthSelectors: document.querySelector("#monthSelectors"),
  year: document.querySelector("#yearInput"),
  monthSelect: document.querySelector("#monthInput"),
  period: document.querySelector("#periodPicker"),
  periodList: document.querySelector("#periodList"),
  summaryDetail: document.querySelector("#summaryDetail"),
  trendChartTitle: document.querySelector("#trendChartTitle"),
  yearChart: document.querySelector("#yearChart"),
  barAxisMaxButton: document.querySelector("#barAxisMaxButton"),
  netAxisMaxButton: document.querySelector("#netAxisMaxButton"),
  barAxisMaxDisplay: document.querySelector("#barAxisMaxDisplay"),
  netAxisMaxDisplay: document.querySelector("#netAxisMaxDisplay"),
  prevMonth: document.querySelector("#prevMonth"),
  nextMonth: document.querySelector("#nextMonth"),
  incomeTotal: document.querySelector("#incomeTotal"),
  expenseTotal: document.querySelector("#expenseTotal"),
  balanceTotal: document.querySelector("#balanceTotal"),
  targetBalanceLabel: document.querySelector("#targetBalanceLabel"),
  targetBalanceTotal: document.querySelector("#targetBalanceTotal"),
  targetDiffTotal: document.querySelector("#targetDiffTotal"),
  targetBalanceButton: document.querySelector("#targetBalanceButton"),
  topPlannedBuyTotal: document.querySelector("#topPlannedBuyTotal"),
  topPlannedSellTotal: document.querySelector("#topPlannedSellTotal"),
  topPlannedCashTotal: document.querySelector("#topPlannedCashTotal"),
  topPlannedBuyDetailTotal: document.querySelector("#topPlannedBuyDetailTotal"),
  topPlannedSellDetailTotal: document.querySelector("#topPlannedSellDetailTotal"),
  topPlannedNetDetailTotal: document.querySelector("#topPlannedNetDetailTotal"),
  ledgerList: document.querySelector("#ledgerList"),
  categoryBars: document.querySelector("#categoryBars"),
  toggleBars: document.querySelector("#toggleBarsButton"),
  search: document.querySelector("#searchInput"),
  searchStartDate: document.querySelector("#searchStartDateInput"),
  searchEndDate: document.querySelector("#searchEndDateInput"),
  typeSearch: document.querySelector("#typeSearchInput"),
  searchTagChipInput: document.querySelector("#searchTagChipInput"),
  searchTagChipList: document.querySelector("#searchTagChipList"),
  searchTags: document.querySelector("#searchTagsInput"),
  searchTagSuggestions: document.querySelector("#searchTagSuggestions"),
  itemSearch: document.querySelector("#itemSearchInput"),
  clearSearch: document.querySelector("#clearSearchButton"),
  searchTotals: document.querySelector("#searchTotals"),
  unitPriceTrendPanel: document.querySelector("#unitPriceTrendPanel"),
  itemSearchResults: document.querySelector("#itemSearchResults"),
  plannedTagChipInput: document.querySelector("#plannedTagChipInput"),
  plannedTagChipList: document.querySelector("#plannedTagChipList"),
  plannedTags: document.querySelector("#plannedTagsInput"),
  plannedTagSuggestions: document.querySelector("#plannedTagSuggestions"),
  plannedItem: document.querySelector("#plannedItemInput"),
  plannedQuantity: document.querySelector("#plannedQuantityInput"),
  plannedAmount: document.querySelector("#plannedAmountInput"),
  plannedCashButton: document.querySelector("#plannedCashButton"),
  plannedCashDisplay: document.querySelector("#plannedCashDisplay"),
  addPlanned: document.querySelector("#addPlannedButton"),
  plannedBuyTotal: document.querySelector("#plannedBuyTotal"),
  plannedSellTotal: document.querySelector("#plannedSellTotal"),
  plannedNetTotal: document.querySelector("#plannedNetTotal"),
  plannedList: document.querySelector("#plannedList"),
  memoEditModal: document.querySelector("#memoEditModal"),
  memoEditForm: document.querySelector("#memoEditForm"),
  closeMemoEdit: document.querySelector("#closeMemoEditButton"),
  deleteMemoEdit: document.querySelector("#deleteMemoEditButton"),
  memoTag: document.querySelector("#memoTagInput"),
  memoTagChipInput: document.querySelector("#memoTagChipInput"),
  memoTagChipList: document.querySelector("#memoTagChipList"),
  memoTagSuggestions: document.querySelector("#memoTagSuggestions"),
  memoTitle: document.querySelector("#memoTitleInput"),
  memoDone: document.querySelector("#memoDoneInput"),
  memoBody: document.querySelector("#memoBodyInput"),
  memoSearchTag: document.querySelector("#memoSearchTagInput"),
  memoSearchTagChipInput: document.querySelector("#memoSearchTagChipInput"),
  memoSearchTagChipList: document.querySelector("#memoSearchTagChipList"),
  memoSearchTagSuggestions: document.querySelector("#memoSearchTagSuggestions"),
  memoSearch: document.querySelector("#memoSearchInput"),
  memoDoneFilter: document.querySelector("#memoDoneFilter"),
  memoEditTag: document.querySelector("#memoEditTagInput"),
  memoEditTagChipInput: document.querySelector("#memoEditTagChipInput"),
  memoEditTagChipList: document.querySelector("#memoEditTagChipList"),
  memoEditTagSuggestions: document.querySelector("#memoEditTagSuggestions"),
  memoEditTitle: document.querySelector("#memoEditTitleInput"),
  memoEditDone: document.querySelector("#memoEditDoneInput"),
  memoEditBody: document.querySelector("#memoEditBodyInput"),
  clearMemo: document.querySelector("#clearMemoButton"),
  saveMemo: document.querySelector("#saveMemoButton"),
  memoList: document.querySelector("#memoList"),
  typeFilter: document.querySelector("#typeFilter"),
  template: document.querySelector("#entryTemplate"),
  themeGrid: document.querySelector("#themeGrid"),
  editModal: document.querySelector("#editModal"),
  editForm: document.querySelector("#editForm"),
  closeEdit: document.querySelector("#closeEditButton"),
  deleteEditEntry: document.querySelector("#deleteEditEntryButton"),
  editDate: document.querySelector("#editDateInput"),
  editTodayDate: document.querySelector("#editTodayDateButton"),
  editTime: document.querySelector("#editTimeInput"),
  editIncomeFields: document.querySelector("#editIncomeFields"),
  editExpenseFields: document.querySelector("#editExpenseFields"),
  editGroupDetails: document.querySelector("#editGroupDetails"),
  editMap: document.querySelector("#editMapInput"),
  editItem: document.querySelector("#editItemInput"),
  editItemSelect: document.querySelector("#editItemSelect"),
  editIncomePriceField: document.querySelector(".edit-income-price-field"),
  editIncomeUnitPrice: document.querySelector("#editIncomeUnitPriceInput"),
  editExpenseName: document.querySelector("#editExpenseNameInput"),
  editExpenseNameSelect: document.querySelector("#editExpenseNameSelect"),
  editExpensePriceField: document.querySelector(".edit-expense-price-field"),
  editExpenseUnitPrice: document.querySelector("#editExpenseUnitPriceInput"),
  editQuantity: document.querySelector("#editQuantityInput"),
  editCalcAssist: document.querySelector("#editCalcAssistButton"),
  editAmount: document.querySelector("#editAmountInput"),
  editTagChipInput: document.querySelector("#editTagChipInput"),
  editTagChipList: document.querySelector("#editTagChipList"),
  editTags: document.querySelector("#editTagsInput"),
  editTagSuggestions: document.querySelector("#editTagSuggestions"),
  editFrequentTagList: document.querySelector("#editFrequentTagList"),
  calcModal: document.querySelector("#calcModal"),
  calcForm: document.querySelector("#calcForm"),
  closeCalc: document.querySelector("#closeCalcButton"),
  calcTitle: document.querySelector("#calcTitle"),
  calcModeUnitPrice: document.querySelector("#calcModeUnitPrice"),
  calcModeQuantity: document.querySelector("#calcModeQuantity"),
  calcPriceAmount: document.querySelector("#calcPriceAmountInput"),
  calcPriceQuantity: document.querySelector("#calcPriceQuantityInput"),
  calcPriceResult: document.querySelector("#calcPriceResultInput"),
  calcQuantityAmount: document.querySelector("#calcQuantityAmountInput"),
  calcQuantityPrice: document.querySelector("#calcQuantityPriceInput"),
  calcQuantityResult: document.querySelector("#calcQuantityResultInput"),
  settlementModal: document.querySelector("#settlementModal"),
  settlementForm: document.querySelector("#settlementForm"),
  closeSettlement: document.querySelector("#closeSettlementButton"),
  settlementPeople: document.querySelector("#settlementPeopleInput"),
  settlementUnitPrice: document.querySelector("#settlementUnitPriceInput"),
  settlementQuantity: document.querySelector("#settlementQuantityInput"),
  settlementAmount: document.querySelector("#settlementAmountInput"),
  settlementConfirmModal: document.querySelector("#settlementConfirmModal"),
  settlementConfirmForm: document.querySelector("#settlementConfirmForm"),
  settlementConfirmList: document.querySelector("#settlementConfirmList"),
  closeSettlementConfirm: document.querySelector("#closeSettlementConfirmButton"),
  cancelSettlementConfirm: document.querySelector("#cancelSettlementConfirmButton"),
  masterEditModal: document.querySelector("#masterEditModal"),
  masterEditForm: document.querySelector("#masterEditForm"),
  masterEditTitle: document.querySelector("#masterEditTitle"),
  closeMasterEdit: document.querySelector("#closeMasterEditButton"),
  masterName: document.querySelector("#masterNameInput"),
  masterAmountLabel: document.querySelector("#masterAmountLabel"),
  masterAmount: document.querySelector("#masterAmountInput"),
  deleteMaster: document.querySelector("#deleteMasterButton"),
  plannedEditModal: document.querySelector("#plannedEditModal"),
  plannedEditForm: document.querySelector("#plannedEditForm"),
  plannedEditTitle: document.querySelector("#plannedEditTitle"),
  closePlannedEdit: document.querySelector("#closePlannedEditButton"),
  plannedEditTagChipInput: document.querySelector("#plannedEditTagChipInput"),
  plannedEditTagChipList: document.querySelector("#plannedEditTagChipList"),
  plannedEditTags: document.querySelector("#plannedEditTagsInput"),
  plannedEditTagSuggestions: document.querySelector("#plannedEditTagSuggestions"),
  plannedEditFrequentTagList: document.querySelector("#plannedEditFrequentTagList"),
  plannedEditItem: document.querySelector("#plannedEditItemInput"),
  plannedEditQuantity: document.querySelector("#plannedEditQuantityInput"),
  plannedEditAmount: document.querySelector("#plannedEditAmountInput"),
  plannedEditTotalAmount: document.querySelector("#plannedEditTotalAmountInput"),
  deletePlannedEdit: document.querySelector("#deletePlannedEditButton"),
  exportData: document.querySelector("#exportDataButton"),
  importData: document.querySelector("#importDataButton"),
  importDataInput: document.querySelector("#importDataInput"),
  resetAllData: document.querySelector("#resetAllDataButton"),
};

const yen = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
  maximumFractionDigits: 0,
});

init();

function init() {
  elements.date.value = todayISO();
  elements.time.value = currentTime();
  setupMonthSelectors();
  setupThemeOptions();
  applyTheme(state.theme);
  updateAxisLimitInputs();
  updatePlannedMode();
  updatePeriodLabel();
  updateTopCollapseState();
  updateStickyTopHeight();
  bindEvents();
  refreshConfigurationViews();
  updateEntryMode();
  render();
}

function bindEvents() {
  setupItemHistoryInputs();
  setupMoneyUnitShortcuts();
  setupTagInput(elements.tags, elements.tagChipInput, elements.tagChipList, elements.tagSuggestions);
  setupTagInput(elements.editTags, elements.editTagChipInput, elements.editTagChipList, elements.editTagSuggestions);
  setupTagInput(elements.searchTags, elements.searchTagChipInput, elements.searchTagChipList, elements.searchTagSuggestions, renderItemSearchResults);
  setupTagInput(elements.plannedTags, elements.plannedTagChipInput, elements.plannedTagChipList, elements.plannedTagSuggestions);
  setupTagInput(elements.plannedEditTags, elements.plannedEditTagChipInput, elements.plannedEditTagChipList, elements.plannedEditTagSuggestions);
  setupTagInput(elements.memoTag, elements.memoTagChipInput, elements.memoTagChipList, elements.memoTagSuggestions);
  setupTagInput(elements.memoSearchTag, elements.memoSearchTagChipInput, elements.memoSearchTagChipList, elements.memoSearchTagSuggestions, renderMemos);
  setupTagInput(elements.memoEditTag, elements.memoEditTagChipInput, elements.memoEditTagChipList, elements.memoEditTagSuggestions);

  elements.openHelp?.addEventListener("click", openHelpModal);
  elements.closeHelp?.addEventListener("click", closeHelpModal);
  elements.helpCloseAction?.addEventListener("click", closeHelpModal);
  elements.helpModal?.addEventListener("click", (event) => {
    if (event.target === elements.helpModal) closeHelpModal();
  });
  elements.titleRefresh?.addEventListener("click", () => {
    window.location.reload();
  });

  elements.topCollapse.addEventListener("click", () => {
    state.topCollapsed = !state.topCollapsed;
    localStorage.setItem(TOP_COLLAPSED_STORAGE_KEY, String(state.topCollapsed));
    updateTopCollapseState();
  });

  elements.entryGroupDetails.addEventListener("toggle", () => {
    const wasOpened = elements.entryGroupDetails.open;
    const itemName = wasOpened ? reconcileEntryGroupOnOpen() : anyEntryItemName();
    if (!elements.entryGroupDetails.open) syncEntryDirectItemName(itemName);
    updateEntryItemOptions(itemName);
    updateEntryInputMode();
    fillUnitPriceFromSelectedItem();
    updateAmount();
  });

  elements.settingsAnchors.forEach((button) => {
    button.addEventListener("click", () => scrollToSettingsBlock(button.dataset.settingsTarget));
  });

  window.addEventListener("resize", updateStickyTopHeight);

  elements.targetBalanceButton.addEventListener("click", () => {
    const isWeek = state.periodMode === "week";
    const label = isWeek ? "週間収支目標" : "月間収支目標";
    const input = window.prompt(`${label}を入力してください`, formatAmount(currentTargetBalance()));
    if (input === null) return;
    const value = parseAmount(input);
    if (isWeek) {
      state.weeklyTargetBalance = value;
      localStorage.setItem(WEEKLY_TARGET_BALANCE_STORAGE_KEY, String(state.weeklyTargetBalance));
    } else {
      state.targetBalance = value;
      localStorage.setItem(TARGET_BALANCE_STORAGE_KEY, String(state.targetBalance));
    }
    render();
  });

  elements.barAxisMaxButton.addEventListener("click", () => updateAxisLimit("bar"));
  elements.netAxisMaxButton.addEventListener("click", () => updateAxisLimit("net"));

  elements.tabs.forEach((button) => {
    button.addEventListener("click", () => showTab(button.dataset.tab));
  });

  elements.todayDate.addEventListener("click", () => {
    elements.date.value = todayISO();
  });

  elements.timeToggle.addEventListener("click", () => {
    const isHidden = elements.time.classList.toggle("hidden");
    elements.timeToggle.setAttribute("aria-expanded", String(!isHidden));
    elements.time.closest(".entry-date-row").classList.toggle("time-open", !isHidden);
    if (!isHidden && !elements.time.value) elements.time.value = currentTime();
  });

  elements.editTodayDate.addEventListener("click", () => {
    elements.editDate.value = todayISO();
  });

  elements.editGroupDetails.addEventListener("toggle", () => {
    const wasOpened = elements.editGroupDetails.open;
    const itemName = wasOpened ? reconcileEditGroupOnOpen() : anyEditItemName();
    if (!elements.editGroupDetails.open) syncEditDirectItemName(itemName);
    updateEditItemOptions(itemName);
    updateEditInputMode();
    if (editType() === "income") fillEditUnitPriceFromItem();
    updateEditAmount();
  });

  document.addEventListener("focusin", (event) => {
    if (isItemHistoryInput(event.target)) {
      updateItemHistoryInputList(event.target);
    }
  });

  document.addEventListener("input", (event) => {
    if (isItemHistoryInput(event.target)) {
      updateItemHistoryInputList(event.target);
    }
  });

  elements.form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (normalizeActiveMoneyShortcut()) return;
    const type = currentType();
    if (type === "settlement") {
      saveSettlementEntries();
      return;
    }
    const itemName = currentEntryItemName();
    if (!itemName) return;
    if (!validateNotFutureDate(elements.date.value)) return;
    if (!confirmDistantYear(elements.date.value)) return;

    updateAmount();
    if (!validateEntryNumbers(currentUnitPrice(), parseQuantityInput(elements.quantity.value), parseAmount(elements.amount.value))) return;
    commitTagInput(elements.tags, elements.tagChipList);

    const entry = {
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      type,
      date: elements.date.value,
      time: currentEntryTime(),
      amount: parseAmount(elements.amount.value),
      map: resolvedEntryMap(itemName),
      item: itemName,
      quantity: parseQuantityInput(elements.quantity.value) || 1,
      unitPrice: currentUnitPrice(),
      tags: getTagValues(elements.tags),
    };

    state.entries.push(entry);
    saveEntries();
    elements.entryItem.value = "";
    elements.entryItemSelect.value = "";
    setTagValues(elements.tags, elements.tagChipList, []);
    elements.expenseName.value = "";
    elements.expenseNameSelect.value = "";
    elements.unitPrice.value = "";
    elements.quantity.value = "1";
    elements.date.value = entry.date;
    elements.time.value = currentTime();
    state.periodStart = rangeKey(getRangeStart(entryDateTime(entry)));
    state.selectedSummaryKey = state.periodStart;
    updatePeriodLabel();
    updateAmount();
    render();
  });

  elements.form.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || currentType() !== "settlement" || event.defaultPrevented) return;
    event.preventDefault();
  });

  elements.form.addEventListener("change", (event) => {
    if (event.target.name === "type") {
      updateEntryMode();
      renderFrequentTags();
      updateAmount();
    }

    if (event.target.id === "entryMapInput") {
      const itemName = anyEntryItemName();
      if (!confirmClearItemOutsideGroup(elements.entryMap, itemName, clearEntryItemFields)) {
        updateEntryItemOptions(itemName);
        fillUnitPriceFromSelectedItem();
        updateAmount();
        return;
      }
      updateEntryItemOptions(anyEntryItemName());
      fillUnitPriceFromSelectedItem();
      updateAmount();
    }

    if (["entryItemInput", "entryItemSelect", "expenseNameSelect"].includes(event.target.id)) {
      fillUnitPriceFromSelectedItem();
      updateAmount();
    }
  });

  elements.form.addEventListener("input", (event) => {
    if (isMoneyInput(event.target) && !isComposingInputEvent(event)) formatMoneyInput(event.target);
    if (["quantityInput", "settlementPeopleCountInput"].includes(event.target.id) && !isComposingInputEvent(event)) formatQuantityInput(event.target);
    if (["quantityInput", "unitPriceInput", "entryItemInput", "entryItemSelect", "expenseNameSelect"].includes(event.target.id)) {
      if (event.target.id === "entryItemInput") fillUnitPriceFromSelectedItem();
      updateAmount();
    }
    if (event.target.id === "settlementPeopleCountInput") updateSettlementTotal();
    if (event.target.closest(".settlement-entry-row")) {
      if (event.target.classList.contains("settlement-row-item")) fillSettlementRowPriceFromItem(event.target.closest(".settlement-entry-row"));
      if ((event.target.classList.contains("settlement-row-price") || event.target.classList.contains("settlement-row-buy-price")) && !isComposingInputEvent(event)) formatMoneyInput(event.target);
      if (event.target.classList.contains("settlement-row-quantity") && !isComposingInputEvent(event)) formatQuantityInput(event.target);
      updateSettlementRowAmount(event.target.closest(".settlement-entry-row"));
    }
  });

  elements.settlementPeopleDown.addEventListener("click", () => stepSettlementPeople(-1));
  elements.settlementPeopleUp.addEventListener("click", () => stepSettlementPeople(1));
  elements.addSettlementRow.addEventListener("click", () => addSettlementEntryRow(elements.settlementRows));
  elements.addPurchaseRow.addEventListener("click", () => addSettlementEntryRow(elements.purchaseRows));
  [elements.settlementRows, elements.purchaseRows].forEach((list) => list.addEventListener("click", (event) => {
    const calcButton = event.target.closest(".settlement-row-calc-button");
    if (calcButton) {
      const row = calcButton.closest(".settlement-entry-row");
      if (row) openCalculationModal("settlementRow", "unitPrice", row);
      return;
    }
    const button = event.target.closest(".delete-button");
    if (!button) return;
    const row = button.closest(".settlement-entry-row");
    if (!row) return;
    if (list.children.length > 1) {
      row.remove();
      updateSettlementTotal();
      return;
    }
    clearSettlementEntryRow(row);
  }));
  elements.buyerDistributionList.addEventListener("change", (event) => {
    if (!event.target.classList.contains("distribution-target-check")) return;
    const name = event.target.value;
    state.settlementDistributionTargets = new Set([event.target.checked ? name : "通常"]);
    renderBuyerDistributionList(currentDistributionPerPerson());
  });

  elements.entryCalcAssist.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openCalculationModal("entry", "unitPrice");
  });
  elements.entryCalcAssist.addEventListener("mousedown", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });

  elements.addMap.addEventListener("click", () => {
    const name = elements.mapName.value.trim();
    if (!name || state.maps.includes(name)) return;
    state.maps.push(name);
    state.links[name] = state.links[name] || [];
    elements.mapName.value = "";
    saveMaps();
    saveLinks();
    refreshConfigurationViews(name);
  });

  elements.addItem.addEventListener("click", () => {
    const name = elements.itemName.value.trim();
    if (!name || state.items.some((item) => item.name === name)) return;
    state.items.push({ name, amount: parseAmount(elements.itemAmount.value) });
  elements.itemName.value = "";
    elements.itemAmount.value = "";
    saveItems();
    refreshConfigurationViews();
  });

  elements.addLink.addEventListener("click", () => {
    const map = elements.linkMap.value;
    const item = elements.linkItem.value;
    if (!map || !item) return;
    state.links[map] = state.links[map] || [];
    if (!state.links[map].includes(item)) {
      state.links[map].push(item);
      saveLinks();
      refreshConfigurationViews(map);
    }
  });

  elements.linkMap.addEventListener("change", renderLinkList);
  elements.linkList.addEventListener("click", (event) => {
    const button = event.target.closest(".delete-link-button");
    if (!button) return;
    const map = elements.linkMap.value;
    const item = button.dataset.item;
    state.links[map] = (state.links[map] || []).filter((linkedItem) => linkedItem !== item);
    saveLinks();
    refreshConfigurationViews(map);
  });

  [elements.itemAmount, elements.masterAmount].forEach((input) => {
    input.addEventListener("input", (event) => {
      if (!isComposingInputEvent(event)) formatMoneyInput(input);
    });
  });

  elements.periodList.addEventListener("click", (event) => {
    const button = event.target.closest(".period-row");
    if (!button) return;
    event.preventDefault();
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    state.selectedSummaryKey = button.dataset.periodKey;
    renderPeriodList();
    window.scrollTo(scrollX, scrollY);
    requestAnimationFrame(() => window.scrollTo(scrollX, scrollY));
  });

  elements.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setPeriodMode(button.dataset.mode);
    });
  });

  elements.year.addEventListener("change", updateMonthPeriodFromSelectors);
  elements.monthSelect.addEventListener("change", updateMonthPeriodFromSelectors);
  elements.period.addEventListener("change", updateWeekPeriodFromSelector);
  elements.themeGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".theme-option");
    if (!button) return;
    state.theme = button.dataset.theme;
    localStorage.setItem(THEME_STORAGE_KEY, state.theme);
    applyTheme(state.theme);
    updateThemeSelection();
  });

  elements.prevMonth.addEventListener("click", () => shiftPeriod(-1));
  elements.nextMonth.addEventListener("click", () => shiftPeriod(1));

  elements.search.addEventListener("input", () => {
    state.search = elements.search.value.trim().toLowerCase();
    render();
  });

  elements.itemSearch.addEventListener("input", renderItemSearchResults);
  elements.typeSearch.addEventListener("change", renderItemSearchResults);
  elements.searchStartDate.addEventListener("change", renderItemSearchResults);
  elements.searchEndDate.addEventListener("change", renderItemSearchResults);
  elements.clearSearch.addEventListener("click", clearItemSearch);
  elements.unitPriceTrendPanel.addEventListener("click", (event) => {
    const button = event.target.closest("#toggleUnitPriceTrendCollapseButton");
    if (!button) return;
    state.unitPriceTrendCollapsed = !state.unitPriceTrendCollapsed;
    renderItemSearchResults();
  });
  elements.itemSearchResults.addEventListener("click", (event) => {
    const sortButton = event.target.closest(".search-sort-button");
    if (sortButton) {
      updateSearchSort(sortButton.dataset.sort);
      return;
    }
    const row = event.target.closest(".search-table-row");
    if (row) openEditModal(row.dataset.id);
  });

  elements.plannedAmount.addEventListener("input", (event) => {
    if (!isComposingInputEvent(event)) formatMoneyInput(elements.plannedAmount);
  });
  elements.plannedQuantity.addEventListener("input", (event) => {
    if (!isComposingInputEvent(event)) formatQuantityInput(elements.plannedQuantity);
  });
  elements.plannedCashButton.addEventListener("click", registerPlannedCash);
  document.querySelectorAll('input[name="plannedType"]').forEach((input) => {
    input.addEventListener("change", updatePlannedMode);
  });
  elements.addPlanned.addEventListener("click", addPlannedPurchase);
  elements.plannedAmount.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    if (normalizeMoneyShortcutInput(elements.plannedAmount)) return;
    addPlannedPurchase();
  });
  elements.plannedQuantity.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    addPlannedPurchase();
  });
  elements.plannedItem.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    addPlannedPurchase();
  });
  elements.plannedList.addEventListener("click", (event) => {
    const sendButton = event.target.closest(".send-planned-button");
    if (sendButton) {
      openPlannedEntryModal(sendButton.dataset.id);
      return;
    }

    const edgeButton = event.target.closest(".planned-edge-button");
    if (edgeButton) {
      movePlannedPurchaseToEdge(edgeButton.dataset.id, edgeButton.dataset.edge);
      return;
    }

    const row = event.target.closest(".planned-row");
    if (row && !row.classList.contains("planned-row-head")) openPlannedEditModal(row.dataset.id);
  });
  elements.plannedList.addEventListener("dragstart", handlePlannedDragStart);
  elements.plannedList.addEventListener("dragover", handlePlannedDragOver);
  elements.plannedList.addEventListener("dragleave", handlePlannedDragLeave);
  elements.plannedList.addEventListener("drop", handlePlannedDrop);
  elements.plannedList.addEventListener("dragend", handlePlannedDragEnd);

  elements.saveMemo.addEventListener("click", saveMemo);
  elements.clearMemo.addEventListener("click", confirmClearMemoForm);
  elements.memoSearch.addEventListener("input", renderMemos);
  elements.memoDoneFilter.addEventListener("change", renderMemos);
  elements.memoList.addEventListener("click", (event) => {
    const sortButton = event.target.closest(".memo-sort-button");
    if (sortButton) {
      updateMemoSort(sortButton.dataset.sort);
      return;
    }
    const doneToggle = event.target.closest(".memo-list-done");
    if (doneToggle) {
      event.stopPropagation();
      toggleMemoDone(doneToggle.dataset.id, doneToggle.checked);
      return;
    }
    const row = event.target.closest(".memo-card");
    if (row) openMemoForEdit(row.dataset.id);
  });
  elements.memoEditForm.addEventListener("submit", saveMemoEdit);
  elements.closeMemoEdit.addEventListener("click", closeMemoEditModal);
  elements.deleteMemoEdit.addEventListener("click", deleteMemoFromEdit);
  document.querySelectorAll('input[name="memoEditColor"]').forEach((input) => {
    input.addEventListener("change", () => updateMemoEditDialogColor(memoEditColor()));
  });
  elements.memoEditModal.addEventListener("click", (event) => {
    if (event.target === elements.memoEditModal) closeMemoEditModal();
  });

  elements.typeFilter.addEventListener("change", () => {
    state.typeFilter = elements.typeFilter.value;
    render();
  });

  elements.toggleBars.addEventListener("click", () => {
    state.barsExpanded = !state.barsExpanded;
    updateBarsExpandedState();
  });

  elements.categoryBars.addEventListener("click", (event) => {
    const button = event.target.closest(".bar-sort-button");
    if (!button) return;
    updateTradeSummarySort(button.dataset.sort);
  });

  elements.summaryDetail.addEventListener("click", (event) => {
    const button = event.target.closest(".breakdown-sort-button");
    if (!button) return;
    updateBreakdownSort(button.dataset.sort);
  });

  elements.ledgerList.addEventListener("click", (event) => {
    const item = event.target.closest(".entry-item");
    if (item) openEditModal(item.dataset.id);
  });

  elements.closeEdit.addEventListener("click", closeEditModal);
  elements.deleteEditEntry.addEventListener("click", deleteEditedEntry);
  elements.editModal.addEventListener("click", (event) => {
    if (event.target === elements.editModal) closeEditModal();
  });

  elements.editForm.addEventListener("change", (event) => {
    if (event.target.name === "editType") {
      updateEditMode();
      syncEditFieldsForType();
      updateEditAmount();
    }

    if (event.target.id === "editMapInput") {
      const itemName = anyEditItemName();
      if (!confirmClearItemOutsideGroup(elements.editMap, itemName, clearEditItemFields)) {
        updateEditItemOptions(itemName);
        if (editType() === "income") fillEditUnitPriceFromItem();
        updateEditAmount();
        return;
      }
      updateEditItemOptions(anyEditItemName());
      if (editType() === "income") fillEditUnitPriceFromItem();
      updateEditAmount();
    }

    if (["editItemInput", "editItemSelect", "editExpenseNameSelect"].includes(event.target.id)) {
      fillEditUnitPriceFromItem();
      updateEditAmount();
    }
  });

  elements.editForm.addEventListener("input", (event) => {
    if (isMoneyInput(event.target) && !isComposingInputEvent(event)) formatMoneyInput(event.target);
    if (event.target.id === "editQuantityInput" && !isComposingInputEvent(event)) formatQuantityInput(event.target);
    if (["editQuantityInput", "editExpenseUnitPriceInput", "editIncomeUnitPriceInput", "editItemInput", "editItemSelect", "editExpenseNameSelect"].includes(event.target.id)) {
      if (event.target.id === "editItemInput") fillEditUnitPriceFromItem();
      updateEditAmount();
    }
  });

  elements.editCalcAssist.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openCalculationModal("edit", "unitPrice");
  });
  elements.editCalcAssist.addEventListener("mousedown", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
  elements.closeCalc.addEventListener("click", closeCalculationModal);
  elements.calcModal.addEventListener("click", (event) => {
    if (event.target === elements.calcModal) closeCalculationModal();
  });
  [elements.calcModeUnitPrice, elements.calcModeQuantity].forEach((input) => {
    input.addEventListener("change", () => {
      updateCalculationModeState();
      updateCalculationResult();
    });
  });
  [elements.calcPriceAmount, elements.calcQuantityAmount, elements.calcQuantityPrice].forEach((input) => {
    input.addEventListener("input", (event) => {
      if (!isComposingInputEvent(event)) formatMoneyInput(event.target);
      updateCalculationResult();
    });
  });
  elements.calcPriceQuantity.addEventListener("input", (event) => {
    if (!isComposingInputEvent(event)) formatQuantityInput(event.target);
    updateCalculationResult();
  });
  elements.calcForm.addEventListener("submit", (event) => {
    event.preventDefault();
    applyCalculationResult();
  });
  elements.closeSettlement.addEventListener("click", closeSettlementModal);
  elements.settlementModal.addEventListener("click", (event) => {
    if (event.target === elements.settlementModal) closeSettlementModal();
  });
  elements.closeSettlementConfirm.addEventListener("click", closeSettlementConfirmModal);
  elements.cancelSettlementConfirm.addEventListener("click", closeSettlementConfirmModal);
  elements.settlementConfirmModal.addEventListener("click", (event) => {
    if (event.target === elements.settlementConfirmModal) closeSettlementConfirmModal();
  });
  elements.settlementConfirmForm.addEventListener("submit", (event) => {
    event.preventDefault();
    commitPendingSettlementEntries();
  });
  elements.settlementPeople.addEventListener("input", (event) => {
    if (!isComposingInputEvent(event)) formatQuantityInput(event.target);
    updateSettlementResult();
  });
  elements.settlementUnitPrice.addEventListener("input", (event) => {
    if (!isComposingInputEvent(event)) formatMoneyInput(event.target);
    updateSettlementResult();
  });
  elements.settlementForm.addEventListener("submit", (event) => {
    event.preventDefault();
    applySettlementResult();
  });

  elements.editForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (normalizeActiveMoneyShortcut()) return;
    saveEditedEntry();
  });

  elements.mapList.addEventListener("click", (event) => {
    const row = event.target.closest(".management-row");
    if (row) openMasterEditModal("map", row.dataset.name);
  });

  elements.itemList.addEventListener("click", (event) => {
    const row = event.target.closest(".management-row");
    if (row) openMasterEditModal("item", row.dataset.name);
  });

  elements.closeMasterEdit.addEventListener("click", closeMasterEditModal);
  elements.masterEditModal.addEventListener("click", (event) => {
    if (event.target === elements.masterEditModal) closeMasterEditModal();
  });
  elements.masterEditForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveMasterEdit();
  });
  elements.deleteMaster.addEventListener("click", deleteMasterEdit);
  elements.closePlannedEdit.addEventListener("click", closePlannedEditModal);
  elements.deletePlannedEdit.addEventListener("click", deletePlannedEdit);
  elements.plannedEditModal.addEventListener("click", (event) => {
    if (event.target === elements.plannedEditModal) closePlannedEditModal();
  });
  elements.plannedEditAmount.addEventListener("input", (event) => {
    if (!isComposingInputEvent(event)) formatMoneyInput(elements.plannedEditAmount);
    updatePlannedEditTotalAmount();
  });
  elements.plannedEditQuantity.addEventListener("input", (event) => {
    if (!isComposingInputEvent(event)) formatQuantityInput(elements.plannedEditQuantity);
    updatePlannedEditTotalAmount();
  });
  document.querySelectorAll('input[name="plannedEditType"]').forEach((input) => {
    input.addEventListener("change", updatePlannedEditMode);
  });
  elements.plannedEditForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (normalizeActiveMoneyShortcut()) return;
    savePlannedEdit();
  });
  elements.exportData.addEventListener("click", exportAppData);
  elements.importData.addEventListener("click", () => elements.importDataInput.click());
  elements.importDataInput.addEventListener("change", importAppData);
  elements.resetAllData?.addEventListener("click", resetAllAppData);
  elements.frequentTagList.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const button = event.target.closest(".frequent-tag-button");
    if (!button || button.parentElement !== elements.frequentTagList) return;
    addTagValue(elements.tags, elements.tagChipList, button.dataset.tag);
  });
  elements.frequentTagList.addEventListener("mousedown", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
  elements.editFrequentTagList.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const button = event.target.closest(".frequent-tag-button");
    if (!button || button.parentElement !== elements.editFrequentTagList) return;
    addTagValue(elements.editTags, elements.editTagChipList, button.dataset.tag);
  });
  elements.editFrequentTagList.addEventListener("mousedown", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
  elements.plannedEditFrequentTagList.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const button = event.target.closest(".frequent-tag-button");
    if (!button || button.parentElement !== elements.plannedEditFrequentTagList) return;
    addTagValue(elements.plannedEditTags, elements.plannedEditTagChipList, button.dataset.tag);
  });
  elements.plannedEditFrequentTagList.addEventListener("mousedown", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
}

function setupMoneyUnitShortcuts() {
  document.addEventListener(
    "compositionstart",
    (event) => {
      if (isMoneyInput(event.target) || isQuantityInput(event.target)) {
        event.target.dataset.composing = "true";
      }
    },
    true,
  );
  document.addEventListener(
    "compositionend",
    (event) => {
      if (!(isMoneyInput(event.target) || isQuantityInput(event.target))) return;
      delete event.target.dataset.composing;
      window.requestAnimationFrame(() => {
        if (isMoneyInput(event.target)) normalizeMoneyInput(event.target);
        if (isQuantityInput(event.target)) formatQuantityInput(event.target);
        refreshNumericDependentValues(event.target);
      });
    },
    true,
  );
  document.addEventListener(
    "keydown",
    (event) => {
      if (event.isComposing || isComposingInputEvent(event) || event.key !== "Enter" || !isMoneyInput(event.target)) return;
      if (hasMoneyUnitSuffix(event.target.value)) {
        event.preventDefault();
        event.stopImmediatePropagation();
        normalizeMoneyShortcutInput(event.target);
        return;
      }
      normalizeMoneyInput(event.target);
    },
    true,
  );
  document.addEventListener(
    "blur",
    (event) => {
      if (isMoneyInput(event.target)) normalizeMoneyInput(event.target);
      if (isQuantityInput(event.target)) formatQuantityInput(event.target);
    },
    true,
  );
}

function render() {
  updateItemHistoryOptions();
  const period = currentRange();
  const periodEntries = entriesForCurrentPeriod();

  const income = sum(periodEntries.filter((entry) => entry.type === "income"));
  const expense = sum(periodEntries.filter((entry) => entry.type === "expense"));
  elements.incomeTotal.textContent = yen.format(income);
  elements.expenseTotal.textContent = yen.format(expense);
  const balance = income - expense;
  elements.balanceTotal.textContent = formatSignedYen(balance);
  elements.balanceTotal.classList.toggle("negative-total", balance < 0);
  elements.balanceTotal.classList.toggle("positive-total", balance >= 0);
  const targetBalance = currentTargetBalance();
  elements.targetBalanceLabel.textContent = state.periodMode === "week" ? "週間収支目標" : "月間収支目標";
  elements.targetBalanceTotal.textContent = yen.format(targetBalance);
  const targetDiff = currentTargetActualBalance(period.start) - targetBalance;
  elements.targetDiffTotal.textContent = formatSignedYen(targetDiff);
  elements.targetDiffTotal.classList.toggle("negative-total", targetDiff < 0);
  elements.targetDiffTotal.classList.toggle("positive-total", targetDiff >= 0);

  renderMapBars(periodEntries);
  renderLedger(filterEntries(periodEntries));
  renderPeriodList();
  renderYearChart();
  renderItemSearchResults();
  renderPlannedPurchases();
  renderMemos();
  updateTagOptions();
}

function refreshConfigurationViews(selectedMap = elements.linkMap.value) {
  updateEntryMapOptions();
  updateEntryItemOptions();
  fillUnitPriceFromSelectedItem();
  updateAmount();
  updateLinkOptions(selectedMap);
  renderMapList();
  renderItemList();
  renderLinkList();
}

function updateTopCollapseState() {
  elements.stickyTop.classList.toggle("top-collapsed", state.topCollapsed);
  elements.topCollapse.textContent = state.topCollapsed ? "展開する" : "折りたたむ";
  elements.topCollapse.setAttribute("aria-expanded", String(!state.topCollapsed));
  requestAnimationFrame(updateStickyTopHeight);
}

function updateAxisLimitInputs() {
  const limits = currentAxisLimits();
  elements.barAxisMaxDisplay.textContent = limits.bar > 0 ? yen.format(limits.bar) : "自動";
  elements.netAxisMaxDisplay.textContent = limits.net > 0 ? yen.format(limits.net) : "自動";
}

function updateAxisLimit(axis) {
  const limits = currentAxisLimits();
  const label = axis === "bar" ? "収入/支出軸上限" : "収支軸上限";
  const currentValue = axis === "bar" ? limits.bar : limits.net;
  const input = window.prompt(`${label}を入力してください（空欄または0で自動）`, currentValue > 0 ? formatAmount(currentValue) : "");
  if (input === null) return;
  const value = parseAmount(input);
  if (state.periodMode === "week") {
    if (axis === "bar") {
      state.weeklyBarAxisMax = value;
      localStorage.setItem(WEEKLY_BAR_AXIS_MAX_STORAGE_KEY, String(value));
    } else {
      state.weeklyNetAxisMax = value;
      localStorage.setItem(WEEKLY_NET_AXIS_MAX_STORAGE_KEY, String(value));
    }
  } else {
    if (axis === "bar") {
      state.monthlyBarAxisMax = value;
      localStorage.setItem(MONTHLY_BAR_AXIS_MAX_STORAGE_KEY, String(value));
    } else {
      state.monthlyNetAxisMax = value;
      localStorage.setItem(MONTHLY_NET_AXIS_MAX_STORAGE_KEY, String(value));
    }
  }
  updateAxisLimitInputs();
  renderYearChart();
}

function currentAxisLimits() {
  return state.periodMode === "week"
    ? { bar: state.weeklyBarAxisMax, net: state.weeklyNetAxisMax }
    : { bar: state.monthlyBarAxisMax, net: state.monthlyNetAxisMax };
}

function updateStickyTopHeight() {
  document.documentElement.style.setProperty("--sticky-top-height", `${elements.stickyTop.getBoundingClientRect().height}px`);
}

function currentTargetBalance() {
  return state.periodMode === "week" ? state.weeklyTargetBalance : state.targetBalance;
}

function currentTargetActualBalance(periodStart) {
  const start = state.periodMode === "week" ? periodStart : getMonthStart(periodStart);
  const end = state.periodMode === "week" ? getWeekEnd(start) : getMonthEnd(start);
  return state.entries
    .filter((entry) => isEntryInPeriod(entry, start, end))
    .reduce((total, entry) => total + (entry.type === "income" ? entry.amount : -entry.amount), 0);
}

function renderLedger(entries) {
  elements.ledgerList.replaceChildren();

  if (entries.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "この条件に合う明細はありません";
    elements.ledgerList.append(empty);
    return;
  }

  for (const entry of entries) {
    const item = elements.template.content.firstElementChild.cloneNode(true);
    const mapName = entry.map || entry.category || "未設定グループ";
    item.querySelector(".entry-date").textContent = `${formatDate(entry.date)} ${entry.time || "00:00"}`;
    item.querySelector(".entry-memo").textContent = entry.item || entry.memo || mapName;
    item.querySelector(".entry-category").textContent = entrySubtitle(entry, mapName);

    const amount = item.querySelector(".entry-amount");
    amount.textContent = `${entry.type === "income" ? "+" : "-"}${yen.format(entry.amount)}`;
    amount.classList.add(entry.type);

    item.dataset.id = entry.id;
    elements.ledgerList.append(item);
  }
}

function renderItemSearchResults() {
  elements.itemSearchResults.replaceChildren();
  elements.unitPriceTrendPanel.replaceChildren();
  const keyword = elements.itemSearch.value.trim().toLowerCase();
  const type = elements.typeSearch.value;
  const searchTags = getTagValues(elements.searchTags);
  const startDate = elements.searchStartDate.value;
  const endDate = elements.searchEndDate.value;
  const hasSearchCondition = Boolean(keyword || type !== "all" || searchTags.length || startDate || endDate);
  if (!hasSearchCondition) {
    renderSearchTotals([], true);
    renderUnitPriceTrend([]);
    renderSearchTable([], "検索条件を入力すると結果がここに表示されます");
    return;
  }

  const results = state.entries
    .filter((entry) => {
      const matchesKeyword = !keyword || (entry.item || "").toLowerCase().includes(keyword);
      const matchesType = type === "all" || entry.type === type;
      const entryTags = normalizeTags(entry.tags);
      const matchesTag = searchTags.length === 0 || searchTags.some((tag) => entryTags.includes(tag));
      const matchesPeriod = isEntryInSearchDateRange(entry, startDate, endDate);
      return matchesKeyword && matchesType && matchesTag && matchesPeriod;
    })
    .sort(compareSearchResults);

  renderSearchTotals(results, true);
  renderUnitPriceTrend(results);

  if (results.length === 0) {
    renderSearchTable([], "該当する収支データはありません");
    return;
  }

  renderSearchTable(results);
}

function renderSearchTable(results, emptyMessage = "") {
  const table = document.createElement("div");
  table.className = "search-table";
  table.innerHTML = `
    <div class="search-table-head">
      ${searchSortHeader("date", "日時")}
      ${searchSortHeader("type", "種別")}
      ${searchSortHeader("tags", "タグ")}
      ${searchSortHeader("item", "アイテム/項目")}
      ${searchSortHeader("quantity", "数量")}
      ${searchSortHeader("unitPrice", "単価")}
      ${searchSortHeader("amount", "金額")}
    </div>
  `;
  if (results.length === 0) {
    const empty = document.createElement("div");
    empty.className = "search-table-empty";
    empty.textContent = emptyMessage;
    table.append(empty);
    elements.itemSearchResults.append(table);
    return;
  }

  for (const entry of results) {
    const row = document.createElement("div");
    row.className = "search-table-row";
    row.dataset.id = entry.id;
    row.innerHTML = `
      <span>${escapeHTML(`${entry.date} ${entry.time || "00:00"}`)}</span>
      <span class="${entry.type === "income" ? "income-text" : "expense-text"}">${entry.type === "income" ? "収入" : "支出"}</span>
      <span>${escapeHTML(formatTags(entry.tags) || "-")}</span>
      <strong>${escapeHTML(entry.item || "")}</strong>
      <span>${escapeHTML(formatQuantity(entry.quantity))}</span>
      <span>${yen.format(entry.unitPrice || 0)}</span>
      <span class="${entry.type === "income" ? "income-text" : "expense-text"}">${entry.type === "income" ? "+" : "-"}${yen.format(entry.amount)}</span>
    `;
    table.append(row);
  }

  elements.itemSearchResults.append(table);
}

function renderUnitPriceTrend(results) {
  elements.unitPriceTrendPanel.replaceChildren();
  const itemNames = [...new Set(results.map((entry) => entry.item || "").filter(Boolean))];
  if (itemNames.length !== 1 || results.length === 0) return;

  const item = itemNames[0];
  const entries = results
    .filter((entry) => entry.item === item && Number(entry.unitPrice || 0) > 0)
    .sort((a, b) => entryDateTime(a) - entryDateTime(b));
  if (entries.length === 0) return;

  const incomeEntries = entries.filter((entry) => entry.type === "income");
  const expenseEntries = entries.filter((entry) => entry.type === "expense");
  const allPrices = entries.map((entry) => Number(entry.unitPrice || 0));
  const minTime = Math.min(...entries.map((entry) => entryDateTime(entry).getTime()));
  const maxTime = Math.max(...entries.map((entry) => entryDateTime(entry).getTime()));
  const minPriceRaw = Math.min(...allPrices);
  const maxPriceRaw = Math.max(...allPrices);
  const pricePadding = Math.max((maxPriceRaw - minPriceRaw) * 0.16, maxPriceRaw * 0.08, 1);
  const minPrice = Math.max(0, minPriceRaw - pricePadding);
  const maxPrice = maxPriceRaw + pricePadding;
  const width = 820;
  const height = 320;
  const chart = { left: 78, top: 34, width: 686, height: 212 };
  const timeSpan = Math.max(maxTime - minTime, 1);
  const priceSpan = Math.max(maxPrice - minPrice, 1);
  const xOf = (entry) => chart.left + ((entryDateTime(entry).getTime() - minTime) / timeSpan) * chart.width;
  const yOf = (price) => chart.top + chart.height - ((price - minPrice) / priceSpan) * chart.height;
  const series = [
    buildUnitPriceSeriesMeta("収入", "income", incomeEntries),
    buildUnitPriceSeriesMeta("支出", "expense", expenseEntries),
  ];
  const recentSince = new Date();
  recentSince.setMonth(recentSince.getMonth() - 3);
  const medians = series
    .map((itemSeries) => ({
      ...itemSeries,
      value: median(itemSeries.entries.filter((entry) => entryDateTime(entry) >= recentSince).map((entry) => Number(entry.unitPrice || 0))),
    }))
    .filter((itemSeries) => Number.isFinite(itemSeries.value));
  const dateTicks = buildDateTicks(minTime, maxTime, 10);
  const priceTicks = buildLinearTicks(minPrice, maxPrice, 6);
  const bodyClass = state.unitPriceTrendCollapsed ? " collapsed" : "";

  elements.unitPriceTrendPanel.innerHTML = `
    <div class="unit-price-trend-card">
      <div class="unit-price-trend-header">
        <div>
          <span>Unit Price Trend</span>
          <strong>${escapeHTML(item)} の単価推移</strong>
        </div>
        <button class="secondary-button unit-price-trend-toggle" id="toggleUnitPriceTrendCollapseButton" type="button">${state.unitPriceTrendCollapsed ? "展開" : "折りたたむ"}</button>
      </div>
      <div class="unit-price-trend-chart-wrap${bodyClass}">
        <svg class="unit-price-trend-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHTML(item)}の単価推移グラフ">
          <rect class="trend-plot-bg" x="${chart.left}" y="${chart.top}" width="${chart.width}" height="${chart.height}"></rect>
          ${priceTicks.map((tick) => `<line class="trend-grid-line" x1="${chart.left}" y1="${yOf(tick)}" x2="${chart.left + chart.width}" y2="${yOf(tick)}"></line><text class="trend-axis-label" x="${chart.left - 10}" y="${yOf(tick) + 4}" text-anchor="end">${formatShortAmount(tick)}</text>`).join("")}
          ${dateTicks.map((tick) => `<line class="trend-grid-line trend-grid-line-vertical" x1="${unitPriceX(tick, chart, minTime, maxTime)}" y1="${chart.top}" x2="${unitPriceX(tick, chart, minTime, maxTime)}" y2="${chart.top + chart.height}"></line><text class="trend-axis-label" x="${unitPriceX(tick, chart, minTime, maxTime)}" y="${chart.top + chart.height + 28}" text-anchor="middle">${formatDateFromTime(tick)}</text>`).join("")}
          <line class="trend-axis-line" x1="${chart.left}" y1="${chart.top}" x2="${chart.left}" y2="${chart.top + chart.height}"></line>
          <line class="trend-axis-line" x1="${chart.left}" y1="${chart.top + chart.height}" x2="${chart.left + chart.width}" y2="${chart.top + chart.height}"></line>
          <text class="trend-axis-title trend-axis-title-y" x="24" y="${chart.top + chart.height / 2}" text-anchor="middle">単価</text>
          <text class="trend-axis-title" x="${chart.left + chart.width / 2}" y="${height - 18}" text-anchor="middle">日付</text>
          ${series.map((itemSeries) => renderUnitPriceSeries(itemSeries, xOf, yOf)).join("")}
          ${medians.map((itemSeries) => {
            const y = yOf(itemSeries.value);
            return `<line class="trend-median-line ${itemSeries.className}" x1="${chart.left}" y1="${y}" x2="${chart.left + chart.width}" y2="${y}"></line><text class="trend-median-label" x="${chart.left + chart.width - 6}" y="${y - 6}" text-anchor="end">${itemSeries.label} 直近3カ月中央値 ${formatShortAmount(itemSeries.value)}</text>`;
          }).join("")}
        </svg>
        <div class="unit-price-legend">
          ${series.map((itemSeries) => `
            <span class="unit-price-legend-item ${itemSeries.className}">
              <i></i>
              <strong>${itemSeries.label}</strong>
              <span>件数 ${itemSeries.countText}</span>
              <span>平均 ${itemSeries.averageText}</span>
              <span>中央値 ${itemSeries.medianText}</span>
              <span>最高 ${itemSeries.maxText}</span>
              <span>最低 ${itemSeries.minText}</span>
            </span>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function buildUnitPriceSeriesMeta(label, className, entries) {
  const prices = entries.map((entry) => Number(entry.unitPrice || 0)).filter((price) => price > 0);
  return {
    label,
    className,
    entries,
    countText: `${entries.length}件`,
    averageText: prices.length ? formatShortAmount(prices.reduce((sum, price) => sum + price, 0) / prices.length) : "-",
    medianText: prices.length ? formatShortAmount(median(prices)) : "-",
    maxText: prices.length ? formatShortAmount(Math.max(...prices)) : "-",
    minText: prices.length ? formatShortAmount(Math.min(...prices)) : "-",
  };
}

function renderUnitPriceSeries(series, xOf, yOf) {
  if (series.entries.length === 0) return "";
  const points = series.entries.map((entry) => `${xOf(entry)},${yOf(entry.unitPrice || 0)}`).join(" ");
  const dots = series.entries.map((entry) => `<circle class="unit-price-dot ${series.className}" cx="${xOf(entry)}" cy="${yOf(entry.unitPrice || 0)}" r="2.2"><title>${series.label} ${formatDate(entry.date)} ${yen.format(entry.unitPrice || 0)}</title></circle>`).join("");
  return `<polyline class="unit-price-line ${series.className}" points="${points}"></polyline>${dots}`;
}

function updateSearchSort(key) {
  if (!key) return;
  if (state.searchSort.key === key) {
    state.searchSort.direction = state.searchSort.direction === "asc" ? "desc" : "asc";
  } else {
    state.searchSort = { key, direction: key === "date" ? "desc" : "asc" };
  }
  renderItemSearchResults();
}

function searchSortHeader(key, label) {
  const active = state.searchSort.key === key;
  const mark = active ? (state.searchSort.direction === "asc" ? " ▲" : " ▼") : "";
  return `<button class="search-sort-button ${active ? "active" : ""}" type="button" data-sort="${key}">${escapeHTML(label)}${mark}</button>`;
}

function compareSearchResults(a, b) {
  const direction = state.searchSort.direction === "asc" ? 1 : -1;
  const aValue = searchSortValue(a, state.searchSort.key);
  const bValue = searchSortValue(b, state.searchSort.key);
  let result = 0;

  if (typeof aValue === "number" && typeof bValue === "number") {
    result = aValue - bValue;
  } else {
    result = String(aValue).localeCompare(String(bValue), "ja", { numeric: true, sensitivity: "base" });
  }

  if (result === 0) return compareEntriesNewestFirst(a, b);
  return result * direction;
}

function searchSortValue(entry, key) {
  switch (key) {
    case "date":
      return entryDateTime(entry).getTime();
    case "type":
      return entry.type || "";
    case "tags":
      return formatTags(entry.tags);
    case "item":
      return entry.item || "";
    case "quantity":
      return Number(entry.quantity || 0);
    case "unitPrice":
      return Number(entry.unitPrice || 0);
    case "amount":
      return Number(entry.amount || 0);
    default:
      return "";
  }
}

function clearItemSearch() {
  elements.searchStartDate.value = "";
  elements.searchEndDate.value = "";
  elements.typeSearch.value = "all";
  setTagValues(elements.searchTags, elements.searchTagChipList, []);
  elements.itemSearch.value = "";
  renderItemSearchResults();
}

function isEntryInSearchDateRange(entry, startDate, endDate) {
  if (startDate && entry.date < startDate) return false;
  if (endDate && entry.date > endDate) return false;
  return true;
}

function renderSearchTotals(results, shouldShow) {
  elements.searchTotals.classList.toggle("hidden", !shouldShow);
  elements.searchTotals.replaceChildren();
  if (!shouldShow) return;

  const income = sum(results.filter((entry) => entry.type === "income"));
  const expense = sum(results.filter((entry) => entry.type === "expense"));
  const balance = income - expense;
  const cards = [
    { label: "ヒット数", valueText: `${results.length}件`, className: "" },
    { label: "収入合計", valueText: yen.format(income), className: "income-text" },
    { label: "支出合計", valueText: yen.format(expense), className: "expense-text" },
    { label: "収支合計", valueText: formatSignedYen(balance), className: balance < 0 ? "expense-text" : "income-text" },
  ];

  for (const card of cards) {
    const item = document.createElement("article");
    item.className = "search-total-card";
    item.innerHTML = `
      <span>${card.label}</span>
      <strong class="${card.className}">${card.valueText}</strong>
    `;
    elements.searchTotals.append(item);
  }
}

function plannedQuantity(planned) {
  const quantity = Number(planned?.quantity);
  return Number.isFinite(quantity) && quantity > 0 ? quantity : 1;
}

function plannedTotalAmount(planned) {
  return Math.round(Number(planned?.amount || 0) * plannedQuantity(planned));
}

function applyPlannedTransferRemainder(planned, usedQuantity) {
  if (!planned) {
    state.plannedPurchases = state.plannedPurchases.filter((item) => item.id !== state.sendingPlannedId);
    return;
  }
  const remaining = plannedQuantity(planned) - Number(usedQuantity || 0);
  if (remaining > 0) {
    planned.quantity = remaining;
    return;
  }
  state.plannedPurchases = state.plannedPurchases.filter((item) => item.id !== planned.id);
}

function renderPlannedPurchases() {
  elements.plannedList.replaceChildren();
  const totals = plannedTotals();
  elements.plannedBuyTotal.textContent = yen.format(totals.buy);
  elements.plannedSellTotal.textContent = yen.format(totals.sell);
  elements.plannedCashDisplay.textContent = yen.format(state.plannedCash);
  if (elements.topPlannedBuyTotal) elements.topPlannedBuyTotal.textContent = yen.format(totals.buy);
  if (elements.topPlannedSellTotal) elements.topPlannedSellTotal.textContent = yen.format(totals.sell);
  const net = state.plannedCash + totals.sell - totals.buy;
  elements.topPlannedCashTotal.textContent = yen.format(state.plannedCash);
  elements.topPlannedBuyDetailTotal.textContent = yen.format(totals.buy);
  elements.topPlannedSellDetailTotal.textContent = yen.format(totals.sell);
  elements.topPlannedNetDetailTotal.textContent = formatSignedYen(net);
  elements.topPlannedNetDetailTotal.classList.toggle("negative-total", net < 0);
  elements.topPlannedNetDetailTotal.classList.toggle("positive-total", net >= 0);
  elements.plannedNetTotal.textContent = formatSignedYen(net);
  elements.plannedNetTotal.classList.toggle("negative-total", net < 0);
  elements.plannedNetTotal.classList.toggle("positive-total", net >= 0);
  if (state.plannedPurchases.length === 0) {
    elements.plannedList.textContent = "購入・売却予定はありません";
    return;
  }

  const head = document.createElement("div");
  head.className = "planned-row planned-row-head";
  head.innerHTML = `
    <span></span>
    <span>種別</span>
    <span>アイテム / 内容</span>
    <span>予定金額</span>
    <span>累計差引</span>
    <span>登録</span>
    <span></span>
  `;
  elements.plannedList.append(head);

  let runningNet = state.plannedCash;
  state.plannedPurchases.forEach((planned, index) => {
    const row = document.createElement("div");
    row.className = "planned-row";
    row.dataset.id = planned.id;
    const isBuy = (planned.type || "buy") === "buy";
    const quantity = plannedQuantity(planned);
    const totalAmount = plannedTotalAmount(planned);
    runningNet += isBuy ? -totalAmount : totalAmount;
    const plannedTags = formatTags(planned.tags);
    const plannedMeta = [`単価 ${yen.format(planned.amount)}`, `数量 ${formatQuantity(quantity)}`];
    if (plannedTags) plannedMeta.push(plannedTags);
    row.innerHTML = `
      <span class="drag-handle" draggable="true" data-id="${planned.id}" aria-label="並び替え">⋮⋮</span>
      <span class="${isBuy ? "expense-text" : "income-text"}">${isBuy ? "購入" : "売却"}</span>
      <div class="planned-row-main">
        <strong>${escapeHTML(planned.item)}</strong>
        <small>${escapeHTML(plannedMeta.join(" / "))}</small>
      </div>
      <span class="${isBuy ? "expense-text" : "income-text"}">${yen.format(totalAmount)}</span>
      <span class="planned-running-net ${runningNet < 0 ? "expense-text" : "income-text"}">${formatSignedYen(runningNet)}</span>
      <button class="send-planned-button" type="button" data-id="${planned.id}">明細へ</button>
      <div class="planned-edge-actions" aria-label="並び替え">
        <button class="planned-edge-button" type="button" data-id="${planned.id}" data-edge="top" aria-label="先頭へ" title="先頭へ" ${index === 0 ? "disabled" : ""}>⇈</button>
        <button class="planned-edge-button" type="button" data-id="${planned.id}" data-edge="bottom" aria-label="末尾へ" title="末尾へ" ${index === state.plannedPurchases.length - 1 ? "disabled" : ""}>⇊</button>
      </div>
    `;
    elements.plannedList.append(row);
  });
}

function openPlannedEntryModal(id) {
  const planned = state.plannedPurchases.find((item) => item.id === id);
  if (!planned) return;
  const isSell = (planned.type || "buy") === "sell";
  state.editingEntryId = "";
  state.sendingPlannedId = id;
  elements.deleteEditEntry.classList.add("hidden");
  setRadioValue(elements.editForm, "editType", isSell ? "income" : "expense");
  elements.editDate.value = todayISO();
  elements.editTime.value = currentTime();
  elements.editQuantity.value = formatQuantity(plannedQuantity(planned)) || "1";
  setTagValues(elements.editTags, elements.editTagChipList, planned.tags || []);
  elements.editGroupDetails.open = false;
  updateEditMapOptions("");
  updateEditItemOptions(isSell ? planned.item : "");
  elements.editItem.value = isSell ? planned.item : "";
  elements.editExpenseName.value = isSell ? "" : planned.item;
  elements.editIncomeUnitPrice.value = isSell ? formatAmount(planned.amount) : "";
  elements.editExpenseUnitPrice.value = isSell ? "" : formatAmount(planned.amount);
  updateEditMode();
  updateEditInputMode();
  updateEditAmount();
  elements.editModal.classList.remove("hidden");
  return;
  const entry = {
    id: crypto.randomUUID(),
    createdAt: Date.now(),
    type: isSell ? "income" : "expense",
    date: todayISO(),
    time: currentTime(),
    amount: planned.amount,
    map: "",
    item: planned.item,
    quantity: 1,
    unitPrice: planned.amount,
    tags: [],
  };
  state.entries.push(entry);
  state.plannedPurchases = state.plannedPurchases.filter((item) => item.id !== id);
  state.periodStart = rangeKey(getRangeStart(entryDateTime(entry)));
  saveEntries();
  savePlannedPurchases();
  updatePeriodLabel();
  render();
}

function addPlannedPurchase() {
  const type = plannedType();
  const item = elements.plannedItem.value.trim();
  const quantity = parseQuantityInput(elements.plannedQuantity.value) || 1;
  const amount = parseAmount(elements.plannedAmount.value);
  if (!item || quantity <= 0 || !amount) return;
  commitTagInput(elements.plannedTags, elements.plannedTagChipList);
  state.plannedPurchases.push({
    id: crypto.randomUUID(),
    type,
    tags: getTagValues(elements.plannedTags),
    item,
    quantity,
    amount,
    createdAt: Date.now(),
  });
  setTagValues(elements.plannedTags, elements.plannedTagChipList, []);
  elements.plannedItem.value = "";
  elements.plannedQuantity.value = "1";
  elements.plannedAmount.value = "";
  savePlannedPurchases();
  renderPlannedPurchases();
  updateTagOptions();
}

function openPlannedEditModal(id) {
  const planned = state.plannedPurchases.find((item) => item.id === id);
  if (!planned) return;
  const isSell = (planned.type || "buy") === "sell";
  state.editingPlannedId = id;
  setRadioValue(elements.plannedEditForm, "plannedEditType", isSell ? "sell" : "buy");
  updatePlannedEditMode();
  setTagValues(elements.plannedEditTags, elements.plannedEditTagChipList, planned.tags || []);
  elements.plannedEditItem.value = planned.item || "";
  elements.plannedEditQuantity.value = formatQuantity(plannedQuantity(planned)) || "1";
  elements.plannedEditAmount.value = formatAmount(planned.amount);
  updatePlannedEditTotalAmount();
  elements.plannedEditModal.classList.remove("hidden");
}

function closePlannedEditModal() {
  state.editingPlannedId = "";
  elements.plannedEditModal.classList.add("hidden");
}

function updatePlannedEditTotalAmount() {
  if (!elements.plannedEditTotalAmount) return;
  const quantity = parseQuantityInput(elements.plannedEditQuantity.value);
  const unitPrice = parseAmount(elements.plannedEditAmount.value);
  elements.plannedEditTotalAmount.value = quantity > 0 && unitPrice > 0 ? formatAmount(Math.round(quantity * unitPrice)) : "";
}

function deletePlannedEdit() {
  if (!state.editingPlannedId) return;
  if (!window.confirm("この予定を削除しますか？")) return;
  state.plannedPurchases = state.plannedPurchases.filter((planned) => planned.id !== state.editingPlannedId);
  savePlannedPurchases();
  closePlannedEditModal();
  renderPlannedPurchases();
  updateTagOptions();
}

function plannedEditType() {
  return elements.plannedEditForm.querySelector('input[name="plannedEditType"]:checked')?.value || "buy";
}

function updatePlannedEditMode() {
  const isSell = plannedEditType() === "sell";
  elements.plannedEditTitle.textContent = isSell ? "売却予定編集" : "購入予定編集";
  elements.plannedEditForm.classList.toggle("planned-edit-sell", isSell);
  elements.plannedEditForm.classList.toggle("planned-edit-buy", !isSell);
}

function savePlannedEdit() {
  const planned = state.plannedPurchases.find((item) => item.id === state.editingPlannedId);
  if (!planned) return;

  const itemName = elements.plannedEditItem.value.trim();
  const quantity = parseQuantityInput(elements.plannedEditQuantity.value) || 1;
  const amount = parseAmount(elements.plannedEditAmount.value);
  if (!itemName || quantity <= 0 || !amount) return;
  commitTagInput(elements.plannedEditTags, elements.plannedEditTagChipList);
  planned.type = plannedEditType();
  planned.tags = getTagValues(elements.plannedEditTags);
  delete planned.map;
  planned.item = itemName;
  planned.quantity = quantity;
  if (!amount) return;
  planned.amount = amount;
  savePlannedPurchases();
  closePlannedEditModal();
  renderPlannedPurchases();
  updateTagOptions();
}

function plannedTotals() {
  return state.plannedPurchases.reduce(
    (total, planned) => {
      total[planned.type || "buy"] += plannedTotalAmount(planned);
      return total;
    },
    { buy: 0, sell: 0 },
  );
}

function plannedType() {
  return document.querySelector('input[name="plannedType"]:checked')?.value || "buy";
}

function registerPlannedCash() {
  const input = window.prompt("可用資金を入力してください", formatAmount(state.plannedCash));
  if (input === null) return;
  state.plannedCash = parseAmount(input);
  localStorage.setItem(PLANNED_CASH_STORAGE_KEY, String(state.plannedCash));
  renderPlannedPurchases();
}

function updatePlannedMode() {
  const isSell = plannedType() === "sell";
  elements.plannedItem.classList.remove("planned-item-wide");
  elements.addPlanned.classList.toggle("planned-add-sell", isSell);
  elements.addPlanned.classList.toggle("planned-add-buy", !isSell);
  elements.addPlanned.closest(".planned-input-block")?.classList.toggle("planned-input-sell", isSell);
  elements.addPlanned.closest(".planned-input-block")?.classList.toggle("planned-input-buy", !isSell);
}

function movePlannedPurchase(id, direction) {
  const index = state.plannedPurchases.findIndex((planned) => planned.id === id);
  if (index === -1) return;
  const target = direction === "up" ? index - 1 : index + 1;
  if (target < 0 || target >= state.plannedPurchases.length) return;
  [state.plannedPurchases[index], state.plannedPurchases[target]] = [state.plannedPurchases[target], state.plannedPurchases[index]];
  savePlannedPurchases();
  renderPlannedPurchases();
}

function movePlannedPurchaseToEdge(id, edge) {
  const index = state.plannedPurchases.findIndex((planned) => planned.id === id);
  if (index === -1) return;
  const target = edge === "top" ? 0 : state.plannedPurchases.length - 1;
  if (index === target) return;
  const [planned] = state.plannedPurchases.splice(index, 1);
  state.plannedPurchases.splice(target, 0, planned);
  savePlannedPurchases();
  renderPlannedPurchases();
}

function handlePlannedDragStart(event) {
  const handle = event.target.closest(".drag-handle");
  if (!handle) return;
  const row = handle.closest(".planned-row");
  if (!row || row.classList.contains("planned-row-head")) return;
  state.draggingPlannedId = row.dataset.id;
  row.classList.add("dragging");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", row.dataset.id);
}

function handlePlannedDragOver(event) {
  const row = event.target.closest(".planned-row");
  if (!state.draggingPlannedId || !row || row.classList.contains("planned-row-head") || row.dataset.id === state.draggingPlannedId) return;
  event.preventDefault();
  row.classList.add("drag-over");
  event.dataTransfer.dropEffect = "move";
}

function handlePlannedDragLeave(event) {
  const row = event.target.closest(".planned-row");
  if (row) row.classList.remove("drag-over");
}

function handlePlannedDrop(event) {
  const row = event.target.closest(".planned-row");
  if (!state.draggingPlannedId || !row || row.classList.contains("planned-row-head")) return;
  event.preventDefault();
  const draggedId = state.draggingPlannedId;
  state.draggingPlannedId = "";
  row.classList.remove("drag-over");
  reorderPlannedPurchase(draggedId, row.dataset.id);
}

function handlePlannedDragEnd() {
  state.draggingPlannedId = "";
  elements.plannedList.querySelectorAll(".planned-row").forEach((row) => row.classList.remove("dragging", "drag-over"));
}

function reorderPlannedPurchase(draggedId, targetId) {
  if (!draggedId || !targetId || draggedId === targetId) return;
  const from = state.plannedPurchases.findIndex((planned) => planned.id === draggedId);
  const to = state.plannedPurchases.findIndex((planned) => planned.id === targetId);
  if (from === -1 || to === -1) return;
  const [dragged] = state.plannedPurchases.splice(from, 1);
  state.plannedPurchases.splice(to, 0, dragged);
  savePlannedPurchases();
  renderPlannedPurchases();
}

function memoColor() {
  return document.querySelector('input[name="memoColor"]:checked')?.value || "blue";
}

function memoEditColor() {
  return document.querySelector('input[name="memoEditColor"]:checked')?.value || "blue";
}

function setMemoColor(value, groupName = "memoColor") {
  const color = ["blue", "green", "amber", "rose", "slate"].includes(value) ? value : "blue";
  const input = document.querySelector(`input[name="${groupName}"][value="${color}"]`);
  if (input) input.checked = true;
}

function updateMemoEditDialogColor(color) {
  elements.memoEditForm.classList.remove(
    "memo-edit-color-blue",
    "memo-edit-color-green",
    "memo-edit-color-amber",
    "memo-edit-color-rose",
    "memo-edit-color-slate",
  );
  elements.memoEditForm.classList.add(`memo-edit-color-${["blue", "green", "amber", "rose", "slate"].includes(color) ? color : "blue"}`);
}

function normalizeMemoTag(tag) {
  const value = String(tag || "").trim();
  if (!value) return "";
  return value.startsWith("#") ? value : `#${value}`;
}

function normalizeMemoTags(memo) {
  if (Array.isArray(memo.tags)) return normalizeTags(memo.tags);
  return normalizeTags(memo.tag ? [memo.tag] : []);
}

function clearMemoForm() {
  setTagValues(elements.memoTag, elements.memoTagChipList, []);
  elements.memoTitle.value = "";
  elements.memoBody.value = "";
  elements.memoDone.checked = false;
  setMemoColor("blue");
}

function confirmClearMemoForm() {
  const hasInput = getTagValues(elements.memoTag).length > 0
    || elements.memoTitle.value.trim()
    || elements.memoBody.value.trim()
    || elements.memoDone.checked;
  if (!hasInput || window.confirm("入力中のメモをクリアしますか？")) clearMemoForm();
}

function saveMemo() {
  const title = elements.memoTitle.value.trim();
  const body = elements.memoBody.value.trim();
  if (!title && !body) return;

  const now = new Date().toISOString();
  state.memos.unshift({
    id: crypto.randomUUID(),
    tags: getTagValues(elements.memoTag),
    title: title || "無題",
    body,
    done: elements.memoDone.checked,
    color: memoColor(),
    createdAt: now,
    updatedAt: now,
  });

  saveMemos();
  clearMemoForm();
  renderMemos();
}

function openMemoForEdit(id) {
  const memo = state.memos.find((item) => item.id === id);
  if (!memo) return;
  state.editingMemoId = id;
  setTagValues(elements.memoEditTag, elements.memoEditTagChipList, memo.tags || (memo.tag ? [memo.tag] : []));
  elements.memoEditTitle.value = memo.title || "";
  elements.memoEditBody.value = memo.body || "";
  elements.memoEditDone.checked = Boolean(memo.done);
  setMemoColor(memo.color, "memoEditColor");
  updateMemoEditDialogColor(memo.color);
  elements.memoEditModal.classList.remove("hidden");
  elements.memoEditTitle.focus();
}

function closeMemoEditModal() {
  state.editingMemoId = "";
  elements.memoEditModal.classList.add("hidden");
}

function saveMemoEdit(event) {
  event.preventDefault();
  const memo = state.memos.find((item) => item.id === state.editingMemoId);
  if (!memo) return;
  const title = elements.memoEditTitle.value.trim();
  const body = elements.memoEditBody.value.trim();
  if (!title && !body) return;

  memo.tags = getTagValues(elements.memoEditTag);
  memo.title = title || "無題";
  memo.body = body;
  memo.done = elements.memoEditDone.checked;
  memo.color = memoEditColor();
  memo.updatedAt = new Date().toISOString();
  state.memos.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  saveMemos();
  closeMemoEditModal();
  renderMemos();
}

function deleteMemoFromEdit() {
  if (!state.editingMemoId) return;
  if (!window.confirm("このメモを削除しますか？")) return;
  state.memos = state.memos.filter((memo) => memo.id !== state.editingMemoId);
  saveMemos();
  closeMemoEditModal();
  renderMemos();
}

function toggleMemoDone(id, done) {
  const memo = state.memos.find((item) => item.id === id);
  if (!memo) return;
  memo.done = done;
  memo.updatedAt = new Date().toISOString();
  saveMemos();
  renderMemos();
}

function memoMatchesSearch(memo, keyword) {
  const selectedTags = getTagValues(elements.memoSearchTag);
  const memoTags = normalizeTags(memo.tags || (memo.tag ? [memo.tag] : []));
  const tagMatched = selectedTags.length === 0 || selectedTags.some((tag) => memoTags.includes(tag));
  if (!tagMatched) return false;
  const doneFilter = elements.memoDoneFilter.value;
  if (doneFilter === "open" && memo.done) return false;
  if (doneFilter === "done" && !memo.done) return false;
  if (!keyword) return true;
  const haystack = `${memo.title || ""} ${memo.body || ""}`.toLowerCase();
  return haystack.includes(keyword.toLowerCase());
}

function updateMemoSort(key) {
  if (!key) return;
  if (state.memoSort.key === key) {
    state.memoSort.direction = state.memoSort.direction === "asc" ? "desc" : "asc";
  } else {
    state.memoSort = { key, direction: ["tag", "title", "body"].includes(key) ? "asc" : "desc" };
  }
  renderMemos();
}

function memoSortHeader(key, label) {
  const active = state.memoSort.key === key;
  const mark = active ? (state.memoSort.direction === "asc" ? " ▲" : " ▼") : "";
  return `<button class="memo-sort-button ${active ? "active" : ""}" type="button" data-sort="${key}">${escapeHTML(label)}${mark}</button>`;
}

function compareMemoRows(a, b) {
  const direction = state.memoSort.direction === "asc" ? 1 : -1;
  const aValue = memoSortValue(a, state.memoSort.key);
  const bValue = memoSortValue(b, state.memoSort.key);
  let result = 0;
  if (typeof aValue === "number" && typeof bValue === "number") {
    result = aValue - bValue;
  } else {
    result = String(aValue).localeCompare(String(bValue), "ja", { numeric: true, sensitivity: "base" });
  }
  if (result === 0) {
    result = Number(new Date(b.updatedAt || 0)) - Number(new Date(a.updatedAt || 0))
      || String(a.title || "").localeCompare(String(b.title || ""), "ja", { numeric: true, sensitivity: "base" });
  }
  return result * direction;
}

function memoSortValue(memo, key) {
  switch (key) {
    case "done":
      return memo.done ? 1 : 0;
    case "tag":
      return normalizeTags(memo.tags || (memo.tag ? [memo.tag] : [])).join(" ");
    case "title":
      return memo.title || "";
    case "body":
      return memo.body || "";
    case "createdAt":
      return Number(new Date(memo.createdAt || 0));
    case "updatedAt":
      return Number(new Date(memo.updatedAt || 0));
    default:
      return Number(new Date(memo.updatedAt || 0));
  }
}

function renderMemos() {
  elements.memoList.replaceChildren();
  const keyword = elements.memoSearch.value.trim();
  const memos = state.memos.filter((memo) => memoMatchesSearch(memo, keyword)).sort(compareMemoRows);
  const header = document.createElement("div");
  header.className = "memo-list-head";
  header.innerHTML = `
    ${memoSortHeader("done", "完了")}
    ${memoSortHeader("tag", "タグ")}
    ${memoSortHeader("title", "タイトル")}
    ${memoSortHeader("body", "内容")}
    ${memoSortHeader("createdAt", "作成日時")}
    ${memoSortHeader("updatedAt", "更新日時")}
  `;
  elements.memoList.append(header);
  if (memos.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state compact-empty";
    empty.textContent = keyword ? "該当するメモはありません。" : "メモはまだありません。";
    elements.memoList.append(empty);
    return;
  }

  for (const memo of memos) {
    const card = document.createElement("article");
    card.className = `memo-card memo-color-${memo.color || "blue"}${memo.done ? " memo-done" : ""}`;
    card.dataset.id = memo.id;
    const body = memo.body || "";
    card.innerHTML = `
      <input class="memo-list-done" type="checkbox" data-id="${escapeHTML(memo.id)}" ${memo.done ? "checked" : ""} aria-label="完了" />
      <span class="memo-list-tag">${escapeHTML((memo.tags || []).join(" ") || memo.tag || "#メモ")}</span>
      <strong>${escapeHTML(memo.title || "無題")}</strong>
      <p>${escapeHTML(body)}</p>
      <time>${escapeHTML(memo.createdAt ? formatDateTime(new Date(memo.createdAt)) : "")}</time>
      <time>${escapeHTML(memo.updatedAt ? formatDateTime(new Date(memo.updatedAt)) : "")}</time>
    `;
    elements.memoList.append(card);
  }
}

function exportAppData() {
  const data = {
    app: "ro-ledger",
    version: 1,
    exportedAt: new Date().toISOString(),
    entries: state.entries,
    groups: state.maps,
    items: state.items,
    links: state.links,
    plannedPurchases: state.plannedPurchases,
    memos: state.memos,
    plannedCash: state.plannedCash,
    theme: state.theme,
    targetBalance: state.targetBalance,
    weeklyTargetBalance: state.weeklyTargetBalance,
    weeklyBarAxisMax: state.weeklyBarAxisMax,
    weeklyNetAxisMax: state.weeklyNetAxisMax,
    monthlyBarAxisMax: state.monthlyBarAxisMax,
    monthlyNetAxisMax: state.monthlyNetAxisMax,
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `profitia-backup_${todayISO().replaceAll("-", "")}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

function importAppData(event) {
  const file = event.target.files?.[0];
  event.target.value = "";
  if (!file) return;
  if (!window.confirm("現在の登録データをインポート内容で置き換えます。よろしいですか？")) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const data = JSON.parse(String(reader.result || "{}"));
      state.entries = Array.isArray(data.entries) ? data.entries.map((entry) => ({ ...entry, tags: normalizeTags(entry.tags) })) : [];
      state.maps = Array.isArray(data.groups) ? data.groups : Array.isArray(data.maps) ? data.maps : [];
      state.items = Array.isArray(data.items) ? data.items : [];
      state.links = normalizeLinks(data.links || {});
      state.plannedPurchases = Array.isArray(data.plannedPurchases)
        ? data.plannedPurchases.map((planned) => ({
            ...planned,
            tags: normalizeTags(planned.tags),
            type: planned.type || "buy",
            quantity: plannedQuantity(planned),
          }))
        : [];
      state.memos = normalizeMemos(data.memos);
      state.plannedCash = Number(data.plannedCash || 0);
      state.theme = themes[data.theme] ? data.theme : "default";
      state.targetBalance = Number(data.targetBalance || 0);
      state.weeklyTargetBalance = Number(data.weeklyTargetBalance || 0);
      state.weeklyBarAxisMax = Number(data.weeklyBarAxisMax || 0);
      state.weeklyNetAxisMax = Number(data.weeklyNetAxisMax || 0);
      state.monthlyBarAxisMax = Number(data.monthlyBarAxisMax ?? data.barAxisMax ?? 0);
      state.monthlyNetAxisMax = Number(data.monthlyNetAxisMax ?? data.netAxisMax ?? 0);
      localStorage.setItem(THEME_STORAGE_KEY, state.theme);
      localStorage.setItem(TARGET_BALANCE_STORAGE_KEY, String(state.targetBalance));
      localStorage.setItem(WEEKLY_TARGET_BALANCE_STORAGE_KEY, String(state.weeklyTargetBalance));
      localStorage.setItem(PLANNED_CASH_STORAGE_KEY, String(state.plannedCash));
      localStorage.setItem(WEEKLY_BAR_AXIS_MAX_STORAGE_KEY, String(state.weeklyBarAxisMax));
      localStorage.setItem(WEEKLY_NET_AXIS_MAX_STORAGE_KEY, String(state.weeklyNetAxisMax));
      localStorage.setItem(MONTHLY_BAR_AXIS_MAX_STORAGE_KEY, String(state.monthlyBarAxisMax));
      localStorage.setItem(MONTHLY_NET_AXIS_MAX_STORAGE_KEY, String(state.monthlyNetAxisMax));
      saveEntries();
      saveMaps();
      saveItems();
      saveLinks();
      savePlannedPurchases();
      saveMemos();
      applyTheme(state.theme);
      updateThemeSelection();
      updateAxisLimitInputs();
      refreshConfigurationViews();
      render();
      window.alert("インポートが完了しました。");
    } catch (error) {
      window.alert("インポートに失敗しました。JSONファイルを確認してください。");
    }
  });
  reader.readAsText(file);
}

function resetAllAppData() {
  const firstConfirm = window.confirm(
    "pROfitiaに保存されている全データを削除します。\nこの操作は元に戻せません。先にエクスポートしておくことを推奨します。\n続行しますか？",
  );
  if (!firstConfirm) return;

  const typed = window.prompt("最終確認です。削除する場合は「削除」と入力してください。");
  if (typed !== "削除") return;

  APP_STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
  window.alert("全データを削除しました。画面を再読み込みします。");
  window.location.reload();
}

function entriesForCurrentPeriod() {
  const period = currentRange();
  return state.entries
    .filter((entry) => isEntryInPeriod(entry, period.start, period.end))
    .sort(compareEntriesNewestFirst);
}

function renderMapBars(entries) {
  const totals = new Map();

  for (const entry of entries) {
    const label = entry.item || entry.map || entry.category || "未設定項目";
    const current = totals.get(label) || { income: 0, expense: 0, net: 0, count: 0 };
    if (entry.type === "income") {
      current.income += entry.amount;
      current.net += entry.amount;
    } else {
      current.expense += entry.amount;
      current.net -= entry.amount;
    }
    current.count += entryQuantity(entry);
    totals.set(label, current);
  }

  elements.categoryBars.replaceChildren();
  if (totals.size === 0) {
    elements.toggleBars.classList.add("hidden");
    return;
  }

  const rows = [...totals.entries()]
    .map(([label, value]) => ({ label, income: value.income, expense: value.expense, net: value.net, count: value.count }))
    .sort(compareTradeSummaryRows);
  const maxAmount = Math.max(...rows.map((row) => Math.abs(row.net)), 1);

  const header = document.createElement("div");
  header.className = "bar-row bar-row-head";
  header.innerHTML = `
    ${tradeSummarySortHeader("label", "アイテム/項目")}
    ${tradeSummarySortHeader("count", "数量")}
    ${tradeSummarySortHeader("income", "収入")}
    ${tradeSummarySortHeader("expense", "支出")}
    ${tradeSummarySortHeader("net", "収支")}
    <span>収支バー</span>
  `;
  elements.categoryBars.append(header);

  for (const { label, income, expense, net, count } of rows) {
    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `
      <span>${escapeHTML(label)}</span>
      <span class="bar-count">${formatQuantity(count)}</span>
      <span class="bar-amount income-text">${yen.format(income)}</span>
      <span class="bar-amount expense-text">${yen.format(expense)}</span>
      <span class="bar-amount ${net < 0 ? "expense-text" : "income-text"}">${formatSignedYen(net)}</span>
      <div class="bar-track net-bar-track" aria-label="収支バー">
        <div class="bar-zero-line"></div>
        <div class="bar-fill ${net < 0 ? "negative" : ""}" style="width: ${(Math.abs(net) / maxAmount) * 50}%; ${net < 0 ? "right: 50%;" : "left: 50%;"}"></div>
      </div>
    `;
    elements.categoryBars.append(row);
  }

  elements.toggleBars.classList.toggle("hidden", rows.length <= 3);
  if (rows.length <= 3) state.barsExpanded = false;
  updateBarsExpandedState();
}

function updateTradeSummarySort(key) {
  if (!key) return;
  if (state.tradeSummarySort.key === key) {
    state.tradeSummarySort.direction = state.tradeSummarySort.direction === "asc" ? "desc" : "asc";
  } else {
    state.tradeSummarySort = { key, direction: key === "label" ? "asc" : "desc" };
  }
  const periodEntries = entriesForCurrentPeriod();
  renderMapBars(periodEntries);
}

function tradeSummarySortHeader(key, label) {
  const active = state.tradeSummarySort.key === key;
  const mark = active ? (state.tradeSummarySort.direction === "asc" ? " ▲" : " ▼") : "";
  return `<button class="bar-sort-button ${active ? "active" : ""}" type="button" data-sort="${key}">${escapeHTML(label)}${mark}</button>`;
}

function compareTradeSummaryRows(a, b) {
  const direction = state.tradeSummarySort.direction === "asc" ? 1 : -1;
  const aValue = tradeSummarySortValue(a, state.tradeSummarySort.key);
  const bValue = tradeSummarySortValue(b, state.tradeSummarySort.key);
  let result = 0;

  if (typeof aValue === "number" && typeof bValue === "number") {
    result = aValue - bValue;
  } else {
    result = String(aValue).localeCompare(String(bValue), "ja", { numeric: true, sensitivity: "base" });
  }

  if (result === 0) {
    if (state.tradeSummarySort.key === "count") {
      result = a.net - b.net;
      if (result !== 0) return result * direction;
    }
    result = b.count - a.count || Math.abs(b.net) - Math.abs(a.net) || a.label.localeCompare(b.label, "ja", { numeric: true, sensitivity: "base" });
  }
  return result * direction;
}

function tradeSummarySortValue(row, key) {
  switch (key) {
    case "label":
      return row.label || "";
    case "count":
      return row.count;
    case "income":
      return row.income;
    case "expense":
      return row.expense;
    case "net":
      return row.net;
    default:
      return row.count;
  }
}

function updateBarsExpandedState() {
  elements.categoryBars.classList.toggle("expanded", state.barsExpanded);
  elements.categoryBars.classList.toggle("collapsed", !state.barsExpanded);
  elements.toggleBars.textContent = state.barsExpanded ? "折りたたむ" : "全体を表示する";
}

function renderMapList() {
  elements.mapList.replaceChildren();
  if (state.maps.length === 0) {
    elements.mapList.textContent = "グループ未登録";
    return;
  }

  for (const map of state.maps) {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "management-row";
    row.dataset.name = map;
    row.innerHTML = `<strong>${escapeHTML(map)}</strong><span>編集</span>`;
    elements.mapList.append(row);
  }
}

function renderItemList() {
  elements.itemList.replaceChildren();
  if (state.items.length === 0) {
    elements.itemList.textContent = "アイテム未登録";
    return;
  }

  const table = document.createElement("div");
  table.className = "item-master-table";
  table.innerHTML = `
    <div class="item-master-head">
      <span>アイテム名</span>
      <span>販売価格</span>
      <span>操作</span>
    </div>
  `;

  for (const item of state.items) {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "item-master-row management-row";
    row.dataset.name = item.name;
    row.innerHTML = `
      <strong>${escapeHTML(item.name)}</strong>
      <span>${yen.format(item.amount)}</span>
      <span>編集</span>
    `;
    table.append(row);
  }

  elements.itemList.append(table);
}

function renderLinkList() {
  elements.linkList.replaceChildren();
  const map = elements.linkMap.value;
  const rows = (state.links[map] || []).map((itemName) => {
    const item = findItem(itemName);
    return { item: itemName, amount: item ? yen.format(item.amount) : "" };
  });

  if (!map) {
    elements.linkList.textContent = "グループを選択してください";
    return;
  }

  if (rows.length === 0) {
    elements.linkList.textContent = "グループ構成未登録";
    return;
  }

  const table = document.createElement("div");
  table.className = "link-tree";
  table.innerHTML = `
    <div class="link-tree-group">
      <span class="link-tree-toggle"></span>
      <strong>${escapeHTML(map)}</strong>
      <span>${rows.length}件</span>
    </div>
  `;

  for (const row of rows) {
    const item = document.createElement("div");
    item.className = "link-tree-row";
    item.innerHTML = `
      <span class="link-tree-branch"></span>
      <strong>${escapeHTML(row.item)}</strong>
      <span class="link-tree-price">${escapeHTML(row.amount)}</span>
      <button class="delete-link-button" type="button" data-item="${escapeHTML(row.item)}" aria-label="グループ構成を削除">×</button>
    `;
    table.append(item);
  }

  elements.linkList.append(table);
}

function renderPeriodList() {
  elements.periodList.replaceChildren();
  const periods = buildPeriodSummaries();

  if (periods.length === 0) {
    elements.periodList.textContent = "収支データはありません";
    elements.summaryDetail.textContent = "";
    return;
  }

  if (!state.selectedSummaryKey || !periods.some((period) => period.key === state.selectedSummaryKey)) {
    state.selectedSummaryKey = periods[0].key;
  }

  for (const period of periods) {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "period-row";
    row.dataset.periodKey = period.key;
    row.classList.toggle("selected", period.key === state.selectedSummaryKey);
    row.innerHTML = `
      <strong>${escapeHTML(formatPeriod(period.start, period.end))}</strong>
      <span class="income-text">収入 ${yen.format(period.income)}</span>
      <span class="expense-text">支出 ${yen.format(period.expense)}</span>
      <span class="${period.net >= 0 ? "income-text" : "expense-text"}">収支 ${formatSignedYen(period.net)}</span>
    `;
    elements.periodList.append(row);
  }

  renderSummaryDetail();
}

function buildPeriodSummaries() {
  const summaries = new Map();

  for (const entry of state.entries) {
    const start = getRangeStart(entryDateTime(entry));
    const key = rangeKey(start);
    const end = getRangeEnd(start);
    if (!summaries.has(key)) {
      summaries.set(key, { key, start, end, income: 0, expense: 0, net: 0 });
    }

    const summary = summaries.get(key);
    if (entry.type === "income") summary.income += entry.amount;
    if (entry.type === "expense") summary.expense += entry.amount;
    summary.net = summary.income - summary.expense;
  }

  return [...summaries.values()].sort((a, b) => b.start - a.start);
}

function renderSummaryDetail() {
  elements.summaryDetail.replaceChildren();
  const start = parseRangeKey(state.selectedSummaryKey);
  const end = getRangeEnd(start);
  const entries = state.entries.filter((entry) => isEntryInPeriod(entry, start, end));

  const title = document.createElement("div");
  title.className = "summary-detail-title";
  title.innerHTML = `
    <span>選択中の明細分布</span>
    <strong>${escapeHTML(formatPeriod(start, end))}</strong>
  `;
  elements.summaryDetail.append(title);

  const grid = document.createElement("div");
  grid.className = "breakdown-grid";
  grid.append(
    createBreakdownPanel("タグ別", aggregateByTag(entries), "タグ付きの収支データはありません"),
    createBreakdownPanel("アイテム/項目別", aggregateByItem(entries), "アイテム/項目の収支", "数量"),
  );
  elements.summaryDetail.append(grid);
}

function renderYearChart() {
  elements.yearChart.replaceChildren();
  const rows = buildTrendChartRows();
  const width = 960;
  const height = 300;
  const padding = { top: 24, right: 82, bottom: 48, left: 82 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const chartTargetBalance = currentTargetBalance();
  const autoBarMax = niceCeil(Math.max(...rows.flatMap((row) => [row.income, row.expense]), 1));
  const autoNetMax = niceCeil(Math.max(...rows.map((row) => Math.abs(row.net)), Math.abs(chartTargetBalance), 1));
  const axisLimits = currentAxisLimits();
  const maxBarAmount = axisLimits.bar > 0 ? axisLimits.bar : autoBarMax;
  const maxNetAbs = axisLimits.net > 0 ? axisLimits.net : autoNetMax;
  const groupWidth = chartWidth / rows.length;
  const barWidth = Math.min(22, groupWidth * 0.26);
  const barY = (amount) => padding.top + chartHeight - Math.min(amount / maxBarAmount, 1) * chartHeight;
  const netY = (amount) => padding.top + chartHeight / 2 - Math.max(Math.min(amount / maxNetAbs, 1), -1) * (chartHeight / 2);
  const gridLines = Array.from({ length: 9 }, (_, index) => {
    const ratio = index / 8;
    const y = padding.top + chartHeight * ratio;
    const leftValue = maxBarAmount * (1 - ratio);
    const rightValue = maxNetAbs * (1 - ratio * 2);
    return `
      <line class="chart-grid" x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}"></line>
      <text class="chart-tick chart-left-tick" x="${padding.left - 10}" y="${y + 5}" text-anchor="end">${formatCompactAmount(leftValue)}</text>
      <text class="chart-tick chart-right-tick" x="${width - padding.right + 10}" y="${y + 5}">${formatCompactAmount(rightValue)}</text>
    `;
  }).join("");
  const points = rows
    .map((row, index) => {
      const x = padding.left + groupWidth * index + groupWidth / 2;
      return `${x},${netY(row.net)}`;
    })
    .join(" ");

  const bars = rows
    .map((row, index) => {
      const center = padding.left + groupWidth * index + groupWidth / 2;
      const incomeHeight = chartHeight - (barY(row.income) - padding.top);
      const expenseHeight = chartHeight - (barY(row.expense) - padding.top);
      return `
        <rect class="chart-income" x="${center - barWidth - 2}" y="${barY(row.income)}" width="${barWidth}" height="${incomeHeight}"><title>${row.label} 収入 ${yen.format(row.income)}</title></rect>
        <rect class="chart-expense" x="${center + 2}" y="${barY(row.expense)}" width="${barWidth}" height="${expenseHeight}"><title>${row.label} 支出 ${yen.format(row.expense)}</title></rect>
        <text class="chart-label" x="${center}" y="${height - 28}" text-anchor="middle">${escapeHTML(row.shortLabel)}</text>
      `;
    })
    .join("");

  const dots = rows
    .map((row, index) => {
      const x = padding.left + groupWidth * index + groupWidth / 2;
      return `<circle class="chart-net-dot" cx="${x}" cy="${netY(row.net)}" r="4"><title>${row.label} 収支 ${yen.format(row.net)}</title></circle>`;
    })
    .join("");

  const targetY = netY(chartTargetBalance);
  const targetLine = `
    <line class="chart-target-line" x1="${padding.left}" y1="${targetY}" x2="${width - padding.right}" y2="${targetY}"><title>目標収支 ${yen.format(chartTargetBalance)}</title></line>
    <text class="chart-target-label" x="${width - padding.right - 6}" y="${targetY - 7}" text-anchor="end">目標 ${formatCompactAmount(chartTargetBalance)}</text>
  `;

  elements.trendChartTitle.textContent = state.periodMode === "week" ? "過去12週間" : "過去12か月";
  elements.yearChart.innerHTML = `
    <svg class="combo-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="過去1年間の収入、支出、収支">
      ${gridLines}
      <line class="chart-axis" x1="${padding.left}" y1="${padding.top + chartHeight}" x2="${width - padding.right}" y2="${padding.top + chartHeight}"></line>
      <line class="chart-axis" x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${padding.top + chartHeight}"></line>
      <line class="chart-axis" x1="${width - padding.right}" y1="${padding.top}" x2="${width - padding.right}" y2="${padding.top + chartHeight}"></line>
      ${bars}
      ${targetLine}
      <polyline class="chart-net-line" points="${points}"></polyline>
      ${dots}
      <text class="chart-axis-title" x="${padding.left}" y="18">収入 / 支出</text>
      <text class="chart-axis-title" x="${width - padding.right}" y="18" text-anchor="end">収支</text>
    </svg>
    <div class="chart-legend">
      <span><i class="legend-income"></i>収入</span>
      <span><i class="legend-expense"></i>支出</span>
      <span><i class="legend-net"></i>収支</span>
      <span><i class="legend-target"></i>目標収支</span>
    </div>
  `;
}

function buildTrendChartRows() {
  return state.periodMode === "week" ? buildWeeklyChartRows() : buildMonthlyChartRows();
}

function buildMonthlyChartRows() {
  const now = new Date();
  const months = [];
  for (let offset = 11; offset >= 0; offset -= 1) {
    const date = new Date(now.getFullYear(), now.getMonth() - offset, 1);
    months.push({
      key: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`,
      label: `${date.getFullYear()}/${date.getMonth() + 1}`,
      shortLabel: `${date.getMonth() + 1}月`,
      income: 0,
      expense: 0,
      net: 0,
    });
  }

  const byKey = new Map(months.map((month) => [month.key, month]));
  for (const entry of state.entries) {
    const date = entryDateTime(entry);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
    const row = byKey.get(key);
    if (!row) continue;
    if (entry.type === "income") row.income += entry.amount;
    if (entry.type === "expense") row.expense += entry.amount;
    row.net = row.income - row.expense;
  }

  return months;
}

function buildWeeklyChartRows() {
  const currentStart = getWeekStart(new Date());
  const weeks = [];
  for (let offset = 11; offset >= 0; offset -= 1) {
    const start = new Date(currentStart);
    start.setDate(start.getDate() - offset * 7);
    const end = getWeekEnd(start);
    weeks.push({
      key: rangeKeyForMode(start, "week"),
      start,
      end,
      label: formatPeriodForMode(start, end, "week"),
      shortLabel: `${start.getMonth() + 1}/${start.getDate()}`,
      income: 0,
      expense: 0,
      net: 0,
    });
  }

  const byKey = new Map(weeks.map((week) => [week.key, week]));
  for (const entry of state.entries) {
    const start = getWeekStart(entryDateTime(entry));
    const row = byKey.get(rangeKeyForMode(start, "week"));
    if (!row) continue;
    if (entry.type === "income") row.income += entry.amount;
    if (entry.type === "expense") row.expense += entry.amount;
    row.net = row.income - row.expense;
  }

  return weeks;
}

function aggregateByTag(entries) {
  const totals = new Map();
  for (const entry of entries) {
    const signedAmount = entry.type === "income" ? entry.amount : -entry.amount;
    const tags = normalizeTags(entry.tags);
    if (tags.length === 0) {
      addBreakdownTotal(totals, "タグ未設定", signedAmount);
      continue;
    }
    for (const tag of tags) {
      addBreakdownTotal(totals, tag, signedAmount);
    }
  }
  return [...totals.entries()]
    .map(([label, value]) => ({ label, amount: value.amount, count: value.count }))
    .sort(compareBreakdownRows);
}

function aggregateByItem(entries) {
  const totals = new Map();
  for (const entry of entries) {
    const label = entry.item || "未設定項目";
    const signedAmount = entry.type === "income" ? entry.amount : -entry.amount;
    addBreakdownTotal(totals, label, signedAmount, entryQuantity(entry));
  }
  return [...totals.entries()]
    .map(([label, value]) => ({ label, amount: value.amount, count: value.count }))
    .sort(compareBreakdownRows);
}

function addBreakdownTotal(totals, label, amount, count = 1) {
  const current = totals.get(label) || { amount: 0, count: 0 };
  current.amount += amount;
  current.count += count;
  totals.set(label, current);
}

function entryQuantity(entry) {
  const quantity = Number(entry?.quantity);
  return Number.isFinite(quantity) && quantity > 0 ? quantity : 1;
}

function updateBreakdownSort(key) {
  if (!key) return;
  if (state.breakdownSort.key === key) {
    state.breakdownSort.direction = state.breakdownSort.direction === "asc" ? "desc" : "asc";
  } else {
    state.breakdownSort = { key, direction: key === "label" ? "asc" : "desc" };
  }
  renderSummaryDetail();
}

function breakdownSortHeader(key, label) {
  const active = state.breakdownSort.key === key;
  const mark = active ? (state.breakdownSort.direction === "asc" ? " ▲" : " ▼") : "";
  return `<button class="breakdown-sort-button ${active ? "active" : ""}" type="button" data-sort="${key}">${escapeHTML(label)}${mark}</button>`;
}

function compareBreakdownRows(a, b) {
  const direction = state.breakdownSort.direction === "asc" ? 1 : -1;
  const aValue = breakdownSortValue(a, state.breakdownSort.key);
  const bValue = breakdownSortValue(b, state.breakdownSort.key);
  let result = 0;

  if (typeof aValue === "number" && typeof bValue === "number") {
    result = aValue - bValue;
  } else {
    result = String(aValue).localeCompare(String(bValue), "ja", { numeric: true, sensitivity: "base" });
  }

  if (result === 0) {
    result = b.amount - a.amount || b.count - a.count || a.label.localeCompare(b.label, "ja", { numeric: true, sensitivity: "base" });
  }
  return result * direction;
}

function breakdownSortValue(row, key) {
  switch (key) {
    case "label":
      return row.label || "";
    case "count":
      return row.count;
    case "amount":
      return row.amount;
    default:
      return row.amount;
  }
}

function createBreakdownPanel(title, rows, emptyText, countLabel = "件数") {
  const panel = document.createElement("section");
  panel.className = "breakdown-panel";

  const heading = document.createElement("h3");
  heading.textContent = title;
  panel.append(heading);

  if (rows.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state compact-empty";
    empty.textContent = emptyText;
    panel.append(empty);
    return panel;
  }

  const max = Math.max(...rows.map((row) => Math.abs(row.amount)), 1);
  const header = document.createElement("div");
  header.className = "breakdown-row breakdown-row-head";
  header.innerHTML = `
    ${breakdownSortHeader("label", title)}
    ${breakdownSortHeader("count", countLabel)}
    ${breakdownSortHeader("amount", "収支")}
    <span>収支バー</span>
  `;
  panel.append(header);

  for (const row of rows) {
    const item = document.createElement("div");
    item.className = "breakdown-row";
    item.innerHTML = `
      <span>${escapeHTML(row.label)}</span>
      <span class="breakdown-count">${formatQuantity(row.count)}</span>
      <strong class="${row.amount < 0 ? "expense-text" : "income-text"}">${formatSignedYen(row.amount)}</strong>
      <div class="breakdown-track net-breakdown-track">
        <div class="breakdown-zero-line"></div>
        <div class="breakdown-fill ${row.amount < 0 ? "negative" : ""}" style="width: ${(Math.abs(row.amount) / max) * 50}%; ${row.amount < 0 ? "right: 50%;" : "left: 50%;"}"></div>
      </div>
    `;
    panel.append(item);
  }

  return panel;
}

function renderSimpleList(target, values, emptyText) {
  target.replaceChildren();
  if (values.length === 0) {
    target.textContent = emptyText;
    return;
  }

  for (const value of values) {
    const row = document.createElement("div");
    row.className = "management-row";
    row.innerHTML = `<strong>${escapeHTML(value)}</strong>`;
    target.append(row);
  }
}

function filterEntries(entries) {
  return entries.filter((entry) => {
    const mapName = entry.map || entry.category || "";
    const matchesType = state.typeFilter === "all" || entry.type === state.typeFilter;
    const tags = normalizeTags(entry.tags).join(" ");
    const text = `${tags} ${mapName} ${entry.item || ""} ${entry.amount} ${entry.quantity || ""} ${entry.unitPrice || ""}`.toLowerCase();
    return matchesType && text.includes(state.search);
  });
}

function updateEntryMapOptions(selectedMap = "") {
  elements.entryMap.replaceChildren();
  const empty = document.createElement("option");
  empty.value = "";
  empty.textContent = "グループなし";
  elements.entryMap.append(empty);

  for (const map of state.maps) {
    const option = document.createElement("option");
    option.value = map;
    option.textContent = map;
    elements.entryMap.append(option);
  }

  elements.entryMap.value = "";
  elements.entryMap.dataset.previousValue = elements.entryMap.value;
}

function updateEntryItemOptions(selectedItem = "") {
  const linkedItems = elements.entryMap.value
    ? [...(state.links[elements.entryMap.value] || [])]
    : state.items.map((item) => item.name);
  if (!elements.entryMap.value && selectedItem && !linkedItems.includes(selectedItem)) linkedItems.push(selectedItem);
  setSelectOptionsWithBlank(elements.entryItemSelect, linkedItems, "アイテム/項目を選択");
  setSelectOptionsWithBlank(elements.expenseNameSelect, linkedItems, "アイテム/項目を選択");
  if (selectedItem && linkedItems.includes(selectedItem)) {
    elements.entryItemSelect.value = selectedItem;
    elements.expenseNameSelect.value = selectedItem;
  }
}

function updateLinkOptions(selectedMap = "") {
  setSelectOptions(elements.linkMap, state.maps, "グループ未登録");
  setSelectOptions(
    elements.linkItem,
    state.items.map((item) => item.name),
    "アイテム未登録",
  );
  if (selectedMap && state.maps.includes(selectedMap)) elements.linkMap.value = selectedMap;
}

function setSelectOptions(select, values, emptyText) {
  select.replaceChildren();
  if (values.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = emptyText;
    option.disabled = true;
    option.selected = true;
    select.append(option);
    return;
  }

  for (const value of values) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  }
}

function setSelectOptionsWithBlank(select, values, emptyText) {
  select.replaceChildren();
  const empty = document.createElement("option");
  empty.value = "";
  empty.textContent = emptyText;
  empty.disabled = true;
  empty.selected = true;
  select.append(empty);

  for (const value of [...new Set(values.filter(Boolean))]) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  }
}

function setDatalistOptions(datalist, values) {
  datalist.replaceChildren(
    ...[...new Set(values.filter(Boolean))].map((value) => {
      const option = document.createElement("option");
      option.value = value;
      return option;
    }),
  );
}

function parseTags(value) {
  return normalizeTags(String(value || "").split(/[\s,、]+/));
}

function normalizeTagPrefix(tag) {
  return String(tag || "").trim().replace(/^＃/, "#");
}

function normalizeTags(tags) {
  const source = Array.isArray(tags) ? tags : String(tags || "").split(/[\s,、]+/);
  return [
    ...new Set(
      source
        .map((tag) => normalizeTagPrefix(tag))
        .filter(Boolean)
        .filter((tag) => tag.startsWith("#"))
        .filter((tag) => tag.length > 1),
    ),
  ];
}

function formatTags(tags) {
  return normalizeTags(tags).join(" ");
}

function registeredTags() {
  return [
    ...new Set([
      ...state.entries.flatMap((entry) => normalizeTags(entry.tags)),
      ...state.plannedPurchases.flatMap((planned) => normalizeTags(planned.tags)),
      ...state.memos.flatMap((memo) => normalizeTags(memo.tags || (memo.tag ? [memo.tag] : []))),
    ]),
  ].sort((a, b) => a.localeCompare(b, "ja"));
}

function recentTags(limit = 4) {
  const rows = [
    ...state.entries.map((entry) => ({ tags: normalizeTags(entry.tags), time: entryDateTime(entry).getTime() || entryOrderValue(entry) })),
    ...state.plannedPurchases.map((planned) => ({ tags: normalizeTags(planned.tags), time: planned.createdAt || 0 })),
  ].sort((a, b) => b.time - a.time);
  const tags = [];
  for (const row of rows) {
    for (const tag of row.tags) {
      if (tags.includes(tag)) continue;
      tags.push(tag);
      if (tags.length >= limit) return tags;
    }
  }
  return tags;
}

function updateTagOptions() {
  renderTagChips(elements.tags, elements.tagChipList);
  renderTagChips(elements.editTags, elements.editTagChipList);
  renderTagChips(elements.searchTags, elements.searchTagChipList);
  renderTagChips(elements.plannedTags, elements.plannedTagChipList);
  renderTagChips(elements.plannedEditTags, elements.plannedEditTagChipList);
  renderFrequentTags();
  renderEditFrequentTags();
  renderPlannedEditFrequentTags();
}

function renderFrequentTags() {
  renderFrequentTagList(elements.frequentTagList, getTagValues(elements.tags), currentType() === "settlement" ? 8 : 4);
}

function renderEditFrequentTags() {
  renderFrequentTagList(elements.editFrequentTagList, getTagValues(elements.editTags), 6);
}

function renderPlannedEditFrequentTags() {
  renderFrequentTagList(elements.plannedEditFrequentTagList, getTagValues(elements.plannedEditTags), 6);
}

function renderFrequentTagList(target, selectedTags, limit = 4) {
  const selected = new Set(selectedTags);
  const tags = recentTags(limit).filter((tag) => !selected.has(tag));
  target.replaceChildren(
    ...tags.map((tag) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "frequent-tag-button";
      button.dataset.tag = tag;
      button.textContent = tag;
      return button;
    }),
  );
  target.classList.toggle("hidden", tags.length === 0);
}

function setupTagInput(input, wrapper, chipList, target, onChange = null) {
  input.dataset.tags = "[]";
  wrapper.addEventListener("click", () => input.focus());
  input.addEventListener("input", () => {
    commitCompleteTagTokens(input, chipList);
    renderTagSuggestions(input, target, chipList);
    if (onChange) onChange();
  });
  input.addEventListener("tagchange", () => {
    if (onChange) onChange();
  });
  input.addEventListener("keydown", (event) => {
    if (["Enter", ",", "、"].includes(event.key)) {
      event.preventDefault();
      commitTagInput(input, chipList);
      target.classList.add("hidden");
      if (onChange) onChange();
    }
    if (event.key === "Backspace" && !input.value) {
      const tags = getTagValues(input);
      tags.pop();
      setTagValues(input, chipList, tags);
      if (onChange) onChange();
    }
  });
  input.addEventListener("focus", () => renderTagSuggestions(input, target, chipList));
  input.addEventListener("blur", () => {
    commitTagInput(input, chipList);
    if (onChange) onChange();
    window.setTimeout(() => target.classList.add("hidden"), 120);
  });
}

function renderTagSuggestions(input, target, chipList) {
  const token = currentTagToken(input.value).toLowerCase();
  const existingTags = new Set(getTagValues(input));
  const candidates = token.length > 1
    ? registeredTags()
        .filter((tag) => tag.toLowerCase().startsWith(token))
        .filter((tag) => !existingTags.has(tag))
        .slice(0, 8)
    : [];

  target.replaceChildren();
  if (candidates.length === 0) {
    target.classList.add("hidden");
    return;
  }

  for (const tag of candidates) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = tag;
    button.addEventListener("mousedown", (event) => {
      event.preventDefault();
      addTagValue(input, chipList, tag);
      input.value = "";
      input.focus();
      target.classList.add("hidden");
      const tagChangeEvent = new CustomEvent("tagchange", { bubbles: true });
      input.dispatchEvent(tagChangeEvent);
    });
    target.append(button);
  }
  target.classList.remove("hidden");
}

function currentTagToken(value) {
  const match = String(value || "").match(/[＃#]\S*$/);
  return match ? normalizeTagPrefix(match[0]) : "";
}

function commitCompleteTagTokens(input, chipList) {
  if (!/[\s,、]$/.test(input.value)) return;
  commitTagInput(input, chipList);
}

function commitTagInput(input, chipList) {
  const tags = parseTags(input.value);
  if (tags.length === 0) return;
  setTagValues(input, chipList, [...getTagValues(input), ...tags]);
  input.value = "";
}

function addTagValue(input, chipList, tag) {
  setTagValues(input, chipList, [...getTagValues(input), tag]);
}

function getTagValues(input) {
  try {
    return normalizeTags(JSON.parse(input.dataset.tags || "[]"));
  } catch {
    return [];
  }
}

function setTagValues(input, chipList, tags) {
  input.dataset.tags = JSON.stringify(normalizeTags(tags));
  input.value = "";
  renderTagChips(input, chipList);
  if (input === elements.tags) renderFrequentTags();
  if (input === elements.editTags) renderEditFrequentTags();
  if (input === elements.plannedEditTags) renderPlannedEditFrequentTags();
}

function renderTagChips(input, chipList) {
  const tags = getTagValues(input);
  if (input === elements.memoTag) {
    input.placeholder = tags.length > 0 ? "" : "#タグ";
  }
  if (input === elements.memoSearchTag) {
    input.placeholder = tags.length > 0 ? "" : "#タグ検索";
  }
  if (input === elements.memoEditTag) {
    input.placeholder = tags.length > 0 ? "" : "#タグ";
  }
  chipList.replaceChildren(
    ...tags.map((tag) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "tag-chip";
      chip.innerHTML = `<span>${escapeHTML(tag)}</span><span class="tag-chip-remove" aria-hidden="true">×</span>`;
      chip.setAttribute("aria-label", `${tag}を削除`);
      chip.addEventListener("click", () => {
        setTagValues(
          input,
          chipList,
          getTagValues(input).filter((candidate) => candidate !== tag),
        );
        input.dispatchEvent(new CustomEvent("tagchange", { bubbles: true }));
      });
      return chip;
    }),
  );
}

function fillAmountFromSelectedItem() {
  fillUnitPriceFromSelectedItem();
  updateAmount();
}

function fillUnitPriceFromSelectedItem() {
  const item = findItem(currentEntryItemName());
  if (item) elements.unitPrice.value = formatAmount(item.amount);
}

function itemHistoryNames() {
  return [
    ...new Set(
      [
        ...state.items.map((item) => item.name),
        ...state.entries.map((entry) => entry.item),
        ...state.plannedPurchases.map((planned) => planned.item),
      ]
        .map((name) => String(name || "").trim())
        .filter(Boolean),
    ),
  ].sort((a, b) => a.localeCompare(b, "ja"));
}

function setupItemHistoryInputs() {
  document.querySelectorAll('input[list="itemHistoryOptions"]').forEach((input) => {
    input.dataset.itemHistoryInput = "true";
    updateItemHistoryInputList(input);
  });
}

function isItemHistoryInput(target) {
  return target?.dataset?.itemHistoryInput === "true" || target?.getAttribute?.("list") === "itemHistoryOptions";
}

function updateItemHistoryInputList(input) {
  input.dataset.itemHistoryInput = "true";
  const query = String(input.value || "").trim();
  if (!query) {
    input.removeAttribute("list");
    updateItemHistoryOptions("");
    return;
  }
  input.setAttribute("list", "itemHistoryOptions");
  updateItemHistoryOptions(query);
}

function updateItemHistoryOptions(query = "") {
  const keyword = String(query || "").trim().toLowerCase();
  if (!keyword) {
    elements.itemHistoryOptions.replaceChildren();
    return;
  }
  elements.itemHistoryOptions.replaceChildren(
    ...itemHistoryNames().filter((name) => {
      const normalizedName = name.toLowerCase();
      return normalizedName.includes(keyword) && normalizedName !== keyword;
    }).map((name) => {
      const option = document.createElement("option");
      option.value = name;
      return option;
    }),
  );
}

function currentEntryItemName() {
  if (elements.entryGroupDetails.open) {
    return currentType() === "income" ? elements.entryItemSelect.value : elements.expenseNameSelect.value;
  }
  return currentType() === "income" ? elements.entryItem.value.trim() : elements.expenseName.value.trim();
}

function anyEntryItemName() {
  if (currentType() === "income") {
    return elements.entryGroupDetails.open
      ? elements.entryItemSelect.value || elements.entryItem.value.trim()
      : elements.entryItem.value.trim() || elements.entryItemSelect.value;
  }
  return elements.entryGroupDetails.open
    ? elements.expenseNameSelect.value || elements.expenseName.value.trim()
    : elements.expenseName.value.trim() || elements.expenseNameSelect.value;
}

function anyEditItemName() {
  if (editType() === "income") {
    return elements.editGroupDetails.open
      ? elements.editItemSelect.value || elements.editItem.value.trim()
      : elements.editItem.value.trim() || elements.editItemSelect.value;
  }
  return elements.editGroupDetails.open
    ? elements.editExpenseNameSelect.value || elements.editExpenseName.value.trim()
    : elements.editExpenseName.value.trim() || elements.editExpenseNameSelect.value;
}

function directEntryItemName() {
  return currentType() === "income" ? elements.entryItem.value.trim() : elements.expenseName.value.trim();
}

function directEditItemName() {
  return editType() === "income" ? elements.editItem.value.trim() : elements.editExpenseName.value.trim();
}

function reconcileEntryGroupOnOpen() {
  return reconcileGroupOnOpen(elements.entryMap, directEntryItemName());
}

function reconcileEditGroupOnOpen() {
  return reconcileGroupOnOpen(elements.editMap, directEditItemName());
}

function reconcileGroupOnOpen(mapSelect, directItemName) {
  const map = mapSelect.value;
  if (!map || !directItemName) return directItemName || "";
  if ((state.links[map] || []).includes(directItemName)) return directItemName;
  mapSelect.value = "";
  mapSelect.dataset.previousValue = "";
  return directItemName;
}

function syncEntryDirectItemName(itemName) {
  if (!itemName) return;
  if (currentType() === "income") {
    elements.entryItem.value = itemName;
    return;
  }
  elements.expenseName.value = itemName;
}

function syncEditDirectItemName(itemName) {
  if (!itemName) return;
  if (editType() === "income") {
    elements.editItem.value = itemName;
    return;
  }
  elements.editExpenseName.value = itemName;
}

function resolvedEntryMap(itemName) {
  return resolvedMapForItem(elements.entryMap, elements.entryGroupDetails.open, itemName);
}

function resolvedEditMap(itemName) {
  return resolvedMapForItem(elements.editMap, elements.editGroupDetails.open, itemName);
}

function resolvedMapForItem(mapSelect, isGroupOpen, itemName) {
  const map = mapSelect.value;
  if (!map) return "";
  if (isGroupOpen) return map;
  return (state.links[map] || []).includes(itemName) ? map : "";
}

function confirmClearItemOutsideGroup(mapSelect, itemName, clearItemFields) {
  const map = mapSelect.value;
  const linkedItems = map ? state.links[map] || [] : [];
  if (!map || !itemName || linkedItems.includes(itemName)) {
    mapSelect.dataset.previousValue = map;
    return true;
  }

  const confirmed = window.confirm(`入力されているアイテム/項目「${itemName}」は、選択したグループ「${map}」の構成に存在しないためクリアされます。\nよろしいですか？`);
  if (!confirmed) {
    mapSelect.value = mapSelect.dataset.previousValue || "";
    return false;
  }

  clearItemFields();
  mapSelect.dataset.previousValue = map;
  return true;
}

function clearEntryItemFields() {
  elements.entryItem.value = "";
  elements.entryItemSelect.value = "";
  elements.expenseName.value = "";
  elements.expenseNameSelect.value = "";
}

function clearEditItemFields() {
  elements.editItem.value = "";
  elements.editItemSelect.value = "";
  elements.editExpenseName.value = "";
  elements.editExpenseNameSelect.value = "";
}

function addSettlementEntryRow(target = elements.settlementRows, row = {}) {
  const isPurchase = target === elements.purchaseRows;
  const element = document.createElement("div");
  element.className = `settlement-entry-row${isPurchase ? " purchase-entry-row" : ""}`;
  element.innerHTML = isPurchase
    ? `
      <input class="settlement-row-item" type="text" inputmode="text" maxlength="32" placeholder="アイテム/項目" />
      <input class="settlement-row-buyer" type="text" inputmode="text" maxlength="24" placeholder="買取者" />
      <input class="settlement-row-buy-price" type="text" inputmode="text" placeholder="例: 1K / 100M" />
      <input class="settlement-row-quantity" type="text" inputmode="text" value="1" />
      <input class="settlement-row-amount" type="text" inputmode="text" readonly tabindex="-1" />
      <button class="delete-button" type="button" aria-label="削除">×</button>
    `
    : `
      <input class="settlement-row-item" type="text" inputmode="text" maxlength="32" placeholder="アイテム/項目" />
      <button class="calc-mini-button settlement-row-calc-button" type="button" tabindex="-1">&#35336;&#31639;&#12450;&#12471;&#12473;&#12488;</button>
      <input class="settlement-row-price" type="text" inputmode="text" placeholder="例: 1K / 100M" />
      <input class="settlement-row-quantity" type="text" inputmode="text" value="1" />
      <input class="settlement-row-amount" type="text" inputmode="text" readonly tabindex="-1" />
      <button class="delete-button" type="button" aria-label="削除">×</button>
    `;
  const itemInput = element.querySelector(".settlement-row-item");
  itemInput.value = row.item || "";
  itemInput.dataset.itemHistoryInput = "true";
  updateItemHistoryInputList(itemInput);
  const buyerInput = element.querySelector(".settlement-row-buyer");
  if (buyerInput) buyerInput.value = row.buyer || "";
  const priceInput = element.querySelector(".settlement-row-price");
  if (priceInput) priceInput.value = row.unitPrice ? formatAmount(row.unitPrice) : "";
  if (isPurchase) element.querySelector(".settlement-row-buy-price").value = row.buyPrice ? formatAmount(row.buyPrice) : "";
  element.querySelector(".settlement-row-quantity").value = row.quantity || 1;
  target.append(element);
  updateSettlementRowAmount(element);
}

function clearSettlementEntryRow(row) {
  if (!row) return;
  row.querySelector(".settlement-row-item").value = "";
  const buyerInput = row.querySelector(".settlement-row-buyer");
  if (buyerInput) buyerInput.value = "";
  const priceInput = row.querySelector(".settlement-row-price");
  if (priceInput) priceInput.value = "";
  const buyPriceInput = row.querySelector(".settlement-row-buy-price");
  if (buyPriceInput) buyPriceInput.value = "";
  row.querySelector(".settlement-row-quantity").value = "1";
  row.querySelector(".settlement-row-amount").value = "";
  updateSettlementTotal();
}

function updateSettlementRowAmount(row) {
  if (!row) return;
  const isPurchase = row.classList.contains("purchase-entry-row");
  const unitPrice = isPurchase ? 0 : parseAmount(row.querySelector(".settlement-row-price").value);
  const buyPrice = isPurchase ? parseAmount(row.querySelector(".settlement-row-buy-price").value) : 0;
  const quantity = parseQuantityInput(row.querySelector(".settlement-row-quantity").value);
  const amount = isPurchase ? Math.round(buyPrice * quantity) : Math.round(unitPrice * quantity);
  row.querySelector(".settlement-row-amount").value = (isPurchase ? buyPrice > 0 : unitPrice > 0) && quantity > 0 ? formatAmount(amount) : "";
  updateSettlementTotal();
}

function fillSettlementRowPriceFromItem(row) {
  if (!row || row.classList.contains("purchase-entry-row")) return;
  const item = findItem(row.querySelector(".settlement-row-item").value.trim());
  const priceInput = row.querySelector(".settlement-row-price");
  if (item && priceInput && !parseAmount(priceInput.value)) {
    priceInput.value = formatAmount(item.amount);
  }
}

function settlementRowsTotal(target) {
  return [...target.querySelectorAll(".settlement-row-amount")]
    .reduce((sum, input) => sum + parseAmount(input.value), 0);
}

function purchaseBuyTotal() {
  return [...elements.purchaseRows.querySelectorAll(".purchase-entry-row")]
    .reduce((sum, row) => {
      const buyPrice = parseAmount(row.querySelector(".settlement-row-buy-price").value);
      const quantity = parseQuantityInput(row.querySelector(".settlement-row-quantity").value);
      return sum + Math.round(buyPrice * quantity);
    }, 0);
}

function settlementPeopleCount() {
  return Math.max(1, Math.floor(parseQuantityInput(elements.settlementPeopleCount.value) || 1));
}

function stepSettlementPeople(delta) {
  const next = Math.max(1, Math.min(99, settlementPeopleCount() + delta));
  elements.settlementPeopleCount.value = String(next);
  updateSettlementTotal();
}

function currentDistributionPerPerson() {
  const settlementTotal = settlementRowsTotal(elements.settlementRows);
  const purchaseCostTotal = purchaseBuyTotal();
  return Math.round((settlementTotal + purchaseCostTotal) / settlementPeopleCount());
}

function updateSettlementTotal() {
  const settlementTotal = settlementRowsTotal(elements.settlementRows);
  const purchaseProfitTotal = settlementRowsTotal(elements.purchaseRows);
  const purchaseCostTotal = purchaseBuyTotal();
  const distributionTotal = settlementTotal + purchaseCostTotal;
  const distributionPerPerson = currentDistributionPerPerson();
  elements.settlementTotal.textContent = yen.format(settlementTotal);
  elements.purchaseTotal.textContent = yen.format(purchaseProfitTotal);
  setSignedAmountClass(elements.settlementTotal, settlementTotal);
  setSignedAmountClass(elements.purchaseTotal, purchaseProfitTotal);
  renderBuyerDistributionList(distributionPerPerson);
}

function renderBuyerDistributionList(distributionPerPerson) {
  const buyerTotals = new Map();
  for (const row of settlementEntryRows(elements.purchaseRows)) {
    const buyer = row.buyer || "未指定";
    buyerTotals.set(buyer, (buyerTotals.get(buyer) || 0) + row.amount);
  }
  const rows = [["通常", distributionPerPerson], ...[...buyerTotals.entries()].map(([buyer, total]) => [buyer, distributionPerPerson - total])];
  const visibleTargets = new Set(rows.map(([name]) => name));
  state.settlementDistributionTargets = new Set([...state.settlementDistributionTargets].filter((name) => visibleTargets.has(name)));
  if (!state.settlementDistributionTargets.size) state.settlementDistributionTargets.add("通常");
  elements.buyerDistributionList.replaceChildren();
  if (!rows.length) return;

  const header = document.createElement("div");
  header.className = "buyer-distribution-table-head";
  header.innerHTML = "<span>対象</span><span>配布金額</span>";
  elements.buyerDistributionList.append(header);

  for (const [name, amount] of rows) {
    const item = document.createElement("div");
    item.className = "buyer-distribution-row";
    item.innerHTML = `
      <label class="distribution-target-field">
        <input class="distribution-target-check" type="checkbox" value="${escapeHTML(name)}" ${state.settlementDistributionTargets.has(name) ? "checked" : ""} />
        <span>${escapeHTML(name)}</span>
      </label>
      <strong>${formatSignedYen(amount)}</strong>
    `;
    setSignedAmountClass(item.querySelector("strong"), amount);
    elements.buyerDistributionList.append(item);
  }
}

function setSignedAmountClass(element, amount) {
  element.classList.toggle("expense-text", amount < 0);
  element.classList.toggle("income-text", amount >= 0);
}

function openHelpModal() {
  elements.helpModal.classList.remove("hidden");
  elements.closeHelp?.focus();
}

function closeHelpModal() {
  elements.helpModal.classList.add("hidden");
}

function settlementEntryRows(target = elements.settlementRows) {
  const isPurchaseTarget = target === elements.purchaseRows;
  return [...target.querySelectorAll(".settlement-entry-row")]
    .map((row) => {
      const item = row.querySelector(".settlement-row-item").value.trim();
      const isPurchase = row.classList.contains("purchase-entry-row");
      const buyer = isPurchase ? row.querySelector(".settlement-row-buyer").value.trim() : "";
      const unitPrice = isPurchase ? parseAmount(row.querySelector(".settlement-row-buy-price").value) : parseAmount(row.querySelector(".settlement-row-price").value);
      const buyPrice = isPurchase ? unitPrice : 0;
      const quantity = parseQuantityInput(row.querySelector(".settlement-row-quantity").value);
      const amount = Math.round(unitPrice * quantity);
      return { item, buyer, unitPrice, buyPrice, quantity, amount, isPurchase: isPurchaseTarget };
    })
    .filter((row) => row.item || row.unitPrice || row.amount);
}

function settlementRowsForSelectedTarget() {
  const people = settlementPeopleCount();
  return settlementEntryRows(elements.settlementRows).map((row) => {
    const quantity = row.quantity / people;
    const amount = Math.round(row.unitPrice * quantity);
    return {
      ...row,
      quantity,
      amount,
    };
  });
}

function saveSettlementEntries() {
  if (!validateNotFutureDate(elements.date.value)) return;
  if (!confirmDistantYear(elements.date.value)) return;
  commitTagInput(elements.tags, elements.tagChipList);
  const rows = settlementRowsForPreview();
  if (!rows.length) return;
  if (rows.some((row) => !row.item || !validateEntryNumbers(row.unitPrice, row.quantity, row.amount))) return;
  openSettlementConfirmModal(rows);
}

function settlementRowsForPreview() {
  return [...settlementRowsForSelectedTarget(), ...purchaseRowsForSelectedTarget()];
}

function purchaseRowsForSelectedTarget() {
  const people = settlementPeopleCount();
  const selectedTargets = new Set(state.settlementDistributionTargets);
  return settlementEntryRows(elements.purchaseRows).flatMap((row) => {
    const buyerName = row.buyer || "未指定";
    const isSelectedBuyer = selectedTargets.has(buyerName);
    const sharedQuantity = row.quantity / people;
    if (isSelectedBuyer) {
      const expenseQuantity = row.quantity - sharedQuantity;
      const amount = Math.round(row.unitPrice * expenseQuantity);
      return amount > 0
        ? [{
            ...row,
            type: "expense",
            quantity: expenseQuantity,
            amount,
            isPurchase: true,
          }]
        : [];
    }
    const amount = Math.round(row.unitPrice * sharedQuantity);
    return [{
      ...row,
      type: "income",
      quantity: sharedQuantity,
      amount,
      isPurchase: false,
    }];
  });
}

function openSettlementConfirmModal(rows) {
  const createdAt = Date.now();
  state.pendingSettlementEntries = rows.map((row, index) => ({
    id: crypto.randomUUID(),
    createdAt: createdAt + index,
    type: row.type || (row.isPurchase ? "expense" : "income"),
    date: elements.date.value,
    time: currentEntryTime(),
    amount: row.amount,
    map: "",
    item: row.item,
    quantity: row.quantity,
    unitPrice: row.unitPrice,
    buyer: row.buyer,
    tags: getTagValues(elements.tags),
  }));
  renderSettlementConfirmList();
  elements.settlementConfirmModal.classList.remove("hidden");
}

function renderSettlementConfirmList() {
  elements.settlementConfirmList.innerHTML = `
    <div class="settlement-confirm-head">
      <span>区分</span>
      <span>アイテム/項目</span>
      <span>数量</span>
      <span>単価</span>
      <span>金額</span>
    </div>
  `;
  for (const entry of state.pendingSettlementEntries) {
    const row = document.createElement("div");
    row.className = "settlement-confirm-row";
    row.innerHTML = `
      <span class="settlement-confirm-type ${entry.type === "income" ? "income-text" : "expense-text"}">${entry.type === "income" ? "収入" : "支出"}</span>
      <strong>${escapeHTML(entry.item)}</strong>
      <span>${formatQuantity(entry.quantity)}</span>
      <span>${yen.format(entry.unitPrice)}</span>
      <span class="${entry.type === "income" ? "income-text" : "expense-text"}">${entry.type === "income" ? "+" : "-"}${yen.format(entry.amount)}</span>
    `;
    elements.settlementConfirmList.append(row);
  }
}

function closeSettlementConfirmModal() {
  state.pendingSettlementEntries = [];
  elements.settlementConfirmModal.classList.add("hidden");
}

function commitPendingSettlementEntries() {
  const entries = state.pendingSettlementEntries;
  if (!entries.length) return;
  const createdAt = Date.now();
  entries.forEach((entry, index) => {
    entry.createdAt = createdAt + index;
  });

  state.entries.push(...entries);
  saveEntries();
  closeSettlementConfirmModal();
  elements.settlementRows.replaceChildren();
  elements.purchaseRows.replaceChildren();
  addSettlementEntryRow(elements.settlementRows);
  addSettlementEntryRow(elements.purchaseRows);
  state.settlementDistributionTargets = new Set(["通常"]);
  updateSettlementTotal();
  setTagValues(elements.tags, elements.tagChipList, []);
  elements.date.value = entries[0].date;
  elements.time.value = currentTime();
  state.periodStart = rangeKey(getRangeStart(entryDateTime(entries[0])));
  state.selectedSummaryKey = state.periodStart;
  updatePeriodLabel();
  render();
}

function openCalculationModal(scope, target, sourceRow = null) {
  const isEdit = scope === "edit";
  const isSettlementRow = scope === "settlementRow";
  const unitPriceInput = isSettlementRow
    ? sourceRow?.querySelector(".settlement-row-price")
    : isEdit
    ? editType() === "income"
      ? elements.editIncomeUnitPrice
      : elements.editExpenseUnitPrice
    : elements.unitPrice;
  const quantityInput = isSettlementRow ? sourceRow?.querySelector(".settlement-row-quantity") : isEdit ? elements.editQuantity : elements.quantity;
  const amountInput = isSettlementRow ? sourceRow?.querySelector(".settlement-row-amount") : isEdit ? elements.editAmount : elements.amount;

  state.calcContext = { scope, row: sourceRow };
  elements.calcTitle.textContent = "計算アシスト";
  elements.calcModeUnitPrice.checked = target === "unitPrice";
  elements.calcModeQuantity.checked = target === "quantity";
  elements.calcPriceAmount.value = amountInput.value;
  elements.calcPriceQuantity.value = quantityInput.value;
  elements.calcPriceResult.value = "";
  elements.calcQuantityAmount.value = amountInput.value;
  elements.calcQuantityPrice.value = unitPriceInput.value;
  elements.calcQuantityResult.value = "";
  elements.calcModal.classList.remove("hidden");
  updateCalculationModeState();
  updateCalculationResult();
  (target === "unitPrice" ? elements.calcPriceAmount : elements.calcQuantityAmount).focus();
}

function closeCalculationModal() {
  state.calcContext = null;
  elements.calcModal.classList.add("hidden");
}

function updateCalculationResult() {
  if (!state.calcContext) return;
  const priceAmount = parseAmount(elements.calcPriceAmount.value);
  const priceQuantity = parseQuantityInput(elements.calcPriceQuantity.value);
  elements.calcPriceResult.value = priceAmount > 0 && priceQuantity > 0 ? formatAmount(Math.round(priceAmount / priceQuantity)) : "";

  const quantityAmount = parseAmount(elements.calcQuantityAmount.value);
  const quantityPrice = parseAmount(elements.calcQuantityPrice.value);
  elements.calcQuantityResult.value = quantityAmount > 0 && quantityPrice > 0 ? formatQuantity(quantityAmount / quantityPrice) : "";
}

function updateCalculationModeState() {
  const target = currentCalculationTarget();
  elements.calcPriceAmount.disabled = target !== "unitPrice";
  elements.calcPriceQuantity.disabled = target !== "unitPrice";
  elements.calcPriceResult.disabled = target !== "unitPrice";
  elements.calcQuantityAmount.disabled = target !== "quantity";
  elements.calcQuantityPrice.disabled = target !== "quantity";
  elements.calcQuantityResult.disabled = target !== "quantity";
}

function currentCalculationTarget() {
  return elements.calcModeQuantity.checked ? "quantity" : "unitPrice";
}

function parseQuantityInput(value) {
  return Number(normalizeNumericText(value).replace(/[^0-9.]/g, "")) || 0;
}

function formatQuantityInput(input) {
  const value = normalizeNumericText(input.value).replace(/[^0-9.]/g, "");
  const [integer, ...decimals] = value.split(".");
  input.value = decimals.length ? `${integer}.${decimals.join("")}` : integer;
}

function applyCalculationResult() {
  if (!state.calcContext) return;
  const target = currentCalculationTarget();
  const result = target === "unitPrice" ? elements.calcPriceResult.value : elements.calcQuantityResult.value;
  if (!result) return;

  if (state.calcContext.scope === "entry") {
    if (target === "unitPrice") {
      elements.unitPrice.value = result;
      elements.quantity.value = elements.calcPriceQuantity.value;
      elements.amount.value = elements.calcPriceAmount.value;
    } else {
      elements.unitPrice.value = elements.calcQuantityPrice.value;
      elements.quantity.value = result;
      elements.amount.value = elements.calcQuantityAmount.value;
    }
    updateAmount();
  } else if (state.calcContext.scope === "settlementRow") {
    const row = state.calcContext.row;
    if (!row) return;
    const priceInput = row.querySelector(".settlement-row-price");
    const quantityInput = row.querySelector(".settlement-row-quantity");
    const amountInput = row.querySelector(".settlement-row-amount");
    if (target === "unitPrice") {
      priceInput.value = result;
      quantityInput.value = elements.calcPriceQuantity.value;
      amountInput.value = elements.calcPriceAmount.value;
    } else {
      priceInput.value = elements.calcQuantityPrice.value;
      quantityInput.value = result;
      amountInput.value = elements.calcQuantityAmount.value;
    }
    updateSettlementRowAmount(row);
  } else {
    const unitPriceInput = editType() === "income" ? elements.editIncomeUnitPrice : elements.editExpenseUnitPrice;
    if (target === "unitPrice") {
      unitPriceInput.value = result;
      elements.editQuantity.value = elements.calcPriceQuantity.value;
      elements.editAmount.value = elements.calcPriceAmount.value;
    } else {
      unitPriceInput.value = elements.calcQuantityPrice.value;
      elements.editQuantity.value = result;
      elements.editAmount.value = elements.calcQuantityAmount.value;
    }
    updateEditAmount();
  }

  closeCalculationModal();
}

function openSettlementModal(scope) {
  const isEdit = scope === "edit";
  if ((isEdit ? editType() : currentType()) !== "income") return;

  const quantity = isEdit ? parseQuantityInput(elements.editQuantity.value) : parseQuantityInput(elements.quantity.value);
  const unitPrice = isEdit ? editUnitPrice() : currentUnitPrice();
  if (quantity <= 0) {
    window.alert("数量は必須入力です。");
    return;
  }

  state.settlementContext = { scope, quantity, unitPrice };
  elements.settlementPeople.value = "";
  elements.settlementUnitPrice.value = unitPrice > 0 ? formatAmount(unitPrice) : "";
  elements.settlementQuantity.value = "";
  elements.settlementAmount.value = "";
  elements.settlementModal.classList.remove("hidden");
  elements.settlementPeople.focus();
}

function closeSettlementModal() {
  state.settlementContext = null;
  elements.settlementModal.classList.add("hidden");
}

function updateSettlementResult() {
  if (!state.settlementContext) return;
  const people = Math.floor(parseQuantityInput(elements.settlementPeople.value));
  const unitPrice = parseAmount(elements.settlementUnitPrice.value);
  if (people <= 0 || unitPrice <= 0) {
    elements.settlementQuantity.value = "";
    elements.settlementAmount.value = "";
    return;
  }

  const quantity = state.settlementContext.quantity / people;
  const amount = Math.round(quantity * unitPrice);
  elements.settlementQuantity.value = formatQuantity(quantity);
  elements.settlementAmount.value = formatAmount(amount);
}

function applySettlementResult() {
  if (!state.settlementContext) return;
  updateSettlementResult();
  if (!elements.settlementQuantity.value || !elements.settlementAmount.value) return;

  if (state.settlementContext.scope === "entry") {
    elements.unitPrice.value = formatAmount(elements.settlementUnitPrice.value);
    elements.quantity.value = elements.settlementQuantity.value;
    elements.amount.value = elements.settlementAmount.value;
    updateAmount();
  } else {
    elements.editIncomeUnitPrice.value = formatAmount(elements.settlementUnitPrice.value);
    elements.editQuantity.value = elements.settlementQuantity.value;
    elements.editAmount.value = elements.settlementAmount.value;
    updateEditAmount();
  }

  closeSettlementModal();
}

function updateAmount() {
  const quantity = parseQuantityInput(elements.quantity.value);
  const unitPrice = currentUnitPrice();
  elements.amount.value = quantity > 0 && unitPrice >= 0 ? formatAmount(Math.round(quantity * unitPrice)) : "";
}

function currentUnitPrice() {
  return parseAmount(elements.unitPrice.value);
}

function updateEntryMode() {
  const type = currentType();
  const isIncome = type === "income";
  const isExpense = type === "expense";
  const isSettlement = type === "settlement";
  elements.unitPriceLabel.textContent = isIncome ? "販売価格" : "購入価格";
  elements.incomeFields.classList.toggle("hidden", !isIncome);
  elements.expenseFields.classList.toggle("hidden", !isExpense);
  elements.entryGroupDetails.classList.toggle("hidden", isSettlement);
  document.querySelector(".price-calc-block").classList.toggle("hidden", isSettlement);
  elements.settlementFields.classList.toggle("hidden", !isSettlement);
  elements.entryWorkspace.classList.toggle("settlement-mode", isSettlement);
  elements.form.classList.toggle("entry-type-income", isIncome);
  elements.form.classList.toggle("entry-type-expense", isExpense);
  elements.form.classList.toggle("entry-type-settlement", isSettlement);
  if (isSettlement && !elements.settlementRows.children.length) addSettlementEntryRow(elements.settlementRows);
  if (isSettlement && !elements.purchaseRows.children.length) addSettlementEntryRow(elements.purchaseRows);
  if (isSettlement) updateSettlementTotal();
  updateEntryInputMode();
}

function updateEntryInputMode() {
  const isGrouped = elements.entryGroupDetails.open;
  const type = currentType();
  const isIncome = type === "income";
  const isExpense = type === "expense";
  elements.entryItem.classList.toggle("hidden", isGrouped);
  elements.entryItemSelect.classList.toggle("hidden", !isGrouped);
  elements.expenseName.classList.toggle("hidden", isGrouped);
  elements.expenseNameSelect.classList.toggle("hidden", !isGrouped);
  elements.entryItem.toggleAttribute("required", isIncome && !isGrouped);
  elements.entryItemSelect.toggleAttribute("required", isIncome && isGrouped);
  elements.expenseName.toggleAttribute("required", isExpense && !isGrouped);
  elements.expenseNameSelect.toggleAttribute("required", isExpense && isGrouped);
  elements.unitPrice.toggleAttribute("required", type !== "settlement");
  elements.quantity.toggleAttribute("required", type !== "settlement");
  elements.amount.toggleAttribute("required", type !== "settlement");
}

function entrySubtitle(entry, mapName) {
  const parts = [];
  if (entry.map || entry.category) parts.push(mapName);
  if (entry.unitPrice) parts.push(`単価 ${yen.format(entry.unitPrice)}`);
  if (entry.quantity) parts.push(`数量 ${formatQuantity(entry.quantity)}`);
  const tags = formatTags(entry.tags);
  if (tags) parts.push(tags);
  return parts.join(" / ");
}

function openEditModal(id) {
  const entry = state.entries.find((candidate) => candidate.id === id);
  if (!entry) return;

  state.editingEntryId = id;
  elements.deleteEditEntry.classList.remove("hidden");
  setRadioValue(elements.editForm, "editType", entry.type);
  elements.editDate.value = entry.date;
  elements.editTime.value = entry.time || "00:00";
  elements.editQuantity.value = entry.quantity || 1;
  setTagValues(elements.editTags, elements.editTagChipList, entry.tags);
  elements.editIncomeUnitPrice.value = "";
  elements.editExpenseUnitPrice.value = "";
  elements.editGroupDetails.open = Boolean(entry.map);
  updateEditMapOptions(entry.map || "");
  updateEditItemOptions(entry.item || "");

  if (entry.type === "income") {
    elements.editItem.value = entry.item || "";
    elements.editIncomeUnitPrice.value = formatAmount(entry.unitPrice ?? "");
  } else {
    elements.editExpenseName.value = entry.item || "";
    elements.editExpenseUnitPrice.value = formatAmount(entry.unitPrice || "");
  }

  updateEditMode();
  updateEditInputMode();
  updateEditAmount();
  elements.editModal.classList.remove("hidden");
}

function closeEditModal() {
  state.editingEntryId = "";
  state.sendingPlannedId = "";
  elements.editModal.classList.add("hidden");
}

function deleteEditedEntry() {
  if (!state.editingEntryId) return;
  if (!window.confirm("この明細を削除しますか？")) return;

  state.entries = state.entries.filter((entry) => entry.id !== state.editingEntryId);
  saveEntries();
  closeEditModal();
  render();
}

function saveEditedEntry() {
  let entry = state.entries.find((candidate) => candidate.id === state.editingEntryId);
  const isPlannedTransfer = !entry && state.sendingPlannedId;
  const plannedTransfer = isPlannedTransfer
    ? state.plannedPurchases.find((planned) => planned.id === state.sendingPlannedId)
    : null;
  if (!entry && !isPlannedTransfer) return;

  const type = editType();
  const itemName = currentEditItemName();
  if (!itemName) return;
  if (!validateNotFutureDate(elements.editDate.value)) return;
  if (!confirmDistantYear(elements.editDate.value)) return;

  updateEditAmount();
  if (!validateEntryNumbers(editUnitPrice(), parseQuantityInput(elements.editQuantity.value), parseAmount(elements.editAmount.value))) return;
  commitTagInput(elements.editTags, elements.editTagChipList);
  if (isPlannedTransfer) {
    entry = { id: crypto.randomUUID(), createdAt: Date.now() };
    state.entries.push(entry);
  }
  entry.type = type;
  entry.date = elements.editDate.value;
  entry.time = elements.editTime.value;
  entry.amount = parseAmount(elements.editAmount.value);
  entry.map = resolvedEditMap(itemName);
  entry.item = itemName;
  entry.quantity = parseQuantityInput(elements.editQuantity.value) || 1;
  entry.unitPrice = editUnitPrice();
  entry.tags = getTagValues(elements.editTags);
  delete entry.memo;

  if (isPlannedTransfer) {
    applyPlannedTransferRemainder(plannedTransfer, entry.quantity);
    savePlannedPurchases();
    state.periodStart = rangeKey(getRangeStart(entryDateTime(entry)));
    state.selectedSummaryKey = state.periodStart;
    updatePeriodLabel();
  }
  saveEntries();
  closeEditModal();
  render();
}

function updateEditMapOptions(selectedMap = "") {
  elements.editMap.replaceChildren();
  const empty = document.createElement("option");
  empty.value = "";
  empty.textContent = "グループなし";
  elements.editMap.append(empty);
  for (const map of state.maps) {
    const option = document.createElement("option");
    option.value = map;
    option.textContent = map;
    elements.editMap.append(option);
  }
  if (selectedMap && state.maps.includes(selectedMap)) elements.editMap.value = selectedMap;
  elements.editMap.dataset.previousValue = elements.editMap.value;
}

function updateEditItemOptions(selectedItem = "") {
  const linkedItems = elements.editMap.value
    ? [...(state.links[elements.editMap.value] || [])]
    : state.items.map((item) => item.name);
  if (!elements.editMap.value && selectedItem && !linkedItems.includes(selectedItem)) linkedItems.push(selectedItem);
  setSelectOptionsWithBlank(elements.editItemSelect, linkedItems, "アイテム/項目を選択");
  setSelectOptionsWithBlank(elements.editExpenseNameSelect, linkedItems, "アイテム/項目を選択");
  if (selectedItem) {
    elements.editItem.value = selectedItem;
    elements.editExpenseName.value = selectedItem;
    if ([...elements.editItemSelect.options].some((option) => option.value === selectedItem)) {
      elements.editItemSelect.value = selectedItem;
    }
    if ([...elements.editExpenseNameSelect.options].some((option) => option.value === selectedItem)) {
      elements.editExpenseNameSelect.value = selectedItem;
    }
  }
}

function fillEditUnitPriceFromItem() {
  const item = findItem(currentEditItemName());
  if (item && editType() === "income" && !parseAmount(elements.editIncomeUnitPrice.value)) {
    elements.editIncomeUnitPrice.value = formatAmount(item.amount);
  }
  if (item && editType() === "expense" && !parseAmount(elements.editExpenseUnitPrice.value)) {
    elements.editExpenseUnitPrice.value = formatAmount(item.amount);
  }
}

function currentEditItemName() {
  const isGrouped = elements.editGroupDetails.open;
  if (editType() === "income") {
    return isGrouped ? elements.editItemSelect.value : elements.editItem.value.trim();
  }
  return isGrouped ? elements.editExpenseNameSelect.value : elements.editExpenseName.value.trim();
}

function updateEditAmount() {
  const quantity = parseQuantityInput(elements.editQuantity.value);
  const unitPrice = editUnitPrice();
  elements.editAmount.value = quantity > 0 && unitPrice >= 0 ? formatAmount(Math.round(quantity * unitPrice)) : "";
}

function editUnitPrice() {
  return editType() === "income"
    ? parseAmount(elements.editIncomeUnitPrice.value)
    : parseAmount(elements.editExpenseUnitPrice.value);
}

function updateEditMode() {
  const isIncome = editType() === "income";
  elements.editForm.classList.toggle("edit-type-income", isIncome);
  elements.editForm.classList.toggle("edit-type-expense", !isIncome);
  elements.editIncomeFields.classList.toggle("hidden", !isIncome);
  elements.editExpenseFields.classList.toggle("hidden", isIncome);
  elements.editIncomePriceField.classList.toggle("hidden", !isIncome);
  elements.editExpensePriceField.classList.toggle("hidden", isIncome);
  updateEditInputMode();
  elements.editIncomeUnitPrice.toggleAttribute("required", isIncome);
  elements.editExpenseUnitPrice.toggleAttribute("required", !isIncome);
}

function updateEditInputMode() {
  const isGrouped = elements.editGroupDetails.open;
  const isIncome = editType() === "income";
  elements.editItem.classList.toggle("hidden", isGrouped);
  elements.editItemSelect.classList.toggle("hidden", !isGrouped);
  elements.editExpenseName.classList.toggle("hidden", isGrouped);
  elements.editExpenseNameSelect.classList.toggle("hidden", !isGrouped);
  elements.editItem.toggleAttribute("required", isIncome && !isGrouped);
  elements.editItemSelect.toggleAttribute("required", isIncome && isGrouped);
  elements.editExpenseName.toggleAttribute("required", !isIncome && !isGrouped);
  elements.editExpenseNameSelect.toggleAttribute("required", !isIncome && isGrouped);
}

function syncEditFieldsForType() {
  const itemName = currentEditItemName();
  if (editType() === "income") {
    updateEditMapOptions(elements.editMap.value);
    updateEditItemOptions(itemName);
    if (!elements.editItem.value && itemName) {
      elements.editItem.value = itemName;
    }
    elements.editIncomeUnitPrice.value = formatAmount(parseAmount(elements.editIncomeUnitPrice.value) || parseAmount(elements.editExpenseUnitPrice.value));
    updateEditInputMode();
    return;
  }

  elements.editExpenseName.value = itemName;
  updateEditItemOptions(itemName);
  elements.editExpenseUnitPrice.value = formatAmount(parseAmount(elements.editIncomeUnitPrice.value) || parseAmount(elements.editExpenseUnitPrice.value));
  updateEditInputMode();
}

function editType() {
  return new FormData(elements.editForm).get("editType");
}

function setRadioValue(form, name, value) {
  const radio = form.querySelector(`input[name="${name}"][value="${value}"]`);
  if (radio) radio.checked = true;
}

function openMasterEditModal(type, name) {
  state.editingMaster = { type, name };
  elements.masterEditTitle.textContent = type === "map" ? "グループ編集" : "アイテム編集";
  elements.masterName.value = name;
  elements.masterAmountLabel.classList.toggle("hidden", type === "map");

  if (type === "item") {
    const item = findItem(name);
    elements.masterAmount.value = item ? formatAmount(item.amount) : "0";
  } else {
    elements.masterAmount.value = "";
  }

  elements.masterEditModal.classList.remove("hidden");
}

function closeMasterEditModal() {
  state.editingMaster = null;
  elements.masterEditModal.classList.add("hidden");
}

function saveMasterEdit() {
  if (!state.editingMaster) return;
  const oldName = state.editingMaster.name;
  const newName = elements.masterName.value.trim();
  if (!newName) return;

  if (state.editingMaster.type === "map") {
    renameMap(oldName, newName);
  } else {
    renameItem(oldName, newName, parseAmount(elements.masterAmount.value));
  }

  closeMasterEditModal();
  refreshConfigurationViews(newName);
  render();
}

function deleteMasterEdit() {
  if (!state.editingMaster) return;
  const { type, name } = state.editingMaster;

  if (type === "map") {
    state.maps = state.maps.filter((map) => map !== name);
    delete state.links[name];
    saveMaps();
    saveLinks();
  } else {
    state.items = state.items.filter((item) => item.name !== name);
    for (const map of Object.keys(state.links)) {
      state.links[map] = state.links[map].filter((item) => item !== name);
    }
    saveItems();
    saveLinks();
  }

  closeMasterEditModal();
  refreshConfigurationViews();
  render();
}

function renameMap(oldName, newName) {
  const index = state.maps.indexOf(oldName);
  if (index === -1) return;
  if (oldName !== newName && state.maps.includes(newName)) return;

  state.maps[index] = newName;
  state.links[newName] = state.links[oldName] || [];
  if (oldName !== newName) delete state.links[oldName];
  for (const entry of state.entries) {
    if (entry.map === oldName) entry.map = newName;
  }

  saveMaps();
  saveLinks();
  saveEntries();
}

function renameItem(oldName, newName, amount) {
  const item = findItem(oldName);
  if (!item) return;
  if (oldName !== newName && state.items.some((candidate) => candidate.name === newName)) return;

  item.name = newName;
  item.amount = amount;
  for (const map of Object.keys(state.links)) {
    state.links[map] = state.links[map].map((linkedItem) => (linkedItem === oldName ? newName : linkedItem));
  }
  for (const entry of state.entries) {
    if (entry.item === oldName) entry.item = newName;
  }

  saveItems();
  saveLinks();
  saveEntries();
}

function findItem(name) {
  return state.items.find((item) => item.name === name);
}

function currentType() {
  return new FormData(elements.form).get("type");
}

function showTab(tab) {
  const currentTab = [...elements.tabs].find((button) => button.classList.contains("active"))?.dataset.tab;
  const shouldResetScroll = currentTab && currentTab !== tab;

  elements.tabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tab);
  });

  Object.entries(elements.panels).forEach(([name, panel]) => {
    const isSettingsGroup = tab === "settings" && ["maps", "items", "links", "settings"].includes(name);
    panel.classList.toggle("active", name === tab || isSettingsGroup);
  });
  if (tab === "settings" && ![...elements.settingsAnchors].some((button) => button.classList.contains("active"))) {
    elements.settingsAnchors[0]?.classList.add("active");
  }
  if (tab !== "settings") {
    elements.settingsAnchors.forEach((button) => button.classList.remove("active"));
  }

  if (tab !== "entry") refreshConfigurationViews();
  if (shouldResetScroll) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function scrollToSettingsBlock(targetId) {
  const target = document.querySelector(`#${targetId}`);
  if (!target) return;
  elements.settingsAnchors.forEach((button) => {
    button.classList.toggle("active", button.dataset.settingsTarget === targetId);
  });
  const stickyHeight = elements.stickyTop.getBoundingClientRect().height;
  const stickyOffset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--sticky-top-offset")) || 0;
  const anchorGap = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--settings-anchor-gap")) || 0;
  const top = target.getBoundingClientRect().top + window.scrollY - stickyHeight - stickyOffset - anchorGap;
  window.scrollTo({ top, behavior: "smooth" });
}

function shiftPeriod(offset) {
  const date = parseRangeKey(state.periodStart);
  if (state.periodMode === "week") {
    date.setDate(date.getDate() + offset * 7);
  } else {
    date.setMonth(date.getMonth() + offset);
  }
  if (isFuturePeriodStart(date, state.periodMode)) return;
  state.periodStart = rangeKey(date);
  updatePeriodLabel();
  render();
}

function setPeriodMode(mode) {
  if (state.periodMode === mode) return;
  state.periodMode = mode;
  state.periodStart = rangeKey(getRangeStart(new Date()));
  state.selectedSummaryKey = "";
  updateAxisLimitInputs();
  updatePeriodLabel();
  render();
}

function setupMonthSelectors() {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear - 5; year <= currentYear + 2; year += 1) {
    years.push(String(year));
  }
  setSelectOptions(elements.year, years, "年");
  setSelectOptions(
    elements.monthSelect,
    Array.from({ length: 12 }, (_, index) => String(index + 1)),
    "月",
  );
}

function setupThemeOptions() {
  elements.themeGrid.replaceChildren(
    ...Object.entries(themes).map(([value, theme]) => {
      const button = document.createElement("button");
      button.className = "theme-option";
      button.type = "button";
      button.dataset.theme = value;
      button.innerHTML = `
        <span class="theme-swatch" style="--swatch-bg: ${theme.values.bg}; --swatch-panel: ${theme.values.panel}; --swatch-green: ${theme.values.green}; --swatch-blue: ${theme.values.blue}; --swatch-red: ${theme.values.red};"></span>
        <span>${escapeHTML(theme.label)}</span>
      `;
      return button;
    }),
  );
  if (!themes[state.theme]) state.theme = "default";
  updateThemeSelection();
}

function updateThemeSelection() {
  elements.themeGrid.querySelectorAll(".theme-option").forEach((button) => {
    button.classList.toggle("selected", button.dataset.theme === state.theme);
  });
}

function applyTheme(themeName) {
  const theme = themes[themeName] || themes.default;
  for (const [key, value] of Object.entries(theme.values)) {
    document.documentElement.style.setProperty(`--${key}`, value);
  }
  const useDarkLogo = isDarkTheme(theme);
  elements.titleLogo.src = useDarkLogo ? TITLE_LOGO_DARK : TITLE_LOGO_LIGHT;
  elements.titleLogo.classList.toggle("dark-theme-logo", useDarkLogo);
}

function isDarkTheme(theme) {
  return colorLuminance(theme.values.bg) < 0.22 || colorLuminance(theme.values.panel) < 0.22;
}

function colorLuminance(hex) {
  const normalized = hex.replace("#", "");
  if (normalized.length !== 6) return 1;
  const channels = [0, 2, 4].map((start) => parseInt(normalized.slice(start, start + 2), 16) / 255);
  const linear = channels.map((value) => (value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4));
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}

function updateMonthPeriodFromSelectors() {
  if (state.periodMode !== "month") return;
  const year = Number(elements.year.value);
  const month = Number(elements.monthSelect.value);
  if (!year || !month) return;
  const selectedDate = new Date(year, month - 1, 1, 0, 0, 0, 0);
  state.periodStart = rangeKey(isFuturePeriodStart(selectedDate, "month") ? currentMaxPeriodStart("month") : selectedDate);
  state.selectedSummaryKey = "";
  updatePeriodLabel();
  render();
}

function updateWeekPeriodFromSelector() {
  if (state.periodMode !== "week") return;
  if (!elements.period.value) return;
  const selectedDate = parseRangeKey(elements.period.value);
  state.periodStart = rangeKeyForMode(isFuturePeriodStart(selectedDate, "week") ? currentMaxPeriodStart("week") : selectedDate, "week");
  state.selectedSummaryKey = "";
  updatePeriodLabel();
  render();
}

function sum(entries) {
  return entries.reduce((total, entry) => total + entry.amount, 0);
}

function todayISO() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function confirmDistantYear(dateValue) {
  if (!dateValue) return true;
  const year = Number(dateValue.slice(0, 4));
  if (!Number.isFinite(year)) return true;

  const currentYear = new Date().getFullYear();
  if (Math.abs(year - currentYear) < 2) return true;

  return window.confirm(`入力された日付は${year}年です。現在年（${currentYear}年）から離れています。この日付で登録しますか？`);
}

function currentTime() {
  const date = new Date();
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function currentEntryTime() {
  return elements.time.value || currentTime();
}

function validateNotFutureDate(dateValue) {
  if (!dateValue) return true;
  const inputDate = new Date(`${dateValue}T00:00:00`);
  const today = new Date(`${todayISO()}T00:00:00`);
  if (inputDate <= today) return true;

  window.alert("未来日付の明細は登録できません。");
  return false;
}

function validateEntryNumbers(unitPrice, quantity, amount) {
  if (unitPrice > 0 && quantity > 0 && amount > 0) return true;
  window.alert("単価、数量、金額は必須入力です。");
  return false;
}

function formatDate(value) {
  const date = new Date(`${value}T00:00:00`);
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function formatDateFromTime(timestamp) {
  const date = new Date(timestamp);
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function entryDateTime(entry) {
  return new Date(`${entry.date}T${entry.time || "00:00"}:00`);
}

function median(values) {
  const sorted = values.filter(Number.isFinite).sort((a, b) => a - b);
  if (!sorted.length) return NaN;
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

function buildLinearTicks(min, max, count = 6) {
  if (!Number.isFinite(min) || !Number.isFinite(max) || count < 2) return [];
  const span = Math.max(max - min, 1);
  return Array.from({ length: count }, (_, index) => min + (span * index) / (count - 1));
}

function buildDateTicks(minTime, maxTime, count = 6) {
  if (!Number.isFinite(minTime) || !Number.isFinite(maxTime) || count < 2) return [];
  const span = Math.max(maxTime - minTime, 1);
  return Array.from({ length: count }, (_, index) => minTime + (span * index) / (count - 1));
}

function unitPriceX(timestamp, chart, minTime, maxTime) {
  const span = Math.max(maxTime - minTime, 1);
  return chart.left + ((timestamp - minTime) / span) * chart.width;
}

function compareEntriesNewestFirst(a, b) {
  const dateDiff = entryDateTime(b) - entryDateTime(a);
  if (dateDiff !== 0) return dateDiff;
  return entryOrderValue(b) - entryOrderValue(a);
}

function entryOrderValue(entry) {
  if (entry.createdAt) return Number(entry.createdAt);
  const idTail = String(entry.id || "").replace(/\D/g, "").slice(-8);
  return Number(idTail || 0);
}

function getWeekStart(date) {
  const start = new Date(date);
  start.setSeconds(0, 0);
  const daysSinceTuesday = (start.getDay() - 2 + 7) % 7;
  start.setDate(start.getDate() - daysSinceTuesday);
  start.setHours(12, 0, 0, 0);

  if (date < start) {
    start.setDate(start.getDate() - 7);
  }

  return start;
}

function getWeekEnd(start) {
  const end = new Date(start);
  end.setDate(end.getDate() + 7);
  end.setMinutes(end.getMinutes() - 1);
  return end;
}

function getMonthStart(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
}

function getMonthEnd(start) {
  return new Date(start.getFullYear(), start.getMonth() + 1, 0, 23, 59, 0, 0);
}

function getRangeStart(date) {
  return state.periodMode === "week" ? getWeekStart(date) : getMonthStart(date);
}

function getRangeEnd(start) {
  return state.periodMode === "week" ? getWeekEnd(start) : getMonthEnd(start);
}

function currentRange() {
  const start = parseRangeKey(state.periodStart);
  return { start, end: getRangeEnd(start) };
}

function isEntryInPeriod(entry, start, end) {
  const date = entryDateTime(entry);
  return date >= start && date <= end;
}

function rangeKey(date) {
  return rangeKeyForMode(date, state.periodMode);
}

function rangeKeyForMode(date, mode) {
  const hour = mode === "week" ? 12 : 0;
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}T${String(
    hour,
  ).padStart(2, "0")}:00`;
}

function parseRangeKey(value) {
  return new Date(`${value}:00`);
}

function updatePeriodLabel() {
  const period = currentRange();
  updatePeriodPickerOptions(period);
  elements.period.classList.toggle("month-period", state.periodMode === "month");
  elements.period.disabled = state.periodMode === "month";
  elements.period.setAttribute("aria-disabled", String(state.periodMode === "month"));
  elements.period.closest(".month-control").classList.toggle("month-mode", state.periodMode === "month");
  elements.modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.periodMode);
  });
  elements.monthSelectors.classList.toggle("hidden", state.periodMode !== "month");
  if (state.periodMode === "month") {
    elements.year.value = String(period.start.getFullYear());
    elements.monthSelect.value = String(period.start.getMonth() + 1);
  }
  updatePeriodNavigationState(period.start);
}

function updatePeriodNavigationState(periodStart = currentRange().start) {
  const nextDate = new Date(periodStart);
  if (state.periodMode === "week") {
    nextDate.setDate(nextDate.getDate() + 7);
  } else {
    nextDate.setMonth(nextDate.getMonth() + 1);
  }
  elements.nextMonth.disabled = isFuturePeriodStart(nextDate, state.periodMode);
}

function currentMaxPeriodStart(mode = state.periodMode) {
  return mode === "week" ? getWeekStart(new Date()) : getMonthStart(new Date());
}

function isFuturePeriodStart(date, mode = state.periodMode) {
  return date.getTime() > currentMaxPeriodStart(mode).getTime();
}

function updatePeriodPickerOptions(period) {
  elements.period.replaceChildren();

  if (state.periodMode === "month") {
    const option = document.createElement("option");
    option.value = state.periodStart;
    option.textContent = formatPeriod(period.start, period.end);
    elements.period.append(option);
    elements.period.value = state.periodStart;
    return;
  }

  for (const week of buildWeekPickerOptions(period.start)) {
    const option = document.createElement("option");
    option.value = week.key;
    option.textContent = formatPeriodForMode(week.start, getWeekEnd(week.start), "week");
    elements.period.append(option);
  }
  elements.period.value = state.periodStart;
}

function buildWeekPickerOptions(selectedStart) {
  const weeks = new Map();
  const currentStart = getWeekStart(new Date());
  const addWeek = (start) => {
    weeks.set(rangeKeyForMode(start, "week"), { key: rangeKeyForMode(start, "week"), start });
  };

  for (let offset = -104; offset <= 0; offset += 1) {
    const start = new Date(currentStart);
    start.setDate(start.getDate() + offset * 7);
    addWeek(start);
  }

  for (const entry of state.entries) {
    addWeek(getWeekStart(entryDateTime(entry)));
  }

  addWeek(selectedStart);
  return [...weeks.values()].sort((a, b) => b.start - a.start);
}

function formatPeriod(start, end) {
  return formatPeriodForMode(start, end, state.periodMode);
}

function formatPeriodForMode(start, end, mode) {
  if (mode === "month") {
    return `${start.getFullYear()}/${start.getMonth() + 1}`;
  }
  return `${start.getFullYear()}/${start.getMonth() + 1}/${start.getDate()} ${formatClock(start)} - ${end.getMonth() + 1}/${end.getDate()} ${formatClock(end)}`;
}

function formatDateTime(date) {
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes(),
  ).padStart(2, "0")}`;
}

function formatClock(date) {
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function niceCeil(value) {
  const magnitude = 10 ** Math.floor(Math.log10(value));
  const normalized = value / magnitude;
  const rounded = normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10;
  return rounded * magnitude;
}

function formatCompactAmount(value) {
  const sign = value < 0 ? "-" : "";
  const amount = Math.abs(Math.round(value));
  if (amount >= 1000000000) return `${sign}${formatCompactNumber(amount / 1000000000)}G`;
  if (amount >= 1000000) return `${sign}${formatCompactNumber(amount / 1000000)}M`;
  return `${sign}${amount}`;
}

function formatCompactNumber(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1).replace(/\.0$/, "");
}

function loadEntries() {
  const stored = localStorage.getItem(ENTRY_STORAGE_KEY) || localStorage.getItem(LEGACY_ENTRY_STORAGE_KEY);
  if (!stored) return [];

  try {
    const entries = JSON.parse(stored);
    return Array.isArray(entries) ? entries.map((entry) => ({ ...entry, tags: normalizeTags(entry.tags) })) : [];
  } catch {
    return [];
  }
}

function loadMaps() {
  const stored = localStorage.getItem(MAP_LIST_STORAGE_KEY);
  if (stored) return parseStringArray(stored);

  return extractLegacyData().maps;
}

function loadItems() {
  const stored = localStorage.getItem(ITEM_LIST_STORAGE_KEY);
  if (stored) {
    try {
      const items = JSON.parse(stored);
      if (Array.isArray(items)) {
        return items
          .filter((item) => item && item.name)
          .map((item) => ({ name: String(item.name), amount: Number(item.amount || 0) }));
      }
    } catch {
      return [];
    }
  }

  return extractLegacyData().items;
}

function loadLinks() {
  const stored = localStorage.getItem(LINK_STORAGE_KEY);
  if (stored) {
    try {
      const links = JSON.parse(stored);
      if (links && typeof links === "object") return normalizeLinks(links);
    } catch {
      return {};
    }
  }

  return extractLegacyData().links;
}

function loadPlannedPurchases() {
  const stored = localStorage.getItem(PLANNED_STORAGE_KEY);
  if (!stored) return [];

  try {
    const planned = JSON.parse(stored);
    return Array.isArray(planned)
      ? planned.map((item) => ({
          ...item,
          tags: normalizeTags(item.tags),
          type: item.type || "buy",
          quantity: plannedQuantity(item),
        }))
      : [];
  } catch {
    return [];
  }
}

function loadMemos() {
  const stored = localStorage.getItem(MEMO_STORAGE_KEY);
  if (!stored) return [];

  try {
    return normalizeMemos(JSON.parse(stored));
  } catch {
    return [];
  }
}

function normalizeMemos(memos) {
  if (!Array.isArray(memos)) return [];
  return memos
    .filter((memo) => memo && (memo.title || memo.body))
    .map((memo) => {
      const legacyTagMap = {
        todo: "#ToDo",
        event: "#起きた事",
        thought: "#思った事",
        note: "#メモ",
      };
      return {
        id: String(memo.id || crypto.randomUUID()),
        tag: "",
        tags: normalizeMemoTags({ ...memo, tag: memo.tag || legacyTagMap[memo.type] || "" }),
        title: String(memo.title || ""),
        body: String(memo.body || ""),
        done: Boolean(memo.done),
        color: ["blue", "green", "amber", "rose", "slate"].includes(memo.color) ? memo.color : "blue",
        createdAt: memo.createdAt || new Date().toISOString(),
        updatedAt: memo.updatedAt || memo.createdAt || new Date().toISOString(),
      };
    })
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
}

function extractLegacyData() {
  const stored = localStorage.getItem(LEGACY_MAP_STORAGE_KEY);
  if (!stored) return { maps: [], items: [], links: {} };

  try {
    const legacy = JSON.parse(stored);
    const maps = [];
    const itemNames = new Set();
    const links = {};

    for (const group of Object.values(legacy || {})) {
      if (!group || typeof group !== "object") continue;
      for (const [map, items] of Object.entries(group)) {
        if (!maps.includes(map)) maps.push(map);
        links[map] = links[map] || [];
        if (!Array.isArray(items)) continue;
        for (const item of items) {
          if (!item) continue;
          itemNames.add(item);
          if (!links[map].includes(item)) links[map].push(item);
        }
      }
    }

    return {
      maps,
      items: [...itemNames].map((name) => ({ name, amount: 0 })),
      links,
    };
  } catch {
    return { maps: [], items: [], links: {} };
  }
}

function parseStringArray(value) {
  try {
    const array = JSON.parse(value);
    return Array.isArray(array) ? [...new Set(array.filter(Boolean).map(String))] : [];
  } catch {
    return [];
  }
}

function normalizeLinks(links) {
  const normalized = {};
  for (const [map, items] of Object.entries(links)) {
    normalized[map] = Array.isArray(items) ? [...new Set(items.filter(Boolean).map(String))] : [];
  }
  return normalized;
}

function normalizeNumericText(value) {
  return String(value || "")
    .replace(/[０-９]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0xfee0))
    .replace(/[．，－]/g, (char) => ({ "．": ".", "，": ",", "－": "-" })[char] || char)
    .replace(/[ＫｋＭｍＧｇＴｔ]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0xfee0));
}

function parseAmount(value) {
  const raw = normalizeNumericText(value).trim().replace(/,/g, "");
  const match = raw.match(/^(-?\d+(?:\.\d*)?)([kKmMgGtT])?$/);
  if (!match) return Number(raw.replace(/[^\d.-]/g, "")) || 0;
  const multipliers = { k: 1_000, m: 1_000_000, g: 1_000_000_000, t: 1_000_000_000_000 };
  const number = Number(match[1]);
  const suffix = match[2]?.toLowerCase();
  return Math.round(number * (suffix ? multipliers[suffix] : 1)) || 0;
}

function formatAmount(value) {
  if (value === "" || value === null || value === undefined) return "";
  return String(parseAmount(value)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatSignedYen(value) {
  const amount = Number(value || 0);
  return `${amount < 0 ? "-" : "+"}${yen.format(Math.abs(amount))}`;
}

function trimScale(value) {
  return String(Number(value.toFixed(1))).replace(/\.0$/, "");
}

function formatShortAmount(value) {
  const amount = Math.abs(Number(value || 0));
  const sign = Number(value || 0) < 0 ? "-" : "";
  if (amount >= 1_000_000_000_000) return `${sign}${trimScale(amount / 1_000_000_000_000)}T`;
  if (amount >= 1_000_000_000) return `${sign}${trimScale(amount / 1_000_000_000)}G`;
  if (amount >= 1_000_000) return `${sign}${trimScale(amount / 1_000_000)}M`;
  if (amount >= 1_000) return `${sign}${trimScale(amount / 1_000)}K`;
  return `${sign}${Math.round(amount)}`;
}

function formatQuantity(value) {
  const quantity = Number(value);
  if (!Number.isFinite(quantity) || quantity <= 0) return "";
  if (Number.isInteger(quantity)) return String(quantity);
  return String(Number(quantity.toFixed(DISPLAY_QUANTITY_DECIMALS))).replace(/\.?0+$/, "");
}

function formatMoneyInput(input) {
  const before = input.value;
  const compact = normalizeNumericText(before).replace(/,/g, "").trim();
  const inProgressShortcut = compact.match(/^(-?\d*)(?:\.(\d*))?([kKmMgGtT])?$/);
  if (/[.kKmMgGtT]/.test(compact) && inProgressShortcut) {
    const integer = inProgressShortcut[1] || "";
    const decimal = compact.includes(".") ? `.${inProgressShortcut[2] || ""}` : "";
    const suffix = inProgressShortcut[3] ? inProgressShortcut[3].toUpperCase() : "";
    input.value = `${integer ? integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""}${decimal}${suffix}`;
    return;
  }
  const shortcut = normalizeNumericText(before).replace(/,/g, "").match(/^(-?\d+(?:\.\d+)?)([kKmMgGtT])$/);
  if (shortcut) {
    input.value = `${formatDecimalAmount(shortcut[1])}${shortcut[2].toUpperCase()}`;
    return;
  }
  const digits = normalizeNumericText(before).replace(/[^\d-]/g, "");
  input.value = digits && digits !== "-" ? formatAmount(digits) : digits === "-" ? "-" : "";
}

function formatDecimalAmount(value) {
  const [integer, decimal] = String(value).split(".");
  const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decimal === undefined ? formattedInteger : `${formattedInteger}.${decimal}`;
}

function normalizeMoneyInput(input) {
  if (!input.value.trim()) return;
  input.value = formatAmount(input.value);
}

function normalizeMoneyShortcutInput(input) {
  if (!input || !hasMoneyUnitSuffix(input.value)) return false;
  normalizeMoneyInput(input);
  if (input.classList?.contains("settlement-row-price")) updateSettlementRowAmount(input.closest(".settlement-entry-row"));
  updateAmount();
  updateEditAmount();
  return true;
}

function normalizeActiveMoneyShortcut() {
  const active = document.activeElement;
  return isMoneyInput(active) && normalizeMoneyShortcutInput(active);
}

function isComposingInputEvent(event) {
  return Boolean(event?.isComposing || String(event?.inputType || "").toLowerCase().includes("composition") || event?.target?.dataset?.composing === "true");
}

function hasMoneyUnitSuffix(value) {
  return /^-?\d[\d,]*(?:\.\d+)?[kKmMgGtT]$/.test(normalizeNumericText(value).trim());
}

function isQuantityInput(input) {
  if (input?.classList?.contains("settlement-row-quantity")) return true;
  return [
    "quantityInput",
    "editQuantityInput",
    "plannedQuantityInput",
    "plannedEditQuantityInput",
    "calcPriceQuantityInput",
    "settlementPeopleInput",
    "settlementPeopleCountInput",
  ].includes(input?.id);
}

function isMoneyInput(input) {
  if (input?.classList?.contains("settlement-row-price")) return true;
  if (input?.classList?.contains("settlement-row-buy-price")) return true;
  return [
    "unitPriceInput",
    "amountInput",
    "calcPriceAmountInput",
    "calcQuantityAmountInput",
    "calcQuantityPriceInput",
    "itemAmountInput",
    "plannedAmountInput",
    "plannedEditAmountInput",
    "editIncomeUnitPriceInput",
    "editExpenseUnitPriceInput",
    "editAmountInput",
    "masterAmountInput",
  ].includes(input.id);
}

function refreshNumericDependentValues(input) {
  if (!input) return;
  if (input.closest?.("#entryForm")) {
    if (input.closest(".settlement-entry-row")) {
      updateSettlementRowAmount(input.closest(".settlement-entry-row"));
      return;
    }
    if (input.id === "settlementPeopleCountInput") updateSettlementTotal();
    updateAmount();
    return;
  }
  if (input.closest?.("#editForm")) {
    updateEditAmount();
    return;
  }
  if (input.closest?.("#calcForm")) {
    updateCalculationResult();
    return;
  }
  if (input.closest?.("#settlementForm")) {
    updateSettlementResult();
  }
}

function saveEntries() {
  localStorage.setItem(ENTRY_STORAGE_KEY, JSON.stringify(state.entries));
}

function saveMaps() {
  localStorage.setItem(MAP_LIST_STORAGE_KEY, JSON.stringify(state.maps));
}

function saveItems() {
  localStorage.setItem(ITEM_LIST_STORAGE_KEY, JSON.stringify(state.items));
}

function saveLinks() {
  localStorage.setItem(LINK_STORAGE_KEY, JSON.stringify(state.links));
}

function savePlannedPurchases() {
  localStorage.setItem(PLANNED_STORAGE_KEY, JSON.stringify(state.plannedPurchases));
}

function saveMemos() {
  localStorage.setItem(MEMO_STORAGE_KEY, JSON.stringify(state.memos));
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return entities[char];
  });
}
