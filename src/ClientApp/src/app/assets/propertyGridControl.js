/**
 A control that allows to view and edit properties of object (annotation, image processing command, etc).
 @param {object} propertyGrid An instance, of WebPropertyGridJS class, that contains information about object properties.
 @param {string} placeHolderID Identifier of placeholder element.
 @param {object} settings Control settings. Optional parameter.
        Settings have following properties:
            hideNestedElements: {boolean} Indicates that property grid must hide nested elements. Default value true.
            showReadOnlyElements: {boolean} Indicates that property grid must show readonly elements only. Default value true.
            editable: {boolean} Indicates that property grid allows to edit elements. Default value true.
 @param {string} markupContainerId Identifier of container element.
*/
PropertyGridControlJS = function (propertyGrid, placeHolderID, settings) {

  /**
   Gets an identifier of container where control will be placed.
  */
  PropertyGridControlJS.prototype.get_PlaceHolderID = function () {
    return this._placeHolderID;
  }

  /**
   Creates a control markup in a placeholder container.
  */
  PropertyGridControlJS.prototype.createMarkup = function () {
    if (this._rootItem == undefined)
      this.__initializeRootItem();
    // create HTML markup for root item of property grid control
    var markup = this._rootItem.createMarkup();
    this.__initializeMarkup(markup);
  }

  /**
   Clears a control markup in a placeholder container.
  */
  PropertyGridControlJS.prototype.removeMarkup = function () {
    $("#" + this._placeHolderID).html();
    this._rootItem = undefined;
  }

  /**
   Places the specified markup into placeholder container and subscribes to the changes.
  */
  PropertyGridControlJS.prototype.__initializeMarkup = function (markup) {
    // place markup
    $("#" + this._placeHolderID).html(markup);
    // enable the propertyChanged event of root item
    this._rootItem.enablePropertyChangedEvent();
  }

  /**
   Initializes the root item of this control.
  */
  PropertyGridControlJS.prototype.__initializeRootItem = function () {
    // get information about "object" propeties
    var objectPropertyInfo = this._propertyGrid.get_ObjectProperties();
    // create root item of property grid dialog
    this._rootItem = PropertyGridControlItemFactory.create(this._placeHolderID, objectPropertyInfo,
      this._showReadOnlyElements, this._canEdit, this._hideNestedElements);
    // subscribe to the propertyChanged event of root item
    $(this._rootItem).on("propertyChanged", { propertyGridControl: this }, __propertyChanged);
  }

  /**
   Property, of root item, is changed.
   @param {object} event Event data.
   @function @private
  */
  function __propertyChanged(event, data) {
    var propertyGridControl = event.data.propertyGridControl;
    $(propertyGridControl).triggerHandler("propertyChanged", data);
    // retrieve new property value from event parameters
    var propertyValue = data.newValue;
    // get the full property name
    var fullPropertyName = data.fullPropertyName;
    // set the property value
    var setResults = propertyGridControl._propertyGrid.setPropertyValue(fullPropertyName, propertyValue);
    // get the changed properties
    var changedProperties = setResults.changedProperties;
    // if the exception occurred during setting of property value
    if (setResults.exception != undefined)
      // show the exception message
      alert(setResults.exception.message);
    // get the updated HTML markup of root item
    var answer = propertyGridControl._rootItem.updateMarkup(changedProperties);
    // for each updated HTML markup
    for (var i = 0; i < answer.length; i++) {
      // get item identifier
      var id = answer[i].id;
      // get item markup
      var markup = answer[i].markup;
      // get element of property grid dialog
      var element = answer[i].element;
      // if root item is changed
      if (element === propertyGridControl._rootItem) {
        propertyGridControl.__initializeMarkup(markup);
        return;
      }
      // if item identifier is NOT empty
      else {
        var trHead = $("#" + id + "_tr");
        var trContent = $("#" + id + "_tr_content");
        $(markup).insertAfter(trContent);
        $(trHead).remove();
        $(trContent).remove();
        // enables the propertyChanged event of element
        element.enablePropertyChangedEvent();
      }
    }
  }



  // get the containers with specified identifier
  var containers = $("#" + placeHolderID);
  // if container is not found
  if (containers.length === 0)
    throw new Error("Control container with ID '" + placeHolderID + "' is not found.");
  // if there are several containers with the specified identifier
  if (containers.length > 1)
    throw new Error("Page contains more than 1 container with ID '" + placeHolderID + "'.");
  // identifier of control container
  this._placeHolderID = placeHolderID;

  // if "propertyGrid" parameter is NOT an instance of WebPropertyGridJS class
  if (!(propertyGrid instanceof Vintasoft.Shared.WebPropertyGridJS))
    throw new Error("PropertyGrid parameter is NOT an instance of WebPropertyGridJS class.");
  // object that contains information about "object" properties
  this._propertyGrid = propertyGrid;

  // if "settings" parameter is not an object
  if (typeof settings !== "object") {
    // create default settings object
    settings = {
      hideNestedElements: true,
      showReadOnlyElements: true,
      editable: true
    };
  }

  // indicates that property grid must hide nested elements
  this._hideNestedElements = settings.hideNestedElements != undefined ? settings.hideNestedElements : true;

  // indicates that property grid must show readonly elements only
  this._showReadOnlyElements = settings.showReadOnlyElements != undefined ? settings.showReadOnlyElements : true;

  // indicates that property grid allows to edit elements
  this._canEdit = settings.editable != undefined ? settings.editable : true;

  this.__initializeRootItem();
}





/**
 Base class for an item of property grid dialog.
 @param {string} placeHolderId An identifier of container where item will be placed.
 @param {object} item An instance of WebPropertyInfoJS class that contains information about the property of object.
 @param {boolean} showReadOnlyElements Indicates that property grid must show readonly elements only.
 @param {boolean} canEdit Indicates that property grid allows to edit element.
 @public @class
 @constructor
*/
PropertyGridControlItem = function (placeHolderId, item, showReadOnlyElements, canEdit) {

  // ========================= BEGIN CONSTRUCTOR ==========================

  this._placeHolderId = placeHolderId;
  this._item = item;
  this._showReadOnlyElements = showReadOnlyElements;
  this._canEdit = canEdit;

  // ========================= END CONSTRUCTOR ==========================



  // ========================= BEGIN PUBLIC METHODS ======================

  /**
   Creates HTML markup for current element.
  */
  PropertyGridControlItem.prototype.createMarkup = function () {
    throw new Error("NotImplementedException.");
  }

  /**
   Updates HTML markup for changed element.
  */
  PropertyGridControlItem.prototype.updateMarkup = function (changedProperty) {
  }


  /**
   Enables the propertyChanged event of item.
  */
  PropertyGridControlItem.prototype.enablePropertyChangedEvent = function () {
    if (!this._canEdit || this._item.get_ReadOnly())
      return;
    var id = this._item.get_FullName() == "" ? "value" : this._item.get_FullName();
    var that = this;
    $("#" + this._placeHolderId + " #" + id).on("change", function (event) {
      that.onValueChanged(event);
    });
  }

  /**
   HTML object value is changed.
  */
  PropertyGridControlItem.prototype.onValueChanged = function (event) {
    // get HTML object which was changed
    var target = event.target || event.srcElement;
    // get full property name from ID of HTML object
    var fullPropertyName = target.id;

    // get new value
    var value = target.value;
    if (target.type === "checkbox") {
      if (target.checked)
        value = "True";
      else
        value = "False";
    }

    // get root item
    var parent = this;
    while (parent._parent != undefined)
      parent = parent._parent;

    var param = {
      newValue: value,
      fullPropertyName: fullPropertyName,
      htmlElement: target
    };
    // raise the "propertyChanged" event
    $(parent).triggerHandler("propertyChanged", param);
    return false;
  }

  // ========================= END PUBLIC METHODS ======================
}





/**
 Represents a property grid dialog item for numeric value.
 @param {string} placeHolderId An identifier of container where item will be placed.
 @param {object} item An instance of WebPropertyInfoJS class that contains information about the property of object.
 @param {boolean} showReadOnlyElements Indicates that property grid must show readonly elements only.
 @param {boolean} canEdit Indicates that property grid allows to edit element.
 @public @class
 @constructor
*/
PropertyGridControlNumericItem = function (placeHolderId, item, showReadOnlyElements, canEdit) {

  // ========================= BEGIN CONSTRUCTOR ==========================

  PropertyGridControlNumericItem.superclass.constructor.apply(this, arguments);

  // ========================= END CONSTRUCTOR ==========================



  // ========================= BEGIN PUBLIC METHODS ======================

  /**
   Creates HTML markup for current element.
  */
  PropertyGridControlNumericItem.prototype.createMarkup = function () {
    var objectValue = this._item.get_Value();
    var readOnly = this._item.get_ReadOnly();
    var name = this._item.get_ShortName() === "" ? "value" : this._item.get_ShortName();
    var id = this._item.get_FullName() === "" ? "value" : this._item.get_FullName();

    var htmlMarkup = "";

    if (readOnly && !this._showReadOnlyElements)
      return htmlMarkup;

    htmlMarkup += '<tr id="' + id + '_tr"><td>';
    htmlMarkup += '<label>' + name + ':</label> </td><td>';
    htmlMarkup += '<input id="' + id + '" type="number" step="1" value="' + objectValue.toFixed(2) + '"';
    if (readOnly || !this._canEdit)
      htmlMarkup += ' disabled ';
    htmlMarkup += '\></td></tr>';
    return htmlMarkup;
  }

  /**
   Updates HTML markup for changed element.
  */
  PropertyGridControlNumericItem.prototype.updateMarkup = function (changedProperty) {
    var newItem = changedProperty;
    if (this._item.get_FullName() === newItem.get_FullName()) {
      this._item = newItem;
      var id = this._item.get_FullName() == "" ? "value" : this._item.get_FullName();
      $("#" + this._placeHolderId + " #" + id).val(this._item.get_Value().toFixed(2));
    }
  }

  // ========================= END PUBLIC METHODS ======================

}
Vintasoft.Shared.extend(PropertyGridControlNumericItem, PropertyGridControlItem);





/**
 Represents a property grid dialog item for boolean value.
 @param {string} placeHolderId An identifier of container where item will be placed.
 @param {object} item An instance of WebPropertyInfoJS class that contains information about the property of object.
 @param {boolean} showReadOnlyElements Indicates that property grid must show readonly elements only.
 @param {boolean} canEdit Indicates that property grid allows to edit element.
 @public @class
 @constructor
*/
PropertyGridControlBooleanItem = function (placeHolderId, item, showReadOnlyElements, canEdit) {

  // ========================= BEGIN CONSTRUCTOR ==========================

  PropertyGridControlBooleanItem.superclass.constructor.apply(this, arguments);

  // ========================= END CONSTRUCTOR ==========================



  // ========================= BEGIN PUBLIC METHODS ======================

  /**
   Creates HTML markup for current element.
  */
  PropertyGridControlBooleanItem.prototype.createMarkup = function () {
    var objectValue = this._item.get_Value();
    var readOnly = this._item.get_ReadOnly();
    var name = this._item.get_ShortName() === "" ? "value" : this._item.get_ShortName();
    var id = this._item.get_FullName() === "" ? "value" : this._item.get_FullName();

    var htmlMarkup = "";

    if (readOnly && !this._showReadOnlyElements)
      return htmlMarkup;

    htmlMarkup += '<tr id="' + id + '_tr"><td>';
    htmlMarkup += '<label>' + name + ':</label> </td><td>';
    if (this._canEdit) {
      htmlMarkup += '<input id="' + id + '" type="checkbox"';
      if (objectValue === true)
        htmlMarkup += ' checked';
      if (readOnly)
        htmlMarkup += ' disabled ';
    }
    else
      htmlMarkup += '<input id="' + id + '" type="text" value="' + objectValue + '"+ disabled ';
    htmlMarkup += '/></td></tr>';
    return htmlMarkup;
  }

  /**
   Updates HTML markup for changed element.
  */
  PropertyGridControlBooleanItem.prototype.updateMarkup = function (changedProperty) {
    var newItem = changedProperty;
    if (this._item.get_FullName() === newItem.get_FullName()) {
      this._item = newItem;
      var id = this._item.get_FullName() == "" ? "value" : this._item.get_FullName();
      $("#" + this._placeHolderId + " #" + id).prop("checked", this._item.get_Value());
    }
  }

  // ========================= END PUBLIC METHODS ======================

}
Vintasoft.Shared.extend(PropertyGridControlBooleanItem, PropertyGridControlItem);





/**
 Represents a property grid dialog item for a date.
 @param {string} placeHolderId An identifier of container where item will be placed.
 @param {object} item An instance of WebPropertyInfoJS class that contains information about the property of object.
 @param {boolean} showReadOnlyElements Indicates that property grid must show readonly elements only.
 @param {boolean} canEdit Indicates that property grid allows to edit element.
 @public @class
 @constructor
*/
PropertyGridControlDateItem = function (placeHolderId, item, showReadOnlyElements, canEdit) {

  // ========================= BEGIN CONSTRUCTOR ==========================

  PropertyGridControlDateItem.superclass.constructor.apply(this, arguments);

  // ========================= END CONSTRUCTOR ==========================



  // ========================= BEGIN PUBLIC METHODS ======================

  /**
   Creates HTML markup for current element.
  */
  PropertyGridControlDateItem.prototype.createMarkup = function () {
    var objectValue = this._item.get_Value();
    var readOnly = this._item.get_ReadOnly();
    var name = this._item.get_ShortName() === "" ? "value" : this._item.get_ShortName();
    var id = this._item.get_FullName() === "" ? "value" : this._item.get_FullName();

    var htmlMarkup = "";

    if (readOnly && !this._showReadOnlyElements)
      return htmlMarkup;

    htmlMarkup = '<tr id="' + id + '_tr"><td>';
    htmlMarkup += '<label>' + name + ':</label> </td><td>';
    htmlMarkup += '<input id="' + id + '" type="text" value="' + __convertDate(objectValue) + '"';
    if (readOnly || !this._canEdit)
      htmlMarkup += ' disabled ';
    htmlMarkup += 'style="width:95%"/></td></tr>';
    return htmlMarkup;
  }

  /**
   Updates HTML markup for changed element.
  */
  PropertyGridControlDateItem.prototype.updateMarkup = function (changedProperty) {
    var newItem = changedProperty;
    if (this._item.get_FullName() === newItem.get_FullName()) {
      this._item = newItem;
      var id = this._item.get_FullName() == "" ? "value" : this._item.get_FullName();
      $("#" + this._placeHolderId + " #" + id).val(__convertDate(this._item.get_Value()));
    }
  }

  /**
   Converts date to a string.
  */
  function __convertDate(date) {
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    return month + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
  }

  // ========================= END PUBLIC METHODS ======================

}
Vintasoft.Shared.extend(PropertyGridControlDateItem, PropertyGridControlItem);





/**
 Represents a property grid dialog item for an enum.
 @param {string} placeHolderId An identifier of container where item will be placed.
 @param {object} item An instance of WebPropertyInfoJS class that contains information about the property of object.
 @param {boolean} showReadOnlyElements Indicates that property grid must show readonly elements only.
 @param {boolean} canEdit Indicates that property grid allows to edit element.
 @public @class
 @constructor
*/
PropertyGridControlEnumItem = function (placeHolderId, item, showReadOnlyElements, canEdit) {

  // ========================= BEGIN CONSTRUCTOR ==========================

  PropertyGridControlEnumItem.superclass.constructor.apply(this, arguments);

  var TWO_PWR_16_DBL = 1 << 16;
  var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
  this._locked = false;
  this._compositeItems = [];
  this._previousSelectedItems = [];

  // ========================= END CONSTRUCTOR ==========================



  // ========================= BEGIN PUBLIC METHODS ======================

  /**
   Creates HTML markup for current element.
  */
  PropertyGridControlEnumItem.prototype.createMarkup = function () {
    var objectValue = this._item.get_Value();
    var readOnly = this._item.get_ReadOnly();
    var name = this._item.get_ShortName() === "" ? "value" : this._item.get_ShortName();
    var id = this._item.get_FullName() === "" ? "value" : this._item.get_FullName();
    var isFlagged = objectValue.isFlagged()

    var htmlMarkup = "";

    if (readOnly && !this._showReadOnlyElements)
      return htmlMarkup;

    htmlMarkup = '<tr id="' + id + '_tr"><td>';
    htmlMarkup += '<label>' + name + ':</label> </td><td>';

    var enumNames = objectValue.getAllAvailableNames();
    var enumValues = objectValue.getAllAvailableValues();
    var sortedEnumArray = [];
    for (var i = enumNames.length - 1; i >= 0; i--) {
      sortedEnumArray.push({ name: enumNames[i], value: enumValues[i] });
      if (isFlagged && !__isPowerOfTwo(enumValues[i]) && enumValues[i] !== 0)
        this._compositeItems.push(new objectValue.constructor(enumValues[i]));
    }
    sortedEnumArray.sort(__sortFlaggedEnumArray);

    if (enumNames.length != 0) {
      // create a drop down list with enum values
      htmlMarkup += '<select id="' + id + '"';

      if (readOnly || !this._canEdit)
        htmlMarkup += ' disabled';

      if (isFlagged) {
        htmlMarkup += ' multiple="multiple">';

        for (var j = 0; j < sortedEnumArray.length; j++) {
          if (sortedEnumArray[j].value !== 0) {
            htmlMarkup += '<option value="' + sortedEnumArray[j].value + '" selected="selected">' + sortedEnumArray[j].name + '</option>';
          }
        }
      }
      else {
        htmlMarkup += '>';
        for (var j = 0; j < sortedEnumArray.length; j++) {
          if (objectValue.toString() === sortedEnumArray[j].name)
            htmlMarkup += '<option value="' + sortedEnumArray[j].value + '" selected="selected">' + sortedEnumArray[j].name + '</option>';
          else
            htmlMarkup += '<option value="' + sortedEnumArray[j].value + '">' + sortedEnumArray[j].name + '</option>';
        }
      }
      htmlMarkup += '</select>';
    }
    htmlMarkup += '</td></tr>';
    return htmlMarkup;
  }

  /**
   Updates HTML markup for changed element.
  */
  PropertyGridControlEnumItem.prototype.updateMarkup = function (changedProperty) {
    var newItem = changedProperty;
    if (this._item.get_FullName() === newItem.get_FullName()) {
      this._item = newItem;
      var value = this._item.get_Value();
      var id = this._item.get_FullName() == "" ? "value" : this._item.get_FullName();
      if (value.isFlagged()) {
        var selectedValues = __getSelectedValues(this);
        this._locked = true;
        $("#" + this._placeHolderId + " #" + id).multipleSelect("setSelects", selectedValues);
        this._locked = false;
      }
      else {
        $("#" + this._placeHolderId + " #" + id).val(value.valueOf());
      }
    }
  }

  /**
   Enables the propertyChanged event of item.
  */
  PropertyGridControlEnumItem.prototype.enablePropertyChangedEvent = function () {
    var value = this._item.get_Value();
    if (value.isFlagged()) {
      var id = this._item.get_FullName() == "" ? "value" : this._item.get_FullName();
      $("#" + this._placeHolderId + " #" + id).multipleSelect({ width: '100%' });
      var selectedValues = __getSelectedValues(this);
      this._locked = true;
      $("#" + this._placeHolderId + " #" + id).multipleSelect("setSelects", selectedValues);
      this._locked = false;
    }
    PropertyGridControlEnumItem.superclass.enablePropertyChangedEvent.apply(this, arguments);
  }

  /**
   HTML object value is changed.
  */
  PropertyGridControlEnumItem.prototype.onValueChanged = function (event) {
    if (this._locked)
      return;
    var val = this._item.get_Value();
    var id = this._item.get_FullName() == "" ? "value" : this._item.get_FullName();
    var isFlagged = val.isFlagged();
    var newVal;
    if (!isFlagged) {
      var selectedValue = $("#" + this._placeHolderId + " #" + id).val();
      var newVal = new val.constructor(Number(selectedValue));
    }
    else {
      var selectedValues = $("#" + this._placeHolderId + " #" + id).multipleSelect("getSelects");
      if (selectedValues.length === 0) {
        try {
          newVal = new val.constructor(0);
        }
        catch (e) {
          return;
        }
      }
      else {
        newVal = new val.constructor(Number(selectedValues[0]));
        for (var i = 1; i < selectedValues.length; i++)
          newVal = newVal.add(Number(selectedValues[i]));

        if (selectedValues.length < this._previousSelectedItems.length) {
          var differences = [];
          for (var i = 0; i < this._previousSelectedItems.length; i++)
            if (selectedValues.indexOf("" + this._previousSelectedItems[i]) == -1)
              differences.push(this._previousSelectedItems[i]);

          var differenceEnum = new val.constructor(Number(differences[0]));
          for (var i = 1; i < differences.length; i++)
            differenceEnum = differenceEnum.add(Number(differences[i]));

          newVal = newVal.remove(differenceEnum);
        }
      }
    }
    // get root item
    var parent = this;
    while (parent._parent != undefined)
      parent = parent._parent;

    var param = {
      newValue: newVal,
      fullPropertyName: id
    };
    // raise the "propertyChanged" event
    $(parent).triggerHandler("propertyChanged", param);
    return false;
  }

  // ========================= END PUBLIC METHODS ======================


  // ========================= BEGIN PRIVATE METHODS ===================


  /**
   Compare function for {name,value} array.
  */
  function __sortFlaggedEnumArray(first, second) {
    if (first.name == second.name)
      return 0;
    if (first.name < second.name)
      return -1;
    else
      return 1;
  }

  /**
   Returns all enum values for current state of select element.
  */
  function __getSelectedValues(that) {
    var selectedValues = [];
    var value = that._item.get_Value();
    if (value.isFlagged()) {
      for (var i = 0; i < that._compositeItems.length; i++) {
        if (value.equals(that._compositeItems[i])) {
          selectedValues.push(that._compositeItems[i].valueOf());
          value = null;
          break;
        }
        if (value.contains(that._compositeItems[i])) {
          selectedValues.push(that._compositeItems[i].valueOf())
          value.remove(that._compositeItems[i]);
        }
      }
      if (value != null) {
        var valueAsArray = value.toArray();
        for (var i = 0; i < valueAsArray.length; i++)
          selectedValues.push(valueAsArray[i].valueOf());
      }
    }
    that._previousSelectedItems = selectedValues;
    return selectedValues;
  }

  /**
   Determines that specified value is a power of 2.
   @param {number} val Integer numeric value.
   @returns True - if value is a power of 2; otherwise, false.
  */
  function __isPowerOfTwo(val) {
    return (val !== 0) && (__bitwiseAndLarg(val, val - 1) === 0);
  }

  /**
   Returns 32-bit values that represent high and low bits of specified number.
   @param {number} val Number.
   @returns {object} Object that stores 32-bit values that represent high and low bits of specified number.
   @function @private
  */
  function __toLowAndHighBits(val) {
    var low = (val % TWO_PWR_32_DBL) | 0;
    var high = (val / TWO_PWR_32_DBL) | 0;
    return { low: low, high: high };
  }


  /**
   Applies a bitwise AND operation to the two numbers.
   @param {number} val1 The first operand.
   @param {number} val2 The second operand.
   @returns {number} Result.
   @function @private
  */
  function __bitwiseAndLarg(val1, val2) {
    var first = __toLowAndHighBits(val1);
    var second = __toLowAndHighBits(val2);
    return __fromLowAndHighBitsToNumber(first.low & second.low, first.high & second.high);
  }

  /**
   Returns a number represented by high 32-bits and low 32-bits.
   @param {number} Hight 32-bits.
   @param {number} Low 32-bits.
   @returns {number} Number.
   @function @private 
  */
  function __fromLowAndHighBitsToNumber(low, high) {
    return high * TWO_PWR_32_DBL + (low >>> 0);
  }

  // ========================= END PRIVATE METHODS ===================

}
Vintasoft.Shared.extend(PropertyGridControlEnumItem, PropertyGridControlItem);





/**
 Represents a property grid dialog item for a string.
 @param {string} placeHolderId An identifier of container where item will be placed.
 @param {object} item An instance of WebPropertyInfoJS class that contains information about the property of object.
 @param {boolean} showReadOnlyElements Indicates that property grid must show readonly elements only.
 @param {boolean} canEdit Indicates that property grid allows to edit element.
 @public @class
 @constructor
*/
PropertyGridControlStringItem = function (placeHolderId, item, showReadOnlyElements, canEdit) {

  // ========================= BEGIN CONSTRUCTOR ==========================

  PropertyGridControlStringItem.superclass.constructor.apply(this, arguments);

  // ========================= END CONSTRUCTOR ==========================



  // ========================= BEGIN PUBLIC METHODS ======================

  /**
   Creates HTML markup for current element.
  */
  PropertyGridControlStringItem.prototype.createMarkup = function () {
    var objectValue = this._item.get_Value();
    var readOnly = this._item.get_ReadOnly();
    var name = this._item.get_ShortName() === "" ? "value" : this._item.get_ShortName();
    var id = this._item.get_FullName() === "" ? "value" : this._item.get_FullName();

    var htmlMarkup = "";

    if (readOnly && !this._showReadOnlyElements)
      return htmlMarkup;

    htmlMarkup = '<tr id="' + id + '_tr"><td>';
    htmlMarkup += '<label>' + name + ':</label> </td><td>';

    // create a text input
    htmlMarkup += '<input id="' + id + '" type=\'text\' value=\"' + objectValue + '\"  style="width:95%"';
    if (readOnly || !this._canEdit)
      htmlMarkup += " disabled ";
    htmlMarkup += '\></td></tr>';
    return htmlMarkup;
  }

  /**
   Updates HTML markup for changed element.
  */
  PropertyGridControlStringItem.prototype.updateMarkup = function (changedProperty) {
    if (this._item.get_FullName() === changedProperty.get_FullName()) {
      this._item = changedProperty;
      var id = this._item.get_FullName() == "" ? "value" : this._item.get_FullName();
      $("#" + this._placeHolderId + " #" + id).val(this._item.get_Value());
    }
  }

  // ========================= END PUBLIC METHODS ======================
}
Vintasoft.Shared.extend(PropertyGridControlStringItem, PropertyGridControlItem);





/**
 Represents a property grid dialog item for a font family value.
 @param {string} placeHolderId An identifier of container where item will be placed.
 @param {object} item An instance of WebPropertyInfoJS class that contains information about the property of object.
 @param {boolean} showReadOnlyElements Indicates that property grid must show readonly elements only.
 @param {boolean} canEdit Indicates that property grid allows to edit element.
 @public @class
 @constructor
*/
PropertyGridControlFontFamilyItem = function (placeHolderId, item, showReadOnlyElement, canEdit) {

  // ========================= BEGIN CONSTRUCTOR ==========================

  PropertyGridControlFontFamilyItem.superclass.constructor.apply(this, arguments);

  // ========================= END CONSTRUCTOR ==========================



  // ========================= BEGIN PUBLIC METHODS ======================

  /**
   Creates HTML markup for current element.
  */
  PropertyGridControlFontFamilyItem.prototype.createMarkup = function () {
    var value = this._item.get_Value();
    var readOnly = this._item.get_ReadOnly();
    var name = this._item.get_ShortName() === "" ? "value" : this._item.get_ShortName();
    var id = this._item.get_FullName() === "" ? "value" : this._item.get_FullName();

    var htmlMarkup = "";

    if (readOnly && !this._showReadOnlyElements)
      return htmlMarkup;

    htmlMarkup = '<tr id="' + id + '_tr"><td>';
    htmlMarkup += '<label>' + name + ':</label> </td><td>';


    htmlMarkup += '<div style="width:95%; position:relative"><input id="' + id + '" value="' + value + '" style="position:absolute; width:calc(100% - 20px)"';
    if (readOnly || !this._canEdit) {
      htmlMarkup += ' disabled />';
    }
    else {
      htmlMarkup += '/>'

      // create a drop down list with fonts values
      htmlMarkup += '<select id="' + id + '_sel" style="width:100%">';

      var fonts = PropertyGridControlFontFamilyItem.supportedFontFamilies;

      for (var i = 0; i < fonts.length; i++)
        htmlMarkup += '<option value="' + fonts[i] + '">' + fonts[i] + '</option>'
      htmlMarkup += '</select>';
    }
    htmlMarkup += '</div></td></tr>';
    return htmlMarkup;
  }

  /**
   Enables the propertyChanged event of item.
  */
  PropertyGridControlFontFamilyItem.prototype.enablePropertyChangedEvent = function () {
    if (!this._canEdit || this._item.get_ReadOnly())
      return;
    var id = this._item.get_FullName() == "" ? "value" : this._item.get_FullName();
    var that = this;
    $("#" + this._placeHolderId + " #" + id + "_sel").on("change", function (event) {
      // get input element
      var inputElement = $("#" + that._placeHolderId + " #" + id);
      // set value 
      inputElement.val($(this).val());
      // change selected index
      $(this).prop('selectedIndex', -1);
      // call onValueChanged method
      that.onValueChanged({ target: inputElement[0] });
    });
    $("#" + this._placeHolderId + " #" + id).on("change", function (event) {
      that.onValueChanged(event);
    });
  }

  // ========================= END PUBLIC METHODS ======================

}

// List of default font families
PropertyGridControlFontFamilyItem.supportedFontFamilies = ["Arial", "Courier New", "Verdana", "Times New Roman"];
Vintasoft.Shared.extend(PropertyGridControlFontFamilyItem, PropertyGridControlItem);





/**
 Represents a property grid dialog item for an array.
 @param {string} placeHolderId An identifier of container where item will be placed.
 @param {object} item An instance of WebPropertyInfoJS class that contains information about the property of object.
 @param {boolean} showReadOnlyElements Indicates that property grid must show readonly elements only.
 @param {boolean} canEdit Indicates that property grid allows to edit array.
 @param {boolean} canModifyElements Indicates that property grid allows to modify array elements.
 @param {boolean} hideNestedElements Indicates that property grid must hide nested elements.
 @public @class
 @constructor
*/
PropertyGridControlArrayItem = function (placeHolderId, item, showReadOnlyElements, canEdit, canModifyElements, hideNestedElements) {

  // ========================= BEGIN CONSTRUCTOR ==========================

  PropertyGridControlArrayItem.superclass.constructor.apply(this, arguments);

  this._hideNestedElements = hideNestedElements;
  this._selectedElementIndex = -1;
  this._dialogId = Vintasoft.Shared.WebImagingEnviromentJS.guid();
  this._canEdit = canEdit && !item.get_ReadOnly();
  this._canModifyElements = canModifyElements;

  var shortName = this._item.get_ShortName();
  var value = this._item.get_Value();
  if (shortName !== "") {
    this._defaultValue = __getDefaultElementByName(shortName, value);
  }
  else if (value.length !== 0) {
    this._defaultValue = $.extend(true, {}, value[0]);
    for (var prop in this._defaultValue) {
      if (typeof this._defaultValue[prop] === "number")
        this._defaultValue[prop] = 0;
    }
  }
  __initializeChildren(this);

  // ========================= END CONSTRUCTOR ==========================



  // ========================= BEGIN PUBLIC METHODS ======================

  /**
   Creates HTML markup for current element.
  */
  PropertyGridControlArrayItem.prototype.createMarkup = function () {
    var objectValue = this._item.get_Value();
    var readOnly = this._item.get_ReadOnly();
    var name = this._item.get_ShortName() === "" ? "value" : this._item.get_ShortName();
    var id = this._item.get_FullName() === "" ? "value" : this._item.get_FullName();

    var htmlMarkup = "";

    if (readOnly && !this._showReadOnlyElements)
      return htmlMarkup;

    htmlMarkup = '<tr id="' + id + '_tr"><td>';
    htmlMarkup += '<label>' + name + ':</label> </td><td>';

    // create HTML markup
    htmlMarkup = '<tr id="' + id + '_tr"><td>';
    htmlMarkup += '<label>' + name + ':</label> </td><td>';
    // create button
    htmlMarkup += '<input class="arrayButton"  id="' + this._dialogId + 'ArrBtn" type="button" value="' + name + '" style="width:100%" >';
    htmlMarkup += "</td></tr>";

    return htmlMarkup;
  }

  /**
   Updates HTML markup for changed element.
  */
  PropertyGridControlArrayItem.prototype.updateMarkup = function (changedProperty) {
    var answer;
    var changedPropertyName = changedProperty.get_FullName();
    var itemPropertyName = this._item.get_FullName();
    // array is changed 
    if (itemPropertyName === changedPropertyName) {
      __initializeChildren(this);
      __openArrayPropertyDialog(this);
    }
    // array element is changed 
    else {
      // get the splitted name of changed property
      var splittedChangedPropertyName = changedPropertyName.split("_");
      // get the splitted name of current element name
      var splittedItemPropertyName = itemPropertyName.split("_");
      if (splittedChangedPropertyName.length < splittedItemPropertyName.length)
        return;

      // element index
      var index = 0;

      for (; index < splittedItemPropertyName.length; index++) {
        if (splittedChangedPropertyName[index] !== splittedItemPropertyName[index])
          return;
      }

      var childIndex = Number(splittedChangedPropertyName[index]);

      // child element
      var child;
      if (!isNaN(childIndex) && (child = this._children[childIndex]) != undefined) {
        // update markup of child element
        answer = child.updateMarkup(changedProperty);
        // get drop list
        var dropDownListWithElements = document.getElementById(this._dialogId + 'ElementsSelect');
        // drop list and contain options
        if (dropDownListWithElements != undefined && dropDownListWithElements.options.length != 0) {
          // get option with current index
          var option = dropDownListWithElements.options[childIndex];
          // refresh text
          option.innerHTML = __createTextForOptionElement(child._item.get_Value(), childIndex);

          if (childIndex === this._selectedElementIndex) {
            __clearSelection(this)
            if (this._selectedElementIndex == -1)
              dropDownListWithElements.options[0].selected = true;
            else
              dropDownListWithElements.options[this._selectedElementIndex].selected = true;
          }
        }
      }
    }
    return answer;
  }

  /**
   Enables the propertyChanged event of item.
  */
  PropertyGridControlArrayItem.prototype.enablePropertyChangedEvent = function () {
    $("#" + this._dialogId + "ArrBtn.arrayButton").on("click", { obj: this }, __arrayButtonClicked);
  }

  // ========================= END PUBLIC METHODS ======================


  // ========================= BEGIN PRIVATE METHODS ======================

  /**
   Initializes the nested elements.
  */
  function __initializeChildren(obj) {
    obj._children = [];
    var items = obj._item.get_Items();
    for (var i = 0; i < items.length; i++) {
      var child = PropertyGridControlItemFactory.create(obj._dialogId, items[i], true, obj._canModifyElements, obj._hideNestedElements);
      child._parent = obj;
      obj._children.push(child);
    }
  }

  /**
   Creates HTML markup for an array dialog.
  */
  function __createMarkupForArrayDialog(obj) {
    var htmlMarkup = "";
    if ($("#" + obj._dialogId).length === 0) {
      // create a HTML markup for modal dialog
      htmlMarkup += "<div id='" + obj._dialogId + "' class='modalDialog' style='width: 515px;overflow:hidden'>";
      htmlMarkup += "<table><tr><td>";
      htmlMarkup += "<div style='width: auto; float: left; border: 1px ridge black'>";
      htmlMarkup += "<select id='" + obj._dialogId + "ElementsSelect' multiple='multiple' size='10' style='width:250px; border-width: 0px; overflow-x:auto'></select>";
      htmlMarkup += "<div style='font-size: 10px; padding-top: 10px; padding-bottom:10px; padding-left: 35px; border-top:1px ridge black;";
      if (!obj._canEdit)
        htmlMarkup += "background-color:rgba(241,241,241,1)";
      htmlMarkup += "'>";
      htmlMarkup += "<input type='button' id='" + obj._dialogId + "AddElemetToArray' value='Add' />";
      htmlMarkup += "<input type='button' id='" + obj._dialogId + "RemoveElementFromArray' value='Remove' />";
      htmlMarkup += "<input type='button' id='" + obj._dialogId + "UpElementInArray' value='Up' />";
      htmlMarkup += "<input type='button' id='" + obj._dialogId + "DownElementInArray' value='Down' />";
      htmlMarkup += "</td><td>";
      htmlMarkup += "<div id='" + obj._dialogId + "ArrayElementProperty' style='float: left; width: auto; max-height:400px; overflow:auto; margin-left: 5px;'>";
      htmlMarkup += "<table id='" + obj._dialogId + "ArrayElementPropertyTable' class='propertyTable' border='1' style='font-size: 10px; font-family: sans-serif;'/>";
      htmlMarkup += "</div></tr></div>";
    }
    return htmlMarkup;
  }

  /**
   Array button is clicked.
  */
  function __arrayButtonClicked(event) {
    var obj = event.data.obj;
    // get HTML button, which was clicked
    var target = event.target || event.srcElement;
    __createArrayPropertyGridControl(obj, target);
  }

  /**
   Creates a dialog that allows to view and edit array items.
  */
  function __createArrayPropertyGridControl(obj, buttonTarget) {
    // markup
    var markup = __createMarkupForArrayDialog(obj);
    // insert markup after button which clicked
    $(markup).insertAfter(buttonTarget);

    __unscribeFromEvents(obj);
    __subscribeToEvents(obj, obj._canEdit);

    __openArrayPropertyDialog(obj);
  }

  /**
   Subscribes to the button events of array property grid dialog.
  */
  function __subscribeToEvents(obj, canEdit) {
    $("#" + obj._dialogId + "ElementsSelect").on("change", function () { __selectedElementChanged(obj); return false; });
    if (canEdit) {
      $("#" + obj._dialogId + "AddElemetToArray").on("click", function () { __addNewElementToArray(obj); return false; });
      $("#" + obj._dialogId + "RemoveElementFromArray").on("click", function () { __removeElementFromArray(obj); return false; });
      $("#" + obj._dialogId + "UpElementInArray").on("click", function () { __changeElementPositionInArray(obj, -1); return false; });
      $("#" + obj._dialogId + "DownElementInArray").on("click", function () { __changeElementPositionInArray(obj, 1); return false; });
    }
    else
      $("#" + obj._dialogId + " [type=button]").prop("disabled", "disabled");
  }

  /**
   Unsubscribes from the button events of array property grid dialog.
  */
  function __unscribeFromEvents(obj) {
    $("#" + obj._dialogId + "ElementsSelect").off();
    $("#" + obj._dialogId + "AddElemetToArray").off();
    $("#" + obj._dialogId + "RemoveElementFromArray").off();
    $("#" + obj._dialogId + "UpElementInArray").off();
    $("#" + obj._dialogId + "DownElementInArray").off();
  }

  /**
   Array property grid dialog is opened.
  */
  function __openArrayPropertyDialog(obj) {
    // get reference to a drop down list with elements
    var dropDownListWithElements = document.getElementById(obj._dialogId + 'ElementsSelect');
    if (dropDownListWithElements != undefined) {
      // clear the drop down list
      dropDownListWithElements.options.length = 0;
      var array = obj._item.get_Value();
      // for each element
      for (var i = 0; i < array.length; i++) {
        // get the element
        var element = array[i];
        // add the element to the drop down list
        __addElementToDropDownList(dropDownListWithElements, i, element, false);
      }
      __createArrayElementRedactor(obj);
      if (dropDownListWithElements.options.length != 0) {
        // reset information about selected element
        if (obj._selectedElementIndex == -1) {
          __setSelectedArrayElement(0, obj);
          dropDownListWithElements.options[0].selected = true;
        }
        else {
          __setSelectedArrayElement(obj._selectedElementIndex, obj);
          dropDownListWithElements.options[obj._selectedElementIndex].selected = true;
        }
      }
    }
  }

  /**
   Creates a redactor for an array element.
  */
  function __createArrayElementRedactor(obj) {
    // get the default value of array element
    var defaultValue;
    if (typeof obj._defaultValue === "function")
      defaultValue = new obj._defaultValue();
    else
      defaultValue = obj._defaultValue;

    if (defaultValue != undefined) {
      // create a property table for the default array element
      __createArrayElementPropertyTable(obj, obj._canModifyElements, obj._hideNestedElements);

      // clear all inputs and selects
      __clearAllInputsAndSelects(obj);
    }
  }

  /**
   Clears all inputs and selects.
  */
  function __clearAllInputsAndSelects(obj) {
    var inputs = $("#" + obj._dialogId + "ArrayElementPropertyTable input");
    inputs.val("");
    inputs.prop("disabled", "disabled");
    var selects = $("#" + obj._dialogId + "ArrayElementPropertyTable select");
    selects.val("");
    selects.prop("disabled", "disabled");
    var colors = $("#" + obj._dialogId + " .Icon");
    colors.css("display", "none");
  }

  /**
   Adds the element to the drop down list.
  */
  function __addElementToDropDownList(dropDownList, elementIndex, element, elementSelected) {
    // create an "option" element
    var opt = document.createElement("option");
    // set element index as value of "option" element
    opt.value = elementIndex;
    opt.innerHTML = __createTextForOptionElement(element, elementIndex);
    // set the element selection status
    opt.selected = elementSelected;
    // add the "option" element to the drop down list
    dropDownList.appendChild(opt);
  }

  /**
   Selected element (elements) is changed.
  */
  function __selectedElementChanged(obj) {
    // get elements selected in drop down list
    var selectedItems = $('#' + obj._dialogId + 'ElementsSelect :selected');

    // if one element is selected
    if (selectedItems.length == 1) {
      // get element index
      var index = parseInt(selectedItems[0].value);

      // set the selected element
      __setSelectedArrayElement(index, obj);
    }
    // if several elements are selected
    else {
      // clear the selected elements
      __clearSelectedElement(obj);
    }
  }

  /**
   Sets the selected element.
  */
  function __setSelectedArrayElement(index, obj) {
    // save information about selected element
    obj._selectedElementIndex = index;
    // create a property table for the selected array element
    __createArrayElementPropertyTable(obj, obj._canModifyElements, obj._hideNestedElements);
  }

  /**
   Clears the selected element.
  */
  function __clearSelectedElement(obj) {
    // clear all inputs and selects
    __clearAllInputsAndSelects(obj);
    // reset information about selected element
    obj._selectedElementIndex = -1;
  }

  /**
   Adds new element to the element collection.
  */
  function __addNewElementToArray(obj) {
    try {
      // clear the selected elements
      __clearSelection(obj);

      // get new element
      var newElement;
      if (typeof (obj._defaultValue) == "function")
        newElement = new obj._defaultValue();
      else {
        if (typeof (obj._defaultValue) == "object") {
          if (obj._defaultValue.length == undefined)
            newElement = $.extend(true, {}, obj._defaultValue);
          else {
            newElement = [];
            newElement[0] = $.extend(true, {}, obj._defaultValue[0]);
          }
        }
        else
          newElement = obj._defaultValue;
      }

      var newValue = [].concat(obj._item.get_Value());
      newValue.push(newElement);
      // raise the "propertyChanged" event
      __firePropertyChangedEvent(obj, obj._item.get_FullName(), newValue);
    }
    catch (error) {
      alert(error.message);
    }
  }

  /**
   Removes selected elements.
  */
  function __removeElementFromArray(obj) {
    var newSelectedIndex = -1;

    // get elements selected in drop down list
    var selectedItems = $('#' + obj._dialogId + 'ElementsSelect :selected');

    // array with information about indexes of selected elements
    var selectedElementsIndexes = Array();
    // fill the array
    for (var i = 0; i < selectedItems.length; i++) {
      selectedElementsIndexes.push(parseInt(selectedItems[i].value));
    }
    if (selectedElementsIndexes.length != 0)
      newSelectedIndex = selectedElementsIndexes[0] - 1;
    else
      return;

    var newValue = [].concat(obj._item.get_Value());
    for (var i = selectedElementsIndexes.length - 1; i >= 0; i--) {
      newValue.splice(selectedElementsIndexes[i], 1);
    }
    obj._selectedElementIndex = newSelectedIndex;
    // raise the "propertyChanged" event
    __firePropertyChangedEvent(obj, obj._item.get_FullName(), newValue);
  }

  /**
   Moves selected element in specified direction.
  */
  function __changeElementPositionInArray(obj, direction) {
    // get elements selected in drop down list
    var selectedItems = $('#' + obj._dialogId + 'ElementsSelect :selected');
    // if there is selected elements
    if (selectedItems.length != 0) {
      // get the first selected element
      var movableElement = selectedItems[0];
      // get the element index
      var elementIndex = parseInt(movableElement.value);

      var newValue = [].concat(obj._item.get_Value());

      // if the first element must be moved backward
      if (elementIndex === 0 && direction === -1)
        return;

      // if the last element must be moved forward
      if (elementIndex + direction === newValue.length)
        return;

      // swap elements in array
      var temp = newValue[elementIndex];
      newValue[elementIndex] = newValue[elementIndex + direction];
      newValue[elementIndex + direction] = temp;

      obj._selectedElementIndex = elementIndex + direction;

      // raise the "propertyChanged" event
      __firePropertyChangedEvent(obj, obj._item.get_FullName(), newValue);
    }
  }

  /**
   Creates a property table for an array element.
   @param {bool} canEdit Indicates that property grid allows to edit element.
  */
  function __createArrayElementPropertyTable(obj, canEdit, hideNestedElements) {
    var side = $("#" + obj._dialogId + "ArrayElementPropertyTable");
    side.html('');
    var index = obj._selectedElementIndex;
    if (index != -1) {
      var items = obj._item.get_Items();
      if (items[index] != undefined) {

        side.html(obj._children[index].createMarkup());
        // enable the propertyChanged event of root item
        obj._children[index].enablePropertyChangedEvent();
      }
    }
  }

  /**
   Clears the selected elements.
  */
  function __clearSelection(obj) {
    var selectedItems = $('#' + obj._dialogId + 'ElementsSelect :selected');
    for (var i = 0; i < selectedItems.length; i++)
      selectedItems[i].selected = false;
  }

  /**
   Creates an option text element for the specified object.
  */
  function __createTextForOptionElement(element, position) {
    var optText = position + ". ";
    if (typeof element == "object") {
      if (element.length != undefined) {
        optText += "[";
        for (var i = 0; i < element.length; i++) {
          var subElement = element[i];
          optText += "{";
          for (var o in subElement) {
            if (typeof subElement[o] == "number")
              optText += " " + subElement[o].toFixed(2) + " ,";
            else
              optText += " " + subElement[o].toString() + " ,";
          }
          optText = optText.substr(0, optText.length - 1) + "},";
        }
        if (element.length > 0)
          optText = optText.substr(0, optText.length - 1);
        optText += "]";
      }
      else {
        if (element.toString() !== "[object Object]")
          optText += element.toString();
        else {
          optText += "{";
          for (var o in element) {
            if (typeof element[o] == "number")
              optText += " " + element[o].toFixed(2) + " ,";
            else
              optText += " " + element[o].toString() + " ,";
          }
          optText = optText.substr(0, optText.length - 1) + "}";
        }
      }
    }
    else {
      if (typeof element == "number")
        optText += element.toFixed(2)
      else
        optText += element.toString();
    }
    return optText;
  }

  /**
   Fires the propertyChanged events.
  */
  function __firePropertyChangedEvent(obj, propertyName, newValue) {
    var parent = obj;
    while (parent._parent != undefined)
      parent = parent._parent;

    var param = {
      newValue: newValue,
      fullPropertyName: propertyName
    };
    // raise the "propertyChanged" event
    $(parent).triggerHandler("propertyChanged", param);
  }

  /**
   Returns the default value for array element.
  */
  function __getDefaultElementByName(arrayPropertyName, value) {
    if (arrayPropertyName === "Items") {
      if (Vintasoft.Imaging.Annotation != undefined) {
        var annotationNamespace = Vintasoft.Imaging.Annotation.UI;
        var firstValue = value[0];
        if (firstValue != undefined) {
          if ((annotationNamespace != undefined && firstValue instanceof annotationNamespace.WebAnnotationViewJS))
            return function () { };
          if (firstValue.x != undefined && firstValue.y != undefined)
            return { x: 0, y: 0 };
        }
      }
      return { x: 0, y: 0 };
    }
    if (arrayPropertyName === "LeaderPoints" || arrayPropertyName === "Points" || arrayPropertyName === "DestinationPoints")
      return { x: 0, y: 0 };
    if (arrayPropertyName === "Rectangles" || arrayPropertyName === "regions" || arrayPropertyName === "ScanRectangle")
      return { x: 0, y: 0, width: 0, height: 0 };
    if (arrayPropertyName === "halftoneRegions")
      return [{ x: 0, y: 0 }];
    if (arrayPropertyName === "documentRegions")
      return { type: "", x: 0, y: 0, width: 0, height: 0 };
    if (arrayPropertyName === "ColorSpheres")
      return Vintasoft.Imaging.ImageProcessing.WebColorSphereJS;
    if (arrayPropertyName === "ColorReplaceSpheres")
      return Vintasoft.Imaging.ImageProcessing.WebColorReplaceSphereJS;
    return 0;
  }

  // ========================= END PRIVATE METHODS ======================

}
Vintasoft.Shared.extend(PropertyGridControlArrayItem, PropertyGridControlItem);





/**
 Represents a property grid dialog item for an object value.
 @param {string} placeHolderId An identifier of container where item will be placed.
 @param {object} item An instance of WebPropertyInfoJS class that contains information about the property of object.
 @param {boolean} showReadOnlyElements Indicates that property grid must show readonly elements only.
 @param {boolean} canEdit Indicates that property grid allows to edit element.
 @param {boolean} hideNestedElements Indicates that property grid must hide nested elements.
 @public @class
 @constructor
*/
PropertyGridControlObjectItem = function (placeHolderId, item, showReadOnlyElements, canEdit, hideNestedElements) {

  // ========================= BEGIN CONSTRUCTOR ==========================

  PropertyGridControlObjectItem.superclass.constructor.apply(this, arguments);

  this._hideNestedElements = hideNestedElements;

  // determines that element was collapsed
  this._isOpened = false;

  this._children = [];
  // creates a tree from element and element's children
  __createElementTree(this);

  // ========================= END CONSTRUCTOR ==========================



  // ========================= BEGIN PUBLIC METHODS ======================

  /**
   Creates HTML markup for current element.
  */
  PropertyGridControlObjectItem.prototype.createMarkup = function () {
    var htmlMarkup = "";

    var readOnly = this._item.get_ReadOnly();
    var name = this._item.get_ShortName();
    var id = this._item.get_FullName();

    if (readOnly && !this._showReadOnlyElements)
      return htmlMarkup;

    if (name !== "" && isNaN(Number(name))) {
      var labelName = '';
      if (this._hideNestedElements) {
        if (this._isOpened)
          labelName = "- " + name;
        else
          labelName = "+ " + name;
      }
      else
        labelName = name;
      // add header for property
      htmlMarkup = '<tr id="' + id + '_tr" ><td class="spoiler';
      if (this._isOpened)
        htmlMarkup += ' open';
      htmlMarkup += '" colspan="2">';
      htmlMarkup += '<label>' + labelName + ':</label> </td></tr>';
      htmlMarkup += '<tr id="' + id + '_tr_content"><td colspan="2" style="padding-left:10px">';
    }

    htmlMarkup += '<table border="1" class="propertyTable">';
    for (var i = 0; i < this._children.length; i++)
      // create HTML markup using information from WebPropertyGridJS
      htmlMarkup += this._children[i].createMarkup();
    htmlMarkup += '</table>';
    if (name !== "") {
      htmlMarkup += '</td></tr>';
    }
    return htmlMarkup;
  }

  /**
   Updates HTML markup for changed elements.
  */
  PropertyGridControlObjectItem.prototype.updateMarkup = function (changedProperties) {
    var answer = [];
    // if only 1 element is changed
    if (changedProperties.length == undefined)
      // create temporary array
      changedProperties = [changedProperties];

    // for each changed element
    for (var i = 0; i < changedProperties.length; i++) {
      // get new element
      var newItem = changedProperties[i];

      // if current element is changed
      if (this._item.get_FullName() === newItem.get_FullName()) {
        // set new current element
        this._item = newItem;
        // reset element's children
        this._children = [];

        // creates a tree from element and element's children
        __createElementTree(this);

        var newMarkup = this.createMarkup();
        answer.push({ markup: newMarkup, id: this._item.get_FullName(), element: this });
      }
      else {
        for (var j = 0; j < this._children.length; j++) {
          var childAnswer = this._children[j].updateMarkup(newItem);
          if (childAnswer != undefined)
            answer = answer.concat(childAnswer);
        }
      }
    }
    return answer;
  }

  /**
   Enables the propertyChanged event of item.
  */
  PropertyGridControlObjectItem.prototype.enablePropertyChangedEvent = function () {
    if (this._hideNestedElements) {
      var id = this._item.get_FullName();
      if (id !== "") {
        var spoilerElement = $("#" + this._placeHolderId + " #" + id + "_tr .spoiler")[0];
        // collapse elements that have sub elements
        if (!this._isOpened)
          $(spoilerElement).parent().next().hide();
        $(spoilerElement).on('click', { obj: this }, __spoiler_onMouseDown);
      }
    }

    for (var i = 0; i < this._children.length; i++) {
      this._children[i].enablePropertyChangedEvent();
    }
  }

  // ========================= END PUBLIC METHODS ======================


  // ========================= BEGIN PRIVATE METHODS ======================

  /**
   Mouse cursor is down on spoiled element of "property grid UI".
   @function @private
  */
  function __spoiler_onMouseDown(event) {
    var obj = event.data.obj;

    $(this).toggleClass("open");
    // get next table row
    var currentTr = $(this).parent().next();

    var objectId = currentTr[0].id.replace("_tr_content", "");

    // expand the table row
    currentTr.toggle();
    // if table row is visible
    if (currentTr.is(':visible')) {
      // get label
      var children = $(this).children()[0];
      var val = children.innerHTML;
      // change "+" to "-" char
      children.innerHTML = '- ' + val.substring(2);
      obj._isOpened = true;
    }
    else {
      var children = $(this).children()[0];
      var val = children.innerHTML;
      children.innerHTML = '+ ' + val.substring(2);
      obj._isOpened = false;
    }
  }

  /**
   Creates a tree from element and element's children.
  */
  function __createElementTree(obj) {
    var propertyInfos = obj._item.get_Items();
    for (var i = 0; i < propertyInfos.length; i++) {
      var item = propertyInfos[i];
      var child = PropertyGridControlItemFactory.create(obj._placeHolderId, item, obj._showReadOnlyElements, obj._canEdit, obj._hideNestedElements);
      child._parent = obj;
      obj._children.push(child);
    }
  }

  // ========================= END PRIVATE METHODS ======================

}
Vintasoft.Shared.extend(PropertyGridControlObjectItem, PropertyGridControlItem);





/**
 Fabric for elements of property grid dialog.
 @public @class @static
 @constructor
*/
PropertyGridControlItemFactory = function () { }

/**
 Creates the property grid dialog item for the specified WebPropertyInfoJS object.
 @param {string} placeHolderId An identifier of container where item will be placed.
 @param {object} objectPropertyInfo An instance of WebPropertyInfoJS class that contains information about the property of object.
 @param {boolean} showReadOnlyElements Indicates that property grid must show readonly elements only.
 @param {boolean} canEdit Indicates that property grid allows to edit element.
 @param {boolean} hideNestedElements Indicates that property grid must hide nested elements.
 @public @function
*/
PropertyGridControlItemFactory.create = function (placeHolderId, objectPropertyInfo, showReadOnlyElements,
  canEdit, hideNestedElements) {
  var resultObject = [];
  // get information about object properties
  var propertyInfos = objectPropertyInfo.get_Items();

  var objectValue = objectPropertyInfo.get_Value();
  var readOnly = objectPropertyInfo.get_ReadOnly();
  var name = objectPropertyInfo.get_ShortName();
  var id = objectPropertyInfo.get_FullName();

  if (propertyInfos.length !== 0 && !Array.isArray(objectValue)) {
    resultObject = new PropertyGridControlObjectItem(placeHolderId, objectPropertyInfo, showReadOnlyElements, canEdit, hideNestedElements);
  }
  // if property does NOT have nested properties
  else {
    // depending on property value type
    switch (typeof objectValue) {
      case "number":
        // create HTML markup for numeric value
        resultObject = new PropertyGridControlNumericItem(placeHolderId, objectPropertyInfo, showReadOnlyElements, canEdit);
        break;

      case "string":
        switch (name) {
          // if property represents font family
          case "FamilyName":
          case "font-family":
          case "ValueFontFamily":
            resultObject = new PropertyGridControlFontFamilyItem(placeHolderId, objectPropertyInfo, showReadOnlyElements, canEdit);
            break;

          default:
            resultObject = new PropertyGridControlStringItem(placeHolderId, objectPropertyInfo, showReadOnlyElements, canEdit);
            break;
        }
        break;

      case "boolean":
        resultObject = new PropertyGridControlBooleanItem(placeHolderId, objectPropertyInfo, showReadOnlyElements, canEdit);
        break;

      case "object":
        if (objectValue instanceof Vintasoft.Shared.WebEnumItemBaseJS) {
          resultObject = new PropertyGridControlEnumItem(placeHolderId, objectPropertyInfo, showReadOnlyElements, canEdit);
        }
        else if (objectValue instanceof Date) {
          resultObject = new PropertyGridControlDateItem(placeHolderId, objectPropertyInfo, showReadOnlyElements, canEdit);
        }
        else if (objectValue instanceof Array) {
          var canModifyElements = canEdit && !readOnly;
          if (name === "Items") {
            canModifyElements = true;
          }
          resultObject = new PropertyGridControlArrayItem(placeHolderId, objectPropertyInfo, showReadOnlyElements, canEdit, canModifyElements, hideNestedElements);
        }
        else {
          resultObject = new PropertyGridControlObjectItem(placeHolderId, objectPropertyInfo, showReadOnlyElements, canEdit, hideNestedElements);
        }
        break;
    }
  }
  return resultObject;
}
