
if ("undefined" != typeof process && "node" === process.release.name) {
  global.localizeGlobalNamespace = global;
} else {
  window.localizeGlobalNamespace = window;
}
localizeGlobalNamespace.Localize = localizeGlobalNamespace.Localize || {};
localizeGlobalNamespace.Localize.localeData = {"firstDayOfWeek":"mon","prefer24HourTimeCycle":true,"narrowDayNames":{"sun":"S","mon":"M","tue":"T","wed":"K","thu":"T","fri":"P","sat":"L"},"wideDayNames":{"sun":"sunnuntaina","mon":"maanantaina","tue":"tiistaina","wed":"keskiviikkona","thu":"torstaina","fri":"perjantaina","sat":"lauantaina"}};