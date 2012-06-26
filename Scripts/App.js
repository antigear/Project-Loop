//
// Variables
//
var application = new App(true);
var components = new Array();


//
// On page loaded do initialization
//
$(document).ready(function () {
	application.Initialize();
});


function App(isDebugMode) {
	//
	// Variables
	//
	var IsDebugMode = isDebugMode;


	//
	// Initialize application
	// 
	this.Initialize = function () {
		Log("Initializing...");

		InitializeUI();
	};

	//
	// Initializes UI
	// @private
	//
	var InitializeUI = function () {
		Log("Initializing UI...");

		InitializeToolboxUI();
	};

	var InitializeToolboxUI = function () {
		Log("Initializing toolbox UI...");

		// Toolbox group hover-rest/hover-clear 
		$(".ToolboxGroup").bind("hover", function (e) {
			// Check if this is call on mouse enter hover
			if (e.type == "mouseenter") {
				// Sets deselected class to all selected toolbox groups
				$(".ToolboxGroup").attr("class", "ToolboxGroup");

				// Select current group
				$(this).attr("class", "ToolboxGroup ToolboxGroupSelected");
			}
		});

		// Toolbox group close functionality
		$(".ToolboxGroupClose").click(function () {
			// Sets deselected class to all selected toolbox groups
			$(".ToolboxGroupSelected").attr("class", "ToolboxGroup");
		});

		$(".ToolboxItem").draggable({
			containment: $("#BlocksModeContentContainer"),
			cursor: "move",
			helper: GetDraggable,
			strat: HandleDragStart,
			drag: HandleDrag,
			stop: HandleDragStop
		});
	};

	var HandleDragStart = function () { };
	var HandleDrag = function () { };
	var HandleDragStop = function () { };

	var GetDraggable = function (event) {
		var draggable = "<img src='Resources/";
		
		switch ($(event.currentTarget).attr("id")) {
			case "ToolboxItemDigitalRead":
				draggable += "Images/Placeholder48.png' />"; break;
			default:
				draggable += "Images/Placeholder48.png' />"; break;
		}

		return draggable;
	};

	var Log = function(message) {
		if (IsDebugMode) {
			console.log(message);
		}
	};
};