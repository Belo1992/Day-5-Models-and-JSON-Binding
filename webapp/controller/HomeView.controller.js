sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sapips/training/jsonbinding/model/formatter"
], (Controller, JSONModel, formatter) => {
    "use strict";

    return Controller.extend("sapips.training.jsonbinding.controller.HomeView", {
        //Set the Formatter
        formatter: formatter,
        onInit() {
            let oEmployeeData  = {
                Eid: "isabelo.m.lagria.jr",
                Enabled: true,
                Address: {
                    Street: "Solitaire Street",                    
                    City: "Cavite",
                    Zip: "4107",
                    Country: "PH"
                },
                SalesAmount: 999999,
                CurrencyCode: "Php"
            };

            // Create and set the JSON model to the view
            let oEmployeeModel   = new JSONModel();
            oEmployeeModel .setData(oEmployeeData );
            this.getView().setModel(oEmployeeModel );
            this.setProductDetailList();                 
        },

        setProductDetailList: function () {
            let oProductDetailListModel = new JSONModel("/model/ProductsModel.json");
            this.getView().setModel(oProductDetailListModel, "oProductDetailListModel");
        },
        
        onSelectProduct: function (oEvent) {
            let oList = oEvent.getSource();
            let oSelectedItem = oList.getSelectedItem();
            let oContext = oSelectedItem.getBindingContext("oProductDetailListModel");
            let sPath = oContext.getPath();
            let sFormProductDetails = this.byId("sFormProductDetails");
            sFormProductDetails.bindElement({
                path: sPath,
                model: "oProductDetailListModel"
            });
        }

    });
});