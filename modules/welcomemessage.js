Hooks.once("init", function() {
    console.log("Initializing Winter King Module")

    game.settings.register("the-winter-king-csb", "firstTimeStart", {
        name: "Force Welcome message",
        hint: "If you check this box, the welcome message will appear in the chat the next time you enter.",
        scope: "client",
        config: true,
        default: false,
        type: Boolean
    })
})

Hooks.once("ready", function() {
	let forzarbienvenida=game.settings.get("the-winter-king-csb", "firstTimeStart");
	let forzarmensaje;
	console.log(forzarmensaje);
	if (forzarbienvenida==true) {
		forzarmensaje=true;
	}
	let versactual=game.modules.get("the-winter-king-csb").version;
	let userisGM=game.user.isGM;
	if (userisGM) {
		if(!game.user.getFlag("the-winter-king-csb", "welcomeMessage") || forzarmensaje==true) {
			console.log('lalala');
			let buttonId=Date.now();
			let buttonId2=Date.now()+2;
			let msg='<h1>Welcome to the Winter King module</h1><p>Import the compendiums to start using the module</p><button id='+buttonId2+' >Import the Compendiums</button><p>Remember: You can add bonus dice, or substract penalty dice, by pressing the shift key and clicking on the Capability.</p><button id='+buttonId+' >Go to the Tutorial</button>';
			ChatMessage.create({
        		speaker: {alias:"Mordred"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/the-winter-king-csb')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection = game.packs.get("the-winter-king-csb.objecttemplates");
						console.log(collection);
						console.log(button2);
						let folderident=''
						if (game.folders.getName("Object_Templates")) {
							folderident=game.folders.getName("Object_Templates").id;
						}
						let docs = collection.importAll({folderId: folderident, folderName: "Object_Templates", keepId: true});
						setTimeout(() => {
							let collection2 = game.packs.get("the-winter-king-csb.actortemplates");
							let folderident2=''
							if (game.folders.getName("Actor_Templates")) {
								folderident2=game.folders.getName("Actor_Templates").id;
							}
							let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Actor_Templates", keepId: true});
						}, 500);
						game.user.setFlag("the-winter-king-csb", "welcomeMessage", true);
						game.user.setFlag("the-winter-king-csb", "lastVersion", game.modules.get("the-winter-king-csb").version);
						ui.notifications.info(game.i18n.localize("Templates imported. Reloading world in 6sec..."), {permanent: true});
						window.setTimeout(window.location.reload.bind(window.location), 7000);
					});
				}
				}, 100);
			});
			game.settings.set("custom-system-builder", "initFormula", "isnpc==1 ? iniciativa:iniciativa+0.01");
			game.settings.set("the-winter-king-csb", "firstTimeStart", false);
		} else if (versactual!=game.user.getFlag("the-winter-king-csb", "lastVersion")) {
			let buttonId=Date.now();
			let buttonId2=Date.now()+2;
			let msg='<h1>Welcome to the Winter King module</h1><p>The module has been updated since the last time you used it. Import the compendiums so you have the last Actor and Object Templates versions.</p><button id='+buttonId2+' >Import the Compendiums</button><p>Remember: You can add bonus dice, or substract penalty dice, by pressing the shift key and clicking on the Capability.</p><button id='+buttonId+' >Go to the Tutorial</button>';
			ChatMessage.create({
					speaker: {alias:"Mordred"},
					content: msg,
			   whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/the-winter-king-csb')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection = game.packs.get("the-winter-king-csb.objecttemplates");
						console.log(collection);
						console.log(button2);
						let folderident=''
						if (game.folders.getName("Object_Templates")) {
							folderident=game.folders.getName("Object_Templates").id;
						}
						let docs = collection.importAll({folderId: folderident, folderName: "Object_Templates", keepId: true});
						setTimeout(() => {
							let collection2 = game.packs.get("the-winter-king-csb.actortemplates");
							let folderident2=''
							if (game.folders.getName("Actor_Templates")) {
								folderident2=game.folders.getName("Actor_Templates").id;
							}
							let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Actor_Templates", keepId: true});
						}, 500);
						game.user.setFlag("the-winter-king-csb", "lastVersion", game.modules.get("the-winter-king-csb").version);
						ui.notifications.info(game.i18n.localize("Templates imported. Reloading world in 6sec..."), {permanent: true});
						window.setTimeout(window.location.reload.bind(window.location), 7000);
					});
				}
				}, 500);
			});
      game.settings.set("custom-system-builder", "initFormula", "isnpc==1 ? iniciativa:iniciativa+0.01");
		}
	} else if (!game.user.getFlag("the-winter-king-csb", "welcomeMessage") || forzarmensaje==true) {
		let buttonId=Date.now();
		let msg = '<h1>Welcome to the Winter King module</h1><p>Remember: You can add bonus dice, or substract penalty dice, by pressing the shift key and clicking on the Capability.</p><button id='+buttonId+' >Go to the Tutorial</button>'
		ChatMessage.create({
        		speaker: {alias:"Mordred"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
		}).then(() => {
			setTimeout(() => {
			function openInNewTab(url) {
				const win = window.open(url, '_blank');
				win.focus();
			}
			const button = document.getElementById(buttonId);
			if (button) {
				button.addEventListener("click",function () {
					openInNewTab('https://github.com/pedrobaringo/the-winter-king-csb');
				});
			}
			}, 100);
		});
		game.user.setFlag("the-winter-king-csb", "welcomeMessage", true);
		game.settings.set("the-winter-king-csb", "firstTimeStart", false);
	}
})