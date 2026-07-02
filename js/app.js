/**
 * Ethio Keyboard Pro - Comprehensive Engine Module Architecture
 * Fully Vanilla Production Core Engine Framework
 */

// 1. Comprehensive Transliteration Phonetics Mapping Layer Dictionary Matrix
const GEEZ_TRANSLIT_MATRIX = {
  a: "አ",
  u: "ኡ",
  i: "ኢ",
  e: "ኤ",
  o: "ኦ",
  ha: "ሀ",
  hu: "ሁ",
  hi: "ሂ",
  ha: "ሃ",
  he: "ሄ",
  h: "ህ",
  ho: "ሆ",
  la: "ለ",
  lu: "ሉ",
  li: "ሊ",
  laa: "ላ",
  le: "ሌ",
  l: "ል",
  lo: "ሎ",
  ma: "መ",
  mu: "ሙ",
  mi: "ሚ",
  maa: "ማ",
  me: "ሜ",
  m: "ም",
  mo: "ሞ",
  na: "ነ",
  nu: "ኑ",
  ni: "ኒ",
  naa: "ና",
  ne: "ኔ",
  n: "ን",
  no: "ኖ",
  ka: "ከ",
  ku: "ኩ",
  ki: "ኪ",
  kaa: "ካ",
  ke: "ኬ",
  k: "ክ",
  ko: "ኮ",
  wa: "ወ",
  wu: "ዉ",
  wi: "ዊ",
  waa: "ዋ",
  we: "ዌ",
  w: "ው",
  wo: "ዎ",
  ya: "የ",
  yu: "ዩ",
  yi: "ይ",
  yaa: "ያ",
  ye: "ዬ",
  y: "ይ",
  yo: "ዮ",
  ra: "ረ",
  ru: "ሩ",
  ri: "ሪ",
  raa: "ራ",
  re: "ሬ",
  r: "ር",
  ro: "ሮ",
  sa: "ሰ",
  su: "ሱ",
  si: "ሲ",
  saa: "ሳ",
  se: "ሴ",
  s: "ስ",
  so: "ሶ",
  ta: "ተ",
  tu: "ቱ",
  ti: "ቲ",
  taa: "ታ",
  te: "ቴ",
  t: "ት",
  to: "ቶ",
  da: "ደ",
  du: "ዱ",
  di: "ዲ",
  daa: "ዳ",
  de: "ዴ",
  d: "ድ",
  do: "ዶ",
  fa: "ፈ",
  fu: "ፉ",
  fi: "ፊ",
  faa: "ፋ",
  fe: "ፌ",
  f: "ፍ",
  fo: "ፎ",
  pa: "ፐ",
  pu: "ፑ",
  pi: "ፒ",
  paa: "ፓ",
  pe: "ፔ",
  p: "ፕ",
  po: "ፖ",
  qa: "ቀ",
  qu: "ቁ",
  qi: "ቅ",
  qaa: "ቃ",
  qe: "ቄ",
  q: "ቅ",
  qo: "ቆ",
  xa: "ሻ",
  xu: "ሹ",
  xi: "ሺ",
  xaa: "ሻ",
  xe: "ሼ",
  x: "ሽ",
  xo: "ሾ",
  cha: "ቻ",
  chu: "ቹ",
  chi: "ቺ",
  chaa: "ቻ",
  che: "ቼ",
  ch: "ች",
  cho: "ቾ",
  ja: "ጃ",
  ju: "ጁ",
  ji: "ጂ",
  jaa: "ጃ",
  je: "ጄ",
  j: "ጅ",
  jo: "ጆ",
  ga: "ጋ",
  gu: "ጉ",
  gi: "ጊ",
  gaa: "ጋ",
  ge: "ጌ",
  g: "ግ",
  go: "ጎ",
  za: "ዛ",
  zu: "ዙ",
  zi: "ዚ",
  zaa: "ዛ",
  ze: "ዜ",
  z: "ዝ",
  zo: "ዞ",
};

// Complete Structural Family Map for Generation of Systematic Reference Table Grid
const ETHIOPIC_GLYPH_FAMILIES = [
  { name: "ሀ (Ha)", series: ["ሀ", "ሁ", "ሂ", "ሃ", "ሄ", "ህ", "ሆ"] },
  { name: "ለ (La)", series: ["ለ", "ሉ", "ሊ", "ላ", "ሌ", "ል", "ሎ"] },
  { name: "ሐ (Hha)", series: ["ሐ", "ሑ", "ሒ", "ሓ", "ሔ", "ሕ", "ሖ"] },
  { name: "መ (Ma)", series: ["መ", "ሙ", "ሚ", "ማ", "ሜ", "ም", "ሞ"] },
  { name: "ሠ (Ssa)", series: ["ሠ", "ሡ", "ሢ", "ሣ", "ሤ", "ሥ", "ሦ"] },
  { name: "ረ (Ra)", series: ["ረ", "ሩ", "ሪ", "ራ", "ሬ", "ር", "ሮ"] },
  { name: "ሰ (Sa)", series: ["ሰ", "ሱ", "ሲ", "ሳ", "ሴ", "ስ", "ሶ"] },
  { name: "ሻ (Sha)", series: ["ሻ", "ሹ", "ሺ", "ሻ", "ሼ", "ሽ", "ሾ"] },
  { name: "ቀ (Qa)", series: ["ቀ", "ቁ", "ቅ", "ቃ", "ቄ", "ቅ", "ቆ"] },
  { name: "በ (Ba)", series: ["በ", "ቡ", "ቢ", "ባ", "ቤ", "ብ", "ቦ"] },
  { name: "ተ (Ta)", series: ["ተ", "ቱ", "ቲ", "ታ", "ተ", "ት", "ቶ"] },
  { name: "ቸ (Cha)", series: ["ቸ", "ቹ", "ቺ", "ቻ", "ቼ", "ች", "ቾ"] },
  { name: "ኀ (Kha)", series: ["ኀ", "ኁ", "ኂ", "ኃ", "ኄ", "ኅ", "ኆ"] },
  { name: "ነ (Na)", series: ["ነ", "ኑ", "ኒ", "ና", "ኔ", "ን", "ኖ"] },
  { name: "ኘ (Nya)", series: ["ኘ", "ኙ", "ኚ", "ኛ", "ኜ", "ኝ", "ኞ"] },
  { name: "አ (Alif)", series: ["አ", "ኡ", "ኢ", "አ", "ኤ", "እ", "ኦ"] },
  { name: "ከ (Ka)", series: ["ከ", "ኩ", "ኪ", "ካ", "ኬ", "ክ", "ኮ"] },
  { name: "ወ (Wa)", series: ["ወ", "ዉ", "ዊ", "ዋ", "ዌ", "ው", "ዎ"] },
  { name: "ዐ (Ayn)", series: ["ዐ", "ዑ", "ዒ", "ዓ", "ዔ", "ዕ", "ዖ"] },
  { name: "ዘ (Za)", series: ["ዘ", "ዙ", "ዚ", "ዛ", "ዜ", "ዝ", "ዞ"] },
  { name: "ዠ (Zha)", series: ["ዠ", "ዡ", "ዢ", "ዣ", "ዤ", "ዥ", "ዦ"] },
  { name: "የ (Ya)", series: ["የ", "ዩ", "ይ", "ያ", "ዬ", "ይ", "ዮ"] },
  { name: "ደ (Da)", series: ["ደ", "ዱ", "ዲ", "ዳ", "ዴ", "ድ", "ዶ"] },
  { name: "ጀ (Ja)", series: ["ጀ", "ጁ", "ጂ", "ጃ", "ጄ", "ጅ", "ጆ"] },
  { name: "ገ (Ga)", series: ["ገ", "ጉ", "ጊ", "ጋ", "ጌ", "ግ", "ጎ"] },
  { name: "ጠ (Tta)", series: ["ጠ", "ጡ", "ጢ", "ጣ", "ጤ", "ጥ", "ጦ"] },
  { name: "ጨ (Chha)", series: ["ጨ", "ጩ", "ጪ", "ጫ", "ጬ", "ጭ", "ጮ"] },
  { name: "ጰ (Ppa)", series: ["ጰ", "ጵ", "ጲ", "ጳ", "ጴ", "ጵ", "ጶ"] },
  { name: "ጸ (Tsa)", series: ["ጸ", "ጹ", "ጺ", "ጻ", "ጼ", "ጽ", "ጾ"] },
  { name: "ፀ (Tzha)", series: ["ፀ", "ፁ", "ፂ", "ፃ", "ፄ", "ፅ", "ፆ"] },
  { name: "ፈ (Fa)", series: ["ፈ", "ፉ", "ፊ", "ፋ", "ፌ", "ፍ", "ፎ"] },
  { name: "ፐ (Pa)", series: ["ፐ", "ፑ", "ፒ", "ፓ", "ፔ", "ፕ", "ፖ"] },
];

const SPECIAL_SYMBOLS = [
  "።",
  "፣",
  "፤",
  "፥",
  "፦",
  "፧",
  "፨",
  "፩",
  "፪",
  "፫",
  "፬",
  "፭",
  "፮",
  "፯",
  "፰",
  "፱",
  "፲",
];
const SYSTEM_EMOJIS = [
  "😀",
  "😂",
  "😍",
  "🙏",
  "👍",
  "❤️",
  "🔥",
  "🎉",
  "🇪🇹",
  "✨",
  "💡",
  "🚀",
];

/**
 * Global App State Management Engine Engine Instance
 */
class EthioKeyboardApp {
  constructor() {
    this.state = {
      currentLanguageMode: "amharic",
      fontSize: 20,
      soundEnabled: true,
      theme: "dark",
      favorites: [],
      undoStack: [""],
      redoStack: [],
    };

    this.audioContext = null;
    this.init();
  }

  init() {
    this.loadSettingsFromStorage();
    this.cacheDOM();
    this.bindEvents();
    this.renderVirtualKeyboard();
    this.renderMatrixTable();
    this.renderStaticUtilityGrids();
    this.applyTheme(this.state.theme);
    this.applyFontSize(this.state.fontSize);
    this.loadSavedDocument();
    this.refreshStateBadges();
  }

  cacheDOM() {
    this.dom = {
      editor: document.getElementById("mainEditor"),
      lineNumbers: document.getElementById("lineNumbers"),
      langMode: document.getElementById("langMode"),
      fontSelector: document.getElementById("fontSelector"),
      themeSelector: document.getElementById("themeSelector"),
      soundToggle: document.getElementById("soundToggle"),
      wordCount: document.getElementById("wordCount"),
      charCount: document.getElementById("charCount"),
      fontSizeSlider: document.getElementById("fontSizeSlider"),
      fontSizeVal: document.getElementById("fontSizeVal"),
      virtualKeyboard: document.getElementById("virtualKeyboard"),
      matrixTableBody: document.getElementById("matrixTableBody"),
      symbolsGrid: document.getElementById("symbolsGrid"),
      emojisGrid: document.getElementById("emojisGrid"),
      favoritesGrid: document.getElementById("favoritesGrid"),
      historyContainer: document.getElementById("historyContainer"),
      glyphSearchInput: document.getElementById("glyphSearchInput"),
      searchResults: document.getElementById("searchResults"),
      activeModeBadge: document.getElementById("activeModeBadge"),
      hiddenFileInput: document.getElementById("hiddenFileInput"),
    };
  }

  bindEvents() {
    // Core Editor Key bindings tracking
    this.dom.editor.addEventListener("input", (e) => this.handleEditorInput(e));
    this.dom.editor.addEventListener("keydown", (e) =>
      this.handleKeyboardShortcuts(e),
    );
    this.dom.editor.addEventListener("scroll", () => {
      this.dom.lineNumbers.scrollTop = this.dom.editor.scrollTop;
    });

    // Config Elements Controls Hooks
    this.dom.langMode.addEventListener("change", (e) => {
      this.state.currentLanguageMode = e.target.value;
      this.saveSettingsToStorage();
      this.refreshStateBadges();
      this.renderVirtualKeyboard();
    });

    this.dom.fontSelector.addEventListener("change", (e) => {
      this.dom.editor.style.fontFamily = e.target.value;
    });

    this.dom.themeSelector.addEventListener("change", (e) => {
      this.applyTheme(e.target.value);
    });

    this.dom.soundToggle.addEventListener("click", () => {
      this.state.soundEnabled = !this.state.soundEnabled;
      this.dom.soundToggle.classList.toggle(
        "active-state",
        !this.state.soundEnabled,
      );
      this.dom.soundToggle.innerHTML = this.state.soundEnabled ? "🔊" : "🔇";
      this.saveSettingsToStorage();
    });

    this.dom.fontSizeSlider.addEventListener("input", (e) => {
      this.applyFontSize(parseInt(e.target.value));
    });

    // Toolbar Events Interfaces
    document
      .getElementById("toolUndo")
      .addEventListener("click", () => this.executeUndo());
    document
      .getElementById("toolRedo")
      .addEventListener("click", () => this.executeRedo());
    document
      .getElementById("toolClear")
      .addEventListener("click", () => this.clearEditor());
    document.getElementById("toolSelectAll").addEventListener("click", () => {
      this.dom.editor.select();
      this.dom.editor.focus();
    });
    document
      .getElementById("toolCopy")
      .addEventListener("click", () => this.copyToClipboard());
    document
      .getElementById("toolImport")
      .addEventListener("click", () => this.dom.hiddenFileInput.click());
    this.dom.hiddenFileInput.addEventListener("change", (e) =>
      this.handleFileImport(e),
    );
    document
      .getElementById("toolExport")
      .addEventListener("click", () => this.exportTextFile());
    document
      .getElementById("toolPrint")
      .addEventListener("click", () => window.print());
    document
      .getElementById("toolShare")
      .addEventListener("click", () => this.shareDocumentLink());
    document
      .getElementById("toolFullscreen")
      .addEventListener("click", () => this.toggleFullscreen());

    // Utilities Lookup Input Listeners
    this.dom.glyphSearchInput.addEventListener("input", (e) =>
      this.handleGlyphSearch(e.target.value),
    );
  }

  /* =========================================================================
       2. Modular Transliterator Engine Subsystem Core logic
       ========================================================================= */
  handleEditorInput(e) {
    if (this.state.currentLanguageMode === "english") {
      this.updateEditorMetadata();
      this.pushUndoStack(this.dom.editor.value);
      return;
    }

    const value = this.dom.editor.value;
    const selectionStart = this.dom.editor.selectionStart;

    // Target contextual lookbehind range window up to 3 chars back
    const lookbackRange = 3;
    const startPos = Math.max(0, selectionStart - lookbackRange);
    const segment = value.substring(startPos, selectionStart);

    if (segment.length > 0) {
      let matchedToken = null;
      let tokenLength = 0;

      // Match longest string matches sequence backwards
      for (let i = 0; i < segment.length; i++) {
        const subToken = segment.substring(i).toLowerCase();
        if (GEEZ_TRANSLIT_MATRIX[subToken]) {
          matchedToken = GEEZ_TRANSLIT_MATRIX[subToken];
          tokenLength = subToken.length;
          break;
        }
      }

      if (matchedToken) {
        this.playClickSound();
        const beforeMatch = value.substring(0, selectionStart - tokenLength);
        const afterMatch = value.substring(selectionStart);

        this.dom.editor.value = beforeMatch + matchedToken + afterMatch;

        // Track state parameters mapping updates
        const newCursorPos = beforeMatch.length + matchedToken.length;
        this.dom.editor.setSelectionRange(newCursorPos, newCursorPos);
      }
    }

    this.updateEditorMetadata();
    this.pushUndoStack(this.dom.editor.value);
    this.autoSaveDocument();
  }

  /* =========================================================================
       3. Dynamic UI Render Matrix Layer
       ========================================================================= */
  renderVirtualKeyboard() {
    const layoutRows = [
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
      ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Bksp"],
      ["Space"],
    ];

    this.dom.virtualKeyboard.innerHTML = "";

    layoutRows.forEach((row) => {
      const rowEl = document.createElement("div");
      rowEl.className = "keyboard-row";

      row.forEach((keyKey) => {
        const button = document.createElement("button");
        button.className = "kb-key";
        button.setAttribute("aria-label", `Virtual key ${keyKey}`);

        const lowerKey = keyKey.toLowerCase();
        const mappedGlyph = GEEZ_TRANSLIT_MATRIX[lowerKey] || "";

        if (keyKey === "Shift") {
          button.classList.add("wide-2");
          button.innerHTML = `<span class="eng-hint">⇧</span><span class="geez-main">Shift</span>`;
        } else if (keyKey === "Bksp") {
          button.classList.add("wide-2");
          button.innerHTML = `<span class="eng-hint">⌫</span><span class="geez-main">Del</span>`;
        } else if (keyKey === "Space") {
          button.classList.add("space-key");
          button.innerHTML = `<span class="geez-main">Space</span>`;
        } else {
          button.innerHTML = `
                        <span class="eng-hint">${keyKey}</span>
                        <span class="geez-main">${this.state.currentLanguageMode === "english" ? keyKey : mappedGlyph || keyKey}</span>
                    `;
        }

        button.addEventListener("click", (e) => {
          this.createRippleEffect(e, button);
          this.handleVirtualKeyTap(keyKey);
        });
        rowEl.appendChild(button);
      });

      this.dom.virtualKeyboard.appendChild(rowEl);
    });
  }

  renderMatrixTable() {
    this.dom.matrixTableBody.innerHTML = "";
    ETHIOPIC_GLYPH_FAMILIES.forEach((fam) => {
      const row = document.createElement("tr");

      const famCell = document.createElement("td");
      famCell.className = "matrix-family-label";
      famCell.innerText = fam.name;
      row.appendChild(famCell);

      fam.series.forEach((character) => {
        const cell = document.createElement("td");
        cell.className = "matrix-cell";
        cell.innerText = character;
        cell.title = "Click to insert / Long-click pin to Favorites";

        cell.addEventListener("click", () => this.insertAtCursor(character));
        cell.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          this.toggleFavorite(character);
        });

        row.appendChild(cell);
      });
      this.dom.matrixTableBody.appendChild(row);
    });
  }

  renderStaticUtilityGrids() {
    // Populate Symbols
    this.dom.symbolsGrid.innerHTML = "";
    SPECIAL_SYMBOLS.forEach((sym) => {
      const node = document.createElement("span");
      node.className = "insert-chip";
      node.innerText = sym;
      node.addEventListener("click", () => this.insertAtCursor(sym));
      this.dom.symbolsGrid.appendChild(node);
    });

    // Populate Emojis
    this.dom.emojisGrid.innerHTML = "";
    SYSTEM_EMOJIS.forEach((emo) => {
      const node = document.createElement("span");
      node.className = "insert-chip";
      node.innerText = emo;
      node.addEventListener("click", () => this.insertAtCursor(emo));
      this.dom.emojisGrid.appendChild(node);
    });
  }

  handleVirtualKeyTap(keyValue) {
    this.dom.editor.focus();

    if (keyValue === "Bksp") {
      const start = this.dom.editor.selectionStart;
      const end = this.dom.editor.selectionEnd;
      if (start === end && start > 0) {
        this.dom.editor.value =
          this.dom.editor.value.substring(0, start - 1) +
          this.dom.editor.value.substring(end);
        this.dom.editor.setSelectionRange(start - 1, start - 1);
      } else {
        this.dom.editor.value =
          this.dom.editor.value.substring(0, start) +
          this.dom.editor.value.substring(end);
        this.dom.editor.setSelectionRange(start, start);
      }
    } else if (keyValue === "Space") {
      this.insertAtCursor(" ");
    } else if (keyValue === "Shift") {
      // Contextual toggle can expand layout shifts if needed
    } else {
      // Inject directly using native matching architecture algorithm rules context
      if (this.state.currentLanguageMode === "english") {
        this.insertAtCursor(keyValue);
      } else {
        this.insertAtCursor(keyValue.toLowerCase());
      }
    }

    // Programmatically trigger input context parsing validation
    this.handleEditorInput({});
  }

  /* =========================================================================
       4. Modern Engine Metadata Formatting, State Management Controls
       ========================================================================= */
  insertAtCursor(text) {
    const scrollPos = this.dom.editor.scrollTop;
    const startPos = this.dom.editor.selectionStart;
    const endPos = this.dom.editor.selectionEnd;

    const currentVal = this.dom.editor.value;
    this.dom.editor.value =
      currentVal.substring(0, startPos) +
      text +
      currentVal.substring(endPos, currentVal.length);

    this.dom.editor.focus();
    const nextCursorPos = startPos + text.length;
    this.dom.editor.setSelectionRange(nextCursorPos, nextCursorPos);
    this.dom.editor.scrollTop = scrollPos;

    this.updateEditorMetadata();
    this.autoSaveDocument();
  }

  updateEditorMetadata() {
    const text = this.dom.editor.value;

    // Character count mapping metric
    this.dom.charCount.innerText = `Characters: ${text.length}`;

    // Word count regex mapping rules matching engine
    const words = text.trim().split(/\s+/);
    const actualWordCount = text.trim() === "" ? 0 : words.length;
    this.dom.wordCount.innerText = `Words: ${actualWordCount}`;

    // Compute fluid dynamic lines matrix map updates
    const totalLines = text.split("\n").length;
    this.dom.lineNumbers.innerHTML = Array.from(
      { length: totalLines },
      (_, i) => i + 1,
    ).join("<br>");
  }

  handleKeyboardShortcuts(e) {
    // Native override checks parsing matching hooks wrapper blocks
    if (e.ctrlKey || e.metaKey) {
      switch (e.key.toLowerCase()) {
        case "z":
          e.preventDefault();
          this.executeUndo();
          break;
        case "y":
          e.preventDefault();
          this.executeRedo();
          break;
        case "s":
          e.preventDefault();
          this.exportTextFile();
          break;
      }
    }
  }

  /* =========================================================================
       5. Modern Architectural Context Persistence Layer Modules
       ========================================================================= */
  pushUndoStack(val) {
    if (this.state.undoStack[this.state.undoStack.length - 1] !== val) {
      this.state.undoStack.push(val);
      this.state.redoStack = []; // Reset forward array matching standard conventions
    }
  }

  executeUndo() {
    if (this.state.undoStack.length > 1) {
      const current = this.state.undoStack.pop();
      this.state.redoStack.push(current);
      const previousText =
        this.state.undoStack[this.state.undoStack.length - 1];
      this.dom.editor.value = previousText;
      this.updateEditorMetadata();
    }
  }

  executeRedo() {
    if (this.state.redoStack.length > 0) {
      const targetText = this.state.redoStack.pop();
      this.state.undoStack.push(targetText);
      this.dom.editor.value = targetText;
      this.updateEditorMetadata();
    }
  }

  clearEditor() {
    if (
      confirm("Are you sure you want to wipe the current document container?")
    ) {
      this.dom.editor.value = "";
      this.updateEditorMetadata();
      this.pushUndoStack("");
      this.autoSaveDocument();
    }
  }

  async copyToClipboard() {
    try {
      await navigator.clipboard.writeText(this.dom.editor.value);
      alert("Document copied cleanly to system clipboard structure buffer.");
    } catch (err) {
      alert(
        "Failed tracking system permissions interface constraints copy block fallback.",
      );
    }
  }

  handleFileImport(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      this.dom.editor.value = evt.target.result;
      this.updateEditorMetadata();
      this.pushUndoStack(evt.target.result);
      this.autoSaveDocument();
    };
    reader.readAsText(file);
  }

  exportTextFile() {
    const payload = this.dom.editor.value;
    const blob = new Blob([payload], { type: "text/plain;charset=utf-8" });
    const dummyAnchor = document.createElement("a");
    dummyAnchor.href = URL.createObjectURL(blob);
    dummyAnchor.download = `ethio-pro-doc-${Date.now()}.txt`;
    dummyAnchor.click();

    this.archiveCurrentTextToHistory(payload);
  }

  archiveCurrentTextToHistory(text) {
    if (!text.trim()) return;
    let history = JSON.parse(localStorage.getItem("ethio_history") || "[]");
    history = [text, ...history.filter((item) => item !== text)].slice(0, 20);
    localStorage.setItem("ethio_history", JSON.stringify(history));
    this.renderHistoryContainer();
  }

  renderHistoryContainer() {
    const history = JSON.parse(localStorage.getItem("ethio_history") || "[]");
    this.dom.historyContainer.innerHTML = "";
    if (history.length === 0) {
      this.dom.historyContainer.innerHTML =
        '<span class="info-text">Saved text fragments appear here...</span>';
      return;
    }
    history.forEach((txt) => {
      const item = document.createElement("div");
      item.className = "history-item";
      item.innerText = txt;
      item.title = "Click to load segment back into workspace";
      item.addEventListener("click", () => {
        this.dom.editor.value = txt;
        this.updateEditorMetadata();
        this.pushUndoStack(txt);
      });
      this.dom.historyContainer.appendChild(item);
    });
  }

  /* =========================================================================
       6. Extended Application Enhancements
       ========================================================================= */
  handleGlyphSearch(query) {
    this.dom.searchResults.innerHTML = "";
    if (!query.trim()) {
      this.dom.searchResults.innerHTML =
        '<span class="info-text">Matches appear instantly here...</span>';
      return;
    }

    const normalizedQuery = query.toLowerCase();
    const matches = [];

    // Scan the phonetic dictionary matrix lookup
    for (const [key, val] of Object.entries(GEEZ_TRANSLIT_MATRIX)) {
      if (key.includes(normalizedQuery) && !matches.includes(val)) {
        matches.push(val);
      }
    }

    if (matches.length === 0) {
      this.dom.searchResults.innerHTML =
        '<span class="info-text">No distinct phonetic character shapes matches.</span>';
      return;
    }

    matches.forEach((ch) => {
      const block = document.createElement("span");
      block.className = "insert-chip";
      block.innerText = ch;
      block.addEventListener("click", () => this.insertAtCursor(ch));
      this.dom.searchResults.appendChild(block);
    });
  }

  toggleFavorite(character) {
    if (this.state.favorites.includes(character)) {
      this.state.favorites = this.state.favorites.filter(
        (c) => c !== character,
      );
    } else {
      this.state.favorites.push(character);
    }
    this.saveSettingsToStorage();
    this.renderFavoritesGrid();
  }

  renderFavoritesGrid() {
    this.dom.favoritesGrid.innerHTML = "";
    if (this.state.favorites.length === 0) {
      this.dom.favoritesGrid.innerHTML =
        '<span class="info-text">Right click table glyphs to pin here.</span>';
      return;
    }
    this.state.favorites.forEach((fav) => {
      const block = document.createElement("span");
      block.className = "insert-chip";
      block.innerText = fav;
      block.title = "Click to insert / Right-click to remove pin definition";
      block.addEventListener("click", () => this.insertAtCursor(fav));
      block.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        this.toggleFavorite(fav);
      });
      this.dom.favoritesGrid.appendChild(block);
    });
  }

  applyTheme(themeName) {
    document.documentElement.setAttribute("data-theme", themeName);
    this.state.theme = themeName;
    this.dom.themeSelector.value = themeName;
    this.saveSettingsToStorage();
  }

  applyFontSize(size) {
    this.state.fontSize = size;
    this.dom.editor.style.fontSize = `${size}px`;
    this.dom.fontSizeVal.innerText = `${size}px`;
    this.dom.fontSizeSlider.value = size;
    this.saveSettingsToStorage();
  }

  refreshStateBadges() {
    this.dom.activeModeBadge.innerText = `${this.state.currentLanguageMode.toUpperCase()} Mode`;
    this.dom.langMode.value = this.state.currentLanguageMode;
  }

  autoSaveDocument() {
    localStorage.setItem("ethio_pro_autosave_buffer", this.dom.editor.value);
  }

  loadSavedDocument() {
    const textBuffer = localStorage.getItem("ethio_pro_autosave_buffer");
    if (textBuffer) {
      this.dom.editor.value = textBuffer;
      this.updateEditorMetadata();
      this.state.undoStack = [textBuffer];
    }
    this.renderHistoryContainer();
    this.renderFavoritesGrid();
  }

  saveSettingsToStorage() {
    localStorage.setItem(
      "ethio_pro_system_config",
      JSON.stringify({
        currentLanguageMode: this.state.currentLanguageMode,
        fontSize: this.state.fontSize,
        soundEnabled: this.state.soundEnabled,
        theme: this.state.theme,
        favorites: this.state.favorites,
      }),
    );
  }

  loadSettingsFromStorage() {
    const savedMeta = localStorage.getItem("ethio_pro_system_config");
    if (savedMeta) {
      try {
        const parsed = JSON.parse(savedMeta);
        this.state = { ...this.state, ...parsed };
      } catch (err) {
        console.error(
          "Error setting configuration elements stack parsing configuration framework overrides reset mapping definitions parameters.",
        );
      }
    }
  }

  shareDocumentLink() {
    const base64Payload = btoa(encodeURIComponent(this.dom.editor.value));
    const absoluteShareableUrl = `${window.location.origin}${window.location.pathname}?doc=${base64Payload}`;
    navigator.clipboard.writeText(absoluteShareableUrl).then(() => {
      alert(
        "Unique tracking sync document snapshot link packed out clean onto system clipboard handles matrix successfully.",
      );
    });
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        alert(
          `Error entering desktop interface presentation window framework blocks: ${err.message}`,
        );
      });
    } else {
      document.exitFullscreen();
    }
  }

  /* Modern Synthesized WebAudio Oscillator Context Platform Click Generator Elements Trigger */
  playClickSound() {
    if (!this.state.soundEnabled) return;
    try {
      if (!this.audioContext) {
        this.audioContext = new (
          window.AudioContext || window.webkitAudioContext
        )();
      }
      const osc = this.audioContext.createOscillator();
      const volumeGain = this.audioContext.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(580, this.audioContext.currentTime); // Crisp natural mechanical response feedback tone
      volumeGain.gain.setValueAtTime(0.04, this.audioContext.currentTime);
      volumeGain.gain.exponentialRampToValueAtTime(
        0.00001,
        this.audioContext.currentTime + 0.06,
      );

      osc.connect(volumeGain);
      volumeGain.connect(this.audioContext.destination);
      osc.start();
      osc.stop(this.audioContext.currentTime + 0.06);
    } catch (soundErr) {
      // Audio context configuration adjustments bypass rules cleanly mapping
    }
  }

  createRippleEffect(event, targetElement) {
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    const rect = targetElement.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

    targetElement.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  }
}

// System Activation Initialization Hooks mapping entry points runtime bootstrap sequence execution pipeline blocks
document.addEventListener("DOMContentLoaded", () => {
  window.EthioKeyboardInstance = new EthioKeyboardApp();
});
