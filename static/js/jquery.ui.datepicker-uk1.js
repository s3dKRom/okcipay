/* Ukrainian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Maxim Drogobitskiy (maxdao@gmail.com). */
/* Corrected by Igor Milla (igor.fsp.milla@gmail.com). */
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional.uk = {
	closeText: "uЗакрити",
	prevText: "&#x3C;",
	nextText: "&#x3E;",
	currentText: "uСьогодні",
	monthNames: [ "uСічень","uЛютий","uБерезень","uКвітень","uТравень","uЧервень",
	"uЛипень","uСерпень","uВересень","uЖовтень","uЛистопад","uГрудень" ],
	monthNamesShort: [ "uСіч","uЛют","uБер","uКві","uТра","uЧер",
	"uЛип","uСер","uВер","uЖов","uЛис","uГру" ],
	dayNames: [ "неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота" ],
	dayNamesShort: [ "нед","пнд","вів","срд","чтв","птн","сбт" ],
	dayNamesMin: [ "Нд","Пн","Вт","Ср","Чт","Пт","Сб" ],
	weekHeader: "Тиж",
	dateFormat: "dd.mm.yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.uk );

return datepicker.regional.uk;

} ) );