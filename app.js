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
const WEEKLY_MD_AXIS_MAX_STORAGE_KEY = "game-ledger-weekly-md-axis-max";
const MONTHLY_MD_AXIS_MAX_STORAGE_KEY = "game-ledger-monthly-md-axis-max";
const WEEKLY_MD_TOTAL_AXIS_MAX_STORAGE_KEY = "game-ledger-weekly-md-total-axis-max";
const MONTHLY_MD_TOTAL_AXIS_MAX_STORAGE_KEY = "game-ledger-monthly-md-total-axis-max";
const WEEKLY_TREND_COUNT_STORAGE_KEY = "game-ledger-weekly-trend-count";
const MONTHLY_TREND_COUNT_STORAGE_KEY = "game-ledger-monthly-trend-count";
const CHARACTER_STORAGE_KEY = "game-ledger-characters";
const MD_STORAGE_KEY = "game-ledger-md-list";
const MD_RUN_STORAGE_KEY = "game-ledger-md-runs";
const MD_UNLOCK_STORAGE_KEY = "game-ledger-md-unlocked";
const MD_LAYOUT_STORAGE_KEY = "game-ledger-md-layout";
const MD_MONITOR_IMPORTED_STORAGE_KEY = "game-ledger-md-monitor-imported";
const MD_MONITOR_CHARACTER_STORAGE_KEY = "game-ledger-md-monitor-character";
const MD_START_TIME_STORAGE_KEY = "game-ledger-md-start-time";
const MD_START_AT_STORAGE_KEY = "game-ledger-md-start-at";
const MD_STOPPED_ELAPSED_STORAGE_KEY = "game-ledger-md-stopped-elapsed";
const MD_RESET_TYPES = {
  daily: { label: "日次", limit: 1 },
  weekly2: { label: "週2", limit: 2 },
  weekly1: { label: "週1", limit: 1 },
};
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
  WEEKLY_MD_AXIS_MAX_STORAGE_KEY,
  MONTHLY_MD_AXIS_MAX_STORAGE_KEY,
  WEEKLY_TREND_COUNT_STORAGE_KEY,
  MONTHLY_TREND_COUNT_STORAGE_KEY,
  CHARACTER_STORAGE_KEY,
  MD_STORAGE_KEY,
  MD_RUN_STORAGE_KEY,
  MD_UNLOCK_STORAGE_KEY,
  MD_LAYOUT_STORAGE_KEY,
  MD_MONITOR_IMPORTED_STORAGE_KEY,
  MD_MONITOR_CHARACTER_STORAGE_KEY,
  MD_START_TIME_STORAGE_KEY,
  MD_START_AT_STORAGE_KEY,
  MD_STOPPED_ELAPSED_STORAGE_KEY,
  LEGACY_ENTRY_STORAGE_KEY,
  LEGACY_MAP_STORAGE_KEY,
];
const TITLE_LOGO_LIGHT = "assets/profitia-title.png";
const TITLE_LOGO_DARK = "assets/profitia-title-dark.png";
const DISPLAY_QUANTITY_DECIMALS = 2;
const RO_OFFICIAL_ITEM_BASE_URL = "https://rotool.gungho.jp/item";

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
    label: "サンドストーム",
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
  characters: loadCharacters(),
  mdDungeons: loadMdDungeons(),
  mdRuns: loadMdRuns(),
  mdUnlocked: localStorage.getItem(MD_UNLOCK_STORAGE_KEY) === "true",
  mdLayout: localStorage.getItem(MD_LAYOUT_STORAGE_KEY) === "dungeonRows" ? "dungeonRows" : "characterRows",
  mdMonitorImportedIds: loadStringSet(MD_MONITOR_IMPORTED_STORAGE_KEY),
  mdMonitorCharacterId: localStorage.getItem(MD_MONITOR_CHARACTER_STORAGE_KEY) || "",
  mdStartTime: localStorage.getItem(MD_START_TIME_STORAGE_KEY) || "",
  mdStartAt: localStorage.getItem(MD_START_AT_STORAGE_KEY) || "",
  mdStoppedElapsedMs: Number(localStorage.getItem(MD_STOPPED_ELAPSED_STORAGE_KEY) || 0),
  mdMonitorConnected: false,
  mdMonitorTimer: null,
  mdFullscreen: false,
  mdDrag: null,
  mdUnlockKeys: new Set(),
  mdUnlockSequence: [],
  mdEntryContext: null,
  pendingCharacterIcon: "",
  pendingMasterIcon: "",
  iconCropContext: null,
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
  mdUnlockSequence: [],
  summaryView: "overall",
  expandedMdSummaryRows: new Set(),
  mdTrendMutedLabels: new Set(),
  mdGridSelection: { characterId: "", mdId: "" },
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
  weeklyMdAxisMax: Number(localStorage.getItem(WEEKLY_MD_AXIS_MAX_STORAGE_KEY) || 0),
  monthlyMdAxisMax: Number(localStorage.getItem(MONTHLY_MD_AXIS_MAX_STORAGE_KEY) || 0),
  weeklyMdTotalAxisMax: Number(localStorage.getItem(WEEKLY_MD_TOTAL_AXIS_MAX_STORAGE_KEY) || 0),
  monthlyMdTotalAxisMax: Number(localStorage.getItem(MONTHLY_MD_TOTAL_AXIS_MAX_STORAGE_KEY) || 0),
  weeklyTrendCount: clampTrendPeriodCount(localStorage.getItem(WEEKLY_TREND_COUNT_STORAGE_KEY) || 12),
  monthlyTrendCount: clampTrendPeriodCount(localStorage.getItem(MONTHLY_TREND_COUNT_STORAGE_KEY) || 12),
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
    md: document.querySelector("#mdPanel"),
    maps: document.querySelector("#mapsPanel"),
    items: document.querySelector("#itemsPanel"),
    links: document.querySelector("#linksPanel"),
    characters: document.querySelector("#charactersPanel"),
    mdTagLink: document.querySelector("#mdTagLinkPanel"),
    mdItemLink: document.querySelector("#mdItemLinkPanel"),
    mdMaster: document.querySelector("#mdMasterPanel"),
    settings: document.querySelector("#settingsPanel"),
  },
  entryWorkspace: document.querySelector("#entryWorkspace"),
  form: document.querySelector("#entryForm"),
  date: document.querySelector("#dateInput"),
  todayDate: document.querySelector("#todayDateButton"),
  timeToggle: document.querySelector("#timeToggleButton"),
  time: document.querySelector("#timeInput"),
  openMdEntryFromEntry: document.querySelector("#openMdEntryFromEntryButton"),
  incomeFields: document.querySelector("#incomeFields"),
  expenseFields: document.querySelector("#expenseFields"),
  entryGroupDetails: document.querySelector("#entryGroupDetails"),
  entryMap: document.querySelector("#entryMapInput"),
  entryMd: document.querySelector("#entryMdInput"),
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
  itemOfficialId: document.querySelector("#itemOfficialIdInput"),
  addItem: document.querySelector("#addItemButton"),
  itemList: document.querySelector("#itemList"),
  mdTab: document.querySelector("#mdTabButton"),
  characterName: document.querySelector("#characterNameInput"),
  characterJob: document.querySelector("#characterJobInput"),
  characterLevel: document.querySelector("#characterLevelInput"),
  characterIcon: document.querySelector("#characterIconInput"),
  characterIconStatus: document.querySelector("#characterIconStatus"),
  addCharacter: document.querySelector("#addCharacterButton"),
  characterList: document.querySelector("#characterList"),
  mdName: document.querySelector("#mdNameInput"),
  mdIdName: document.querySelector("#mdIdNameInput"),
  mdConditionLevel: document.querySelector("#mdConditionLevelInput"),
  mdResetType: document.querySelector("#mdResetTypeInput"),
  addMd: document.querySelector("#addMdButton"),
  mdList: document.querySelector("#mdList"),
  mdItemLinkMd: document.querySelector("#mdItemLinkMdInput"),
  mdItemLinkItem: document.querySelector("#mdItemLinkItemInput"),
  mdItemLinkItemSuggestions: document.querySelector("#mdItemLinkItemSuggestions"),
  addMdItemLink: document.querySelector("#addMdItemLinkButton"),
  mdItemLinkList: document.querySelector("#mdItemLinkList"),
  mdTagLinkTag: document.querySelector("#mdTagLinkTagInput"),
  mdTagLinkTagChipInput: document.querySelector("#mdTagLinkTagChipInput"),
  mdTagLinkTagChipList: document.querySelector("#mdTagLinkTagChipList"),
  mdTagLinkTagSuggestions: document.querySelector("#mdTagLinkTagSuggestions"),
  mdTagLinkMap: document.querySelector("#mdTagLinkMapInput"),
  mdTagLinkMd: document.querySelector("#mdTagLinkMdInput"),
  addMdTagLink: document.querySelector("#addMdTagLinkButton"),
  mdLayoutButtons: document.querySelectorAll("[data-md-layout]"),
  mdActionGuide: document.querySelector(".md-action-guide"),
  mdMonitorCharacter: document.querySelector("#mdMonitorCharacterInput"),
  mdStartTime: document.querySelector("#mdStartTimeInput"),
  mdStartNow: document.querySelector("#mdStartNowButton"),
  mdStop: document.querySelector("#mdStopButton"),
  mdReset: document.querySelector("#mdResetButton"),
  mdElapsedTime: document.querySelector("#mdElapsedTime"),
  mdMonitorConnect: document.querySelector("#mdMonitorConnectButton"),
  mdMonitorFetch: document.querySelector("#mdMonitorFetchButton"),
  mdMonitorStatus: document.querySelector("#mdMonitorStatus"),
  mdFullscreenToggle: document.querySelector("#mdFullscreenToggleButton"),
  mdWeekGrid: document.querySelector("#mdWeekGrid"),
  itemHistoryOptions: document.querySelector("#itemHistoryOptions"),
  linkMap: document.querySelector("#linkMapInput"),
  linkItem: document.querySelector("#linkItemInput"),
  addLink: document.querySelector("#addLinkButton"),
  linkList: document.querySelector("#linkList"),
  modeButtons: document.querySelectorAll("[data-mode]"),
  monthSelectors: document.querySelector("#monthSelectors"),
  year: document.querySelector("#yearInput"),
  monthSelect: document.querySelector("#monthInput"),
  period: document.querySelector("#periodPicker"),
  periodList: document.querySelector("#periodList"),
  summaryDetail: document.querySelector("#summaryDetail"),
  summaryFilterToggle: document.querySelector("#summaryFilterToggle"),
  summaryFilterBody: document.querySelector("#summaryFilterBody"),
  summaryTagCondition: document.querySelector("#summaryTagCondition"),
  summaryTagChipInput: document.querySelector("#summaryTagChipInput"),
  summaryTagChipList: document.querySelector("#summaryTagChipList"),
  summaryTags: document.querySelector("#summaryTagsInput"),
  summaryTagSuggestions: document.querySelector("#summaryTagSuggestions"),
  summaryFilterClear: document.querySelector("#summaryFilterClearButton"),
  summaryFilterStatus: document.querySelector("#summaryFilterStatus"),
  summaryViewButtons: document.querySelectorAll("[data-summary-view]"),
  trendChartTitle: document.querySelector("#trendChartTitle"),
  trendPeriodCount: document.querySelector("#trendPeriodCountInput"),
  trendPeriodCountUnit: document.querySelector("#trendPeriodCountUnit"),
  yearChart: document.querySelector("#yearChart"),
  summaryChartLegend: document.querySelector("#summaryChartLegend"),
  chartAxisControls: document.querySelector("#chartAxisControls"),
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
  mdEntryModal: document.querySelector("#mdEntryModal"),
  mdEntryForm: document.querySelector("#mdEntryForm"),
  closeMdEntry: document.querySelector("#closeMdEntryButton"),
  mdEntryDate: document.querySelector("#mdEntryDateInput"),
  mdEntryTime: document.querySelector("#mdEntryTimeInput"),
  mdEntryMd: document.querySelector("#mdEntryMdInput"),
  mdEntryDuration: document.querySelector("#mdEntryDurationInput"),
  mdEntryPartySize: document.querySelector("#mdEntryPartySizeInput"),
  mdEntryLines: document.querySelector("#mdEntryLines"),
  mdEntryLineTemplate: document.querySelector("#mdEntryLineTemplate"),
  addMdEntryLine: document.querySelector("#addMdEntryLineButton"),
  mdEntryTotalAmount: document.querySelector("#mdEntryTotalAmount"),
  mdEntryHourlyAmount: document.querySelector("#mdEntryHourlyAmount"),
  mdEntryItem: document.querySelector("#mdEntryItemInput"),
  mdEntryUnitPriceLabel: document.querySelector("#mdEntryUnitPriceLabel"),
  mdEntryUnitPrice: document.querySelector("#mdEntryUnitPriceInput"),
  mdEntryQuantity: document.querySelector("#mdEntryQuantityInput"),
  mdEntryAmount: document.querySelector("#mdEntryAmountInput"),
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
  editMd: document.querySelector("#editMdInput"),
  editItem: document.querySelector("#editItemInput"),
  editItemSelect: document.querySelector("#editItemSelect"),
  editIncomePriceField: document.querySelector("#editForm .edit-income-price-field"),
  editIncomeUnitPrice: document.querySelector("#editIncomeUnitPriceInput"),
  editExpenseName: document.querySelector("#editExpenseNameInput"),
  editExpenseNameSelect: document.querySelector("#editExpenseNameSelect"),
  editExpensePriceField: document.querySelector("#editForm .edit-expense-price-field"),
  editExpenseUnitPrice: document.querySelector("#editExpenseUnitPriceInput"),
  editQuantity: document.querySelector("#editQuantityInput"),
  editCalcAssist: document.querySelector("#editCalcAssistButton"),
  editAmount: document.querySelector("#editAmountInput"),
  plannedTransferRemainderNotice: document.querySelector("#plannedTransferRemainderNotice"),
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
  masterOfficialIdLabel: document.querySelector("#masterOfficialIdLabel"),
  masterOfficialId: document.querySelector("#masterOfficialIdInput"),
  openMasterOfficialPage: document.querySelector("#openMasterOfficialPageButton"),
  masterJobLabel: document.querySelector("#masterJobLabel"),
  masterJob: document.querySelector("#masterJobInput"),
  masterCharacterLevelLabel: document.querySelector("#masterCharacterLevelLabel"),
  masterCharacterLevel: document.querySelector("#masterCharacterLevelInput"),
  masterIconLabel: document.querySelector("#masterIconLabel"),
  masterIcon: document.querySelector("#masterIconInput"),
  masterMdIdNameLabel: document.querySelector("#masterMdIdNameLabel"),
  masterMdIdName: document.querySelector("#masterMdIdNameInput"),
  masterMdConditionLevelLabel: document.querySelector("#masterMdConditionLevelLabel"),
  masterMdConditionLevel: document.querySelector("#masterMdConditionLevelInput"),
  masterMdResetTypeLabel: document.querySelector("#masterMdResetTypeLabel"),
  masterMdResetType: document.querySelector("#masterMdResetTypeInput"),
  deleteMaster: document.querySelector("#deleteMasterButton"),
  iconCropModal: document.querySelector("#iconCropModal"),
  iconCropCanvas: document.querySelector("#iconCropCanvas"),
  iconCropZoom: document.querySelector("#iconCropZoomInput"),
  iconCropX: document.querySelector("#iconCropXInput"),
  iconCropY: document.querySelector("#iconCropYInput"),
  closeIconCrop: document.querySelector("#closeIconCropButton"),
  cancelIconCrop: document.querySelector("#cancelIconCropButton"),
  applyIconCrop: document.querySelector("#applyIconCropButton"),
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
  updateMdTabVisibility();
  setupSettingsInterfaceGroups();
  setupSettingsPanelCollapse();
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
  setupTagInput(elements.summaryTags, elements.summaryTagChipInput, elements.summaryTagChipList, elements.summaryTagSuggestions, renderSummaryViews);
  setupTagInput(elements.plannedTags, elements.plannedTagChipInput, elements.plannedTagChipList, elements.plannedTagSuggestions);
  setupTagInput(elements.plannedEditTags, elements.plannedEditTagChipInput, elements.plannedEditTagChipList, elements.plannedEditTagSuggestions);
  setupTagInput(elements.memoTag, elements.memoTagChipInput, elements.memoTagChipList, elements.memoTagSuggestions);
  setupTagInput(elements.memoSearchTag, elements.memoSearchTagChipInput, elements.memoSearchTagChipList, elements.memoSearchTagSuggestions, renderMemos);
  setupTagInput(elements.memoEditTag, elements.memoEditTagChipInput, elements.memoEditTagChipList, elements.memoEditTagSuggestions);
  setupTagInput(elements.mdTagLinkTag, elements.mdTagLinkTagChipInput, elements.mdTagLinkTagChipList, elements.mdTagLinkTagSuggestions, updateMdTagApplyButton);

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

  document.addEventListener("keydown", handleMdUnlockShortcut);
  document.addEventListener("keyup", handleMdUnlockKeyRelease);
  window.addEventListener("blur", resetMdUnlockKeys);
  window.addEventListener("resize", () => {
    updateStickyTopHeight();
    updateMdFullscreenSize();
  });
  window.visualViewport?.addEventListener("resize", updateMdFullscreenSize);

  elements.addCharacter.addEventListener("click", addCharacter);
  elements.characterName.addEventListener("keydown", submitCharacterOnEnter);
  elements.characterJob.addEventListener("keydown", submitCharacterOnEnter);
  elements.characterLevel.addEventListener("keydown", submitCharacterOnEnter);
  elements.characterIcon.addEventListener("change", () => openIconCropFromInput(elements.characterIcon, "character"));
  elements.characterList.addEventListener("click", (event) => {
    const levelButton = event.target.closest(".character-level-up-button");
    if (levelButton) {
      event.stopPropagation();
      levelUpCharacter(levelButton.dataset.id);
      return;
    }
    const row = event.target.closest(".character-master-row");
    if (row) openMasterEditModal("character", row.dataset.id);
  });

  elements.addMd.addEventListener("click", addMdDungeon);
  elements.mdName.addEventListener("keydown", submitMdOnEnter);
  elements.mdIdName.addEventListener("keydown", submitMdOnEnter);
  elements.mdConditionLevel.addEventListener("keydown", submitMdOnEnter);
  elements.mdResetType.addEventListener("keydown", submitMdOnEnter);
  elements.addMdItemLink.addEventListener("click", addMdItemLink);
  elements.mdItemLinkMd.addEventListener("change", () => {
    renderMdItemLinkList();
    renderMdItemLinkItemSuggestions();
    updateMdItemLinkAddButton();
  });
  elements.mdItemLinkItem.addEventListener("input", renderMdItemLinkItemSuggestions);
  elements.mdItemLinkItem.addEventListener("input", updateMdItemLinkAddButton);
  elements.mdItemLinkItem.addEventListener("focus", renderMdItemLinkItemSuggestions);
  elements.mdItemLinkItem.addEventListener("blur", () => {
    window.setTimeout(hideMdItemLinkItemSuggestions, 120);
  });
  elements.mdItemLinkMd.addEventListener("keydown", submitMdItemLinkOnEnter);
  elements.mdItemLinkItem.addEventListener("keydown", submitMdItemLinkOnEnter);
  elements.mdItemLinkItemSuggestions.addEventListener("mousedown", (event) => {
    event.preventDefault();
  });
  elements.mdItemLinkItemSuggestions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-item]");
    if (!button) return;
    selectMdItemLinkItem(button.dataset.item);
  });
  elements.mdItemLinkList.addEventListener("click", (event) => {
    const button = event.target.closest(".delete-md-item-link-button");
    if (!button) return;
    deleteMdItemLink(button.dataset.mdId, button.dataset.item);
  });
  elements.mdList.addEventListener("click", (event) => {
    const visibilityButton = event.target.closest(".md-visibility-button");
    if (visibilityButton) {
      event.stopPropagation();
      toggleMdDungeonVisibility(visibilityButton.dataset.id, true);
      return;
    }
    const row = event.target.closest(".md-master-row");
    if (row) openMasterEditModal("md", row.dataset.id);
  });

  elements.mdWeekGrid.addEventListener("click", (event) => {
    const visibilityButton = event.target.closest(".md-visibility-button");
    if (visibilityButton) {
      if (!isMdManagementInteractive()) return;
      event.stopPropagation();
      toggleMdDungeonVisibility(visibilityButton.dataset.id, true);
      return;
    }
    const header = event.target.closest(".md-draggable-header");
    if (header) {
      selectMdGridAxis(header.dataset.dragType, header.dataset.dragId);
      return;
    }
    const slot = event.target.closest(".md-run-slot");
    if (slot) {
      if (!isMdManagementInteractive()) return;
      toggleMdRunSlot(slot.dataset.characterId, slot.dataset.mdId, slot.dataset.runId);
      return;
    }
    clearMdGridSelection();
  });
  elements.mdWeekGrid.addEventListener("contextmenu", (event) => {
    const slot = event.target.closest(".md-run-slot");
    if (!slot) return;
    event.preventDefault();
    if (!isMdManagementInteractive()) return;
    openMdEntryModal(slot.dataset.mdId, slot.dataset.characterId, slot.dataset.runId);
  });
  elements.mdWeekGrid.addEventListener("dragstart", handleMdHeaderDragStart);
  elements.mdWeekGrid.addEventListener("dragover", handleMdHeaderDragOver);
  elements.mdWeekGrid.addEventListener("dragleave", handleMdHeaderDragLeave);
  elements.mdWeekGrid.addEventListener("drop", handleMdHeaderDrop);
  elements.mdWeekGrid.addEventListener("dragend", handleMdHeaderDragEnd);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") clearMdGridSelection();
  });
  elements.mdLayoutButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.mdLayout = button.dataset.mdLayout;
      localStorage.setItem(MD_LAYOUT_STORAGE_KEY, state.mdLayout);
      updateMdLayoutToggle();
      renderMdWeekGrid();
    });
  });
  elements.mdMonitorCharacter.addEventListener("change", () => {
    state.mdMonitorCharacterId = elements.mdMonitorCharacter.value;
    localStorage.setItem(MD_MONITOR_CHARACTER_STORAGE_KEY, state.mdMonitorCharacterId);
  });
  elements.mdStartTime.value = state.mdStartTime;
  elements.mdStartTime.addEventListener("change", () => {
    state.mdStartTime = elements.mdStartTime.value;
    state.mdStartAt = "";
    state.mdStoppedElapsedMs = 0;
    localStorage.setItem(MD_START_TIME_STORAGE_KEY, state.mdStartTime);
    localStorage.removeItem(MD_START_AT_STORAGE_KEY);
    localStorage.removeItem(MD_STOPPED_ELAPSED_STORAGE_KEY);
    updateMdElapsedTime();
  });
  elements.mdStartNow.addEventListener("click", () => {
    startMdTimer();
  });
  elements.mdStop.addEventListener("click", stopMdTimer);
  elements.mdReset.addEventListener("click", resetMdTimer);
  elements.mdFullscreenToggle.addEventListener("click", () => setMdFullscreen(!state.mdFullscreen));
  updateMdElapsedTime();
  window.setInterval(updateMdElapsedTime, 1000);
  elements.mdMonitorConnect.addEventListener("click", toggleMdMonitorConnection);
  elements.mdMonitorFetch.addEventListener("click", fetchMdMonitorEvents);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.mdFullscreen) setMdFullscreen(false);
  });

  elements.targetBalanceButton.addEventListener("click", () => {
    const isWeek = state.periodMode === "week";
    const label = isWeek ? "週次目標収支" : "月次目標収支";
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

  elements.openMdEntryFromEntry.addEventListener("click", () => {
    openMdEntryModal("", "", "", { allowAnyPeriod: true });
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
      mdId: elements.entryMd.value || "",
      mdName: mdNameById(elements.entryMd.value),
      quantity: parseQuantityInput(elements.quantity.value) || 1,
      unitPrice: currentUnitPrice(),
      settlementTotalAmount: parseAmount(elements.amount.dataset.settlementTotalAmount || ""),
      settlementPeople: Number(elements.amount.dataset.settlementPeople || 0),
      tags: getTagValues(elements.tags),
    };
    if (!entry.settlementPeople) {
      delete entry.settlementTotalAmount;
      delete entry.settlementPeople;
    }

    state.entries.push(entry);
    saveEntries();
    clearEntrySettlementSplitAmount();
    elements.entryItem.value = "";
    elements.entryItemSelect.value = "";
    setTagValues(elements.tags, elements.tagChipList, []);
    elements.expenseName.value = "";
    elements.expenseNameSelect.value = "";
    elements.entryMd.value = "";
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
      clearEntrySettlementSplitAmount();
      syncEntryFieldsForTypeSwitch();
      updateEntryMode();
      renderFrequentTags();
      updateAmount();
    }

    if (event.target.id === "entryMapInput") {
      clearEntrySettlementSplitAmount();
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
      clearEntrySettlementSplitAmount();
      fillUnitPriceFromSelectedItem();
      updateAmount();
    }
  });

  elements.form.addEventListener("input", (event) => {
    if (isMoneyInput(event.target) && !isComposingInputEvent(event)) formatMoneyInput(event.target);
    if (["quantityInput", "settlementPeopleCountInput"].includes(event.target.id) && !isComposingInputEvent(event)) formatQuantityInput(event.target);
    if (["quantityInput", "unitPriceInput", "entryItemInput", "entryItemSelect", "expenseNameSelect"].includes(event.target.id)) {
      clearEntrySettlementSplitAmount();
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
    state.items.push({
      name,
      amount: parseAmount(elements.itemAmount.value),
      officialId: normalizeOfficialItemId(elements.itemOfficialId.value),
    });
    elements.itemName.value = "";
    elements.itemAmount.value = "";
    elements.itemOfficialId.value = "";
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

  elements.addMdTagLink.addEventListener("click", addMdTagLink);
  elements.mdTagLinkTag.addEventListener("keydown", submitMdTagLinkOnEnter);
  elements.mdTagLinkMap.addEventListener("change", updateMdTagApplyButton);
  elements.mdTagLinkMap.addEventListener("keydown", submitMdTagLinkOnEnter);
  elements.mdTagLinkMd.addEventListener("change", updateMdTagApplyButton);
  elements.mdTagLinkMd.addEventListener("keydown", submitMdTagLinkOnEnter);

  [elements.itemAmount, elements.masterAmount].forEach((input) => {
    input.addEventListener("input", (event) => {
      if (!isComposingInputEvent(event)) formatMoneyInput(input);
    });
  });
  elements.openMasterOfficialPage.addEventListener("click", () => {
    openOfficialItemPageFromInput(elements.masterOfficialId);
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

  elements.summaryFilterToggle.addEventListener("click", () => {
    const collapsed = elements.summaryFilterBody.classList.toggle("hidden");
    elements.summaryFilterToggle.setAttribute("aria-expanded", String(!collapsed));
    elements.summaryFilterToggle.querySelector("strong").textContent = collapsed ? "+" : "-";
  });

  elements.summaryTagCondition.addEventListener("change", renderSummaryViews);
  elements.summaryFilterClear.addEventListener("click", () => {
    elements.summaryTagCondition.value = "includeAny";
    setTagValues(elements.summaryTags, elements.summaryTagChipList, []);
    renderSummaryViews();
  });
  elements.summaryViewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.summaryView = button.dataset.summaryView === "md" ? "md" : "overall";
      renderSummaryViews();
    });
  });
  elements.yearChart.addEventListener("click", (event) => {
    const legendItem = event.target.closest(".md-trend-legend-item[data-md-label]");
    if (!legendItem) return;
    toggleMdTrendMuted(legendItem.dataset.mdLabel);
  });
  elements.yearChart.addEventListener("keydown", (event) => {
    if (!["Enter", " "].includes(event.key)) return;
    const legendItem = event.target.closest(".md-trend-legend-item[data-md-label]");
    if (!legendItem) return;
    event.preventDefault();
    toggleMdTrendMuted(legendItem.dataset.mdLabel);
  });
  elements.trendPeriodCount.addEventListener("change", updateTrendPeriodCount);
  elements.trendPeriodCount.addEventListener("blur", updateTrendPeriodCount);

  elements.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!["week", "month"].includes(button.dataset.mode)) return;
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
    const mdToggle = event.target.closest(".md-summary-toggle");
    if (mdToggle) {
      toggleMdSummaryBreakdown(mdToggle.dataset.mdKey);
      return;
    }
    const button = event.target.closest(".breakdown-sort-button");
    if (!button) return;
    updateBreakdownSort(button.dataset.sort);
  });

  elements.ledgerList.addEventListener("click", (event) => {
    const item = event.target.closest(".entry-item");
    if (item) openEditModal(item.dataset.id);
  });

  elements.closeMdEntry.addEventListener("click", closeMdEntryModal);
  elements.mdEntryModal.addEventListener("click", (event) => {
    if (event.target === elements.mdEntryModal) closeMdEntryModal();
  });
  elements.addMdEntryLine.addEventListener("click", () => addMdEntryLine());
  elements.mdEntryForm.addEventListener("change", (event) => {
    if (event.target === elements.mdEntryMd) {
      applySelectedMdDefaultsToEntryLines();
      return;
    }
    if (event.target.classList.contains("md-entry-line-type")) {
      updateMdEntryLineAccent(event.target.closest(".md-entry-line"));
      updateMdEntryTotals();
    }
  });
  elements.mdEntryForm.addEventListener("input", (event) => {
    if (event.target.id === "mdEntryDurationInput" && !isComposingInputEvent(event)) {
      formatQuantityInput(event.target);
      updateMdEntryTotals();
    }
    if (event.target.id === "mdEntryPartySizeInput" && !isComposingInputEvent(event)) {
      formatQuantityInput(event.target);
      refreshMdEntryLineAmounts();
    }
    if (event.target.classList.contains("md-entry-line-quantity") && !isComposingInputEvent(event)) formatQuantityInput(event.target);
    if (event.target.classList.contains("md-entry-line-price") || event.target.classList.contains("md-entry-line-quantity")) {
      updateMdEntryLineAmount(event.target.closest(".md-entry-line"));
    }
    if (event.target.closest(".md-entry-line")) updateMdEntryTotals();
  });
  elements.mdEntryForm.addEventListener("click", (event) => {
    const calcButton = event.target.closest(".md-entry-line-calc-button");
    if (calcButton) {
      event.preventDefault();
      event.stopPropagation();
      const line = calcButton.closest(".md-entry-line");
      if (line) openCalculationModal("mdEntryRow", "unitPrice", line);
      return;
    }

    const deleteButton = event.target.closest(".md-entry-line-delete");
    if (!deleteButton) return;
    if (elements.mdEntryLines.children.length <= 1) return;
    deleteButton.closest(".md-entry-line").remove();
    updateMdEntryTotals();
  });
  elements.mdEntryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (normalizeActiveMoneyShortcut()) return;
    saveMdEntry();
  });

  elements.closeEdit.addEventListener("click", closeEditModal);
  elements.deleteEditEntry.addEventListener("click", deleteEditedEntry);
  elements.editModal.addEventListener("click", (event) => {
    if (event.target === elements.editModal) closeEditModal();
  });

  elements.editForm.addEventListener("change", (event) => {
    if (event.target.name === "editType") {
      clearEditSettlementSplitAmount();
      updateEditMode();
      syncEditFieldsForType();
      updateEditAmount();
    }

    if (event.target.id === "editMapInput") {
      clearEditSettlementSplitAmount();
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
      clearEditSettlementSplitAmount();
      fillEditUnitPriceFromItem();
      updateEditAmount();
    }
  });

  elements.editForm.addEventListener("input", (event) => {
    if (isMoneyInput(event.target) && !isComposingInputEvent(event)) formatMoneyInput(event.target);
    if (event.target.id === "editQuantityInput" && !isComposingInputEvent(event)) formatQuantityInput(event.target);
    if (["editQuantityInput", "editExpenseUnitPriceInput", "editIncomeUnitPriceInput", "editItemInput", "editItemSelect", "editExpenseNameSelect"].includes(event.target.id)) {
      clearEditSettlementSplitAmount();
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
    const officialButton = event.target.closest(".open-official-item-button");
    if (officialButton) {
      event.stopPropagation();
      openOfficialItemPage(officialButton.dataset.officialId);
      return;
    }
    const row = event.target.closest(".management-row");
    if (row) openMasterEditModal("item", row.dataset.name);
  });

  elements.closeMasterEdit.addEventListener("click", closeMasterEditModal);
  elements.masterIcon.addEventListener("change", () => openIconCropFromInput(elements.masterIcon, "master"));
  elements.masterEditModal.addEventListener("click", (event) => {
    if (event.target === elements.masterEditModal) closeMasterEditModal();
  });
  elements.masterEditForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveMasterEdit();
  });
  elements.deleteMaster.addEventListener("click", deleteMasterEdit);
  elements.closeIconCrop.addEventListener("click", cancelIconCrop);
  elements.cancelIconCrop.addEventListener("click", cancelIconCrop);
  elements.applyIconCrop.addEventListener("click", applyIconCrop);
  elements.iconCropModal.addEventListener("click", (event) => {
    if (event.target === elements.iconCropModal) cancelIconCrop();
  });
  [elements.iconCropZoom, elements.iconCropX, elements.iconCropY].forEach((input) => {
    input.addEventListener("input", renderIconCropPreview);
  });
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

function setupSettingsInterfaceGroups() {
  const settingsContent = document.querySelector(".settings-content");
  if (!settingsContent || document.querySelector("#settingsGroupManagement")) return;

  const groupMasterPanel = settingsContent.querySelector(":scope > .settings-panel");
  const groupDetails = createSettingsInterfaceGroup("settingsGroupManagement", "グループ管理");
  const mdDetails = createSettingsInterfaceGroup("settingsMdManagement", "MD管理");

  if (groupMasterPanel) {
    settingsContent.insertBefore(elements.panels.items, groupMasterPanel);
    settingsContent.insertBefore(groupDetails, groupMasterPanel);
    groupDetails.querySelector(".settings-interface-group-body").append(groupMasterPanel, elements.panels.links);
  }

  settingsContent.append(mdDetails);
  mdDetails.querySelector(".settings-interface-group-body").append(elements.panels.characters, elements.panels.mdMaster, elements.panels.mdItemLink, elements.panels.mdTagLink);
}

function setupSettingsPanelCollapse() {
  document.querySelectorAll("#mapsPanel .settings-panel, #settingsPanel .settings-panel").forEach((panel) => {
    const header = panel.querySelector(":scope > .settings-header");
    if (!header || header.querySelector(".settings-panel-toggle")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "secondary-button settings-panel-toggle";
    button.setAttribute("aria-expanded", "true");
    button.textContent = "-";
    button.addEventListener("click", () => {
      const collapsed = panel.classList.toggle("is-collapsed");
      button.setAttribute("aria-expanded", String(!collapsed));
      button.textContent = collapsed ? "+" : "-";
    });
    header.append(button);
  });
}

function createSettingsInterfaceGroup(id, title) {
  const details = document.createElement("details");
  details.id = id;
  details.className = "settings-interface-group";
  details.innerHTML = `
    <summary>${escapeHTML(title)}</summary>
    <div class="settings-interface-group-body"></div>
  `;
  return details;
}

function openIconCropFromInput(input, target) {
  const file = input.files?.[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    window.alert("画像ファイルを選択してください。");
    input.value = "";
    if (target === "character") updateCharacterIconStatus();
    return;
  }
  if (target === "character") updateCharacterIconStatus(file.name);
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const image = new Image();
    image.addEventListener("load", () => {
      state.iconCropContext = { target, image };
      elements.iconCropZoom.value = "1";
      elements.iconCropX.value = "0";
      elements.iconCropY.value = "0";
      elements.iconCropModal.classList.remove("hidden");
      renderIconCropPreview();
    });
    image.src = String(reader.result || "");
  });
  reader.readAsDataURL(file);
}

function renderIconCropPreview() {
  if (!state.iconCropContext) return;
  const canvas = elements.iconCropCanvas;
  const context = canvas.getContext("2d");
  const image = state.iconCropContext.image;
  const size = canvas.width;
  const zoom = Number(elements.iconCropZoom.value || 1);
  const baseScale = Math.max(size / image.width, size / image.height);
  const scale = baseScale * zoom;
  const drawWidth = image.width * scale;
  const drawHeight = image.height * scale;
  const overflowX = Math.max(0, drawWidth - size);
  const overflowY = Math.max(0, drawHeight - size);
  const offsetX = (Number(elements.iconCropX.value || 0) / 100) * (overflowX / 2);
  const offsetY = (Number(elements.iconCropY.value || 0) / 100) * (overflowY / 2);
  const x = (size - drawWidth) / 2 + offsetX;
  const y = (size - drawHeight) / 2 + offsetY;

  context.clearRect(0, 0, size, size);
  context.save();
  context.beginPath();
  if (typeof context.roundRect === "function") {
    context.roundRect(0, 0, size, size, 18);
  } else {
    context.rect(0, 0, size, size);
  }
  context.clip();
  context.fillStyle = "#fff";
  context.fillRect(0, 0, size, size);
  context.drawImage(image, x, y, drawWidth, drawHeight);
  context.restore();
}

function applyIconCrop() {
  if (!state.iconCropContext) return;
  renderIconCropPreview();
  const dataUrl = elements.iconCropCanvas.toDataURL("image/png");
  if (state.iconCropContext.target === "master") {
    state.pendingMasterIcon = dataUrl;
    elements.masterIcon.value = "";
  } else {
    state.pendingCharacterIcon = dataUrl;
    elements.characterIcon.value = "";
    updateCharacterIconStatus("アイコン選択済み");
  }
  closeIconCropModal();
}

function cancelIconCrop() {
  const target = state.iconCropContext?.target;
  closeIconCropModal();
  if (target === "master") elements.masterIcon.value = "";
  if (target === "character") {
    elements.characterIcon.value = "";
    updateCharacterIconStatus();
  }
}

function updateCharacterIconStatus(text = "") {
  if (!elements.characterIconStatus) return;
  elements.characterIconStatus.textContent = text || "未選択";
}

function closeIconCropModal() {
  state.iconCropContext = null;
  elements.iconCropModal.classList.add("hidden");
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
  elements.targetBalanceLabel.textContent = state.periodMode === "week" ? "週次目標収支：" : "月次目標収支：";
  elements.targetBalanceTotal.textContent = yen.format(targetBalance);
  const targetDiff = currentTargetActualBalance(period.start) - targetBalance;
  elements.targetDiffTotal.textContent = formatSignedYen(targetDiff);
  elements.targetDiffTotal.classList.toggle("negative-total", targetDiff < 0);
  elements.targetDiffTotal.classList.toggle("positive-total", targetDiff >= 0);

  renderMapBars(periodEntries);
  renderLedger(filterEntries(periodEntries));
  renderSummaryViews();
  renderItemSearchResults();
  renderPlannedPurchases();
  renderMemos();
  renderMdManagement();
  updateTagOptions();
}

function renderSummaryViews() {
  elements.summaryViewButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.summaryView === state.summaryView);
  });
  updateTrendPeriodCountInput();
  updateSummaryChartFooter();
  renderPeriodList();
  renderYearChart();
  updateSummaryFilterStatus();
}

function updateSummaryChartFooter() {
  if (elements.summaryChartLegend) {
    elements.summaryChartLegend.classList.toggle("hidden", state.summaryView === "md");
    elements.summaryChartLegend.innerHTML = `
      <span><i class="legend-income"></i>収入</span>
      <span><i class="legend-expense"></i>支出</span>
      <span><i class="legend-net"></i>収支</span>
      <span><i class="legend-target"></i>目標収支</span>
    `;
  }
  if (elements.chartAxisControls) {
    elements.chartAxisControls.classList.remove("hidden");
    elements.chartAxisControls.classList.toggle("md-axis-mode", state.summaryView === "md");
  }
  updateAxisLimitInputs();
}

function refreshConfigurationViews(selectedMap = elements.linkMap.value) {
  updateEntryMapOptions();
  updateEntryMdOptions();
  updateEntryItemOptions();
  updateMdTagLinkOptions();
  updateMdItemLinkOptions();
  fillUnitPriceFromSelectedItem();
  updateAmount();
  updateLinkOptions(selectedMap);
  renderMapList();
  renderItemList();
  renderLinkList();
  renderMdItemLinkList();
  updateMdTagApplyButton();
  renderCharacterList();
  renderMdList();
  updateMdMonitorCharacterOptions();
}

function updateTopCollapseState() {
  elements.stickyTop.classList.toggle("top-collapsed", state.topCollapsed);
  elements.topCollapse.textContent = state.topCollapsed ? "▼" : "▲";
  elements.topCollapse.setAttribute("aria-expanded", String(!state.topCollapsed));
  requestAnimationFrame(updateStickyTopHeight);
}

function updateAxisLimitInputs() {
  const limits = currentAxisLimits();
  if (state.summaryView === "md") {
    elements.barAxisMaxButton.textContent = "合計収支軸登録";
    elements.barAxisMaxDisplay.parentElement.firstChild.textContent = "合計収支軸 ";
    elements.barAxisMaxDisplay.textContent = limits.mdTotal > 0 ? yen.format(limits.mdTotal) : "制限なし";
    elements.netAxisMaxButton.textContent = "MD収支軸登録";
    elements.netAxisMaxDisplay.parentElement.firstChild.textContent = "MD収支軸 ";
    elements.netAxisMaxDisplay.textContent = limits.md > 0 ? yen.format(limits.md) : "制限なし";
    return;
  }
  elements.netAxisMaxButton.textContent = "収支軸登録";
  elements.netAxisMaxDisplay.parentElement.firstChild.textContent = "収支軸 ";
  elements.barAxisMaxDisplay.textContent = limits.bar > 0 ? yen.format(limits.bar) : "制限なし";
  elements.netAxisMaxDisplay.textContent = limits.net > 0 ? yen.format(limits.net) : "制限なし";
}

function clampTrendPeriodCount(value) {
  const count = Math.round(Number(value));
  if (!Number.isFinite(count)) return 12;
  return Math.min(Math.max(count, 1), 60);
}

function currentTrendPeriodCount() {
  return state.periodMode === "week" ? state.weeklyTrendCount : state.monthlyTrendCount;
}

function updateTrendPeriodCountInput() {
  elements.trendPeriodCount.value = String(currentTrendPeriodCount());
  elements.trendPeriodCountUnit.textContent = state.periodMode === "week" ? "週" : "か月";
}

function updateTrendPeriodCount() {
  const count = clampTrendPeriodCount(elements.trendPeriodCount.value);
  if (state.periodMode === "week") {
    state.weeklyTrendCount = count;
    localStorage.setItem(WEEKLY_TREND_COUNT_STORAGE_KEY, String(count));
  } else {
    state.monthlyTrendCount = count;
    localStorage.setItem(MONTHLY_TREND_COUNT_STORAGE_KEY, String(count));
  }
  updateTrendPeriodCountInput();
  renderYearChart();
}

function updateAxisLimit(axis) {
  const limits = currentAxisLimits();
  const isMdAxis = state.summaryView === "md";
  const label = isMdAxis
    ? axis === "bar" ? "合計収支上限値" : "MD収支上限値"
    : axis === "bar" ? "収入支出上限値" : "収支上限値";
  const currentValue = isMdAxis ? axis === "bar" ? limits.mdTotal : limits.md : axis === "bar" ? limits.bar : limits.net;
  const input = window.prompt(`${label}（0で未設定）`, currentValue > 0 ? formatAmount(currentValue) : "");
  if (input === null) return;
  const value = parseAmount(input);
  if (state.periodMode === "week") {
    if (isMdAxis && axis === "bar") {
      state.weeklyMdTotalAxisMax = value;
      localStorage.setItem(WEEKLY_MD_TOTAL_AXIS_MAX_STORAGE_KEY, String(value));
    } else if (isMdAxis) {
      state.weeklyMdAxisMax = value;
      localStorage.setItem(WEEKLY_MD_AXIS_MAX_STORAGE_KEY, String(value));
    } else if (axis === "bar") {
      state.weeklyBarAxisMax = value;
      localStorage.setItem(WEEKLY_BAR_AXIS_MAX_STORAGE_KEY, String(value));
    } else {
      state.weeklyNetAxisMax = value;
      localStorage.setItem(WEEKLY_NET_AXIS_MAX_STORAGE_KEY, String(value));
    }
  } else {
    if (isMdAxis && axis === "bar") {
      state.monthlyMdTotalAxisMax = value;
      localStorage.setItem(MONTHLY_MD_TOTAL_AXIS_MAX_STORAGE_KEY, String(value));
    } else if (isMdAxis) {
      state.monthlyMdAxisMax = value;
      localStorage.setItem(MONTHLY_MD_AXIS_MAX_STORAGE_KEY, String(value));
    } else if (axis === "bar") {
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
    ? { bar: state.weeklyBarAxisMax, net: state.weeklyNetAxisMax, md: state.weeklyMdAxisMax, mdTotal: state.weeklyMdTotalAxisMax }
    : { bar: state.monthlyBarAxisMax, net: state.monthlyNetAxisMax, md: state.monthlyMdAxisMax, mdTotal: state.monthlyMdTotalAxisMax };
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
    empty.textContent = "この条件に一致する明細はありません";
    elements.ledgerList.append(empty);
    return;
  }

  for (const entry of entries) {
    const item = elements.template.content.firstElementChild.cloneNode(true);
    const mapName = entry.map || entry.category || "カテゴリ未設定";
    const mdName = entryMdName(entry);
    item.querySelector(".entry-date").textContent = `${formatDate(entry.date)} ${entry.time || "00:00"}`;
    item.querySelector(".entry-memo").textContent = entry.item || entry.memo || mapName;
    item.querySelector(".entry-category").textContent = entrySubtitle(entry, mapName, mdName);

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
    renderSearchTable([], "検索条件を入力してください");
    return;
  }

  const results = state.entries
    .filter((entry) => {
      const matchesKeyword = !keyword || `${entry.item || ""} ${entryMdName(entry)}`.toLowerCase().includes(keyword);
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
    renderSearchTable([], "条件に一致する明細がありません");
    return;
  }

  renderSearchTable(results);
}

function renderSearchTable(results, emptyMessage = "") {
  const table = document.createElement("div");
  table.className = "search-table";
  table.innerHTML = `
    <div class="search-table-head">
      ${searchSortHeader("date", "日付")}
      ${searchSortHeader("type", "収支")}
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
            return `<line class="trend-median-line ${itemSeries.className}" x1="${chart.left}" y1="${y}" x2="${chart.left + chart.width}" y2="${y}"></line><text class="trend-median-label" x="${chart.left + chart.width - 6}" y="${y - 6}" text-anchor="end">${itemSeries.label} 直近3か月中央値 ${formatShortAmount(itemSeries.value)}</text>`;
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
    { label: "明細件数", valueText: `${results.length}件`, className: "" },
    { label: "収入", valueText: yen.format(income), className: "income-text" },
    { label: "支出", valueText: yen.format(expense), className: "expense-text" },
    { label: "収支", valueText: formatSignedYen(balance), className: balance < 0 ? "expense-text" : "income-text" },
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
    <span>累計差額</span>
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
      <span class="drag-handle" draggable="true" data-id="${planned.id}" aria-label="並び替え">↕</span>
      <span class="${isBuy ? "expense-text" : "income-text"}">${isBuy ? "購入" : "売却"}</span>
      <div class="planned-row-main">
        <strong>${escapeHTML(planned.item)}</strong>
        <small>${escapeHTML(plannedMeta.join(" / "))}</small>
      </div>
      <span class="${isBuy ? "expense-text" : "income-text"}">${yen.format(totalAmount)}</span>
      <span class="planned-running-net ${runningNet < 0 ? "expense-text" : "income-text"}">${formatSignedYen(runningNet)}</span>
      <button class="send-planned-button" type="button" data-id="${planned.id}">明細へ</button>
      <div class="planned-edge-actions" aria-label="並び替え">
        <button class="planned-edge-button" type="button" data-id="${planned.id}" data-edge="top" aria-label="先頭へ" title="先頭へ" ${index === 0 ? "disabled" : ""}>↑</button>
        <button class="planned-edge-button" type="button" data-id="${planned.id}" data-edge="bottom" aria-label="末尾へ" title="末尾へ" ${index === state.plannedPurchases.length - 1 ? "disabled" : ""}>↓</button>
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
  updateEntryMdOptions("");
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
  const input = window.prompt("使用可能資金を入力してください", formatAmount(state.plannedCash));
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
  if (!hasInput || window.confirm("入力内容を破棄してよろしいですか？")) clearMemoForm();
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
  if (!window.confirm("このメモを削除してよろしいですか？")) return;
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
    empty.textContent = keyword ? "条件に一致するメモがありません" : "メモがありません";
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
    characters: state.characters,
    mdDungeons: state.mdDungeons,
    mdRuns: state.mdRuns,
    mdUnlocked: state.mdUnlocked,
    mdLayout: state.mdLayout,
    mdMonitorImportedIds: [...state.mdMonitorImportedIds],
    mdMonitorCharacterId: state.mdMonitorCharacterId,
    plannedCash: state.plannedCash,
    theme: state.theme,
    targetBalance: state.targetBalance,
    weeklyTargetBalance: state.weeklyTargetBalance,
    weeklyBarAxisMax: state.weeklyBarAxisMax,
    weeklyNetAxisMax: state.weeklyNetAxisMax,
    monthlyBarAxisMax: state.monthlyBarAxisMax,
    monthlyNetAxisMax: state.monthlyNetAxisMax,
    weeklyMdAxisMax: state.weeklyMdAxisMax,
    monthlyMdAxisMax: state.monthlyMdAxisMax,
    weeklyMdTotalAxisMax: state.weeklyMdTotalAxisMax,
    monthlyMdTotalAxisMax: state.monthlyMdTotalAxisMax,
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
  if (!window.confirm("インポート内容で現在データを上書きします。続行しますか？")) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const data = JSON.parse(String(reader.result || "{}"));
      state.entries = Array.isArray(data.entries) ? data.entries.map((entry) => ({ ...entry, tags: normalizeTags(entry.tags) })) : [];
      state.maps = Array.isArray(data.groups) ? data.groups : Array.isArray(data.maps) ? data.maps : [];
      state.items = Array.isArray(data.items) ? data.items.filter((item) => item && item.name).map(normalizeItemMaster) : [];
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
      state.characters = normalizeCharacters(data.characters);
      state.mdDungeons = normalizeMdDungeons(data.mdDungeons);
      state.mdRuns = normalizeMdRuns(data.mdRuns);
      state.mdUnlocked = Boolean(data.mdUnlocked);
      state.mdLayout = data.mdLayout === "dungeonRows" ? "dungeonRows" : "characterRows";
      state.mdMonitorImportedIds = new Set(Array.isArray(data.mdMonitorImportedIds) ? data.mdMonitorImportedIds.map(String) : []);
      state.mdMonitorCharacterId = String(data.mdMonitorCharacterId || "");
      state.plannedCash = Number(data.plannedCash || 0);
      state.theme = themes[data.theme] ? data.theme : "default";
      state.targetBalance = Number(data.targetBalance || 0);
      state.weeklyTargetBalance = Number(data.weeklyTargetBalance || 0);
      state.weeklyBarAxisMax = Number(data.weeklyBarAxisMax || 0);
      state.weeklyNetAxisMax = Number(data.weeklyNetAxisMax || 0);
      state.monthlyBarAxisMax = Number(data.monthlyBarAxisMax || data.barAxisMax || 0);
      state.monthlyNetAxisMax = Number(data.monthlyNetAxisMax || data.netAxisMax || 0);
      state.weeklyMdAxisMax = Number(data.weeklyMdAxisMax || 0);
      state.monthlyMdAxisMax = Number(data.monthlyMdAxisMax || 0);
      state.weeklyMdTotalAxisMax = Number(data.weeklyMdTotalAxisMax || 0);
      state.monthlyMdTotalAxisMax = Number(data.monthlyMdTotalAxisMax || 0);
      localStorage.setItem(THEME_STORAGE_KEY, state.theme);
      localStorage.setItem(TARGET_BALANCE_STORAGE_KEY, String(state.targetBalance));
      localStorage.setItem(WEEKLY_TARGET_BALANCE_STORAGE_KEY, String(state.weeklyTargetBalance));
      localStorage.setItem(PLANNED_CASH_STORAGE_KEY, String(state.plannedCash));
      localStorage.setItem(WEEKLY_BAR_AXIS_MAX_STORAGE_KEY, String(state.weeklyBarAxisMax));
      localStorage.setItem(WEEKLY_NET_AXIS_MAX_STORAGE_KEY, String(state.weeklyNetAxisMax));
      localStorage.setItem(MONTHLY_BAR_AXIS_MAX_STORAGE_KEY, String(state.monthlyBarAxisMax));
      localStorage.setItem(MONTHLY_NET_AXIS_MAX_STORAGE_KEY, String(state.monthlyNetAxisMax));
      localStorage.setItem(WEEKLY_MD_AXIS_MAX_STORAGE_KEY, String(state.weeklyMdAxisMax));
      localStorage.setItem(MONTHLY_MD_AXIS_MAX_STORAGE_KEY, String(state.monthlyMdAxisMax));
      localStorage.setItem(WEEKLY_MD_TOTAL_AXIS_MAX_STORAGE_KEY, String(state.weeklyMdTotalAxisMax));
      localStorage.setItem(MONTHLY_MD_TOTAL_AXIS_MAX_STORAGE_KEY, String(state.monthlyMdTotalAxisMax));
      localStorage.setItem(MD_UNLOCK_STORAGE_KEY, String(state.mdUnlocked));
      localStorage.setItem(MD_LAYOUT_STORAGE_KEY, state.mdLayout);
      localStorage.setItem(MD_MONITOR_CHARACTER_STORAGE_KEY, state.mdMonitorCharacterId);
      saveEntries();
      saveMaps();
      saveItems();
      saveLinks();
      savePlannedPurchases();
      saveMemos();
      saveCharacters();
      saveMdDungeons();
      saveMdRuns();
      saveMdMonitorImportedIds();
      applyTheme(state.theme);
      updateThemeSelection();
      updateAxisLimitInputs();
      updateMdTabVisibility();
      refreshConfigurationViews();
      render();
      window.alert("インポートしました。");
    } catch (error) {
      window.alert("インポートに失敗しました。バックアップファイルを確認してください。");
    }
  });
  reader.readAsText(file);
}

function resetAllAppData() {
  const firstConfirm = window.confirm("このアプリの全データを初期化します。続行しますか？");
  if (!firstConfirm) return;

  const typed = window.prompt("確認のため「リセット」と入力してください");
  if (typed !== "リセット") return;

  APP_STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
  window.alert("初期化しました。ページを再読込します。");
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
    const label = entry.item || entry.map || entry.category || "項目未設定";
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
    <span>収支(%)</span>
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
      <div class="bar-track net-bar-track" aria-label="収支">
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
      <span>公式ID</span>
      <span>公式</span>
      <span>操作</span>
    </div>
  `;

  const sortedItems = [...state.items].sort((a, b) => String(a.name || "").localeCompare(String(b.name || ""), "ja"));
  for (const item of sortedItems) {
    const row = document.createElement("div");
    row.className = "item-master-row management-row";
    row.dataset.name = item.name;
    const officialId = normalizeOfficialItemId(item.officialId);
    const officialButton = officialId
      ? `<button class="secondary-button item-master-action item-master-official-ready open-official-item-button" type="button" data-official-id="${escapeHTML(officialId)}">開く</button>`
      : `<button class="secondary-button item-master-action" type="button" disabled>なし</button>`;
    row.innerHTML = `
      <strong>${escapeHTML(item.name)}</strong>
      <span>${yen.format(item.amount)}</span>
      <span>${escapeHTML(officialId || "-")}</span>
      <span>${officialButton}</span>
      <span><button class="secondary-button item-master-action" type="button">編集</button></span>
    `;
    table.append(row);
  }

  elements.itemList.append(table);
}

function addCharacter() {
  const name = elements.characterName.value.trim();
  if (!name || state.characters.some((character) => character.name === name)) return;
  state.characters.push({
    id: crypto.randomUUID(),
    name,
    job: elements.characterJob.value.trim(),
    level: parseLevelValue(elements.characterLevel.value),
    icon: state.pendingCharacterIcon,
    createdAt: new Date().toISOString(),
  });
  elements.characterName.value = "";
  elements.characterJob.value = "";
  elements.characterLevel.value = "";
  elements.characterIcon.value = "";
  state.pendingCharacterIcon = "";
  updateCharacterIconStatus();
  saveCharacters();
  refreshConfigurationViews();
  renderMdManagement();
}

function submitCharacterOnEnter(event) {
  if (event.key !== "Enter") return;
  event.preventDefault();
  addCharacter();
}

function parseLevelValue(value) {
  const normalized = String(value || "")
    .replace(/[０-９]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0xfee0))
    .replace(/[^\d]/g, "");
  const level = Number(normalized || 0);
  if (!Number.isFinite(level)) return 0;
  return Math.max(0, Math.floor(level));
}

function formatLevel(level) {
  const value = Number(level || 0);
  return value > 0 ? String(value) : "-";
}

function canCharacterEnterMd(character, md) {
  const requiredLevel = Number(md?.conditionLevel || 0);
  if (!requiredLevel) return true;
  return Number(character?.level || 0) >= requiredLevel;
}

function deleteCharacter(id) {
  state.characters = state.characters.filter((character) => character.id !== id);
  saveCharacters();
  refreshConfigurationViews();
  renderMdManagement();
}

function renderCharacterList() {
  elements.characterList.replaceChildren();
  if (state.characters.length === 0) {
    elements.characterList.textContent = "登録済みキャラがありません";
    return;
  }

  for (const character of state.characters) {
    const row = document.createElement("div");
    row.className = "character-master-row";
    row.dataset.id = character.id;
    row.innerHTML = `
      <span class="character-icon">${character.icon ? `<img src="${escapeHTML(character.icon)}" alt="" />` : escapeHTML(character.name.slice(0, 1))}</span>
      <strong>${escapeHTML(character.name)}</strong>
      <span>${escapeHTML(character.job || "未設定")} / Lv.${formatLevel(character.level)}</span>
      <button class="character-level-up-button" type="button"
        data-id="${escapeHTML(character.id)}"
        aria-label="${escapeHTML(character.name)}のレベルを1上げる"
        title="レベルを1上げる">Lv+1</button>
    `;
    elements.characterList.append(row);
  }
}

function levelUpCharacter(id) {
  const character = state.characters.find((candidate) => candidate.id === id);
  if (!character) return;
  character.level = parseLevelValue(character.level) + 1;
  saveCharacters();
  renderCharacterList();
  renderMdManagement();
}

function addMdDungeon() {
  const name = elements.mdName.value.trim();
  const idName = elements.mdIdName.value.trim();
  const resetType = normalizeMdResetType(elements.mdResetType.value);
  const conditionLevel = parseLevelValue(elements.mdConditionLevel.value);
  if (!name) return;
  if (state.mdDungeons.some((md) => md.name === name || (idName && md.idName === idName))) return;
  state.mdDungeons.push({
    id: crypto.randomUUID(),
    name,
    idName,
    defaultItems: [],
    resetType,
    periodLimit: mdPeriodLimit({ resetType }),
    conditionLevel,
    createdAt: new Date().toISOString(),
  });
  elements.mdName.value = "";
  elements.mdIdName.value = "";
  elements.mdConditionLevel.value = "";
  elements.mdResetType.value = "daily";
  saveMdDungeons();
  refreshConfigurationViews();
  renderMdManagement();
}

function submitMdOnEnter(event) {
  if (event.key !== "Enter") return;
  event.preventDefault();
  addMdDungeon();
}

function deleteMdDungeon(id) {
  state.mdDungeons = state.mdDungeons.filter((md) => md.id !== id);
  saveMdDungeons();
  refreshConfigurationViews();
  renderMdManagement();
  renderSummaryViews();
}

function renderMdList() {
  elements.mdList.replaceChildren();
  if (state.mdDungeons.length === 0) {
    elements.mdList.textContent = "MD未登録";
    return;
  }

  for (const md of state.mdDungeons) {
    const row = document.createElement("div");
    row.className = "md-master-row";
    row.classList.toggle("is-hidden-md", Boolean(md.hiddenFromManagement));
    row.dataset.id = md.id;
    row.innerHTML = `
      <strong>${escapeHTML(md.name)}</strong>
      <span>${escapeHTML(md.idName || "-")}</span>
      <span>${escapeHTML(mdResetLabel(md))} / Lv.${formatLevel(md.conditionLevel)} / ${escapeHTML(mdDefaultItemsLabel(md))}</span>
      <button class="md-visibility-button ${md.hiddenFromManagement ? "is-hidden" : ""}" type="button"
        data-id="${escapeHTML(md.id)}"
        aria-label="${md.hiddenFromManagement ? "MD管理に表示" : "MD管理で非表示"}"
        title="${md.hiddenFromManagement ? "MD管理に表示" : "MD管理で非表示"}">
        <span class="md-eye-icon" aria-hidden="true"></span>
      </button>
    `;
    elements.mdList.append(row);
  }
}

function parseMdDefaultItems(value) {
  return normalizeMdDefaultItems(
    String(value || "")
      .split(/[\n,、]/)
      .map((item) => item.trim()),
  );
}

function normalizeMdDefaultItems(items) {
  if (typeof items === "string") return parseMdDefaultItems(items);
  if (!Array.isArray(items)) return [];
  return [...new Set(items.map((item) => String(item || "").trim()).filter(Boolean))];
}

function mdDefaultItemsLabel(md) {
  const items = normalizeMdDefaultItems(md?.defaultItems);
  return items.length > 0 ? `明細 ${items.length}件` : "明細未設定";
}

function addMdItemLink() {
  const md = state.mdDungeons.find((row) => row.id === elements.mdItemLinkMd.value);
  const itemName = elements.mdItemLinkItem.value.trim();
  if (!md || !itemName || !findItem(itemName)) return;
  const items = normalizeMdDefaultItems(md.defaultItems);
  if (!items.includes(itemName)) {
    md.defaultItems = [...items, itemName];
    saveMdDungeons();
  }
  elements.mdItemLinkItem.value = "";
  hideMdItemLinkItemSuggestions();
  updateMdItemLinkAddButton();
  updateMdItemLinkOptions(md.id);
  renderMdItemLinkList();
  renderMdList();
  updateItemHistoryOptions();
}

function submitMdItemLinkOnEnter(event) {
  if (event.key !== "Enter") return;
  event.preventDefault();
  const firstSuggestion = elements.mdItemLinkItemSuggestions.querySelector("[data-item]");
  const currentItem = elements.mdItemLinkItem.value.trim();
  if (!findItem(currentItem) && firstSuggestion) {
    selectMdItemLinkItem(firstSuggestion.dataset.item);
    return;
  }
  addMdItemLink();
}

function mdItemLinkItemCandidates(query = "") {
  const normalizedQuery = query.trim().toLowerCase();
  const selectedMd = state.mdDungeons.find((row) => row.id === elements.mdItemLinkMd.value);
  const linkedItems = new Set(normalizeMdDefaultItems(selectedMd?.defaultItems));
  return state.items
    .filter((item) => item?.name && !linkedItems.has(item.name))
    .filter((item) => {
      if (!normalizedQuery) return true;
      return item.name.toLowerCase().includes(normalizedQuery);
    })
    .sort((a, b) => a.name.localeCompare(b.name, "ja"))
    .slice(0, 8);
}

function renderMdItemLinkItemSuggestions() {
  if (document.activeElement !== elements.mdItemLinkItem) {
    hideMdItemLinkItemSuggestions();
    return;
  }
  const query = elements.mdItemLinkItem.value.trim();
  const candidates = mdItemLinkItemCandidates(query);
  elements.mdItemLinkItemSuggestions.replaceChildren();
  if (candidates.length === 0) {
    hideMdItemLinkItemSuggestions();
    return;
  }
  for (const item of candidates) {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.item = item.name;
    button.innerHTML = `
      <strong>${escapeHTML(item.name)}</strong>
      <span>${yen.format(item.amount)}</span>
    `;
    elements.mdItemLinkItemSuggestions.append(button);
  }
  elements.mdItemLinkItemSuggestions.classList.remove("hidden");
}

function hideMdItemLinkItemSuggestions() {
  elements.mdItemLinkItemSuggestions.classList.add("hidden");
}

function selectMdItemLinkItem(itemName) {
  if (!findItem(itemName)) return;
  elements.mdItemLinkItem.value = itemName;
  hideMdItemLinkItemSuggestions();
  updateMdItemLinkAddButton();
  elements.mdItemLinkItem.focus();
}

function updateMdItemLinkAddButton() {
  const md = state.mdDungeons.find((row) => row.id === elements.mdItemLinkMd.value);
  const item = findItem(elements.mdItemLinkItem.value.trim());
  const linkedItems = new Set(normalizeMdDefaultItems(md?.defaultItems));
  elements.addMdItemLink.disabled = !md || !item || linkedItems.has(item.name);
}

function deleteMdItemLink(mdId, itemName) {
  const md = state.mdDungeons.find((row) => row.id === mdId);
  if (!md || !itemName) return;
  md.defaultItems = normalizeMdDefaultItems(md.defaultItems).filter((item) => item !== itemName);
  saveMdDungeons();
  renderMdItemLinkList();
  renderMdItemLinkItemSuggestions();
  updateMdItemLinkAddButton();
  renderMdList();
  updateItemHistoryOptions();
}

function updateMdItemLinkOptions(selectedMdId = elements.mdItemLinkMd.value) {
  setSelectOptionsWithBlank(
    elements.mdItemLinkMd,
    state.mdDungeons.map((md) => ({ value: md.id, label: md.name })),
    "MDを選択",
  );
  if (selectedMdId && state.mdDungeons.some((md) => md.id === selectedMdId)) elements.mdItemLinkMd.value = selectedMdId;
  renderMdItemLinkItemSuggestions();
  updateMdItemLinkAddButton();
}

function renderMdItemLinkList() {
  elements.mdItemLinkList.replaceChildren();
  const md = state.mdDungeons.find((row) => row.id === elements.mdItemLinkMd.value);
  if (!md) {
    elements.mdItemLinkList.textContent = "MDを選択してください";
    return;
  }

  const items = normalizeMdDefaultItems(md.defaultItems);
  if (items.length === 0) {
    elements.mdItemLinkList.textContent = "MD構成未登録";
    return;
  }

  const table = document.createElement("div");
  table.className = "md-item-link-tree";
  table.innerHTML = `
    <div class="md-item-link-group">
      <span class="link-tree-toggle"></span>
      <strong>${escapeHTML(md.name)}</strong>
      <span>${items.length}件</span>
    </div>
  `;

  for (const itemName of items) {
    const item = findItem(itemName);
    const row = document.createElement("div");
    row.className = "md-item-link-row";
    row.innerHTML = `
      <span></span>
      <strong>${escapeHTML(itemName)}</strong>
      <span>${item ? yen.format(item.amount) : "価格未登録"}</span>
      <button class="delete-md-item-link-button" type="button"
        data-md-id="${escapeHTML(md.id)}"
        data-item="${escapeHTML(itemName)}"
        aria-label="MD構成を削除">×</button>
    `;
    table.append(row);
  }

  elements.mdItemLinkList.append(table);
}

function toggleMdDungeonVisibility(id, confirmAction = false) {
  const md = state.mdDungeons.find((candidate) => candidate.id === id);
  if (!md) return;
  const nextHidden = !md.hiddenFromManagement;
  if (confirmAction) {
    const message = nextHidden
      ? `${md.name}をMD管理で非表示にします。よろしいですか？`
      : `${md.name}をMD管理に表示します。よろしいですか？`;
    if (!window.confirm(message)) return;
  }
  md.hiddenFromManagement = nextHidden;
  saveMdDungeons();
  renderMdList();
  renderMdManagement();
}

function toggleMdRunSlot(characterId, mdId, runId) {
  if (!isMdManagementInteractive()) return;
  if (runId) {
    const run = state.mdRuns.find((candidate) => candidate.id === runId);
    if (!run) return;
    const linkedEntries = mdEntriesForRun(run);
    if (linkedEntries.length > 0) {
      const confirmed = window.confirm("このMD実行を解除すると紐づく明細が削除されます。よろしいですか？");
      if (!confirmed) return;
      const linkedEntryIds = new Set(linkedEntries.map((entry) => entry.id));
      state.entries = state.entries.filter((entry) => !linkedEntryIds.has(entry.id));
      saveEntries();
    }
    state.mdRuns = state.mdRuns.filter((candidate) => candidate.id !== runId);
    saveMdRuns();
    render();
    return;
  }

  const character = state.characters.find((row) => row.id === characterId);
  const md = state.mdDungeons.find((row) => row.id === mdId);
  if (!character || !md) return;
  if (!canCharacterEnterMd(character, md)) return;

  const runDate = mdRunDateForSelectedPeriod();
  state.mdRuns.push({
    id: crypto.randomUUID(),
    date: dateToISO(runDate),
    characterId: character.id,
    characterName: character.name,
    mdId: md.id,
    mdName: md.name,
    source: "manual",
    partySize: 1,
    occurredAt: runDate.toISOString(),
    createdAt: new Date().toISOString(),
  });
  saveMdRuns();
  renderMdManagement();
}

function openMdEntryModal(mdId, characterId = "", runId = "", options = {}) {
  if (!options.allowAnyPeriod && !isMdManagementInteractive()) return;
  const run = runId ? state.mdRuns.find((candidate) => candidate.id === runId) : null;
  const initialMdId = run?.mdId || mdId;
  if (initialMdId && !state.mdDungeons.some((md) => md.id === initialMdId)) return;
  const character = characterId ? state.characters.find((candidate) => candidate.id === characterId) : null;
  const md = initialMdId ? state.mdDungeons.find((candidate) => candidate.id === initialMdId) : null;
  if (!run && character && md && !canCharacterEnterMd(character, md)) return;
  const existingEntries = run ? mdEntriesForRun(run) : [];
  state.mdEntryContext = {
    mdId: initialMdId || "",
    characterId: characterId || "",
    runId: runId || "",
    wasChecked: Boolean(runId),
    entryIds: existingEntries.map((entry) => entry.id),
  };
  updateMdEntryOptions(initialMdId);
  elements.mdEntryMd.dataset.previousValue = elements.mdEntryMd.value;
  const defaultRunDate = mdRunDateForSelectedPeriod();
  elements.mdEntryDate.value = run?.date || dateToISO(defaultRunDate);
  elements.mdEntryTime.value = run ? mdRunTime(run) : timeFromDate(defaultRunDate);
  elements.mdEntryDuration.value = run?.durationMinutes ? formatQuantity(run.durationMinutes) : defaultMdDurationMinutes();
  elements.mdEntryPartySize.value = formatQuantity(mdRunPartySize(run));
  elements.mdEntryLines.replaceChildren();
  if (existingEntries.length > 0) {
    existingEntries.forEach((entry) => addMdEntryLine(entry));
  } else {
    replaceMdEntryLines(mdDefaultEntryRows(md));
  }
  elements.mdEntryModal.classList.remove("hidden");
  window.requestAnimationFrame(() => elements.mdEntryLines.querySelector(".md-entry-line-item")?.focus());
}

function applySelectedMdDefaultsToEntryLines() {
  const previousValue = elements.mdEntryMd.dataset.previousValue || "";
  const md = state.mdDungeons.find((candidate) => candidate.id === elements.mdEntryMd.value);
  if (!md) {
    if (hasMdEntryDraft()) {
      const confirmed = window.confirm("入力中の明細行をクリアしますか？");
      if (!confirmed) {
        elements.mdEntryMd.value = previousValue;
        return;
      }
    }
    elements.mdEntryMd.dataset.previousValue = "";
    replaceMdEntryLines([]);
    return;
  }
  if (hasMdEntryDraft()) {
    const confirmed = window.confirm("MD構成に紐づくアイテムで明細行を置き換えますか？");
    if (!confirmed) {
      elements.mdEntryMd.value = previousValue;
      return;
    }
  }
  replaceMdEntryLines(mdDefaultEntryRows(md));
  elements.mdEntryMd.dataset.previousValue = md.id;
}

function replaceMdEntryLines(rows = []) {
  elements.mdEntryLines.replaceChildren();
  if (rows.length > 0) {
    rows.forEach((row) => addMdEntryLine(row));
  } else {
    addMdEntryLine();
  }
  updateMdEntryTotals();
}

function mdDefaultEntryRows(md) {
  return normalizeMdDefaultItems(md?.defaultItems).map((itemName) => {
    const item = findItem(itemName);
    return {
      type: "income",
      item: itemName,
      unitPrice: item?.amount || 0,
      quantity: 1,
    };
  });
}

function mdEntriesForRun(run) {
  const direct = state.entries.filter((entry) => entry.mdRunId === run.id);
  if (direct.length > 0) return direct.sort(compareEntriesOldestFirst);

  const runTime = mdRunTime(run);
  const fallback = state.entries.filter((entry) => {
    if (entry.mdId !== run.mdId || entry.date !== run.date) return false;
    return !runTime || (entry.time || "00:00") === runTime;
  });
  return fallback.sort(compareEntriesOldestFirst);
}

function mdRunTime(run) {
  return timeFromDate(mdRunDateTime(run));
}

function compareEntriesOldestFirst(a, b) {
  return entryDateTime(a) - entryDateTime(b) || entryOrderValue(a) - entryOrderValue(b);
}

function closeMdEntryModal(force = false) {
  if (!force && hasMdEntryDraft()) {
    const confirmed = window.confirm("入力中のMD明細がある場合、保存せずに閉じますか？");
    if (!confirmed) return;
  }
  elements.mdEntryModal.classList.add("hidden");
  state.mdEntryContext = null;
}

function hasMdEntryDraft() {
  if (!elements.mdEntryModal || elements.mdEntryModal.classList.contains("hidden")) return false;
  return [...elements.mdEntryLines.querySelectorAll(".md-entry-line")].some((line) => {
    return Boolean(
      line.querySelector(".md-entry-line-item").value.trim()
      || line.querySelector(".md-entry-line-price").value.trim()
      || line.querySelector(".md-entry-line-amount").value.trim(),
    );
  });
}

function defaultMdDurationMinutes() {
  const elapsedMs = mdElapsedMilliseconds();
  if (!Number.isFinite(elapsedMs)) return "";
  return String(Math.max(0, Math.round(elapsedMs / 60000)));
}

function mdRunPartySize(run) {
  const value = Number(run?.partySize || 1);
  return Number.isFinite(value) && value >= 1 ? Math.floor(value) : 1;
}

function startMdTimer() {
  const startedAt = new Date();
  state.mdStartTime = timeFromDate(startedAt);
  state.mdStartAt = startedAt.toISOString();
  state.mdStoppedElapsedMs = 0;
  elements.mdStartTime.value = state.mdStartTime;
  localStorage.setItem(MD_START_TIME_STORAGE_KEY, state.mdStartTime);
  localStorage.setItem(MD_START_AT_STORAGE_KEY, state.mdStartAt);
  localStorage.removeItem(MD_STOPPED_ELAPSED_STORAGE_KEY);
  updateMdElapsedTime();
}

function stopMdTimer() {
  const elapsedMs = mdElapsedMilliseconds();
  if (!Number.isFinite(elapsedMs)) return;
  state.mdStoppedElapsedMs = Math.max(0, elapsedMs);
  state.mdStartAt = "";
  localStorage.setItem(MD_STOPPED_ELAPSED_STORAGE_KEY, String(state.mdStoppedElapsedMs));
  localStorage.removeItem(MD_START_AT_STORAGE_KEY);
  updateMdElapsedTime();
}

function resetMdTimer() {
  state.mdStartTime = "";
  state.mdStartAt = "";
  state.mdStoppedElapsedMs = 0;
  elements.mdStartTime.value = "";
  localStorage.removeItem(MD_START_TIME_STORAGE_KEY);
  localStorage.removeItem(MD_START_AT_STORAGE_KEY);
  localStorage.removeItem(MD_STOPPED_ELAPSED_STORAGE_KEY);
  updateMdElapsedTime();
}

function mdElapsedMilliseconds() {
  if (Number(state.mdStoppedElapsedMs || 0) > 0) return Number(state.mdStoppedElapsedMs);
  if (state.mdStartAt) {
    const startedAt = new Date(state.mdStartAt);
    const startedTime = startedAt.getTime();
    if (Number.isFinite(startedTime)) return Date.now() - startedTime;
  }
  if (!state.mdStartTime) return Number.NaN;
  const [startHour, startMinute] = state.mdStartTime.split(":").map(Number);
  if (!Number.isFinite(startHour) || !Number.isFinite(startMinute)) return Number.NaN;
  const now = new Date();
  const start = new Date(now);
  start.setHours(startHour, startMinute, 0, 0);
  if (start > now) start.setDate(start.getDate() - 1);
  return now - start;
}

function updateMdElapsedTime() {
  if (!elements.mdElapsedTime) return;
  const elapsedMs = mdElapsedMilliseconds();
  if (!Number.isFinite(elapsedMs)) {
    elements.mdElapsedTime.textContent = "経過 --分";
    return;
  }
  const totalSeconds = Math.max(0, Math.floor(elapsedMs / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  elements.mdElapsedTime.textContent = `経過 ${minutes}分${String(seconds).padStart(2, "0")}秒`;
}

function updateMdEntryOptions(selectedMdId = "") {
  setSelectOptionsWithBlank(
    elements.mdEntryMd,
    state.mdDungeons.map((md) => ({ value: md.id, label: md.name })),
    "MDを選択",
  );
  if (selectedMdId && state.mdDungeons.some((md) => md.id === selectedMdId)) elements.mdEntryMd.value = selectedMdId;
}

function addMdEntryLine(row = {}) {
  const line = elements.mdEntryLineTemplate.content.firstElementChild.cloneNode(true);
  line.dataset.entryId = row.id || "";
  line.querySelector(".md-entry-line-type").value = row.type || "income";
  line.querySelector(".md-entry-line-item").value = row.item || "";
  line.querySelector(".md-entry-line-price").value = row.unitPrice ? formatAmount(row.unitPrice) : "";
  line.querySelector(".md-entry-line-quantity").value = row.quantity ? formatQuantity(row.quantity) : "1";
  updateMdEntryLineAmount(line);
  updateMdEntryLineAccent(line);
  elements.mdEntryLines.append(line);
  updateMdEntryTotals();
}

function updateMdEntryLineAccent(line) {
  if (!line) return;
  const type = line.querySelector(".md-entry-line-type").value;
  line.classList.toggle("expense-line", type === "expense");
  line.classList.toggle("income-line", type !== "expense");
}

function updateMdEntryLineAmount(line) {
  if (!line) return;
  const priceInput = line.querySelector(".md-entry-line-price");
  if (!priceInput.value.trim()) {
    line.querySelector(".md-entry-line-amount").value = "";
    updateMdEntryTotals();
    return;
  }
  const quantity = parseQuantityInput(line.querySelector(".md-entry-line-quantity").value);
  const unitPrice = parseAmount(priceInput.value);
  const totalAmount = quantity > 0 && unitPrice >= 0 ? Math.round(quantity * unitPrice) : 0;
  line.querySelector(".md-entry-line-amount").value = totalAmount > 0 ? formatAmount(splitMdEntryAmount(totalAmount, mdEntryPartySize())) : "";
  updateMdEntryTotals();
}

function refreshMdEntryLineAmounts() {
  elements.mdEntryLines.querySelectorAll(".md-entry-line").forEach(updateMdEntryLineAmount);
  updateMdEntryTotals();
}

function updateMdEntryTotals() {
  if (!elements.mdEntryTotalAmount || !elements.mdEntryHourlyAmount) return;
  let total = 0;
  for (const line of elements.mdEntryLines.querySelectorAll(".md-entry-line")) {
    const amount = parseAmount(line.querySelector(".md-entry-line-amount").value);
    const type = line.querySelector(".md-entry-line-type").value;
    total += type === "expense" ? -amount : amount;
  }

  elements.mdEntryTotalAmount.textContent = formatSignedYen(total);
  elements.mdEntryTotalAmount.classList.toggle("income-text", total >= 0);
  elements.mdEntryTotalAmount.classList.toggle("expense-text", total < 0);

  const durationMinutes = parseQuantityInput(elements.mdEntryDuration.value);
  if (!durationMinutes || durationMinutes <= 0) {
    elements.mdEntryHourlyAmount.textContent = "--";
    elements.mdEntryHourlyAmount.classList.remove("income-text", "expense-text");
    return;
  }

  const hourly = Math.round(total / (durationMinutes / 60));
  elements.mdEntryHourlyAmount.textContent = `${formatSignedYen(hourly)}/h`;
  elements.mdEntryHourlyAmount.classList.toggle("income-text", hourly >= 0);
  elements.mdEntryHourlyAmount.classList.toggle("expense-text", hourly < 0);
}

function saveMdEntry() {
  const md = state.mdDungeons.find((candidate) => candidate.id === elements.mdEntryMd.value);
  if (!md) return;
  if (!validateNotFutureDate(elements.mdEntryDate.value)) return;
  if (!confirmDistantYear(elements.mdEntryDate.value)) return;

  const rows = mdEntryLineRows();
  if (rows.length === 0) return;
  const partySize = mdEntryPartySize();
  elements.mdEntryPartySize.value = formatQuantity(partySize);

  const baseEntry = {
    date: elements.mdEntryDate.value,
    time: elements.mdEntryTime.value || currentTime(),
  };
  const mdRunId = upsertMdRunFromMdEntry(baseEntry, md);
  const savedIds = [];
  const entries = rows.map((row) => {
    const entry = row.entryId
      ? state.entries.find((candidate) => candidate.id === row.entryId) || { id: row.entryId, createdAt: Date.now() }
      : { id: crypto.randomUUID(), createdAt: Date.now() };
    entry.type = row.type;
    entry.date = baseEntry.date;
    entry.time = baseEntry.time;
    entry.amount = row.amount;
    entry.mdTotalAmount = row.totalAmount;
    entry.mdPartySize = partySize;
    entry.map = "";
    entry.item = row.item;
    entry.mdId = md.id;
    entry.mdName = md.name;
    entry.mdRunId = mdRunId;
    entry.quantity = row.quantity || 1;
    entry.unitPrice = row.unitPrice;
    entry.tags = normalizeTags(entry.tags);
    savedIds.push(entry.id);
    if (!state.entries.some((candidate) => candidate.id === entry.id)) state.entries.push(entry);
    return entry;
  });

  const oldIds = new Set(state.mdEntryContext?.entryIds || []);
  state.entries = state.entries.filter((entry) => !oldIds.has(entry.id) || savedIds.includes(entry.id));
  saveEntries();
  state.periodStart = rangeKey(getRangeStart(entryDateTime(entries[0])));
  state.selectedSummaryKey = state.periodStart;
  updatePeriodLabel();
  closeMdEntryModal(true);
  render();
}

function mdEntryLineRows() {
  const rows = [];
  for (const line of elements.mdEntryLines.querySelectorAll(".md-entry-line")) {
    updateMdEntryLineAmount(line);
    const item = line.querySelector(".md-entry-line-item").value.trim();
    const unitPrice = parseAmount(line.querySelector(".md-entry-line-price").value);
    const quantity = parseQuantityInput(line.querySelector(".md-entry-line-quantity").value);
    const totalAmount = quantity > 0 && unitPrice >= 0 ? Math.round(quantity * unitPrice) : 0;
    const amount = parseAmount(line.querySelector(".md-entry-line-amount").value);
    if (!item) continue;
    if (!validateEntryNumbers(unitPrice, quantity, totalAmount)) return [];
    rows.push({
      entryId: line.dataset.entryId || "",
      type: line.querySelector(".md-entry-line-type").value,
      item,
      unitPrice,
      quantity,
      amount,
      totalAmount,
    });
  }
  return rows;
}

function mdEntryPartySize() {
  const value = parseQuantityInput(elements.mdEntryPartySize.value);
  return Number.isFinite(value) && value >= 1 ? Math.floor(value) : 1;
}

function splitMdEntryAmount(amount, partySize) {
  return Math.round((Number(amount) || 0) / Math.max(1, partySize));
}

function upsertMdRunFromMdEntry(entry, md) {
  const context = state.mdEntryContext;
  const durationMinutes = parseQuantityInput(elements.mdEntryDuration.value) || 0;
  const partySize = mdEntryPartySize();
  if (context?.runId && context.mdId === md.id) {
    const run = state.mdRuns.find((candidate) => candidate.id === context.runId);
    if (run) {
      run.date = entry.date;
      run.mdId = md.id;
      run.mdName = md.name;
      run.occurredAt = mdEntryOccurredAt(entry.date, entry.time);
      run.durationMinutes = durationMinutes;
      run.partySize = partySize;
      saveMdRuns();
      return run.id;
    }
    return "";
  }
  if (!context?.characterId || (context.wasChecked && context.mdId === md.id)) return "";
  const character = state.characters.find((candidate) => candidate.id === context.characterId);
  if (!character) return "";

  const occurredAt = mdEntryOccurredAt(entry.date, entry.time);
  const referenceDate = new Date(occurredAt);
  if (mdRunCountInPeriod(character.id, md, referenceDate) >= mdPeriodLimit(md)) return "";

  const run = {
    id: crypto.randomUUID(),
    date: entry.date,
    characterId: character.id,
    characterName: character.name,
    mdId: md.id,
    mdName: md.name,
    source: "manual",
    durationMinutes,
    partySize,
    occurredAt,
    createdAt: new Date().toISOString(),
  };
  state.mdRuns.push(run);
  saveMdRuns();
  return run.id;
}

function mdEntryOccurredAt(date, time) {
  const value = new Date(`${date}T${time || "00:00"}:00`);
  return Number.isNaN(value.getTime()) ? new Date().toISOString() : value.toISOString();
}

function renderMdManagement() {
  updateMdLayoutToggle();
  updateMdMonitorCharacterOptions();
  updateMdActionGuide();
  renderMdWeekGrid();
}

function isMdManagementInteractive() {
  return state.periodMode === "week";
}

function updateMdActionGuide() {
  if (!elements.mdActionGuide) return;
  elements.mdActionGuide.textContent = isMdManagementInteractive()
    ? "MD完了時は左クリックでチェック、右クリックで明細付きチェック。"
    : "週間モードにしてください";
}

function updateMdMonitorCharacterOptions() {
  if (!elements.mdMonitorCharacter) return;
  const current = state.mdMonitorCharacterId;
  elements.mdMonitorCharacter.replaceChildren();
  const emptyOption = document.createElement("option");
  emptyOption.value = "";
  emptyOption.textContent = "選択してください";
  elements.mdMonitorCharacter.append(emptyOption);
  for (const character of state.characters) {
    const option = document.createElement("option");
    option.value = character.id;
    option.textContent = character.name;
    elements.mdMonitorCharacter.append(option);
  }
  if (state.characters.some((character) => character.id === current)) {
    elements.mdMonitorCharacter.value = current;
  } else {
    state.mdMonitorCharacterId = "";
    localStorage.removeItem(MD_MONITOR_CHARACTER_STORAGE_KEY);
  }
}

function toggleMdMonitorConnection() {
  if (state.mdMonitorConnected) {
    stopMdMonitorPolling();
    updateMdMonitorStatus("取得しました");
    return;
  }
  startMdMonitorPolling();
}

function startMdMonitorPolling() {
  state.mdMonitorConnected = true;
  elements.mdMonitorConnect.textContent = "監視中停止";
  fetchMdMonitorEvents();
  state.mdMonitorTimer = window.setInterval(fetchMdMonitorEvents, 3000);
}

function stopMdMonitorPolling() {
  state.mdMonitorConnected = false;
  elements.mdMonitorConnect.textContent = "監視開始";
  if (state.mdMonitorTimer) window.clearInterval(state.mdMonitorTimer);
  state.mdMonitorTimer = null;
}

async function fetchMdMonitorEvents() {
  try {
    const response = await fetch("http://127.0.0.1:18765/events", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const imported = importMdMonitorEvents(Array.isArray(data.events) ? data.events : []);
    updateMdMonitorStatus(imported > 0 ? `${imported}件を取得` : formatMdMonitorStatus(data.status));
  } catch (error) {
    updateMdMonitorStatus("監視接続に失敗しました");
    if (state.mdMonitorConnected) stopMdMonitorPolling();
  }
}

function formatMdMonitorStatus(status) {
  if (!status) return "未接続";
  if (status.lastError) return `監視エラー: ${status.lastError}`;
  if (status.detectedMdIdName) {
    return `監視: ${status.detectedMdIdName} を検出`;
  }
  const count = Number(status.candidateCount || 0);
  if (count > 0) {
    const candidates = Array.isArray(status.candidates) ? status.candidates : [];
    const preview = candidates
      .map((candidate) => String(candidate.text || "").trim())
      .filter(Boolean)
      .slice(0, 1)
      .join(" / ");
    return preview ? `監視: MD候補 ${count}件 ${preview}` : "監視中";
  }
  if (status.lastScanAt) return "監視中";
  return "監視";
}

function importMdMonitorEvents(events) {
  let imported = 0;
  for (const event of events) {
    const eventId = String(event.id || "");
    if (!eventId || state.mdMonitorImportedIds.has(eventId)) continue;
    const eventMdIdName = normalizeMdIdNameForMatch(event.mdIdName);
    const md = state.mdDungeons.find((candidate) => normalizeMdIdNameForMatch(candidate.idName) === eventMdIdName);
    const character = resolveMonitorCharacter(event);
    if (!md || !character) continue;
    const date = monitorEventDate(event);
    const occurredAt = event.detectedAt || new Date().toISOString();
    const occurredDate = new Date(occurredAt);
    const referenceDate = Number.isNaN(occurredDate.getTime()) ? new Date() : occurredDate;
    state.mdMonitorImportedIds.add(eventId);
    if (!mdRunExists(character.id, md.id, date) && mdRunCountInPeriod(character.id, md, referenceDate) < mdPeriodLimit(md)) {
      state.mdRuns.push({
        id: crypto.randomUUID(),
        date,
        characterId: character.id,
        characterName: character.name,
        mdId: md.id,
        mdName: md.name,
        source: "auto",
        partySize: 1,
        monitorEventId: eventId,
        occurredAt,
        createdAt: new Date().toISOString(),
      });
      imported += 1;
    }
  }
  if (imported > 0) {
    saveMdRuns();
    renderMdManagement();
  }
  saveMdMonitorImportedIds();
  return imported;
}

function normalizeMdIdNameForMatch(value) {
  return String(value || "").trim().replace(/\s+/g, " ").toLowerCase();
}

function resolveMonitorCharacter(event) {
  const detectedName = String(event.characterName || "").trim();
  if (detectedName) {
    const matched = state.characters.find((character) => character.name === detectedName);
    if (matched) return matched;
  }
  return state.characters.find((character) => character.id === state.mdMonitorCharacterId) || null;
}

function monitorEventDate(event) {
  const detectedAt = event.detectedAt ? new Date(event.detectedAt) : new Date();
  if (Number.isNaN(detectedAt.getTime())) return todayISO();
  return `${detectedAt.getFullYear()}-${String(detectedAt.getMonth() + 1).padStart(2, "0")}-${String(detectedAt.getDate()).padStart(2, "0")}`;
}

function mdRunExists(characterId, mdId, date) {
  return state.mdRuns.some((run) => run.characterId === characterId && run.mdId === mdId && run.date === date);
}

function mdRunCountInPeriod(characterId, md, referenceDate = new Date()) {
  const period = mdResetPeriod(md, referenceDate);
  return state.mdRuns.filter((run) => {
    if (run.characterId !== characterId || run.mdId !== md.id) return false;
    const time = mdRunDateTime(run);
    return time >= period.start && time < period.end;
  }).length;
}

function updateMdMonitorStatus(message) {
  elements.mdMonitorStatus.textContent = message;
}

function renderMdWeekGrid() {
  elements.mdWeekGrid.replaceChildren();
  const visibleDungeons = visibleMdDungeons();
  if (state.characters.length === 0 || state.mdDungeons.length === 0) {
    elements.mdWeekGrid.textContent = "キャラクターとMDを設定タブで登録してください";
    return;
  }
  if (visibleDungeons.length === 0) {
    elements.mdWeekGrid.textContent = "MD管理に表示するMDがありません";
    return;
  }

  const displayPeriod = mdManagementDisplayPeriod();
  const runMap = new Map();
  for (const run of state.mdRuns) {
    const key = `${run.characterId}:${run.mdId}`;
    const rows = runMap.get(key) || [];
    rows.push(run);
    runMap.set(key, rows);
  }

  const table = document.createElement("div");
  table.className = "md-week-table";
  table.classList.toggle("readonly", !isMdManagementInteractive());
  const isDungeonRows = state.mdLayout === "dungeonRows";
  table.classList.toggle("dungeon-rows", isDungeonRows);
  table.classList.toggle("character-rows", !isDungeonRows);

  if (isDungeonRows) {
    table.style.setProperty("--md-data-column-count", String(state.characters.length));
    table.append(mdWeekCell("MD", "md-week-head md-sticky-cell"));
    for (const character of state.characters) table.append(makeMdDraggableHeader(mdCharacterHeaderCell(character), "character", character.id));

    for (const md of visibleDungeons) {
      table.append(makeMdDraggableHeader(mdDungeonCell(md, true), "md", md.id));
      for (const character of state.characters) {
        const runs = mdRunsForCell(runMap, character.id, md.id, displayPeriod);
        table.append(mdRunSlotCell(character, md, runs));
      }
    }
  } else {
    table.style.setProperty("--md-data-column-count", String(visibleDungeons.length));
    table.style.setProperty("--md-data-column-width", `${mdColumnWidthForCharacterRows(visibleDungeons)}px`);
    table.append(mdWeekCell("キャラクター", "md-week-head md-sticky-cell"));
    for (const md of visibleDungeons) table.append(makeMdDraggableHeader(mdDungeonHeaderCell(md), "md", md.id));

    for (const character of state.characters) {
      table.append(makeMdDraggableHeader(mdCharacterCell(character, true), "character", character.id));
      for (const md of visibleDungeons) {
        const runs = mdRunsForCell(runMap, character.id, md.id, displayPeriod);
        table.append(mdRunSlotCell(character, md, runs));
      }
    }
  }
  applyMdGridSelection(table);
  elements.mdWeekGrid.append(table);
}

function visibleMdDungeons() {
  return state.mdDungeons.filter((md) => !md.hiddenFromManagement);
}

function mdColumnWidthForCharacterRows(dungeons) {
  const widestLineUnits = dungeons.reduce((max, md) => {
    return Math.max(max, ...wrapByDisplayUnits(md.name, 10).map(displayWidthUnits));
  }, 0);
  return Math.max(116, Math.ceil(Math.min(10, widestLineUnits) * 7 + 58));
}

function displayWidthUnits(value) {
  return [...String(value || "")].reduce((total, char) => total + (char.charCodeAt(0) > 0xff ? 2 : 1), 0);
}

function wrapByDisplayUnits(value, maxUnits) {
  const lines = [];
  let line = "";
  let units = 0;
  for (const char of String(value || "")) {
    const charUnits = char.charCodeAt(0) > 0xff ? 2 : 1;
    if (line && units + charUnits > maxUnits) {
      lines.push(line);
      line = "";
      units = 0;
    }
    line += char;
    units += charUnits;
  }
  if (line || lines.length === 0) lines.push(line);
  return lines;
}

function mdRunsForCell(runMap, characterId, mdId, displayPeriod = mdManagementDisplayPeriod()) {
  const md = state.mdDungeons.find((candidate) => candidate.id === mdId);
  if (!md) return [];
  const period = normalizeMdResetType(md.resetType) === "daily" ? displayPeriod : mdResetPeriod(md, displayPeriod.start);
  return (runMap.get(`${characterId}:${mdId}`) || [])
    .filter((run) => {
      const time = mdRunDateTime(run);
      return time >= period.start && time < period.end;
    })
    .sort((a, b) => mdRunDateTime(a) - mdRunDateTime(b));
}

function mdManagementDisplayPeriod() {
  const start = parseRangeKey(state.periodStart);
  const periodStart = state.periodMode === "week" ? start : getWeekStart(start);
  const periodEnd = getWeekEnd(periodStart);
  return { start: periodStart, end: new Date(periodEnd.getTime() + 60 * 1000) };
}

function mdRunDateForSelectedPeriod() {
  const period = mdManagementDisplayPeriod();
  const now = new Date();
  if (now >= period.start && now < period.end) return now;
  return new Date(period.start);
}

function timeFromDate(date) {
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function mdWeekCell(text, className) {
  const cell = document.createElement("div");
  cell.className = `md-week-cell ${className}`;
  cell.textContent = text;
  return cell;
}

function makeMdDraggableHeader(cell, type, id) {
  cell.classList.add("md-draggable-header");
  cell.draggable = true;
  cell.dataset.dragType = type;
  cell.dataset.dragId = id;
  cell.title = "ドラッグで並び替え";
  return cell;
}

function selectMdGridAxis(type, id) {
  if (!["character", "md"].includes(type) || !id) return;
  const selection = state.mdGridSelection || { characterId: "", mdId: "" };
  const key = type === "character" ? "characterId" : "mdId";
  state.mdGridSelection = {
    ...selection,
    [key]: selection[key] === id ? "" : id,
  };
  applyMdGridSelection();
}

function clearMdGridSelection() {
  if (!state.mdGridSelection?.characterId && !state.mdGridSelection?.mdId) return;
  state.mdGridSelection = { characterId: "", mdId: "" };
  applyMdGridSelection();
}

function applyMdGridSelection(root = elements.mdWeekGrid) {
  if (!root) return;
  root.querySelectorAll(".md-axis-selected, .md-axis-origin, .md-axis-intersection").forEach((cell) => {
    cell.classList.remove("md-axis-selected", "md-axis-origin", "md-axis-intersection");
  });
  const selection = state.mdGridSelection;
  if (!selection?.characterId && !selection?.mdId) return;

  if (selection.characterId) {
    const characterId = cssEscape(selection.characterId);
    root.querySelectorAll(`.md-week-slot-cell[data-character-id="${characterId}"]`).forEach((cell) => {
      cell.classList.add("md-axis-selected");
    });
    root.querySelectorAll(`.md-draggable-header[data-drag-type="character"][data-drag-id="${characterId}"]`).forEach((cell) => {
      cell.classList.add("md-axis-selected", "md-axis-origin");
    });
  }

  if (selection.mdId) {
    const mdId = cssEscape(selection.mdId);
    root.querySelectorAll(`.md-week-slot-cell[data-md-id="${mdId}"]`).forEach((cell) => {
      cell.classList.add("md-axis-selected");
    });
    root.querySelectorAll(`.md-draggable-header[data-drag-type="md"][data-drag-id="${mdId}"]`).forEach((cell) => {
      cell.classList.add("md-axis-selected", "md-axis-origin");
    });
  }

  if (selection.characterId && selection.mdId) {
    root
      .querySelectorAll(`.md-week-slot-cell[data-character-id="${cssEscape(selection.characterId)}"][data-md-id="${cssEscape(selection.mdId)}"]`)
      .forEach((cell) => cell.classList.add("md-axis-intersection"));
  }
}

function cssEscape(value) {
  return window.CSS?.escape ? CSS.escape(String(value)) : String(value).replace(/["\\]/g, "\\$&");
}

function handleMdHeaderDragStart(event) {
  if (event.target.closest("button")) {
    event.preventDefault();
    return;
  }
  const header = event.target.closest(".md-draggable-header");
  if (!header) return;
  state.mdDrag = {
    type: header.dataset.dragType,
    id: header.dataset.dragId,
  };
  header.classList.add("dragging");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", `${state.mdDrag.type}:${state.mdDrag.id}`);
}

function handleMdHeaderDragOver(event) {
  const target = event.target.closest(".md-draggable-header");
  if (!target || !state.mdDrag || target.dataset.dragType !== state.mdDrag.type) return;
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  clearMdHeaderDropTargets();
  if (target.dataset.dragId !== state.mdDrag.id) target.classList.add("drop-target");
}

function handleMdHeaderDragLeave(event) {
  const target = event.target.closest(".md-draggable-header");
  if (!target || target.contains(event.relatedTarget)) return;
  target.classList.remove("drop-target");
}

function handleMdHeaderDrop(event) {
  const target = event.target.closest(".md-draggable-header");
  if (!target || !state.mdDrag || target.dataset.dragType !== state.mdDrag.type) return;
  event.preventDefault();
  reorderMdHeader(state.mdDrag.type, state.mdDrag.id, target.dataset.dragId);
  handleMdHeaderDragEnd();
}

function handleMdHeaderDragEnd() {
  state.mdDrag = null;
  elements.mdWeekGrid.querySelectorAll(".md-draggable-header.dragging").forEach((cell) => cell.classList.remove("dragging"));
  clearMdHeaderDropTargets();
}

function clearMdHeaderDropTargets() {
  elements.mdWeekGrid.querySelectorAll(".md-draggable-header.drop-target").forEach((cell) => cell.classList.remove("drop-target"));
}

function reorderMdHeader(type, sourceId, targetId) {
  if (!sourceId || !targetId || sourceId === targetId) return;
  const rows = type === "character" ? state.characters : state.mdDungeons;
  const sourceIndex = rows.findIndex((row) => row.id === sourceId);
  const targetIndex = rows.findIndex((row) => row.id === targetId);
  if (sourceIndex < 0 || targetIndex < 0) return;
  const [moved] = rows.splice(sourceIndex, 1);
  rows.splice(targetIndex, 0, moved);
  if (type === "character") {
    saveCharacters();
    renderCharacterList();
  } else {
    saveMdDungeons();
    renderMdList();
    renderSummaryViews();
  }
  renderMdWeekGrid();
}

function mdRunSlotCell(character, md, runs) {
  const cell = document.createElement("div");
  cell.className = "md-week-cell md-week-slot-cell";
  cell.dataset.characterId = character.id;
  cell.dataset.mdId = md.id;
  const isReadonly = !isMdManagementInteractive();
  const isLocked = !canCharacterEnterMd(character, md);
  const limit = mdPeriodLimit(md);
  cell.classList.toggle("completed", runs.length >= limit);
  cell.classList.toggle("incomplete", runs.length < limit);
  cell.classList.toggle("level-locked", isLocked);
  const slots = runs.slice(0, limit);
  while (slots.length < limit) slots.push(null);
  cell.innerHTML = isLocked
    ? `<div class="md-slot-summary">Lv.${formatLevel(md.conditionLevel)}必要</div>`
    : `
      <div class="md-run-slots">
        ${slots.map((run) => `
          <button class="md-run-slot ${run ? "checked" : ""}" type="button"
            data-character-id="${escapeHTML(character.id)}"
            data-md-id="${escapeHTML(md.id)}"
            data-run-id="${run ? escapeHTML(run.id) : ""}"
            ${isReadonly ? "disabled" : ""}
            title="${isReadonly ? "週間モードで操作してください" : `左クリック: 周回${run ? "取消" : "登録"} / 右クリック: MD明細追加`}"
            aria-label="${escapeHTML(character.name)} ${escapeHTML(md.name)} ${isReadonly ? "月間モードでは操作不可" : run ? "取り消し" : "登録"}">
            <span class="md-run-orb" aria-hidden="true"></span>
            <small>${run ? escapeHTML(formatDate(run.date)) : ""}</small>
          </button>
        `).join("")}
      </div>
    `;
  return cell;
}

function mdCharacterCell(character, sticky = false) {
  const cell = document.createElement("div");
  cell.className = `md-week-cell md-week-character${sticky ? " md-sticky-cell" : ""}`;
  cell.innerHTML = `
    <span class="character-icon">${character.icon ? `<img src="${escapeHTML(character.icon)}" alt="" />` : escapeHTML(character.name.slice(0, 1))}</span>
    <strong>${escapeHTML(character.name)}</strong>
  `;
  return cell;
}

function mdCharacterHeaderCell(character) {
  const cell = mdCharacterCell(character);
  cell.classList.add("md-week-head", "md-week-character-head");
  return cell;
}

function mdDungeonCell(md, sticky = false) {
  const cell = document.createElement("div");
  cell.className = `md-week-cell md-week-dungeon${sticky ? " md-sticky-cell" : ""}`;
  cell.innerHTML = `
    <div class="md-dungeon-title-row">
      <strong>${escapeHTML(md.name)}</strong>
      <button class="md-visibility-button md-week-hide-button" type="button"
        data-id="${escapeHTML(md.id)}"
        aria-label="MD管理で非表示"
        title="MD管理で非表示">
        <span class="md-eye-icon" aria-hidden="true"></span>
      </button>
    </div>
    <small>${escapeHTML(md.idName || "")}</small>
    <small>${escapeHTML(mdResetLabel(md))}</small>
  `;
  return cell;
}

function mdDungeonHeaderCell(md) {
  const cell = document.createElement("div");
  cell.className = "md-week-cell md-week-head md-week-dungeon-head";
  cell.innerHTML = `
    <div class="md-dungeon-title-row">
      <strong>${wrapByDisplayUnits(md.name, 10).map(escapeHTML).join("<br>")}</strong>
      <button class="md-visibility-button md-week-hide-button" type="button"
        data-id="${escapeHTML(md.id)}"
        aria-label="MD管理で非表示"
        title="MD管理で非表示">
        <span class="md-eye-icon" aria-hidden="true"></span>
      </button>
    </div>
  `;
  return cell;
}

function updateMdLayoutToggle() {
  elements.mdLayoutButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mdLayout === state.mdLayout);
  });
}

function mdResetPeriod(md, now = new Date()) {
  if (normalizeMdResetType(md.resetType) === "daily") {
    const start = new Date(now);
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setDate(end.getDate() + 1);
    return { start, end };
  }
  const start = getWeekStart(now);
  const end = new Date(start);
  end.setDate(end.getDate() + 7);
  return { start, end };
}

function mdRunDateTime(run) {
  const source = run.occurredAt || `${run.date}T00:00:00`;
  const date = new Date(source);
  return Number.isNaN(date.getTime()) ? new Date(`${run.date}T00:00:00`) : date;
}

function normalizeMdResetType(value) {
  return Object.prototype.hasOwnProperty.call(MD_RESET_TYPES, value) ? value : "weekly1";
}

function mdPeriodLimit(md) {
  const type = normalizeMdResetType(md.resetType);
  return MD_RESET_TYPES[type].limit;
}

function mdResetLabel(md) {
  const type = normalizeMdResetType(md.resetType);
  return `${MD_RESET_TYPES[type].label} (${MD_RESET_TYPES[type].limit}回/週)`;
}

function addMdTagLink() {
  const tags = getTagValues(elements.mdTagLinkTag);
  const map = elements.mdTagLinkMap.value;
  const mdId = elements.mdTagLinkMd.value;
  if ((tags.length === 0 && !map) || !mdId) return;
  const md = state.mdDungeons.find((row) => row.id === mdId);
  if (!md) return;
  let changedCount = 0;
  const targetTagSet = new Set(tags);
  for (const entry of state.entries) {
    const entryTags = normalizeTags(entry.tags);
    const matchesTag = targetTagSet.size > 0 && entryTags.some((tag) => targetTagSet.has(tag));
    const matchesMap = Boolean(map && entry.map === map);
    if (!matchesTag && !matchesMap) continue;
    entry.mdId = md.id;
    entry.mdName = md.name;
    changedCount += 1;
  }
  setTagValues(elements.mdTagLinkTag, elements.mdTagLinkTagChipList, []);
  elements.mdTagLinkMap.value = "";
  saveEntries();
  refreshConfigurationViews();
  const conditions = [];
  if (targetTagSet.size > 0) conditions.push(`タグ ${tags.join(", ")}`);
  if (map) conditions.push(`グループ ${map}`);
  window.alert(`${conditions.join(" または ")} に一致する明細 ${changedCount}件をMD「${md.name}」へ紐づけしました。`);
  renderSummaryViews();
  renderItemSearchResults();
}

function submitMdTagLinkOnEnter(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    if (!elements.addMdTagLink.disabled) addMdTagLink();
  }
}

function updateMdTagApplyButton() {
  const enabled = Boolean((getTagValues(elements.mdTagLinkTag).length > 0 || elements.mdTagLinkMap.value) && elements.mdTagLinkMd.value);
  elements.addMdTagLink.disabled = !enabled;
}

function updateMdTagLinkOptions() {
  const selectedMap = elements.mdTagLinkMap.value;
  const selectedMdId = elements.mdTagLinkMd.value;
  setSelectOptionsWithBlank(
    elements.mdTagLinkMap,
    state.maps.map((map) => ({ value: map, label: map })),
    "グループを選択",
    false,
  );
  if (selectedMap && state.maps.includes(selectedMap)) elements.mdTagLinkMap.value = selectedMap;
  setSelectOptionsWithBlank(
    elements.mdTagLinkMd,
    state.mdDungeons.map((md) => ({ value: md.id, label: md.name })),
    "MDを選択",
    true,
  );
  if (selectedMdId && state.mdDungeons.some((md) => md.id === selectedMdId)) elements.mdTagLinkMd.value = selectedMdId;
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

function summaryFilteredEntries(entries = state.entries) {
  const tags = getTagValues(elements.summaryTags);
  if (tags.length === 0) return entries;

  const condition = elements.summaryTagCondition.value || "includeAny";
  return entries.filter((entry) => {
    const entryTags = normalizeTags(entry.tags);
    const matchCount = tags.filter((tag) => entryTags.includes(tag)).length;
    if (condition === "includeAll") return matchCount === tags.length;
    if (condition === "exclude") return matchCount === 0;
    return matchCount > 0;
  });
}

function summaryTagConditionLabel() {
  switch (elements.summaryTagCondition.value) {
  case "includeAll":
      return "すべて含む";
  case "exclude":
      return "除外";
  default:
      return "いずれか含む";
  }
}

function updateSummaryFilterStatus() {
  const tags = getTagValues(elements.summaryTags);
  if (tags.length === 0) {
    elements.summaryFilterStatus.textContent = "全明細を集計中";
    return;
  }

  const count = summaryFilteredEntries().length;
  elements.summaryFilterStatus.textContent = `${tags.join(" ")} / ${summaryTagConditionLabel()} / ${count}件`;
}

function hasSummaryTagFilter() {
  return getTagValues(elements.summaryTags).length > 0;
}

function currentSummaryEntries() {
  const entries = summaryFilteredEntries();
  return state.summaryView === "md" ? entries.filter((entry) => entry.mdId || entry.mdName) : entries;
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
  ensurePeriodSummary(summaries, parseRangeKey(state.periodStart));
  ensurePeriodSummary(summaries, currentMaxPeriodStart());

  for (const entry of currentSummaryEntries()) {
    const start = getRangeStart(entryDateTime(entry));
    const summary = ensurePeriodSummary(summaries, start);
    if (entry.type === "income") summary.income += entry.amount;
    if (entry.type === "expense") summary.expense += entry.amount;
    summary.net = summary.income - summary.expense;
  }

  return [...summaries.values()].sort((a, b) => b.start - a.start);
}

function ensurePeriodSummary(summaries, start) {
  const normalizedStart = getRangeStart(start);
  const key = rangeKey(normalizedStart);
  if (!summaries.has(key)) {
    summaries.set(key, { key, start: normalizedStart, end: getRangeEnd(normalizedStart), income: 0, expense: 0, net: 0 });
  }
  return summaries.get(key);
}

function renderSummaryDetail() {
  elements.summaryDetail.replaceChildren();
  const start = parseRangeKey(state.selectedSummaryKey);
  const end = getRangeEnd(start);
  const entries = currentSummaryEntries().filter((entry) => isEntryInPeriod(entry, start, end));

  const title = document.createElement("div");
  title.className = "summary-detail-title";
  title.innerHTML = `
    <span>選択中の明細分布</span>
    <strong>${escapeHTML(formatPeriod(start, end))}</strong>
  `;
  elements.summaryDetail.append(title);

  const grid = document.createElement("div");
  grid.className = "breakdown-grid";
  if (state.summaryView === "md") {
    grid.append(
      createMdComparisonPanel("MD別収支", aggregateByMd(entries, start, end).sort(compareBreakdownRows), entries, "収支", "net"),
      createMdComparisonPanel("MD別 時給収支", aggregateMdHourly(entries, start, end).sort(compareBreakdownRows).slice(0, 10), entries, "時給収支", "hourly"),
    );
  } else {
    grid.append(
      createBreakdownPanel("タグ別収支", aggregateByTag(entries), "タグ別収支", "件数", entries, "tag"),
      createBreakdownPanel("アイテム/項目別収支", aggregateByItem(entries), "アイテム/項目別収支", "件数", entries, "item"),
    );
  }
  elements.summaryDetail.append(grid);
}

function renderYearChart() {
  elements.yearChart.replaceChildren();
  if (state.summaryView === "md") {
    renderMdComparisonChart();
    return;
  }
  const rows = buildTrendChartRows();
  const width = 960;
  const height = 300;
  const padding = { top: 24, right: 82, bottom: 48, left: 82 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const chartTargetBalance = currentTargetBalance();
  const autoBarMax = niceCeil(Math.max(...rows.flatMap((row) => [row.income, row.expense]), 1));
  const netAutoValues = rows.map((row) => Math.abs(row.net));
  if (state.summaryView !== "md" && !hasSummaryTagFilter()) netAutoValues.push(Math.abs(chartTargetBalance));
  const autoNetMax = niceCeil(Math.max(...netAutoValues, 1));
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
  const targetLine = state.summaryView === "md" ? "" : `
    <line class="chart-target-line" x1="${padding.left}" y1="${targetY}" x2="${width - padding.right}" y2="${targetY}"><title>目標収支 ${yen.format(chartTargetBalance)}</title></line>
    <text class="chart-target-label" x="${width - padding.right - 6}" y="${targetY - 7}" text-anchor="end">目標${formatCompactAmount(chartTargetBalance)}</text>
  `;

  const trendCount = currentTrendPeriodCount();
  elements.trendChartTitle.textContent = `${state.summaryView === "md" ? "MD " : ""}${
    state.periodMode === "week" ? `週次${trendCount}週推移` : `月次${trendCount}か月推移`
  }`;
  elements.yearChart.innerHTML = `
    <svg class="combo-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="過去1年間の収入、支出、収支">
      ${gridLines}
      <line class="chart-axis" x1="${padding.left}" y1="${padding.top + chartHeight}" x2="${width - padding.right}" y2="${padding.top + chartHeight}"></line>
      <line class="chart-axis" x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${padding.top + chartHeight}"></line>
      <line class="chart-axis" x1="${width - padding.right}" y1="${padding.top}" x2="${width - padding.right}" y2="${padding.top + chartHeight}"></line>
      ${bars}
      ${targetLine}
      <polyline class="chart-net-line" points="${points}" pathLength="1"></polyline>
      ${dots}
      <text class="chart-axis-title" x="${padding.left}" y="18">収入 / 支出</text>
      <text class="chart-axis-title" x="${width - padding.right}" y="18" text-anchor="end">収支</text>
    </svg>
    <div class="chart-legend">
      <span><i class="legend-income"></i>収入</span>
      <span><i class="legend-expense"></i>支出</span>
      <span><i class="legend-net"></i>収支</span>
      ${state.summaryView === "md" ? "" : '<span><i class="legend-target"></i>目標収支</span>'}
    </div>
  `;
}

function buildTrendChartRows() {
  return state.periodMode === "week" ? buildWeeklyChartRows() : buildMonthlyChartRows();
}

function selectedTrendBaseDate() {
  const selected = parseRangeKey(state.periodStart);
  return Number.isNaN(selected.getTime()) ? new Date() : selected;
}

function buildMonthlyChartRows() {
  const baseDate = selectedTrendBaseDate();
  const trendCount = currentTrendPeriodCount();
  const months = [];
  for (let offset = trendCount - 1; offset >= 0; offset -= 1) {
    const date = new Date(baseDate.getFullYear(), baseDate.getMonth() - offset, 1);
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
  for (const entry of currentSummaryEntries()) {
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
  const currentStart = getWeekStart(selectedTrendBaseDate());
  const trendCount = currentTrendPeriodCount();
  const weeks = [];
  for (let offset = trendCount - 1; offset >= 0; offset -= 1) {
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
  for (const entry of currentSummaryEntries()) {
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
      addBreakdownTotal(totals, "無タグ", signedAmount);
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
    const label = entry.item || "項目未設定";
    const signedAmount = entry.type === "income" ? entry.amount : -entry.amount;
    addBreakdownTotal(totals, label, signedAmount, entryQuantity(entry));
  }
  return [...totals.entries()]
    .map(([label, value]) => ({ label, amount: value.amount, count: value.count }))
    .sort(compareBreakdownRows);
}

function aggregateByMd(entries, start = null, end = null) {
  const totals = new Map();
  for (const entry of entries) {
    const label = entryMdName(entry) || "未分類MD";
    const signedAmount = entry.type === "income" ? entry.amount : -entry.amount;
    addBreakdownTotal(totals, label, signedAmount);
  }
  if (start && end) {
    for (const run of state.mdRuns) {
      const time = mdRunDateTime(run);
      if (time < start || time >= end) continue;
      const label = run.mdName || mdNameById(run.mdId) || "未分類MD";
      const current = totals.get(label);
      if (!current) continue;
      current.runCount = (current.runCount || 0) + 1;
    }
  }
  return [...totals.entries()]
    .map(([label, value]) => ({ label, amount: value.amount, count: value.count, runCount: value.runCount || 0 }))
    .sort(compareBreakdownRows);
}

function aggregateMdHourly(entries, start, end) {
  const netByMd = new Map();
  for (const row of aggregateByMd(entries)) netByMd.set(row.label, row.amount);

  const durationByMd = new Map();
  for (const run of state.mdRuns) {
    const time = mdRunDateTime(run);
    if (time < start || time >= end) continue;
    const duration = Number(run.durationMinutes || 0);
    if (!duration) continue;
    const label = run.mdName || mdNameById(run.mdId) || "未分類MD";
    const current = durationByMd.get(label) || { minutes: 0, runs: 0 };
    current.minutes += duration;
    current.runs += 1;
    durationByMd.set(label, current);
  }

  return [...netByMd.entries()]
    .map(([label, amount]) => {
      const duration = durationByMd.get(label) || { minutes: 0, runs: 0 };
      const hours = duration.minutes / 60;
      const averageHours = duration.runs > 0 ? hours / duration.runs : 0;
      return { label, amount: hours > 0 ? Math.round(amount / hours) : 0, count: hours, averageDuration: averageHours };
    })
    .filter((row) => row.count > 0)
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
    case "runCount":
      return row.runCount || 0;
    case "averageDuration":
      return row.averageDuration || 0;
    case "amount":
      return row.amount;
    default:
      return row.amount;
  }
}

function createBreakdownPanel(title, rows, emptyText, countLabel = "件数", entries = [], panelKey = "") {
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
    item.className = "summary-breakdown-block";
    const expandKey = panelKey ? mdSummaryExpandKey(`summary-${panelKey}`, row.label) : "";
    const expanded = expandKey && state.expandedMdSummaryRows.has(expandKey);
    item.innerHTML = `
      <button class="breakdown-row summary-breakdown-toggle md-summary-toggle" type="button" data-md-key="${escapeHTML(expandKey)}" aria-expanded="${expanded}">
        <span>${escapeHTML(row.label)}</span>
        <span class="breakdown-count">${formatQuantity(row.count)}</span>
        <strong class="${row.amount < 0 ? "expense-text" : "income-text"}">${formatSignedYen(row.amount)}</strong>
        <div class="breakdown-track net-breakdown-track">
          <div class="breakdown-zero-line"></div>
          <div class="breakdown-fill ${row.amount < 0 ? "negative" : ""}" style="width: ${(Math.abs(row.amount) / max) * 50}%; ${row.amount < 0 ? "right: 50%;" : "left: 50%;"}"></div>
        </div>
      </button>
      ${expanded ? renderSummaryBreakdownDetails(row.label, entries, panelKey) : ""}
    `;
    panel.append(item);
  }

  return panel;
}

function renderSummaryBreakdownDetails(label, entries, panelKey) {
  const rows = entries
    .filter((entry) => summaryBreakdownEntryMatches(entry, label, panelKey))
    .sort(compareEntriesNewestFirst);
  if (!rows.length) return `<div class="md-summary-details empty">該当明細がありません</div>`;
  return `
    <div class="md-summary-details">
      ${rows.map((entry) => `
        <span>${escapeHTML(formatDate(entry.date))}</span>
        <strong>${escapeHTML(entry.item || "未設定")}</strong>
        <small>${escapeHTML(summaryBreakdownDetailText(entry))}</small>
        <em class="${entry.type === "income" ? "income-text" : "expense-text"}">${entry.type === "income" ? "+" : "-"}${yen.format(entry.amount)}</em>
      `).join("")}
    </div>
  `;
}

function summaryBreakdownEntryMatches(entry, label, panelKey) {
  if (panelKey === "tag") {
    const tags = normalizeTags(entry.tags);
    return label === "無タグ" ? tags.length === 0 : tags.includes(label);
  }
  if (panelKey === "item") return (entry.item || "項目未設定") === label;
  return false;
}

function summaryBreakdownDetailText(entry) {
  const parts = [`数量${formatQuantity(entryQuantity(entry))}`, entryUnitPriceDetailText(entry)];
  const mdName = entryMdName(entry);
  if (mdName) parts.push(`MD ${mdName}`);
  return parts.join(" / ");
}

function entryUnitPriceDetailText(entry) {
  const unitPrice = formatAmount(entry.unitPrice || 0);
  const splitPeople = Number(entry.mdPartySize || entry.settlementPeople || 0);
  return splitPeople > 1 ? `${unitPrice} / ${formatQuantity(splitPeople)}人` : unitPrice;
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
    const text = `${tags} ${mapName} ${entryMdName(entry)} ${entry.item || ""} ${entry.amount} ${entry.quantity || ""} ${entry.unitPrice || ""}`.toLowerCase();
    return matchesType && text.includes(state.search);
  });
}

function updateEntryMapOptions(selectedMap = "") {
  elements.entryMap.replaceChildren();
  const empty = document.createElement("option");
  empty.value = "";
  empty.textContent = "カテゴリを選択";
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

function updateEntryMdOptions(selectedMdId = "") {
  setSelectOptionsWithBlank(
    elements.entryMd,
    state.mdDungeons.map((md) => ({ value: md.id, label: md.name })),
    "MDを選択",
    false,
  );
  if (selectedMdId && state.mdDungeons.some((md) => md.id === selectedMdId)) elements.entryMd.value = selectedMdId;
  setSelectOptionsWithBlank(
    elements.editMd,
    state.mdDungeons.map((md) => ({ value: md.id, label: md.name })),
    "MDを選択",
    false,
  );
  if (selectedMdId && state.mdDungeons.some((md) => md.id === selectedMdId)) elements.editMd.value = selectedMdId;
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
  setSelectOptions(elements.linkMap, state.maps, "カテゴリを選択");
  setSelectOptions(
    elements.linkItem,
    state.items.map((item) => item.name),
    "アイテムを選択",
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

function setSelectOptionsWithBlank(select, values, emptyText, disableBlank = true) {
  select.replaceChildren();
  const empty = document.createElement("option");
  empty.value = "";
  empty.textContent = emptyText;
  empty.disabled = disableBlank;
  empty.selected = true;
  select.append(empty);

  const seen = new Set();
  for (const row of values.filter(Boolean)) {
    const value = typeof row === "object" ? String(row.value || "") : String(row);
    const label = typeof row === "object" ? String(row.label || row.value || "") : String(row);
    if (!value || seen.has(value)) continue;
    seen.add(value);
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
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
  return normalizeTags(String(value || "").split(/[\s,]+/));
}

function normalizeTagPrefix(tag) {
  return `#${String(tag || "").trim().replace(/^#+/, "")}`;
}

function normalizeTags(tags) {
  const source = Array.isArray(tags) ? tags : String(tags || "").split(/[\s,]+/);
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

function normalizeMdTagLinkTag(value) {
  const raw = normalizeTagPrefix(String(value || "").trim());
  return normalizeTags([raw.startsWith("#") ? raw : `#${raw}`])[0] || "";
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
  renderTagChips(elements.summaryTags, elements.summaryTagChipList);
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
  const match = String(value || "").match(/(?:^|[\s,])#\S*$/);
  return match ? normalizeTagPrefix(match[0]) : "";
}

function commitCompleteTagTokens(input, chipList) {
  if (!/[\s,]/.test(input.value)) return;
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
  if (input === elements.mdTagLinkTag) {
    input.placeholder = tags.length > 0 ? "" : "#タグ";
  }
  if (input === elements.memoSearchTag) {
    input.placeholder = tags.length > 0 ? "" : "#タグ検索";
  }
  if (input === elements.memoEditTag) {
    input.placeholder = tags.length > 0 ? "" : "#タグ";
  }
  if (input === elements.summaryTags) {
    input.placeholder = tags.length > 0 ? "" : "#タグ条件";
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
        ...state.mdDungeons.flatMap((md) => normalizeMdDefaultItems(md.defaultItems)),
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

function entryItemNameForType(type) {
  if (type === "income") {
    return elements.entryGroupDetails.open
      ? elements.entryItemSelect.value || elements.entryItem.value.trim()
      : elements.entryItem.value.trim() || elements.entryItemSelect.value;
  }
  if (type === "expense") {
    return elements.entryGroupDetails.open
      ? elements.expenseNameSelect.value || elements.expenseName.value.trim()
      : elements.expenseName.value.trim() || elements.expenseNameSelect.value;
  }
  return "";
}

function anyEntryItemName() {
  return entryItemNameForType(currentType());
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

function setEntryItemNameForType(type, itemName) {
  if (!itemName) return;
  if (type === "income") {
    elements.entryItem.value = itemName;
    elements.entryItemSelect.value = itemName;
    return;
  }
  if (type === "expense") {
    elements.expenseName.value = itemName;
    elements.expenseNameSelect.value = itemName;
  }
}

function syncEntryFieldsForTypeSwitch() {
  const targetType = currentType();
  if (!["income", "expense"].includes(targetType)) return;

  const sourceItem = entryItemNameForType(targetType === "income" ? "expense" : "income");
  if (!sourceItem) return;

  if (elements.entryGroupDetails.open) updateEntryItemOptions(sourceItem);
  setEntryItemNameForType(targetType, sourceItem);
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

  const confirmed = window.confirm(`カテゴリ「${mapSelect.value || map}」に所属していないアイテム「${itemName}」が選択されています。切り替えると項目連携を解除して登録します。`);
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
      <input class="settlement-row-buy-price" type="text" inputmode="text" placeholder="例 1K / 100M" />
      <input class="settlement-row-quantity" type="text" inputmode="text" value="1" />
      <input class="settlement-row-amount" type="text" inputmode="text" readonly tabindex="-1" />
      <button class="delete-button" type="button" aria-label="削除">×</button>
    `
    : `
      <input class="settlement-row-item" type="text" inputmode="text" maxlength="32" placeholder="アイテム/項目" />
      <button class="calc-mini-button settlement-row-calc-button" type="button" tabindex="-1">&#35336;&#31639;&#12450;&#12471;&#12473;&#12488;</button>
      <input class="settlement-row-price" type="text" inputmode="text" placeholder="例 1K / 100M" />
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
    const buyer = row.buyer || "未設定";
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
  header.innerHTML = "<span>名称</span><span>金額</span>";
  elements.buyerDistributionList.append(header);

  for (const [name, amount] of rows) {
    const item = document.createElement("div");
    item.className = "buyer-distribution-row";
    const breakdownRows = settlementDistributionBreakdownRows(name);
    item.innerHTML = `
      <label class="distribution-target-field">
        <input class="distribution-target-check" type="checkbox" value="${escapeHTML(name)}" ${state.settlementDistributionTargets.has(name) ? "checked" : ""} />
        <span>${escapeHTML(name)}</span>
      </label>
      <strong>${formatSignedYen(amount)}</strong>
      ${renderSettlementDistributionBreakdown(name, breakdownRows)}
    `;
    setSignedAmountClass(item.querySelector("strong"), amount);
    elements.buyerDistributionList.append(item);
  }
}

function settlementDistributionBreakdownRows(targetName) {
  const people = settlementPeopleCount();
  const rows = [];

  for (const row of settlementEntryRows(elements.settlementRows)) {
    const amount = splitSettlementAmount(row.amount, people);
    if (amount <= 0) continue;
    rows.push({
      label: row.item || "名称未設定",
      detail: `数量${formatQuantity(row.quantity)} / ${formatAmount(row.unitPrice)} / ${formatQuantity(people)}人`,
      amount,
      kind: "明細",
    });
  }

  for (const row of settlementEntryRows(elements.purchaseRows)) {
    const buyerName = row.buyer || "未設定";
    const sharedAmount = splitSettlementAmount(row.amount, people);
    const isBuyerTarget = targetName === buyerName;
    const amount = isBuyerTarget ? row.amount - sharedAmount : sharedAmount;
    if (amount <= 0) continue;
    rows.push({
      label: row.item || "名称未設定",
      detail: `数量${formatQuantity(row.quantity)} / ${formatAmount(row.unitPrice)} / ${formatQuantity(people)}人`,
      amount: isBuyerTarget ? -amount : amount,
      kind: "購入",
    });
  }

  return rows;
}

function renderSettlementDistributionBreakdown(targetName, rows) {
  const total = rows.reduce((sum, row) => sum + row.amount, 0);
  if (!rows.length) {
    return `
      <div class="distribution-breakdown-popover" aria-hidden="true">
        <span class="distribution-breakdown-title">配分内訳</span>
        <span class="distribution-breakdown-target">${escapeHTML(targetName)}</span>
        <span class="distribution-breakdown-empty">内訳はありません</span>
      </div>
    `;
  }

  return `
    <div class="distribution-breakdown-popover" aria-hidden="true">
      <span class="distribution-breakdown-title">配分内訳</span>
      <span class="distribution-breakdown-target">${escapeHTML(targetName)}</span>
      ${rows.map((row) => `
        <span class="distribution-breakdown-kind">${escapeHTML(row.kind)}</span>
        <span class="distribution-breakdown-main">
          <strong>${escapeHTML(row.label)}</strong>
          <small>${escapeHTML(row.detail)}</small>
        </span>
        <span class="${row.amount < 0 ? "expense-text" : "income-text"}">${formatSignedYen(row.amount)}</span>
      `).join("")}
      <span class="distribution-breakdown-total-label">合計</span>
      <span class="distribution-breakdown-total ${total < 0 ? "expense-text" : "income-text"}">${formatSignedYen(total)}</span>
    </div>
  `;
}

function renderMdComparisonChart() {
  const periods = buildMdTrendPeriods();
  const mdRows = buildMdTopTrendRows(periods).slice(0, 5);
  const trendCount = currentTrendPeriodCount();
  elements.trendChartTitle.textContent = `MD TOP5比較 ${state.periodMode === "week" ? `週次${trendCount}週` : `月次${trendCount}か月`}`;

  if (mdRows.length === 0) {
    elements.yearChart.innerHTML = `<div class="empty-state compact-empty">MDデータがありません</div>`;
    return;
  }

  elements.yearChart.innerHTML = renderMdTrendLineChart(periods, mdRows);
}

function renderMdBarRows(rows, max, valueLabel) {
  return rows.map((row) => {
    const amount = Math.max(row.amount, 0);
    const width = Math.max(3, (amount / max) * 100);
    return `
      <div class="md-chart-row">
        <span>${escapeHTML(row.label)}</span>
        <div class="md-chart-track">
          <div class="md-chart-fill" style="width: ${width}%"></div>
        </div>
        <strong>${valueLabel === "時給" ? `${yen.format(row.amount)}/h` : formatSignedYen(row.amount)}</strong>
      </div>
    `;
  }).join("");
}

function createMdComparisonPanel(title, rows, entries, valueLabel, panelKey) {
  const panel = document.createElement("section");
  panel.className = "breakdown-panel md-summary-panel";
  const isHourlyPanel = panelKey === "hourly";
  const rowLayoutClass = isHourlyPanel ? "md-hourly-summary-row" : "md-net-summary-row";
  const heading = document.createElement("h3");
  heading.textContent = title;
  panel.append(heading);

  if (rows.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state compact-empty";
    empty.textContent = isHourlyPanel ? "攻略時間付きのMD記録がありません" : "MDに紐づく明細はありません";
    panel.append(empty);
    return panel;
  }

  const max = Math.max(...rows.map((row) => Math.max(row.amount, 0)), 1);
  let total = null;
  if (panelKey === "net") {
    const totalAmount = rows.reduce((sum, row) => sum + row.amount, 0);
    total = document.createElement("div");
    total.className = "md-summary-total";
    total.innerHTML = `
      <span>合計</span>
      <strong class="${totalAmount < 0 ? "expense-text" : "income-text"}">${formatSignedYen(totalAmount)}</strong>
    `;
  }

  const header = document.createElement("div");
  header.className = `breakdown-row breakdown-row-head md-summary-row-head ${rowLayoutClass}`;
  header.innerHTML = `
    ${breakdownSortHeader("label", "MD")}
    ${breakdownSortHeader("count", isHourlyPanel ? "合計時間(h)" : "件数")}
    ${isHourlyPanel ? breakdownSortHeader("averageDuration", "時間/周(h)") : breakdownSortHeader("runCount", "周回数")}
    ${breakdownSortHeader("amount", isHourlyPanel ? "時給収支(円/h)" : valueLabel)}
    <span></span>
  `;
  panel.append(header);

  for (const row of rows) {
    const expandKey = mdSummaryExpandKey(panelKey, row.label);
    const expanded = state.expandedMdSummaryRows.has(expandKey);
    const width = Math.max(3, (Math.max(row.amount, 0) / max) * 100);
    const count = formatQuantity(row.count || 0);
    const averageDuration = isHourlyPanel ? formatQuantity(row.averageDuration || 0) : "";
    const runCount = isHourlyPanel ? "" : formatQuantity(row.runCount || 0);
    const wrapper = document.createElement("div");
    wrapper.className = `md-summary-block${expanded ? " expanded" : ""}`;
    wrapper.innerHTML = `
      <button class="breakdown-row md-summary-toggle md-summary-breakdown-toggle ${rowLayoutClass}" type="button" data-md-key="${escapeHTML(expandKey)}" data-md-label="${escapeHTML(row.label)}" aria-expanded="${expanded}">
        <span>${escapeHTML(row.label)}</span>
        <span class="breakdown-count">${escapeHTML(count)}</span>
        <span class="breakdown-count">${escapeHTML(isHourlyPanel ? averageDuration : runCount)}</span>
        <strong class="${row.amount < 0 ? "expense-text" : "income-text"}">${isHourlyPanel ? yen.format(row.amount) : formatSignedYen(row.amount)}</strong>
        <div class="breakdown-track md-summary-breakdown-track">
          <div class="breakdown-fill md-summary-breakdown-fill" style="width: ${width}%;"></div>
        </div>
      </button>
      ${expanded ? renderMdSummaryDetails(row.label, entries) : ""}
    `;
    panel.append(wrapper);
  }
  if (total) panel.append(total);
  return panel;
}

function renderMdSummaryDetails(label, entries) {
  const rows = entries
    .filter((entry) => (entryMdName(entry) || "未分類MD") === label)
    .sort(compareEntriesNewestFirst);
  if (!rows.length) return `<div class="md-summary-details empty">該当明細がありません</div>`;
  return `
    <div class="md-summary-details">
      ${rows.map((entry) => `
        <span>${escapeHTML(formatDate(entry.date))}</span>
        <strong>${escapeHTML(entry.item || "未設定")}</strong>
        <small>${escapeHTML(formatQuantity(entry.quantity))} / ${escapeHTML(entryUnitPriceDetailText(entry))}</small>
        <em class="${entry.type === "income" ? "income-text" : "expense-text"}">${entry.type === "income" ? "+" : "-"}${yen.format(entry.amount)}</em>
      `).join("")}
    </div>
  `;
}

function mdSummaryExpandKey(panelKey, label) {
  return `${panelKey || "summary"}:${label || ""}`;
}

function toggleMdSummaryBreakdown(key) {
  if (!key) return;
  if (state.expandedMdSummaryRows.has(key)) {
    state.expandedMdSummaryRows.delete(key);
  } else {
    state.expandedMdSummaryRows.add(key);
  }
  renderSummaryDetail();
}

function buildMdTrendPeriods() {
  return state.periodMode === "week" ? buildWeeklyChartRows() : buildMonthlyChartRows();
}

function buildMdTopTrendRows(periods) {
  const labels = new Map();
  for (const period of periods) {
    period.byMd = new Map();
  }
  for (const entry of currentSummaryEntries()) {
    const date = entryDateTime(entry);
    const period = periods.find((row) => {
      if (state.periodMode === "week") return isEntryInPeriod(entry, row.start, row.end);
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      return row.key === key;
    });
    if (!period) continue;
    const label = entryMdName(entry) || "未分類MD";
    const amount = entry.type === "income" ? entry.amount : -entry.amount;
    period.byMd.set(label, (period.byMd.get(label) || 0) + amount);
    labels.set(label, (labels.get(label) || 0) + amount);
  }
  return [...labels.entries()]
    .map(([label, total]) => ({
      label,
      total,
      values: periods.map((period) => period.byMd.get(label) || 0),
    }))
    .sort(compareMdTrendRowsForCurrentPeriod);
}

function renderMdTrendLineChart(periods, rows) {
  const sortedRows = [...rows].sort(compareMdTrendRowsForCurrentPeriod);
  const width = 960;
  const height = 300;
  const padding = { top: 24, right: 278, bottom: 52, left: 78 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const axisLimits = currentAxisLimits();
  const mdAxisMax = axisLimits.md;
  const totalAxisMax = axisLimits.mdTotal;
  const maxValue = mdAxisMax > 0 ? mdAxisMax : niceCeil(Math.max(...sortedRows.flatMap((row) => row.values), 1));
  const maxTotalAmount = totalAxisMax > 0 ? totalAxisMax : niceCeil(Math.max(...periods.map((period) => Math.max(period.net, 0)), 1));
  const periodSlotWidth = chartWidth / Math.max(periods.length, 1);
  const xOf = (index) => padding.left + periodSlotWidth * index + periodSlotWidth / 2;
  const yOf = (value) => padding.top + chartHeight - Math.max(0, Math.min(value / maxValue, 1)) * chartHeight;
  const totalYOf = (value) => padding.top + chartHeight - Math.max(0, Math.min(value / maxTotalAmount, 1)) * chartHeight;
  const colors = ["#2f7d63", "#437db3", "#b7791f", "#7c5cc4", "#c0566a"];
  const gridLines = Array.from({ length: 6 }, (_, index) => {
    const ratio = index / 5;
    const y = padding.top + chartHeight * ratio;
    const totalValue = maxTotalAmount * (1 - ratio);
    return `
      <line class="chart-grid" x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}"></line>
      <text class="chart-tick chart-left-tick" x="${padding.left - 10}" y="${y + 5}" text-anchor="end">${formatCompactAmount(totalValue)}</text>
      <text class="chart-tick chart-right-tick" x="${width - padding.right + 10}" y="${y + 5}">${formatCompactAmount(maxValue * (1 - ratio))}</text>
    `;
  }).join("");
  const totalZeroY = padding.top + chartHeight;
  const totalBarWidth = Math.min(42, Math.max(18, periodSlotWidth * 0.44));
  const totalBars = periods.map((period, index) => {
    const totalValue = Math.max(period.net, 0);
    const valueY = totalYOf(totalValue);
    const barHeight = totalValue > 0 ? Math.max(2, totalZeroY - valueY) : 0;
    return `
      <rect class="md-total-net-bar" x="${xOf(index) - totalBarWidth / 2}" y="${valueY}" width="${totalBarWidth}" height="${barHeight}">
        <title>${period.label} 合計収支 ${formatSignedYen(period.net)}</title>
      </rect>
    `;
  }).join("");
  const lines = sortedRows.map((row, rowIndex) => {
    const color = colors[rowIndex % colors.length];
    const muted = state.mdTrendMutedLabels.has(row.label);
    const points = row.values.map((value, index) => `${xOf(index)},${yOf(value)}`).join(" ");
    const dots = row.values.map((value, index) => `<circle class="md-trend-dot ${muted ? "muted" : ""}" cx="${xOf(index)}" cy="${yOf(value)}" r="3.5" fill="${color}"><title>${row.label} ${periods[index].label} ${yen.format(value)}</title></circle>`).join("");
    return `<polyline class="md-trend-line ${muted ? "muted" : ""}" points="${points}" pathLength="1" style="stroke:${color}"></polyline>${dots}`;
  }).join("");
  const labels = periods.map((period, index) => `<text class="chart-label" x="${xOf(index)}" y="${height - 28}" text-anchor="middle">${escapeHTML(period.shortLabel)}</text>`).join("");
  const legendX = width - padding.right + 62;
  const legendY = padding.top + 4;
  const legend = sortedRows.map((row, index) => {
    const color = colors[index % colors.length];
    const y = legendY + index * 38;
    const label = row.label.length > 15 ? `${row.label.slice(0, 14)}窶ｦ` : row.label;
    const muted = state.mdTrendMutedLabels.has(row.label);
    return `
      <g class="md-trend-legend-item ${muted ? "muted" : ""}" data-md-label="${escapeHTML(row.label)}" role="button" tabindex="0" aria-pressed="${!muted}">
        <rect x="${legendX}" y="${y}" width="210" height="28" rx="8" style="stroke:${color}"></rect>
        <rect class="md-trend-check-box" x="${legendX + 9}" y="${y + 8}" width="12" height="12" rx="3" style="stroke:${color}"></rect>
        <path class="md-trend-check-mark" d="M ${legendX + 12} ${y + 14} L ${legendX + 15} ${y + 17} L ${legendX + 20} ${y + 11}" style="stroke:${color}"></path>
        <circle cx="${legendX + 32}" cy="${y + 14}" r="5" fill="${color}"></circle>
        <text x="${legendX + 45}" y="${y + 18}">${escapeHTML(label)}<title>${escapeHTML(row.label)}</title></text>
      </g>
    `;
  }).join("");
  return `
    <svg class="combo-chart md-trend-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="MD別収支推移">
      ${gridLines}
      <line class="md-total-zero-line" x1="${padding.left}" y1="${totalZeroY}" x2="${width - padding.right}" y2="${totalZeroY}"></line>
      <line class="chart-axis" x1="${padding.left}" y1="${padding.top + chartHeight}" x2="${width - padding.right}" y2="${padding.top + chartHeight}"></line>
      <line class="chart-axis" x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${padding.top + chartHeight}"></line>
      <line class="chart-axis" x1="${width - padding.right}" y1="${padding.top}" x2="${width - padding.right}" y2="${padding.top + chartHeight}"></line>
      ${totalBars}
      ${lines}
      ${labels}
      <text class="chart-axis-title" x="${padding.left}" y="18">合計収支</text>
      <text class="chart-axis-title" x="${width - padding.right}" y="18" text-anchor="end">MD収支</text>
      <text class="md-trend-legend-title" x="${legendX}" y="${padding.top - 5}">MD凡例</text>
      ${legend}
    </svg>
  `;
}

function toggleMdTrendMuted(label) {
  if (!label) return;
  if (state.mdTrendMutedLabels.has(label)) {
    state.mdTrendMutedLabels.delete(label);
  } else {
    state.mdTrendMutedLabels.add(label);
  }
  renderYearChart();
}

function compareMdTrendRowsForCurrentPeriod(a, b) {
  const aCurrent = a.values.at(-1) || 0;
  const bCurrent = b.values.at(-1) || 0;
  return bCurrent - aCurrent || b.total - a.total || a.label.localeCompare(b.label, "ja", { numeric: true, sensitivity: "base" });
}

function compareAmountDescending(a, b) {
  return b.amount - a.amount || b.count - a.count || a.label.localeCompare(b.label, "ja", { numeric: true, sensitivity: "base" });
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
    const amount = splitSettlementAmount(row.amount, people);
    return {
      ...row,
      amount,
      settlementTotalAmount: row.amount,
      settlementPeople: people,
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
    const buyerName = row.buyer || "未設定";
    const isSelectedBuyer = selectedTargets.has(buyerName);
    const sharedAmount = splitSettlementAmount(row.amount, people);
    if (isSelectedBuyer) {
      const amount = row.amount - sharedAmount;
      return amount > 0
        ? [{
            ...row,
            type: "expense",
            amount,
            settlementTotalAmount: row.amount,
            settlementPeople: people,
            isPurchase: true,
          }]
        : [];
    }
    return [{
      ...row,
      type: "income",
      amount: sharedAmount,
      settlementTotalAmount: row.amount,
      settlementPeople: people,
      isPurchase: false,
    }];
  });
}

function splitSettlementAmount(amount, people) {
  return Math.round((Number(amount) || 0) / Math.max(1, people));
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
    settlementTotalAmount: row.settlementTotalAmount || row.amount,
    settlementPeople: row.settlementPeople || settlementPeopleCount(),
    buyer: row.buyer,
    tags: getTagValues(elements.tags),
  }));
  renderSettlementConfirmList();
  elements.settlementConfirmModal.classList.remove("hidden");
}

function renderSettlementConfirmList() {
  const total = state.pendingSettlementEntries.reduce((sum, entry) => sum + (entry.type === "income" ? entry.amount : -entry.amount), 0);
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
      <span>${escapeHTML(entryUnitPriceDetailText(entry))}</span>
      <span class="${entry.type === "income" ? "income-text" : "expense-text"}">${entry.type === "income" ? "+" : "-"}${yen.format(entry.amount)}</span>
    `;
    elements.settlementConfirmList.append(row);
  }
  const totalRow = document.createElement("div");
  totalRow.className = "settlement-confirm-total";
  totalRow.innerHTML = `
    <span>参考合計</span>
    <strong class="${total < 0 ? "expense-text" : "income-text"}">${formatSignedYen(total)}</strong>
  `;
  elements.settlementConfirmList.append(totalRow);
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
  const isMdEntryRow = scope === "mdEntryRow";
  const unitPriceInput = isSettlementRow
    ? sourceRow?.querySelector(".settlement-row-price")
    : isMdEntryRow
    ? sourceRow?.querySelector(".md-entry-line-price")
    : isEdit
    ? editType() === "income"
      ? elements.editIncomeUnitPrice
      : elements.editExpenseUnitPrice
    : elements.unitPrice;
  const quantityInput = isSettlementRow
    ? sourceRow?.querySelector(".settlement-row-quantity")
    : isMdEntryRow
    ? sourceRow?.querySelector(".md-entry-line-quantity")
    : isEdit
    ? elements.editQuantity
    : elements.quantity;
  const amountInput = isSettlementRow
    ? sourceRow?.querySelector(".settlement-row-amount")
    : isMdEntryRow
    ? sourceRow?.querySelector(".md-entry-line-amount")
    : isEdit
    ? elements.editAmount
    : elements.amount;
  if (!unitPriceInput || !quantityInput || !amountInput) return;

  state.calcContext = { scope, row: sourceRow };
  elements.calcTitle.textContent = "計算";
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
  } else if (state.calcContext.scope === "mdEntryRow") {
    const row = state.calcContext.row;
    if (!row) return;
    const priceInput = row.querySelector(".md-entry-line-price");
    const quantityInput = row.querySelector(".md-entry-line-quantity");
    const amountInput = row.querySelector(".md-entry-line-amount");
    if (target === "unitPrice") {
      priceInput.value = result;
      quantityInput.value = elements.calcPriceQuantity.value;
      amountInput.value = elements.calcPriceAmount.value;
    } else {
      priceInput.value = elements.calcQuantityPrice.value;
      quantityInput.value = result;
      amountInput.value = elements.calcQuantityAmount.value;
    }
    updateMdEntryLineAmount(row);
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
    window.alert("数量を入力してください");
    return;
  }

  state.settlementContext = { scope, quantity, unitPrice };
  if (isEdit) {
    clearEditSettlementSplitAmount();
  } else {
    clearEntrySettlementSplitAmount();
  }
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

  const quantity = state.settlementContext.quantity;
  const amount = splitSettlementAmount(quantity * unitPrice, people);
  elements.settlementQuantity.value = formatQuantity(quantity);
  elements.settlementAmount.value = formatAmount(amount);
}

function applySettlementResult() {
  if (!state.settlementContext) return;
  updateSettlementResult();
  if (!elements.settlementQuantity.value || !elements.settlementAmount.value) return;
  const people = Math.max(1, Math.floor(parseQuantityInput(elements.settlementPeople.value) || 1));
  const totalAmount = Math.round(state.settlementContext.quantity * parseAmount(elements.settlementUnitPrice.value));

  if (state.settlementContext.scope === "entry") {
    elements.unitPrice.value = formatAmount(elements.settlementUnitPrice.value);
    elements.quantity.value = elements.settlementQuantity.value;
    elements.amount.value = elements.settlementAmount.value;
    elements.amount.dataset.settlementSplitAmount = "true";
    elements.amount.dataset.settlementPeople = String(people);
    elements.amount.dataset.settlementTotalAmount = String(totalAmount);
  } else {
    elements.editIncomeUnitPrice.value = formatAmount(elements.settlementUnitPrice.value);
    elements.editQuantity.value = elements.settlementQuantity.value;
    elements.editAmount.value = elements.settlementAmount.value;
    elements.editAmount.dataset.settlementSplitAmount = "true";
    elements.editAmount.dataset.settlementPeople = String(people);
    elements.editAmount.dataset.settlementTotalAmount = String(totalAmount);
    updatePlannedTransferRemainderNotice();
  }

  closeSettlementModal();
}

function updateAmount() {
  if (elements.amount.dataset.settlementSplitAmount === "true") return;
  const quantity = parseQuantityInput(elements.quantity.value);
  const unitPrice = currentUnitPrice();
  elements.amount.value = quantity > 0 && unitPrice >= 0 ? formatAmount(Math.round(quantity * unitPrice)) : "";
}

function clearEntrySettlementSplitAmount() {
  delete elements.amount.dataset.settlementSplitAmount;
  delete elements.amount.dataset.settlementPeople;
  delete elements.amount.dataset.settlementTotalAmount;
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

function entrySubtitle(entry, mapName, mdName = entryMdName(entry)) {
  const parts = [];
  if (mdName) parts.push(`MD ${mdName}`);
  if (entry.map || entry.category) parts.push(mapName);
  if (entry.unitPrice) parts.push(`単価 ${yen.format(entry.unitPrice)}`);
  if (entry.quantity) parts.push(`数量 ${formatQuantity(entry.quantity)}`);
  const tags = formatTags(entry.tags);
  if (tags) parts.push(tags);
  return parts.join(" / ");
}

function entryMdName(entry) {
  return entry.mdName || mdNameById(entry.mdId);
}

function mdNameById(mdId) {
  return state.mdDungeons.find((md) => md.id === mdId)?.name || "";
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
  updateEntryMdOptions(entry.mdId || "");

  if (entry.type === "income") {
    elements.editItem.value = entry.item || "";
    elements.editIncomeUnitPrice.value = formatAmount(entry.unitPrice || "");
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
  clearEditSettlementSplitAmount();
  updatePlannedTransferRemainderNotice();
  elements.editModal.classList.add("hidden");
}

function deleteEditedEntry() {
  if (!state.editingEntryId) return;
  if (!window.confirm("この明細を削除してよろしいですか？")) return;

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
  entry.mdId = elements.editMd.value || "";
  entry.mdName = mdNameById(elements.editMd.value);
  entry.quantity = parseQuantityInput(elements.editQuantity.value) || 1;
  entry.unitPrice = editUnitPrice();
  entry.settlementTotalAmount = parseAmount(elements.editAmount.dataset.settlementTotalAmount || "");
  entry.settlementPeople = Number(elements.editAmount.dataset.settlementPeople || 0);
  if (!entry.settlementPeople) {
    delete entry.settlementTotalAmount;
    delete entry.settlementPeople;
  }
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
  empty.textContent = "カテゴリを選択";
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
  if (elements.editAmount.dataset.settlementSplitAmount === "true") {
    updatePlannedTransferRemainderNotice();
    return;
  }
  const quantity = parseQuantityInput(elements.editQuantity.value);
  const unitPrice = editUnitPrice();
  elements.editAmount.value = quantity > 0 && unitPrice >= 0 ? formatAmount(Math.round(quantity * unitPrice)) : "";
  updatePlannedTransferRemainderNotice();
}

function clearEditSettlementSplitAmount() {
  delete elements.editAmount.dataset.settlementSplitAmount;
  delete elements.editAmount.dataset.settlementPeople;
  delete elements.editAmount.dataset.settlementTotalAmount;
}

function updatePlannedTransferRemainderNotice() {
  if (!elements.plannedTransferRemainderNotice) return;
  const planned = state.sendingPlannedId
    ? state.plannedPurchases.find((item) => item.id === state.sendingPlannedId)
    : null;
  const usedQuantity = parseQuantityInput(elements.editQuantity.value);
  const remaining = planned ? plannedQuantity(planned) - usedQuantity : 0;
  const shouldShow = Boolean(planned) && usedQuantity > 0 && remaining > 0;
  elements.plannedTransferRemainderNotice.classList.toggle("hidden", !shouldShow);
  elements.plannedTransferRemainderNotice.textContent = shouldShow
    ? `${formatQuantity(remaining)}個の予定が未使用です`
    : "";
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
  elements.editIncomeUnitPrice.disabled = !isIncome;
  elements.editExpenseUnitPrice.disabled = isIncome;
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
  const selector = "input[name=\"" + name + "\"][value=\"" + value + "\"]";
  const radio = form.querySelector(selector);
  if (radio) radio.checked = true;
}

function openMasterEditModal(type, name) {
  state.editingMaster = { type, name };
  const titleMap = {
    map: "カテゴリ",
    item: "アイテム",
    character: "キャラクター",
    md: "MD",
  };
  elements.masterEditTitle.textContent = titleMap[type] || "編集";
  elements.masterAmountLabel.classList.toggle("hidden", type !== "item");
  elements.masterOfficialIdLabel.classList.toggle("hidden", type !== "item");
  elements.masterJobLabel.classList.toggle("hidden", type !== "character");
  elements.masterCharacterLevelLabel.classList.toggle("hidden", type !== "character");
  elements.masterIconLabel.classList.toggle("hidden", type !== "character");
  elements.masterMdIdNameLabel.classList.toggle("hidden", type !== "md");
  elements.masterMdConditionLevelLabel.classList.toggle("hidden", type !== "md");
  elements.masterMdResetTypeLabel.classList.toggle("hidden", type !== "md");
  elements.masterName.maxLength = type === "md" ? 48 : 32;

  elements.masterAmount.value = "";
  elements.masterOfficialId.value = "";
  elements.masterJob.value = "";
  elements.masterCharacterLevel.value = "";
  elements.masterIcon.value = "";
  state.pendingMasterIcon = "";
  elements.masterMdIdName.value = "";
  elements.masterMdConditionLevel.value = "";
  elements.masterMdResetType.value = "daily";

  if (type === "item") {
    elements.masterName.value = name;
    const item = findItem(name);
    elements.masterAmount.value = item ? formatAmount(item.amount) : "0";
    elements.masterOfficialId.value = item?.officialId || "";
  } else if (type === "character") {
    const character = state.characters.find((row) => row.id === name);
    if (!character) return;
    elements.masterName.value = character.name;
    elements.masterJob.value = character.job || "";
    elements.masterCharacterLevel.value = character.level ? String(character.level) : "";
    state.pendingMasterIcon = character.icon || "";
  } else if (type === "md") {
    const md = state.mdDungeons.find((row) => row.id === name);
    if (!md) return;
    elements.masterName.value = md.name;
    elements.masterMdIdName.value = md.idName || "";
    elements.masterMdConditionLevel.value = md.conditionLevel ? String(md.conditionLevel) : "";
    elements.masterMdResetType.value = normalizeMdResetType(md.resetType);
  } else {
    elements.masterName.value = name;
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
  const type = state.editingMaster.type;
  const newName = elements.masterName.value.trim();
  if (!newName) return;

  if (type === "map") {
    renameMap(oldName, newName);
  } else if (type === "item") {
    renameItem(
      oldName,
      newName,
      parseAmount(elements.masterAmount.value),
      normalizeOfficialItemId(elements.masterOfficialId.value),
    );
  } else if (type === "character") {
    renameCharacter(oldName, newName, elements.masterJob.value.trim(), parseLevelValue(elements.masterCharacterLevel.value), state.pendingMasterIcon);
  } else if (type === "md") {
    renameMdDungeon(oldName, newName, elements.masterMdIdName.value.trim(), elements.masterMdResetType.value, parseLevelValue(elements.masterMdConditionLevel.value));
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
  } else if (type === "item") {
    state.items = state.items.filter((item) => item.name !== name);
    for (const map of Object.keys(state.links)) {
      state.links[map] = state.links[map].filter((item) => item !== name);
    }
    for (const md of state.mdDungeons) {
      md.defaultItems = normalizeMdDefaultItems(md.defaultItems).filter((item) => item !== name);
    }
    saveItems();
    saveLinks();
    saveMdDungeons();
  } else if (type === "character") {
    deleteCharacter(name);
  } else if (type === "md") {
    deleteMdDungeon(name);
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

function renameItem(oldName, newName, amount, officialId = "") {
  const item = findItem(oldName);
  if (!item) return;
  if (oldName !== newName && state.items.some((candidate) => candidate.name === newName)) return;

  item.name = newName;
  item.amount = amount;
  item.officialId = officialId;
  for (const map of Object.keys(state.links)) {
    state.links[map] = state.links[map].map((linkedItem) => (linkedItem === oldName ? newName : linkedItem));
  }
  for (const entry of state.entries) {
    if (entry.item === oldName) entry.item = newName;
  }
  for (const md of state.mdDungeons) {
    md.defaultItems = normalizeMdDefaultItems(normalizeMdDefaultItems(md.defaultItems).map((itemName) => (itemName === oldName ? newName : itemName)));
  }

  saveItems();
  saveLinks();
  saveEntries();
  saveMdDungeons();
}

function renameCharacter(id, newName, job, level, icon) {
  const character = state.characters.find((row) => row.id === id);
  if (!character) return;
  if (character.name !== newName && state.characters.some((candidate) => candidate.name === newName)) return;

  character.name = newName;
  character.job = job;
  character.level = parseLevelValue(level);
  character.icon = icon;
  for (const run of state.mdRuns) {
    if (run.characterId === id) run.characterName = newName;
  }

  saveCharacters();
  saveMdRuns();
}

function renameMdDungeon(id, newName, idName, resetType, conditionLevel, defaultItems = null) {
  const md = state.mdDungeons.find((row) => row.id === id);
  if (!md) return;
  if (md.name !== newName && state.mdDungeons.some((candidate) => candidate.name === newName)) return;
  if (idName && md.idName !== idName && state.mdDungeons.some((candidate) => candidate.idName === idName)) return;

  md.name = newName;
  md.idName = idName;
  md.resetType = normalizeMdResetType(resetType);
  md.periodLimit = mdPeriodLimit(md);
  md.conditionLevel = parseLevelValue(conditionLevel);
  if (defaultItems !== null) md.defaultItems = normalizeMdDefaultItems(defaultItems);
  for (const entry of state.entries) {
    if (entry.mdId === id) entry.mdName = newName;
  }
  for (const run of state.mdRuns) {
    if (run.mdId === id) run.mdName = newName;
  }

  saveMdDungeons();
  saveEntries();
  saveMdRuns();
}

function findItem(name) {
  return state.items.find((item) => item.name === name);
}

function normalizeOfficialItemId(value) {
  const text = String(value || "").trim();
  const urlMatch = text.match(/\/item\/(\d+)/);
  if (urlMatch) return urlMatch[1];
  return text.replace(/[^\d]/g, "");
}

function officialItemUrl(itemId) {
  return `${RO_OFFICIAL_ITEM_BASE_URL}/${encodeURIComponent(itemId)}/0/`;
}

function openOfficialItemPageFromInput(idInput) {
  const itemId = normalizeOfficialItemId(idInput.value);
  if (!itemId) {
    window.alert("公式IDを入力してください。");
    return;
  }

  idInput.value = itemId;
  openOfficialItemPage(itemId);
}

function openOfficialItemPage(itemId) {
  const normalizedId = normalizeOfficialItemId(itemId);
  if (!normalizedId) return;
  window.open(officialItemUrl(normalizedId), "_blank", "noopener");
}

function currentType() {
  return new FormData(elements.form).get("type");
}

function showTab(tab) {
  if (tab === "md" && !state.mdUnlocked) unlockMdTab();
  const currentTab = [...elements.tabs].find((button) => button.classList.contains("active"))?.dataset.tab;
  const shouldResetScroll = currentTab && currentTab !== tab;

  elements.tabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tab);
  });

  Object.entries(elements.panels).forEach(([name, panel]) => {
    const isSettingsGroup = tab === "settings" && ["maps", "items", "links", "characters", "mdTagLink", "mdItemLink", "mdMaster", "settings"].includes(name);
    panel.classList.toggle("active", name === tab || isSettingsGroup);
  });
  if (tab === "settings" && ![...elements.settingsAnchors].some((button) => button.classList.contains("active"))) {
    elements.settingsAnchors[0]?.classList.add("active");
  }
  if (tab !== "settings") {
    elements.settingsAnchors.forEach((button) => button.classList.remove("active"));
  }

  if (tab !== "entry") refreshConfigurationViews();
  if (tab === "md") ensureMdTabWeeklyMode();
  if (tab !== "md") setMdFullscreen(false);
  if (shouldResetScroll) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function setMdFullscreen(enabled) {
  state.mdFullscreen = Boolean(enabled);
  updateMdFullscreenSize();
  document.documentElement.classList.toggle("md-fullscreen-mode", state.mdFullscreen);
  document.body.classList.toggle("md-fullscreen-mode", state.mdFullscreen);
  elements.md?.classList.toggle("md-fullscreen-active", state.mdFullscreen);
  if (elements.mdFullscreenToggle) {
    elements.mdFullscreenToggle.textContent = state.mdFullscreen ? "戻す" : "全画面";
    elements.mdFullscreenToggle.setAttribute("aria-pressed", String(state.mdFullscreen));
  }
  if (state.mdFullscreen) {
    requestAnimationFrame(() => {
      updateMdFullscreenSize();
      elements.mdWeekGrid?.focus({ preventScroll: true });
      requestAnimationFrame(updateMdFullscreenSize);
    });
  } else {
    document.documentElement.style.removeProperty("--md-fullscreen-height");
    document.documentElement.style.removeProperty("--md-fullscreen-board-top");
  }
}

function updateMdFullscreenSize() {
  const height = Math.round(window.visualViewport?.height || window.innerHeight || 0);
  if (height > 0) document.documentElement.style.setProperty("--md-fullscreen-height", `${height}px`);
  if (!state.mdFullscreen || !elements.md) return;
  const panel = elements.md.querySelector(".md-panel");
  const header = elements.md.querySelector(".market-header");
  const controls = elements.md.querySelector(".md-control-row");
  const panelStyle = panel ? getComputedStyle(panel) : null;
  const gap = Number.parseFloat(panelStyle?.gap || panelStyle?.rowGap || 0) || 0;
  const paddingTop = Number.parseFloat(panelStyle?.paddingTop || 0) || 0;
  const headerHeight = Math.ceil(header?.getBoundingClientRect().height || 0);
  const controlHeight = Math.ceil(controls?.getBoundingClientRect().height || 0);
  const boardTop = Math.max(96, paddingTop + headerHeight + controlHeight + gap * 2);
  document.documentElement.style.setProperty("--md-fullscreen-board-top", `${Math.ceil(boardTop)}px`);
}

function ensureMdTabWeeklyMode() {
  if (state.periodMode !== "week") setPeriodMode("week");
}

function handleMdUnlockShortcut(event) {
  const keyCode = mdUnlockKeyCode(event);
  if (isMdUnlockModifier(keyCode)) {
    state.mdUnlockKeys.add(keyCode);
  }
  syncMdUnlockModifierKeys(event);
  if (!hasMdUnlockModifier()) {
    resetMdUnlockKeys();
    return;
  }
  if (event.metaKey) {
    resetMdUnlockKeys();
    return;
  }
  if (keyCode === "KeyR" || keyCode === "KeyO") {
    state.mdUnlockKeys.add(keyCode);
    updateMdUnlockSequence(keyCode);
    event.preventDefault();
  }
  const pressedTogether = hasMdUnlockModifier() && state.mdUnlockKeys.has("KeyR") && state.mdUnlockKeys.has("KeyO");
  const pressedInOrder = hasMdUnlockModifier() && state.mdUnlockSequence.join("") === "KeyRKeyO";
  if (!pressedTogether && !pressedInOrder) return;

  resetMdUnlockKeys();
  unlockMdTab();
  showTab("md");
}

function updateMdUnlockSequence(keyCode) {
  const expected = state.mdUnlockSequence.length === 0 ? "KeyR" : "KeyO";
  state.mdUnlockSequence = keyCode === expected ? [...state.mdUnlockSequence, keyCode] : keyCode === "KeyR" ? ["KeyR"] : [];
}

function handleMdUnlockKeyRelease(event) {
  const keyCode = mdUnlockKeyCode(event);
  if (isMdUnlockModifier(keyCode)) {
    resetMdUnlockKeys();
    return;
  }
  if (keyCode === "KeyR" || keyCode === "KeyO") state.mdUnlockKeys.delete(keyCode);
  syncMdUnlockModifierKeys(event);
  if (!hasMdUnlockModifier()) resetMdUnlockKeys();
}

function mdUnlockKeyCode(event) {
  if (event.code === "AltLeft" || event.code === "AltRight" || event.key === "Alt") return "Alt";
  if (event.code === "ShiftLeft" || event.code === "ShiftRight" || event.key === "Shift") return "Shift";
  if (event.code === "ControlLeft" || event.code === "ControlRight" || event.key === "Control") return "Control";
  if (event.code === "KeyR" || String(event.key).toLowerCase() === "r") return "KeyR";
  if (event.code === "KeyO" || String(event.key).toLowerCase() === "o") return "KeyO";
  return event.code || event.key || "";
}

function isMdUnlockModifier(keyCode) {
  return keyCode === "Alt" || keyCode === "Shift" || keyCode === "Control";
}

function hasMdUnlockModifier() {
  return state.mdUnlockKeys.has("Alt") || state.mdUnlockKeys.has("Shift") || state.mdUnlockKeys.has("Control");
}

function syncMdUnlockModifierKeys(event) {
  if (event.altKey) state.mdUnlockKeys.add("Alt");
  if (event.shiftKey) state.mdUnlockKeys.add("Shift");
  if (event.ctrlKey) state.mdUnlockKeys.add("Control");
}

function resetMdUnlockKeys() {
  state.mdUnlockKeys.clear();
  state.mdUnlockSequence = [];
}

function unlockMdTab() {
  if (!state.mdUnlocked) {
    state.mdUnlocked = true;
    localStorage.setItem(MD_UNLOCK_STORAGE_KEY, "true");
  }
  updateMdTabVisibility();
}

function updateMdTabVisibility() {
  elements.mdTab.classList.toggle("hidden", !state.mdUnlocked);
}

function scrollToSettingsBlock(targetId) {
  const target = document.querySelector(`#${targetId}`);
  if (!target) return;
  const group = target.closest(".settings-interface-group");
  if (group) group.open = true;
  if (["mapsPanel", "linksPanel"].includes(targetId)) document.querySelector("#settingsGroupManagement")?.setAttribute("open", "");
  if (["charactersPanel", "mdMasterPanel", "mdItemLinkPanel", "mdTagLinkPanel"].includes(targetId)) document.querySelector("#settingsMdManagement")?.setAttribute("open", "");
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
  syncSummarySelectionToCurrentPeriod();
  updatePeriodLabel();
  render();
}

function setPeriodMode(mode) {
  if (mode !== "week" && isMdTabActive()) {
    updatePeriodLabel();
    return;
  }
  if (state.periodMode === mode) return;
  state.periodMode = mode;
  state.periodStart = rangeKey(getRangeStart(new Date()));
  syncSummarySelectionToCurrentPeriod();
  updateAxisLimitInputs();
  updatePeriodLabel();
  render();
}

function isMdTabActive() {
  return [...elements.tabs].some((button) => button.dataset.tab === "md" && button.classList.contains("active"));
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
  syncSummarySelectionToCurrentPeriod();
  updatePeriodLabel();
  render();
}

function updateWeekPeriodFromSelector() {
  if (state.periodMode !== "week") return;
  if (!elements.period.value) return;
  const selectedDate = parseRangeKey(elements.period.value);
  state.periodStart = rangeKeyForMode(isFuturePeriodStart(selectedDate, "week") ? currentMaxPeriodStart("week") : selectedDate, "week");
  syncSummarySelectionToCurrentPeriod();
  updatePeriodLabel();
  render();
}

function syncSummarySelectionToCurrentPeriod() {
  state.selectedSummaryKey = rangeKey(parseRangeKey(state.periodStart));
}

function sum(entries) {
  return entries.reduce((total, entry) => total + entry.amount, 0);
}

function todayISO() {
  const date = new Date();
  return dateToISO(date);
}

function dateToISO(date) {
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

  return window.confirm(`${year}年は登録年から2年以上離れています。${year}年にしてもよいですか？`);
}

function currentTime() {
  const date = new Date();
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function currentEntryTime() {
  if (elements.time.classList.contains("hidden")) return currentTime();
  return elements.time.value || currentTime();
}

function validateNotFutureDate(dateValue) {
  if (!dateValue) return true;
  const inputDate = new Date(`${dateValue}T00:00:00`);
  const today = new Date(`${todayISO()}T00:00:00`);
  if (inputDate <= today) return true;

  window.alert("未来の日付は登録できません");
  return false;
}

function validateEntryNumbers(unitPrice, quantity, amount) {
  if (unitPrice > 0 && quantity > 0 && amount > 0) return true;
  window.alert("単価、数量、金額を正しく入力してください");
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
    return Array.isArray(entries)
      ? entries.map((entry) => ({
          ...entry,
          tags: normalizeTags(entry.tags),
          mdId: String(entry.mdId || ""),
          mdName: String(entry.mdName || ""),
          mdRunId: String(entry.mdRunId || ""),
        }))
      : [];
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
          .map(normalizeItemMaster);
      }
    } catch {
      return [];
    }
  }

  return extractLegacyData().items.map(normalizeItemMaster);
}

function normalizeItemMaster(item) {
  return {
    name: String(item.name),
    amount: Number(item.amount || 0),
    officialId: normalizeOfficialItemId(item.officialId || item.roItemId || ""),
  };
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

function loadCharacters() {
  const stored = localStorage.getItem(CHARACTER_STORAGE_KEY);
  if (!stored) return [];
  try {
    return normalizeCharacters(JSON.parse(stored));
  } catch {
    return [];
  }
}

function loadMdDungeons() {
  const stored = localStorage.getItem(MD_STORAGE_KEY);
  if (!stored) return [];
  try {
    return normalizeMdDungeons(JSON.parse(stored));
  } catch {
    return [];
  }
}

function loadMdRuns() {
  const stored = localStorage.getItem(MD_RUN_STORAGE_KEY);
  if (!stored) return [];
  try {
    return normalizeMdRuns(JSON.parse(stored));
  } catch {
    return [];
  }
}

function normalizeCharacters(characters) {
  if (!Array.isArray(characters)) return [];
  return characters
    .filter((character) => character && character.name)
    .map((character) => ({
      id: String(character.id || crypto.randomUUID()),
      name: String(character.name),
      job: String(character.job || ""),
      level: parseLevelValue(character.level),
      icon: String(character.icon || ""),
      createdAt: character.createdAt || new Date().toISOString(),
    }));
}

function normalizeMdDungeons(dungeons) {
  if (!Array.isArray(dungeons)) return [];
  return dungeons
    .filter((md) => md && md.name)
    .map((md) => {
      const resetType = normalizeMdResetType(md.resetType || mdResetTypeFromLegacyLimit(md.weeklyLimit || md.limit));
      return {
        id: String(md.id || crypto.randomUUID()),
        name: String(md.name),
        idName: String(md.idName || md.code || md.name),
        defaultItems: normalizeMdDefaultItems(md.defaultItems || md.items),
        resetType,
        periodLimit: mdPeriodLimit({ resetType }),
        conditionLevel: parseLevelValue(md.conditionLevel),
        hiddenFromManagement: Boolean(md.hiddenFromManagement),
        createdAt: md.createdAt || new Date().toISOString(),
      };
    });
}

function mdResetTypeFromLegacyLimit(limit) {
  const value = Number(limit || 1);
  if (value >= 2) return "weekly2";
  return "weekly1";
}

function normalizeMdRuns(runs) {
  if (!Array.isArray(runs)) return [];
  return runs
    .filter((run) => run && run.date && (run.characterId || run.characterName) && (run.mdId || run.mdName))
    .map((run) => ({
      id: String(run.id || crypto.randomUUID()),
      date: String(run.date),
      characterId: String(run.characterId || ""),
      characterName: String(run.characterName || ""),
      mdId: String(run.mdId || ""),
      mdName: String(run.mdName || ""),
      source: run.source === "auto" ? "auto" : "manual",
      durationMinutes: Math.max(0, Number(run.durationMinutes || 0)),
      partySize: mdRunPartySize(run),
      occurredAt: String(run.occurredAt || ""),
      createdAt: run.createdAt || new Date().toISOString(),
    }));
}

function normalizeMemos(memos) {
  if (!Array.isArray(memos)) return [];
  return memos
    .filter((memo) => memo && (memo.title || memo.body))
    .map((memo) => {
      const legacyTagMap = {
        todo: "#ToDo",
        event: "#イベント",
        thought: "#メモ",
        note: "#ノート",
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

function loadStringSet(key) {
  return new Set(parseStringArray(localStorage.getItem(key) || "[]"));
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
    .replace(/[Ａ-Ｚａ-ｚ]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0xfee0))
    .replace(/[，，]/g, ",")
    .replace(/[．。]/g, ".")
    .replace(/[－−–—]/g, "-")
    .replace(/　/g, " ");
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
  if (input?.classList?.contains("md-entry-line-quantity")) return true;
  return [
    "quantityInput",
    "mdEntryDurationInput",
    "mdEntryPartySizeInput",
    "mdEntryQuantityInput",
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
  if (input?.classList?.contains("md-entry-line-price")) return true;
  if (input?.classList?.contains("md-entry-line-amount")) return true;
  return [
    "unitPriceInput",
    "amountInput",
    "mdEntryUnitPriceInput",
    "mdEntryAmountInput",
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
  if (input.closest?.("#mdEntryForm")) {
    updateMdEntryLineAmount(input.closest(".md-entry-line"));
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

function saveCharacters() {
  localStorage.setItem(CHARACTER_STORAGE_KEY, JSON.stringify(state.characters));
}

function saveMdDungeons() {
  localStorage.setItem(MD_STORAGE_KEY, JSON.stringify(state.mdDungeons));
}

function saveMdRuns() {
  localStorage.setItem(MD_RUN_STORAGE_KEY, JSON.stringify(state.mdRuns));
}

function saveMdMonitorImportedIds() {
  localStorage.setItem(MD_MONITOR_IMPORTED_STORAGE_KEY, JSON.stringify([...state.mdMonitorImportedIds]));
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return entities[char];
  });
}
