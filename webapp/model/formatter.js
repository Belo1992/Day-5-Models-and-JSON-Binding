sap.ui.define([
    "sap/m/library",
    "sap/ui/model/type/Currency",
    "sap/ui/model/json/JSONModel"
], 
function(mobileLibrary, Currency) {
    "use strict";
    return {
        
        formatStockValue: function(fUnitPrice, iStockLevel, sCurrCode) {
            var oCurrency = new Currency();
            return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");  
        },
        
        formatMail: function(sEid) {
            const oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            return mobileLibrary.URLHelper.normalizeEmail(
                sEid + oBundle.getText("domain"),
                oBundle.getText("mailSubject", [sEid]),
                oBundle.getText("mailBody")
            );
        }
    };
});
