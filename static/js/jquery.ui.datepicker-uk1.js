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
	closeText: "u�������",
	prevText: "&#x3C;",
	nextText: "&#x3E;",
	currentText: "u�������",
	monthNames: [ "uѳ����","u�����","u��������","u������","u�������","u�������",
	"u������","u�������","u��������","u�������","u��������","u�������" ],
	monthNamesShort: [ "uѳ�","u���","u���","u��","u���","u���",
	"u���","u���","u���","u���","u���","u���" ],
	dayNames: [ "�����","��������","�������","������","������","�������","������" ],
	dayNamesShort: [ "���","���","��","���","���","���","���" ],
	dayNamesMin: [ "��","��","��","��","��","��","��" ],
	weekHeader: "���",
	dateFormat: "dd.mm.yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.uk );

return datepicker.regional.uk;

} ) );