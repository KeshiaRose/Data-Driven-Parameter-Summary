
if ("undefined" != typeof process && "node" === process.release.name) {
  global.localizeGlobalNamespace = global;
} else {
  window.localizeGlobalNamespace = window;
}
localizeGlobalNamespace.Localize = localizeGlobalNamespace.Localize || {};
localizeGlobalNamespace.Localize.localeData = {"firstDayOfWeek":"sat","prefer24HourTimeCycle":true,"narrowDayNames":{"sun":"ح","mon":"ن","tue":"ث","wed":"ر","thu":"خ","fri":"ج","sat":"س"},"wideDayNames":{"sun":"الأحد","mon":"الاثنين","tue":"الثلاثاء","wed":"الأربعاء","thu":"الخميس","fri":"الجمعة","sat":"السبت"}};